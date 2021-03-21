import React from 'react';
import Admin from '../../Shared/layouts/Admin';
import { useEffect, useState } from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
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

    <div className="relative bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Customer Information
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Personal details and measurements.
      </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
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
            <div className="flex justify-between items-center mt-4 gap-2">
                <InertiaLink href="/order/new" as="button" type="button" className="mx-auto w-1/2 h-12 rounded-md border-2 text-md font-medium hover:shadow hover:bg-blue-700 hover:border-blue-700 hover:text-white ">
                    Create order
                </InertiaLink>
            </div>
    </div>
  </div>
    </>
    );
}


CustomerProfile.layout = page => <Admin children={page} title="Customer Profile" />;
export default CustomerProfile;
