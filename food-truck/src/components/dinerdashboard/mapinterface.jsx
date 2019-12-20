import React from 'react';
import styled from 'styled-components';

const Container = styled.section`

    display: flex; 
    flex-flow: column;
    align-items: center;
    border: 2px solid black;

    * {
        margin-top: 3%;
    }

    button {

        margin-top: 5.5%;
    }

    div {

        margin-bottom: 2%;
    }

`;

const MapInterface = (props) => {

    return (<Container>
        <button>Show Favorites</button>
        <input 
        placeholder="filter type of food"></input>

        <div>
            <label>Filter By Rating</label>
            <select>
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Start</option>
            </select>
        </div>

    </Container>);
};

export default MapInterface;