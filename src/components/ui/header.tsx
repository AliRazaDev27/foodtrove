import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

export function Header() {
  return (
    <>
    <header className="hidden md:flex  justify-between items-center my-4 px-2">
      <div className="flex items-center font-bold text-lg">
        <img src="/logo.png" alt="logo" />
        FoodTrove
      </div>
      <nav>
        <ul className="flex gap-2 sm:gap-4 md:gap-8">
          <li>Home</li>
          <li>Category</li>
          <li>Products</li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div>
        <ul className="flex gap-3">
          <li className="flex gap-2 items-center">
            <IoPersonOutline /> Account
          </li>
          <li className="flex gap-2 items-center">
            <FaRegHeart /> Wishlist
          </li>
          <li className="flex gap-2 items-center">
            <IoCartOutline /> Cart
          </li>
        </ul>
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
        <ul className="flex flex-col justify-center items-center gap-3 my-8">
          <li>Home</li>
          <li>Category</li>
          <li>Products</li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div>
        <ul className="flex flex-col items-center justify-center gap-3 my-8">
          <li className="flex gap-2 items-center">
            <IoPersonOutline /> Account
          </li>
          <li className="flex gap-2 items-center">
            <FaRegHeart /> Wishlist
          </li>
          <li className="flex gap-2 items-center">
            <IoCartOutline /> Cart
          </li>
        </ul>
      </div>
    </div>
    
  </SheetContent>
</Sheet>
    </>
  );
}
