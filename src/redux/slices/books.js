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
      let book = state.books.find((book) => { return book._id == action.bookId })
      book.chapters = book.chapters.concat({ id: book.chapters.length, title: action.title, subsections: [] })
    },
    addSubsection(state, action) {
      let book = state.books.find((book) => { return book._id == action.bookId })
      let chapter = book.chapters.find((chapter) => { return chapter.id == action.chapterId })
      chapter.subsections =
        chapter.subsections.concat({ id: chapter.subsections.length, title: action.title, ready: false })
    },
    toggleSubsectionReady(state, action) {
      console.log('action')
      console.log(action)
      console.log('state is loading')
      console.log(state.isLoading)
      console.log('state boooks')
      console.log(state.books)
      console.log("inside loop")
      let book = state.books.find((book) => { 
        console.log('book books')
        console.log(book.books)
        console.log(action.bookId)
        console.log(book._id == action.bookId)
        return book._id == action.bookId 
      })
      console.log('let book')
      console.log(book)
      let chapter = book.chapters.find((chapter) => { return chapter.id == action.chapterId })
      let subsection = chapter.subsections.find((subsection) => { return subsection.id == action.subsectionId })
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
      error: action.error
    })
  }
})

export const { addChapter, addSubsection, toggleSubsectionReady } = booksSlice.actions;
export default booksSlice.reducer;
