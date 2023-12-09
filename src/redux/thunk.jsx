import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_url = "https://gamesapi-8lyv.onrender.com"


export const fetchAllGames = createAsyncThunk(
  'games/fetchAllGames',
  async () => {
    const response = await fetch(API_url);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  entities: [],
  loading: 'idle', 
   race : [],
   action:[],
   sports:[],
   adventure:[]
};

const gamesSlice = createSlice({
  name: 'allgames',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllGames.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = 'fulfilled';
      const race = action.payload.filter(item=>item.category=="Race")
      const actionEl = action.payload.filter(item=>item.category=="Action")
      const sports = action.payload.filter(item=>item.category=="sports")
      const adventure = action.payload.filter(item=>item.category=="Adventure")
      state.race = race;
      state.action =actionEl;
      state.sports = sports;
      state.adventure = adventure
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
