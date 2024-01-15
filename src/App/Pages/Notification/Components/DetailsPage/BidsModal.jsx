import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const BidsModal = () => {
  const data = [
    {
      name: "Mohsin zulfqar",
      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
  ];

  const headerCellStyle = {
    background: "#F1AD3D",
    borderBottom: "transparent !important",
    color: "white",
    fontWeight: "500",
  };

  const headertable = {
    padding: "40px",
    border: "1px solid #ffff",
    borderRadius: "15px",
  };

  const tablerow = {
    color: "#000000",
    fontSize: "14px",
    fontWeight: "400",
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <div style={{ float: "right" }} className="p-2">
            <img src="./cancel.svg" alt="close Modal" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Container>
            <div
              className="d-flex justify-content-center my-3"
              style={{
                fontStyle: "Poppins",
                fontWeight: "700",
                fontSize: "27px",
              }}
            >
              Bids
            </div>
            <Table
              responsive
              style={{
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              <thead style={headertable}>
                <tr className="tbody,td,tfoot,th,thead,tr" style={headertable}>
                  <th style={headerCellStyle}>Dealers Name</th>
                  <th style={headerCellStyle}>Bids Amount</th>
                  <th style={headerCellStyle}>Pending Bids Response</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-bottom">
                    <td>
                      <p className=" my-0 py-1 text-nowrap " style={tablerow}>
                        {item.name}
                      </p>
                    </td>

                    <td>
                      {" "}
                      <p className=" my-0 py-1 text-nowrap " style={tablerow}>
                        {item.amount}
                      </p>
                    </td>

                    <td>
                      <p className=" my-0 py-1 text-nowrap  ">
                        <button
                          className="border-0 px-2 py-1"
                          style={{
                            backgroundColor:
                              item.bidStatus.backgroundColorAccept,
                            borderRadius: "6px",
                            color: "white",
                            width: "50%",
                          }}
                        >
                          <img src="./accept.svg" />
                          {item.bidStatus.textAccept}
                        </button>
                        <button
                          className="border-0 px-2 py-1 "
                          style={{
                            backgroundColor: item.bidStatus.backgroundColorDeny,
                            borderRadius: "6px",
                            color: "white",
                            width: "50%",
                            marginLeft: "5px",
                          }}
                        >
                          <img src="./deny.svg" />
                          {item.bidStatus.textDeny}
                        </button>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default BidsModal;
