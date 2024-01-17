import React from "react";
import { Col, Row } from "react-bootstrap";

const DealerBids = () => {
  return (
    <>
      <div>
        <p
          className="p-4 "
          style={{
            color: "#4C4C4C",
            fontSize: "32px",
            fontWeight: "500",
            background: "#F5F5F5",
          }}
        >
          My Bids
        </p>
        <div
          className="p-4 "
          style={{
            background: "#EBEBEB",
            border: "1px ",
            borderRadius: "15px",
          }}
        >
          <div className="p-3">
            <h5>Today</h5>
            <div
              className="p-4 bg-white mt-3 shadow "
              style={{ border: "1px", borderRadius: "15px" }}
            >
              <Row>
                <Col xs={12} md={4} lg={2}>
                  <img src="./car_img.svg" alt="carlogo" />
                </Col>
                <Col xs={12} md={5} lg={9}>
                  <div>
                    <h4 style={{ fontWeight: "bold" }}>Car Name</h4>
                    <p style={{ fontWeight: "400", fontSize: "20px" }}>2020</p>
                  </div>
                </Col>
                <Col xs={12} md={1} lg={1}>
                  <div
                    style={{
                      color: "#F1AD3D",
                    }}
                    className="d-flex align-items-center h-100"
                  >
                    <h3>$3500</h3>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="p-3">
            <h5>Yesterday</h5>
            <div
              className="p-4 bg-white mt-3 shadow "
              style={{ border: "1px", borderRadius: "15px" }}
            >
              <Row>
                <Col xs={12} md={4} lg={2}>
                  <img src="./car_img.svg" alt="carlogo" />
                </Col>
                <Col xs={12} md={5} lg={9}>
                  <div>
                    <h4 style={{ fontWeight: "bold" }}>Car Name</h4>
                    <p style={{ fontWeight: "400", fontSize: "20px" }}>2020</p>
                  </div>
                </Col>
                <Col xs={12} md={1} lg={1}>
                  <div
                    style={{
                      color: "#F1AD3D",
                    }}
                    className="d-flex align-items-center h-100"
                  >
                    <h3>$3500</h3>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerBids;
