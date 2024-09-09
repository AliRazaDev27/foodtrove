import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

export default function Root() {
    return(
        <main className="container mx-auto px-2">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Toaster />
        
        </main>
    )
}