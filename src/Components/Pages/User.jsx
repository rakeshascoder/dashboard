import React, { useEffect, useState } from "react";
import add_user from "../../assets/images/svg/add_user.svg";
import { Link } from "react-router-dom";

import action_icon from "../../assets/images/svg/action_icon.svg";
const User = () => {
  let [apidata, setapidata] = useState([]);
  useEffect(() => {
    let myfunc = async () => {
      let newdata = await fetch(
        "https://crud-django-c7ri.onrender.com/api/user/"
      ).then((res) => res.json());
      console.log(newdata);

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
                      <img src={action_icon} alt="" />
                      
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
