import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_url = "http://localhost:2560/api/playstation/"
const options = {
  method:'GET',
  headers:{
      "Content-type": "application/json",
     'que-Key': '0784307854game0760807822',
           
  }
}

export const fetchAllGames = createAsyncThunk(
  'games/fetchAllGames',
  async () => {
    const response = await fetch(API_url,options);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  entities: [],
  loading: 'idle', 
};

const gamesSlice = createSlice({
  name: 'allgames',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllGames.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = 'fulfilled';
    });
    builder.addCase(fetchAllGames.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchAllGames.rejected, (state) => {
      state.loading = 'rejected';
    });
  },
});

export const { } = gamesSlice.actions; 

export default gamesSlice.reducer;
