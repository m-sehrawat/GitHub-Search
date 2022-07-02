import axios from "axios";
import { removeItem, setItem } from "../utils/localStorage";
import { CLEAR_RESULT, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";


export const getDataLoading = () => {
    return { type: GET_DATA_LOADING };
};

export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
};

export const getDataError = () => {
    return { type: GET_DATA_ERROR };
};

export const clearResult = () => {
    return { type: CLEAR_RESULT };
};


export const getDataRequest = (username) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        const { data: repoData } = await axios.get(`/${username}/repos`);
        const { data: followersData } = await axios.get(`/${username}/followers`);
        setItem('repoData', repoData);
        setItem('followersData', followersData);
        dispatch(getDataSuccess({ repoData, followersData }));
    } catch (err) {
        console.log(err);
        dispatch(getDataError());
    }
};

export const clearResultSuccess = () => (dispatch) => {
    dispatch(clearResult());
    removeItem('repoData');
    removeItem('followersData');
};