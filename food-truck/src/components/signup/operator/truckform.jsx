import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { TextField, Button, AppBar, Toolbar } from '@material-ui/core'
import * as yup from 'yup'
import truckImage from '../../../images/delivery-truck-png-7.png';
import uuid from 'react-uuid';



const Container = styled.section`

    width:  95%;
    display: flex;
    flex-flow: column;
    align-items: center;

    form {

        display: flex;
        flex-flow: column;
        align-items: center;    
        
        #overlay-container {

            position: relative;
            width: 33vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);

            #image {

                max-width: 33vw;
                min-width: 33vw;
                max-height: 33vw;
                min-height: 33vw;
                border: 1px solid black;
            }

            #overlay {
                position: absolute; 
                bottom: 2%; 
                left: 0;
                right: 0;
                background: rgb(0, 0, 0);
                background: rgba(0, 0, 0, 0.5); /* Black see-through */
                color: #f1f1f1; 
                width: 33vw;
                max-width: 33vw;
                transition: .5s ease;
                opacity:0;
                color: white;
                font-size: 100%;
                padding: 6% .5% 3% 0;
                text-align: center;
                overflow: hidden;
              }

            &:hover #overlay {

                    opacity: 1;
                
            }
        }

        * {

            margin: 1% 0;
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
            margin-left: 22%;
        }

    }

`;

const validationSchema = yup.object().shape({
    cuisineType: yup
    .string()
    .required()
    .max(15) ,
    truckName: yup
    .string()
    .required()
    .max(30) ,
    

})

const TruckForm = (props) => {


    const [file, setFile] = useState({});
    const useFile = useRef();

    const clickFile = () => {

        useFile.current.click();
    }

    const getFile = event => {

        const file = new Blob([event.currentTarget.files[0]], {type: event.currentTarget.files[0].type})
        console.log(file);
        setFile({
            preview: URL.createObjectURL(file),
            raw: file,
        })
    }



    return (
    <Container>
    
      <form>
              
                <div id="overlay-container">
                    <img src={ file.preview || truckImage} onClick={clickFile} id="image" alt="truck" />
                    <div id="overlay">Add Image</div>
                    <input name="file" type="file" ref={useFile} style={{display: "none"}} onChange={getFile}/>
                </div>

      </form>
      <Formik initialValues={{}} 
      onSubmit={ (data, {setSubmitting}) => {

          setSubmitting(true);

          console.log(file);
          props.submit({...props.form, 
                        trucks: [...props.form.trucks, {
                            truckName: data.truckName,
                            id: uuid(),
                            longitude: data.longitude,
                            latitude: data.latitude,
                            cuisineType: data.cuisineType,
                            image: file.raw,
                            catagorys: {},
                        }]})
          setSubmitting(false);
          props.step(5);
      }}
      validationSchema={validationSchema}>
      {({values, errors, isSubmitting}) => (
          <Form>

              

              <Field placeholder="Truck Name" name="truckName" type="input" as={TextField}></Field>
              <ErrorMessage name="truckName" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Longitude" name="longitude" type="number" as={TextField}></Field>
              <ErrorMessage name="longitude" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Latitude" name="latitude" type="number" as={TextField}></Field>
              <ErrorMessage name="latitude" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Cuisine Type" name="cuisineType" type="input" as={TextField}></Field>
              <ErrorMessage name="cuisineType" render={ msg => <div className="error">{msg}</div>} />

              <Button type="submit" disabled={!!Object.keys(errors).length || isSubmitting || false}>Submit</Button>
           
          </Form>
      )}
      </Formik>
     
    </Container>);
};

export default TruckForm;