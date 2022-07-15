import React from 'react'
import { Link} from 'react-router-dom'
import { useGlobalContext } from './Context'

const Section1 = ({image,title,price,category,id}) => {
    const {handleClick} = useGlobalContext();
    return (
        <>
            <div className="md:w-4/5 p-4 md:mx-8 mx-4 bg-white rounded-3xl ">
                <Link to='/details' className="block relative h-48 rounded overflow-hidden" onClick={() => 
                   { handleClick(id)}}>
                    <img alt="ecommerce" className="object-contain object-center  h-full block mx-auto" src={image} />
                </Link>
                <div className="mt-4 text-center sm:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{title}...</h2>
                    <p className="mt-1">Price: {price}</p>
                </div>
            </div>
        </>
    )
}

export default Section1