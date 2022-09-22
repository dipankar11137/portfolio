import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import SendIcon from "@material-ui/icons/Send";
import message from "../../../Image/Contact/message.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("x");
  let element;
  if (state.succeeded) {
    element = (
      <p className="text-green-600 text-xl mb-5">Thanks for joining!</p>
    );
  }
  return (
    <div className="px-5  lg:32 " id="contactMe ">
      <p className="text-xl  mt-5 text-center text-white lg:pr-16">
        Get in Touch
      </p>
      <h2 className="text-4xl text-orange-500 text-center mb-5 lg:pr-16 font-bold ">
        Contact Me{" "}
      </h2>
      <div className="md:flex justify-center items-center rounded-3xl">
        <div className="w-full md:w-1/2 pr-10 pb-10">
          <div className="flex">
            <div>
              <img
                className="w-36 h-20 rounded-full animate-bounce"
                src={message}
                alt=""
              />
            </div>
            <div className="pl-3 ">
              <h1 className="text-white text-3xl font-bold">Message Me</h1>
              <p className="text-indigo-200">
                If you have any queries, suggestions, opinion, objection - feel
                free to let me know through email, phone or any other social
                media platform that I have shared in my portfolio.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <div>
              <img
                className="w-14 h-20 rounded-br-box -mt-3"
                src="https://media3.giphy.com/media/SWWLF8WluVJ5vJjMln/giphy.gif"
                alt=""
              />
            </div>
            <div className="pl-3">
              <h1 className="text-white text-3xl font-bold">
                Current Location
              </h1>
              <p className="text-indigo-200 text-xl">Dhaka, Bangladesh.</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div>
              <img
                className="w-16 h-20 rounded-br-box"
                src="https://i.pinimg.com/originals/68/85/87/688587d89bcaad9109cda401fed39b66.gif"
                alt=""
              />
            </div>
            <div className="pl-3">
              <h1 className="text-white text-3xl font-bold">Contact With Me</h1>
              <p className="text-indigo-200 text-xl">
                WhatsApp: +8801725798051
              </p>
              <p className="text-indigo-200 text-xl">
                Email: dipankar.halder117@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 sm:mt-10">
          <form className="pl-5" onSubmit={handleSubmit}>
            {element}
            <div>
              <label className="block text-xl text-indigo-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="name"
                placeholder="Name"
                name="name"
                className=" rounded-lg border-2 border-orange-500w-full md:w-3/4 px-2 py-2"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
              <label
                className="block text-xl mt-5 text-indigo-200"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                placeholder="Email"
                type="email"
                name="email"
                className="mt-1 rounded-lg border-2 border-orange-500 w-full md:w-3/4 px-2 py-2"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mt-5">
              <label className="block text-xl text-indigo-200">Message</label>
              <textarea
                id="message"
                placeholder="Write Your Message Here"
                name="message"
                rows="5"
                className="rounded-lg mt-1 border-2 border-orange-500 w-full md:w-3/4 px-2 py-2"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="btn  w-full md:w-3/4 mt-5 font-bold"
              disabled={state.submitting}
            >
              Submit
              <SendIcon className="ml-3 font-bold" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
