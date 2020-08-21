//@flow
import {SUBTRACT, SUM} from "./type";
import type {Action} from "../../../shared/flowTypes";

export type InitialStateCount = {
    value: number,
}

export const initialStateCount: InitialStateCount = {
    value: 0
};

const sum = (value: number) => {
    return value = value + 1;
};

const subtract = (value: number) => {
    return value = value - 1;
};

type CountReducer = (state: InitialStateCount, action: Action) => Object;

export const countReducer: CountReducer = (state: InitialStateCount = initialStateCount, action: Action): InitialStateCount => {
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