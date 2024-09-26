import  Header from "../components/ui/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { lazy, Suspense } from "react";


const Footer = lazy(() => import('../components/ui/footer'))

export  function Component() {
    return(
        <main>
        <Header />
        <Outlet />
        <Suspense>
        <Footer />
        </Suspense>
        <Toaster />
        </main>
    )
}