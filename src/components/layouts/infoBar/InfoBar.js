import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../tools/charts/Chart";
import "./infoBar.scss";

function InfoBar() {
  return (
    <>
      <div className="main-info row p-4">
        <div className="main-info-card col-md-3">
          <Link to={"/"} className="income p-2">
            <h4 className="m-0">1500 AZN</h4>
            <p>Ümumi gəlir</p>
          </Link>
        </div>
        <div className="main-info-card col-md-3">
          <Link to={"/"} className="cost p-2">
            <h4 className="m-0">800 AZN</h4>
            <p>Ümumi xərc</p>
          </Link>
        </div>
        <div className="main-info-card col-md-3">
          <Link to={"/"} className="will-take p-2">
            <h4 className="m-0">500 AZN</h4>
            <p>Ümumi alacaq</p>
          </Link>
        </div>
        <div className="main-info-card col-md-3">
          <Link to={"/"} className="overpayment p-2">
            <h4 className="m-0">200 AZN</h4>
            <p>Ümumi artıq ödəmə</p>
          </Link>
        </div>
      </div>
      <Chart />
    </>
  );
}

export default InfoBar;
