import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

export const getDataLoading = () => {
    return { type: GET_DATA_LOADING };
};

export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
};

export const getDataError = () => {
    return { type: GET_DATA_ERROR };
};


export const getDataRequest = (username) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        const { data } = await axios.get(`/${username}/repos`);
        dispatch(getDataSuccess(data));
    } catch (err) {
        console.log(err);
        dispatch(getDataError());
    }
};