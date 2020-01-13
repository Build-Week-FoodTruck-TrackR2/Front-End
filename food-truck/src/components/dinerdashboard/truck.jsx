import React from 'react';
import styled from 'styled-components';
import standInImage from '../../images/delivery-truck-png-7.png'
import { Typography, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Container = styled.li`

    display: flex;
   
    img {

        flex-basis: 25%;
        max-width: 33%;
        max-height: 33%;

        
    }

    div {

        flex-basis: 75%;
        display: flex;
        flex-flow: column;
        

        p {

            padding: 2.5%;
        }

        .MuiDivider-root {

            height: 1%;
            width: 95%;
        }
    }

    #buttonDiv {

        position: absolute;
        

        button {

            float: right;
            position: relative;
            top: 10vh;
            left: 320%;
            width: 23vw;

            span {

                white-space: nowrap
                
            }

        }
    }

    .MuiDivider-root {

        height: 1%;
        width: 100vw;
    }

`;

const Truck = (props) => {



    return (<Container>
        <img src={standInImage}></img>

        
        <div>
            <Typography noWrap={true}>{props.info.truckName}</Typography>
            <Divider variant="middle"/>
            <div>
                <Typography>{`Serves: ${props.info.cuisineType}`}</Typography>
                <Typography>{props.info.distance}</Typography>
            </div>
        </div>
        <div id="buttonDiv">
            <Link  to={`/truckpage/${props.info.id}`}>
            <Button>View Menu</Button>
            </Link>
        </div>
        
    </Container>);
};

export default Truck;