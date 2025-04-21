
import React, { useState } from "react";
import "./index.css";
import sampleimage from "./sample.jpg"; // Import the image

const ProfileCard = ({ name, bio, initialBgColor }) => {
const [bgColor, setBgColor] = useState(initialBgColor);
const [hovered, setHovered] = useState(false);

const handleMouseEnter = () => {
setHovered(true);
setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
};

const handleMouseLeave = () => {
setHovered(false);
setBgColor(initialBgColor);
};

return (
<div
className={`profile-card ${hovered ? "hovered" : ""}`}
style={{ background: bgColor, color: hovered ? "#000000" : "#000000" }}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<img src={sampleimage} alt={name} className="profile-pic" />
<h2 className="profile-name">{name}</h2>
<p className="profile-bio">{bio}</p>
</div>
);
};

const App = () => {
return (
<div className="app-container">
<ProfileCard
name="Hello"
bio="Bio text here"
initialBgColor="linear-gradient(135deg, #ADD8E6, #E6E6FA)"
/>
</div>
);
};

export default App;