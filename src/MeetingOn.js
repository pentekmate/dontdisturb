function MeetingOn({to,msg}){
    return(
        <div className="meetingOn content d-flex container-fluid bg-danger ">
            <div className="vw-100 vh-100 relative flex-column gap-4 d-flex align-items-center pt-5  container-fluid">
            <div className='snow'>
                <div></div>
            </div>
                <h1 className="moh1">
                    Meetingem van
                </h1>
                <p className="mop1">
                    Most ne gyere be légyszíves
                </p>
                <p className="mop2">
                    Meeting vége:  <span>{to}</span>
                </p>
                {msg && <p className="msg">{msg}</p>}
            </div>
        </div>
    )
}

export default MeetingOn