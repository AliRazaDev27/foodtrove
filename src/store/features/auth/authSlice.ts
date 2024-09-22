import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const storedUser = window.localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;
type State = {
  user: any
  status: string
  error: any
}
const initialState: State = {
  user: user,
  status: 'idle',
  error: null
}
export const login = createAsyncThunk('auth/login', async (inputValues:any, thunkAPI) => {
  try {
    const authService = await import('./authService')
    const response = await authService.default.loginUser(inputValues)
    return response
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const register = createAsyncThunk('auth/register', async (inputValues:any, thunkAPI: any) => {
  try {
    const authService = await import('./authService')
    const response = await authService.default.registerUser(inputValues)
    return response
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('auth/logout', async (thunkAPI: any) => {
  try {
    const authService = await import('./authService')
    const response = await authService.default.logoutUser()
    return response
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading'
      state.error = null
    }).addCase(login.fulfilled, (state, action) => {
      state.status = 'success'
      state.user = action.payload
    }).addCase(login.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    })
    builder.addCase(register.pending, (state) => {
      state.status = 'loading'
      state.error = null
    }).addCase(register.fulfilled, (state, action) => {
      state.status = 'success'
      state.user = action.payload
    }).addCase(register.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    })

    builder.addCase(logout.pending, (state) => {
      state.status = 'loading'
      state.error = null
    }).addCase(logout.fulfilled, (state) => {
      state.status = 'success'
      state.user = null
    }).addCase(logout.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions

export default authSlice.reducer