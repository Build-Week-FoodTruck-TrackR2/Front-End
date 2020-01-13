import Axios from 'axios';
import { currentOperatorTest } from "../testdata";


export const ADD_OPERATOR = "ADD_OPERATOR";
export const ADD_DINER = "ADD_DINER";
export const EDIT_TRUCK = "EDIT_TRUCK";
export const EDIT_MENU_ITEM = "EDIT_MENU_ITEM";
export const ADD_REVIEW = "ADD_REVIEW";
export const OPERATOR_LOGIN = "OPERATOR_LOGIN";
export const DINER_LOGIN = "DINER_LOGIN";
export const REMEMBER_STATE_ON_REFRESH = "REMEMBER_STATE_ON_REFRESH";
export const ADD_MENU_ITEM =" ADD_MENU_ITEM";
export const DELETE_TRUCK = "DELETE_TRUCK";
export const SIGN_OUT = "SIGN_OUT";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";
export const EDIT_DINER_INFORMATION = "EDIT_DINER_INFORMATION";
export const EDIT_OPERATOR_INFORMATION = "EDIT_OPERATOR_INFORMATION";



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

    const operators = currentOperatorTest.filter(user => {
        return user.hasOwnProperty("trucks");
    });

    let trucks = [];
            operators.forEach( operator => {
                Array.prototype.push.apply(trucks, operator.trucks);
            });

            const formattedData = {
                operators: operators,
                trucks: trucks,
                currentUser: formData
            };

    return {

        type: ADD_DINER,
        payload: formattedData
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

export const editUserInformation = formData => {

    if(JSON.parse(localStorage.getItem('role')) === 'Diner'){

        return {
            type: EDIT_DINER_INFORMATION,
            payload: formData
        }
    }
    else{

        return{
            type: EDIT_OPERATOR_INFORMATION,
            payload: formData
        }
    }
}

export const addMenuItem = formData => {

    return {
        type: ADD_MENU_ITEM,
        payload: formData
    }
}

export const addReview = formData => {

    return {
        type: ADD_REVIEW,
        payload: formData
    }
}

export const changeFavorite = data => {

    return{
        type: CHANGE_FAVORITE,
        payload: data
    }
}

export const signOut = _ => {

    return{
        type: SIGN_OUT
    }
}

export const login = data => {

    console.log(data);
 
    const user = currentOperatorTest.filter( user => {
        return user.username === data.username 
    });

    console.log(user[0]);

    

    if(user[0].password === data.password){
        console.log("inside");
        if(user.Role === "Operator"){

            console.log('user.role');
            localStorage.setItem("role", JSON.stringify(user[0].Role));
            localStorage.setItem('state', JSON.stringify(user[0]));

            return {
                type: OPERATOR_LOGIN,
                payload: user[0]
            }

        }
        else{


            const operators = currentOperatorTest.filter(user => {
                return user.hasOwnProperty("trucks");
            });

            console.log(operators);

            let trucks = [];
            operators.forEach( operator => {
                Array.prototype.push.apply(trucks, operator.trucks);
            });

            const formattedData = {
                operators: operators,
                trucks: trucks,
                currentUser: user[0]
            };

            console.log(formattedData);
            localStorage.setItem("role", JSON.stringify(formattedData.currentUser.Role));
            localStorage.setItem('state', JSON.stringify(formattedData));

            return{
                type: DINER_LOGIN,
                payload: formattedData
            }

        }

    }
    else{

        alert("Username or password was incorrect");
    }
    
    
    
    
};