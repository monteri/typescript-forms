import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserFormData } from "../types.ts";

export interface GlobalState {
  users: Array<UserFormData>,
  prices: Array<Object>,
}

const initialState: GlobalState = {
  users: [],
  prices: [],
}

export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `r` argument
  initialState: initialState,
  reducers: {
    addUser: (state, { payload } : PayloadAction<UserFormData>) => {
      state.users.push(payload)
    },
  },
})

export const { addUser } = globalSlice.actions

export default globalSlice.reducer