import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import reset_icon from "../assets/images/svg/reset_icon.svg";
import { useParams } from "react-router-dom";
const View_user_detail = () => {
  const { id } = useParams();

  let [apidata, setapidata] = useState({});
  useEffect(() => {
    let myfunc = async () => {
      let newdata = await fetch(
        `https://crud-django-c7ri.onrender.com/api/user/${id}/`
      ).then((res) => res.json());
      console.log(newdata);

      setapidata(newdata.data);
    };
    myfunc();
  }, [id]);
  return (
    <div>
      <div className="dash_height  overflow-y-auto">
        <div className="bg_sky p_20">
          <div className="d-flex justify-content-between align-items-center mb_20">
            <h1 className="fs_30 lh_38 fw-medium ">View Customer Details</h1>
            <div>
              <div className="linear_border">
                <Button type="submit" className="Rest_btn fs_16">
                  Block Customer
                </Button>
              </div>
              <Button type="submit" className=" bg_yellow save_button ">
                <img src={reset_icon} alt="" />
                <span className="text-black ms-2 fs_16">Reset Password</span>
              </Button>
            </div>
          </div>

          <div className="p_20 rounded-2 bg-white box_shadow">
            <p className="fs_18 ">Customer Details</p>
            <div className="d-flex w-50 justify-content-between pe-5">
              <div>
                <p className="fs_14 mt_20">Name</p>
                <p className="fs_14 mt_20">Email</p>
                <p className="fs_14 mt_20">Phone number</p>
                <p className="fs_14 mt_20">City</p>
                <p className="fs_14 mt_20">State</p>
              </div>
              <div>
                <p className="fs_14 mt_20">{apidata.first_name}</p>
                <p className="fs_14 mt_20">{apidata.email}</p>
                <p className="fs_14 mt_20">{apidata.phone_no}</p>
                <p className="fs_14 mt_20">{apidata.city}</p>
                <p className="fs_14 mt_20">{apidata.state}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_user_detail;
