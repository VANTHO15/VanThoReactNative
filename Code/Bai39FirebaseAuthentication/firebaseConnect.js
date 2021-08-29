import  { initializeApp }  from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCQNsd8t-8z2MmPINGxTCJs0csNpxSPj84",
  authDomain: "reactnativefirebase-a4106.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-a4106-default-rtdb.firebaseio.com",
  projectId: "reactnativefirebase-a4106",
  storageBucket: "reactnativefirebase-a4106.appspot.com",
  messagingSenderId: "694562020442",
  appId: "1:694562020442:web:b5948e790a96802d88cc63"
};
const firebaseConnect  = initializeApp(firebaseConfig);
export default firebaseConnect; 