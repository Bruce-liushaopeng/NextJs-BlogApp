import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../notification/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // pending, success, error
  const [requestErrorMessage, setRequestErrorMessage] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRequestStatus("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault(); // prevent the broswer auto-send the request, we don't want that here
    setRequestStatus("pending");
    try {
      console.log(enteredMessage);
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail('')
      setEnteredMessage('')
      setEnteredName('')
    } catch (error) {
      setRequestErrorMessage(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  // logics to determine what state the notification should be
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      titile: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      titile: "Success",
      message: "Message sent successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      titile: "Error",
      message: requestErrorMessage,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name"> Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          titile={notification.titile}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
