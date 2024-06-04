import React from "react";
import './Nature.css';
import { Link } from "react-router-dom";
import {RiFileDownloadLine} from 'react-icons/ri';
import Img1 from '../Components/Assets/nature1.jpeg';
import Img2 from '../Components/Assets/nature2.jpeg';
import Img3 from '../Components/Assets/nature3.jpeg';
import Img4 from '../Components/Assets/nature4.jpeg';
import Img5 from '../Components/Assets/nature5.jpeg';
import Img6 from '../Components/Assets/nature6.jpeg';
import Img7 from '../Components/Assets/nature7.jpeg';
import Img8 from '../Components/Assets/nature8.jpg';

function Nature() {
    return(
        <div>
            <div className="Page-Header">
                <h1>Nature</h1>
                <h2>(Nature Images)</h2>
            </div>
            <div className="Nature_img">
                <div className="Img_container">
                    <img src={Img1} width={400} height={200} alt="" />
                    <p>Rs.$60</p>
                    <Link to ='/Cart'><RiFileDownloadLine/></Link>
                    <img src={Img2} width={400} height={200} alt="" />
                    <p>Rs.$60</p>
                    <Link to ='/Cart'><RiFileDownloadLine/></Link>
                    <img src={Img3} width={400} height={200} alt="" />
                    <p>Rs.$60</p>
                    <Link to ='/Cart'><RiFileDownloadLine/></Link>
                </div>
                <div className="Img_container">
                <img src={Img4} width={400} height={200} alt="" />
                <p>Rs.$60</p>
                <Link to ='/Cart'><RiFileDownloadLine/></Link>
                <img src={Img5} width={400} height={200} alt="" />
                <p>Rs.$60</p>
                <Link to ='/Cart'><RiFileDownloadLine/></Link>
                <img src={Img6} width={400} height={200} alt="" />
                <p>Rs.$60</p>
                <Link to ='/Cart'><RiFileDownloadLine/></Link>     
                </div>
                <div className="Img_container">
                <img src={Img7} width={400} height={200} alt="" />
                <p>Rs.$60</p>
                <Link to ='/Cart'><RiFileDownloadLine/></Link>
                <img src={Img8} width={400} height={200} alt="" />
                <p>Rs.$60</p>
                <Link to ='/Cart'><RiFileDownloadLine/></Link> 
            </div>
            </div>
        </div>
    )
}
export default Nature;
