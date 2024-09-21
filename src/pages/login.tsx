import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {useRef} from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/features/auth/authSlice";
import { Toaster } from "@/components/ui/toaster";
import {useToast} from "../hooks/use-toast"
import { useNavigate } from "react-router-dom";
export  function Component() {
    const dispatch = useDispatch<any>()
    const {toast} = useToast()
    const navigate = useNavigate()
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(emailRef.current?.value)
        dispatch(login({email: emailRef.current?.value, password: passwordRef.current?.value})).then((res:any) => {
            console.log(res)
            if(res.meta.requestStatus === "fulfilled") {
                toast(
                    {
                        title: "Success",
                        description: "You have successfully logged in",
                        className: "bg-green-500 text-white",
                        duration: 2000,
                    }
                )
                setTimeout(() => {
                    navigate("/")
                }, 2000)
                
            }
            if(res.meta.requestStatus === "rejected") {
                toast(
                    {
                        title: "Error",
                        variant: "destructive",
                        description: "Invalid email or password",
                        duration: 3000,
                    }
                )
            }
        })
    }
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-300 py-8">
            <div>
            <div className="flex  items-center">
                <img src="/logo.png" alt="foodtrove" />
                FoodTrove
            </div>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-4 border px-4 py-2">
                <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" id="email" ref={emailRef} placeholder="Enter your email"/>
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" ref={passwordRef} placeholder="Enter your password" />
                </div>
                <div className="flex justify-between  w-full items-end">
                    <Button type="submit">Login</Button>
                    <Link to="/register">Register?</Link>
                </div>
            </div>
            </form>
            </div>
<Toaster/>
        </div>
    );
}