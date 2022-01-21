
import { types } from "../types/types";


const initialState = {
    business: [],
    activeBusiness: {}
};

export const businessReducer = (state = initialState, action) => {
    switch (action.type) {   
        case types.getBusiness:
            return{
                ...state,
                business: action.payload
            } 
        case types.deleteBusiness: 
        case types.updateBusiness:
        case types.createBusiness:
            return{
                ...state               
            }        

        case types.setActiveBusiness:
            return{
                ...state,
                activeBusiness: action.payload
            }     

        case types.clearActiveBusiness:
            return{
                ...state,
                activeBusiness: {}
            }
        
        case types.editingBusiness:
            return{
                ...state,
                activeBusiness: action.payload
            }
        case types.error:
            return{
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}