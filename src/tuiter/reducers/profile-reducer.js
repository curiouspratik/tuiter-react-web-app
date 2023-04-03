import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: "Cyborg",
    lastName: "John",
    handle: "@johncyborg",
    profilePicture: "cyborg.jpeg",
    bannerPicture: "golden-bridge.JPG",
    bio: "\"Cyborg\" is not the same thing as bionics, biorobotics, or androids; it applies to an organism that has restored function or especially, enhanced abilities due to the integration of some artificial component or technology that relies on some sort of feedback, for example: prostheses, artificial organs, implants or, in some cases, wearable technology.[2] Cyborg technologies may enable or support collective intelligence.[3] A related, possibly broader, term is the \"augmented human\".[2][4][5] While cyborgs are commonly thought of as mammals, including humans, they might also conceivably be any kind of organism. ",
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