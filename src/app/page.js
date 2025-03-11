// "use client"

import CategoryList from "@/component/CategoryList";
import ProductList from "@/component/ProductList";
import Slider from "@/component/Slider"
// import { WixClientContext } from "@/context/winContext";
// import { useWixClient } from "@/hooks/useWixClient";
// import { wixClientServer } from "@/lib/WixClientServer";
import { Suspense } from "react";
// import { useContext, useEffect } from "react";

export default async function Home () {

  // const wixClient = useWixClient();

  // useEffect(()=>{
    
  //   const getProduct= async()=>{
      
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
      
  //   };

  //   getProduct();
  // },[wixClient])

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);
  

  return (
    <div>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading..."}>
        <ProductList categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID} limit={4}/>
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback={"Loading..."}>
        <CategoryList/>
        </Suspense>
      </div>
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList/>
      </div> */}
    </div>
  );
}
