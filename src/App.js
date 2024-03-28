import Lottie from "lottie-react";
import "./App.css";
import Nav from "./components/nav";

import Footer from "./components/footer";
import { useRef, useState } from "react";
import { Form } from "./components/form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurWork from "./components/ourWork";
import SpecialCursor from "./components/specialCursor";
import OurExpertise from "./components/ourExpertise";

function App() {
  const contentRef = useRef();
  const duration = 500; // Duration of the scroll animation in milliseconds

  const handleScroll = (target) => {
    const targetElement = document.getElementById(target);
    const targetOffset = targetElement.offsetTop - 70;
    const startTime = performance.now();
    const element = document.getElementById("parent");
    const startScrollY = element.scrollTop;
    const duration = 500; // Adjust as needed

    const scrollAnimation = (timestamp) => {
      const progress = timestamp - startTime;
      const scrollY = easeInOutQuad(
        progress,
        startScrollY,
        targetOffset - startScrollY,
        duration
      );
      element.scrollTo(0, scrollY);

      if (progress < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  // Easing function
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollToBottom = () => {
    // if (contentRef.current) {
    //   contentRef.current.scrollTop = contentRef.current.scrollHeight;
    // }
    handleScroll("contact-form");
    // const element = document.getElementById("contact-form");
    // element.scrollIntoView({
    //   behavior: "smooth",
    // });
  };

  const [page, setPage] = useState(1);
  return (
    <Router>
      <div className="w-screen h-screen vertFlex">
        <Nav handleScroll={handleScroll} setPage={setPage} />

        <Routes>
          <Route
            path="/"
            Component={() => {
              return (
                <div
                  ref={contentRef}
                  id="parent"
                  className="vertFlex"
                  style={{
                    alignItems: "start",
                    width: "100%",
                    flexGrow: 1,
                    overflowY: "auto",
                  }}
                >
                  <SpecialCursor />
                  <div
                    className="vertFlex defPad"
                    style={{
                      marginTop: "40px",
                      gap: "30px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="t1"
                      style={{
                        width: "100%",
                        paddingTop: "40px",
                      }}
                    >
                      We are the creative digital media agency for your business
                    </div>
                    <div
                      className="t2"
                      style={{
                        fontSize: "16.88px",
                        lineHeight: "28px",
                        color: "#616161",
                      }}
                    >
                      We are a next generation digital media agency
                      understanding your business objectives. We thrive to
                      implement effective digital marketing services for your
                      business.
                    </div>
                    <div
                      className="logobg t2h"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="wt">We</div>
                      <ul
                        style={{
                          fontSize: "16.73px",
                          color: "#616161",
                          lineHeight: "28px",
                        }}
                      >
                        <li>understand business culture.</li>
                        <li>craft your business goals to the best.</li>
                        <li>market your vision with healthy culture</li>
                        <li>
                          ensure your business is on the latest market trends
                        </li>
                      </ul>
                    </div>
                    <OurExpertise />
                    <OurWork />
                  </div>
                  <Form />
                  <Footer />
                </div>
              );
            }}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
