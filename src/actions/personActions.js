

import { types } from "../types/types";
import { startErrorFalse, startErrorTrue } from "./errorActions";
import { startCloseDialog, startCloseEditDialog } from "./uiActions";
import axios from "axios";

const apiKey = "5hQYF60Cfz656ddNZAGyU5AyMZ0RHVqz9eg5aYXs";
const Url =
  "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod";

const clientAxios = axios.create({
  baseURL: Url,
  headers: {
    "x-api-key": apiKey,
    "Content-Type": "application/json",
  },
});

// GET people
export const startGetPeople = (id) => {
    return async (dispatch) => {    
        try {            
            const res = await clientAxios.get(`/business/${id}/persons`); 
            await dispatch( getPeople(res.data)); 
            await dispatch(startErrorFalse());            
        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }   
    }
};

const getPeople = (people) => ({
    type: types.getPeople,
    payload: people
});

// CREATE person 
export const startCreatePerson = (id, person) => {
    return async (dispatch) => {
        try {
            await clientAxios.post(`/business/${id}/persons`, person);
            await dispatch( startCloseDialog()); 
            await dispatch( createPerson());
            await dispatch( startErrorFalse());
            await dispatch( startGetPeople(id));  

        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
};

const createPerson = () => ({
    type: types.createPerson
});

// DELETE person
export const startDeletePerson = (id, personId) => {
    return async (dispatch) => {
        try {
            await clientAxios.delete(`/business/${id}/persons/${personId}`); 
            await dispatch (deletePerson());            
            await dispatch( startGetPeople(id)); 
            await dispatch( startErrorFalse());

        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
};

const deletePerson = () => ({
    type: types.deletePerson
});

// set ACTIVE person
export const startActivePerson = (person) => {
    return (dispatch) => {
        dispatch( activePerson(person));
    }
};

const activePerson = (person) => ({
    type: types.setActivePerson,
    payload: person
});

// CLEAR active person
export const startClearActivePerson = () => {
    return (dispatch) => {
        dispatch(clearActivePerson());        
    }
};

const clearActivePerson = () => ({
    type: types.clearActivePerson
});

// UPDATE person
export const startUpdatePerson = (id, person) => {
    return async (dispatch) => {
        try {
            const { name,  role, phone,  email, join_date, personId } = person;
            await clientAxios.put(`/business/${id}/persons/${personId}`, { name,  role, phone,  email, join_date, personId });
            await dispatch( startCloseEditDialog());
            await dispatch( updatePerson());
            await dispatch( startErrorFalse());
            await dispatch( startClearActivePerson());
            await dispatch( startGetPeople(id));
            
        } catch (error) {
            dispatch(startErrorTrue());
            console.warn(error.message);
        }
    }
}

const updatePerson = () => ({
    type: types.updatePerson
});