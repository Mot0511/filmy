import { useEffect, useState, useRef } from 'react'
import Fillbutton from '../UI/fillbutton'
import cl from './style.module.sass'
import Head from 'next/head'
import ReactPlayer from 'react-player'

export default function Player ({width, height, url}: {width: string, height: string, url: string}){

    const player = document.getElementById('player')
    const refPlayer = useRef()

    const [isPlay, setIsPlay] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(0.5)
    
    const [played, setPlayed] = useState<number>(0)
    const [loaded, setLoaded] = useState<number>(0)

    return (
        <>
            {!isPlay && <button onClick={() => setIsPlay(!isPlay)} className={cl.button+' '+cl.playBtn}><span className="material-symbols-outlined">play_circle</span></button>}
            <ReactPlayer
                url={url}
                ref={refPlayer} 
                width={width} 
                height={height} 
                playing={isPlay}
                volume={volume}
                onClick={() => setIsPlay(!isPlay)}
                onProgress={data => {
                    setPlayed(data.playedSeconds)
                    setLoaded(data.loadedSeconds)
                }}
            />
            <div className={cl.controls}>
                <button className={cl.button} onClick={() => setIsPlay(!isPlay)}>{isPlay ? <span className="material-symbols-outlined">pause_circle</span> : <span className="material-symbols-outlined">play_circle</span>}</button>   
                <div className={cl.track}>
                    <input value={played} onChange={e => {
                        refPlayer.current?.seekTo(Number(e.target.value))
                    }} type="range" min="1" max={loaded} className={cl.range} />
                </div>
                <div className={cl.volume}>
                    <button className={cl.button} onClick={() => {
                        if (volume){
                            setVolume(0)
                        } else {
                            setVolume(1)
                        }
                    }}>{!volume ? <span className="material-symbols-outlined">volume_off</span> : <span className="material-symbols-outlined">volume_up</span>}</button>
                    <div>
                        <input type="range" min='0' max='100' value={volume * 100} onChange={e => setVolume(Number(e.target.value) / 100)} className={cl.range} />
                    </div>
                </div>
            </div>     
        </>
    )
}