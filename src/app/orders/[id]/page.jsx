import { wixClientServer } from "@/lib/WixClientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({params}) => {

    const id = params.id;
    const wixClient = await wixClientServer();

    // FETING ORDER FROM WIX 
    // let order

    // try {

    //     order = await wixClient.orders.getOrder(id);
        
    // } catch (error) {
    //     return notFound();

    // }
    // console.log(order);
    

    return(
        <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center">
            <h1 className="text-xl">Order Details</h1>

            {/* WITH WIX ORDER  */}
            {/* <div className="mt-12 flex flex-col gap-6">
            <div className="">
                <span className="font-medium">Order Id: </span>
                <span>{order._id}</span>
            </div>
            <div className="">
                <span className="font-medium">Receiver Name: </span>
                <span>{order.billingInfo?.contactDetails.firstName + " "}{order.billingInfo?.contactDetails.lastName}</span>
            </div>
            <div className="">
                <span className="font-medium">Receiver Email: </span>
                <span>{order.buyerInfo?.email}</span>
            </div>
            <div className="">
                <span className="font-medium">Price: </span>
                <span>{order.priceSummary?.subtotal?.amount}</span>
            </div>
            <div className="">
                <span className="font-medium">Payment Status: </span>
                <span>{order.paymentStatus}</span>
            </div>
            <div className="">
                <span className="font-medium">Order Status: </span>
                <span>{order.status}</span>
            </div>
            <div className="">
                <span className="font-medium">Delivery Address: </span>
                <span>{order.billingInfo?.address?.addressLine1 + " "}{order.billingInfo?.address?.city}</span>
            </div>
            </div> */}

            {/* TEMPERORY */}
            <div className="mt-12 flex flex-col gap-6">
            <div className="">
                <span className="font-semibold">Order Id: </span>
                <span>Id34a24b1b-9174-4d0e-9801-7de0be1d81e3</span>
            </div>
            <div className="">
                <span className="font-medium">Receiver Name: </span>
                <span>{"Sakil" + " "}{"Luhar"}</span>
            </div>
            <div className="">
                <span className="font-medium">Receiver Email: </span>
                <span>{"hello@jet.com"}</span>
            </div>
            <div className="">
                <span className="font-medium">Price: </span>
                <span>{"10.00"}</span>
            </div>
            <div className="">
                <span className="font-medium">Payment Status: </span>
                <span>{"PAID"}</span>
            </div>
            <div className="">
                <span className="font-medium">Order Status: </span>
                <span>{"APPROVED"}</span>
            </div>
            <div className="">
                <span className="font-medium">Delivery Address: </span>
                <span>{"Testarossa Winery" + " "}{"Los Gatos"}</span>
            </div>
            </div>
            <Link href='/' className="underline mt-6">Have a problem? Contact us</Link>
        </div>
    )
}

export default OrderPage ;