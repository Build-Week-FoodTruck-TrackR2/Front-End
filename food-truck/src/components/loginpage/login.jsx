import React from 'react';
import styled from 'styled-components';
import { Formik, Field, ErrorMessage, Form, useField } from 'formik';
import { TextField, Button, AppBar, Typography, Toolbar, Radio, FormControlLabel} from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../../actions';


const Container = styled.section`

    header {

        div {
            display: flex;
            justify-content: center;
        }
    }

    form {

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin-top: 10%;

        button {

            margin: 5% 0;
        }

        div {

            margin 2.5% 0;
        }
       
    }
    

`;


const Login = (props) => {

    const handleLogin = (data) => {

        props.login(data);
        
          
    }

    return(<Container>
         <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>Login</Typography>
                                </Toolbar>
                            </AppBar>
       <Formik initialValues ={{}}
       onSubmit={ (data, { setSubmitting }) => {
            
            handleLogin(data);

            console.log(props.state);

            console.log(localStorage.getItem('state'));
          

            console.log(localStorage.getItem('state'));
            if(localStorage.getItem('state').currentUser.hasOwnProperty('id')) {
            localStorage.getItem('role') === "Operator" ? (
            props.history.push("/operatordashboard") 
            ):(
            props.history.push("/dinerdashboard"))
            }}}>
       {({values, errors, isSubmitting}) =>( 
           <Form>
               <Field placeholder="username" atype="input" name="username" as={TextField} />
               <Field placeholder="password" type="password" name="password" as={TextField}/>
               <Button type="submit">Login</Button>
               
           </Form>
       )} 
         
       </Formik>
    </Container>);
};

const mapStateToProps = state => {

    return {
        state: state
    };
}

export default connect(mapStateToProps, { login })(withRouter(Login)); 