import React from "react";
import "./Home.css"; 
import e from "../../assets/e.svg";  

export default function Home() {
  return (
    <>
    <div className=" items-center flex flex-col mt-20 ">
      <img src={e} width={300} alt="portfolio" />

      <h1 className="mt-7 text-4xl text-black relative after:content-[''] after:absolute after:bottom-[-25px]  after:left-20 after:w-50 after:h-1.5 after:bg-black">START FRAMEWORK</h1>
     
      
      <p className="mt-10 text-black">Graphic Artist - Web Designer - Illustrator</p>
    </div> 
    
    </>
  );
}
