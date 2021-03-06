import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchInStock = createAsyncThunk("inStock/fetch", async () => {
//   const response = await axios.get("/recentDonors.json");
//   console.log(response);
//   return response.data;
// });

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    requested: [],
    received: [],
    inStock: [
      {
        name: "Jhon Cena",
        img: "https://livebiography.com/wp-content/uploads/2018/08/John-Cena-Profile.jpg",
        bloodGroup: "O+",
        date: "12/06/2021",
      },
      {
        name: "Laila",
        img: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        date: "12/11/2021",
        bloodGroup: "A+",
      },
      {
        name: "Gazni",
        img: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg",
        date: "1/12/2021",
        bloodGroup: "AB+",
      },
      {
        name: "Jhon ka Don",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJv3TH_Gneqz72gcj9AvSbOhdEhJHNHiBcvWcQHestjQ6kTf219PViZB8Ww3u1TmEYm0&usqp=CAU",
        date: "31/10/2021",
        bloodGroup: "A-",
      },
      {
        name: "Thor",
        img: "https://avatars.githubusercontent.com/u/82438870?v=4",
        date: "1/1/2022",
        bloodGroup: "AB-",
      },
    ],
  },
  reducers: {
    AddToRequested: (state, action) => {
      state.requested.push(action.payload);
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchInStock.fulfilled, (state, action) => {
  //       console.log(state);
  //       console.log(action);
  //       state.inStock = action.payload;
  //     });
  //   },
});

// Action creators are generated for each case reducer function
export const { AddToRequested } = counterSlice.actions;

export default counterSlice.reducer;
