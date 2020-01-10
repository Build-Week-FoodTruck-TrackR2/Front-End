import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Typography, Toolbar, AppBar} from "@material-ui/core";
import truckImage from "../../images/delivery-truck-png-7.png";
import TruckCard from './truckcard';
import DeleteTruck from './deletetruck';
import CancelTwoTone from '@material-ui/icons/CancelTwoTone';
import { update } from '../../actions';
const Container = styled.section`

    div {

        display: flex;
        margin-top: 5%;
        justify-content: space-around;
        flex-wrap: wrap;

        * {
            flex-basis: 45%;
        }

          
        .MuiSvgIcon-root {

            position: relative;
            left: 40%;
            z-index: 5;
        }

    }

`;

const OperatorDashboard = (props) => {

    const [count, setCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => { 

       
        setOpen(true);
    }

    const handleClose = value => {
        setOpen(false);
        
    }
    
    useEffect(() => {
        props.update();
        console.log(props.trucks);
        if (count === 0)
            setCount(1);
        
    },[count, open])

    return(
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Operator Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <div>
                {props.trucks && props.trucks.map(truck => {
                    return (<div>
                    <DeleteTruck id={truck.id} open={open} onClose={handleClose} />
                    <CancelTwoTone onClick={handleClickOpen} id="delete-button" />    
                    <TruckCard truck={truck} image={truckImage}/> </ div>)
                })}
            </div>
            
        </Container>
    );
};

const mapStateToProps = state => {

    console.log(state.currentUser.trucks);

    return {

        trucks: state.currentUser.trucks
    }
};

export default connect(mapStateToProps, { update })(OperatorDashboard); 