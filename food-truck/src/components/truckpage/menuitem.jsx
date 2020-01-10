import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography, Divider, List, AppBar, Toolbar, Button} from '@material-ui/core';
import MenuList from './menulist';
import { connect } from 'react-redux';
import { update } from '../../actions';
import AddMenuItem from './editForms/addmenuitem';
 


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

    const [count, setCount] = useState(0);
    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        props.update();
        console.log(props);
        if (count < 3)
            setCount(count +1);
        console.log(props);
    },[count]);

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
                        <Toolbar style={{margin: "0", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                            <Typography>Menu Items</Typography>
                            <Button onClick={handleClickOpen}>Add Item</Button>
                            <AddMenuItem open={open} onClose={handleClose}/>
                        </Toolbar>
        </AppBar>
        <Divider style={{backgroundColor: "darkblue", margin: ".1%"}} />
        
        {count === 3 && props.catagoryKeys.map( singleCatagory => {

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
    
    if (state.currentUser.hasOwnProperty('trucks')) {
        const truckId = window.location.pathname.split('/')[2];
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
    

    console.log(truckForMap);
   

    return {

        state: state,
        truck: truckForMap,
        catagoryKeys: catagoryKeys
    }
}

export default connect(mapStateToProps, { update })(MenuItems);