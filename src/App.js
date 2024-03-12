import Lottie from "lottie-react";
import "./App.css";
import Nav from "./components/nav";
import i1 from "./images/businessman-holding-blank-placard.json";
import i2 from "./images/facebook.json";
import i3 from "./images/html-5.json";
import i4 from "./images/reveal-loading.json";
import Footer from "./components/footer";
import { useRef } from "react";

function App() {
  const contentRef = useRef();

  const scrollToBottom = () => {
    console.log("trigrer");
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  const services = [
    { text: "Web Development", color: "#8E00D1", animation: i3 },
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
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "67.92px",
              paddingTop: "40px",
            }}
          >
            We are the creative digital media agency for your business
          </div>
          <div
            style={{
              width: "60%",
              textAlign: "center",
              fontSize: "16.88px",
              lineHeight: "28px",
              color: "#616161",
              paddingBottom: "80px",
            }}
          >
            Connect your favorite payment and commerce services, create
            beautiful customer journeys and expand into new markets fast—with
            one unified infrastructure.
          </div>
          <div
            className="horiFlex logobg"
            style={{
              height: "60vh",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "44.81px" }}>We</div>
            <ul
              style={{
                fontSize: "16.73px",
                color: "#616161",
                lineHeight: "28px",
              }}
            >
              <li>understand business culture.</li>
              <li>craft your business goals to the best.</li>
              <li>market your vision with healthy culture</li>{" "}
              <li>ensure your business is on the latest market trends</li>
            </ul>
          </div>

          <div
            className="horiFlex"
            style={{ width: "100%", gap: "10px", marginTop: "80px" }}
          >
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
        <Footer />
      </div>
    </div>
  );
}

function Box({ text = "Service Type", color = "yellow", animation = i1 }) {
  return (
    <div
      className="vertFlex"
      style={{
        flex: 1,
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
        animationData={animation}
        loop={true}
        autoplay={true}
        speed={0.6}
        style={{ width: "auto", height: "300px" }} // Set width and height of the animation
      />
      <div
        style={{
          // position: "absolute",
          // bottom: "0px",
          // fontFamily: "Roboto Condensed",
          backgroundColor: "white",
          width: "100%",
          textAlign: "center",
          padding: "10px",
          borderRadius: "14px",
          border: "1px solid",
          borderColor: color,
          // color: "white",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default App;
