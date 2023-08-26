import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isModalOpen: false,
}

export const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      setIsModalOpen: (state) => {
         state.isModalOpen = !state.isModalOpen
      },
   }
})

export const { setIsModalOpen } = modalSlice.actions
export default modalSlice.reducer
