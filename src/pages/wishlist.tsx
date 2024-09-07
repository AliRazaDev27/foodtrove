import { getWishlist } from '@/actions'
import { useQuery,useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
export default function Wishlist() {
    const queryClient = useQueryClient()
    const [value,setValue] = useState(0)
    const query = useQuery({
        queryKey:['wishlist',value],
        queryFn:()=>getWishlist(value),
    })
    return (
        <div>
            <h1>{JSON.stringify(query.data)}</h1>
            <button onClick={()=>setValue(value+1)}>INC</button>
        </div>
        
    )
}