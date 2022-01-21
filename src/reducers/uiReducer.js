import { types } from "../types/types";


const initialState = {
    openDeleteDialog: false,
    openCreateDialog: false,
    openEditDialog: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.openCreateDialog:
            return{
                ...state,
                openCreateDialog: true
            }

        case types.closeCreateDialog:
            return{
                ...state,
                openCreateDialog: false
            }

        case types.openDeleteDialog:
            return{
                ...state,
                openDeleteDialog: true
            }

        case types.closeDeleteDialog:
            return{
                ...state,
                openDeleteDialog: false
            }

        case types.openEditDialog:
            return{
                ...state,
                openEditDialog: true
            }

        case types.closeEditDialog:
            return{
                ...state,
                openEditDialog: false
            }     
        default:
            return state;
    }
}