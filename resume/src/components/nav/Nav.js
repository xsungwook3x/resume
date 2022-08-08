import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, {useState} from "react";
import './nav.scss'
import {Button} from "react-bootstrap";

function Nav(){
    let [collapse,setCollapse]=useState(false);
    return(
        <ProSidebar className="nav" collapsed={collapse}>
            <h1 className="nav-title">AboUgi</h1>
            <Menu iconShape="round" >
                <MenuItem >About Me</MenuItem>
                <MenuItem >Portfolio</MenuItem>
                <MenuItem >Book</MenuItem>
                <MenuItem >Study</MenuItem>
                <MenuItem >Contact Me</MenuItem>
                <Button onClick={()=>{
                    setCollapse(!collapse)
                }}>크기 줄이기</Button>
            </Menu>
        </ProSidebar>
    )
}

export default Nav;