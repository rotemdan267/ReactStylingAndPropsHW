import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StudentComp, StudentListComp } from './Components/StudentComp';
import { YoutubeVideoListComp } from './Components/YoutubeComp';

function GetYoutubeList() {
  let youtubeVideos = [
    {
      title: "Redux in 100 Seconds",
      youtubeurl: "https://www.youtube.com/embed/_shA5Xwe8_4",
      width: 560,
      height: 315 
    },
    {
      title: "My Bleeding Edge Tech Stack for 2025",
      youtubeurl: "https://www.youtube.com/embed/rFP7rUYtOOg",
      width: 560,
      height: 315
    },
    {
      title: "100+ Web Development Things you Should Know",
      youtubeurl: "https://www.youtube.com/embed/erEgovG9WBs",
      width: 560,
      height: 315
    },
    {
      title: "Web5... The 2222Web3 Killer?",
      youtubeurl: "https://www.youtube.com/embed/HDZWWFSZUF0",
      width: 560,
      height: 315
    }
  ]
  return youtubeVideos;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <StudentListComp></StudentListComp>
  <YoutubeVideoListComp YoutubeVideos={GetYoutubeList()}></YoutubeVideoListComp>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
