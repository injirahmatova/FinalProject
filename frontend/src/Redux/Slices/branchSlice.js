import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBranch: {
    name: "",
    address: "Bakı şəhəri, Nərimanov rayonu, Ağa Neymatulla b 44/2 (Metropark t.m yanı)",
    coordinates: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6076.4821611947755!2d49.8734482!3d40.4035098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d86302692d7%3A0xeb164f08a0d4beed!2sKango.az!5e0!3m2!1saz!2saz!4v1699211632078!5m2!1saz!2saz",
  },
};

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    selectBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
  },
});

export const {selectBranch} =branchSlice.actions;
export default branchSlice.reducer;