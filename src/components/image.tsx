export function Image({src,alt,loading,width,height,placeholder}:{src:string,alt:string,loading?:Loading,width?:number,height?:number,placeholder?:string}){
    const id = ((Math.random() * 1000) + 1).toString()
    fetch(src)
    .then(res=>res.blob())
    .then(res=>{
        setTimeout(()=>{
            const img = document.getElementById(`img${id}`)
            if(!img) return
            img?.animate([{filter:"blur(0px)"},{filter:"blur(10px)"}],{duration:1000,fill:"forwards"})
            setTimeout(()=>{
                img?.setAttribute("src",URL.createObjectURL(res))
                img?.animate([{filter:"blur(10px)"},{filter:"blur(0px)"}],{duration:1000,fill:"forwards"})
            },1000)
        },100)
        return
    })
    const props:any = {}
    props.alt = alt
    if(!!width) props.width = width;
    if(!!height) props.height = height;
    if(!!loading) props.loading = loading;
    (!!placeholder) ? props.src = placeholder : props.src = src
    return (
        <img {...props} style={{width:"100%"}} id={`img${id}`}/>
    ) 
}

type Loading = "eager" | "lazy"

// add placeholder
// add onLoad animation
// add onError change to default
// add onError Animation