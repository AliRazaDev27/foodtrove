import {tags} from "../../../data"
export function Tags(){
    return(
        // need infinte slider
        <div className="bg-slate-200 overflow-hidden my-16">
        <div className="flex flex-col sm:flex-row gap-8 items-center overflow-hidden  slide    justify-evenly  px-4 py-4  rounded-xl">
            {tags.map((tag,index)=>(
                <div key={index} className="flex bg-white border border-gray-300 shadow-2xl shadow-gray-500  item  flex-wrap gap-4 items-center px-2 py-2 rounded-2xl">
                    <img src={tag.image} alt="tag" />
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{tag.title}</p>
                        <p className="text-secondary">{tag.tag}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}