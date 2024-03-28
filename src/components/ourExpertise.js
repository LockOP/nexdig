import { Carousel, Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import img23 from "../images/footerbg.jpg";
import { GrInstagram } from "react-icons/gr";
import { PiGlobe } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const content = (label, paras, key) => {
  return (
    <div
      key={key + "xyzF"}
      className="vertFlex"
      style={{
        gap: "10px",
      }}
    >
      <div
        className="vertFlex"
        style={{
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {label}
        </div>
        {paras.map((item, index) => {
          return (
            <div
              style={{ color: "white", fontSize: "16px" }}
              className="vertFlex"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function OurExpertise() {
  const expertise = [
    {
      label: "Web Development",
      paras: [
        "Harnessing cutting-edge technologies like ReactJs, NodeJs, Tailwind, MongoDb and more, our web development prowess is unrivalled. Crafting dynamic, responsive websites is not just our specialty; it's our passion. Whether you crave sleek corporate platforms or immersive e-commerce experiences, our expertise ensures your digital presence outshines the competition.",
      ],
    },
    {
      label: "Graphic Designing",
      paras: [
        "From pixel-perfect logos to stunning marketing collateral, our graphic design team blends creativity with technical finesse. We don't just create visuals; we craft visual identities that resonate with your audience and elevate your brand to new heights in the digital realm.",
      ],
    },
    {
      label: "Social Media Marketing",
      paras: [
        "Dive into the intricacies of social media with confidence. Our strategies are finely tuned to harness the power of platforms like never before. Whether it's boosting engagement, driving conversions, or expanding your reach, our social media wizards have got you covered.",
      ],
    },
    {
      label: "Campaign Marketing (Google and Meta Ads)",
      paras: [
        "Unleash the full potential of digital advertising with our campaign marketing prowess. From Google Ads to Meta Ads, we optimize your campaigns to laser-target your audience, driving results that speak volumes for your business. We have run several campaigns for startups all across India successfully and are proud to deliver results to the businesses.",
      ],
    },
    {
      label: "Application Development",
      paras: [
        "Delving into the realm of application development, we navigate the intricacies of coding languages and frameworks with finesse. Whether it's crafting sleek mobile apps or robust web-based solutions, our team is fluent in the languages of innovation. From UI/UX design to backend architecture, we blend technical prowess with creative vision to bring your app ideas to life.",
      ],
    },
  ];

  const [dynamicWidth, setDynamicWidth] = useState(
    `${window.innerWidth - (window.innerWidth < 920 ? 50 : 140)}px`
  );

  useEffect(() => {
    const handleResize = () => {
      setDynamicWidth(
        `${window.innerWidth - (window.innerWidth < 920 ? 50 : 140)}px`
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="vertFlex"
      style={{ width: "100%", gap: "0px", alignItems: "center" }}
      id="our-clients"
    >
      <p className="ft1-2" style={{ alignSelf: "self-start" }}>
        Our Expertise
      </p>
      <Carousel
        autoplaySpeed={3000}
        dotPosition="bottom"
        style={{
          width: dynamicWidth,
          backgroundColor: "#8000ff",
          color: "white",
          height: "auto",
          borderRadius: "8px",
          padding: "40px",
        }}
        autoplay
      >
        {expertise.map((item, ind) => {
          return content(item.label, item.paras, ind);
        })}
      </Carousel>
    </div>
  );
}

export default OurExpertise;
