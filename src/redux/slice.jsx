import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGames: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {addGames } = gamesSlice.actions

export default gamesSlice.reducer