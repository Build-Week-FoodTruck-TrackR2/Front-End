import React from 'react';
import styled from 'styled-components';
import { Formik, Field, ErrorMessage, Form, useField } from 'formik';
import { TextField, Button, AppBar, Typography, Toolbar, Radio, FormControlLabel} from '@material-ui/core';
import { withRouter } from 'react-router';

const MyRadio = ({label, ...props }) => {

    const [field] = useField(props);
    
    return (
        <FormControlLabel {...field} control={<Radio />} label={label} />
    );
}


const Container = styled.section`

  
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


const SignUp = (props) => {

    return(<Container>
       <Formik initialValues ={{}}
       onSubmit={ (data, { setSubmitting }) => {
           console.log(data);
           
           data.type === "operator" ? (
               props.history.push("/opsignup")
           ) : (
               props.history.push("/dinersignup")
           )
       }} >
       {({values, errors, isSubmitting}) =>( 
           <Form>
              
               <div>
                    <Field label="operator" name="type" type="radio" value="operator" as={MyRadio} />
                    <Field label="diner" name="type" type="radio" value="diner" as={MyRadio} />
               </div>
               <Button type="submit">Sign Up</Button>
               
           </Form>
       )} 
         
       </Formik>
    
    </Container>);
};


export default withRouter(SignUp); 