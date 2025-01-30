import { Heart, Search } from "lucide-react";
import logo from "../assets/logo.png"
import slogan from "../assets/logoSlogan.png"
import bag from "../assets/icons/bag.png"
import user from "../assets/icons/user.png"
 
const TopNavBar = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-between px-[27px] py-[22px] ">

            <form className="lg:min-w-[600px] w-full relative">
                <input className="py-4 pl-7 w-full text-sm font-light rounded-[29px] focus:outline-none border border-[#E5E5E5]" type="text" placeholder="Hey, what are you looking for?" />
                <Search className="absolute top-[11px] right-4" height={25} width={25}/>
            </form>

            <figure className="flex gap-2 items-start ">
                <img src={logo} alt="" />
                <img src={slogan} alt="" />
            </figure>

            <nav className="flex items-center lg:justify-end justify-center gap-[10px] lg:min-w-[600px]">
                <a className="flex items-center gap-2" href="#"><img src={user} alt="user icon" /> <span className="text-sm font-medium">My Account</span></a>
                <a className="flex items-center gap-2" href="#"><Heart width={25} height={25}/> <span className="text-sm font-medium">Wishlist</span></a>
                <a className="flex items-center gap-2" href="#"><img src={bag} alt="bag icon" /> <span className="text-sm font-medium underline">2 items</span></a>
            </nav>
            
        </div>
    );
};

export default TopNavBar;