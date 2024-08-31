import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";


export function Header(){
    return(
        <header className="flex justify-between items-center my-4">
                <div className="flex items-center font-bold text-lg">
                    <img src="/logo.png" alt="logo" />
FoodTrove
                </div>
                <nav >
<ul className="flex gap-3">
    <li>Home</li>
    <li>Category</li>
    <li>Products</li>
    <li>Pages</li>
    <li>Blog</li>
</ul>
                </nav>
                <div >
<ul className="flex gap-3">
    <li className="flex gap-2 items-center"><IoPersonOutline /> Account</li>
    <li className="flex gap-2 items-center"><FaRegHeart /> Wishlist</li>
    <li className="flex gap-2 items-center"><IoCartOutline /> Cart</li>
</ul>
                </div>
            </header>
    ) 
}