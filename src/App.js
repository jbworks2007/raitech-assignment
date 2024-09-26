import "bootstrap/dist/css/bootstrap.css";
import logo from "./jbworks_logo.png";
import "./assets/scss/comman.scss";
import "./assets/scss/custom.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import topics from "./assets/dataset/topics.json";
import { IoSaveOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageSquareEdit } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import CKeditor from "./components/CKeditor";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

function App() {
  //Settimng up the window
  const [basic, setBasic] = useState(true);
  const [settings, setSettings] = useState(false);
  const [instructions, setInstruction] = useState(false);

  //Basic Details States
  const [examname, setExamName] = useState("");
  const [duration, setDuration] = useState(0);
  const [qp, setQP] = useState("Auto");
  const [table, setTable] = useState(false);
  const [tvalue, setTvalue] = useState({
    topic: "Python",
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [edit, setEdit] = useState(true);
  const filteredOptions = searchTerm
    ? topics.filter((topic) => {
        return topic?.name.toLowerCase().startsWith(searchTerm.toLowerCase());
      })
    : topics;

  //Advanced Setting States
  const [adv, setAdv] = useState({
    neg_marks: 0,
    assign_easy: 0,
    assign_medium: 0,
    assign_hard: 0,
    min_pass: 0,
  });
  const [registration, setRegistration] = useState(false);
  const [capture, setCapture] = useState(false);
  const [captureInterval, setCaptureInterval] = useState(0);

  const validateInput = () => {
    !adv.min_pass
      ? alert("Please enter minimum passing score")
      : !adv.assign_easy || !adv.assign_medium || !adv.assign_hard
      ? alert("Please enter the value of all assign marks ")
      : setSettings(false);
    setBasic(false);
    setInstruction(true);
  };

  //Modal States
  const [showModal, setShowModal] = useState(false);
  const saveForm = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="">
      <div className="text-center">
        <img src={logo} className="logo" alt="logo" />
        <div className="title">ADD EXAM</div>
      </div>

      {basic ? (
        <>
          <div className="d-center">
            <div className="basic-details">
              <div className="mt-3 box">
                <div className="p-3">
                  <label className="ms-2 text-start">Exam Name</label>
                  <input
                    type="input"
                    value={examname}
                    className="input-one"
                    placeholder="Enter the Name of Exam"
                    name="name"
                    id="name"
                    required
                    onChange={(e) => setExamName(e.target.value)}
                  />
                </div>
                <div className="p-3">
                  <label className="ms-2 text-start">Exam Duration</label>
                  <input
                    type="number"
                    min="30"
                    max="180"
                    value={duration !== 0 ? duration : null}
                    className="input-one"
                    placeholder="Exam Duration (in minutes)"
                    name="duration"
                    id="duration"
                    required
                    onChange={(e) => {
                      let num = parseInt(e.target.value);
                      setDuration(num);
                    }}
                  />
                </div>
                <div className="p-3">
                  <label className="ms-2 text-start">Question Picking</label>
                  <DropdownButton
                    className=""
                    title={qp}
                    disabled={examname === "" || duration === 0}
                    onSelect={(eventKey) => {
                      setQP(eventKey);
                      setTable(true);
                    }}
                  >
                    <Dropdown.Item eventKey="Auto">Auto</Dropdown.Item>
                    <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          </div>

          {table ? (
            <>
              <div className="m-3 table-box">
                <div className="m-2 table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Topic</th>
                        <th scope="col">Easy</th>
                        <th scope="col">Medium</th>
                        <th scope="col">Hard</th>
                        <th scope="col">Total Questions</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pe-3">
                          <DropdownButton
                            className=""
                            disabled={!edit}
                            title={tvalue.topic}
                            onSelect={(eventKey) => {
                              setTvalue({ topic: eventKey });
                            }}
                          >
                            <input
                              type="text"
                              placeholder="Search..."
                              className="mx-2 rounded p-1 border-opacity-50"
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {filteredOptions.map((item, index) => (
                              <Dropdown.Item key={index} eventKey={item.name}>
                                {item.name}
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        </td>
                        <td>
                          <input
                            type="number"
                            value={tvalue.easy}
                            min="1"
                            max="100"
                            className="input-one"
                            placeholder="No. of easy questions"
                            name="duration"
                            id="duration"
                            required
                            disabled={!edit}
                            onChange={(e) => {
                              let num = parseInt(e.target.value, 10);
                              setTvalue({ ...tvalue, easy: num });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={tvalue.medium}
                            min="1"
                            max="100"
                            className="input-one"
                            placeholder="No. of medium questions"
                            name="duration"
                            id="duration"
                            required
                            disabled={!edit}
                            onChange={(e) => {
                              let num = parseInt(e.target.value, 10);
                              setTvalue({ ...tvalue, medium: num });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={tvalue.hard}
                            min="1"
                            max="100"
                            className="input-one"
                            placeholder="No. of hard questions"
                            name="duration"
                            id="duration"
                            required
                            disabled={!edit}
                            onChange={(e) => {
                              let num = parseInt(e.target.value, 10);
                              setTvalue({ ...tvalue, hard: num });
                            }}
                          />
                        </td>
                        <td className="" style={{ paddingTop: "33px" }}>
                          {tvalue.easy + tvalue.medium + tvalue.hard}
                        </td>
                        <td style={{ paddingTop: "33px" }}>
                          <div className="d-flex gap-2">
                            {edit ? (
                              <IoSaveOutline
                                className="mx-2"
                                size={25}
                                onClick={() => {
                                  if (
                                    tvalue.easy !== 0 &&
                                    tvalue.medium !== 0 &&
                                    tvalue.hard !== 0
                                  )
                                    setEdit(false);
                                  else
                                    alert(
                                      "please enter the value od easy medium hard"
                                    );
                                }}
                              />
                            ) : (
                              <CiEdit
                                className="mx-2"
                                size={25}
                                onClick={() => setEdit(true)}
                              />
                            )}
                            <AiOutlineDelete className="mx-2" size={25} />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-center">
                <div className="mb-5 box">
                  <button
                    className="btn btn-beta"
                    onClick={() => {
                      setSettings(true);
                      setBasic(false);
                      setInstruction(false);
                    }}
                    disabled={edit}
                  >
                    <IoSettingsOutline size={20} className="mb-1" />
                    <span className="mx-2 pt-2">Advanced Settings</span>
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : null}

      {settings ? (
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
                      <label className="ms-2 text-start">
                        Negetive Marking
                      </label>
                      <input
                        type="number"
                        value={adv.neg_marks !== 0 ? adv.neg_marks : null}
                        min="0"
                        max="100"
                        className="input-one"
                        placeholder="Neg. Marking (in percentage)"
                        name="negetive_marks"
                        id="negetive_marks"
                        onChange={(e) => {
                          let num = parseInt(e.target.value, 10);
                          setAdv({ ...adv, neg_marks: num });
                        }}
                      />
                    </div>
                    <div className="p-3">
                      <label className="ms-2 text-start">
                        Minimum Passing Score
                      </label>
                      <input
                        type="number"
                        value={adv.min_pass !== 0 ? adv.min_pass : null}
                        min="0"
                        max="100"
                        className="input-one"
                        placeholder="Passing Score (in percentage)"
                        name="passing_marks"
                        id="Passing_marks"
                        required
                        onChange={(e) => {
                          let num = parseInt(e.target.value, 10);
                          setAdv({ ...adv, min_pass: num });
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="p-3">
                      <label className="ms-2 text-start">Assign Marks</label>
                      <input
                        type="number"
                        value={adv.assign_easy !== 0 ? adv.assign_easy : null}
                        min="0"
                        max="100"
                        className="input-one"
                        placeholder="Assign Marks (easy)"
                        name="assign_marks_easy"
                        id="assign_marks_easy"
                        required
                        onChange={(e) => {
                          let num = parseInt(e.target.value, 10);
                          setAdv({ ...adv, assign_easy: num });
                        }}
                      />
                      <input
                        type="number"
                        value={
                          adv.assign_medium !== 0 ? adv.assign_medium : null
                        }
                        min="0"
                        max="100"
                        className="input-one"
                        placeholder="Assign Marks (medium)"
                        name="assign_marks_medium"
                        id="assign_marks_medium"
                        required
                        onChange={(e) => {
                          let num = parseInt(e.target.value, 10);
                          setAdv({ ...adv, assign_medium: num });
                        }}
                      />
                      <input
                        type="number"
                        value={adv.assign_hard !== 0 ? adv.assign_hard : null}
                        min="0"
                        max="100"
                        className="input-one"
                        placeholder="Assign Marks (hard)"
                        name="assign_marks_hard"
                        id="assign_marks_hard"
                        required
                        onChange={(e) => {
                          let num = parseInt(e.target.value, 10);
                          setAdv({ ...adv, assign_hard: num });
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
                        onClick={(e) => setRegistration(!registration)}
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
                          {registration ? (
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
                        onClick={(e) => setCapture(!capture)}
                      />
                      <span className="mx-2">Capture Image during exam</span>
                      {capture ? (
                        <input
                          type="number"
                          value={captureInterval ? captureInterval : null}
                          min="0"
                          max="100"
                          className="input-one"
                          placeholder="Add time interval to capture"
                          name="assign_marks_hard"
                          id="assign_marks_hard"
                          required
                          onChange={(e) => {
                            let num = parseInt(e.target.value, 10);
                            setCaptureInterval(num);
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
                          setSettings(false);
                          setBasic(true);
                          setInstruction(false);
                        }}
                      >
                        <IoSettingsOutline size={20} className="mb-1" />
                        <span className="mx-2 pt-2">
                          Back to Basic Settings
                        </span>
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
      ) : null}

      {instructions ? (
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
                      <button
                        className="btn btn-beta"
                        onClick={() => {
                          setSettings(false);
                          setBasic(true);
                          setInstruction(false);
                        }}
                      >
                        <IoSettingsOutline size={20} className="mb-1" />
                        <span className="mx-2 pt-2">
                          Back to Basic Settings
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="p-3">
                      <button
                        className="btn btn-beta"
                        onClick={() => {
                          setSettings(true);
                          setBasic(false);
                          setInstruction(false);
                        }}
                      >
                        <IoSettingsOutline size={20} className="mb-1" />
                        <span className="mx-2 pt-2">
                          Back to Advanced Setting
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <button className="btn btn-beta" onClick={saveForm}>
                    <IoSaveOutline size={20} className="mb-1" />
                    <span className="mx-2 pt-2">Save Exam</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showModal ? (
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
                    <td>{examname}</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>{duration}</td>
                  </tr>
                  <tr>
                    <td>Topic</td>
                    <td>{tvalue.topic}</td>
                  </tr>
                  <tr>
                    <td>Number of Easy Questions</td>
                    <td>{tvalue.easy}</td>
                  </tr>
                  <tr>
                    <td>Number of Medium Questions</td>
                    <td>{tvalue.medium}</td>
                  </tr>
                  <tr>
                    <td>Number of Hard Questions</td>
                    <td>{tvalue.hard}</td>
                  </tr>
                  <tr>
                    <td>Total Questions</td>
                    <td>{tvalue.easy + tvalue.medium + tvalue.hard}</td>
                  </tr>
                  <tr>
                    <td>Negetive Marking (in percentage)</td>
                    <td>{adv.neg_marks}</td>
                  </tr>
                  <tr>
                    <td>Assign Marks (Easy)</td>
                    <td>{adv.assign_easy}</td>
                  </tr>
                  <tr>
                    <td>Assign Marks (Medium)</td>
                    <td>{adv.assign_medium}</td>
                  </tr>
                  <tr>
                    <td>Assign Marks (Hard)</td>
                    <td>{adv.assign_hard}</td>
                  </tr>
                  <tr>
                    <td>Minimum Passing Score</td>
                    <td>{adv.min_pass}</td>
                  </tr>
                  <tr>
                    <td>Registration Required</td>
                    <td>{registration ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>Capture Image during the Exam</td>
                    <td>{capture ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>Interval to capture Image</td>
                    <td>{captureInterval}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-pill"
              onClick={() => {
                setShowModal(false);
                setBasic(true);
                setSettings(false);
                setInstruction(false);
              }}
            >
              Edit Data
            </button>
            <button
              className="btn btn-pill"
              onClick={() => {
                setShowModal(false);
                setBasic(true);
                setSettings(false);
                setInstruction(false);
                alert("Exam Data Saved Successfully!");
                window.location.reload();
              }}
            >
              Save Data
            </button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
