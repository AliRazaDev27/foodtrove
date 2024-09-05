import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
  

export function Header() {
  const location = useLocation()
  // check if user is logged in
  const user = useSelector((state:any) => state.auth.user)
  console.log(user)
  return (
    <>
    <header className="hidden md:flex  justify-between items-center my-4 px-2">
      <div className="flex items-center font-bold text-lg">
        <img src="/logo.png" alt="logo" />
        FoodTrove
      </div>
      <nav>
        <ul className="flex gap-2 sm:gap-4 md:gap-8 font-normal text-lg">
          <li>
            <Link to="/shop" className={location.pathname === "/shop" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>Shop</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/pages" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>About</Link>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === "/blog" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>Blog</Link>
          </li>
        </ul>
      </nav>
      <div>
        {
          user ? <ul className="flex gap-3">
           <li className="flex gap-2 items-center">
            
            <Link to="/account" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred "><IoPersonOutline />Account</Link>
          </li>
          <li className="flex gap-2 items-center">
            
            <Link to="/wishlist" className="flex gap-2 items-center  hover:underline underline-offset-8 decoration-[2px] decoration-lightred"><FaRegHeart /> Wishlist</Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred"><IoCartOutline /> Cart</Link>
          </li>
        </ul>
        :
        <Link to="/login"  className="rounded-2xl bg-black/90 hover:bg-black text-white px-4 py-2">Login</Link>
        }
      </div>
    </header>
    <Sheet>
  <div className="flex justify-between items-center md:hidden my-4 px-4">
  <div className="flex items-center font-bold text-lg">
        <img src="/logo.png" alt="logo" />
        FoodTrove
      </div>
  <SheetTrigger className="block md:hidden"><GiHamburgerMenu /></SheetTrigger>
  </div>

  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-xl text-center">Browse</SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
    <div>
    <nav>
        <ul className="flex flex-col justify-center items-center gap-3 my-8 text-lg">
        <li>
            <Link to="/shop" className={location.pathname === "/shop" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>Shop</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/pages" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>About</Link>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === "/blog" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center">
        {
          user ? <ul className="flex flex-col items-center justify-center gap-3 my-8">
          <li className="flex gap-2 items-center">
            
            <Link to="/account" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred"><IoPersonOutline /> Account</Link>
          </li>
          <li className="flex gap-2 items-center">
            
            <Link to="/wishlist" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred"><FaRegHeart /> Wishlist</Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred"><IoCartOutline /> Cart</Link>
          </li>
        </ul>
        :
        <Link to="/login"  className="rounded-2xl bg-black/90 hover:bg-black text-white px-4 py-2">Login</Link>
        }
      </div>
    </div>
    
  </SheetContent>
</Sheet>
    </>
  );
}
