import React from "react";
import logo from "../images/OLX-Logo.png";
import "./header.css";
import carlogo from "../images/car icon.png";
import prologo from "../images/porperty.jpg";
import mainlogo from "../images/mainlogo.png";
import sellbtn from "../images/sellbtnn.png";
import sliderimg from "../images/sliderimg.jpeg";
import mobile from '../images/mobile.png'
import vehcile from '../images/cars.png'
import property from '../images/house.png'
import key from '../images/key.png'
import camera from '../images/camera.png'
import bike from '../images/bike.png'
import tractor from '../images/Tractor.png'
import brush from '../images/brush.png'
import jobs from '../images/bags.png'
import chicken from '../images/chicken.png'
import chair from '../images/chair.png'
import books from '../images/books.png'
import toy from '../images/toys.png'
import fashion from '../images/fashin beauty.png'
import { Link } from "react-router-dom";





function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {/* First Row Start */}
            <img src={logo} alt="" className="logoimg" />
            <div className="motors">
              <img src={carlogo} alt="" className="vectorimg" />
              <b className="bold">MOTORS</b>
            </div>

            <div className="property">
              <img src={prologo} alt="" className="vectorimg" />
              <b className="bolder">PROPERTY</b>
              <br />
            </div>
            {/* First Row End */}

            {/* Second Row Start */}

            <div className="secondRow">
              <img src={mainlogo} className="mainlogo" alt="" />
              {/* First Search Bar */}
              <div className="search-bar">
                <button>
                  <i className="fas fa-search"></i>
                </button>
                <input type="text" placeholder="Use Current Location" />
              </div>
              {/* Second Search Bar */}
              <div className="search-bar2">
                <input
                  className="inpsearch"
                  type="search"
                  placeholder="Find Cars, Mobile Phones and more..."
                />
                <button className="btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="btndiv">
                <button className="loginbtn"><Link to={"/Login"}> Login </Link>   </button>
                <img className="img" src={sellbtn} alt="" />
              </div>
              <br /> <br />
            </div>
            {/* Third Row */}
            <div className="thirdRow ">
              <div className="items">
                <select name="" className="selopt" id="">
                  <option value="">All Categories</option>
                </select>

                <ul>
                  <li>Mobile Phone</li>
                  <li>Cars</li>
                  <li>Motorcycles</li>
                  <li>Houses</li>
                  <li>Tv-Video-Audio</li>
                  <li>Tablets</li>
                  <li>Land & Plots</li>
                </ul>
              </div>
            </div>
            {/* Big Image */}
            <div>
              <br />
              <img className="sliderimg" src={sliderimg} alt="" />
            </div>
            </div>

<br /> <br /> <br /> <br />  <br /> <br />  <br /> <br />
{/* All Categories */}
<div className="container">
<div className="row" style={{display:"inline-block"}}>
<div className="col">
<div className="categories">
  <h2 className="all-cat">All Categories</h2>
  <br />
</div>
<div className="categories-div">

<div className="div-mob">
<img className="cat-img"  src={mobile} alt="" />
<b>Mobiles</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={vehcile} alt="" />
<b>Vehciles</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={property} alt="" />
<b>Property</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={key} alt="" />
<b> For Rent</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={camera} alt="" />
<b>Camera</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={bike} alt="" />
<b>Bikes</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={tractor} alt="" />
<b>Tractor</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={brush} alt="" />
<b>Brush</b>
</div>
</div>


<div className="div-mob">
<img className="cat-img"  src={jobs} alt="" />
<b>Jobs</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={chicken} alt="" />
<b>Animals</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={chair} alt="" />
<b>Furniture</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={fashion} alt="" />
<b>Fashion Dresses</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={books} alt="" />
<b>Books</b>
</div>

<div className="div-mob">
<img className="cat-img"  src={toy} alt="" />
<b>Kids</b>
</div>

</div>
</div>
</div>

<br /> <br /> <br />

 {/* Mobile Phone Section */}

<div className="container">
  <div className="row">
    <div className="col">
      <h2 className="all-cat">Mobile Phones</h2>
    </div>
    <div className="col">


      <div className="mainCards">

  <div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://www.androidauthority.com/wp-content/uploads/2022/12/EoY-2022-phone-collage-angled.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 12,500</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>I Phone Samsang infinix Oppo</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 12,500</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>I Phone Samsang infinix Oppo</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://proreviewsapp.com/uploads/tintuc/these-are-the-top-android-phones-you-should-buy-in-2022-samsung-and-google-oneplus-and-more.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 12,500</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>I Phone Samsang infinix Oppo</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://blog-cdn.el.olx.com.pk/wp-content/uploads/2023/01/05174042/Best-camera-phones-in-Pakistan.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 12,500</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>I Phone Samsang infinix Oppo</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>
</div>





    </div>
  </div>
</div>

{/* Cars Section */}

