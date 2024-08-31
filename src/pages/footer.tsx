import { SlLocationPin } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

export function Footer() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2 my-8">
        <div className="col-span-2 flex flex-col gap-4 ">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" />
            <h2 className="text-lg font-bold">FoodTrove</h2>
          </div>
          <p>
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="flex items-center gap-2">
            <SlLocationPin className="text-red-500 size-8" />
            <p className="text-secondary">
              51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoMailOutline className="text-red-500 size-8" />
            <p className="text-secondary">alirazadev27@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLocalPhone className="text-red-500 size-8" />
            <p className="text-secondary">+92 313 7320189</p>
          </div>
        </div>
        <div className="col-span-1 ">
          <h2 className="text-lg font-bold mb-3">Compny</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-secondary">About Us</li>
            <li className="text-secondary">Delivery Information</li>
            <li className="text-secondary">Privacy Policy</li>
            <li className="text-secondary">Terms and Conditions</li>
            <li className="text-secondary">Contact Us</li>
            <li className="text-secondary">Support Center</li>
          </ul>
        </div>
        <div className="col-span-1 ">
          <h2 className="text-lg font-bold mb-3">Category</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-secondary">Dairy & Bakery</li>
            <li className="text-secondary">Fruits & Vegetables</li>
            <li className="text-secondary">Snack & Spice</li>
            <li className="text-secondary">Juice & Drinks</li>
            <li className="text-secondary">Chicken & Meat</li>
            <li className="text-secondary">Fast Food</li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Subscribe Our Newsletter</h2>
            <div className="flex items-center border w-max rounded-md">
            <input type="text"  placeholder="Your email address" className="outline-none py-3 px-6"/>
            <button className="w-max px-3">
                <img src="/vector.png" alt="vector" />
            </button>
            </div>
            <div className="flex items-center gap-4 my-4">
                <img src="/social1.png" alt="social" />
                <img src="/social2.png" alt="social" />
                <img src="/social3.png" alt="social" />
                <img src="/social4.png" alt="social" />
            </div>
            <div className="flex gap-2 items-center shrink overflow-hidden">
               <div>
               <img src="/footer_1.png" alt="footer" className="bg-cover"/>
               </div>
               <div>
               <img src="/footer_2.png" alt="footer" className="bg-cover"/>
               </div>
               <div>
               <img src="/footer_3.png" alt="footer" className="bg-cover"/>
               </div>
               <div>
               <img src="/footer_4.png" alt="footer" className="bg-cover"/>
               </div>
               <div>
               <img src="/footer_5.png" alt="footer" className="bg-cover"/>
               </div>
            </div>
        </div>
      </div>
      <div className="my-8">
        <p className="text-center text-primary font-semibold">© 2022 <span className="text-lightred font-bold">FoodTrove</span>. All rights reserved</p>
      </div>
    </div>
  );
}
