import { FeatureCard } from "./feature_card"
import {featureCards} from "../../data/index"


export default function Featured(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8">
                {featureCards.map((card:any,index:number)=>{
                    return(
                        <FeatureCard key={index} card={card}/>
                    )
                })}
            </div>
    )
}