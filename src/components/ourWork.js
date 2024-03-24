import { Collapse } from "antd";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import img23 from "../images/footerbg.jpg";
import { GrInstagram } from "react-icons/gr";
import { PiGlobe } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const content = (paras, key, links) => {
  return (
    <div
      className="vertFlex"
      style={{
        gap: "10px",
      }}
    >
      {paras.map((item, index) => {
        return (
          <div key={key * 10 + index} className="horiFlex ctxt" style={{}}>
            {item}
          </div>
        );
      })}
      <div
        style={{
          gap: "15px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {links.website !== "" && (
          <a
            rel="noreferrer"
            href={links.website}
            target="_blank"
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #797979",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
              }}
            >
              <PiGlobe color="black" size={22} />
            </div>
          </a>
        )}
        {links.instagram !== "" && (
          <a
            rel="noreferrer"
            href={links.instagram}
            target="_blank"
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #797979",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
              }}
            >
              <GrInstagram color="black" size={16} />
            </div>
          </a>
        )}
        {links.facebook !== "" && (
          <a
            rel="noreferrer"
            href={links.facebook}
            target="_blank"
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #797979",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
              }}
            >
              <FaFacebookF color="black" size={16} />
            </div>
          </a>
        )}
        {links.linkedin !== "" && (
          <a
            rel="noreferrer"
            href={links.linkedin}
            target="_blank"
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #797979",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
              }}
            >
              <FaLinkedinIn color="black" size={16} />
            </div>
          </a>
        )}
        {links.twitter !== "" && (
          <a
            rel="noreferrer"
            href={links.twitter}
            target="_blank"
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #797979",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
              }}
            >
              <FaTwitter color="black" size={16} />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

