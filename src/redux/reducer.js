import { getItem } from "../functions/localStorage";
import { CLEAR_RESULT, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";


const initState = {
    isLoading: false,
    isError: false,
    repoData: getItem('repoData') || [],
    followersData: getItem('followersData') || []
};

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                repoData: payload.repoData,
                followersData: payload.followersData
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case CLEAR_RESULT:
            return {
                ...state,
                repoData: [],
                followersData: []
            };
        default:
            return state;
    }
};