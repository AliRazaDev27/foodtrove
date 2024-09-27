import { Outlet } from "react-router-dom";
import { useRef,lazy,Suspense } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SearchAndFilter = lazy(()=>import('@/components/search_filter'))

export  function Component() {
  const closeRef = useRef<HTMLButtonElement>(null);
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-2">
        <div className="hidden md:col-span-1 md:flex flex-col gap-4 px-2 py-2">
            <Suspense>
            <SearchAndFilter/>
            </Suspense>
        </div>
      <div className="col-span-3 border-blue-500">
        <Outlet />
      </div>
        </div>
        <Sheet>
  <SheetTrigger className="fixed md:hidden bottom-4 right-4">
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>         
  </SheetTrigger>
  <SheetContent aria-describedby={undefined} side={"left"} className="overflow-y-auto w-full">
    <SheetHeader>
      <SheetTitle>Search & Filter</SheetTitle>
    </SheetHeader>
      <div className="space-y-4 px-4 py-2">
      <Suspense>
      <SearchAndFilter close={closeRef}/>
      </Suspense>
        </div>
  </SheetContent>
  <SheetClose ref={closeRef}/>
</Sheet>
    </div>
    )
}
