import React from "react";
import "./App.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import { LoadingProvider } from "./context/loading";
import { ConstantProvider } from "./context/constant";
import SideBar from "./components/layouts/sideBar/SideBar";
import "./App.css";
import MainBoard from "./components/layouts/mainBoard/MainBoard";

function App() {
  return (
    <>
      <LoadingProvider>
        <ConstantProvider>
          <Header />
          <div className="m-3">
            <div className="main-board row">
              <div className="main-left-side col-md-3">
                <div className="main-left-side-card m-1">
                  <SideBar />
                </div>
              </div>
              <div className="main-right-side col-md-9">
                <div className="main-right-side-card m-1">
                  <MainBoard />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </ConstantProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
