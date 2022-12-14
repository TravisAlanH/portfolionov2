import React from "react";
import { FaLinkedin, FaGithubSquare, FaMailBulk } from "react-icons/fa";
import data from "../Resume";

export default function ContactContent() {
  return (
    <div>
      <div className="PageIconDiv">
        <FaMailBulk className="PageIcon GradientNoHover" />
      </div>
      <div className="CenterCol" id="ContentStart">
        <h1 className="ContactHeader">{data.ContactHeader}</h1>
        <div className="ContactBox">
          <div className="ContactInfoBox">
            <h5>Email</h5>
            <h3>{data.Email}</h3>
            <div className="ContactIconLinks">
              <a href={data.Link.LinkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin className="PageIconSmall GradientNoHover" />
              </a>
              <a href={data.Link.GitHub} target="_blank" rel="noreferrer">
                <FaGithubSquare className="PageIconSmall GradientNoHover" />
              </a>
            </div>
          </div>
          <form
            className="FormBase"
            action="https://formsubmit.co/fa5365a3f97fe0cfad6fc0a595c75d60"
            method="POST"
          >
            {/* HoneyPot and Captcha */}
            <input type="text" name="_honey" style={{ "display": "none" }} />
            <input
              type="hidden"
              name="_captcha"
              value="false"
              style={{ "display": "none" }}
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.travish.dev/about/success.html"
              style={{ "display": "none" }}
            />

            {data.ContactInput.map((item, index) => (
              <div className="FormLine">
                <input
                  type={item.Type}
                  className="FormInputText ChangeLabel"
                  name={item.Name}
                  id={item.ID}
                  required={item.Required}
                ></input>
                <label htmlFor={item.HTMLFor} className="FormLabel">
                  {item.Label}
                </label>
              </div>
            ))}
            {data.TextArea}
            <div className="FormLineSubmit">
              <button
                type={data.SubmitButton.Type}
                className="SubmitButton GradientHover"
              >
                {data.SubmitButton.SubmitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
