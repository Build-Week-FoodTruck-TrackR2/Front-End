import React, { useState } from 'react';
import styled from 'styled-components';
import { Paper, AppBar, Toolbar, Typography } from '@material-ui/core';
import InitialForm from './operator/initial';
import TruckForm from './operator/truckform';
import MenuItemForm from './operator/menuitemform';
import AddTruck from './operator/addtruck';
import AddMenu from './operator/addmenu';
import { connect } from 'react-redux';
import { addOperator } from '../../actions'

const Container = styled.section`

    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .MuiPaper-elevation1 {

        width: 90%;
        height: 90vh;
        margin-top: 5vh;

        #footer {

            position: absolute;
            bottom: 5%;
            width: 90vw;
        }
    }

    section {

        display: flex; 
        justify-content: center;
        
        
        form {

            margin-top: 20%;
        }
    }

`;

const SignupOperator = (props) => {

   const [step, setStep] = useState(1);
   const [formValues, setFormValues] = useState({
       firstName : "",
       lastName:  "",
       username: "",
       password: "",
       email: "",
       businessName: "",
       truckNumber: -1,
       items: -1,
       trucks: []});

   const nextStep = (stepNumber) => {

        console.log(stepNumber);
        setStep(stepNumber);
    }

    const submit = () => {

        const formattedForm = { 
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            username: formValues.username,
            password: formValues.password,
            email: formValues.email,
            businessName: formValues.businessName,
            trucks: formValues.trucks
        };

        props.addOperator(formattedForm);
    }

    
    switch(step) {

        case 1:
            return(
                    <Container>
                        <Paper>
                            <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>Initial Form</Typography>
                                </Toolbar>
                            </AppBar>
                            <InitialForm step={nextStep} submit={setFormValues} form={formValues}/>
                            <AppBar id="footer" position="static" elevation="0" ><Toolbar></Toolbar></AppBar>
                        </Paper>
                    </Container>
            );

        case 2:
            return(
                <Container>
                     <Paper>
                            <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>Add A Truck</Typography>
                                </Toolbar>
                            </AppBar>
                            <TruckForm step={nextStep} submit={setFormValues} form={formValues}/>
                            <AppBar id="footer" position="static" elevation="0" ><Toolbar></Toolbar></AppBar>
                     </Paper>
                </Container>
            );
        case 3:
            return(
                <Container>
                        <Paper>
                            <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>Add A Menu Item</Typography>
                                </Toolbar>
                            </AppBar>
                            <MenuItemForm step={nextStep} submit={setFormValues} form={formValues}/>
                            <AppBar id="footer" position="static" elevation="0" ><Toolbar></Toolbar></AppBar>
                        </Paper>
                </Container>
            );
        case 4: 
                return(
                    <Container>
                        <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>{formValues.truckNumber === -1 ? `Add A Truck?` : `Add Another Truck?` }</Typography>
                                </Toolbar>
                            </AppBar>
                        <AddTruck step={nextStep} form={formValues} truckNumber={setFormValues} submit={submit} />
                        
                    </Container>
                );
        case 5: 
              return(
                  <Container>
                      <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>{formValues.items === -1 ? `Add A Menu Item?` : `Add Another Menu Item?`}</Typography>
                                </Toolbar>
                            </AppBar>
                      <AddMenu step={nextStep} form={formValues} item={setFormValues} />
                      
                  </Container>
              )
       default: 
            return(
                <Container>
                    <p>how did you get here?</p>
                </Container>
            );
    }
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps, { addOperator })(SignupOperator);