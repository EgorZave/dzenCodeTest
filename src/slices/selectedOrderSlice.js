import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   selectedOrder: null,
}


export const selectOrdersSlice = createSlice({
   name: 'selectOrders',
   initialState,
   reducers: {
      setOrder: (state, action) => {
         state.selectedOrder = action.payload
      },

   }
})

export const { setOrder } = selectOrdersSlice.actions
export default selectOrdersSlice.reducer
