import {  useState } from "react";
import { useLoaderData  } from "react-router-dom";
import RatingStar from "../components/ui/ratingStar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../components/ui/label";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { CiHeart } from "react-icons/ci";
import { addToCart } from "@/store/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import type { Product } from "@/types";
import { useToast } from "../hooks/use-toast";

export default function ProductDetails() {
  const data = useLoaderData() as Product
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const {toast} = useToast()
  const handleAddToCart = () => {
    dispatch(addToCart({ item: data, quantity: quantity }));
    toast({ title: "Added to cart", description: "Check your cart", className: "bg-green-500 text-white" });
  }
  
  return (
    // maybe there is a better way to do this, but it works | issue: product details page not scrolling to top when footer is too close to the scroll position of previous page.
    <div className="mt-8 mb-32 py-8">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <div>
            <img src={data.thumbnail} alt="thumbnail" />
          </div>
          <div className="flex gap-2 items-center">
            {data.images?.map((image) => (
              <div className="w-20">
                <img src={image} alt="image" className="bg-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <h1 className="text-xl md:text-2xl">{data.title}</h1>
          <p className="text-secondary text-sm">{data.description}</p>
          <div className="flex items-center gap-4">
            <RatingStar rating={data?.rating} />
            <p className="text-secondary">({data?.rating})</p>
          </div>
          {data.category && (
            <div className="flex gap-4 items-center">
              <p>Category</p>
              <p className="text-secondary">{data.category}</p>
            </div>
          )}
          {data.brand && (
            <div className="flex gap-4 items-center">
              <p>Brand:</p>
              <p className="text-secondary">{data.brand}</p>
            </div>
          )}
          <div className="flex items-center gap-4">
          <p>Warranty</p>
          <p className="text-secondary">{data.warrantyInformation}</p>
          </div>
          <div className="flex items-center gap-4">
          <p>Shipping Info</p>
          <p className="text-secondary">{data.shippingInformation}</p>
          </div>
          <div className="flex items-center gap-4">
          <p>Return Policy</p>
          <p className="text-secondary">{data.returnPolicy}</p>
          </div>

          <div className="flex items-center gap-4">
            <p>Status</p>
            <p className="text-secondary">{data.availabilityStatus}</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Stock</p>
            <p className="text-secondary">{data.stock}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lightred text-xl font-semibold">${data.price}</p>
            <p className="text-secondary line-through">${data.price}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Label className="text-lg border border-gray-400 rounded-md px-[0.85rem] aspect-square flex items-center justify-center">
              {quantity}
            </Label>
            <div className="flex flex-col gap-[2px]  ">
              <button
                className="border border-gray-400 px-1  aspect-square"
                onClick={() => setQuantity(quantity + 1)}
              >
                <FaPlus className="size-[0.6rem]" />
              </button>
              <button
                className="border border-gray-400 px-1 aspect-square"
                onClick={() => setQuantity(quantity - 1)}
              >
                <FaMinus className="size-[0.6rem]" />
              </button>
            </div>
            <Button className="bg-lightred" onClick={handleAddToCart}>Add to Cart</Button>
            <CiHeart className="size-[1.5rem] hover:text-lightred" />
          </div>
        </div>
      </div>
      <div className="border border-secondary mt-16 rounded-xl">
        <Tabs defaultValue="description" className="w-full mt-8  ">
          <TabsList>
            <TabsTrigger value="description">Desciption</TabsTrigger>
            <TabsTrigger value="information">Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className=" flex flex-col gap-8 p-4">
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni repellat accusantium. Corporis sapiente suscipit perferendis quo. Voluptatibus voluptates esse quidem excepturi officiis? Quisquam aliquam mollitia unde cum minus ad, rem ullam nostrum recusandae dolore cupiditate. Quos quidem dolorem quaerat maiores accusamus tenetur, debitis ex aspernatur. Tenetur, facilis? Maxime consequuntur nostrum repellendus culpa, dolores dignissimos beatae qui accusantium quos unde quia ipsa deserunt libero! Sed repellendus similique</p>
            <h3>Packaging & Delivery</h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet totam officia beatae id blanditiis quae minus. Provident consequuntur sequi, totam, repudiandae assumenda magnam ullam nulla necessitatibus ut nihil mollitia dolorum veritatis atque harum quas! Itaque quasi dicta aut animi inventore deserunt? Dolorum eveniet repellat adipisci laudantium dolore veniam quidem.
            </p>
          </TabsContent>
          <TabsContent value="information" className=" flex flex-col gap-8 p-4">
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni repellat accusantium. Corporis sapiente suscipit perferendis quo. Voluptatibus voluptates esse quidem excepturi officiis? Quisquam aliquam mollitia unde cum minus ad, rem ullam nostrum recusandae dolore cupiditate. Quos quidem dolorem quaerat maiores accusamus tenetur, debitis ex aspernatur. Tenetur, facilis? Maxime consequuntur nostrum repellendus culpa, dolores dignissimos beatae qui accusantium quos unde quia ipsa deserunt libero! Sed repellendus similique</p>
          
          </TabsContent>
          <TabsContent value="reviews" className=" flex flex-col gap-8 p-4">
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni repellat accusantium. Corporis sapiente suscipit perferendis quo. Voluptatibus voluptates esse quidem excepturi officiis? Quisquam aliquam mollitia unde cum minus ad, rem ullam nostrum recusandae dolore cupiditate. Quos quidem dolorem quaerat maiores accusamus tenetur, debitis ex aspernatur. Tenetur, facilis? Maxime consequuntur nostrum repellendus culpa, dolores dignissimos beatae qui accusantium quos unde quia ipsa deserunt libero! Sed repellendus similique</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
