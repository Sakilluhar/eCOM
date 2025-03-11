"use client"

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react"

const Add = ({productId,variantId,stockNumber}) => {

    const [quantity,setQuantity] = useState(1);

    const wixClient = useWixClient();
    
    // const NEXR_PUBLIC_WIX_APP_ID = process.env.NEXR_PUBLIC_WIX_APP_ID
    // console.log("vid "+variantId);
    // console.log("nid "+NEXR_PUBLIC_WIX_APP_ID);
    // console.log("pid "+productId);
    

    const { addItem, isLoading } = useCartStore();



    return(
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={()=>quantity>1?setQuantity(quantity-1):""}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={()=>stockNumber>quantity?setQuantity(quantity+1):""}>+</button>
                    </div>
                    {stockNumber < 1 ?(<div className="text-xs">Product is out of stock</div>):(<div className="text-xs">Only <span className="text-orange-500">{stockNumber} itmes</span> left!
                    <br/> {"Don't"}{" "} miss it</div>)}
                </div>
                <button onClick={()=>addItem(wixClient,productId,variantId,quantity)} className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none" disabled={isLoading}>Add to Cart</button>
            </div>
        </div>
    )
};

export default Add;