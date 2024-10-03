import React from "react";
import CKeditor from "../components/CKeditor";
import { useSelector, useDispatch } from "react-redux";
import {
  setAdvanced,
  setBasic,
  setInstructions,
  setShowModal,
} from "../redux/slice/appSlice";
import { IoSaveOutline } from "react-icons/io5";
// import { CiEdit } from "react-icons/ci";
// import { AiOutlineDelete } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
// import { BiMessageSquareEdit } from "react-icons/bi";

export default function Instructions() {
  const examname = useSelector((state) => state.advanced.examname);

  const dispatch = useDispatch();

  const backtoBasic = () => {
    dispatch(setAdvanced(false));
    dispatch(setBasic(true));
    dispatch(setInstructions(false));
  };

  const backtoAdvanced = () => {
    dispatch(setAdvanced(true));
    dispatch(setBasic(false));
    dispatch(setInstructions(false));
  };

  return (
    <>
      <div className="instructions">
        <div className="text-center">
          <div className="">Add Instructions</div>
          {`Exam Name : ${examname}`}
        </div>
        <div className="d-center">
          <div className="mt-3 editor-box">
            <div className="">
              <div className="p-3">
                <CKeditor />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <button className="btn btn-beta" onClick={backtoBasic}>
                    <IoSettingsOutline size={20} className="mb-1" />
                    <span className="mx-2 pt-2">Back to Basic Settings</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <button className="btn btn-beta" onClick={backtoAdvanced}>
                    <IoSettingsOutline size={20} className="mb-1" />
                    <span className="mx-2 pt-2">Back to Advanced Setting</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3">
              <button
                className="btn btn-beta"
                onClick={() => dispatch(setShowModal(true))}
              >
                <IoSaveOutline size={20} className="mb-1" />
                <span className="mx-2 pt-2">Save Exam</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
