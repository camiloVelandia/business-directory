import { types } from "../types/types";
import { startErrorFalse, startErrorTrue } from "./errorActions";
import { startCloseDeleteDialog, startCloseDialog, startCloseEditDialog } from "./uiActions";
import axios from "axios";

const apiKey = "5hQYF60Cfz656ddNZAGyU5AyMZ0RHVqz9eg5aYXs";
const Url ="https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod";

const clientAxios = axios.create({
    baseURL: Url,
    headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
    },
});

// GET list of business
export const startGetBusiness = () => {
    return async (dispatch) => {  
        try {          
            const res = await clientAxios.get('/business');
            await dispatch( GetBusiness(res.data.businesses));   
            await dispatch(startErrorFalse());           
        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }     
    }
};

const GetBusiness = (business) => ({
    type: types.getBusiness,
    payload: business
});
// CREATE new business
export const startCreateBusiness = (newBusiness) => {
    return async (dispatch) => {
        try {
            await clientAxios.post('/business', newBusiness);
            await dispatch( createBusiness());
            await dispatch( startCloseDialog());
            await dispatch( startErrorFalse());
            await dispatch( startGetBusiness());
            
        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
};

const createBusiness = () => ({
    type: types.createBusiness
});

// set ACTIVE business for edit, delete or detail
export const startActiveBusiness = (item) => {
    return (dispatch) => {
        dispatch(activeBusiness(item));
    }
};

const activeBusiness = (item) => ({
    type: types.setActiveBusiness,
    payload: item
});

// DELETE active business
export const startDeleteBusiness = (item) => {
    return async (dispatch) => {
        try {
            await clientAxios.delete(`/business/${item}`);
            await dispatch( deleteBusiness());
            await dispatch( startCloseDeleteDialog());
            await dispatch( clearActiveBusiness() );
            await dispatch( startGetBusiness());
            await dispatch( startErrorFalse());
            
        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
};

const deleteBusiness = () => ({
    type: types.deleteBusiness
});

//  CLEAR active business and close dialog
export const startClearActiveBusiness = () => {
    return (dispatch) => {
        dispatch( clearActiveBusiness());
    }
}

const clearActiveBusiness = () => ({
    type: types.clearActiveBusiness
})

// UPDATE business
export const startUpdateBusiness = (business) => {
    return async (dispatch) => {
        try {      
            const {name, businessId} = business;    
            await clientAxios.put(`/business/${businessId}`, { name });
            await dispatch( updateBusiness());
            await dispatch( startCloseEditDialog());  
            await dispatch( startClearActiveBusiness());
            await dispatch( startGetBusiness());
            await dispatch( startErrorFalse());

        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
};

const updateBusiness = () => ({
    type: types.updateBusiness
});

// GET one business
export const startGetABusiness = (id) => {
    return async (dispatch) => {
        try {
            const res = await clientAxios.get(`/business/${id}`);
            await dispatch(startActiveBusiness(res.data));
        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
}