import { createSlice}  from "@reduxjs/toolkit";

const userSlice = createSlice ({
  name:"user",
  initialState:{user:null},
 
    reducers:{
      setLogIn :(state,action) => {
       state.user=action.payload;
      },
      setLogOut:(state)=>{
        state.user=null;
      }
    
    },
  });

export const {setLogIn,setLogOut} = userSlice.actions;
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;