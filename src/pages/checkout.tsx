import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RatingStar from "@/components/ui/ratingStar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state: any) => state.cart.items);
  if(cart.length === 0) return (<div className="min-h-[50vh] flex flex-col justify-center items-center gap-2">
    <h1 className="text-3xl">Your Cart Is Empty</h1>
    <Link to="/shop" className="bg-lightred hover:bg-red-600 px-4 py-2 rounded-lg text-white">Continue Shopping</Link>
  </div>)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="col-span-1  flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-3 p-3 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold">Summary</h2>
          <div className="flex items-center justify-between">
            <p className="text-secondary">Subtotal</p>
            <p>80</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-secondary">Delivery Charges</p>
            <p>80</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Total Amount</h3>
            <p>100</p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {cart.map((item: any, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <div className="size-16">
                  <img
                    src={item?.item?.thumbnail}
                    alt="thumbnail"
                    className="bg-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-1">
                  <p>{item?.item?.title}</p>
                  <RatingStar rating={item?.item?.rating} />
                  <p className="text-lightgreen">
                    ${item?.item?.price}{" "}
                    <span className="text-secondary ms-2">
                      x{item?.quantity}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 p-3 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold">Delivery Method</h2>
          <p className="text-secondary">
            Please select the preferred shipping method to use on this order.
          </p>
          <RadioGroup defaultValue="option-one">
            <div className="flex justify-between items-center">
              <div className="space-y-3">
                <Label className="text-lg">Free Shipping</Label>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Rate - $0.00</Label>
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-lg">Flat Rate</Label>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Rate - $5.00</Label>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col justify-between gap-3 p-3 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <p className="text-secondary">
            Please Select the preferred payment method to use on this order.
          </p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Cash on Delivery</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">UPI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Bank Transfer</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col justify-between gap-3 p-3 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <div className="overflow-hidden">
            <img src="/payment.png" alt="payment" className="bg-cover" />
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 gap-4 flex flex-col gap-8">
        <div className="space-y-8 border border-gray-300 p-4 rounded-md">
          <div className="flex flex-col justify-between gap-2">
            <h3 className="text-xl font-semibold">New Customer</h3>
            <p>Checkout options</p>
            <RadioGroup defaultValue="register">
              <div className="flex items-center gap-8">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="register" id="register" />
                  <Label htmlFor="register">Register Account</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="guest" id="guest" />
                  <Label htmlFor="guest">Guest Account</Label>
                </div>
              </div>
            </RadioGroup>
            <p className="text-secondary">
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <Link
              to="/register"
              className="bg-lightred px-4 py-2 rounded-md text-white hover:bg-red-600 w-max"
            >
              Continue
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <h3 className="text-xl font-semibold">Returning Customer</h3>
            <div className="flex flex-col justify-between gap-2">
              <Label>Email Address</Label>
              <Input type="email" placeholder="Enter your email address" />
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <div className="flex items-center gap-4">
              <Button className="w-max bg-lightred hover:bg-red-600">
                Login
              </Button>
              <Link
                to="#"
                className="text-neutral-700 underline underline-offset-4"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-8 border border-gray-300 p-4 rounded-md">
          <h3 className="text-xl font-semibold">Billing Details</h3>
          <div>
            <p className="text-secondary">Checkout Options</p>
            <RadioGroup defaultValue="existingAddress">
              <div className="flex items-center gap-8">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="existingAddress"
                    id="existingAddress"
                  />
                  <Label htmlFor="existingAddress">
                    I want to use an existing address
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="newAddress" id="newAddress" />
                  <Label htmlFor="newAddress">
                    I want to use a new address
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Label>First Name</Label>
              <Input placeholder="Enter your first name" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Last Name</Label>
              <Input placeholder="Enter your last name" />
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <Label>Address</Label>
              <Input placeholder="Enter your address" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>City</Label>
              <Input placeholder="Enter your city" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Postal Code</Label>
              <Input placeholder="Enter your postal code" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Country</Label>
              <Input placeholder="Enter your country" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Region State</Label>
              <Input placeholder="Enter your region state" />
            </div>
          </div>
          <div className="flex justify-end items-center my-8">
            <Button className="w-max bg-lightred hover:bg-red-600">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
