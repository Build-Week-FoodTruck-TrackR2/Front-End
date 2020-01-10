import { ADD_OPERATOR, ADD_DINER, LOGIN, REMEMBER_STATE_ON_REFRESH
, EDIT_MENU_ITEM, EDIT_TRUCK, ADD_MENU_ITEM, DELETE_TRUCK } from "../actions";
import uuid from 'react-uuid';


const initialState = {
    currentUser: {}

};


function reducer (state = initialState, action) {

    console.log("here");

    switch(action.type) {

        case EDIT_MENU_ITEM:

            const truckIndex = state.currentUser.trucks.findIndex(truck => {
                return truck.id === action.payload.currentTruck
            });

            let trucks = state.currentUser.trucks;
            if ([action.payload.catagory] === [action.payload.currentCatagory]){
                    const itemIndex = trucks[truckIndex].catagorys[action.payload.catagory].findIndex( item => {
                        return item.id === action.payload.id
                });
                
                    let updatedCatagory = trucks[truckIndex].catagorys[action.payload.catagory]
                    updatedCatagory[itemIndex] = {
                        ...updatedCatagory[itemIndex],
                        description: action.payload.description,
                        price: action.payload.price,
                        name: action.payload.itemName
                    };

                    trucks[truckIndex].catagorys[action.payload.catagory] = updatedCatagory;

                return{
                    ...state,
                    currentUser: {...state.currentUser,
                    trucks: trucks}
                }
        
            }
            else {

                if (!trucks[truckIndex].catagorys.hasOwnProperty(action.payload.catagory))
                {
                    trucks[truckIndex].catagorys[action.payload.catagory] = [{
                        name: action.payload.itemName,
                        description: action.payload.description,
                        price: action.payload.price,
                        id: uuid()
                    }]

                    console.log(trucks);

                    return{
                        ...state,
                        currentUser:{...state.currentUser,
                        trucks: trucks}
                    };
                }
                else {
                    
                    const filteredCatagory = trucks[truckIndex].catagorys[action.payload.currentCatagory].filter( item => {
                        return item.id !== action.payload.id
                    });


                    trucks[truckIndex].catagorys[action.payload.currentCatagory] = filteredCatagory;
                    trucks[truckIndex].catagorys[action.payload.catagory] = 
                    [...trucks[truckIndex].catagorys[action.payload.catagory],
                    { name: action.payload.itemName,
                        description: action.payload.description,
                        price: action.payload.price,
                        id: uuid()
                    }];


                    return {...state,
                    currentUser: {...state.currentUser,
                    trucks: trucks}};

                }
            }
         
        case EDIT_TRUCK:

            console.log("aaaaaaaaa");
            
            let truckList = state.currentUser.trucks;
            const truckListIndex = truckList.findIndex( truck => {
                return truck.id === action.payload.id
            });

            truckList[truckListIndex] = {
                ...truckList[truckListIndex],
                truckName: action.payload.truckName,
                cuisineType: action.payload.cuisineType,
                location: action.payload.location
            };

            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    truckList: truckList
                }
            }

        case DELETE_TRUCK:

            const newTruckList = state.currentUser.trucks.filter( truck => {
                return truck.id !== action.payload
            });

            console.log(action.payload);

            return {
                ...state,
                currentUser: {...state.currentUser,
                trucks: newTruckList}
            }

        case ADD_MENU_ITEM:


            let itemTruckList = state.currentUser.trucks 
            const itemTruckListIndex = itemTruckList.findIndex( truck => {
                return truck.id === action.payload.id
            });

            console.log(action.payload.id);

            if(itemTruckList[itemTruckListIndex].catagorys.hasOwnProperty(action.payload.catagory)){


                itemTruckList[itemTruckListIndex].catagorys[action.payload.catagory] = [
                    ...itemTruckList[itemTruckListIndex].catagorys[action.payload.catagory],
                    {
                        id: uuid(),
                        name: action.payload.itemName,
                        description: action.payload.description,
                        price: action.payload.price,
                    }]

                return {...state,
                currentUser: {...state.currentUser,
                trucks: itemTruckList}}
            }
            else {

                itemTruckList[itemTruckListIndex].catagorys[action.payload.catagory] = [{
                    id: uuid(),
                    name: action.payload.itemName,
                    description: action.payload.description,
                    price: action.payload.price,
                }];

                return {...state,
                    currentUser: {...state.currentUser,
                    trucks: itemTruckList}}
            }


        case REMEMBER_STATE_ON_REFRESH: 
        
        console.log(action.payload);

            return action.payload;

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
                return state;

    }

};

export default reducer;