import { createSlice} from "@reduxjs/toolkit";

/*const initialState ={
   question:"",
   answers:[],
};*/

const soruSlice =createSlice({
  name:"soru",
  initialState:{question:[],answers:[{text1:"",label:"A"},{text2:"" ,label:"B"},{text3:"" ,label:"C"},{text4:"" ,label:"D"}]},
    reducers:{
      addSoru:(state,action) =>{
      
        state.question.push(action.payload);
        state.answers.push(action.payload);
        
        
    },

}});

export const {addSoru} = soruSlice.actions;

export default soruSlice.reducer;