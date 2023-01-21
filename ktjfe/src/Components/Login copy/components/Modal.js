import React, { useRef, useState } from "react";
import SignIn from "../SignIn";
import Forgot from "../../ForgotPassword/Forgot";
import Forgot2 from "../../ForgotPassword/Forgot2";
import "./Modal.css";
import Profile from "../SignUp";

function Modal(props) {
  const [active, setActive] = useState("signin");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setOpenModal(false);
    }
  };
  const Modal = () => {
    if (active === "signin") {
      return (
        <div id="signinm">
          <SignIn
            showToast={props.showToast}
            setOpenModal={props.setOpenModal}
          />
          <div className="form-question-container">
            <h4 className="mb-8">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setActive("signup");
                }}
              >
                SIGN UP
              </span>
            </h4>
          </div>
          <div className="forgot-password-question">
            <h4
              id="fp"
              onClick={() => {
                setActive("forgot1");
              }}
            >
             FORGOT PASSWORD ?
            </h4>
          </div>
        </div>
      );
    } else if (active === "signup") {
      return (
        <div id="signupm">
          {/* <SignUp showToast={props.showToast} setOpenModal={props.setOpenModal}/> */}
          <Profile
            showToast={props.showToast}
            setOpenModal={props.setOpenModal}
          />
          <div className="form-question-container-2">
            <h4>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setActive("signin");
                }}
              >
                {" "}
                SIGN IN
              </span>
            </h4>
          </div>
          <br />
        </div>
      );
    } else if (active === "forgot1") {
      return (
        <div className="forgot1m">
          <Forgot
            showToast={props.showToast}
            setActive={setActive}
            setEmail={setEmail}
            setQuestion={setQuestion}
            setOpenModal={props.setOpenModal}
          />
        </div>
      );
    } else if (active === "forgot2") {
      return (
        <div className="forgot2m">
          <Forgot2
            showToast={props.showToast}
            email={email}
            setActive={setActive}
            question={question}
            setOpenModal={props.setOpenModal}
          />
        </div>
      );
    }
  };
  return (
    <div className="sgnmodalBackground" onClick={closeModal} ref={modalRef}>
      <div className="sgnmodalContainer">
        <div className="sgnmodalclose">
          {/* <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button> */}
        </div>

        <Modal />
      </div>
    </div>
  );
}

export default Modal;
