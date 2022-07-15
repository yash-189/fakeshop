import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
const Navbar = () => {

    const page = window.location.pathname;

    return (
        <>

            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5   md:flex-row justify-between items-center ">
                    <Link to='' className="flex title-font font-medium items-center text-white  md:mb-0 order-1 md:order-1">

                        <span className=" md:text-xl text-base  py-2 px-6 rounded border-2">FakeShop</span>
                    </Link>

                    <form className='order-3 md:order-2 m-auto'>
                        <input type='search' placeholder='Search here' className='outline-none sm:w-[32rem] md:w-96 w-auto	 p-2	 rounded-lg' />
                        <button className="
                        inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700  text-base mt-4 md:mt-0 rounded-lg ml-2
                         ">Search
                        
                    </button>
                    </form>
                    <Button btnColor={'gray-800'} hoverColor={'bg-gray-700'} margin={'text-base  md:mt-0 order-2 md:order-3'} 
                    name={`${page==='/details'?"Login":"Sign up"}`} />
                    
                    
                   
                   

                </div>
            </header>
        </>
    )
}

export default Navbar