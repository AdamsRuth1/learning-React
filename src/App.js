import React from "react";
import Profile from "./components/profile.js";
import UserProfilecard from "./components/profile.js";
import ListComponent from "./list.js";
import Counter from "./components/counter.js";
import SubmitHandler from "./components/submit.js";
import MouseHover from "./components/mousehover.js";
import Car from "./props.js";



function App() {
  return (
    <section>
      {/* <UserProfilecard />
      <ListComponent />
      <ListClick /> */}
      {/* <Counter /> */}
      < Car brand="Benze" color="White" model="2023"/>
      <SubmitHandler />
      <MouseHover />
    </section>
  );
}
export default App;
