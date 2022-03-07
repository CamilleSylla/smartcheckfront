import React, { useContext } from 'react'
import { Button } from '@mui/material'

import { SocketContext } from '../SocketContext'

export default function Notifications () {
    const {answerCall, call, callAccepted} = useContext(SocketContext)
    return (
        <>
            {call.isReceivedCall && !callAccepted && (
             <div style={{display: "flex", justifyContent: "center"}}>
                 <h1>{call.name} is calling</h1>
                 <Button variant="containerd" color="primary" onClick={answerCall}>
                     Answer
                 </Button>
             </div>   
            )}
        </>
    )
}