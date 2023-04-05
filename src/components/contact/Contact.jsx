import React, { useState } from "react";
import Select from "react-select";
import "./Contact.css";

const Contact = ({ contactRef }) => {
  const options = [
    {
      value: "ladies formal",
      label: "Ladies Formal",
    },
    {
      value: "ladies relaxed",
      label: "Ladies Relaxed",
    },
    {
      value: "ladies pregnant",
      label: "Ladies Pregnant",
    },
    {
      value: "couples",
      label: "Couples",
    },
    {
      value: "family",
      label: "Family",
    },
  ];

  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [session, setSession] = useState({});
  const handleSession = (e) => {
    setSession(e.target.value);
  };

  const colorStyles = {
    control: (styles, state) => ({
      // ...styles,
      // color: '#ffff',
      outline: "none",
      display: "flex",
      backgroundColor: state.isFocused ? "rgb(21,32,43)" : "rgb(25,39,52)",
      padding: "12px 8px",
      borderRadius: "8px",
      border: state.isFocused ? "4px solid #2cffbb" : "4px solid transparent",
      boxShadow: "none",
      fontWeight: "300",
      fontSize: "18px",
    }),
    placeholder: (styles, state) => {
      return {
        ...styles,
        color: state.isFocused ? "#ffff" : "rgb(209, 213, 219)",
      };
    },
    singleValue: (styles, state) => {
      return {
        ...styles,
        color: "#ffff",
      };
    },
    option: (styles, state) => {
      return {
        ...styles,
        padding: "15px 20px",
        backgroundColor: state.isSelected ? "rgb(203 213 225)" : "#ffff",
        color: state.isSelected ? "#15202B" : "#15202B",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: state.isSelected
            ? "rgb(203 213 225)"
            : "rgb(191,219,254)",
          color: state.isSelected ? "#15202B" : "#15202B",
          fontWeight: "400",
        },
      };
    },
    indicatorSeparator: (styles, state) => {
      return {
        ...styles,
        "&:focus": {
          backgroundColor: state.isSelected ? "#ffff" : "rgba(107, 114, 128)",
        },
      };
    },
    dropdownIndicator: (styles, state) => {
      return {
        ...styles,
        // backgroundColor: 'red',
        // color: 'red',
        "&:hover": {
          color: state.isSelected ? "#ffff" : "#ffff",
        },
        "&:focus": {
          color: state.isSelected ? "#ffff" : "#ffff",
        },
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        marginTop: "20px",
      };
    },
  };

  return (
    <>
      <div id="contact" ref={contactRef} className="grid grid-cols-1">
        {/* <div className="bg-white p-20 pt-32">
                <h2 class="mb-10 text-4xl tracking-tight font-bold text-left text-darkest ">Tell me about your photo ideas and reqirements</h2>
                <p class="mb-4 lg:mb-6 text-justify font-light text-darkless text-xl">
                    Simply fill in the form and I will get back to you as soon as I power off my camera 
                    Simply fill in the form and I will get back to you as soon as I power off my camera 
                    Simply fill in the form and I will get back to you as soon as I power off my camera 
                    Simply fill in the form and I will get back to you as soon as I power off my camera 
                </p>
                <p class="text-justify font-normal text-darkless text-lg">Thanks for your inquiry. I will be getting in touch soon 🧡</p>
                <img src="/images/hey.png" alt="" />
            </div> */}

        <section class="bg-darkless px-5 md:px-20">
          <div class="py-20 md:pt-24 md:pb-20 w-full lg:w-[700px] m-auto">
            <h2 class="mb-10 text-4xl tracking-tight font-bold md:text-center text-left text-fancy ">
              Contact Me
            </h2>
            <form action="#" class="space-y-5 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                <div className="group">
                  {/* <label for="name" class="block mb-2 group-focus-within:font-normal font-light text-fancy">First name</label> */}
                  <input
                    onChange={handleName}
                    type="text"
                    id="name"
                    class={`${
                      name.length > 0 ? "bg-darker caret-white" : "bg-darker"
                    } block p-4 w-full placeholder-gray-300 focus:placeholder-white text-text-primary group focus:bg-darkest rounded-lg outline-none border-4 border-transparent focus:border-fancy font-light text-lg`}
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="group">
                  {/* <label for="lastname" class="block group-focus-within:font-normal mb-2 font-light text-fancy">Last name</label> */}
                  {/* <input onChange={handleLastName} type="text" id="lastname" class={`${lastName.length > 0 ? 'bg-darkless' : 'bg-darkest'} block p-4 w-full placeholder-gray-500 focus:placeholder-white text-text-primary focus:bg-darkest rounded-lg outline-none border-4 border-transparent focus:border-fancy`} placeholder="Your last name" required /> */}
                  <input
                    onChange={handleLastName}
                    type="text"
                    id="lastname"
                    class={`${
                      lastName.length > 0
                        ? "bg-darker caret-white"
                        : "bg-darker"
                    } block p-4 w-full placeholder-gray-300 focus:placeholder-white text-text-primary group focus:bg-darkest rounded-lg outline-none border-4 border-transparent focus:border-fancy font-light text-lg`}
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div className="group">
                {/* <label for="email" class="block mb-2 font-light group-focus-within:font-normal text-fancy">Your email</label> */}
                {/* <input onChange={handleEmail} type="email" id="email" class={`${email.length > 0 ? 'bg-darkless' : 'bg-darkest'} block p-4 w-full placeholder-gray-500 focus:placeholder-white text-text-primary focus:bg-darkest rounded-lg outline-none border-4 border-transparent focus:border-fancy`} placeholder="Your email" required /> */}
                <input
                  onChange={handleEmail}
                  type="text"
                  id="email"
                  class={`${
                    email.length > 0 ? "bg-darker caret-white" : "bg-darker"
                  } block p-4 w-full placeholder-gray-300 focus:placeholder-white text-text-primary group focus:bg-darkest rounded-lg outline-none border-4 border-transparent focus:border-fancy font-light text-lg`}
                  placeholder="Your email"
                  required
                />
              </div>

              <Select
                options={options}
                isSearchable={false}
                styles={colorStyles}
                placeholder="Select your next session"
                onChange={setSession}
              />
              {/* <div>
                            <label for="subject" class="block mb-2 font-light text-fancy">Subject</label>
                            <input type="text" id="subject" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light p-4" placeholder="Let us know how we can help you" required />
                        </div> */}
              <div class="sm:col-span-2">
                {/* <label for="message" class="block mb-2 font-light text-fancy">Your message</label> */}
                <textarea
                  id="message"
                  rows="8"
                  class="placeholder-gray-300 focus:placeholder-white block p-4 w-full text-text-primary min-h-[200px] max-h-[350px] bg-darker rounded-lg border-4 border-transparent focus:border-fancy focus:bg-darkest outline-none font-light text-lg mb-10"
                  placeholder="Tell me about your idea..."
                ></textarea>
              </div>
              {/* <a href="#" className="sm:max-w-max w-full mt-6 inline-block rounded-md border-transparent text-center 
                        py-3 bg-gradient-to-r from-fancy  to-[#c1a5fc] px-8 font-regular text-darkest hover:bg-gradient-to-l"
                        >
                        Send message
                        </a> */}
              <a
                href="#"
                className="sm:max-w-max w-full block rounded-md text-center 
                        py-3 bg-fancy px-8 ml-auto font-regular text-darkest"
              >
                Send message
              </a>
            </form>
          </div>
        </section>
      </div>
      {/* <h2 className="text-8xl fancy my-20">Contact</h2>
            <Select 
            options={options}
            styles={{
                control: (currentStyles, state) => ({
                    ...currentStyles,
                    borderColor: 'red'
                })
            }}
            /> */}
    </>
  );
};

export default Contact;
