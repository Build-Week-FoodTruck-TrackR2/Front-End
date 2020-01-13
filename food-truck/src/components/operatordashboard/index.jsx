import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Typography, Toolbar, AppBar} from "@material-ui/core";
import truckImage from "../../images/delivery-truck-png-7.png";
import TruckCard from './truckcard';
import DeleteTruck from './deletetruck';
import CancelTwoTone from '@material-ui/icons/CancelTwoTone';
import EditUserInformation from './edituserinformation';
import {signOut } from '../../actions';
const Container = styled.section`

    .MuiAppBar-root {

        div {
            display: flex;
            justify-content: space-around;

            * {
                flex-basis: 100%;
            }

            button {

                width: 100%;

                .MuiButton-label {

                    white-space: nowrap;
                    display: block;
                    font-size: 80%;

                }
            }

            div {

                display: flex;
                justify-content: space-between;

                *{
                    flex-basis: 50%;
                }
            }
        }
    }

    div {

        display: flex;
        margin-top: 5%;
        justify-content: space-around;
        flex-wrap: wrap;

        * {
            flex-basis: 50%;
        }

        a {

            text-decoration: none;
        }
          
        .MuiSvgIcon-root {

            position: relative;
            left: 40%;
            z-index: 5;
        }

    }

`;

const OperatorDashboard = (props) => {

    // const [count, setCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [openEditMenu, setOpenEditMenu] = React.useState(false);

    
    const handleEditClickOpen = (e) => { 

       
        setOpenEditMenu(true);
    }

    const handleEditClose = value => {
        setOpenEditMenu(false);
        
    }
    
    const handleClickOpen = (e) => { 

       
        setOpen(true);
    }

    const handleClose = value => {
        setOpen(false);
        
    }

    const handleSignOut = () => {

        props.signOut();
        localStorage.clear();
    }

    return(
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography noWrap={true}>Operator Dashboard</Typography>
                    <div>
                        <Button size="small" onClick={handleEditClickOpen}>Edit User Information</Button>
                        <Button size="small" onClick={handleSignOut}>Sign Out</Button> 
                        <EditUserInformation open={openEditMenu} onClose={handleEditClose} />
                    </div>
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

export default connect(mapStateToProps, { signOut })(OperatorDashboard); 