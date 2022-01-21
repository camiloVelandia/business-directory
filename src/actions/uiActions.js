import { types } from "../types/types";


// open dialog to create business
export const startOpenDialog = () => {
    return (dispatch) => {
        dispatch( openDialog());
    }    
};

const openDialog = () => ({
    type: types.openCreateDialog
});

// close create dialog
export const startCloseDialog = () => {
    return (dispatch) => {
        dispatch( closeDialog());
    }
};

const closeDialog = () => ({
    type: types.closeCreateDialog    
});

// open dialog to delete business
export const startOpenDeleteDialog = () => {
    return (dispatch) => {
        dispatch( openDeleteDialog());
    }    
};

const openDeleteDialog = () => ({
    type: types.openDeleteDialog
});

// close delete dialog
export const startCloseDeleteDialog = () => {
    return (dispatch) => {
        dispatch( closeDeleteDialog());
    }
};

const closeDeleteDialog = () => ({
    type: types.closeDeleteDialog    
});

// open dialog to edit business
export const startOpenEditDialog = () => {
    return (dispatch) => {
        dispatch( openEditDialog());
    }    
};

const openEditDialog = () => ({
    type: types.openEditDialog
});

// close delete dialog
export const startCloseEditDialog = () => {
    return (dispatch) => {
        dispatch( closeEditDialog());        
    }
};

const closeEditDialog = () => ({
    type: types.closeEditDialog    
});
