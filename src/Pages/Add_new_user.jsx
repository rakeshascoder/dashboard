import React from "react";
import { Link } from "react-router-dom";
import reset_icon from "../assets/images/svg/reset_icon.svg";
import { Row, Col } from "react-bootstrap";
const Add_new_user = () => {
  return (
    <div>
      <div className="dash_height  overflow-y-auto">
        <div className="bg_sky p_20">
          <div className="d-flex justify-content-between align-items-center mb_20">
            <h1 className="fs_30 lh_38 fw-medium ">Add New User</h1>
            <div>
              <div className="linear_border">
                <Link className="Rest_btn fs_16" to={""}>
                  Rest
                </Link>
              </div>
              <Link to={""} className=" bg_yellow reset_button ">
                <img src={reset_icon} alt="" />
                <span className="text-black ms-2 fs_16">Save</span>
              </Link>
            </div>
          </div>

          <div className="p_20 rounded-2 bg-white box_shadow">
            <p className="fs_18 ">Basic Information</p>
            <form className="add_user_form" action="">
              <Row>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="First_Name">
                    First Name
                  </label>{" "}
                  <br />
                  <input
                    className="py_10 px_15"
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Enter first  name"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="First_Name">
                    Last Name
                  </label>{" "}
                  <br />
                  <input
                    className="py_10 px_15"
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Enter last  name"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="First_Name">
                    E-Mail
                  </label>{" "}
                  <br />
                  <input
                    className="py_10 px_15"
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Enter mail"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="First_Name">
                    Phone Number
                  </label>{" "}
                  <br />
                  <input
                    className="py_10 px_15"
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Enter phone number "
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="First_Name">
                    State
                  </label>{" "}
                  <br />
                  <input
                    className="py_10 px_15"
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Enter  name"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="First_Name">
                    City
                  </label>{" "}
                  <br />
                  <input
                    className="py_10 px_15"
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    placeholder="Enter  name"
                  />
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_new_user;
