import React from "react";
import { useState } from "react";
import Axios from "axios";

const TForm = () => {
  const [teacherName, setteacherName] = useState("");
  const [teacherID, setteacherID] = useState("");
  const [teacherDepartment, setteacherDepartment] = useState("");
  const [teacherMail, setteacherMail] = useState("");
  const [teacherMobile, setteacherMobile] = useState("");
  const [teacherDescription, setteacherDescription] = useState("");

  const addTeacher = () => {
    Axios.post("/?insertteacher", {
      t_name: teacherName,
      t_code: teacherID,
      t_deptname: teacherDepartment,
      t_email: teacherMail,
      t_contact: teacherMobile,
      t_designation: teacherDescription,
      
    }).then(() => {
      console.log("success");
    });
  };

  function tFormValidation() {
    let tName = document.getElementById("t_name").value;
    let tId = document.getElementById("t_id").value;
    let tDept = document.getElementById("t_dept").value;
    let tMobile = document.getElementById("t_mobile").value;
    let tMail = document.getElementById("t_mail").value;
    let tDes = document.getElementById("t_des").value;

    let nameCheck = /^[a-zA-Z\s]{1,100}$/;
    let idCheck = /^[0-9]{1,20}$/;
    let deptCheck = /^[a-zA-Z\s&]{1,50}$/;
    let mobileCheck = /^[0]{1}[1]{1}[0-9]{9}$/;
    let mailCheck = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (nameCheck.test(tName) === false) {
      document.getElementById("tNameError").innerText =
        "Please insert a valid name";
    } else {
      document.getElementById("tNameError").innerText = "";
    }

    if (idCheck.test(tId) === false) {
      document.getElementById("tIdError").innerText =
        "Please insert a valid ID";
    } else {
      document.getElementById("tIdError").innerText = "";
    }

    if (deptCheck.test(tDept) === false) {
      document.getElementById("tDeptError").innerText =
        "Please insert a valid department";
    } else {
      document.getElementById("tDeptError").innerText = "";
    }

    if (mobileCheck.test(tMobile) === false) {
      document.getElementById("tMobileError").innerText =
        "Please insert a valid contact";
    } else {
      document.getElementById("tMobileError").innerText = "";
    }

    if (mailCheck.test(tMail) === false) {
      document.getElementById("tMailError").innerText =
        "Please insert a valid mail";
    } else {
      document.getElementById("tMailError").innerText = "";
    }

    if (tDes === "-") {
      document.getElementById("tDesError").innerText =
        "Please select a designation";
    } else {
      document.getElementById("tDesError").innerText = "";
    }

    if (
      nameCheck.test(tName) === true &&
      idCheck.test(tId) === true &&
      deptCheck.test(tDept) === true &&
      mobileCheck.test(tMobile) === true &&
      mailCheck.test(tMail) === true &&
      tDes !== "-"
    ) {
      addTeacher();
    }
  }

  return (
    <div>
      <form data-bitwarden-watching="1" id="tForm">
        <div className="title text-center text-3xl mb-6 -mt-2">
          Create A Teacher
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="mb-6 col-end-3 col-span-2">
            <label
              htmlFor="t_name"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="t_name"
              className="transition-all shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setteacherName(event.target.value);
              }}
            />
            <span id="tNameError" className="text-red-800"></span>
          </div>

          <div className="mb-6">
            <label
              htmlFor="t_id"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Teacher ID
            </label>
            <input
              type="text"
              id="t_id"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="ex. 293-362"
              onChange={(event) => {
                setteacherID(event.target.value);
              }}
            />
            <span id="tIdError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-1">
          <div className="mb-6">
            <label
              htmlFor="t_dept"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Department
            </label>
            <input
              type="text"
              id="t_dept"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="ex. Computer Science & Engineering"
              onChange={(event) => {
                setteacherDepartment(event.target.value);
              }}
            />
            <span id="tDeptError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-24">
          <div className="mb-6">
            <label
              htmlFor="t_mobile"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Contact No.
            </label>
            <input
              type="text"
              id="t_mobile"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="(+88)-"
              onChange={(event) => {
                setteacherMobile(event.target.value);
              }}
            />
            <span id="tMobileError" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="t_mail"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              E-Mail Address
            </label>
            <input
              type="email"
              id="t_mail"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="teacher@example.com"
              onChange={(event) => {
                setteacherMail(event.target.value);
              }}
            />
            <span id="tMailError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-1">
          <div className="mb-6">
            <label
              htmlFor="t_des"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Designation
            </label>
            <select
              id="t_des"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setteacherDescription(event.target.value);
              }}
            >
              <option>-</option>
              <option>Chairperson</option>
              <option>Professor</option>
              <option>Associate Professor</option>
              <option>Assistant Professor</option>
              <option>Lecturer</option>
              <option>Teaching Assistant</option>
              <option>Research Assistant</option>
            </select>
            <span id="tDesError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-12">
          <button
            onClick={tFormValidation}
            type="button"
            id="t_submit"
            className="col-start-3 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center transition-all"
          >
            Add New Teacher
          </button>
          <button
            id="reset"
            type="reset"
            className="text-black bg-white border-2 border-gray-500 hover:bg-red-500 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center transition-all"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default TForm;
