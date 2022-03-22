import Meta from "../components/Meta";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";

const contact = () => {
  const [alert, setAlert] = useState("false");
  const [loading, setLoading] = useState("false");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygtlvc6",
        "template_imujik4",
        form.current,
        "HAe-JhmOAzUVyOuWe"
      )
      .then(
        (result) => {
          console.log("Sucess", result.text);
          setAlert(!alert);
          setLoading(!loading);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="text-center mt-20 text-white h-screen">
      <Meta title="Contact Us" />
      <h1 className="text-4xl font-bold mb-[30px] underline decoration-green-500">
        Contact US
      </h1>
      {alert ? (
        ""
      ) : (
        <div className="max-w-md py-2 mx-auto">
          <Alert
            onClose={() => {
              setAlert(!alert);
            }}
            variant="outlined"
            severity="success"
          >
            Email Successfully Sent
          </Alert>
        </div>
      )}
      <div className=" bg-white bg-opacity-5 rounded-xl border border-green-600 p-7 max-w-md mx-auto">
        <form
          className="flex space-y-4 flex-col items-start w-full "
          ref={form}
          onSubmit={sendEmail}
        >
          <span className="flex flex-col items-start w-full">
            <label>Name</label>
            <input
              className="w-full rounded p-1 hover:border-rose-500 bg-gray-800"
              type="text"
              name="user_name"
            />
          </span>

          <span className="flex flex-col items-start w-full">
            <label>Email</label>
            <input
              className="w-full rounded p-1 hover:border-rose-500 bg-gray-800"
              type="email"
              name="user_email"
            />
          </span>
          <span className="flex flex-col items-start w-full">
            <label>Message</label>
            <textarea
              className="w-full rounded p-1 hover:border-rose-500 bg-gray-800"
              name="message"
            />
          </span>
          <span className="text-center bg-green-600 hover:bg-gray-600 duration-300 rounded-xl w-full p-2 text-white text-[22px]">
            {!loading ? (
              <p>Message Sent</p>
            ) : (
              <input type="submit" value="Send" />
            )}
          </span>
        </form>
      </div>
    </div>
  );
};

export default contact;
