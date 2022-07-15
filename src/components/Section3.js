import React from 'react'
import { useGlobalContext } from './Context'
import Spinner from './Spinner';
import { Link} from "react-router-dom";

const Section3 = () => {
  const { Data, isLoading, handleClick} = useGlobalContext();


  return (

    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {Data.slice(0, 8).map((element) => {

              return <>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center md:text-left" >
                  <Link to='/details'  className="block relative h-48 rounded overflow-hidden" onClick={() => 
                   { handleClick(element.id)}}>
                    <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={element.image} />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {element.category}
                    </h3>
                    <h2 className="text-gray-900 title-font  text-lg font-medium">
                      {element.title}...</h2>
                    <p className="mt-1">Price: {element.price}</p>
                  </div>
                </div>
               

              </>
            })}
            {isLoading && <Spinner />}





          </div>
        </div>
      </section>


    </>
  )
}

export default Section3