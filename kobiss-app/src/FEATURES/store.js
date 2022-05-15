import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getFirebase} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import soruReducer from './Slice/soruSlice';
import userReducer from './Slice/userSlice';

export const middlewares = [
  thunk.withExtraArgument({getFirebase,getFirestore}),
  reduxFirestore(getFirestore)
]
export const store = configureStore({
  reducer: {
    soru:soruReducer,
    user:userReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
  },

},
   applyMiddleware(...middlewares),
  

); 

