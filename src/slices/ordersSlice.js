import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
   orders: [],
   loading: false,
   error: null
}
export const getOrders = createAsyncThunk(
   'orders/getOrders',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const response = await fetch("./mock/orders.json")
         const data = await response.json()
         dispatch(setOrders(data))
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const ordersSlice = createSlice({
   name: 'orders',
   initialState,
   reducers: {
      setOrders: (state, action) => {
         state.orders = action.payload
      },
      deleteOrder: (state, action) => {
         state.orders = state.orders.filter((order) => order.id !== action.payload)
      },
   },
   extraReducers: {
      [getOrders.pending]: ((state) => {
         state.loading = true;
         state.error = null
      }),
      [getOrders.fulfilled]: ((state, action) => {
         state.loading = false
         state.orders = action.payload;
      }),
      [getOrders.rejected]: ((state, action) => {
         state.error = action.payload
      })
   }
})

export const { setOrders, deleteOrder } = ordersSlice.actions
export default ordersSlice.reducer
