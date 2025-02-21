import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CodeState {
    value: string;
    code: string;
    isAccessGranted: boolean;
}

const initialState: CodeState = {
    value: "",
    code: '2924',
    isAccessGranted: false,
};

export const codeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        pinCode: (state, action: PayloadAction<string>) => {
            if (state.value.length < 4) state.value += action.payload;
        },
        pinDelete: (state) => {
            if (state.value !== "Access Granted" && state.value !== "Access Denied") {
                state.value = state.value.slice(0, -1);
            }
        },
        pinEnter: (state) => {
            if (state.value === state.code) {
                state.isAccessGranted = true;
                state.value = "Access Granted";
            } else {
                state.isAccessGranted = false;
                state.value = "Access Denied";
            }
        }
    }
});

export const codeReducer = codeSlice.reducer;
export const { pinCode, pinDelete, pinEnter } = codeSlice.actions;
