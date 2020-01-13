import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button, AppBar, Toolbar} from '@material-ui/core';
import EditUserInformation from './edituserinformation';
import { connect } from 'react-redux';
import { signOut } from '../../actions';


const Container = styled.section`

    p, button {

        line-height: 150%;
    }

    header {

        

        div {

            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 2%;

            *{
                flex-basis: 100%;
            }

            div {

                display: flex;

                *{
                    flex-basis: 50%;
                }

                button {

                    .MuiButton-label {

                        white-space: nowrap;
                    }
                }
            }
        }
    }

`;

const DinerDashboardHeader = (props) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => { 
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        
    }


    const handleSignOut = _ => {

        props.signOut();
        localStorage.clear();

    };

    return (<Container>

       <AppBar position="static">
           <Toolbar>
               <Typography>Diner Dashboard</Typography>
               <div>
                    <Button onClick={handleSignOut}>Sign Out</Button>
                    <Button onClick={handleClickOpen}>Edit User Information</Button>
                    <EditUserInformation open={open} onClose={handleClose} />
               </div>
           </Toolbar>
       </AppBar>
        
    </Container>);
};

export default connect(null , { signOut})(DinerDashboardHeader);