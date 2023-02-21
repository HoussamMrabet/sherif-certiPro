import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../authContext";
import { useNavigate } from "react-router-dom";

import "./navBar.scss";

const NavBar = () => {

  const {currentUser,logout} = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if(!currentUser){
      navigate('/login');
    }
  }, [currentUser]);


  function handleLogout(){
    logout();
    navigate('/login');
  }

  return (
    <nav className="component">
      <div className="dropdown">
        <Link className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
          سفيان امرابط
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link
              className="d-flex justify-content-between align-items-center dropdown-item"
            >
              <span>الملف الشخصي</span>
              <FiUser />
            </Link>
          </li>
          <li>
            <Link
              className="d-flex justify-content-between align-items-center dropdown-item"
            >
              <span>اعدادات</span>
              <FiSettings />
            </Link>
          </li>
          <li>
            <div className="dropdown-divider"></div>
          </li>

          <li>
            <Link
              className="d-flex justify-content-between align-items-center dropdown-item"
              onClick={handleLogout}
            >
              <span>تسجيل الخروج</span>
              <FiLogOut />
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/" className="nav-link">الصفحة الرئيسية</Link>
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
            <Link to="/createAtt" className="dropdown-item">
              نسخة عربية
            </Link>
          </li>
          <li to="/createAtt" style={{ textAlign: "right" }}>
            <Link className="dropdown-item">
              نسخة فرنسية
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
