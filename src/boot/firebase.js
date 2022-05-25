import Firebase from 'firebase/app';
import {firebaseConfig} from "app/firebase.config";


export default ({ Vue }) => {
  // Initialize Firebase from settings
  Firebase.initializeApp(firebaseConfig)

  // Vue.prototype.$firebase = Firebase
}
