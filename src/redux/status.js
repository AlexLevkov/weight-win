import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isStart: true,
  isIntro: true,
}

export const counterSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    updateStart: (state, action) => {
      state.isStart = action.payload
    },
    updateIntro: (state, action) => {
      state.isIntro = action.payload
    },
  },
})

export const { updateStart,updateIntro } = counterSlice.actions

export default counterSlice.reducer