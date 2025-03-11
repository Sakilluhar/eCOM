"use client"
import Image from "next/image"
import { useState } from "react"

// const images = [
//     {
//         id:1,
//         url:"https://images.pexels.com/photos/29463848/pexels-photo-29463848/free-photo-of-serene-forest-road-in-golden-autumn-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id:2,
//         url:"https://images.pexels.com/photos/29935806/pexels-photo-29935806/free-photo-of-charming-cottage-in-sunlit-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id:3,
//         url:"https://images.pexels.com/photos/29748951/pexels-photo-29748951/free-photo-of-street-vendor-with-fruit-bicycle-in-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id:4,
//         url:"https://images.pexels.com/photos/29987001/pexels-photo-29987001/free-photo-of-modern-architectural-marvel-in-dubai-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     }
// ]

const ProductImages = ({items}) => {

    const [index,setIndex] = useState(0);

    return(
        <div className="">
            <div className="h-[500px] relative">
                <Image src={items[index].image?.url} 
                alt="" fill sizes="50vw" className="object-cover rounded-md"/>
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {items.map((item,i)=>(
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={()=>setIndex(i)}>
                    <Image src={item.image?.url} 
                    alt="" fill sizes="30vw" className="object-cover rounded-md"/>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages