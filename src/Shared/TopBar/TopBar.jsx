import React, { useState } from "react";
import Images from "../../Constants/ImgConstants";
import { Link, withRouter } from "react-router-dom";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Heading from "./../Heading";
import "./style.scss";

export default function TopBar(props) {
  const [userSetting, setUserSetting] = useState(false);
  return (
    <>
      <nav className="navBarDesign navbar navbar-expand-lg navbar-light bg-light">
        <div className="innerNavBody">
          <img
            id="Popover1"
            className="userTopImg"
            src={Images.DEFAULT_USER_IMG}
            alt={""}
          />
        </div>
      </nav>
      <Popover
        trigger="legacy"
        placement="bottom-start"
        isOpen={userSetting}
        target="Popover1"
        className="profileSettingPopover"
        toggle={() => setUserSetting(!userSetting)}
        onClick={() => setUserSetting(!userSetting)}
      >
        <PopoverHeader>
          <Heading pageHeading className="mb-0">
            Profile
          </Heading>
        </PopoverHeader>
        <PopoverBody>
          <ul className="dropdown-user-menu p-0">
            <li className="setting-dropdown">
              {/* <svg
                    width="19"
                    height="16"
                    viewBox="0 0 361 361"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M329.791 353.596H137.327C124.012 353.596 113.117 342.689 113.117 329.359C113.117 316.028 124.012 305.121 137.327 305.121H305.581V177.47C305.581 177.066 305.178 176.662 305.178 176.258L180.5 63.5541L55.8221 176.258C55.4186 176.662 55.4186 177.066 55.4186 177.47V329.763C55.4186 343.093 44.5244 354 31.2093 354C17.8942 354 7 343.093 7 329.763V177.47C7 163.332 13.0523 150.001 23.543 140.306L164.36 13.0594C173.641 4.98021 187.359 4.98021 196.64 13.0594L337.457 140.306C347.948 149.597 354 163.332 354 177.47V329.763C353.596 343.093 343.106 353.596 329.791 353.596Z"
                      fill="white"
                      stroke-width="14"
                    />
                  </svg> */}
              Profile
            </li>

            <li className="setting-dropdown">Settings</li>

            <Link
              to="/"
              // onClick={() => dispatch(logout())}
              className="navbarTextColorChange"
            >
              <li className="setting-dropdown">Sign Out</li>
            </Link>
          </ul>
        </PopoverBody>
      </Popover>
    </>
  );
}
