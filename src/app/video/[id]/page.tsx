'use client'

import { useEffect, useMemo, useState } from 'react'
import cl from '../../css/player.module.sass'
import Fillbutton from '@/app/components/UI/fillbutton';
import Player from '@/app/components/player';
import ReactPlayer from 'react-player'

export default () => {

    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        isLoaded ? <div className={cl.player}>
            <Player url="https://firebasestorage.googleapis.com/v0/b/filmy-23ae6.appspot.com/o/video.mp4?alt=media&token=172f57cf-00e9-4c01-a3cd-a1c9e4d7825d" width="100%" height="100%" />
        </div> : <></>

    )
}