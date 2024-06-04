import React, { useEffect, useState } from "react";
import add_user from "../assets/images/svg/add_user.svg";
import { Link } from "react-router-dom";
import view_icon from "../assets/images/svg/view_icon.svg";
import edit_icon from "../assets/images/svg/edit_icon.svg";
import delete_icon from "../assets/images/svg/delete_icon.svg";
import action_icon from "../assets/images/svg/action_icon.svg";
import delete_big_icon from "../assets/images/svg/delete_big_icon.svg";
import Dropdown from "react-bootstrap/Dropdown";

const User = () => {
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

  // popup_triger-----
  let [confirm_popup, setpopup] = useState(null);
  let popup_triger = (e, id) => {
    e.preventDefault();
    setpopup(id);
  };

  let delete_user = (e) => {
    e.preventDefault();
    let deletedata = async () => {
      let response = await fetch(
        `https://crud-django-c7ri.onrender.com/api/user/${confirm_popup}/`,
        { method: "DELETE" }
      );
      if (response.ok) {
        let getdata = apidata.filter((user) => user.id !== confirm_popup);
        setapidata(getdata);
        setpopup(null)
      }
      else{
        console.error("failed to delete the user")
      }
    };
    deletedata();
  };

  return (
    <div>
      <div className="dash_height  overflow-y-auto">
        <div className="bg_sky p_20">
          <div className="d-flex justify-content-between align-items-center mb_20">
            <h1 className="fs_30 lh_38 fw-medium ">Users</h1>
            <Link to={"/User/Add_new_user/"} className="p-2 bg_yellow rounded-1">
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
                          <Dropdown className="action_popup">
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                              <img
                                className="action_dott"
                                src={action_icon}
                                alt=""
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="popup_shadow">
                              <Dropdown.Item href="#/action-1">
                                <a
                                  className="d-flex align-items-center py_10  "
                                  href=""
                                >
                                  <img src={view_icon} alt="view_icon" />
                                  <p className="ms-2 fs_14 text-black ">View</p>
                                </a>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <a
                                  className="d-flex align-items-center py_10  "
                                  href=""
                                >
                                  <img src={edit_icon} alt="view_icon" />
                                  <p className="ms-2 fs_14 text-black ">Edit</p>
                                </a>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <a
                                  onClick={(e) => popup_triger(e, item.id)}
                                  className="d-flex align-items-center py_10   "
                                  href=""
                                >
                                  <img src={delete_icon} alt="view_icon" />
                                  <p className="ms-2 fs_14  text_red">Delete</p>
                                </a>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
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

      {confirm_popup ? (
        <div className="position-absolute top-50 start-50 translate-middle w-100 min-vh-100 bg_black_40 d-flex align-items-center justify-content-center">
          <div className="delete_confirm_popup popup_shadow bg-white text-center ">
            <img src={delete_big_icon} alt="" />
            <p className="fs_20 text_red my_10">Delete</p>
            <p className="fs_12 my_10">Are you sure you want to Delete?</p>
            <button
              onClick={() => setpopup(null)}
              className="bg_green text-white border-0 px-3 py_10 fs_14 rounded-2"
            >
              No, Cancel
            </button>
            <button
              onClick={(e) => delete_user(e)}
              className="ms_10 bg_red text-white border-0 px-3 py_10 fs_14 rounded-2"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default User;
