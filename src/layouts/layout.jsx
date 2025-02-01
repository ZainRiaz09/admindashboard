import React, { useState, useEffect } from "react";
import "../assets/css/layout.css";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ProfileDropdown from "../Componenets/ProfileDropdown";
const Layout = () => {
  // State to track whether the sidebar is shown or not
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarShown(!isSidebarShown);
  };

  const [isFullScreen, setIsFullScreen] = useState(false);

  // Toggle fullscreen mode
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      const element = document.documentElement;
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement != null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    // Clean up the event listener
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);
  return (
    <>
      <div className="d-flex position-relative">
        <aside
          id="side-bar"
          className={`sideBar ${isSidebarShown ? "sideBar-show" : ""}`}
        >
          <div className="">
            <div className="d-lg-none text-end mt-2">
              <button
                type="button"
                onClick={toggleSidebar}
                class=""
                id="topnav-hamburger-icon"
              >
                <span class="hamburger-icon open">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
            <div className="logo-wrap">
              <Link to="/">
                <img src="img/logo2.svg" alt="logo" />
              </Link>
            </div>
            <div className="sidebar-menu">
              <ul className="">
                <li>
                  <NavLink
                    className=""
                    style={({ isActive }) => ({
                      textDecoration: "underline",
                      color: isActive ? "white" : "#737791", // White if active, default otherwise
                    })}
                    to="/"
                  >
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=""
                    style={({ isActive }) => ({
                      textDecoration: "underline",
                      color: isActive ? "white" : "#737791", // White if active, default otherwise
                    })}
                    to="/estimate"
                  >
                    <i class="fa-regular fa-rectangle-list"></i>
                    <span>Estimate</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=""
                    style={({ isActive }) => ({
                      textDecoration: "underline",
                      color: isActive ? "white" : "#737791", // White if active, default otherwise
                    })}
                    to="/contract"
                  >
                    <i class="fa-solid fa-file-contract"></i>{" "}
                    {/* <i class="fa-solid fa-chart-line"></i> */}
                    <span>Contract</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=""
                    style={({ isActive }) => ({
                      textDecoration: "underline",
                      color: isActive ? "white" : "#737791", // White if active, default otherwise
                    })}
                    to="/threshold"
                  >
                    <i class="fa-regular fa-calendar"></i>
                    <span>Threshold</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=""
                    style={({ isActive }) => ({
                      textDecoration: "underline",
                      color: isActive ? "white" : "#737791", // White if active, default otherwise
                    })}
                    to="/blueprint"
                  >
                    <i class="fa-solid fa-book"></i>
                    {/* <i class="fa-solid fa-chart-line"></i> */}
                    <span>Blueprint</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=""
                    style={({ isActive }) => ({
                      textDecoration: "underline",
                      color: isActive ? "white" : "#737791", // White if active, default otherwise
                    })}
                    to="/settings"
                  >
                    <i class="fa-solid fa-gears"></i>
                    <span>Setting</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <h3>Sidebar</h3> */}
        </aside>
        <div className="body-main">
          <header className="navBar">
            <div class="row flex-row align-items-center justify-content-center">
              <div className="col-4 col-lg-0 d-lg-none">
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div className="">
                    <button
                      type="button"
                      onClick={toggleSidebar}
                      class=""
                      id="topnav-hamburger-icon"
                    >
                      <span class="hamburger-icon ">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>
                  </div>
                  <div className="logo-wrap-sm nav-sm-logo">
                    <Link to="/">
                      <div>
                        <img
                          className="nav-logo-big"
                          src="img/logo2.svg"
                          alt="logo"
                        />
                      </div>
                    </Link>
                    <Link to="/">
                      <img
                        className="nav-logo-sm"
                        style={{ maxWidth: "50px" }}
                        src="/img/logo3.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-8 col-lg-12">
                <div className="d-flex nav-items text-white nav-side-icons justify-content-end">
                  <div
                    className="d-none d-sm-block"
                    style={{ marginTop: "5px" }}
                  >
                    <div className="searchbar-outer">
                      <form class="search-form">
                        <div class=" position-relative ">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search"
                          />
                          <button class="s-btn" type="submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="">
                    <button
                      type="button"
                      class="btn flag btn-icon rounded-circle"
                    >
                      <img
                        id="header-lang-img"
                        src="img/english.svg"
                        alt="Header Language"
                        height="20"
                        class="rounded"
                      />
                    </button>
                    <div class="dropdown-menu-ww">
                      {/* <!-- item--> */}
                      {/* <a href="javascript:void(0);" class="dropdown-item notify-item language py-2" data-lang="en" title="English" contenteditable="false">
                            <img src="assets/images/flags/us.svg" alt="user-image" class="me-2 rounded" height="18"/>
                            <span class="align-middle">English</span>
                        </a> */}
                    </div>
                  </div>
                  {/* <div className="d-md-none d-block">
                      <button
                        type="button"
                        class="btn btn-icon rounded-circle"
                        data-toggle="fullscreen"
                      >
                        <i class="fa-solid fa-search"></i>
                      </button>
                    </div> */}
                  <div className="">
                    <button
                      type="button"
                      className="btn btn-icon rounded-circle"
                      onClick={toggleFullScreen}
                    >
                      <i
                        className={`fa-solid ${
                          isFullScreen ? "fa-compress" : "fa-expand"
                        }`}
                      ></i>
                    </button>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      class="btn btn-icon rounded-circle"
                      data-toggle="fullscreen"
                      fdprocessedid="nnzoac"
                    >
                      <i class="fa-regular fa-bell"></i>
                    </button>
                  </div>
                  <ProfileDropdown />
                </div>
              </div>
            </div>
          </header>
          <main className="mainWraper">
            <div className="" style={{ paddingTop: "60px" }}></div>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default Layout;
