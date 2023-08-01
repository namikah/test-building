import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faHouseUser,
  faScrewdriverWrench,
  faChartLine,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <div id="header-default">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center gap-5">
            <Link className="logo" to={'/'}>
              <img src="./logo.jpg" className="img-fluid" alt="logo"></img>
            </Link>
            <Link
              to={'/'}
              className="d-flex justify-content-between align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faChartLine} />
              <h6>Hesabatlar</h6>
            </Link>
            <Link
              to={'/buildings'}
              className="d-flex justify-content-between align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faBuilding} />
              <h6>Binalar</h6>
            </Link>
            <Link
              to={'/apartments'}
              className="d-flex justify-content-between align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faHouseUser} />
              <h6>Mənzillər</h6>
            </Link>
            <Link
              to={'/coming_soon'}
              className="d-flex justify-content-between align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              <h6>Gəlirlər</h6>
            </Link>
            <Link
              to={'/coming_soon'}
              className="d-flex justify-content-between align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              <h6>Xərclər</h6>
            </Link>
            <Link
              to={'/settings'}
              className="d-flex justify-content-between align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              <h6>Ayarlar</h6>
            </Link>
            <Link
              className="user d-flex justify-content-center align-items-center"
              to={'/user'}
            >
              <img src="./user.jpg" className="img-fluid" alt="user"></img>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
