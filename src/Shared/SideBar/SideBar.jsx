import React,{useState} from 'react';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Text from "../Text"
import { CLIENT_SIDEBAR } from './constant';
import Images from "../../Constants/ImgConstants";
import { useHistory } from "react-router-dom";
import "./style.scss"

export default function SideBar(props) {
  let history = useHistory();
  const [activeLink, setActiveLink] = useState(history.location.pathname);
  const handleChange = (e) => {
    history.push(e.action);
    setActiveLink(history.location.pathname);
  };
  
  return (
    <ProSidebar collapsed={false} breakPoint="sm">
      <img src={Images.LOGO_IMG} alt={""} className="logoStyle" />
      <Menu iconShape="square">
        {CLIENT_SIDEBAR.map((value) => {
          return (
            <MenuItem
              key={value.label}
              onClick={() => {
                handleChange(value);
              }}
              icon={value.img}
            className={`${activeLink === value.action ? "selected-option" : ""
              }`}
            >
              <Text mediumLight>{value.label}</Text>
            </MenuItem>
          );
        })}
      </Menu>
    </ProSidebar>
  );
}