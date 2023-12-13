import './App.css'
function MeetingOff({from,to,msg}){
   
    return(
        <div className="meetingOff d-flex container-lg  ">
            <div className="vw-100 flex-column gap-4 relative d-flex align-items-center pt-5 vh-100 container-fluid">
            <div className='snow'>
                <div></div>
            </div>
               <h1 className="moh1">
                    Nincs meeting
                </h1>
                <p className="mop1">
                Bejöhetel
                </p>
                <p className="mop2">
                Következő meeting: <span>{from}</span>-<span>{to}</span>
                </p>
                {msg && <p className="msg">{msg}</p>}
                
            </div>
        </div>
    )
}

export default MeetingOff