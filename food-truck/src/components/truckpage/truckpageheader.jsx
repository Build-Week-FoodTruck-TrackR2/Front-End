import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import standInTruck from '../../images/delivery-truck-png-7.png';
import { Typography, Divider, Box, Icon, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import EditTruck from './editForms/edittruck';
import { connect } from 'react-redux';
import { changeFavorite } from '../../actions';



const Container = styled.section`

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {

        max-width: 33vw;
        max-height: 33vw;
        min-width: 33vw;
        min-height: 33vw;
    }

    .MuiDivider-middle{

        width: 66%;
        margin-top: 5%;
    }

    .MuiButtonBase-root {

        margin: 5% 0;
    }

    div {

        margin-top: 5%;
        display: flex;
        justify-content: space-around;
        width: 80%;

        svg { 

            margin-top: 8%;
        }
    }

    #bottom-border{

        width: 100%;
        margin-top: 5%;
    }

`;


const TruckPageHeader = (props) => {

    
    const [open, setOpen] = useState(false);

    React.useEffect(() => {

        const computeRating = () => {

            
            if(props.truck.hasOwnProperty('reviews')){
                console.log(props.truck);
                let averageRating = 0
        
                do
                    if(typeof(props.truck.reviews) !== 'undefined') {
        
                        console.log('here');
                        props.truck.reviews.forEach( review => {
                            averageRating += review.rating;
                        });
        
                        averageRating = averageRating/props.truck.reviews.length;
                        console.log(averageRating);
                        
                    }
                while(typeof(props.truck.reviews) === 'undefined')
        
                return averageRating;
            }
            else
                return 0;

    
        }

        setValue(computeRating());

    }, [props.truck.reviews]);

   


    const [value, setValue] = useState(1);
   
    const handleClickOpen = () => { 
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        
    }

    const clickFavorite = () => {

        const formattedData = {
            truckId: props.truck.id,
            favorite: !props.favorite
        }
        props.changeFavorite(formattedData);
        
    }

    return(
    <Container>
        
        <img src={standInTruck} alt="truck"></img>
        <Typography>{props.truck.truckName}</Typography>
        {props.currentUser.Role === 'Operator' && 
            <Button onClick={handleClickOpen}>Edit Truck</Button>
        }
        <EditTruck open={open} onClose={handleClose} />
        <div>
            <Typography>{`Serves: ${props.truck.cuisineType}`}</Typography>
            <Typography>Location</Typography>
        </div>
        <Divider variant="middle" />
        <div>
            { props.currentUser.Role === 'Diner' &&

                (!props.favorite ? (<FavoriteBorderIcon onClick={clickFavorite} style={{ color: "red"}}></FavoriteBorderIcon>
                ) : ( 
                <FavoriteIcon onClick={clickFavorite} style={{ color: "red"}} ></FavoriteIcon>)) 
            }
            
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Avg. Rating</Typography>
                <Rating
                name="read-only" value={value} readOnly />
            </Box>
        </div>
        <Divider id="bottom-border" />
        
    </Container>);
}

const mapStateToProps = state => {

    let truck = {};
    const id = window.location.pathname.split('/')[2];
    let favorite = false

    
    if (typeof(state.currentUser) !== 'undefined' && state.currentUser.Role === "Operator") {
        
        let trucks = state.currentUser.trucks.filter( truck => {
            return truck.id === id
        });
        truck = trucks[0];
    }
    else if(typeof(state.trucks) !== 'undefined' && typeof(state.currentUser.favoriteTrucks) !== 'undefined'){
        
        let trucks = state.trucks.filter( truck => {
            return truck.id === id
        });
     
        truck = trucks[0];

        let favorited = state.currentUser.favoriteTrucks.filter( truck => {
            return truck === window.location.pathname.split('/')[2];
        });

        if(favorited.length > 0)
            favorite = true;
    }

    console.log(favorite);
   
    return {

        favorite: favorite,
        truck: truck,
        currentUser: state.currentUser,
        state: state
    }
}

export default connect(mapStateToProps, { changeFavorite })(TruckPageHeader);