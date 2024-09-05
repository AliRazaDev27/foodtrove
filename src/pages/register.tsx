import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/features/auth/authSlice";


export default function Register() {
    const dispatch = useDispatch()
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const postalCodeRef = useRef<HTMLInputElement>(null);
    const countryRef =  useRef<HTMLInputElement>(null);
    const regionRef = useRef<HTMLInputElement>(null);

    const handleSumbit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(firstNameRef.current?.value)
        if(passwordRef.current?.value !== confirmPasswordRef.current?.value) {
            return
        }
        const data = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            phoneNumber: phoneNumberRef.current?.value,
            password: passwordRef.current?.value,
            address: addressRef.current?.value,
            city: cityRef.current?.value,
            postalCode: postalCodeRef.current?.value,
            country: countryRef.current?.value,
            region: regionRef.current?.value
        }
        dispatch(register(data)).then(() => {
            console.log("success")
        })
    }
    return(
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-300 py-8">
            <div className="flex  items-center py-2">
                <img src="/logo.png" alt="logo" />
                FoodTrove
                </div>
                <form onSubmit={(e)=>handleSumbit(e)}>
                <div className="border border-neutral-200 bg-white rounded-lg flex flex-col sm:grid  gap-x-4 gap-y-8 text-lg px-4 py-4">
                   
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" ref={firstNameRef} id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" ref={lastNameRef} id="lastName" placeholder="Enter your last name" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" ref={emailRef} id="email" placeholder="Enter your email" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input type="phone" ref={phoneNumberRef} id="phoneNumber" placeholder="Enter your phone number"  required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" ref={passwordRef} id="password" placeholder="Password"  required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input type="password" ref={confirmPasswordRef} id="confirmPassword" placeholder="Confirm Password"  required/>
                    </div>
                    <div className="flex col-span-2 flex-col gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input type="text" ref={addressRef} id="address" placeholder="Address" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input type="text" ref={cityRef} id="city" placeholder="City" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input type="number" ref={postalCodeRef} id="postalCode" placeholder="Postal Code" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="country">Country</Label>
                        <Input type="text" ref={countryRef} id="country" placeholder="Country" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="region">Region State</Label>
                        <Input type="text" ref={regionRef} id="region" placeholder="Region/State" required/>
                    </div>

                    <Button className="w-max bg-lightred" type="submit">Register</Button>
                    <Link to="/login" className="mt-auto">Already have an account?</Link>
                    
                </div>
                </form> 
            </div>
    
    )
}