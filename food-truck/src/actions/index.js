import Axios from 'axios';
import { currentOperatorTest } from "../testdata";


export const ADD_OPERATOR = "ADD_OPERATOR";
export const ADD_DINER = "ADD_DINER";
export const EDIT_TRUCK = "EDIT_TRUCK";
export const EDIT_MENU_ITEM = "EDIT_MENU_ITEM";
export const ADD_REVIEW = "ADD_REVIEW";
export const LOGIN = "LOGIN";
export const REMEMBER_STATE_ON_REFRESH = "REMEMBER_STATE_ON_REFRESH";
export const UPDATE ="UPDATE";
export const ADD_MENU_ITEM =" ADD_MENU_ITEM";
export const DELETE_TRUCK = "DELETE_TRUCK";


export const update = _ => {

    return {
        type: UPDATE
    };
}

export const rememberStateOnRefresh = state => {

    

    return {

        type: REMEMBER_STATE_ON_REFRESH,
        payload: state
    };
}

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

export const deleteTruck = id => {

    return {

        type: DELETE_TRUCK,
        payload: id
    }
}

export const editTruck = formData => {

    console.log(formData);

    return {
        type: EDIT_TRUCK,
        payload: formData
    }
}

export const editMenuItem = formData => {

    console.log(formData);

    return {
        type: EDIT_MENU_ITEM,
        payload: formData
    }
}

export const addMenuItem = formData => {

    return {
        type: ADD_MENU_ITEM,
        payload: formData
    }
}

export const addReview = formData => {

    console.log(formData);

    return {
        type: ADD_REVIEW,
        payload: formData
    }
}

export const login = _ => {
 
    console.log(currentOperatorTest);
    
    
    
    return {
        type: LOGIN,
        payload: currentOperatorTest
    }
};