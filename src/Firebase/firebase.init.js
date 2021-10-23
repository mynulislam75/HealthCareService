import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuhetication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuhetication;