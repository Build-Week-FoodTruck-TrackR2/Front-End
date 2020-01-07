import React from 'react';
import styled from 'styled-components';
import ReviewList from './reviewslist';
import { Typography, AppBar, Toolbar, Divider } from '@material-ui/core';

const Container = styled.section`


`;


const Review = (props) => {

    
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