import React from 'react';
import styled from 'styled-components';
import { Paper, AppBar, Toolbar } from '@material-ui/core';
import Login from './login';
import SignUp from './signup';

const Container = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;

    .MuiPaper-elevation1 {

        width: 95vw;
        height: 95vh;
        margin-top: 2.5vh;

        #footer {

            position: absolute;
            bottom: 2.5vh;
            width: 95vw;
        }
        

        
    }

`;

const LoginPage = (props) => {


    return(<Container>
        <Paper>
            <Login />
            <SignUp />
            <AppBar id="footer" position="static"><Toolbar></Toolbar></AppBar>
        </Paper>
        
    </Container>);
};


export default LoginPage; 
