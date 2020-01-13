import React from 'react';
import styled from 'styled-components';
import ReviewList from './reviewslist';
import AddReview from './editForms/addreview';
import { Typography, AppBar, Toolbar, Divider, Button } from '@material-ui/core';
import { connect } from 'react-redux';

const Container = styled.section`

    header {

        div {

            display: flex;
            justify-content: flex-start;

            * {
                flex-basis: 50%;
            }
        }
    }

`;


const Review = (props) => {

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => { 
        setOpen(true);
    }

    const handleClose = value => {
        setOpen(false);
        
    }

    return(<Container>
     <AppBar position="static">
         <Toolbar style={{justifyContent: "flex-start"}}>
             <Typography style={{flexBasis: "50%"}}>Reviews</Typography>
             {typeof(props.currentUser) !== 'undefined' && props.currentUser.Role === 'Diner' && <Button style={{flexBasis: "50%"}} onClick={handleClickOpen}>Add Review</Button>}
             <AddReview open={open} onClose={handleClose}/>
         </Toolbar>
     </AppBar>
     { typeof(props.reviews) !== 'undefined' && props.reviews.map( review => {
        return (<>
        <ReviewList review={review} />
        <Divider />
        </>)
     })}
        
    </Container>);
}

const mapStateTOProps = state => {

    const truckId = window.location.pathname.split('/')[2];
    let reviews = [];
    let truck = [];

    if(state.currentUser.Role === 'Operator' && typeof(state.currentUser.trucks !== 'undefined')){

        truck = state.currentUser.trucks.filter( truck => {
            return truck.id === truckId
        });

        reviews = truck[0].reviews

        return {

            reviews: reviews
        }
    }
    else if(typeof(state.trucks) !== 'undefined'){

        truck = state.trucks.filter( truck => {
            return truck.id === truckId
        });

        reviews = truck[0].reviews;

        return {

            reviews: reviews,
            currentUser: state.currentUser
        }

    }
}

export default connect(mapStateTOProps, {})(Review);