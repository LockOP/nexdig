import Lottie from "lottie-react";
import "./App.css";
import Nav from "./components/nav";
import i1 from "./images/businessman-holding-blank-placard.json";
import i2 from "./images/facebook.json";
import i3 from "./images/html-5.json";
import i4 from "./images/reveal-loading.json";
import Footer from "./components/footer";
import { useRef } from "react";
import { Form } from "./components/form";

function App() {
  const contentRef = useRef();

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  const services = [
    { text: "Web/App Development", color: "#8E00D1", animation: i3 },
    { text: "Graphic Designing", color: "#039E00", animation: i4 },
    { text: "Content Writing", color: "#DA5B00", animation: i1 },
    { text: "Social Media", color: "#7700FF", animation: i2 },
  ];
  return (
    <div className="w-screen h-screen vertFlex">
      <Nav contact={scrollToBottom} />
      <div
        ref={contentRef}
        className="vertFlex"
        style={{
          alignItems: "start",
          width: "100%",
          flexGrow: 1,
          overflowY: "auto",
          
        }}
      >
        <div
          className="vertFlex defPad"
          style={{ marginTop: "40px", gap: "30px", alignItems: "center" }}
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
            Connect your favorite payment and commerce services, create
            beautiful customer journeys and expand into new markets fast—with
            one unified infrastructure.
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
              <li>ensure your business is on the latest market trends</li>
            </ul>
          </div>

          <div className="bh" style={{ width: "100%", gap: "10px" }}>
            {services.map((item) => {
              return (
                <Box
                  text={item.text}
                  color={item.color}
                  animation={item.animation}
                />
              );
            })}
          </div>
        </div>{" "}
        <Form />
        <Footer />
      </div>
    </div>
  );
}

function Box({ text = "Service Type", color = "yellow", animation = i1 }) {
  return (
    <div
      className="vertFlex bs"
      style={{
        height: "auto",
        // backgroundColor: color,
        boxSizing: "border-box",
        border: "1px solid",
        borderColor: color,
        alignItems: "center",
        borderRadius: "24px",
        padding: "20px",
        position: "relative",
      }}
    >
      <Lottie
        className="lb"
        animationData={animation}
        loop={true}
        autoplay={true}
        speed={0.6}
        style={{ width: "auto" }} // Set width and height of the animation
      />
      <div
        style={{
          // position: "absolute",
          // bottom: "0px",
          backgroundColor: "white",
          width: "100%",
          textAlign: "center",
          borderRadius: "14px",
          border: "1px solid",
          borderColor: color,
          color: color,
          paddingTop: "10px",
          paddingBottom: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <p
          className=""
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "30px",
            lineHeight: "32px",
            margin: "unset",
          }}
        >
          {text.split(" ")[0]}
        </p>
        <p
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "24px",
            lineHeight: "28px",
            margin: "unset",
          }}
        >
          {text.split(" ")[1]}
        </p>
      </div>
    </div>
  );
}

export default App;
