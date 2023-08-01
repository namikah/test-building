import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/"}>HESABATLAR</Link>
        </li>
        <li>
          <Link to={"/buildings"}>BİNALAR</Link>
        </li>
        <li>
          <Link to={"/apartments"}>MƏNZİLLƏR</Link>
        </li>
        <li>
          <Link to={"/coming_soon"}>GƏLİRLƏR</Link>
        </li>
        <li>
          <Link to={"/coming_soon"}>XƏRCLƏR</Link>
        </li>
        <li>
          <Link to={"/coming_soon"}>ALACAQLAR</Link>
        </li>
        <li>
          <Link to={"/coming_soon"}>ARTIQ ÖDƏMƏLƏR</Link>
        </li>
        <li>
          <Link to={"/error"}>AYARLAR</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
