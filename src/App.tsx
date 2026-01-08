import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import avatar from "./profile/color_picker.png"
import Project from './project/Project';
import noise_icon from "./project/noise_icon.jpg"
import better_beacon_effects_icon from "./project/better_beacon_effects_icon.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile profile={{ name: "Alex Dollar", avatar: avatar }} />
        <div className='bio'>
          <p>Hello, I'm Alex Dollar, known to some as Versel. I am an aspiring technical artist / graphics programmer and active computer scientist. I have a bachelors degree in computer science and have developed / worked on many projects.</p>
          <p><a href="https://github.com/AlexDorian7" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/alex-dollar-841946238/" target="_blank">Linked In</a></p>
        </div>
      </header>
      <h1>My Projects</h1>
      <Project project={{ name: "Portfolio Site", image: "", description: "This is the site you are currently on!", link: { href: "https://github.com/AlexDorian7/AlexDorian7.github.io", text: "Github" } }} />
      <Project project={{ name: "Dragon Score", image: "", description: "This was a quix program written in Java and JavaFX as a senior project. The purpose of this program was to quiz people on logic so they could practice different forms of logic.", link: { href: "https://github.com/AlexDorian7/dragon-score", text: "Github" } }} />
      <Project project={{ name: "URL Page Rank", image: "", description: "This was written as an honors project for my linear algebra class. It is a python program that will check a set of wab pages and any pages linked to and then perform the page rank algorthim on them.", link: { href: "https://github.com/AlexDorian7/url-page-rank", text: "Github" } }} />
      <Project project={{ name: "Starship", image: "", description: "Starship was a project I was making in TypeScript / Express. It was an image board website with accounts and much more.", link: { href: "https://github.com/AlexDorian7/starship", text: "Github" } }} />
      <Project project={{ name: "Python ODE Euler Method", image: "", description: "This project is a ODE solver that used euler's method. It was written in python as a honors project.", link: { href: "https://github.com/AlexDorian7/PythonODEEulerMethod", text: "Github" } }} />
      <Project project={{ name: "Windows ODE Euler Method", image: "", description: "This project is a ODE solver that used euler's method. It was written in C++ for windows.", link: { href: "https://github.com/AlexDorian7/WindowsODEEulerMethod", text: "Github" } }} />
      <Project project={{ name: "Slope Field Calculator", image: "", description: "This is a slope field calculator that was written in java.", link: { href: "https://github.com/AlexDorian7/slope-field-calculator", text: "Github" } }} />
      <h1>Minecraft Projects</h1>
      <Project project={{ name: "Better Beacon Effects", image: better_beacon_effects_icon, description: "This is my biggest minecraft mod with over 10,000 downloads! It makes the beacons in minecraft look better! The project can be found on Curse Forge and Modrinth", link: { href: "https://github.com/AlexDorian7/BetterBeaconEffects", text: "Github" } }} />
      <Project project={{ name: "Noise Customizer", image: noise_icon, description: "This minecraft mod removes the 30 million world border as well as allowing you to customize many aspects of the noise generator. The project can be found on Modrinth", link: { href: "https://github.com/AlexDorian7/noise-customizer", text: "Github" } }} />
    </div>
  );
}

export default App;
