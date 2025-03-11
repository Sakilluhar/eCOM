"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar =()=>{

    const router = useRouter();
    const [name,setName] = useState(''); 

    const handleSearchInput = (event)=> {
        setName(event.target.value)        
    }
    
    // const handleSearch = (e: React.FormEvent<HTMLFormElement> ) => {
    const handleSearch = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.correntTarget);
        // // const name = formData.get("name")
        // console.log(name+"123");

        if(name.trim()){
            router.push(`/list?name=${name}`)
        }
        
    }

    return(
        <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" 
            onSubmit={(e)=>handleSearch(e)}>
            <input type="text" name="name" placeholder="Search" className="flex-1 bg-transparent outline-none" value={name} onChange={handleSearchInput}/>
            <button className="cursor-pointer">
                <img src="/search.png" alt="" width={16} height={16}/>
            </button>
        </form>
    )
}
export default SearchBar