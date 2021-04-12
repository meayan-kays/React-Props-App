import React from 'react'
import './App.css';
import Profile from './profile/Profile';
import image from './profilePhoto.jpg'


function App() {
  return (
    <div className="App" >
        <Profile fullName="Kays Meayan"
        bio = "I am from Ben Gardane in Tunisia. I am 29 years old."
        profession = "Full Stack JS Developer">
            <div >
              <img src={image} alt="Photo_Profile" style={{height : "400px", width : "270px", borderRadius : "50px 20px"}}/>
            </div>
        </Profile>
    </div>
  );
}

export default App;
