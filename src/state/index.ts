import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"

export interface IAnswer {
  id: number
  select: number
}

const name = "Temp"
const initialState: IAnswer[] = []

const _ = createSlice({
  name,
  initialState,
  reducers: {
    save(state: IAnswer[], action: PayloadAction<IAnswer>) {
      state.push(action.payload)
    },
    clear(state: IAnswer[]) {
      return (state = initialState)
    },
  },
})

const rootReducer = combineReducers({
  temp: _.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
export const tempActions = _.actions
export type IRootState = ReturnType<typeof rootReducer>
