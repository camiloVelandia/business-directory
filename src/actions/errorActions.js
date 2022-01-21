
import { types } from "../types/types";

// ERROR true
export const startErrorTrue = () => {
    return (dispatch) => {
        dispatch( errorTrue());
    }
};

const errorTrue = () => ({
    type: types.errorTrue,
    payload: true
});

// ERROR false
export const startErrorFalse = () => {
    return (dispatch) => {
        dispatch( errorFalse());
    }
};

const errorFalse = () => ({
    type: types.errorFalse,
    payload: false
});
