import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import { FaExternalLinkAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdCall, MdEmail, MdOutlineEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export const Form = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (text) => {
    messageApi.open({
      type: "success",
      content: text,
      className: "custom-class",
      duration: 1.5,
    });
  };

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.user_name !== "" &&
      form.user_email !== "" &&
      form.message !== ""
    ) {
      emailjs
        .send(
          "service_xlz8tab",
          "template_feds2ge",
          {
            user_name: form.user_name,
            user_email: form.user_email,
            message: form.message,
          },
          {
            publicKey: "SZWR3UVmDGvo_pIE_",
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            success("Message sent.");
            setForm({
              user_name: "",
              user_email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div
      id="contact-form"
      className="fn21"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "40px",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {contextHolder}
      <div className="fbg"></div>
      <div
        className="shd fdm"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="vertFlex fbox"
          style={{
            alignSelf: "center",
            justifySelf: "center",
            padding: "34px 40px",
            backgroundColor: "#8000FF",
            gap: "24px",
          }}
        >
          <div className="ft1">Send us a message</div>
          <input
            autoComplete="new-password"
            className="fi"
            type="text"
            placeholder="NAME"
            value={form.user_name}
            onChange={(e) =>
              setForm((cur) => ({ ...cur, user_name: e.target.value }))
            }
          />
          <input
            autoComplete="new-password"
            className="fi"
            type="email"
            placeholder="EMAIL"
            value={form.user_email}
            onChange={(e) =>
              setForm((cur) => ({ ...cur, user_email: e.target.value }))
            }
          />
          <textarea
            autoComplete="new-password"
            className="ft"
            name="message"
            placeholder="MESSAGE"
            value={form.message}
            onChange={(e) =>
              setForm((cur) => ({ ...cur, message: e.target.value }))
            }
          />
          <button className="fb" onClick={sendEmail}>
            Send message
          </button>
        </div>
        <div
          className="vertFlex fbox"
          style={{
            alignSelf: "start",
            justifySelf: "center",
            padding: "34px 40px",
            gap: "10px",
          }}
        >
          <div className="ft1-2">Contact Us</div>
          <p
            style={{
              color: "#797979",
              fontSize: "14px",
            }}
          >
            We are open for any enquiry and ready for a chat with you.
          </p>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/company/nexgen-digimedia/"
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

            <div className="horiFlex">
              <div style={{ fontSize: "14px", paddingRight: "10px" }}>
                LinkedIn
              </div>
              <FaExternalLinkAlt color="#797979" size={12} />
            </div>
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/nexgen_digimedia?igsh=ODZlZjNtYnhwcWNx"
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
            <div className="horiFlex">
              <div style={{ fontSize: "14px", paddingRight: "10px" }}>
                Instagram
              </div>
              <FaExternalLinkAlt color="#797979" size={12} />
            </div>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard
                .writeText("deepak.pandey@nexgendigimedia.com")
                .then(() => {
                  success("Email copied to clipboard.");
                  // console.log("Text copied to clipboard");
                })
                .catch((e) => {
                  console.error("Unable to copy text to clipboard", e);
                });
            }}
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
            title="Click to copy email to clipboard."
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
              <MdOutlineEmail color="black" size={19} />
            </div>

            <div className="vertFlex">
              <div style={{ fontSize: "14px" }}>deepak.pandey</div>
              <div style={{ fontSize: "14px" }}>@nexgendigimedia.com</div>
            </div>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard
                .writeText("+919012510996")
                .then(() => {
                  success("Number copied to clipboard.");
                  // console.log("Text copied to clipboard");
                })
                .catch((e) => {
                  console.error("Unable to copy text to clipboard", e);
                });
            }}
            style={{
              cursor: "pointer",
              gap: "20px",
              textDecorationLine: "unset",
              color: "#797979",
              margin: "5px 0px",
            }}
            className="horiFlex"
            title="Click to copy number to clipboard."
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
              <MdCall color="black" size={19} />
            </div>

            <div className="vertFlex">
              <div style={{ fontSize: "14px" }}> +91 90125 10996</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
