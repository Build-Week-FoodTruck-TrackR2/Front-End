import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import truckImage from '../../images/delivery-truck-png-7.png';

const Container = styled.section`


.MuiPaper-root {

    width: 100%;

    button {
        
        width: 45vw;
        min-width: 45vw;
        #image {

            
            height: 22vh;
            min-height: 22vh;
        }

    }

    p {

        min-width: 45vw;
        text-align: center;
        color: white;
    }

    .MuiCardContent-root{

        background: lightblue;
        margin: 0;
    }

}

`;


const TruckCard = (props) => {

    return(
        <Container>
            <Card>
                <CardActionArea>
                    <CardMedia id="image" image={truckImage} alt="picture"/>
                    <CardContent>
                        <Typography noWrap="true">{props.truck.truckName}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
        
    );
}

export default TruckCard;