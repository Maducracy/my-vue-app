import React from "react";
// import down from "../assets/down.png";
// import search from "../assets/search (1).png";
// import hamburger from "../assets/more.png";
// import heart from "../assets/heart (1).png";
// import cart from "../assets/grocerystore (1).png";
import menimage from "../assets/menimage.jpg";
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import { Link } from "react-router-dom";
import children from "../assets/children.jpg";
import womenimage from "../assets/womenimage.jpg";
import lady from "../assets/lady.jpg";
import shoe from "../assets/shoe.jpg";
import cream from "../assets/cream.jpg";
import Product from "../Component/Product";
import wine from "../assets/wine.jpeg";
import atomic from "../assets/atomic.webp";
import headset from "../assets/headset.jpeg";
import laptop from "../assets/laptop.jpeg";
import gen from "../assets/gen.jpeg";
import { useNavigate } from "react-router-dom";
import "../LogoSlider.css";

import useStore from "../Zustand.js";
// import menu from "../assets/menu.png"
import "../App.css";
import "../Component/Footer.jsx";
import {
  FaCheck,
  FaShippingFast,
  FaTrash,
  FaExchangeAlt,
  FaHeadset,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Footer from "../Component/Footer.jsx";

import {
  Menu,
  X,
  ChevronDown,
  Search,
  Heart,
  ShoppingCart,
  AlignJustify,
} from "lucide-react";
import RecentProducts from "../Component/Recentproduct.jsx";

function Home() {
  const { cart } = useStore();
  const Navigate = useNavigate();
  const Cartstore = () => {
    Navigate("/Cartstore", { state: { cart } });
  };

  const [catOpen, setCatOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkmode, setDatkmode] = useState(true);
  console.log(cart);

  //   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/2/29/Alibaba_Logo.svg",

  // ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  const features = [
    {
      icon: <FaCheck size={30} className="text-yellow-400" />,
      title: "Quality Product",
    },
    {
      icon: <FaShippingFast size={30} className="text-yellow-400" />,
      title: "Free Shipping",
    },
    {
      icon: <FaExchangeAlt size={30} className="text-yellow-400" />,
      title: "14-Day Return",
    },
    {
      icon: <FaHeadset size={30} className="text-yellow-400" />,
      title: "24/7 Support",
    },
  ];
  const images = [menimage, children, womenimage];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  });
  const picture = [lady, shoe, cream, wine, atomic, headset, laptop, gen];
  return (
    <div>
      {/* <nav className="flex items-center justify-between px-[60px] py-2 bg-[whitesmoke] ">
        <div className="flex gap-5 list-none text-gray-500 text-sm font-sans">
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Help</Link>
          <Link>FAQs</Link>
        </div>
        <div className="flex gap-3">
          <div className="relative">
        
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center w-[120px] gap-1 h-[30px] justify-center bg-white text-[12.5px] font-sans cursor-pointer"
            >
              My Account <img src={down} alt="" className="w-[10px] h-[10px]" />
            </div>

       
            {open && (
              <div className="absolute top-[35px] left-0 w-[120px] bg-white shadow-md  text-gray-700 z-50">
                <ul className="flex flex-col">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Login
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Signup
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center w-[65px] gap-1 h-[30px] justify-center bg-white text-[12.5px] font-sans">
            USD <img src={down} alt="" className="w-[10px] h-[10px]" />
          </div>
          <div className="flex items-center w-[65px] gap-1 h-[30px] justify-center bg-white text-[12.5px] font-sans">
            EN <img src={down} alt="" className="w-[10px] h-[10px]" />
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-between px-[60px] py-2 ">
        <div className="flex sticky ">
          <div className="h-[50px] w-[130px] bg-[#3a3a3a] text-[#fdda0d] flex items-center justify-center text-[35px] font-bold font-sans">
            MULTI
          </div>
          <div className="h-[50px] w-[130px] bg-[#fdda0d] text-[#3a3a3a] flex items-center justify-center text-[35px] font-bold font-sans">
            SHOP
          </div>
        </div>

        <div className="flex items-center">
          <input
            className="w-[320px] h-[30px] px-2.5 border border-gray-200 outline-none placeholder:text-gray-300 placeholder:text-[15px]"
            type="text"
            placeholder="Search for Products"
          />
          <div className="flex items-center justify-center w-[40px] h-[30px] border border-gray-200">
            <img src={search} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-gray-500 text-[17px] font-normal font-sans">
            Customer Service
          </h3>
          <h2 className="text-[21px] font-medium font-sans">+012 345 6789</h2>
        </div>
      </div>

      <div className="flex items-center justify-between px-[50px] h-[70px] bg-[#3a3a3a] sticky top-0 z-50">
        <div className="flex items-center gap-[30px]">
        
          <div className="relative">
            <div className="flex items-center gap-2 h-[70px] w-[200px] px-5 bg-[#fdda0d] text-[18px] font-sans">
              <img
                src={hamburger}
                alt=""
                className="w-[16px] h-[15px] cursor-pointer"
                onClick={() => setCatOpen(!catOpen)}
              />
              <h4>Categories</h4>
            </div>

        
            {catOpen && (
              <div className="absolute top-full left-0 w-[200px] bg-white shadow-lg text-black z-50">
                <ul className="flex flex-col py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Electronics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Fashion
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Home & Garden
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Health & Beauty
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Toys & Games
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex gap-5 font-semibold text-white font-sans">
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Shop Detail</Link>
            <Link>Pages</Link>
            <Link>Contact</Link>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <img src={heart} alt="" className="w-[20px] h-[20px]" />
            <div className="h-[17px] w-[17px] text-[15px] font-bold flex items-center justify-center rounded-full border border-white text-white">
              0
            </div>
          </div>
          <div className="flex items-center gap-1">
        
            <img src={cart} alt="" className="w-[20px] h-[20px]" />
            <div className="h-[17px] w-[17px] text-[15px] font-bold flex items-center justify-center rounded-full border border-white text-white">
              0
            </div>
          </div>
        </div>
      </div> */}

      <nav className="flex items-center justify-between px-4 lg:px-12 py-2 bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-50 sm:static ">
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-5 list-none text-gray-500 text-sm font-sans">
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Help</Link>
            <Link>FAQs</Link>
          </div>
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center w-30 gap-1 h-8 justify-right bg-white text-xs font-sans cursor-pointer px-2"
            >
              My Account
              <ChevronDown size={16} />
            </div>

            {/* Dropdown menu */}
            {open && (
              <div className="absolute top-8 left-0 w-30 bg-white shadow-md text-gray-700 z-50">
                <ul className="flex flex-col">
                  <Link
                    to="./Login"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Login
                  </Link>
                  <Link
                    to="./Signup"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Signup
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center w-16 gap-1 h-8 justify-center bg-white text-xs font-sans px-2">
            USD
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center w-16 gap-1 h-8 justify-center bg-white text-xs font-sans px-2">
            EN
            <ChevronDown size={16} />
          </div>
          <button onClick={() => setDatkmode(!darkmode)} className=""></button>
        </div>

        {/* Mobile hamburger button */}
        <div className="lg:hidden ">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center p-2"
          >
            <AlignJustify size={24} />
          </button>
        </div>

        {/* Logo section - visible on mobile */}
        <div className="flex lg:hidden ">
          <div className="h-10 w-24 bg-gray-800 text-yellow-400 flex items-center justify-center text-xl font-bold font-sans">
            MULTI
          </div>
          <div className="h-10 w-24 bg-yellow-400 text-gray-800 flex items-center justify-center text-xl font-bold font-sans">
            SHOP
          </div>
        </div>

        {/* Cart icons - mobile view */}
        <div className="flex gap-4 lg:hidden">
          <div className="flex items-center gap-1">
            <Heart size={20} />
            <div className="h-4 w-4 text-xs font-bold flex items-center justify-center rounded-full border border-gray-800 text-gray-800">
              0
            </div>
          </div>
          <div className="flex items-center gap-1 ">
            <ShoppingCart onClick={Cartstore} size={20} />
            <div className="h-4 w-4 text-xs font-bold flex items-center justify-center border-gray-800 text-gray-800">
              {cart.length > 0 && (
                <span className="absolute bg-black-600 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - fixed position instead of overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden">
          <div className="p-4 overflow-y-auto h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col gap-5 list-none text-gray-500 text-sm font-sans">
                <Link className="text-gray-800 hover:text-yellow-500 font-medium">
                  About
                </Link>
                <Link className="text-gray-800 hover:text-yellow-500 font-medium">
                  Contact
                </Link>
                <Link className="text-gray-800 hover:text-yellow-500 font-medium">
                  Help
                </Link>
                <Link className="text-gray-800 hover:text-yellow-500 font-medium">
                  FAQs
                </Link>
              </div>
              {/* <Link to={"/"} className="text-gray-800 hover:text-yellow-500 font-medium">Home</Link> */}
              <Link
                to="./Shop"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Shop
              </Link>
              <Link
                to="./ShopDetail"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Shop Detail
              </Link>
              <Link
                to="./Pages"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Pages
              </Link>
              <Link
                to="./Contact"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Categories section */}
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-lg">Categories</h3>
              <ul className="flex flex-col gap-2 pl-2">
                <Link
                  to="./Phone"
                  className="text-gray-700 hover:text-yellow-500 cursor-pointer"
                >
                  Phone
                </Link>
                <Link
                  to="./Fashion"
                  className="text-gray-700 hover:text-yellow-500 cursor-pointer"
                >
                  Fashion
                </Link>
                <Link
                  to="./HomeGarden"
                  className="text-gray-700 hover:text-yellow-500 cursor-pointer"
                >
                  Home & Garden
                </Link>
                <Link
                  to="./HealthBeauty"
                  className="text-gray-700 hover:text-yellow-500 cursor-pointer"
                >
                  Health & Beauty
                </Link>
                <Link
                  to="./ToyGame"
                  className="text-gray-700 hover:text-yellow-500 cursor-pointer"
                >
                  Toys & Games
                </Link>
              </ul>
            </div>

            {/* Account options */}
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-lg">My Account</h3>
              {/* <ul className="flex flex-col gap-2 pl-2">
                <Link className="text-gray-700 hover:text-yellow-500 cursor-pointer">
                  Login
                </Link>
                <Link className="text-gray-700 hover:text-yellow-500 cursor-pointer">
                  Signup
                </Link>
              </ul> */}
              <ul className="flex flex-col">
                <Link
                  to="./Login"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  to="./Signup"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Signup
                </Link>
              </ul>
            </div>

            {/* Currency and language */}
            <div className="flex gap-4">
              <div className="text-sm font-medium">USD</div>
              <div className="text-sm font-medium">EN</div>
            </div>

            {/* Customer service */}
            <div className="mt-6 border-t pt-4">
              <h3 className="text-gray-500 text-sm">Customer Service</h3>
              <h2 className="text-lg font-medium">+012 345 6789</h2>
            </div>
          </div>
        </div>
      )}

      {/* Main logo and search section */}
      <div className="hidden lg:flex items-center justify-between px-12 py-2">
        <div className="flex">
          <div className="h-12 w-32 bg-gray-800 text-yellow-400 flex items-center justify-center text-3xl font-bold font-sans">
            MULTI
          </div>
          <div className="h-12 w-32 bg-yellow-400 text-gray-800 flex items-center justify-center text-3xl font-bold font-sans">
            SHOP
          </div>
        </div>

        <div className="flex items-center">
          <input
            className="w-80 h-8 px-2.5 border border-gray-200 outline-none placeholder:text-gray-300 placeholder:text-sm"
            type="text"
            placeholder="Search for Products"
          />
          <div className="flex items-center justify-center w-10 h-8 border border-gray-200">
            <Search size={20} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-gray-500 text-base font-normal font-sans">
            Customer Service
          </h3>
          <h2 className="text-xl font-medium font-sans">+012 345 6789</h2>
        </div>
      </div>

      {/* Search bar - visible on mobile */}
      <div className="flex lg:hidden px-4 py-2">
        <div className="flex items-center w-full">
          <input
            className="w-full h-8 px-2.5 border border-gray-200 outline-none placeholder:text-gray-300 placeholder:text-sm"
            type="text"
            placeholder="Search for Products"
          />
          <div className="flex items-center justify-center w-10 h-8 border border-gray-200">
            <Search size={20} />
          </div>
        </div>
      </div>

      {/* Main navigation - desktop */}
      <div className="hidden lg:flex items-center justify-between px-12 h-16 bg-gray-800 sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="flex items-center gap-2 h-16 w-48 px-4 bg-yellow-400 text-base font-sans">
              <Menu
                size={16}
                className="cursor-pointer"
                onClick={() => setCatOpen(!catOpen)}
              />
              <h4>Categories</h4>
            </div>

            {/* Dropdown Menu */}
            {catOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg text-black z-50">
                <ul className="flex flex-col py-2">
                  <Link
                    to="./Phone"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Phone
                  </Link>
                  <Link
                    to="./Fashion"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Fashion
                  </Link>
                  <Link
                    to="./HomeGarden"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Home & Garden
                  </Link>
                  <Link
                    to="./HealthBeauty"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Health & Beauty
                  </Link>
                  <Link
                    to="./ToyGame"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Toys & Games
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className="flex gap-5 font-semibold text-white font-sans">
            <Link to={"/"} className="hover:text-yellow-500 font-medium">
              Home
            </Link>
            <Link to="./Shop" className=" hover:text-yellow-500 font-medium">
              Shop
            </Link>
            <Link
              to="./ShopDetail"
              className=" hover:text-yellow-500 font-medium"
            >
              Shop Detail
            </Link>
            <Link to="./Pages" className="hover:text-yellow-500 font-medium">
              Pages
            </Link>
            <Link to="./Contact" className="hover:text-yellow-500 font-medium">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <Heart size={20} color="white" />
            <div className="h-4 w-4 text-sm font-bold flex items-center justify-center rounded-full border border-white text-white">
              0
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ShoppingCart onClick={Cartstore} size={20} color="white" />

            <div className="h-4 w-4 text-sm font-bold flex items-center justify-center  border-white text-white">
              {cart.length > 0 && (
                <span className="absolute  bg-black-600 text-blaxk text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-between px-[] py-5">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-screen-4xl mx-auto px-4">
          <div className="relative w-full md:w-[70%] h-[300px] md:h-[512px]">
            <img
              src={images[currentImage]}
              alt="Men Fashion"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute top-1/2 left-4 sm:left-6 md:left-10 transform -translate-y-1/2 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Men Fashion
              </h1>
              <p className="mt-2 text-sm sm:text-base md:text-lg max-w-sm">
                Lorem rebum magna amet lorem magna erat diam stet. Sadips duo
                stet amet amet ndiam elit ipsum diam
              </p>
              <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-[30%]">
            {[offer1, offer2].map((offer, index) => (
              <div
                key={index}
                className="relative h-[200px] md:h-[250px] w-full transition-transform duration-300  hover:scale-105"
              >
                <img
                  src={offer}
                  alt={`Offer ${index + 1}`}
                  className="w-full h-full object-cover rounded transition-transform duration-300  hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white rounded">
                  <p className="text-sm font-semibold">SAVE 20%</p>
                  <h3 className="text-xl font-bold mb-2">Special Offer</h3>
                  <button className="bg-yellow-400 text-black px-4 py-1 font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-6 px-4">
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded shadow-sm"
            >
              {feature.icon}
              <p className="font-semibold text-gray-800">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Categories Heading Section - below features */}
        <section className="flex flex-col md:flex-row items-center mx-4 md:mx-6 mt-10">
          <h2 className="font-bold text-3xl md:text-4xl font-sans mb-2 md:mb-0 md:mr-6">
            Hot Deals
          </h2>
          <div className="w-full md:flex-1 h-[2px] bg-gray-300"></div>
        </section>

        {/* Other content after categories goes here */}
        <div className="mt-6">
          {/* Insert your categories grid, cards, etc. here */}
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
  <div className="flex gap-4 w-max px-1">
    {picture.map((img, index) => (
      <div
        key={index}
        className="flex items-center gap-4 h-[150px] sm:h-[180px] md:h-[250px] min-w-[300px] sm:min-w-[350px] bg-white p-3 rounded shadow"
      >
        {/* Image */}
        <div className="h-full w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0">
          <img
            src={img}
            alt={`Category ${index + 1}`}
            className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text and Button */}
        <div className="flex flex-col justify-between h-full py-2 flex-1">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              Hot Deals
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm ">1000 products</p>
            <p className="text-gray-500 text-xs sm:text-sm">Save 20%</p>
            <p className="text-gray-500 text-xs sm:text-sm">Limited Time</p>

            <p className="text-gray-500 text-xs sm:text-sm">On Orders Over $50</p>
         
           <button className="w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition" >Add to cart </button>


          </div>
          {/* <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded hover:bg-blue-700 transition duration-200 w-fit">
            Add to Cart
          </button> */}
        </div>
      </div>
    ))}
  </div>
</div>

          <div>
            <h2 className="font-bold text-3xl md:text-4xl font-sans mt-5 md:mb-0 md:mr-6">
              {" "}
              Recent Products
            </h2>
            <Product />
            {/* <div className="slider-container">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo}  />
        ))}
      </div>
    </div> */}
          </div>
        </div>
      </section>

      <div className="flex  gap-6 py-5 px-5  ">
        {[offer1, offer2].map((offer, index) => (
          <div
            key={index}
            className="relative h-[200px] md:h-[250px] w-full transition-transform duration-300  hover:scale-105"
          >
            <img
              src={offer}
              alt={`Offer ${index + 1}`}
              className="w-full h-full object-cover rounded transition-transform duration-300  hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white rounded">
              <p className="text-sm font-semibold">SAVE 20%</p>
              <h3 className="text-xl font-bold mb-2">Special Offer</h3>
              <button className="bg-yellow-400 text-black px-4 py-1 font-medium">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <RecentProducts />
      <Footer />
    </div>
  );
}

export default Home;
