// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./Navbar.css";


// const navLinks = [
//   {
//     display: "Home",
//     url: "home",
//   },
//   {
//     display: "About",
//     url: "about",
//   },

//   {
//     display: "Courses",
//     url: "Courses",
//   },
//   {
//     display: "SignIn",
//     url: "signin",
//   },
//   {
//     display: "SignUp",
//     url: "signup",
//   },
//   // {
//   //   display: "+91 9876543210",
//   //   url: "#",
//   // },
// ];

// const Navbar = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="ri-pantone-line"></i> EnlightenHub.
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i class="ri-phone-line"></i> +91 9876543210
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;



// New navbar not refreshing the page

import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const navLinks = [
  {
    display: "Home",
    url: "/home", 
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "SignIn",
    url: "/signin",
  },
  {
    display: "SignOut",
    url: "/signout",
  },
  {
    display: "SignUp",
    url: "/signup",
  },
];

const Navbar = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header bg-yellow-950">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between ">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> EnlightenHub.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                    {/* <a href={item.url}>{item.display}</a> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 9876543210
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
