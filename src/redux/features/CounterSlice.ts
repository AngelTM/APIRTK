import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState={
    counter:0
}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter+=1;
        },
        decrement:(state)=>{
            state.counter-=1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
          state.counter += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
          state.counter -= action.payload;
        },
        reset: (state) => {
          state.counter = 0;
        },
    }
})

export default CounterSlice.reducer;
export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
  } = CounterSlice.actions;