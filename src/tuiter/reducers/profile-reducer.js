import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: "Cyborg",
    lastName: "John",
    handle: "@johncyborg",
    profilePicture: "cyborg.jpeg",
    bannerPicture: "golden-bridge.JPG",
    bio: "The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. It is one of two breeds known as a Welsh Corgi. Pembroke Welsh Corgis descended from the Spitz family of dogs.",
    website: "https://en.wikipedia.org/wiki/Cyborg",
    location: "San Diago, CA",
    dateOfBirth: "9/10/1989",
    dateJoined: "9/2013",
    followingCount: 1234,
    followersCount: 5678,
    tuits: 6138
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profile,
        reducers: {
            updateUser(state, action) {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.handle = action.payload.handle;
                state.bio = action.payload.bio;
                state.location = action.payload.location;
                state.website = action.payload.website;
                state.dateOfBirth = action.payload.dateOfBirth;
            }
        }
    }
);

export const {updateUser} = profileSlice.actions;
export default profileSlice.reducer;