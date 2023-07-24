import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Person {
	name: string;
	age: number;
};

interface PersonState {
	persons: Person[];
};

const initialState: PersonState = {
	persons: []
};

export const PersonSlice = createSlice({
	name: "person",
	initialState,
	reducers: {
		addPerson: (state, action:PayloadAction<Person>) => {
			state.persons = [...state.persons, action.payload];
		}
	}

})

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;