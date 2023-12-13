'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import cl from '../../css/player.module.sass'
import Fillbutton from '@/app/components/UI/fillbutton';
import Player from '@/app/components/player';
import ReactPlayer from 'react-player'
import ReactHlsPlayer from 'react-hls-player';

export default () => {
    const playerRef = useRef();
    const url = 'video.mp4'
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        isLoaded ? <div className={cl.player}>
            {/* <ReactHlsPlayer 
                src={url}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
            /> */}
            <Player url={url} width="100%" height="100%" />
        </div> : <></>

    )
}