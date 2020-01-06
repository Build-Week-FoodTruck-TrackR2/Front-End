import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import foodPicture from '../../../images/foodArt.jpg';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { TextField, Button, AppBar, Toolbar } from '@material-ui/core'
import * as yup from 'yup'



const Container = styled.section`

    width:  95%;
    display: flex;
    flex-flow: column;
    align-items: center;

    form {


        display: flex;
        flex-flow: column;
        align-items: center;        

        * {

            margin: 1% 0;
            
            
        }

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
        
        .description {
            
            border: 1px solid rgba(0,0,0,.4);
            padding: 8%;
            margin-top: 5%;
            max-height: 25vh;
            
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

        button {

            margin: 5% 0;
        }

    }

`;

const validationSchema = yup.object().shape({
    itemName: yup
    .string()
    .required()
    .max(15) ,
    catagory: yup
    .string()
    .required()
    .max(30) ,
    

})

const MenuItemForm = (props) => {

    
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
                  <img src={ file.preview || foodPicture} onClick={clickFile} id="image" alt="truck" />
                  <div id="overlay">Add Image</div>
                  <input name="file" type="file" ref={useFile} style={{display: "none"}} onChange={getFile}/>
              </div>

      </form>
      <Formik initialValues={{}} 
      onSubmit={ (data, {setSubmitting}) => {

          setSubmitting(true);

          console.log(data);
          
          let itemsList = props.form.trucks[props.form.truckNumber].foodItems;
          let truckList = props.form.trucks;

          console.log(props.form);
          console.log(truckList);
        
          itemsList.hasOwnProperty(data.catagory) ? 

          (itemsList[data.catagory] = [...itemsList[data.catagory], {
                                      itemName: data.itemName,
                                      description: data.description,
                                      price: data.price,
                                      image: file.raw
                                      }]
          ) : (
          
          itemsList[data.catagory] = [{
                                      itemName: data.itemName,
                                      description: data.description,
                                      price: data.price,
                                      image: file.raw
          }])        

          truckList[props.form.truckNumber].foodItems = itemsList;
          
          props.submit({...props.form,
                       trucks: truckList})
          setSubmitting(false);
          props.step(5);
      }}
      validationSchema={validationSchema}>
      {({values, errors, isSubmitting}) => (
          <Form>
              <Field placeholder="Item Name" name="itemName" type="input" as={TextField}></Field>
              <ErrorMessage name="itemName" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Description" inputProps={{maxLength: 120}} name="description" type="input"  multiline={true} rows={7} rowsMax={7} className="description" as={TextField}></Field>
              <ErrorMessage name="description" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Catagory" name="catagory" type="input" as={TextField}></Field>
              <ErrorMessage name="catagory" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Price" name="price" type="number" as={TextField}></Field>
              <ErrorMessage name="price" render={ msg => <div className="error">{msg}</div>} />

              <Button type="submit" disabled={!!Object.keys(errors).length || isSubmitting || false}>Submit</Button>
            
          </Form>
      )}
      </Formik>
     
    </Container>);
};

export default MenuItemForm;