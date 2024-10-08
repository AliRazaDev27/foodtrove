import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categories } from "@/../data/index";
// import { brands } from "@/../data/index";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { sort } from "@/store/features/sort/sortSlice";
export default function SearchAndFilter({close}:{close?:any}) {
  console.log("search and filter started at",performance.now())
    const [search,setSearch] = useState("")
      const [price, setPrice] = useState([0,100]);
    const [selectedCategories, setSelectedCategories] = useState(new Array(categories.length).fill(false));
    // const [selectedBrands, setSelectedBrands] = useState(new Array(brands.length).fill(false));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sortBy = useSelector((state:any)=>state.sort.sortBy)
    console.log(sortBy) 
    const handleFilter = () => {
      const categoryValues = selectedCategories.map((category, index) => {
        if (category) {
          return categories[index];
        }
      }).filter((category) => category !== undefined);
  
      // const brandValues = selectedBrands.map((brand, index) => {
      //   if (brand) {
      //     return brands[index];
      //   }
      // }).filter((brand) => brand !== undefined);
        const encodedCategories = encodeURIComponent(JSON.stringify(categoryValues));
        // const encodedBrands = encodeURIComponent(JSON.stringify(brandValues));
        let searchParams = "/shop?page=1"
        if(search !== ""){
          searchParams += `&search=${search}` 
        }
        if(encodedCategories !== "%5B%5D"){
          searchParams += `&category=${encodedCategories}`
        }
        // if(encodedBrands !== "%5B%5D"){
        //   searchParams += `&brand=${encodedBrands}`
        // }
        if(price[0] !== 0){
          searchParams += `&minPrice=${price[0]}`
        }
        if(price[1] !== 0){
          searchParams += `&maxPrice=${price[1]}`
        }
        if(sortBy !== "default"){
          searchParams += `&sortBy=${sortBy}`
        }
        if(close){
          close.current?.click()
        }
        navigate(searchParams)
    }
  
    const handleReset = () => {
  setSearch("")
  setPrice([0,100])
  setSelectedCategories(new Array(categories.length).fill(false))
  // setSelectedBrands(new Array(brands.length).fill(false))
  dispatch(sort("default"))
  if(close){
    close.current?.click()
  }
  navigate("/shop")
    }
    return(
     <div>
          <div className="flex flex-col gap-2">
            <p className="md:text-lg font-semibold">Search By Title</p>
            <Input placeholder="Search"  className="w-full" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
  
        <div className="flex flex-col gap-4">
             <h2 className="md:text-lg font-semibold">Filter By Price</h2>
             <Slider defaultValue={price} max={1000} step={10} onValueChange={setPrice}  />
             <p className="font-bold">Price: <span className="text-secondary font-bold">${price[0]}-${price[1]}</span> </p>
             <div className="flex gap-2 items-center">
             <Button className="w-max bg-lightred font-semibold" onClick={handleFilter}>Filter</Button>
             <Button className="w-max  font-semibold" onClick={handleReset}>Reset</Button>
             </div>
          </div>
          <div className="my-4">
          <h2 className="md:text-lg font-semibold">Product Category</h2>
          <ScrollArea className="w-full h-[250px] p-2 border rounded-md" >
           <ul>
          {categories.map((category,index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox value={category} onCheckedChange={(e)=> {setSelectedCategories([...selectedCategories.slice(0,index),e, ...selectedCategories.slice(index+1)])}}/>
              <span>{category}</span>
            </li>
          ))}
          </ul>
          </ScrollArea>
          </div>
          
          {/* <div>
            <h2 className="md:text-lg font-semibold">Product Brand</h2>
          <ScrollArea className="w-full h-[250px] p-2 border rounded-md" >
           <ul>
          {brands.map((brand,index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox  onCheckedChange={(e)=> {setSelectedBrands([...selectedBrands.slice(0,index),e, ...selectedBrands.slice(index+1)])}}/>
              <span>{brand}</span>
            </li>
          ))}
          </ul>
          </ScrollArea>
          </div> */}
          </div>
      
    )
  }