
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useFirebase } from './Firebase';
import MeetingOn from './MeetingOn';
import MeetingOff from './MeetingOff';
function App() {
  const [data,setData]=useState([])
  useFirebase()

  const db = getFirestore()

  
  async function fetchData() {
    let data = []
    try {
      const meetingInfo = collection(db, "info");
      const snapshot = await getDocs(meetingInfo)
      snapshot.docs.map((item) =>
        data=item.data(),
       
      )
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setData(data)
    
      
    }
  }
  fetchData()
  
  function startInterval() {
    // Az időzítő minden 30 másodperc után fut le
    const interval = 30000; // 30 másodperc miliszekundumban
  
    function callback() {
     fetchData()
     
    }
  
    // Elindítjuk az időzítőt
    const timerId = setInterval(callback, interval);
   
    // Visszatérünk a timer azonosítójával, hogy esetlegesen lehessen leállítani
    return timerId;
  }
  startInterval();
  
  

  const {meeting,from,to}=data
  
  if(meeting===false){
    return(
      <MeetingOff from={from} to={to}></MeetingOff>
    )
  }
  return (
   <MeetingOn to={to}></MeetingOn>
  );
}

export default App;
