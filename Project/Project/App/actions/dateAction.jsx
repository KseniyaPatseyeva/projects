import {SET_END_DATE, SET_START_DATE} from "./actionTypes";

export const setStartDate = startDate => ({
    type: SET_START_DATE,
    payload: startDate
});

export const setEndDate = endDate => ({
    type: SET_END_DATE,
    payload: endDate
});
