"use client"

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { media as wixMedia } from "@wix/sdk";

const CartModel = () => {
    // TEMPORARY
    // const cartItems = true ;

    const wixClient = useWixClient();
    const {cart,isLoading,removeItem}= useCartStore()

    // console.log(cart);
    


    return(
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cart.lineItems ? (
                <div className="">Cart is Empty</div>
            ):(
                <>
                <h2 className="text-xl">Shoping Cart</h2>
                {/* // LIST */}
                <div className="flex flex-col gap-8">
                {/* ITEM */}
                {cart.lineItems.map(item=>(
                    <div className="flex gap-4" key={item._id}>
                    {item.image && <img src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})} 
                        alt="" width={72} height={96} className="object-cover rounded-md"/>}
                    <div className="flex flex-col justify-between w-full">
                        {/* top */}
                        <div className="">
                            {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">{item.productName.original}</h3>
                            <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">{item.quantity && item.quantity >1 && <div className="text-sm text-green-500">{item.quantity} x </div>}${item.price?.amount}</div>
                            </div>
                            {/* DESCRIPTION */}
                            <div className="text-sm text-gray-500">
                                {item.availability?.status}  
                            </div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Qty. {item.quantity}</span>
                            <span className="text-blue-500 " style={{cursor: isLoading ? "not-allowed" : "pointer"}} onClick={()=>removeItem(wixClient, item._id)}>Remove</span>
                        </div>
                    </div>
                </div>
                ))}
                </div>
                {/* // BOTTOM */}
                <div className="">
                    <div className="flex items-center justify-between font-semibold">
                        <div className="">Subtotal</div>
                        <div className="">${cart.subtotal.amount}</div>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 mb-4">
                    Shiping and texes calculated at checkout.
                    </p>
                    <div className="flex justify-between text-sm">
                        <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View cart</button>
                        <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75" disabled={isLoading}>Checkout</button>
                    </div>      
                </div>
                </>
            )}
        </div>
    )
}

export default CartModel