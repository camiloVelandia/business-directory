import { types } from "../types/types";


const initialState = {
    error: null
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {  
        case types.errorTrue:
            return{
                ...state,
                error: action.payload
            }
    
        case types.errorFalse:
            return{
                ...state,
                error: action.payload
            }
        
        default:
            return state;
    }
}