import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

import { addUser as addUserApi } from './api';
import { addUser } from './globalSlice';
import {UserFormData} from "../types.ts"; // Import the regular addUser action

export const addUserAsync: AsyncThunk<UserFormData, UserFormData, any> = createAsyncThunk(
  'global/addUserAsync',
  async (userData: any, thunkAPI) => {
    const response = await addUserApi(userData);
    thunkAPI.dispatch(addUser(response));
    return response;
  }
);