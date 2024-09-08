export function Image({src,alt,loading,width,height,placeholder}:{src:string,alt:string,loading:Loading,width?:number,height?:number,placeholder?:string}){
    const id = Math.random().toString()
    fetch(src)
    .then(res=>{console.log("fetch started"); return res.blob()})
    .then(res=>{
        setTimeout(()=>{
            const img = document.getElementById(`img${id}`)
            // img.style.filter = "blur(0px)"
            img?.animate([{filter:"blur(15px)"},{filter:"blur(0px)"}],{duration:1500,fill:"forwards"})
            img?.setAttribute("src",URL.createObjectURL(res))
        },1000)
        
        return
    })
    if(!!width || !!height){
        console.log("yes")
        if(width && height){
            return(
                <img src={src} alt={alt} loading={loading} width={width} height={height} />
            )
        }
        else if(!!width){
            return(
                <img src={src} alt={alt} loading={loading} width={width} height={width} />
            )
        }
        else if(!!height){
            return(
                <img src={src} alt={alt} loading={loading} width={height} height={height} />
            )
        }    
    }

    else{
        return(
            <img src="/placeholder.webp" alt={alt} loading={loading}  id={`img${id}`} className="w-full"/>
        )
    }
}

type Loading = "eager" | "lazy"

// add placeholder
// add onLoad animation
// add onError change to default
// add onError Animation