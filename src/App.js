
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { getDatabase,ref, onValue } from "firebase/database";
import { useFirebase } from './Firebase';
import MeetingOn from './MeetingOn';
import MeetingOff from './MeetingOff';
function App() {
  const [data,setData]=useState([])
  useFirebase()
  const db = getDatabase();
  useEffect(() => {
    
    const starCountRef = ref(db,'0/');
    onValue(starCountRef, (snapshot) => {
      setData(snapshot.val())
    });
   
  }, []);
  
  

  const {meeting,from,to,msg}=data
  
  if(meeting===false){
    return(
      <MeetingOff from={from} msg={msg} to={to}></MeetingOff>
    )
  }
  return (
   <MeetingOn msg={msg} from={from} to={to}></MeetingOn>
  );
}

export default App;
