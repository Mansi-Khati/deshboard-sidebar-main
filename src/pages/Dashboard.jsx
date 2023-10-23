import React from 'react';
import './Dashboard.css';
import { CiBadgeDollar, CiBag1 } from "react-icons/ci";
import { PiLockersLight } from "react-icons/pi";
import { IoIosTabletPortrait } from "react-icons/io";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import PieChart from "../components/PieChart.jsx";
import BarChart from "../components/BarChart.jsx";
import vr from "../assets/vr.jpeg";
import sar from "../assets/sar.jpeg";
import ab from "../assets/istockphoto-1280270032-612x612.jpg";

const Dashboard = () => {
    return (
        <div className='dash'>

            <div className="row1">
                <div className="earn sub">
                    <div className="image" ><CiBadgeDollar style={{width:"55%", height:"55%", color:"#03a835"}}/></div>
                    <div className="content">
                        <div className="h">Earning</div>
                        <div className="price">$198k</div>
                        <div className="inc">
                            <div className="per"><BsArrowUpShort />9% &nbsp; </div>
                            <div className="sen">this month</div>
                        </div>

                    </div>
                </div>
                <div className="ord sub">
                    <div className="image"><IoIosTabletPortrait style={{width:"50%", height:"50%", color:"#a40aff"}}/></div>
                    <div className="content">
                    <div className="h">Orders</div>
                        <div className="price">$23.4k</div>
                        <div className="inc">
                            <div className="per"><BsArrowDownShort />2% &nbsp; </div>
                            <div className="sen">this month</div>
                        </div>
                    </div>
                </div>
                <div className="bal sub">
                    <div className="image"><PiLockersLight style={{width:"50%", height:"50%", color:"#0276fa"}}/></div>
                    <div className="content">
                    <div className="h">Balance</div>
                        <div className="price">$2.4k</div>
                        <div className="inc">
                            <div className="per"><BsArrowDownShort />5% &nbsp;</div>
                            <div className="sen">this month</div>
                        </div>
                    </div>
                </div>
                <div className="tot sub">
                    <div className="image"><CiBag1 style={{width:"50%", height:"50%", color:"#de1632"}}/></div>
                    <div className="content">
                    <div className="h">Total Sales</div>
                        <div className="price">$89k</div>
                        <div className="inc">
                            <div className="per"><BsArrowUpShort /> 11% &nbsp;</div>
                            <div className="sen">this month</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="row2">
                <div className="graph"><BarChart /></div>
                <div className="pie"><PieChart/></div>
            </div>
            <div className="row3">
                <div className="r1">
                    <div className="pro">Product Sell</div>
                    <div className="search1">
                    <input className="input-field" type="text" placeholder='🔍search'/>
                    </div>
                    <p className="last">&nbsp;&nbsp;&nbsp;last 30 days</p>
                </div>
                <div className="r2">
                    <div className="product">Product Name</div>
                    <div className="stock">Stock</div>
                    <div className="price">Price</div>
                    <div className="sales">Total Sales</div>

                </div>
                <hr />
                <div className="r3">
                    <div className="product">
                        <img src={ab} alt='' style={{width:"10%", height:"90%", borderRadius:"0.5em"}}/>
                        <div className="right">
                            <div className="head">Virtual Reality VR</div>
                            <div className="sent">Virtual Reality is an art</div>
                        </div>   
                    </div>
                    <div className="stock">16 in Stock</div>
                    <div className="price">$ 65.99</div>
                    <div className="sales">72</div>
                </div>
                <div className="r4">
                    <div className="product">
                        <img src={vr} alt='' style={{width:"10%", height:"90%", borderRadius:"0.5em"}}/>
                        <div className="right">
                            <div className="head">Abstract 3D</div>
                            <div className="sent">Abstract 3D is an art</div>
                        </div>   
                    </div>
                    <div className="stock">32 in Stock</div>
                    <div className="price">$ 105.99</div>
                    <div className="sales">20</div>
                </div>
                <div className="r5">
                <div className="product">
                        <img src={sar} alt='' style={{width:"10%", height:"90%", borderRadius:"0.5em"}}/>
                        <div className="right">
                            <div className="head">Sarphens Illustration</div>
                            <div className="sent">It is a phenomenon</div>
                        </div>   
                    </div>
                    <div className="stock">48 in Stock</div>
                    <div className="price">$ 45.99</div>
                    <div className="sales">59</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;