import { configureStore } from "@reduxjs/toolkit"

// import { CommentsSliceReducer } from "./../components/CommentsSection/commentsSlice"
// import { CurrentUserSliceReducer } from "./../components/CommentsSection/currentUserSlice"

export const store = configureStore({
  reducer: {
    // comments: CommentsSliceReducer,
    // currentUser: CurrentUserSliceReducer,
  },
})


