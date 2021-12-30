import React from "react";
import "./About.css";
import SubHeader from "./SubHeader";

function About() {
  return (
    <>
      <SubHeader title="About Us" />

      <div className="AboutTextContainer">
        <h1>Welcome to Decisive Chat</h1>

        <p>
          &emsp;&emsp;The main goal of Decisive Chat is <b>collaboration</b>{" "}
          <b> and privacy</b> between team members.
          <br />
          <br />
          &emsp;&emsp;Decisive chat is heaven for the team working on a private
          project and didn't want to share any information with their{" "}
          <b>competitors </b>. Here Decisive chat provides a unique solution to
          them. We provide our services to you but you will use your{" "}
          <b>private Database.</b> And the result will be mind-blowing which is
          in the form of Privacy.
          <br />
          <br />
          &emsp;&emsp;When you use any public chat app your messages are being
          stored in a public database that is accessible to outsiders. But when
          you use your own database, your messages are private and are
          accessible to just inside your team.
          <br />
          <br />
          &emsp;&emsp;That's why the Decisive Chat App is <b>heaven</b> for
          teams working on private projects.
        </p>
      </div>
    </>
  );
}

export default About;
