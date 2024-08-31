import {tags} from "../../data"
export function Tags(){
    return(
        <div className="flex gap-8 items-center justify-evenly my-16 px-4 py-4 bg-slate-200 rounded-xl">
            {tags.map((tag)=>(
                <div className="flex gap-4 items-center">
                    <img src={tag.image} alt="tag" />
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{tag.title}</p>
                        <p className="text-secondary">{tag.tag}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}