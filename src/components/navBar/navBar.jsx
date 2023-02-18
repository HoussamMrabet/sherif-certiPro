import React from "react";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";

import "./navBar.scss";

const NavBar = () => {
  return (
    <nav className="component">
      <div className="dropdown">
        {/* eslint-disable-next-line */}
        <a className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
          سفيان امرابط
        </a>
        <ul className="dropdown-menu">
          <li>
            {/* eslint-disable-next-line */}
            <a
              className="d-flex justify-content-between align-items-center dropdown-item"
              href="#"
            >
              <span>الملف الشخصي</span>
              <FiUser />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a
              className="d-flex justify-content-between align-items-center dropdown-item"
              href="#"
            >
              <span>اعدادات</span>
              <FiSettings />
            </a>
          </li>
          <li>
            <div className="dropdown-divider"></div>
          </li>

          <li>
            {/* eslint-disable-next-line */}
            <a
              className="d-flex justify-content-between align-items-center dropdown-item"
              href="auth-login-basic.html"
            >
              <span>تسجيل الخروج</span>
              <FiLogOut />
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          انشاء شهادة +
        </button>
        <ul className="dropdown-menu">
          <li style={{ textAlign: "right" }}>
            {/* eslint-disable-next-line */}
            <a className="dropdown-item" href="#">
              نسخة عربية
            </a>
          </li>
          <li style={{ textAlign: "right" }}>
            {/* eslint-disable-next-line */}
            <a className="dropdown-item" href="#">
              نسخة فرنسية
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
