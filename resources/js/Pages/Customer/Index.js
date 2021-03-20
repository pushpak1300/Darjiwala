import React from 'react';
import { useEffect, useState } from "react"; 
import Admin from '../../Shared/Layouts/Admin';

import { InertiaLink } from "@inertiajs/inertia-react";

const props = {
    data : [
        {
            id : 1,
            name : "Ramesh",
            mobile :  "34353534",
            age : 34,
            address : "Abcde sdasd asdd",
            email : "abc@d.com"
        }, 
        {
            id : 2,
            name : "Suresh",
            mobile :  "91353534",
            age : 34,
            address : "Asda asdasdsdssdsadd",
            email : "pqrs@d.com"
        }, 
        {
            id : 3,
            name : "Ethan",
            mobile :  "84353534",
            age : 34,
            address : "asdasda asdasdsd",
            email : "tuv@d.com"
        }, 
        {
            id : 4,
            name : "Pushpak",
            mobile :  "59353534",
            age : 34,
            address : "asds asdsa asdsd",
            email : "wxy@d.com"
        } 
    ]
}

const Index = () => {

    
    const [userData,setUserData] = useState(props.data);
    const [search, setSearch] = useState(''); 

    const handleSearchChange = (event) => {
        const { value, name } = event.target;
        event.preventDefault();
        setSearch(value); 
    }
    
    useEffect(()=>{
        if(search === null || search === "") {
            setUserData(props.data)
        } else {
            setUserData((prev) => {
                let y = prev.filter((x)=>{
                    var re = new RegExp(`^${search}`, 'i');
                    console.log(x.mobile.match(re), x.mobile);
                    let m = x.mobile.match(re); 
                    let n = x.name.match(re)
                    if(m || n){
                        return 1; 
                    }
                }) 
                return y; 
            })
        }
        
        console.log("Search value change")
    },[search]); 
    return (
        <>
            <div className="relative bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-2">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Users Registered
                    </h3>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <input type="text" name="search_candidate" id="search_candidate" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300" placeholder="Search" 
                    onChange = {handleSearchChange}
                    />
                    <input type="text" name="search_candidate" id="search_candidate" className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300" placeholder="Search candidates" 
                    onChange = {handleSearchChange}
                    />
                </div>
                </div>
            </div>
            
            <ul className="relative divide-y divide-gray-200 bg-white">
                    { userData.map((e,i)=>{
                        return (
                        <InertiaLink href="/customerprofile"> 
                        <li key={i}>
                            <a href="/" className="block hover:bg-gray-50">
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 flex items-center">
                                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                        <div>
                                        <p className="font-bold text-xl font-medium text-indigo-600 truncate">{e.name}</p>
                                        <p className="font-semibold text-sm text-gray-500 font-bold truncate">{e.mobile}</p>
                                        </div>
                                        <div className="hidden md:block">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500">
                                                {e.email}
                                            </p>
                                             
                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            Completed phone screening
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                <div>
                                    <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            </a>
                        </li>   
                        </InertiaLink>
                        );
                    })}
            </ul >

            <ul className="relative divide-y divide-gray-200 bg-white">
                    <li>
                        <a href="/" className="block hover:bg-gray-50">
                            <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 flex items-center">
                                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                        <div>
                                        <p className="text-sm font-medium text-indigo-600 truncate">Ricardo Cooper</p>
                                        </div>
                                        <div className="hidden md:block">
                                        <div>
                                            <p className="text-sm text-gray-900">
                                            Applied on
                                            {/* space */}
                                            <time dateTime="2020-01-07">January 7, 2020</time>
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            Completed phone screening
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                <div>
                                    <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/" className="block hover:bg-gray-50">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                <p className="text-sm font-medium text-indigo-600 truncate">Ricardo Cooper</p>
                                </div>
                                <div className="hidden md:block">
                                <div>
                                    <p className="text-sm text-gray-900">
                                    Applied on
                                    {/* space */}
                                    <time dateTime="2020-01-07">January 7, 2020</time>
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                                    Completed phone screening
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                            </div>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="/" className="block hover:bg-gray-50">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                <p className="text-sm font-medium text-indigo-600 truncate">Ricardo Cooper</p>
                                </div>
                                <div className="hidden md:block">
                                <div>
                                    <p className="text-sm text-gray-900">
                                    Applied on
                                    {/* space */}
                                    <time dateTime="2020-01-07">January 7, 2020</time>
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                                    Completed phone screening
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                            </div>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="/" className="block hover:bg-gray-50">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                <p className="text-sm font-medium text-indigo-600 truncate">Ricardo Cooper</p>
                                </div>
                                <div className="hidden md:block">
                                <div>
                                    <p className="text-sm text-gray-900">
                                    Applied on
                                    {/* space */}
                                    <time dateTime="2020-01-07">January 7, 2020</time>
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                                    Completed phone screening
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                            </div>
                        </div>
                        </a>
                    </li>
            </ul>

        </>
    );
}

Index.layout = page => <Admin children={page} title="Customer List" />;

export default Index;
