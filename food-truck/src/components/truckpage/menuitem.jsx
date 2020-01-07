import React from 'react';
import styled from 'styled-components';
import standInTruck from '../../images/delivery-truck-png-7.png';
import { Typography, Divider, List, AppBar, Toolbar, Rating, Box } from '@material-ui/core';
import MenuList from './menulist';



const Container = styled.section`

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;

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

    const foodReal = { Pizza: [{name: "Lorem, ipsum." , 
description: "orem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore sequi dolor tenetur, dolorum exercitationem?" , 
price: 1.12, 
catagory: "pizza" }, 
{name: "Lorem, ipsu.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore sequi dolor tenetur, dolorum exercitationem?",
    price: 12.12, 
    catagory: "pizza" },
    {name: "Lrem, ipsum.",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore sequi dolor tenetur, dolorum exercitationem?", 
        price: 45.65, catagory: 
        "pizza" },
        {name: "Lorem, ipsu.",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore sequi dolor tenetur, dolorum exercitationem?",
            price: .99, catagory: 
            "pizza" }],
                   cats: [{name: "Lrem, ipsum.",
                   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore sequi dolor tenetur, dolorum exercitationem?",
                   price: 12.10, catagory: 
                   "cats" }, {name: "Lorem, ipum.",
                       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore sequi dolor tenetur, dolorum exercitationem?" , 
                       price: 15.61, catagory: 
                       "cats" }] };

        const keys = Object.keys(foodReal);

      

    return(
    <Container>

        <AppBar elevation="0" position="static" style={{width : '100vw'}}>
                        <Toolbar style={{margin: "0", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                            <Typography>Menu Items</Typography>
                        </Toolbar>
        </AppBar>
        <Divider style={{backgroundColor: "darkblue", margin: ".1%"}} />
        
        { keys.map( catagory => {

           return (<>
                    <AppBar elevation="0" position="static" style={{width : '100vw', }}>
                        <Toolbar style={{margin: "0", display: "flex", justifyContent: "flex-start"}}>
                            <Typography style={{marginBottom: "2%"}}>{catagory}</Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <MenuList items={foodReal[catagory]} />
                    </List>
                    {/* <Divider variant="middle" /> */}
                   </>)
        })}
         
       
        
    </Container>);
}

export default MenuItems;