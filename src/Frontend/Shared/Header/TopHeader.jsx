import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fontSizeDecrease,
  fontSizeIncrease,
  fontSizeOriginal,
} from "../../../redux/features/uiSlice";

const TopHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();

useEffect(() => {
  // Load script once
  if (!document.getElementById("google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }

  // init function
  window.googleTranslateElementInit = () => {
    if (!document.getElementById("google_translate_element").innerHTML.trim()) {
      /* eslint-disable no-undef */
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          // includedLanguages: "en,hi,gu,pa,bn,mr,ta,te,ml,kn,ur",
          autoDisplay: false,
        },
        "google_translate_element"
      );
      /* eslint-enable no-undef */
      
      // Force English to be visible
      forceEnglishInDropdown();
    }
  };

  const forceEnglishInDropdown = () => {
    const checkAndAddEnglish = () => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo && combo.options.length > 0) {
        const hasEnglish = Array.from(combo.options).some(opt => opt.value === 'en');
        
        if (!hasEnglish) {
          // Add English option at position 1 (right after the first option)
          const englishOption = new Option('English', 'en');
          combo.add(englishOption, 1);
        }
        
        // Update first option to say "Translate"
        const firstOption = combo.options[0];
        if (firstOption && /select/i.test(firstOption.text)) {
          firstOption.text = "Language";
          firstOption.disabled = true;
        }
      }
    };

    // Check multiple times as Google Translate initializes
    setTimeout(checkAndAddEnglish, 500);
    setTimeout(checkAndAddEnglish, 1000);
    setTimeout(checkAndAddEnglish, 2000);
  };

  // Also set up observer for when language changes
  const observer = new MutationObserver(() => {
    setTimeout(forceEnglishInDropdown, 300);
  });

  const target = document.getElementById("google_translate_element");
  if (target) {
    observer.observe(target, { childList: true, subtree: true });
  }

  return () => {
    observer.disconnect();
    try {
      delete window.googleTranslateElementInit;
    } catch (e) {
      window.googleTranslateElementInit = undefined;
    }
  };
}, []);


  // Rest of the header
  const blackTheme = () => document.body.classList.add("black-theme");
  const normalTheme = () => document.body.classList.remove("black-theme");

  const skipToMain = (e) => {
    e.preventDefault();
    const homePaths = ["/", "/home", ""];
    const isHomePage = homePaths.includes(location.pathname);

    if (isHomePage) {
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.setAttribute("tabindex", "-1");
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => mainContent.removeAttribute("tabindex"), 1000);
      }
    } else {
      window.scrollBy({ top: 250, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 left-nav">
            <ul>
              <li><NavLink to="/sitemap">Sitemap</NavLink></li>
              <li><NavLink to="/contact-us">Contact</NavLink></li>
            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-8 col-lg-8 top-right-nav">
            <ul>
              <li>
                <a
                  href={import.meta.env.VITE_ACL_ADMIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Artist Login
                </a>
              </li>
              <li>
                <a href="#main-content" onClick={skipToMain}>
                  Skip to Main Content
                </a>
              </li>
              <li><NavLink to="/screen-reader">Screen Reader Access</NavLink></li>
              <li className="text-size">
                <a href="#" onClick={(e) => { e.preventDefault(); dispatch(fontSizeDecrease()); }}>A-</a>
                <a href="#" onClick={(e) => { e.preventDefault(); dispatch(fontSizeOriginal()); }}>A</a>
                <a href="#" onClick={(e) => { e.preventDefault(); dispatch(fontSizeIncrease()); }}>A+</a>
                <a type="button" className="blackbg p-1" onClick={blackTheme}>A</a>
                <a type="button" className="whitebg p-1" onClick={normalTheme}>A</a>
              </li>

              {/* 🟢 Google Translate */}
              <li className="login-btn nobdr lang">
                <div id="google_translate_element"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;




// import React, { useEffect } from "react";
// import { NavLink, useLocation  } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   fontSizeDecrease,
//   fontSizeIncrease,
//   fontSizeOriginal,
// } from "../../../redux/features/uiSlice";


// const TopHeader = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   console.log(location.pathname);




//   // For Themes
//   const blackTheme = () => {
//     document.body.classList.add("black-theme");
//   };

//   const normalTheme = () => {
//     document.body.classList.remove("black-theme");
//   };

//   // Skip to main content
// const skipToMain = (e) => {
//   e.preventDefault();

//   const homePaths = ['/', '/home', ''];
//   const isHomePage = homePaths.includes(location.pathname);

//   console.log('Is Home Page:', isHomePage);

//   if (isHomePage) {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       mainContent.setAttribute('tabindex', '-1');
//       mainContent.focus();
//       mainContent.scrollIntoView({ behavior: "smooth" });
//       setTimeout(() => mainContent.removeAttribute('tabindex'), 1000);
//     }
//   } else {
//     window.scrollBy({
//       top: 250,
//       left: 0,
//       behavior: 'smooth'
//     });
//   }
// };


//   return (
//     <div className="top-header">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-12 col-sm-12 col-md-4 col-lg-4 left-nav">
//             <ul>
//               <li>
//                 <NavLink to="/sitemap">Sitemap</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact-us">Contact</NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="col-12 col-sm-12 col-md-8 col-lg-8 top-right-nav">
//             <ul>
//               <li>
//                 <a
//                   href={import.meta.env.VITE_ACL_ADMIN_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Artist Login
//                 </a>
//               </li>
//               <li>
//                  <a 
//                   href="#main-content" 
//                   onClick={skipToMain}
//                   className="skip-to-content"
//                 >
//                   Skip to Main Content
//                 </a>
//               </li>
//               <li>
//                 <NavLink to="/screen-reader">Screen Reader Access</NavLink>
//               </li>
//               <li>
//                 <NavLink to="#">Translate</NavLink>
//               </li>
//               <li className="text-size">
//                 <a  
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     dispatch(fontSizeDecrease());
//                   }}
//                 >
//                   A-
//                 </a>
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     dispatch(fontSizeOriginal());
//                   }}
//                 >
//                   A
//                 </a>
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     dispatch(fontSizeIncrease());
//                   }}
//                 >
//                   A+
//                 </a>
//                 <a type="button" className="blackbg p-1" onClick={blackTheme}>
//                   A
//                 </a>
//                 <a type="button" className="whitebg p-1" onClick={normalTheme}>
//                   A
//                 </a>
//               </li>
//               <li className="login-btn nobdr lang">
//                 <div id="google_translate_element"></div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopHeader;
