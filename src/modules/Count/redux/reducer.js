import {SUBTRACT, SUM} from "./type";

export const initialStateCount = {
    value: 0
};


const sum = (value) => {
    return value = value + 1;
};

const subtract = (value) => {
    return value = value - 1;
};

export const countReducer = (state = initialStateCount, action) => {
    switch (action.type) {
        case SUM :
            return ({
                ...state,
                value: sum(state.value),
            });
        case SUBTRACT :
            return ({
                ...state,
                value: subtract(state.value),
            });
        default:
            return state
    }
};