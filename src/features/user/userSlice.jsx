import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: "",
    role: "",
    name: "",
  },
  reducers: {

    login: (state, action) => {
      state.username = action.payload.username
      state.role = action.payload.role
      state.name = action.payload.name
      console.log(action);
    },
    logout: (state) => {
      state.username = ""
      state.role = ""
      state.name = ""
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer