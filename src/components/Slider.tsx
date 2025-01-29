import { useState } from "react";

const Slider = () => {
  
  const[page,setPage]=useState(0)
  console.log(page)
   
  return (
    <>
      
        <div className=" relative border-2 w-[500px] flex">
 
<img src="https://picsum.photos/id/12/1200/500" className={` top-0 object-cover  w-full h-full`} alt="images" />
<img src="https://picsum.photos/id/13/1200/500" className={` top-0 object-cover  w-full h-full`} alt="images" />
<img src="https://picsum.photos/id/14/1200/500" className={` top-0 translate-x-[-200%] object-cover  w-full h-full`} alt="images" />
    
      </div>

      <div>
        <button onClick={()=>setPage(p=>p-1)} className="px-2 py-1 bg-gray-400 ml-2">Prev</button>
        <button onClick={()=>setPage(p=>p+1)} className="px-2 py-1 bg-gray-400 ml-2">Next</button>
      </div>
    </>
  );
};

export default Slider;
