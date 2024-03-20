
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
// import React from 'react'
import Navbar from './Components/Navbar'
import  Home from './Components/Home'
import Card from './Components/Card'
import SignIn from './Components/SignIn'
// import Content from "./Components/Content";
// import SignUp from "./Components/SignUp"
 import ContactUs from "./Components/ContactUs";




class App extends Component {
      render() {
            return(
    <div>
      <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signin">
                                SignIn
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/signin"
                            element={<SignIn />}
                        ></Route>
                        <Route
                            path="/contact"
                            element={<ContactUs />}
                        ></Route>
                    </Routes>
                </div>
                
      <Navbar/>
       <Home/>
     
      <Card title="Python" image="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600" description="
Elevate your programming skills with our Python course, designed to empower you with practical expertise and real-world applications"/>
      
      <Card title="Java developer" image="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600" description="Forge your path as a Java developer, crafting innovative solutions and driving technological advancements in the digital landscape"/>
      
      <Card title="Data analytics" image="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600" description="Unveiling actionable insights from vast datasets, driving informed decisions and strategic advancements across industries."/>
      
      <Card title="C++" image="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600" description="
Where performance meets versatility, enabling developers to craft high-speed, scalable software solutions for diverse applications"/>
      
      <Card title="Master in Chatgpt" image="https://images.pexels.com/photos/16461434/pexels-photo-16461434/free-photo-of-close-up-of-a-person-holding-a-smartphone-displaying-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=600" description=" Your gateway to boundless creativity, knowledge, and assistance, revolutionizing the way we interact with AI"/>
      
      <Card title="Computer Networking" image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="

Fueling global connectivity, computer networks enable seamless communication and resource sharing across devices"/>
      
      <Card title="Artificial intelligence" image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" description="
Harness the power of AI to amplify efficiency, drive innovation, and unlock new possibilities for businesses of all sizes"/>
      
      <Card title="Machine Learning" image="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?b=1&s=612x612&w=0&k=20&c=AdtAH8A9d_UhcAJyDn6YR7XiDlf7Fz0zWRCmqQ2lSFY=" description="
Transforming industries with data-driven insights, Machine Learning paves the way for innovation and optimization"/>
    

    

     
    </Router>
    </div>
  )
}
}
export default App;
