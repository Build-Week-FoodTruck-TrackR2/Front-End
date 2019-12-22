import React from 'react';
import styled from 'styled-components';
import Truck from './truck';
const Container = styled.section`

`;

const TruckList = (props) => {

    const trucks = [ {name: "asadasdas", 
                     cusine: "sadasdasds", 
                     distance: "sasdasd",
                     img: "https://www.flychicago.com/ORDFoodTrucks/assets/images/food-truck_1.png"},
                     {name: "asadasdas", 
                     cusine: "sadasdasds", 
                     distance: "sasdasd",
                     img: "https://www.flychicago.com/ORDFoodTrucks/assets/images/food-truck_1.png"},
                     {name: "asadasdas", 
                     cusine: "sadasdasds", 
                     distance: "sasdasd",
                     img: "https://www.flychicago.com/ORDFoodTrucks/assets/images/food-truck_1.png"},
                     {name: "asadasdas", 
                     cusine: "sadasadddddddsdaaaaaasdasds", 
                     distance: "sasdasd",
                     img: "https://www.flychicago.com/ORDFoodTrucks/assets/images/food-truck_1.png"}]

    return (<Container>
        <ul>
            {trucks.map( truck => {
                return <Truck info={truck} />
            })}
        </ul>
    </Container>);
};

export default TruckList;