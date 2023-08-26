import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
   products: [],
   loading: false,
   error: null
}
export const getProducts = createAsyncThunk(
   ' products/getProducts',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const response = await fetch("./mock/products.json")
         const data = await response.json()
         dispatch(setProducts(data))
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.products = action.payload
      },
   },
   extraReducers: {
      [getProducts.pending]: ((state) => {
         state.loading = true;
         state.error = null
      }),
      [getProducts.fulfilled]: ((state, action) => {
         state.loading = false
         state.products = action.payload;
      }),
      [getProducts.rejected]: ((state, action) => {
         state.error = action.payload
      })
   }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
