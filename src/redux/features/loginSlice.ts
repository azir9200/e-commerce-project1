import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});
export const { setName, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
