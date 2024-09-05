import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FaMinus, FaPlus } from "react-icons/fa"
import { FaTrashCan } from "react-icons/fa6"
  import { useSelector, useDispatch } from "react-redux"
  import { removeFromCart, increaseQuantity, decreaseQuantity } from "@/store/features/cart/cartSlice"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"


  
export default function Cart() {
    const cart = useSelector((state:any) => state.cart.items)
    const dispatch = useDispatch()
    console.log(cart)

    return (
        <div className="my-8">
            {cart.length > 0 ? (
                <>
              <Table className="border border-gray-300">
              <TableHeader>
                <TableRow className="bg-[#f5f5f5]">
                  <TableHead className="text-[#444444]">Product</TableHead>
                  <TableHead className="text-[#444444]">Price</TableHead>
                  <TableHead className="text-[#444444]">Quantity</TableHead>
                  <TableHead className="text-[#444444]">Total</TableHead>
                  <TableHead className="text-[#444444]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item,index)=>
                        (<TableRow key={index}>
                            <TableCell className="flex gap-4 items-center">
                                <div className="size-14">
                                    <img src={item?.item?.thumbnail} alt="thumbnail" className="bg-cover" />
                                </div>
                                <p>{item?.item?.title}</p>
                            </TableCell>
                            <TableCell>${item?.item?.price.toFixed(2)}</TableCell>
                            <TableCell>
                                <div className="flex gap-4 items-center  justify-start">
                                <button className="w-min" onClick={() => dispatch(decreaseQuantity(index))}><FaMinus/></button>
                                <p className="text-lg">{item?.quantity}</p>
                                <button className="w-min" onClick={() => dispatch(increaseQuantity(index))}><FaPlus/></button>
                                </div>
                            </TableCell>
                            <TableCell>${(item?.item?.price * item.quantity).toFixed(2)}</TableCell>
                            <TableCell><button onClick={() => dispatch(removeFromCart(index))}><FaTrashCan className="size-5"/></button></TableCell>
                          </TableRow>)
                    )}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between px-4 my-8">
                <Link to="/shop" className="text-secondary underline underline-offset-4">Continue Shopping</Link>
                <Link to="/checkout" className="bg-lightred hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Checkout</Link>
            </div>  
            </>
            ):
            (
                <div className="text-center flex flex-col gap-4 items-center justify-center min-h-[80vh] py-4 border border-black">
                    <p className="font-semibold text-3xl">Your cart is empty</p>
                    <Link to="/shop" className="bg-lightred hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold w-max">Shop Now</Link>
                </div>
            )}

        </div>
    )
}