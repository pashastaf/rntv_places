import { createSlice } from "@reduxjs/toolkit";

interface IRest{
  test: string[],
  
}

const initialState:IRest = {
  test: ['Кнопка_1','Кнопка_2','Кнопка_3'],
}

const restSlice = createSlice({
  name: 'rest',
  initialState,
  reducers: {
    changeTest: (state, action) => {
      state.test[action.payload.index] = `${action.payload.index}`
    }
  }
})

export const { changeTest } = restSlice.actions
export default restSlice.reducer