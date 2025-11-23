
import { configureStore } from "@reduxjs/toolkit";


import { libraryApi } from "../Api/libraryApi";
import authSlice from "../features/authSlice";
import booksSlice from "../features/booksSlice";

// Create a Redux store
export const store = configureStore({

	reducer: {
		
		libraryApi: libraryApi.reducer,
		auth: authSlice,
		books: booksSlice,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(libraryApi.middleware),
});