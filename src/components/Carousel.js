import React from 'react'
import Slider from 'react-slick'
import { useGlobalContext } from './Context';
import Section1 from './Section1';
import Spinner from './Spinner';

const Carousel = () => {
     
  const {Data, isLoading}  = useGlobalContext();
  

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
              }
            ]
          };
  return (
    <>
    <div className='container px-4 mx-auto'>
 <Slider {...settings}>
    {Data.map((element, index)=>{
        return <Section1 image={element.image} key={index} title={element.title.slice(0,50)} price={element.price} category={element.category} id={element.id}/>
    })}
   
 </Slider>
 {isLoading && <Spinner/>}

 </div>
    </>
  )
}

export default Carousel