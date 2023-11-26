import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slice'
import gamesReducer, { fetchAllGames } from './thunk';


export const store = configureStore({
  reducer: {
    games: gameReducer,
    thunk:gamesReducer
  },
})

store.dispatch(fetchAllGames());
