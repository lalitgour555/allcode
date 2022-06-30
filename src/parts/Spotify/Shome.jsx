import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Spotify.css";
const Shome = () => {
  let songs = [
    {
      songName: "Bekhayali - Kabir Singh 128 Kbps",
      filePath: "/Spotifyimg/songs/1.mp3",
      coverPath: "/Spotifyimg/Scover/1.jpg",
    },
    {
      songName: "Main-Bhola-Parbat-Ka(PaglaSongs)",
      filePath: "/Spotifyimg/songs/2.mp3",
      coverPath: "/Spotifyimg/Scover/2.jpg",
    },
    {
      songName: "Mann Bharryaa 2.0 - Shershaah 128 Kbps",
      filePath: "/Spotifyimg/songs/3.mp3",
      coverPath: "/Spotifyimg/Scover/3.jpg",
    },
    {
      songName: "Naacho Naacho - RRR 128 Kbps",
      filePath: "/Spotifyimg/songs/4.mp3",
      coverPath: "/Spotifyimg/Scover/4.jpg",
    },
    {
      songName: "Raataan Lambiyan - Shershaah",
      filePath: "/Spotifyimg/songs/5.mp3",
      coverPath: "/Spotifyimg/Scover/5.jpg",
    },
    {
      songName: "Ranjha - Shershaah 128 Kbps",
      filePath: "/Spotifyimg/songs/6.mp3",
      coverPath: "/Spotifyimg/Scover/6.jpg",
    },
    {
      songName: "Tera Ban Jaunga - Kabir Singh 128 Kbps",
      filePath: "/Spotifyimg/songs/7.mp3",
      coverPath: "/Spotifyimg/Scover/7.jpg",
    },
    {
      songName: "Tujhe Kitna Chahne Lage - Kabir Singh 128 Kbps",
      filePath: "/Spotifyimg/songs/8.mp3",
      coverPath: "/Spotifyimg/Scover/8.jpg",
    },
    {
      songName: "Tumhari Kasam - Salam-e-Ishq",
      filePath: "/Spotifyimg/songs/2.mp3",
      coverPath: "/Spotifyimg/Scover/9.jpg",
    },
    {
      songName: "Na Jaana - Salam-e-Ishq",
      filePath: "/Spotifyimg/songs/13.wav",
      coverPath: "/Spotifyimg/Scover/9.jpg",
    },
  ];
  const [songlist, setsonglist] = useState(songs);
  const [rangevalue, setrangevalue] = useState(0);
  const [audio, setaudio] = useState(new Audio("/Spotifyimg/songs/1.mp3"));
  const [play, setplay] = useState("pause");
  const [gif, setgif] = useState(false);
  const [name, setname] = useState("");
  const [audioplay, setaudioplay] = useState("fa-play-circle");
  const masterPlay = (songpath, e) => {
    if (play === "pause") {
      setplay("play");
      setaudio(new Audio(songpath));
      setaudioplay("fa-play-circle");
      setname(e);
      setgif(false);
      audio.pause();
    } else {
      setplay("pause");
      setaudioplay("fa-pause-circle");
      audio.play();
      setgif(true);
    }
  };
  const masterPlay1 = () => {
    if (play === "pause") {
      setplay("play");
      //     setaudio( Audio(songpath))
      setaudioplay("fa-play-circle");
      audio.pause();
    } else {
      setplay("pause");
      setaudioplay("fa-pause-circle");
      audio.play();
    }
  };
  const [a, seta] = useState("");
  useEffect(() => {
   
    if (a) {
      audio.play();
    }
  }, [a]);
  audio.addEventListener("timeupdate", () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100);
    if (progress === 100) {
      let a = songs[Math.floor(Math.random() * songs.length)];
      let b = a.filePath;
      console.log(b);
      seta(b);
      setaudio(new Audio(b));
    } else {
      setrangevalue(progress);
    }
  });
  const [search, setsearch] = useState("");
  const musicsearch = () => {
    const searchmusic = songs.filter((song) => {
      return song.songName.includes(search);
    });
    console.log(searchmusic);
    setsonglist(searchmusic);
  };
  return (
    <div>
     
      <nav>
        <ul>
          <li className="brand">
            <img src="/Spotifyimg/logo.png" alt="Spotify" /> Spotify
          </li>
          <li>Home</li>
          <li>About</li>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <i className="fas fa-search" onClick={musicsearch} />
        </ul>
      </nav>
      <div className="container">
        <div className="songList">
          <h1>Best of NCS - No Copyright Sounds</h1>
          <div className="songItemContainer">
            {/* h1 not include  in mapfuction but  in in div h1  uses  in map fuction  */}
            {songlist.map((e, index) => {
              return (
                <div key={index}>
                  <div className="songItem">
                    <img src={e.coverPath} alt="1" />
                    <span className="songName"> {e.songName}</span>
                    {/* <audio src={e.filePath} controls autoPlay/> */}
                    <span className="songlistplay">
                      <span className="timestamp">
                        05:34
                        <i
                          className="far songItemPlay fa-play-circle"
                          onClick={() => {
                            masterPlay(e.filePath, e.songName);
                          }}
                        ></i>
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <div className="songBanner"></div>
      </div>
      <div className="bottom">
        <input
          type="range"
          value={rangevalue}
          id="myProgressBar"
          name="vol"
          min="0"
          max="100"
        ></input>
        <div className="icons flex">
          <i className="fas fa-3x fa-step-backward" id="previous"></i>
          <div>
            <i
              className={`far fa-3x ${audioplay}`}
              id="masterPlay"
              onClick={masterPlay1}
            ></i>
          </div>
          <i className="fas fa-3x fa-step-forward" id="next"></i>
        </div>
        <div className="songInfo">
          {gif ? (
            <img src="./Spotifyimg/playing.gif" width="42px" alt="" id="gif" />
          ) : null}
          {gif ? <span id="masterSongName">{name}</span> : null}
        </div>
      </div>
    </div>
  );
};
export default Shome;
