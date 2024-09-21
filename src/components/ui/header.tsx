import { useLocation } from "react-router-dom";
import { DirectionalSlider } from "../directional_slider";
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
import { WaterFallBorder } from "../waterfall_border";
  


export default function Header() {
  const user = useSelector((state:any) => state.auth.user)
  const location = useLocation()
  return (
    <>
    <header className="container mx-auto hidden md:flex  justify-between items-center my-4 px-2">
      <WaterFallBorder  borderColor="bg-gradient-to-b from-red-400 to-red-700" >
      <div className="flex pacifico-regular items-center font-bold text-lg md:text-2xl bg-white px-2 py-2 ">
        <img src="/logo.webp" alt="logo" />
        <Link to="/">FoodTrove</Link>
      </div>
      </WaterFallBorder>
      <nav>
        <ul className="flex gap-2 sm:gap-4 md:gap-8 font-normal text-xl">
          <li>
          <div className="overflow-hidden">
            <DirectionalSlider>
              <div className="px-3 py-2 hover:text-white">
            <Link to="/shop" className={location.pathname === "/shop" ? "text-red-500 font-bold " : ""}>Shop</Link>
            </div>
            </DirectionalSlider>
            </div>
          </li>
          <li>
          <div className="overflow-hidden">
            <DirectionalSlider>
              <div className="px-3 py-2 hover:text-white">
            <Link to="/about" className={location.pathname === "/about" ? "text-red-500 font-bold" : ""}>About</Link>
            </div>
            </DirectionalSlider>
            </div>
          </li>
          <li>
          <div className="overflow-hidden">
            <DirectionalSlider>
              <div className="px-3 py-2 hover:text-white">
            <Link to="/blog" className={location.pathname === "/blog" ? "text-red-500 font-bold" : ""}>Blog</Link>
            </div>
            </DirectionalSlider>
            </div>
          </li>
        </ul>
      </nav>
      <div>
        {
          user ? <ul className="flex gap-3">
           <li className="flex gap-2 items-center">
            
            <Link to="/account" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
            <span>Account</span>
            </Link>
          </li>
          <li className="flex gap-2 items-center">
            
            <Link to="/wishlist" className="flex gap-2 items-center  hover:underline underline-offset-8 decoration-[2px] decoration-lightred">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
            <span>Wishlist</span></Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"></path></svg>
             <span>Cart</span>
             </Link>
          </li>
        </ul>
        :
        <div className="flex gap-4 md:gap-6  items-center">
          <Link to="/cart" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
           <span>Cart</span>
           </Link>
          <Link to="/login"  className="rounded-2xl bg-black/90 hover:bg-black text-white px-4 py-2">Login</Link>
        </div>
        }
      </div>
    </header>
    <Sheet>
  <div className="flex justify-between items-center md:hidden my-4 px-4">
  <div className="flex items-center font-bold text-lg">
        <img src="/logo.webp" alt="logo" />
        <Link to="/">FoodTrove</Link>
      </div>
  <SheetTrigger className="block md:hidden ">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
  </svg>
  </SheetTrigger>
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
            <Link to="/about" className={location.pathname === "/about" ? "text-red-500 font-semibold transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] " : "transition-all duration-1000 hover:underline underline-offset-8 decoration-[2px] decoration-lightred"}>About</Link>
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
            
            <Link to="/account" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
            <span>Account</span>
            </Link>
          </li>
          <li className="flex gap-2 items-center">
            
            <Link to="/wishlist" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
             <span>Wishlist</span></Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-2 items-center hover:underline underline-offset-8 decoration-[2px] decoration-lightred">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"></path></svg>
             <span>Cart</span>
             </Link>
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
