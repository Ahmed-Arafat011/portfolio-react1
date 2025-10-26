import React from "react";
import { FaStar } from "react-icons/fa";
import "./About.css"; 

export default function About() {
  return (<>



  <section className="text-black py-25">
<div className="container mx-auto text-center py-10">

  <h1  className="text-4xl font-bold uppercase mb-6">about component</h1>
  <div className="flex justify-center items-center">
    <div className="w-24 h-1 bg-black "></div>
<FaStar className="mx-5 text-2xl" /> 

   <div className="w-24 h-1 bg-black"></div>

  </div>

<div className="flex flex-col md:flex-row justify-center gap-10 w-[60%] mx-auto mt-10 text-black ">
  <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript 
as well as optional SASS stylesheets for easy customization.</p>
<p>Freelancer is a free bootstrap theme created by Route. The download includes
 the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>



</div>




  </section>
  
  
  
  </>
  );
}
