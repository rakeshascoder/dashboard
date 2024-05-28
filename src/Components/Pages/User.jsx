import React, { useEffect, useState } from "react";
import add_user from "../../assets/images/svg/add_user.svg";
import { Link } from "react-router-dom";
import view_icon from "../../assets/images/svg/view_icon.svg";
import edit_icon from "../../assets/images/svg/edit_icon.svg";
import delete_icon from "../../assets/images/svg/delete_icon.svg";
import action_icon from "../../assets/images/svg/action_icon.svg";
const User = () => {
  // -----action_pop--js-----



  
  document.addEventListener("DOMContentLoaded", function () {
    let action_dott = document.querySelector(".action_dott");
    let action_popup = document.querySelector(".action_popup");
    console.log(action_dott);
    console.log(action_popup);

    action_dott.addEventListener("click", function () {
      action_popup.classList.toggle("d-none");
    });
  });

  let [apidata, setapidata] = useState([]);
  useEffect(() => {
    let myfunc = async () => {
      let newdata = await fetch(
        "https://crud-django-c7ri.onrender.com/api/user/"
      ).then((res) => res.json());
      // console.log(newdata);

      setapidata(newdata.data);
    };
    myfunc();
  }, []);

  return (
    <div className="dash_height  overflow-y-auto">
      <div className="bg_sky p_20">
        <div className="d-flex justify-content-between align-items-center mb_20">
          <h1 className="fs_30 lh_38 fw-medium ">Users</h1>
          <Link to={""} className="p-2 bg_yellow rounded-1">
            <img src={add_user} alt="" />
            <span className="text-black ms-2 fs_14">Add New User</span>
          </Link>
        </div>

        <div className="p_20 rounded-2 bg-white box_shadow">
          <table className="w-100">
            <tr className="border_btm">
              <th>
                <input type="checkbox" name="checkbox" id="" />
              </th>
              <th className="fw-normal fs_16">Name</th>
              <th className="fw-normal fs_16">Registration</th>
              <th className="fw-normal fs_16">City / State</th>
              <th className="fw-normal fs_16">E-Mail</th>
              <th className="fw-normal fs_16">Phone Number</th>
              <th className="fw-normal fs_16">Action</th>
            </tr>
            <>
              {apidata.map((item, i) => {
                return (
                  <tr key={i} className="border_bottom">
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="fs_16 fw-normal">{item.first_name}</td>
                    <td className="fs_16 fw-normal">{item.registration}</td>
                    <td className="fs_16 fw-normal">
                      {item.city}/{item.state}
                    </td>
                    <td className="fs_16 fw-normal">{item.email}</td>
                    <td className="fs_16 fw-normal">{item.phone_no}</td>
                    <td>
                      <div className="position-relative">
                        {/* img on click  now yu */}
                        <img className="action_dott" src={action_icon} alt="" />

                        {/* // here is the div which i want to hide or show  */}
                        <div
                          style={{ width: "100px" }}
                          className="action_popup bg-white px_10 action_popup_shadow position-absolute end-0 top-100 "
                        >
                          <a
                            className="d-flex align-items-center py_10  "
                            href=""
                          >
                            <img src={view_icon} alt="view_icon" />
                            <p className="ms-2 fs_14 text-black ">View</p>
                          </a>
                          <a
                            className="d-flex align-items-center py_10  "
                            href=""
                          >
                            <img src={edit_icon} alt="view_icon" />
                            <p className="ms-2 fs_14 text-black ">Edit</p>
                          </a>
                          <a
                            className="d-flex align-items-center py_10   "
                            href=""
                          >
                            <img src={delete_icon} alt="view_icon" />
                            <p className="ms-2 fs_14  text_red">Delete</p>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
