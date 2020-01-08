import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Typography, Toolbar, AppBar} from "@material-ui/core";
import truckImage from "../../images/delivery-truck-png-7.png";
import TruckCard from './truckcard';
const Container = styled.section`

    div {

        display: flex;
        margin-top: 5%;
        justify-content: space-around;
        flex-wrap: wrap;

        * {
            flex-basis: 45%;
        }
    }

`;

const OperatorDashboard = (props) => {

    
    const trucks = [];

    return(
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Operator Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <div>
                {props.state.currentUser.trucks.map(truck => {
                    return <TruckCard truck={truck} image={truckImage} />
                })}
            </div>
            
        </Container>
    );
};

const mapStateToProps = state => {

    return {

        state : state
    }
};

export default connect(mapStateToProps, {})(OperatorDashboard); 