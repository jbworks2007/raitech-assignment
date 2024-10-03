// import { useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useSelector, useDispatch } from "react-redux";
import {
  setAdvanced,
  setBasic,
  setInstructions,
} from "../redux/slice/appSlice";
import {
  setAssignEasy,
  setAssignMedium,
  setAssignHard,
  setCapture,
  setCaptureInterval,
  setMinPass,
  setNegMarks,
  setRegistration,
} from "../redux/slice/advancedSlice";
// import { IoSaveOutline } from "react-icons/io5";
// import { CiEdit } from "react-icons/ci";
// import { AiOutlineDelete } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageSquareEdit } from "react-icons/bi";

export default function Advanced() {
  const examname = useSelector((state) => state.basic.examname);
  const adv = useSelector((state) => state.advanced);
  const dispatch = useDispatch();
  //Advanced Setting States
  // const [adv, setAdv] = useState({
  //   neg_marks: 0,
  //   assign_easy: 0,
  //   assign_medium: 0,
  //   assign_hard: 0,
  //   min_pass: 0,
  // });
  // const [registration, setRegistration] = useState(false);
  // const [capture, setCapture] = useState(false);
  // const [captureInterval, setCaptureInterval] = useState(0);

  const validateInput = () => {
    if (!adv.min_pass) alert("Please enter minimum passing score");
    else if (!adv.assign_easy || !adv.assign_medium || !adv.assign_hard)
      alert("Please enter the value of all assign marks ");
    else {
      dispatch(setAdvanced(false));
      dispatch(setBasic(false));
      dispatch(setInstructions(true));
    }
  };

  return (
    <>
      <div className="advanced-seetings">
        <div className="text-center">
          <div className="">Advanced Settings</div>
          {`Exam Name : ${examname}`}
        </div>

        <div className="d-center">
          <div className="mt-3 box-2">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <label className="ms-2 text-start">Negetive Marking</label>
                  <input
                    type="number"
                    value={adv.neg_marks !== 0 ? adv.neg_marks : ""}
                    min="0"
                    max="100"
                    className="input-one"
                    placeholder="Neg. Marking (in percentage)"
                    name="negetive_marks"
                    id="negetive_marks"
                    onChange={(e) => {
                      let num = parseInt(e.target.value, 10);
                      dispatch(setNegMarks(num));
                    }}
                  />
                </div>
                <div className="p-3">
                  <label className="ms-2 text-start">
                    Minimum Passing Score
                  </label>
                  <input
                    type="number"
                    value={adv.min_pass !== 0 ? adv.min_pass : ""}
                    min="0"
                    max="100"
                    className="input-one"
                    placeholder="Passing Score (in percentage)"
                    name="passing_marks"
                    id="Passing_marks"
                    required
                    onChange={(e) => {
                      let num = parseInt(e.target.value, 10);
                      dispatch(setMinPass(num));
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <label className="ms-2 text-start">Assign Marks</label>
                  <input
                    type="number"
                    value={adv.assign_easy !== 0 ? adv.assign_easy : ""}
                    min="0"
                    max="100"
                    className="input-one"
                    placeholder="Assign Marks (easy)"
                    name="assign_marks_easy"
                    id="assign_marks_easy"
                    required
                    onChange={(e) => {
                      let num = parseInt(e.target.value, 10);
                      dispatch(setAssignEasy(num));
                    }}
                  />
                  <input
                    type="number"
                    value={adv.assign_medium !== 0 ? adv.assign_medium : ""}
                    min="0"
                    max="100"
                    className="input-one"
                    placeholder="Assign Marks (medium)"
                    name="assign_marks_medium"
                    id="assign_marks_medium"
                    required
                    onChange={(e) => {
                      let num = parseInt(e.target.value, 10);
                      dispatch(setAssignMedium(num));
                    }}
                  />
                  <input
                    type="number"
                    value={adv.assign_hard !== 0 ? adv.assign_hard : ""}
                    min="0"
                    max="100"
                    className="input-one"
                    placeholder="Assign Marks (hard)"
                    name="assign_marks_hard"
                    id="assign_marks_hard"
                    required
                    onChange={(e) => {
                      let num = parseInt(e.target.value, 10);
                      dispatch(setAssignHard(num));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onClick={(e) => dispatch(setRegistration(true))}
                  />
                  <span className="mx-2">Registration Form</span>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={(props) => (
                      <Tooltip id="button-tooltip" {...props}>
                        Configure Registration form
                      </Tooltip>
                    )}
                  >
                    <span>
                      {adv.registration ? (
                        <IoSettingsOutline size={20} className="mb-1" />
                      ) : null}
                    </span>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onClick={(e) => dispatch(setCapture(true))}
                  />
                  <span className="mx-2">Capture Image during exam</span>
                  {adv.capture ? (
                    <input
                      type="number"
                      value={adv.captureInterval ? adv.captureInterval : ""}
                      min="0"
                      max="100"
                      className="input-one"
                      placeholder="Add time interval to capture"
                      name="assign_marks_hard"
                      id="assign_marks_hard"
                      required
                      onChange={(e) => {
                        let num = parseInt(e.target.value, 10);
                        dispatch(setCaptureInterval(num));
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <button
                    className="btn btn-beta"
                    onClick={() => {
                      dispatch(setAdvanced(false));
                      dispatch(setBasic(true));
                      dispatch(setInstructions(false));
                    }}
                  >
                    <IoSettingsOutline size={20} className="mb-1" />
                    <span className="mx-2 pt-2">Back to Basic Settings</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <button className="btn btn-beta" onClick={validateInput}>
                    <BiMessageSquareEdit size={20} className="mb-1" />
                    <span className="mx-2 pt-2">Add Instructions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
