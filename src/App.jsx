import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import iconTimeline from "./images/Timeline-Prop.svg";
import iconTwitter from "./images/Twitter.svg";
import profilePhoto from "./images/Profile-Photo.png";
import Icones from './Icones';
import Mybutton from './Mybutton';
import icoMedia from "./images/Media.svg";
import iconGif from "./images/Gif.svg";
import iconPoll from "./images/Poll.svg";
import iconEmoji from "./images/Emoji.svg";
import iconSchedule from "./images/Schedule.svg";
import iconVerified from "./images/Verified.svg";
import Paragraphe from './Paragraphe';
import iconReply from "./images/Reply.svg";
import iconRetweet from "./images/Retweet.svg";
import iconReact from "./images/React.svg";
import iconShare from "./images/Share.svg";
import iconPhoto from "./images/Img (copie).png";
import Photo from './Photo';








export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <div>
          <div className='header'>
            <h3>Home</h3>
            <Icones urlImg={iconTimeline} altImg="Timeline" />
          </div>
          <div>
            <div className='profilphoto'>
            <Icones urlImg={profilePhoto} />
            </div>
            <div>
            <input type="text" placeholder="What's happening?" />
            <div className='icones'>
            <Mybutton name="Twitter" />
            <Icones urlImg={icoMedia} altImg="Media" />
            <Icones urlImg={iconGif} altImg="Gif" />
            <Icones urlImg={iconPoll} altImg="Poll" />
            <Icones urlImg={iconEmoji} altImg="Emoji" />
            <Icones urlImg={iconSchedule} altImg="Schedule" />
            <Icones urlImg={iconTwitter} altImg="Twitter" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='Paragraphe' bg-black >
          </div>
          
        <h5>CNN</h5>
        <Icones urlImg={iconVerified} altImg="Verified" />
      </div>
      <Paragraphe name="presidentJoe biden touted a new agreement reached witch
 the European Union to ease Trump-era tariffs on aluminum and steel as a
 major reakthrounghthat would serve to both sthrendgthen the US steel industry 
 and combat the global climate  crisis" />
      <Photo urlim={iconPhoto} />
      <div>
        < Icones urlImg={iconReply} altImg="Reply" />
        <Icones urlImg={iconRetweet} altImg="Retweet" />
        <Icones urlImg={iconReact} altImg="React" />
        <Icones urlImg={iconShare} altImg="Share" />
      </div>
      <div>
        <h5>the Nwe York Times</h5>
        <Icones urlImg={iconVerified} altImg="Verified" />
      </div>
      <div>
        <div className='Paragraphe2'>
        </div>
        < Paragraphe name="gardening boomed during the pandemic.Six Black writers
   share how has helping themre-establish, and reimagine,
    connection to cultivation and the land"/>

      </div>
      <div>
        <Icones urlImg={iconReply} altImg="Reply" />
        <Icones urlImg={iconRetweet} altImg="Retweet" />
        <Icones urlImg={iconReact} altImg="React" />
        <Icones urlImg={iconShare} altImg="Share" />
      </div>
      <div>
        <h5>Twitter</h5>

  
<div>
  <div>
  </div>


<Icones urlImg={iconReply} altImg="Reply" />
        <Icones urlImg={iconRetweet} altImg="Retweet" />
        <Icones urlImg={iconReact} altImg="React" />
        <Icones urlImg={iconShare} altImg="Share" />

  </div>
</div>
<h5>Tweeter</h5>
<Icones urlImg={iconReply} altImg="Reply" />
        <Icones urlImg={iconRetweet} altImg="Retweet" />
        <Icones urlImg={iconReact} altImg="React" />
        <Icones urlImg={iconShare} altImg="Share" />

<div>
        <div/>
      </div>
    </>

  )
}
