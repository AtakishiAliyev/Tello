// import { createSlice } from "@reduxjs/toolkit";
// import { getCustemerData } from "../actions/user";

// const initialState = {
//     loading: false,
//     error: null,
//     user: [],
// };

// const userReducer = createSlice({
//     name: 'user',
//     initialState,
//     extraReducers: {
//         [getCustemerData.pending]: (state) => {
//             state.loading = true
//         },
//         [getCustemerData.rejected]: (state, { payload }) => {
//             state.loading = false
//             state.error = payload
//         },
//         [getCustemerData.fulfilled]: (state, { payload }) => {
//             state.loading = false
//             state.user = payload
//         }
//     }
// })

// export default userReducer.reducer