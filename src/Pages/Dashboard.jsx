import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dott_icon from "../assets/images/svg/dott_icon.svg";
import investers_icon from "../assets/images/svg/investers_icon.svg";
import spi_icon from "../assets/images/svg/spi_icon.svg";
import chart_img from "../assets/images/png/chart_img.png";

const Dashboard = () => {
  return (
    <div className="dash_height  overflow-y-auto">
      <div className="bg_sky p_20">
        <h1 className="fs_30 lh_38 fw-medium ">DASHBOARD</h1>

        <Container fluid>
          <Row className="mt_20 d-flex gap-4">
            <Col
              xs={4}
              className="p_20 rounded-2 bg-white box_shadow  text-center"
            >
              <p className="fs_14 text-black-50 ">Total SIPs</p>
              <h2 className="fs_30 mt_20 fw-medium ">6</h2>
            </Col>
            <Col
              xs={4}
              className="p_20 rounded-2 bg-white  box_shadow text-center ms-3"
            >
              <p className="fs_14 text-black-50 ">Total Inverster ‘s</p>
              <h2 className="fs_30 mt_20 fw-medium ">1000</h2>
            </Col>
          </Row>
          <Row className="mt_20">
            <Col xs={3} className="p_20 bg-white   box_shadow">
              <div className="d-flex align-items-center justify-content-between">
                <p className="fs_16">Recent Transection</p>
                <img src={dott_icon} alt="" />
              </div>
              <table className="mt-2 recent_trans w-100">
                <tr className="d-flex px-2 py_12 justify-content-between">
                  <th className="fs_14 text-black-50 fw-normal">Name</th>
                  <th className="fs_14 text-black-50 text-end fw-normal">
                    Amount
                  </th>
                </tr>
                <tr className="d-flex px-2 py_12 justify-content-between">
                  <th className="fs_14 fw-normal">John leo</th>
                  <th className="fs_14 text-end fw-normal">₹ 2,300.00</th>
                </tr>
                <tr className="d-flex px-2 py_12 justify-content-between">
                  <th className="fs_14 fw-normal">John leo</th>
                  <th className="fs_14 text-end fw-normal">₹ 2,300.00</th>
                </tr>
                <tr className="d-flex px-2 py_12 justify-content-between">
                  <th className="fs_14 fw-normal">John leo</th>
                  <th className="fs_14 text-end fw-normal">₹ 2,300.00</th>
                </tr>
                <tr className="d-flex px-2 py_12 justify-content-between">
                  <th className="fs_14 fw-normal">Morin</th>
                  <th className="fs_14 text-end fw-normal">₹ 2,300.00</th>
                </tr>
              </table>
            </Col>
            <Col xs={9} className="ps_20">
              <div className="p_20 bg-white  box_shadow">
                <div className=" d-flex justify-content-between">
                  <p className="fs_18">Comparison Graph</p>
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <img src={investers_icon} alt="" />
                      <p className="fs_9">Inversters</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img src={spi_icon} alt="" />
                      <p className="fs_9">SPIs</p>
                    </div>
                  </div>
                </div>
                <img className="w-100 mt_20" src={chart_img} alt="" />
              </div>
            </Col>
            <div className="p_20 bg-white mt_20   box_shadow">
              <p className="fs_18">Recent Registrations</p>
              <table className="mt_20 w-100 recent_regi">
                <tr className="border_bottom py-3">
                  <th className="fs_16 fw-normal">Sr N.</th>
                  <th className="fs_16 fw-normal">Name</th>
                  <th className="fs_16 fw-normal">Registration</th>
                  <th className="fs_16 fw-normal">City / State</th>
                  <th className="fs_16 fw-normal">Member Status</th>
                  <th className="fs_16 fw-normal">Total Investment</th>
                </tr>
                <tr>
                  <td className="fs_16">01</td>
                  <td className="fs_16">John leo</td>
                  <td className="fs_16">01-01-2023</td>
                  <td className="fs_16">Hisar / Haryana</td>
                  <td className="fs_16">Active</td>
                  <td className="fs_16">₹ 5000</td>
                </tr>
                <tr>
                  <td className="fs_16">01</td>
                  <td className="fs_16">John leo</td>
                  <td className="fs_16">01-01-2023</td>
                  <td className="fs_16">Hisar / Haryana</td>
                  <td className="fs_16">Active</td>
                  <td className="fs_16">₹ 5000</td>
                </tr>
                <tr>
                  <td className="fs_16">01</td>
                  <td className="fs_16">John leo</td>
                  <td className="fs_16">01-01-2023</td>
                  <td className="fs_16">Hisar / Haryana</td>
                  <td className="fs_16">Active</td>
                  <td className="fs_16">₹ 5000</td>
                </tr>
                <tr>
                  <td className="fs_16">01</td>
                  <td className="fs_16">John leo</td>
                  <td className="fs_16">01-01-2023</td>
                  <td className="fs_16">Hisar / Haryana</td>
                  <td className="fs_16">Active</td>
                  <td className="fs_16">₹ 5000</td>
                </tr>
                <tr>
                  <td className="fs_16">01</td>
                  <td className="fs_16">John leo</td>
                  <td className="fs_16">01-01-2023</td>
                  <td className="fs_16">Hisar / Haryana</td>
                  <td className="fs_16">Active</td>
                  <td className="fs_16">₹ 5000</td>
                </tr>
              </table>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
