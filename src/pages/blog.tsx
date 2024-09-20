import { FaSearch } from "react-icons/fa";
import lcp from "/blog-1.webp"

export default function Blog(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-4">
<div className="col-span-3 my-3 space-y-2 px-4">
<div className="overflow-hidden rounded-lg">
  <img src={lcp} alt="blog_main" width={966} height={464}/>
</div>
<div className="flex gap-1 items-center">
<p className="text-lightred">By Admin </p>
<p className="text-secondary">/ 12 Comments</p>
<p className="text-secondary">/ Date - OCT 27 1999</p>
</div>
<h1 className="text-3xl">
Health Benefits of a Row food
</h1>
<p className="text-secondary">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus, soluta officia iure enim
itaque. Iste qui exercitationem et odit beatae debitis ratione molestiae quis atque.
</p>
<p className="text-secondary">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus dolor odio nobis eum voluptatem laudantium magni
veritatis sint! Aspernatur est quisquam modi laudantium. Assumenda neque vitae corrupti asperiores, quos vel aliquid hic nisi
nostrum repellendus dolorem placeat vero odit.
</p>
<div className="flex items-center gap-4 p-2">
<div className="space-y-2">
  <div className="overflow-hidden rounded-lg">
    <img src="/blog-2.webp" alt="blog2"/>
  </div>
  <p className="font-semibold">Lorem ipsum dolor consectetur adipisicing elit.
  Molestias, dolorum!</p>
</div>
<div className="space-y-2">
  <div className="overflow-hidden rounded-lg">
    <img src="/blog-3.webp" alt="blog2"/>
  </div>
  <p className="font-semibold">Lorem ipsum dolor consectetur adipisicing elit.
  Molestias, dolorum!</p>
</div>
</div>
<div className="space-y-2 px-8 py-4">
  <p className="text-neutral-700 font-medium  text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum architecto odit soluta quas odio
distinctio quae numquam? Quaerat nulla blanditiis possimus quae. Iusto doloribus, est aliquam delectus pariatur
voluptatem cum iste exercitationem rem.</p>
  <p className="text-lightred text-lg font-semibold">John Martin</p>
</div>
<div>
</div>
</div>
<div className="col-span-1 my-4 px-2">
  <div className="flex shrink  justify-between border overflow-hidden border-neutral-400 rounded-md">
    <input placeholder="Search here" className="outline-none p-2 w-[80%]"/>
   <div className="bg-lightred flex items-center p-2">
   <FaSearch className="size-4 text-white"/>
   </div>
  </div>
  <div className="my-4">
    <h2 className="text-lg font-medium">Recent Posts</h2>
    <div className="my-3 rounded-lg overflow-hidden">
      <img src="/blog-1.webp" alt="blog1"/>
    </div>
    <div className="text-center">
      <p className="text-lightred">Sep 09, 2023</p>
      <h3 className="font-semibold">10 Tasty Organic Fruit choose</h3>
      <p className="text-secondary">Lorem ipsum dolor consectetur
      adipisicing elit.</p>
    </div>
  </div>
  <div className="my-4">
    <h2 className="text-lg font-medium">Latest Gallery</h2>
    <div className="flex flex-wrap gap-2 my-3 px-2">
  <img src="/footer_1.webp" alt="f1"/>
  <img src="/footer_2.webp" alt="f2"/>
  <img src="/footer_3.webp" alt="f3"/>
  <img src="/footer_4.webp" alt="f4"/>
  <img src="/footer_5.webp" alt="f5"/>
    </div>
  </div>
  <div className="my-4">
    <h2 className="text-lg font-medium my-3">Popular Tags</h2>
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-secondary px-3 py-2 border border-neutral-300 rounded-lg">Vegetables</p>
      <p className="text-secondary px-3 py-2 border border-neutral-300 rounded-lg">Juice</p>
      <p className="text-secondary px-3 py-2 border border-neutral-300 rounded-lg">Meat Food</p>
      <p className="text-secondary px-3 py-2 border border-neutral-300 rounded-lg">Cabbage</p>
      <p className="text-secondary px-3 py-2 border border-neutral-300 rounded-lg">Organic Food</p>
      <p className="text-secondary px-3 py-2 border border-neutral-300 rounded-lg">Snacks</p>
    </div>
  </div>
</div>
    </div>
  )
}
