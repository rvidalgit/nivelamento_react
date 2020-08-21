//@flow
import type {InitialStateCount} from "../modules/Count/redux/reducer";

export type Action = {
    type: string,
    payload: any,
};

export type Store = {
    COUNT: InitialStateCount,
};