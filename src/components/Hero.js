import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex px-5 pb-40 pt-20 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white ">FakeShop</h1>
                            <p className="leading-relaxed mb-8 text-2xl">FakeShop is a e-commerce website for shopping online with a focus on quality, service and prices.</p>
                            <div className="flex justify-center">
                                <Button btnColor={'indigo-500'} hoverColor={'indigo-600'} name={'Explore'} />
                                <Button btnColor={'gray-800'} hoverColor={'bg-gray-700'} margin={'ml-4'} name={'Login'} />
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Hero