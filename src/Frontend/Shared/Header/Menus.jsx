import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menus = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Detect language changes
    const checkLanguage = () => {
      const googleFrame = document.querySelector('.goog-te-menu-frame');
      if (googleFrame) {
        const iframeDoc = googleFrame.contentDocument || googleFrame.contentWindow.document;
        const selectedOption = iframeDoc.querySelector('.goog-te-menu2-item-selected');
        if (selectedOption) {
          const lang = selectedOption.getAttribute('data-value');
          setCurrentLanguage(lang === 'hi' ? 'hi' : 'en');
        }
      }
    };

    // check the dropdown directly
    const checkComboLanguage = () => {
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        setCurrentLanguage(combo.value === 'hi' ? 'hi' : 'en');
      }
    };

    // Set up observers and intervals to detect language changes
    const observer = new MutationObserver(checkComboLanguage);
    const target = document.getElementById('google_translate_element');
    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }

    const interval = setInterval(checkLanguage, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const getTranslatedText = (englishText, hindiText) => {
    return currentLanguage === 'hi' ? hindiText : englishText;
  };

  return (
    <>
      <header>
        <div className="logo-sec-wraper">
          <div className="container">
            <div className="row d-flex justify-content-between flex-wrap align-items-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 logo-sec">
                <span href="#" className="wow zoomIn notranslate">
                  <NavLink to="/" className="notranslate">
                    <img src="images/logo.jpg" alt="Logo" />
                  </NavLink>
                </span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 menu-sec">
                <div className="logo-sec-wraper">
                  <div className="d-flex justify-content-end">
                    <nav className="navbar navbar-expand-lg p-0 custom-nav notranslate">
                      <button
                        className="navbar-toggler navbar-toggler-right collapsed notranslate"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navb"
                        aria-expanded="false"
                      >
                        <i className="fas fa-bars"></i>
                      </button>

                      <div className="navbar-collapse collapse notranslate" id="navb">
                        <ul className="navbar-nav notranslate">
                          
                          <NavLink className="nav-item notranslate" to="/">
                            <span className="notranslate">
                              {getTranslatedText("Home", "होम")}
                            </span>
                          </NavLink>
                          
                          <NavLink className="nav-item notranslate" to="/events">
                            <span className="notranslate">
                              {getTranslatedText("Events", "इवेंट्स")}
                            </span>
                          </NavLink>
                          
                          <a className="nav-item menu-item-expanded notranslate">
                            <span
                              className="nav-link dropdown-toggle notranslate"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {getTranslatedText("Schemes", "स्कीम्स")}
                            </span>
                            <ul
                              className="sub-menu notranslate"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <Link
                                className="nav-item notranslate"
                                to="/prevailing-schemes"
                              >
                                <span className="dropdown-item notranslate">
                                  {getTranslatedText("Prevailing Schemes", "प्रचलित स्कीम्स")}
                                </span>
                              </Link>
                              <Link
                                className="nav-item notranslate"
                                to="/pension-schemes"
                              >
                                <span className="dropdown-item notranslate">
                                  {getTranslatedText("Pension Schemes", "पेंशन स्कीम्स")}
                                </span>
                              </Link>
                            </ul>
                          </a>
                          
                          <NavLink className="nav-item notranslate" to="/circulars">
                            <span className="notranslate">
                              {getTranslatedText("Circulars & Notifications", "सर्कुलर्स और नोटिफिकेशन्स")}
                            </span>
                          </NavLink>
                          
                          <NavLink className="nav-item notranslate" to="/photo-gallery">
                            <span className="notranslate">
                              {getTranslatedText("Event Gallery", "इवेंट गैलरी")}
                            </span>
                          </NavLink>
                          
                          <Link className="nav-item menu-item-expanded notranslate">
                            <span
                              className="nav-link dropdown-toggle notranslate"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {getTranslatedText("Department Profile", "डिपार्टमेंट प्रोफाइल")}
                            </span>
                            <ul
                              className="sub-menu notranslate"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <Link className="nav-item notranslate" to="/about-us">
                                <span className="dropdown-item notranslate">
                                  {getTranslatedText("About Us", "अबाउट अस")}
                                </span>
                              </Link>
                              <Link className="nav-item notranslate" to="/vision">
                                <span className="dropdown-item notranslate">
                                  {getTranslatedText("Vision", "विजन")}
                                </span>
                              </Link>
                              <Link
                                className="nav-item notranslate"
                                to="/organizational-setup"
                              >
                                <span className="dropdown-item notranslate">
                                  {getTranslatedText("Organization Setup", "ऑर्गनाइजेशन सेटअप")}
                                </span>
                              </Link>
                            </ul>
                          </Link>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menus;





// import React from "react";
// import { Link, NavLink } from "react-router-dom";


// const Menus = () => {
//   return (
//     <>
//       <header>
//         {/* <!-- Logo Section Header Start --> */}
//         <div className="logo-sec-wraper">
//           <div className="container">
//             <div className="row d-flex justify-content-between flex-wrap align-items-center">
//               <div className="col-12 col-sm-12 col-md-12 col-lg-3 logo-sec">
//                 <span href="#" className="wow zoomIn">
//                   <NavLink to="/">
//                     {" "}
//                     <img src="images/logo.jpg" alt="Logo" />{" "}
//                   </NavLink>
//                   {/* <!-- <p>Department of
//                            <br>Art culture & Language <span>Government of NCT of Delhi</span> </p> --> */}
//                 </span>
//               </div>
//               <div className="col-12 col-sm-12 col-md-12 col-lg-9 menu-sec">
//                 <div className="logo-sec-wraper">
//                   <div className="d-flex justify-content-end">
//                     <nav className="navbar navbar-expand-lg p-0 custom-nav">
//                       <button
//                         className="navbar-toggler navbar-toggler-right collapsed"
//                         type="button"
//                         data-toggle="collapse"
//                         data-target="#navb"
//                         aria-expanded="false"
//                       >
//                         <i className="fas fa-bars"></i>
//                       </button>

//                         <div className="navbar-collapse collapse" id="navb">
//                           <ul className="navbar-nav">
                            
//                             <NavLink className="nav-item" to="/">
//                             <span>Home</span>
//                             </NavLink>
                            
//                             <NavLink className="nav-item" to="/events">
//                               <span>Events</span>
//                             </NavLink>
//                             <a className="nav-item menu-item-expanded">
//                               <span
//                                 className="nav-link dropdown-toggle"
//                                 id="navbarDropdownMenuLink"
//                                 data-toggle="dropdown"
//                                 aria-haspopup="true"
//                                 aria-expanded="false"
//                               >
//                                 Schemes
//                               </span>
//                               <ul
//                                 className="sub-menu"
//                                 aria-labelledby="navbarDropdownMenuLink"
//                               >
//                                 <Link
//                                   className="nav-item"
//                                   to="/prevailing-schemes"
//                                 >
//                                   <span className="dropdown-item">
//                                     Prevailing Schemes
//                                   </span>
//                                 </Link>
//                                 <Link
//                                   className="nav-item"
//                                   to="/pension-schemes"
//                                 >
//                                   <span className="dropdown-item">
//                                     Pension Schemes
//                                   </span>
//                                 </Link>
//                               </ul>
//                             </a>
//                             <NavLink className="nav-item" to="/circulars">
//                               <span>Circulars & Notifications</span>
//                             </NavLink>
//                             {/* <NavLink className="nav-item" to="tenders">
//                             <span>Notice & Tenders</span>
//                           </NavLink> */}
//                             <NavLink className="nav-item" to="/photo-gallery">
//                               <span>Event Gallery</span>
//                             </NavLink>
//                             <Link className="nav-item menu-item-expanded">
//                               <span
//                                 className="nav-link dropdown-toggle"
//                                 id="navbarDropdownMenuLink"
//                                 data-toggle="dropdown"
//                                 aria-haspopup="true"
//                                 aria-expanded="false"
//                               >
//                                 Department Profile
//                               </span>
//                               <ul
//                                 className="sub-menu"
//                                 aria-labelledby="navbarDropdownMenuLink"
//                               >
//                                 <Link className="nav-item" to="/about-us">
//                                   <span className="dropdown-item">
//                                     About Us
//                                   </span>
//                                 </Link>
//                                 <Link className="nav-item" to="/vision">
//                                   <span className="dropdown-item">Vision</span>
//                                 </Link>
//                                 <Link
//                                   className="nav-item"
//                                   to="/organizational-setup"
//                                 >
//                                   <span className="dropdown-item">
//                                     Organization Setup
//                                   </span>
//                                   {/* <span
//                                   className="dropdown-item dropdown-toggle"
//                                   id="navbarDropdownMenuLink2"
//                                   data-toggle="dropdown"
//                                   aria-haspopup="true"
//                                   aria-expanded="false"
//                                 >
//                                   Organization Setup
//                                 </span> */}
//                                   {/* <ul
//                                   className="child-sub-menu"
//                                   aria-labelledby="navbarDropdownMenuLink2"
//                                 >
//                                   <NavLink className="nav-item" to="">
//                                     <span>action 2</span>
//                                   </NavLink>
//                                   <NavLink className="nav-item" to="">
//                                     <span>action 3</span>
//                                   </NavLink>
//                                 </ul> */}
//                                 </Link>
//                                 {/* <Link className="nav-item" to="who">
//                                 <span className="dropdown-item">Who's Who</span>
//                               </Link> */}
//                               </ul>
//                             </Link>
//                           </ul>
//                         </div>
                     
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- Logo Section Header End --> */}
//       </header>
//     </>
//   );
// };

// export default Menus;
