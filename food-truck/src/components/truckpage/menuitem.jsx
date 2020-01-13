import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography, Divider, List, AppBar, Toolbar, Button} from '@material-ui/core';
import MenuList from './menulist';
import { connect } from 'react-redux';
import AddMenuItem from './editForms/addmenuitem';
 


const Container = styled.section`

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    header {

        width: 100vw;

        div {

            display: flex;
            justify-content: space-between;
            width: 100%;

            * {

                flex-basis: 50%;
            }

            button {

                flex-basis: 50%;
            }
        }
    }

    img {

        max-width: 33vw;
        max-height: 33vw;
        min-width: 33vw;
        min-height: 33vw;
    }

    .MuiDivider-middle{

        width: 66%;
        margin-top: 5%;
    }

    div {

        margin-top: 5%;
        display: flex;
        justify-content: space-around;
        width: 80%;
    }

    #bottom-border{

        width: 100%;
        margin-top: 5%;
    }

`;






const MenuItems = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => { 

        e.stopPropagation();
        setOpen(true);
    }

    const handleClose = value => {
        setOpen(false);
        
    }
    
    return(
    <Container>

        <AppBar elevation="0" position="static" style={{width : '100vw'}}>
                        <Toolbar>
                            <Typography style={{flexBasis: "50%"}}>Menu Items</Typography>
                            {props.state.currentUser.Role === 'Operator' && 
                                <Button onClick={handleClickOpen} style={{flexBasis: "50%"}}>Add Item</Button> 
                            }
                            <AddMenuItem open={open} onClose={handleClose}/>
                        </Toolbar>
        </AppBar>
        <Divider variant="middle"/>
        <Divider variant="middle"/>
        
        
        {props.catagoryKeys.map( singleCatagory => {

           return (<>
                    <AppBar elevation="0" position="static" style={{width : '100vw', }}>
                        <Toolbar style={{margin: "0", display: "flex", justifyContent: "flex-start"}}>
                            <Typography >{singleCatagory}</Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <MenuList catagory={singleCatagory} items={props.truck.catagorys[singleCatagory]} />
                    </List>
                    {/* <Divider variant="middle" /> */}
                   </>)
        })}
         
       
        
    </Container>);
}

const mapStateToProps = state => {

    
        let truck = false;
        let truckForMap = false;
        let catagoryKeys = [];
        const truckId = window.location.pathname.split('/')[2];

    if(state.currentUser.Role === 'Operator'){
        
        if (state.currentUser.hasOwnProperty('trucks')) {
        
        truck = state.currentUser.trucks.filter( truck => {
            return truck.id === truckId
        });
        console.log(truck);
        }

        if (truck !== false)  {
            
            truckForMap = truck[0];
            catagoryKeys = Object.keys(truck[0].catagorys);
            console.log(truck[0].catagorys);
        }
    }
    else if (typeof(state.trucks) !== 'undefined'){

        truck = state.trucks.filter( truck => {
            return truck.id === truckId
        });

        if (truck !== false)  {
            
            truckForMap = truck[0];
            catagoryKeys = Object.keys(truck[0].catagorys);
            console.log(truck[0].catagorys);
        }
    }
    

    console.log(truckForMap);
   

    return {

        state: state,
        truck: truckForMap,
        catagoryKeys: catagoryKeys
    }
}

export default connect(mapStateToProps, {})(MenuItems);