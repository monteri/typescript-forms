import { GlobalState } from "./globalSlice";

export const getUsers = (state: { global: GlobalState }) => state.global.users;
export const getPrices = (state: { global: GlobalState } ) => state.global.prices;
