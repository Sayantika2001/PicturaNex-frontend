import React from "react";
import './Flower.css'
import Img1 from '../Components/Assets/Flower1.jpeg'
import Img2 from '../Components/Assets/Flower2.jpeg'
import Img3 from '../Components/Assets/Flower3.jpeg'
import Img4 from '../Components/Assets/Flower4.jpeg'
import Img5 from '../Components/Assets/Flower5.jpeg'
import Img6 from '../Components/Assets/Flower6.jpeg'
import Img7 from '../Components/Assets/Flower7.jpeg'
import Img8 from '../Components/Assets/Flower8.jpeg'
import { Link } from "react-router-dom";
import {RiFileDownloadLine} from 'react-icons/ri'

function Flower() {
    return(
        <div>
            <div className="Page-Header">
                <h1>Flower</h1>
                <h2>(Flower Images)</h2>
            </div>
            <div className="Flower_img">
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
export default Flower;