function OurWork() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const clientData = [
    {
      label: "Aikyam Aviation",
      paras: [
        "Worked with a leading luxury charter rental-based air travel services startup in India for enhancing their Web development platforms and growing the business digitally via marketing strategies such as Facebook Ads, Google Ads and Content marketing.",
        "Aikyam Aviation is India's one of the top luxury charter service agencies that provides charter services. The social outreach program helped their potential customers connect with them via different platforms.",
        "We created comprehensive Google and Meta advertising initiatives on a global scale for the company, yielding outstanding outcomes in conversion rates and attracting clientele with a keen interest in luxury charter services to Aikyam Aviation. Our social media outreach strategy incorporated the deployment of sophisticated graphics and content marketing tactics to expand audience reach and establish a prominent brand identity within the pilgrimage demographic in India.",
      ],
      links: {
        website: "https://www.aikyamaviation.in/",
        instagram: "https://www.instagram.com/aikyamaviation/",
        facebook: "https://www.facebook.com/aviationaikyam",
        linkedin: "https://www.facebook.com/aviationaikyam",
        twitter: "https://twitter.com/Aikyamaviation",
      },
    },
    {
      label: "Ultimate Energy Resource Pvt. Ltd.",
      paras: [
        "We engineered a fully integrated web platform for UERPL, a burgeoning skill development startup situated in Hyderabad, India. This project encompassed the seamless integration of third-party advertisements onto the web interface, enhancing its revenue-generating capabilities while ensuring a cohesive user experience.",
        "Ultimate Energy resource Pvt. Ltd. manages the skills portfolio including the Govt Schemes PMKVY, NULM, ESDM and Agriculture Spraying Drones contributing to development of the skilling ecosystem in the country.",
        "The project also included adding third party Advertisements on the web platform.",
      ],
      links: {
        website: "www.uerskills.com",
        instagram: "https://www.instagram.com/ultimateenergyresource/",
        facebook: "https://www.facebook.com/uerskills",
        linkedin:
          "https://www.linkedin.com/company/ultimate-energy-resource-private-limited/",
        twitter: "",
      },
    },
    {
      label: "AgriCapita",
      paras: [
        "We developed a cutting-edge web platform for Agricapita, an innovative Agritech startup dedicated to delivering precision farming solutions and actionable insights to farmers globally. Our scope of work extended beyond web development to encompass bolstering their online visibility across various channels.",
        "Additionally, we seamlessly integrated the web pages with their end-user application data, facilitating a unified data analytics ecosystem. This comprehensive project involved not only web development but also the synchronization of web data portals with the application's analytics platform, ensuring seamless data flow and enhanced decision-making capabilities for farmers.",
      ],
      links: {
        website: "http://www.agricapita.com",
        instagram: "",
        facebook: "https://www.facebook.com/Agricapita",
        linkedin: "https://www.linkedin.com/company/agricapita",
        twitter: "",
      },
    },
    {
      label: "EcoCapita",
      paras: [
        "We engineered a fully integrated web platform for EcoCapita, a forward-thinking Carbon Credit trading startup headquartered in Hyderabad, India. EcoCapita specializes in providing comprehensive Greenhouse Gas emission reduction advisory services, spanning from identifying potential emission reduction projects to facilitating revenue generation through trading emission reduction credits.",
        "Our involvement in the project entailed an understanding of client requirements, culminating in the creation of a professional and credible web platform complete with tailored layout, structure, and content.",
        "Furthermore, we played a pivotal role in cultivating and expanding EcoCapita's social media presence across various platforms. This strategic initiative not only bolstered their visibility across the web but also empowered them to showcase their business offerings to prospective organizations seeking to engage in carbon credit trading.",
      ],
      links: {
        website: "https://www.ecocapita.in/",
        instagram: "",
        facebook: "https://www.facebook.com/ecocapita/",
        linkedin: "https://www.linkedin.com/company/ecocapita/",
        twitter: "",
      },
    },
    {
      label: "India FinTech Forum",
      paras: [
        "The India FinTech Forum is a non-profit initiative that offers a platform for fintech companies to collaborate and voice their opinions on the relevant policy issues. More than 4,500 fintech companies and over 37,000 individuals who are members of this forum, are dedicated to enhancing the ecosystem to ensure that India leads the global fintech innovation wave.",
        "India FinTech Forum also organises India FinTech Awards (IFTA). Every year IFTA celebrates and recognises the best innovations from fintech companies across the world. It is the most prestigious fintech awards in India.",
        "We collaborated with India FinTech Forum, where we spearheaded various creative endeavors including graphic designing, poster making, and crafting social media posts and short videos for event promotions. Leveraging tools such as Figma, Illustrator, Photoshop, After Effects, and Premiere Pro, we ensured a seamless execution of our creative vision. Our contributions were instrumental in enhancing the annual India FinTech Awards event, whether through meticulous planning or responding to spontaneous demands throughout the event duration.",
      ],
      links: {
        website: "https://www.indiafintech.com/",
        instagram: "",
        facebook: "https://twitter.com/India_Fintech",
        linkedin: "https://www.linkedin.com/company/india-fintech-forum/",
        twitter: "",
      },
    },
    {
      label: "CashRich",
      paras: [
        "CashRich, a simple wealth management app, helps its users to manage their money more confidently. It is powered by seasoned professionals with a collective market and investment experience of over 20 years.",
        "We also collaborated with CashRich on an extensive UI/UX redesign project for their mobile application. Our role involved crafting various UI/UX elements and designing graphics utilized as mock app images on both PlayStore and AppStore. Our efforts were aimed at enhancing the overall visual appeal of elements in CashRich app, contributing to its improved presentation and usability on these platforms.",
      ],
      links: {
        website: "https://www.cashrich.com/",
        instagram: "",
        facebook: "https://www.facebook.com/getcashrichapp/",
        linkedin: "https://www.linkedin.com/company/cr-fintech/",
        twitter: "https://twitter.com/CashRichApp",
      },
    },
  ];

  return (
    <div
      className="vertFlex"
      style={{ width: "100%", gap: "10px" }}
      id="our-clients"
    >
      <p className="ft1-2">Our Clients</p>
      <Collapse
        accordion
        items={clientData.map((item, index) => {
          return {
            key: index + 1,
            label: <div>{item.label}</div>,
            children: content(item.paras, index, item.links),
          };
        })}
        bordered={false}
        defaultActiveKey={[1]}
        expandIcon={({ isActive }) => (
          <AiFillCaretRight style={{ rotate: isActive ? "90deg" : "0deg" }} />
        )}
        style={{
          backgroundColor: "white",
          border: "1px solid black",
        }}
      />
      <p className="ctxt">
        As a team, we've had the privilege of successfully delivering over 50
        projects across various regions in India. Our collective expertise has
        been instrumental in guiding businesses towards embracing digital
        strategies, allowing them to expand their reach and cultivate stronger
        connections with their target audience. Through our tailored solutions
        and hands-on approach, we've assisted these businesses in navigating the
        complexities of the digital landscape, ultimately driving increased
        customer engagement and facilitating sustainable growth.
      </p>
    </div>
  );
}

export default OurWork;
