import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  canteen: null,
}

export const canteenSlice = createSlice({
  name: 'canteen',
  initialState,
  reducers: {
   setCanteen : (state, action) => {
      state.canteen = action.payload
    },
  },
})

export const { setCanteen } = canteenSlice.actions

export const selectCanteen = state => state.canteen.canteen

export default canteenSlice.reducer