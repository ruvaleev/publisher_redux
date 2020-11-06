import "regenerator-runtime/runtime";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { books: [], isLoading: false, isError: false, error: null }

const ROOT_URL = 'https://publisher-9bb8.restdb.io/rest';
const API_KEY = '5f9ff06b231ba42851b4a084'

export const fetchBooks = createAsyncThunk(
  'books/fetchAll',
  async() => {
    const response = await axios({
      url: `${ROOT_URL}/books`,
      method: 'GET',
      headers: {
        'x-apikey': API_KEY
      }
    });

    return response.data;
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addChapter(state, action) {
      let book = state.books.find((book) => { return book._id == action.payload.bookId })
      book.chapters = book.chapters.concat({ id: book.chapters.length, title: action.payload.title, subsections: [] })
    },
    addSubsection(state, action) {
      let book = state.books.find((book) => { return book._id == action.payload.bookId })
      let chapter = book.chapters.find((chapter) => { return chapter.id == action.payload.chapterId })
      chapter.subsections =
        chapter.subsections.concat({ id: chapter.subsections.length, title: action.payload.title, ready: false })
    },
    toggleSubsectionReady(state, action) {
      let book = state.books.find((book) => { 
        return book._id == action.payload.bookId 
      })
      let chapter = book.chapters.find((chapter) => { return chapter.id == action.payload.chapterId })
      let subsection = chapter.subsections.find((subsection) => { return subsection.id == action.payload.subsectionId })
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
