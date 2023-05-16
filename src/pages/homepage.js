import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/header";
import birthdaySong from "../birthday_song.mp3"; // Import the birthday song

const Homepage = () => {
  const [balloons, setBalloons] = useState([]);
  const audioRef = React.createRef();

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, (index + 1) * 100);
    });
  }, []);

  useEffect(() => {
    // Function to create a new balloon
    const createBalloon = () => {
      const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: Date.now(),
        left: `${Math.floor(Math.random() * 100)}vw`,
        animationDuration: `${Math.floor(Math.random() * 5) + 5}s`,
        backgroundColor: randomColor,
      };
    };

    const interval = setInterval(() => {
      setBalloons((prevBalloons) => [...prevBalloons, createBalloon()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    audioRef.current.play(); // Start playing the birthday song
  }, [audioRef]);

  return (
    <div>
      <Header />
      <div className="container">
        <audio ref={audioRef} src={birthdaySong} loop />{" "}
        {/* Add the audio element */}
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: balloon.left,
              animationDuration: balloon.animationDuration,
              backgroundColor: balloon.backgroundColor,
            }}
          >
            Happy Birthday
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
