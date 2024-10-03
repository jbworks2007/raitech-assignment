import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import topics from "../assets/dataset/topics.json";
import { useSelector, useDispatch } from "react-redux";
import { IoSaveOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
// import { BiMessageSquareEdit } from "react-icons/bi";
import {
  setDuration,
  setEasy,
  setExamName,
  setHard,
  setMedium,
  setTopic,
  setQP,
  setTable,
} from "../redux/slice/basicSlice";
import {
  setAdvanced,
  setBasic,
  setInstructions,
} from "../redux/slice/appSlice";

export default function Basic() {
  const dispatch = useDispatch();
  const basic = useSelector((state) => state.basic);

  //Basic Details States
  const [searchTerm, setSearchTerm] = useState("");
  const [edit, setEdit] = useState(true);
  const filteredOptions = searchTerm
    ? topics.filter((topic) => {
        return topic?.name.toLowerCase().startsWith(searchTerm.toLowerCase());
      })
    : topics;

  return (
    <>
      <div className="d-center">
        <div className="basic-details">
          <div className="mt-3 box">
            <div className="p-3">
              <label className="ms-2 text-start">Exam Name</label>
              <input
                type="input"
                value={basic.examname}
                className="input-one"
                placeholder="Enter the Name of Exam"
                name="name"
                id="name"
                required
                onChange={(e) => dispatch(setExamName(e.target.value))}
              />
            </div>
            <div className="p-3">
              <label className="ms-2 text-start">Exam Duration</label>
              <input
                type="number"
                min="30"
                max="180"
                value={basic.duration !== 0 ? basic.duration : ""}
                className="input-one"
                placeholder="Exam Duration (in minutes)"
                name="duration"
                id="duration"
                required
                onChange={(e) => {
                  let num = parseInt(e.target.value, 10);
                  dispatch(setDuration(num));
                }}
              />
            </div>
            <div className="p-3">
              <label className="ms-2 text-start">Question Picking</label>
              <DropdownButton
                className=""
                title={basic.qp}
                disabled={basic?.examname === "" || basic?.duration === 0}
                onSelect={(eventKey) => {
                  dispatch(setQP(eventKey));
                  dispatch(setTable(true));
                }}
              >
                <Dropdown.Item eventKey="Auto">Auto</Dropdown.Item>
                <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
      {basic.table ? (
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
                        title={basic?.topic}
                        onSelect={(eventKey) => {
                          dispatch(setTopic(eventKey));
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
                        value={basic?.easy}
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
                          dispatch(setEasy(num));
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={basic?.medium}
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
                          dispatch(setMedium(num));
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={basic?.hard}
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
                          dispatch(setHard(num));
                        }}
                      />
                    </td>
                    <td className="" style={{ paddingTop: "33px" }}>
                      {basic.easy + basic.medium + basic.hard}
                    </td>
                    <td style={{ paddingTop: "33px" }}>
                      <div className="d-flex gap-2">
                        {edit ? (
                          <IoSaveOutline
                            className="mx-2"
                            size={25}
                            onClick={() => {
                              if (
                                basic.easy !== 0 &&
                                basic.medium !== 0 &&
                                basic.hard !== 0
                              )
                                setEdit(false);
                              else
                                alert(
                                  "please enter the value of easy medium hard"
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
                  dispatch(setAdvanced(true));
                  dispatch(setBasic(false));
                  dispatch(setInstructions(false));
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
  );
}
