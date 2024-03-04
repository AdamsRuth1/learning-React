import React from "react";
import "./submit.css";

export default function SubmitHandler() {
  return (
    <div className="submit">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { name, email, tel }= event.target.elements;
         alert(`Hello ${name.value}! Your email is ${email.value} and phone number is ${tel.value}`)
        }}
      >
        <input type="text" placeholder="Enter Your name" name="name" />
        <input type="text" placeholder="Enter Your email" name="email" />
        <input type="text" placeholder="Enter Your phone" name="tel" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
