import { createSlice } from "@reduxjs/toolkit";
import basicContacts from "../basicContacts.json";
const slice = createSlice({
  name: "contacts",
  initialState: {
    items: basicContacts,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
