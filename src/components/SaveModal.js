import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  setAdvanced,
  setBasic,
  setInstructions,
  setShowModal,
} from "../redux/slice/appSlice";

export default function SaveModal() {
  //Modal States
  const showModal = useSelector((state) => state.app.showmodal);
  const basic = useSelector((state) => state.basic);
  const advanced = useSelector((state) => state.advanced);
  const dispatch = useDispatch();

  const editData = () => {
    dispatch(setShowModal(false));
    dispatch(setBasic(true));
    dispatch(setAdvanced(false));
    dispatch(setInstructions(false));
  };

  const saveForm = () => {
    dispatch(setShowModal(false));
    dispatch(setBasic(true));
    dispatch(setAdvanced(false));
    dispatch(setInstructions(false));
    alert("Exam Data Saved Successfully!");
    window.location.reload();
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please Verify data before proceed...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="m-2 table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Details</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Exam Name</td>
                <td>{basic.examname}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>{basic.duration}</td>
              </tr>
              <tr>
                <td>Topic</td>
                <td>{basic.topic}</td>
              </tr>
              <tr>
                <td>Number of Easy Questions</td>
                <td>{basic.easy}</td>
              </tr>
              <tr>
                <td>Number of Medium Questions</td>
                <td>{basic.medium}</td>
              </tr>
              <tr>
                <td>Number of Hard Questions</td>
                <td>{basic.hard}</td>
              </tr>
              <tr>
                <td>Total Questions</td>
                <td>{basic.easy + basic.medium + basic.hard}</td>
              </tr>
              <tr>
                <td>Negetive Marking (in percentage)</td>
                <td>{advanced.neg_marks}</td>
              </tr>
              <tr>
                <td>Assign Marks (Easy)</td>
                <td>{advanced.assign_easy}</td>
              </tr>
              <tr>
                <td>Assign Marks (Medium)</td>
                <td>{advanced.assign_medium}</td>
              </tr>
              <tr>
                <td>Assign Marks (Hard)</td>
                <td>{advanced.assign_hard}</td>
              </tr>
              <tr>
                <td>Minimum Passing Score</td>
                <td>{advanced.min_pass}</td>
              </tr>
              <tr>
                <td>Registration Required</td>
                <td>{advanced.registration ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Capture Image during the Exam</td>
                <td>{advanced.capture ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Interval to capture Image</td>
                <td>{advanced.captureInterval}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-pill" onClick={editData}>
          Edit Data
        </button>
        <button className="btn btn-pill" onClick={saveForm}>
          Save Data
        </button>
      </Modal.Footer>
    </Modal>
  );
}
