import { ADD_OPERATOR, ADD_DINER, LOGIN } from "../actions";


const initialState = {
    currentUser: {}

};


function reducer (state = initialState, action) {

    console.log("here");

    switch(action.type) {

        case ADD_OPERATOR: 

            console.log("here");

            return {...state,
                currentUser: action.payload
            };
        
        case ADD_DINER: 

            console.log("here");

            return {...state,
                currentUser: action.payload
            };

        case LOGIN:

            return({...state, 
                currentUser: action.payload});

        default:
            
                console.log(action.payload);
                return {lol: "lol"};

    }

};

export default reducer;