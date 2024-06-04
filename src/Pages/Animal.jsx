import React from 'react'
import './Animal.css'
import Img1 from '../Components/Assets/Animal1.jpeg'
import Img2 from '../Components/Assets/Animal2.jpeg'
import Img3 from '../Components/Assets/Animal3.jpeg'
import Img4 from '../Components/Assets/Animal4.jpeg'
import Img5 from '../Components/Assets/Animal5.jpeg'
import Img6 from '../Components/Assets/Animal6.jpeg'
import Img7 from '../Components/Assets/Animal7.jpeg'
import Img8 from '../Components/Assets/Animal8.jpg'
import { Link } from 'react-router-dom'
import {RiFileDownloadLine} from 'react-icons/ri'


function Animal() {
    return(
        <div>
            <div className="Page-Header">
                <h1>Animal</h1>
                <h2>(Animal Images)</h2>
            </div>
            <div className="Animal_img">
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
export default Animal;