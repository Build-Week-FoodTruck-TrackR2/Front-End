import Axios from 'axios';


export const ADD_OPERATOR = "ADD_OPERATOR";
export const ADD_DINER = "ADD_DINER";

export const addOperator = formData => {

    console.log(formData);

    return {

        type: ADD_OPERATOR,
        payload: formData
    };
};

export const addDiner = formData => {

    console.log(formData);

    return {

        type: ADD_DINER,
        payload: formData
    };
};