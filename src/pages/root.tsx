import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return(
        <main className="container mx-auto px-2">
        <Header />
        <Outlet />
        <Footer />
        </main>
    )
}