<div className="container">
  <div className="row">
    <div className="col">
    <br /> <br /> <br />

      <h2 className="all-cat">Cars</h2>
      <br />
  
    </div>
    <div className="col">


      <div className="mainCards">

  <div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://www.brandsynario.com/wp-content/uploads/2021/06/Underrated-Cars-3.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 30,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Toyota, Honda, Kia, Suzuki, Audi</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>


<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://img.autotrader.co.za/20279511/Crop640x480" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 30,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Toyota, Honda, Kia, Suzuki, Audi</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://blog.olx.com.pk/wp-content/uploads/2021/05/3-8-1024x576.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 30,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Toyota, Honda, Kia, Suzuki, Audi</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>


<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://carsales.pxcrush.net/carsales//cars/private/76yoiyucw71nrais5yebp0hrw.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 30,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Toyota, Honda, Kia, Suzuki, Audi</b> <br /> <br />
    <b style={{padding:"6px"}}>Karachi Pakistan</b>
  </div>
</div>
</div>
    </div>
  </div>
</div>


{/* Motor Cycle Section */}

<div className="container">
  <div className="row">
    <div className="col">
    <br /> <br /> <br />

      <h2 className="all-cat">Bikes & Motorcycle</h2>
      <br />
  
    </div>
    <div className="col">


      <div className="mainCards">

  <div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://i.ytimg.com/vi/eJo-yDF_P6s/maxresdefault.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 100,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Unique, High Speed, Honda, Express</b> <br /> <br />
    <b style={{padding:"6px"}}>Hyderabad Sindh</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://dnd.com.pk/wp-content/uploads/2022/12/WhatsApp-Image-2022-08-19-at-3.03.37-PM-1-1024x766-1-1.jpeg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 100,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Unique, High Speed, Honda, Express</b> <br /> <br />
    <b style={{padding:"6px"}}>Hyderabad Sindh</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://www.incpak.com/wp-content/uploads/2019/09/70352529_2319293194987235_2723627667940179968_n.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 100,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Unique, High Speed, Honda, Express</b> <br /> <br />
    <b style={{padding:"6px"}}>Hyderabad Sindh</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://i.ytimg.com/vi/dlTXYcqJ4Lw/maxresdefault.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 100,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>Unique, High Speed, Honda, Express</b> <br /> <br />
    <b style={{padding:"6px"}}>Hyderabad Sindh</b>
  </div>
</div>




</div>
</div>
  </div>
</div>


{/* House Section */}


<div className="container">
  <div className="row">
    <div className="col">
    <br /> <br /> <br />

      <h2 className="all-cat">Houses</h2>
      <br />
  
    </div>
    <div className="col">


      <div className="mainCards">


<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://filelist.tudelft.nl/Websections/Global_Initiative/Stories/Building%20affordable%20homes/20180528%20Update%20GlobalImpactMap07.JPG" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 1000,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>5 Marla Double Story House</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://is1-2.housingcdn.com/01c16c28/872a3619995ce73437fa282795c1611d/v0/fs/3_bhk_independent_house-for-sale-bhuda_colony-Dhanbad-others.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 1000,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>5 Marla Double Story House</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://is1-3.housingcdn.com/01c16c28/ef3d88ffc5fff04740142cd9a17dd2f0/v0/fs/1_bhk_independent_house-for-sale-kk_nagar_madurai-Madurai-others.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 1000,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>5 Marla Double Story House</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://is1-3.housingcdn.com/01c16c28/ef3d88ffc5fff04740142cd9a17dd2f0/v0/fs/1_bhk_independent_house-for-sale-kk_nagar_madurai-Madurai-others.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 1000,000,00</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>5 Marla Double Story House</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>




</div>
</div>
  </div>
</div>

{/* Tv and Audio Section */}


<div className="container">
  <div className="row">
    <div className="col">
    <br /> <br /> <br />

      <h2 className="all-cat">Tv & Audios</h2>
      <br />
  
    </div>
    <div className="col">


      <div className="mainCards">






<div className="border all-cat outline-Border">
  <div className="imgCard">
<img src="https://cdn.thewirecutter.com/wp-content/media/2022/11/lcd-led-tv-2048px-0943-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 23,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>32 Inch Smart Led</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://www.reason.pk/cdn/shop/articles/6_Differences_Between_LCD_TV_and_LED_TV.jpg?v=1587536114" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 23,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>32 Inch Smart Led</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://streamingbetter.com/wp-content/uploads/2021/07/YouTube-TV-local-channels-RSNs.jpg" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 23,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>32 Inch Smart Led</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>

<div className="border all-cat outline-Border">
  <div className="imgCard">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB07MbPakY3-LVcNpQDgMTxevXKlB7Z2q8jw&usqp=CAU" alt="" />
    <br /> <br />
  </div>
  <div className="cardText">
    <h3 style={{padding:"5px"}}>Rs 23,000</h3>
    <br /> <br />
    <b style={{padding:"6px"}}>32 Inch Smart Led</b> <br /> <br />
    <b style={{padding:"6px"}}>Lahore Pakistan</b>
  </div>
</div>




</div>
</div>
  </div>
</div>









        </div>
      </div>
    </>
  );
}

export default Header;
