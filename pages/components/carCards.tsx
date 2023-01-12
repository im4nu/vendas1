import React, { useState } from 'react'

import SUV from '../assets/cars/SUV.png'
import Car4x4 from '../assets/cars/4x4.png'

import ArrowLeft from '../assets/icons/arrowLeft.svg'
import ArrowRight from '../assets/icons/arrowRight.svg'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";

export default function CarCards(){
    const NewThing = [
        {image :  <Image src={SUV} alt="Carro" />, model : 'SUV', text: 'This plant is a smart choice for the beginning houseplant enthusiast.'},
        {image : <Image src={Car4x4} alt="Carro" />, model: '4x4', text: 'This plant is a smart choice for the beginning houseplant enthusiast.'},
    ]
    const [stepCar, setStepCar] = React.useState({
        first : 0, second : 1
    });

    function HandleNextCar(){
        if(stepCar.first === NewThing.length - 1){ return }
        setStepCar({first : ++stepCar.first, second : ++stepCar.second});
    }
    function HandlePreviousCar(){
        if(stepCar.first != 0){
            setStepCar({first : stepCar.first - 1, second : stepCar.second - 1});
        }
    }
    return(
        <div className='flex flex-col w-4/6 md:pt-12 sm:w-3/6 lg:w-4/6 xl:w-3/6'>
            <div className="flex flex-col gap-7 bg-white CarCardBorder BoxShadowToBottom">
                <div className="flex flex-col px-4 py-4">
                        {NewThing.slice(stepCar.first,stepCar.second).map((car, index) => (
                            <div key={index} className='flex flex-col mt-20'>
                                <div className="flex MarginLeftNegative MarginTopNegative">
                                    <AnimatePresence exitBeforeEnter>
                                        <motion.div
                                            key={stepCar.first}
                                            initial={{ x: 10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -10, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {car.image}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="flex flex-col items-start text-left">
                                    <h2 className='text-primary-main font-secondary font-bold text-2xl mb-4'>
                                        {car.model}
                                    </h2>
                                    <p className='text-primary-main mb-2 w-10/12'>{car.text}</p>
                                </div>
                            </div>
                        ))
                    }

                    <a href='#' className="flex flex-row w-full items-center gap-4 justify-end">
                        <p className='text-primary-main text-sm'>Consultar</p>
                        <Image src={ArrowRight} alt="Botão seta para direita" />
                    </a>
                </div>
            </div>
        
            <div className="flex flex-row items-center justify-between w-1/4 mt-8 lg:w-full lg:justify-end lg:gap-8 lg:pr-6 xl:pr-10">
                <button onClick={HandlePreviousCar}>
                    <Image src={ArrowLeft} alt="Botão de seta para esquerada" />
                </button>

                <button onClick={HandleNextCar}>
                    <Image className='rotate-180' src={ArrowLeft} alt="Botão de seta para direita" />
                </button>
            </div>

        </div>
    )
}