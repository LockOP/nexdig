import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

export const Form = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Message sent.",
      className: "custom-class",
      duration: 3,
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
            success();
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
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "40px",
      }}
    >
      <div
        className="vertFlex fbox"
        style={{
          alignSelf: "center",
          justifySelf: "center",
          padding: "34px 40px",
          backgroundColor: "#8000FF",
          gap: "14px",
        }}
      >
        <div className="ft1">Send us a message ...</div>
        <input
          className="fi"
          type="text"
          placeholder="NAME"
          value={form.user_name}
          onChange={(e) =>
            setForm((cur) => ({ ...cur, user_name: e.target.value }))
          }
        />
        <input
          className="fi"
          type="email"
          placeholder="EMAIL"
          value={form.user_email}
          onChange={(e) =>
            setForm((cur) => ({ ...cur, user_email: e.target.value }))
          }
        />
        <textarea
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
      {contextHolder}
    </div>
  );
};
