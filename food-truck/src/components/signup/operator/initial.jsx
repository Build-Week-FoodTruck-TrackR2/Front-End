import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, AppBar, Toolbar } from '@material-ui/core';
import * as yup from 'yup';



const Container = styled.section`

    width:  95%;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;

    form {


        display: flex;
        flex-flow: column;
        align-items: center;       

        * {

            margin: 1% 0;
        }

        button {

            margin: 5% 0;
        }

        .MuiInput-underline {

            &:after {

                border-bottom: 2px solid red;
            }
        }

        .error {

            color: red;
            font-size: 50%;
            align-self: flex-start;
            
        }

    }

    

`;

const validationSchema = yup.object().shape({
    firstName: yup
    .string()
    .required()
    .max(15) ,
    lastName: yup
    .string()
    .required()
    .max(30) ,
    username: yup 
    .string()
    .required()
    .max(15) ,
    businessName: yup
    .string()
    .required(),
    password: yup
    .string()
    .required(),
    email: yup
    .string()
    .required(),


})

const InitialForm = (props) => {

    return (
    <Container>
      <Formik initialValues={{}} 
      onSubmit={ (data, {setSubmitting}) => {

          setSubmitting(true);

          props.submit({...props.form,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        username: data.username,
                        password: data.password,
                        businessName: data.businessName,
                        email: data.email});

          setSubmitting(false);
          props.step(4);
      }}
      validationSchema={validationSchema}>
      {({values, errors, isSubmitting}) => (
          <Form>
              <Field placeholder="First Name" name="firstName" type="input" as={TextField}></Field>
              <ErrorMessage name="firstName" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Last Name" name="lastName" type="input" as={TextField}></Field>
              <ErrorMessage name="lastName" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Username" name="username" type="input" as={TextField}></Field>
              <ErrorMessage name="username" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Password" name="password" type="password" as={TextField}></Field>
              <ErrorMessage name="password" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Retype Password" name="password2" type="password" as={TextField}></Field>
              <ErrorMessage name="password2" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="E-Mail" name="email" type="email" as={TextField}></Field>
              <ErrorMessage name="email" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Bussiness Name" name="businessName" type="input" as={TextField}></Field>
              <ErrorMessage name="businessName" render={ msg => <div className="error">{msg}</div>} />

              <Button type="submit" disabled={ !!Object.keys(errors).length || isSubmitting || false}>Submit</Button>
   
          </Form>
      )}
      </Formik>
      
    </Container>);
};

export default InitialForm;