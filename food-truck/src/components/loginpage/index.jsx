import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Login from './login';
import SignUp from './signup';

const Container = styled.section`

    display: flex;
    justify-content: center;

    .MuiPaper-elevation1 {

        width: 95vw;
        margin-top: 5vh;
        
    }

`;


const LoginPage = (props) => {

    return(<Container>
        <Paper>
            <Login />
            <SignUp />
        </Paper>
    </Container>);
};


export default LoginPage; 