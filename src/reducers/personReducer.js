import { types } from "../types/types";


const initialState = {
    people: [],
    activePerson: {},
    businessAssociated: ''
};

export const personReducer = (state = initialState, action) => {
    switch (action.type) { 
        case types.getPeople:
            return{
                ...state,
                people: action.payload
            } 
        case types.updatePerson:
        case  types.deletePerson:
        case types.createPerson:
            return{
                ...state
            }
        case types.setActivePerson:
            return{
                ...state,
                activePerson: action.payload
            }
        case types.clearActivePerson:
            return{
                ...state,
                activePerson: {}
            }
        case types.businessAssociated:
            return{
                ...state,
                businessAssociated: action.payload
            }
    
        default:
            return state;
    }
}