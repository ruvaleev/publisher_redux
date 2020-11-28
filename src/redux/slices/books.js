import "regenerator-runtime/runtime";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import uuid from 'uuid-random';

const initialState = { books: [], isLoading: false, isError: false, error: null }

const ROOT_URL = 'https://publisher-9bb8.restdb.io/rest';
const API_KEY = '5f9ff06b231ba42851b4a084'

const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  timeout: 5000,
  headers: {'x-apikey': API_KEY}
});

export const fetchBooks = createAsyncThunk(
  'books/fetchAll',
  async() => {
    const response = await axiosInstance.get('/books');

    return response.data;
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addChapter(state, action) {
      let book = state.books.find((book) => book._id === action.payload.bookId)
      book.chapters = book.chapters.concat({ id: uuid(), title: action.payload.title, subsections: [] })
    },
    addSubsection(state, action) {
      let book = state.books.find((book) => book._id === action.payload.bookId)
      let chapter = book.chapters.find((chapter) => chapter.id === action.payload.chapterId)
      chapter.subsections =
        chapter.subsections.concat({ id: uuid(), title: action.payload.title, ready: false })
    },
    toggleSubsectionReady(state, action) {
      let book = state.books.find((book) => book._id === action.payload.bookId)
      let chapter = book.chapters.find((chapter) => chapter.id === action.payload.chapterId)
      let subsection = chapter.subsections.find((subsection) => subsection.id === action.payload.subsectionId)
      subsection.ready = !subsection.ready
    }
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [fetchBooks.fulfilled]: (state, action) => ({
      ...initialState,
      books: action.payload
    }),
    [fetchBooks.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.payload.error
    })
  }
})

export const { addChapter, addSubsection, toggleSubsectionReady } = booksSlice.actions;
export default booksSlice.reducer;
