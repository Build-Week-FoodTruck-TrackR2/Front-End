import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import truckImage from '../../images/delivery-truck-png-7.png';
import { Link } from 'react-router-dom';
import CancelTwoTone from '@material-ui/icons/CancelTwoTone';
import DeleteTruck from './deletetruck';
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

    #delete-button {

        margin-left: 87%;
        margin-top: 1%;
    }

}

`;


const TruckCard = (props) => {



    return(
        <section>
            
            <Link id="truck-page-link" to={`/truckpage/${props.truck.id}`}>
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
            </Link>
        </section>
        
    );
}

export default TruckCard;