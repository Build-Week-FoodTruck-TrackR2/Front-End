import { ADD_OPERATOR, ADD_DINER, OPERATOR_LOGIN, DINER_LOGIN, REMEMBER_STATE_ON_REFRESH
, EDIT_MENU_ITEM, EDIT_TRUCK, ADD_MENU_ITEM, DELETE_TRUCK, SIGN_OUT, 
ADD_REVIEW, CHANGE_FAVORITE, EDIT_OPERATOR_INFORMATION, EDIT_DINER_INFORMATION } from "../actions";
import uuid from 'react-uuid';


const initialState = {
    currentUser: {}

};


function reducer (state = initialState, action) {

    console.log("here");

    switch(action.type) {

        case EDIT_DINER_INFORMATION:

            console.log('sup')
            console.log(action.payload);

            localStorage.setItem('state', JSON.stringify({...state,
                currentUser: {...state.currentUser,
                             firstName: action.payload.firstName,
                             lastName: action.payload.lastName,
                             email: action.payload.email,
                             location: action.payload.location}}));
            
            return({...state,
                    currentUser: {...state.currentUser,
                                 firstName: action.payload.firstName,
                                 lastName: action.payload.lastName,
                                 email: action.payload.email,
                                 location: action.payload.location}});

        case EDIT_OPERATOR_INFORMATION:

            localStorage.setItem('state', JSON.stringify({...state,
                currentUser: {...state.currentUser,
                             firstName: action.payload.firstName,
                             lastName: action.payload.lastName,
                             email: action.payload.email,
                             businessName: action.payload.businessName}}));
            
            return({...state,
                    currentUser: {...state.currentUser,
                                 firstName: action.payload.firstName,
                                 lastName: action.payload.lastName,
                                 email: action.payload.email,
                                 businessName: action.payload.businessName}});


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

            localStorage.setItem('state', JSON.stringify({
                ...state,
                currentUser: {...state.currentUser,
                trucks: newTruckList}
            }));

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

            return JSON.parse(localStorage.getItem('state'));

        case ADD_OPERATOR: 

            console.log("here");

            localStorage.setItem('state', JSON.stringify({currentUser: action.payload}));
            localStorage.setItem('role', JSON.stringify(action.payload.Role));

            return {currentUser: action.payload}
        
        case ADD_DINER: 

            console.log("here");

            localStorage.setItem('state', JSON.stringify(action.payload));
            localStorage.setItem('role', JSON.stringify(action.payload.currentUser.Role));

            return action.payload;

        case ADD_REVIEW:

            const truckReviewIndex = state.trucks.findIndex( truck =>{
                return truck.id === action.payload.truckId
            });

            let reviewTrucks = state.trucks;
            reviewTrucks[truckReviewIndex].reviews = [...reviewTrucks[truckReviewIndex].reviews,
                                         action.payload.review];
                  
            localStorage.setItem('state', JSON.stringify({...state, 
                                                        trucks: reviewTrucks}));

            return {...state,
                    trucks: reviewTrucks};
        
        case CHANGE_FAVORITE: {

            console.log(action.payload);

            if(action.payload.favorite){

                console.log(action.payload);

                let ls = JSON.parse(localStorage.getItem('state'));
                ls.currentUser.favoriteTrucks = [...ls.currentUser.favoriteTrucks, action.payload.truckId]
                localStorage.setItem('state', JSON.stringify(ls));

                return {
                    ...state,
                    currentUser: {...state.currentUser,
                                favoriteTrucks: [
                                    ...state.currentUser.favoriteTrucks,
                                    action.payload.truckId
                                ]}
                }
            }
            else{
                
               const favoriteTrucks = state.currentUser.favoriteTrucks.filter( truck => {
                    return truck !== action.payload.truckId
               });

               
               let ls = JSON.parse(localStorage.getItem('state'));
               ls.currentUser.favoriteTrucks = favoriteTrucks;
               localStorage.setItem('state', JSON.stringify(ls));

               return {
                ...state,
                currentUser: {...state.currentUser,
                            favoriteTrucks: favoriteTrucks}
            }


            }

        }


        case OPERATOR_LOGIN:

            return({...state, 
                currentUser: action.payload});

        case DINER_LOGIN:

                console.log("DINER");

                return action.payload;

        case SIGN_OUT: 

        return { }

        default:
            
                console.log(action.payload);
                return state;

    }

};

export default reducer;