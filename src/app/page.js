import Image from "next/image";
import MaTemp1 from "./marketting/MaTemp1";
import MaTemp2 from "./marketting/MaTemp2";
import MaTemp3 from "./marketting/MaTemp3";
import MaTemp4 from "./marketting/MaTemp4";
import MaTemp5 from "./marketting/MaTemp5";

export default function Home() {
  return (
    <div className="grid grid-cols-4 items-center justify-center  p-8 pb-20 gap-16">
     <MaTemp1/>
     <MaTemp2/>
     <MaTemp3/>
     <MaTemp4/>
     <MaTemp5/>
     
      
    </div>
  );
}
