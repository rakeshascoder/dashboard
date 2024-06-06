import React, { useState } from "react";
import { Link } from "react-router-dom";
import reset_icon from "../assets/images/svg/reset_icon.svg";
import { Row, Col, Button } from "react-bootstrap";
const Add_new_user = () => {
  const initialformdata = {
    first_name: "",
    last_name: "",
    city: "",
    state: "",
    email: "",
    phone_no: "",
  };
  let [formData, setformData] = useState(initialformdata);
  function onChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  let add_user_handler = (e) => {
    e.preventDefault();

    let add_user = async () => {
      let apidata = await fetch(
        "https://crud-django-c7ri.onrender.com/api/user/",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      setformData(initialformdata);
    };
    add_user();
  };
  return (
    <div>
      <div className="dash_height  overflow-y-auto">
        <div className="bg_sky p_20">
          <form
            onSubmit={(e) => add_user_handler(e)}
            className="add_user_form"
            action=""
          >
            <div className="d-flex justify-content-between align-items-center mb_20">
              <h1 className="fs_30 lh_38 fw-medium ">Add New User</h1>
              <div>
                <div className="linear_border">
                  <Button
                    onClick={(e) => {e.preventDefault(), setformData(initialformdata)}
                    }
                    type="submit"
                    className="Rest_btn fs_16"
                  >
                    Reset
                  </Button>
                </div>
                <Button type="submit" className=" bg_yellow save_button ">
                  <img src={reset_icon} alt="" />
                  <span className="text-black ms-2 fs_16">Save</span>
                </Button>
              </div>
            </div>

            <div className="p_20 rounded-2 bg-white box_shadow">
              <p className="fs_18 ">Basic Information</p>

              <Row>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="first_name">
                    First Name
                  </label>{" "}
                  <br />
                  <input
                    onChange={onChange}
                    value={formData.first_name}
                    className="py_10 px_15"
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Enter first  name"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="last_name">
                    Last Name
                  </label>{" "}
                  <br />
                  <input
                    onChange={onChange}
                    value={formData.last_name}
                    className="py_10 px_15"
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Enter last  name"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="email">
                    E-Mail
                  </label>{" "}
                  <br />
                  <input
                    onChange={onChange}
                    value={formData.email}
                    className="py_10 px_15"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter mail"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="phone_no">
                    Phone Number
                  </label>{" "}
                  <br />
                  <input
                    onChange={onChange}
                    value={formData.phone_no}
                    className="py_10 px_15"
                    type="text"
                    name="phone_no"
                    id="phone_no"
                    placeholder="Enter phone number "
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="state">
                    State
                  </label>{" "}
                  <br />
                  <input
                    onChange={onChange}
                    value={formData.state}
                    className="py_10 px_15"
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter  name"
                  />
                </Col>
                <Col sm={3}>
                  <label className="mb_10" htmlFor="city">
                    City
                  </label>{" "}
                  <br />
                  <input
                    onChange={onChange}
                    value={formData.city}
                    className="py_10 px_15"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter  name"
                  />
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_new_user;
