import React, { useState } from 'react';
import {FaBars} from "react-icons/fa";
import {MdOutlineProductionQuantityLimits, MdPadding, MdOutlineAttachMoney} from "react-icons/md";
import {FiUsers, FiHelpCircle, FiAward} from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<MdPadding className='m_icon'/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<MdOutlineProductionQuantityLimits className='m_icon'/>
        },
        {
            path:"/customers",
            name:"Customers",
            icon:<FiUsers className='m_icon'/>
        },
        {
            path:"/income",
            name:"Income",
            icon:<MdOutlineAttachMoney className='m_icon'/>
        },
        {
            path:"/promote",
            name:"Promote",
            icon:<FiAward className='m_icon'/>
        },
        
        {
            path:"/help",
            name:"Help",
            icon:<FiHelpCircle className='m_icon'/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "20%" : "5%"}} className="sidebar">
               <div className="top_section">
                   <p style={{display: isOpen ? "block" : "none"}} className="logo">Dashboard</p>
                   <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars">
                       <FaBars onClick={toggle} className='fabars'/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className="down">
                    <div className="account">
                        <div className="p_icon"><img src={avatar} alt="user-profile" style={{borderRadius:"50%", width:"100%", height:"2em"}}/>
                        </div>
                        <div style={{display: isOpen ? "block" : "none"}} className="name"><p className='name1'>Evano</p><p className='desn'>Project manager</p></div>
                    </div>
                </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;