import React from 'react';
import styled from 'styled-components';
import ReviewList from './reviewslist';
import AddReview from './editForms/addreview';
import { Typography, AppBar, Toolbar, Divider, Button } from '@material-ui/core';

const Container = styled.section`

    .MuiButtonBase-root {

        margin-left: 55%;
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

    
const testData = [{ user: "Lorem, ipsum.", 
reviewDate: Date.now(), 
reviewContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In 
doloremque cupiditate incidunt reprehenderit aliquam eaque voluptatum expedita 
ipsum voluptas. Assumenda aliquam nostrum minima hic esse incidunt aliquid maiores?
 Expedita aut eos labore maxime obcaecati ipsum fugit doloremque in maiores at.`, 
rating: 5},
 { user: "Lorem, ipsum.", 
 reviewDate: Date.now(), 
 reviewContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In 
 doloremque cupiditate incidunt reprehenderit aliquam eaque voluptatum expedita 
 ipsum voluptas. Assumenda aliquam nostrum minima hic esse incidunt aliquid maiores?
  Expedita aut eos labore maxime obcaecati ipsum fugit doloremque in maiores at.`,  
 rating: 4},
  { user: "Lorem, ipsum.", 
  reviewDate: Date.now(), 
  reviewContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In 
  doloremque cupiditate incidunt reprehenderit aliquam eaque voluptatum expedita 
  ipsum voluptas. Assumenda aliquam nostrum minima hic esse incidunt aliquid maiores?
   Expedita aut eos labore maxime obcaecati ipsum fugit doloremque in maiores at.`, 
  rating: 3 },
   { user: "Lorem, ipsum.", 
   reviewDate: Date.now(), 
   reviewContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In 
   doloremque cupiditate incidunt reprehenderit aliquam eaque voluptatum expedita 
   ipsum voluptas. Assumenda aliquam nostrum minima hic esse incidunt aliquid maiores?
    Expedita aut eos labore maxime obcaecati ipsum fugit doloremque in maiores at.`, 
   rating: 2 },
    { user: "Lorem, ipsum.", 
    reviewDate: Date.now(), 
    reviewContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In 
    doloremque cupiditate incidunt reprehenderit aliquam eaque voluptatum expedita 
    ipsum voluptas. Assumenda aliquam nostrum minima hic esse incidunt aliquid maiores?
     Expedita aut eos labore maxime obcaecati ipsum fugit doloremque in maiores at.`, 
    rating: 2 }];



    return(<Container>
     <AppBar position="static">
         <Toolbar>
             <Typography>Reviews</Typography>
             <Button onClick={handleClickOpen}>Add Review</Button>
             <AddReview open={open} onClose={handleClose}/>
         </Toolbar>
     </AppBar>
     {testData.map( review => {
        return (<>
        <ReviewList review={review} />
        <Divider />
        </>)
     })}
        
    </Container>);
}

export default Review;