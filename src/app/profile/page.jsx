import { wixClientServer } from "@/lib/WixClientServer";
import { members } from "@wix/members";

const profilePage = async () => {

    // const wixClient = await wixClientServer();

    // // GET USER FROM WIXCLIENT
    // const user = await wixClient.members.getCurrentMember({
    //     fieldsets:[members.Set.FULL]
    // });

    // console.log(user);

    // if (!user.members?.contactId) {
    //     <div className="">Not logged in!</div>
    // }

    // temporrery
    // const user = null 

    // if (!user.members?.contactId) {
    //     <div className="">Not logged in!</div>
    // }
    
    // const orderRes = await wixClient.orders.searchOrders({
    //     search:{filter:{"buyerInfo?.contectId":{$eq:user.member?.contactId}}}
    // });

    // console.log(orderRes);
    

    return(
        <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className="w-full md:w-1/2">user</div>
            <div className="w-full md:w-1/2">oredrs</div>
        </div>
    )
}
export default profilePage;