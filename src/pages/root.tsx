// import  Header from "../components/ui/header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { lazy, Suspense } from "react";

const Header = lazy(() => import('../components/ui/header'))
const Footer = lazy(() => import('../components/ui/footer'))

export  function Component() {
    return(
        <main>
        <Suspense>
        <Header />
        </Suspense>
        <Outlet />
        <Suspense>
        <Footer />
        </Suspense>
        <Toaster />
        </main>
    )
}