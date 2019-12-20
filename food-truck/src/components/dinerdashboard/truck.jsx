import React from 'react';
import styled from 'styled-components';

const Container = styled.li`

    display: flex;
    border: 2px solid black;
    
    

    img {

        flex-basis: 33.3%;
        max-width: 33%;
        max-height: 33%;

        
    }

    
        h2{

            font-weight: bold;
            
        }

    div{

        flex-basis:33.3%;
        max-width: 10%;
        display: flex;
        flex-flow: column;
        padding: 3% 5% 3% 3% ;


        p:nth-child(2) {

            margin-top 40%;
        }

        p:nth-child(3) {

            margin-top: 25%;
        }
    }

    #buttonDiv {

        display: inline;

        button {

            float: right;
            position: relative;
            top: 80%;
            left: 275%;
            width: 23vw;

        }
    }

`;

const Truck = (props) => {

    return (<Container>
        <img src={props.info.img}></img>

        
        <div>
            <h2>{props.info.name}</h2>
            <p>{props.info.cusine}</p>
            <p>{props.info.distance}</p>
        </div>
        <div id="buttonDiv">
            <button > View Menu</button>
        </div>
    </Container>);
};

export default Truck;