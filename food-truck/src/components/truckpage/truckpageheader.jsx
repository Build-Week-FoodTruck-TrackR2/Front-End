import React, { useState } from 'react';
import styled from 'styled-components';
import standInTruck from '../../images/delivery-truck-png-7.png';
import { Typography, Divider, Box, Icon } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import  Rating from '@material-ui/lab/Rating';


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

    const [value, setValue] = useState(3);
    const [favorite, setFavorite] = useState(false);

    return(<Container>
        <img src={standInTruck} alt="truck"></img>
        <Typography>Truck Name</Typography>
        <div>
            <Typography>Cuisine Type</Typography>
            <Typography>Location</Typography>
        </div>
        <Divider variant="middle" />
        <div>
            {favorite ? (<FavoriteBorderIcon onClick={() => setFavorite(!favorite)} style={{ color: "red"}}></FavoriteBorderIcon>
            ) : ( 
            <FavoriteIcon onClick={() => setFavorite(!favorite)} style={{ color: "red"}} ></FavoriteIcon>)}
            
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Avg. Rating</Typography>
                <Rating
                name="read-only" value={value} readOnly />
            </Box>
        </div>
        <Divider id="bottom-border" />
        
    </Container>);
}

export default TruckPageHeader;