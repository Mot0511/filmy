import Header from './components/header'
import './css/global.css'
import Player from './modules/player'

export default ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
      </head>
      <body>
        <Header />
        <div className="main">
          {children}
        </div>
        <Player id="player" file="https://firebasestorage.googleapis.com/v0/b/filmy-23ae6.appspot.com/o/video.mp4?alt=media&token=cd71231b-bec6-4dbd-9fbb-041e78e1bbb3"/>
      </body>
    </html>
  )
}