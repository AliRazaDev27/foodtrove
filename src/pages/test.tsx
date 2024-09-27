
export  function Component() {
    

    const rename = async()=>{
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products/rename`)
        const json = await data.json()
        console.log(json)
    }
    return(
<div className=" flex h-[100vh] gap-4 justify-center items-center overflow-hidden ">
   <button onClick={()=>rename()}>rename</button>
    </div>
    )
}
// add review  and show reviews feature
// add products images library

