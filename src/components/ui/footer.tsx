export default function Footer() {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-col-1 md:grid-cols-6 max-md:gap-8 gap-4 my-8 ">
        <div className="col-span-1 md:col-span-2 flex flex-col  gap-4 ">
          <div className="flex items-center">
            <img src="/logo.webp" alt="logo" />
            <h2 className="text-lg font-bold">FoodTrove</h2>
          </div>
          <p>
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="flex items-center gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-red-500 size-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"></path></svg>
            <p className="text-secondary">
              51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-red-500 size-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m112 160 144 112 144-112"></path></svg>
            <p className="text-secondary">alirazadev27@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-red-500 size-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"></path></svg>
            <p className="text-secondary">+92 313 7320189</p>
          </div>
        </div>
        <div className="col-span-1 ">
          <h2 className="text-lg font-bold mb-3 max-md:text-center">Company</h2>
          <ul className="flex flex-col gap-2 max-md:items-center">
            <li className="text-secondary">About Us</li>
            <li className="text-secondary">Delivery Information</li>
            <li className="text-secondary">Privacy Policy</li>
            <li className="text-secondary">Terms and Conditions</li>
            <li className="text-secondary">Contact Us</li>
            <li className="text-secondary">Support Center</li>
          </ul>
        </div>
        <div className="col-span-1 ">
          <h2 className="text-lg font-bold mb-3 max-md:text-center">Category</h2>
          <ul className="flex flex-col gap-2 max-md:items-center">
            <li className="text-secondary">Dairy & Bakery</li>
            <li className="text-secondary">Fruits & Vegetables</li>
            <li className="text-secondary">Snack & Spice</li>
            <li className="text-secondary">Juice & Drinks</li>
            <li className="text-secondary">Chicken & Meat</li>
            <li className="text-secondary">Fast Food</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4 ">
            <h2 className="text-lg font-bold max-md:text-center">Subscribe Our Newsletter</h2>
            <div className="flex items-center max-md:mx-2 border border-gray-400 overflow-hidden rounded-xl   ">
            <input type="text"  placeholder="Your email address" className="outline-none py-3 px-6 w-[90%]"/>
            <button className=" px-3">
                <img src="/vector.webp" alt="vector" />
            </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 my-4">
                <img src="/social1.webp" alt="social" />
                <img src="/social2.webp" alt="social" />
                <img src="/social3.webp" alt="social" />
                <img src="/social4.webp" alt="social" />
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center shrink overflow-hidden">
               <div>
               <img src="/footer_1.webp" alt="footer"/>
               </div>
               <div>
               <img src="/footer_2.webp" alt="footer"/>
               </div>
               <div>
               <img src="/footer_3.webp" alt="footer"/>
               </div>
               <div>
               <img src="/footer_4.webp" alt="footer"/>
               </div>
               <div>
               <img src="/footer_5.webp" alt="footer"/>
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
