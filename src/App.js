import "bootstrap/dist/css/bootstrap.css";
import logo from "./jbworks_logo.png";
import "./assets/scss/comman.scss";
import "./assets/scss/custom.scss";
// import { useState } from "react";

// import { IoSaveOutline } from "react-icons/io5";
// import { CiEdit } from "react-icons/ci";
// import { AiOutlineDelete } from "react-icons/ai";
// import { IoSettingsOutline } from "react-icons/io5";
// import { BiMessageSquareEdit } from "react-icons/bi";

import Basic from "./components/Basic";
import Advanced from "./components/Advanced";
import Instructions from "./components/Instructions";
import SaveModal from "./components/SaveModal";
import { useSelector } from "react-redux";

function App() {
  const app = useSelector((state) => state.app);
  // const settings = useSelector((state) => state.app.advanced);
  // const instructions = useSelector((state) => state.app.instructions);
  // const showModal = useSelector((state) => state.app.showmodal);

  return (
    <div className="">
      <div className="text-center">
        <img src={logo} className="logo" alt="logo" />
        <div className="title">ADD EXAM</div>
      </div>

      {app.basic ? <Basic /> : null}

      {app.advanced ? <Advanced /> : null}

      {app.instructions ? <Instructions /> : null}

      {app.showmodal ? <SaveModal /> : null}
    </div>
  );
}

export default App;
