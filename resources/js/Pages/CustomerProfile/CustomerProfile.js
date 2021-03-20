import React from 'react';
import Admin from '../../Shared/Layouts/Admin';
import { useEffect, useState } from "react"; 
let date = new Date(); 
const props = {
    user : {
        id : 1,
        name : "Ramesh",
        mobile :  "34353534",
        age : 34,
        address : "Abcde sdasd asdd",
        email : "abc@d.com",
        createdAt : "15 Jan 2020"
    }
    
}

const CustomerProfile = () => {
    const [data,setData] = useState(props.user); 
    return(
    <>
        
        <div className="relative bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-2">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Users Registered
                    </h3>
                </div>
                 
            </div>
        </div>

        <div className="flex-row justify-center max-w-lg bg-white shadow-lg rounded-lg overflow-hidden my-4">
            {/* <img className="w-full h-10 object-cover object-center" 
            src="https://cdn.wallpapersafari.com/78/26/yl8PLG.jpg" 
            alt="avatar"> 
            </img> */}
            <div className="py-3 px-6">
            <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
            <div className="flex items-center mt-4 text-gray-700">
                <i className="fas fa-2x fa-user" ></i>
                <h1 className="ml-3 px-2 text-md">{data.age}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <i className="fas fa-2x fa-phone" ></i>
                <h1 className="ml-3 px-2 text-md">{data.mobile}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <i className="fas fa-2x fa-envelope" ></i>
                <h1 className="ml-3 px-2 text-md">{data.email}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <i className="fas fa-2x fa-home" ></i>
                <h1 className="ml-3 px-2 text-md">{data.address}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <i className="fas fa-2x fa-calendar" ></i>
                <h1 className="ml-3 px-2 text-md">{data.createdAt}</h1>
            </div>
            <div className="flex justify-between items-center mt-4 gap-2"> <button className="w-full h-12 rounded-md border-2 text-md hover:shadow hover:bg-red-700 hover:border-red-700 hover:text-white "> Add measurements </button> </div>
        </div>
    </div>
        
        <div className="h-screen bg-gray-300">
            <div className="container flex justify-center py-20">
                <div className="p-3 bg-white rounded-xl max-w-lg hover:shadow">
                    <div className="flex justify-between w-full"> 
                        {/* <img src="https://i.imgur.com/CeVfZyY.jpg" className="h-20 md:rounded-lg sm:rounded-sm"></img> */}
                        <div className="ml-2">
                            <div className="p-3">
                                <h3 className="text-2xl">{data.name}</h3> <span>Associate developer</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                                <div className="mr-3"> <span className="text-gray-400 block">Article</span> <span className="font-bold text-black text-xl">34</span> </div>
                                <div className="mr-3"> <span className="text-gray-400 block">Followers</span> <span className="font-bold text-black text-xl">940</span> </div>
                                <div> <span className="text-gray-400 block">Ratings</span> <span className="font-bold text-black text-xl">8.9</span> </div>
                            </div>
                        </div>
                    </div>
                <div className="flex justify-between items-center mt-2 gap-2"> <button className="w-full h-12 rounded-md border-2 text-md hover:shadow hover:bg-red-700 hover:border-red-700 hover:text-white ">Chat</button> <button className="w-full h-12 rounded-md bg-blue-700 text-white text-md hover:shadow hover:bg-blue-800">Chat</button> </div>
            </div>
        </div>
       
        </div>
    </>
    );
}


CustomerProfile.layout = page => <Admin children={page} title="Customer Profile" />;
export default CustomerProfile; 