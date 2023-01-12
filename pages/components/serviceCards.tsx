import Car4x4 from '../assets/cars/4x4.png'
import CreditCard from '../assets/images/creditCard.png'
import Pilar from '../assets/images/pilar.png'
import Image from 'next/image'
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

export default function ServiceCards(){
    return(
        <div className="flex flex-col justify-around items-center gap-8 px-6 sm:px-20">
                <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-row justify-start w-full px-4 bg-secondary-dark rounded-2xl py-6 -mr-20 sm:-mr-28 lg:pr-24 lg:py-20">
                                <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Compre</h3>
                                <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Compre</h3>
                                <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Compre</h3>
                            </div>

                             <div className="absolute w-7/12 mr-20 mt-5">
                                <Image src={CreditCard} alt="imagem figurativa do card de serviço" />
                            </div>
                            
                            <div className="flex flex-col justify-center">
                                <div className="flex BgServicesCardBlue items-center text-left justify-end w-fit h-3/4 py-6 rounded-2xl -ml-9">
                                    <p className='text-secondary-light text-xs w-6/12 py-4 pr-4 sm:text-base'>Negocie diretamente com o vendedor e encontre o menor preço</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className="card" variants={cardVariants}>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row justify-start w-full px-4 bg-secondary-dark rounded-2xl py-6 -mr-20 sm:-mr-32 lg:pr-24 lg:py-20">
                            <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Venda</h3>
                            <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Venda</h3>
                            <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Venda</h3>
                        </div>

                        <div className="absolute w-7/12 mr-20 mt-5">
                            <Image src={Car4x4} alt="imagem figurativa do card de serviço" />
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex BgServicesCardBlue items-center text-left justify-end w-fit h-3/4 py-6 rounded-2xl pr-2">
                                <p className='text-secondary-light text-xs w-6/12 py-4 pr-4 sm:text-base'>Todos nossos classificados com inspeção virtual ou presencial</p>                        </div>
                        </div>
                    </div>
                    </motion.div>
                </motion.div>

                <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className="card" variants={cardVariants}>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row justify-start w-full px-4 bg-secondary-dark rounded-2xl py-6 -mr-20 sm:-mr-24 lg:pr-24 lg:py-20">
                            <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Fidelize</h3>
                            <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Fidelize</h3>
                            <h3 className='text-secondary-main font-secondary text-3xl font-semibold TextSleep lg:text-4xl'>Fidelize</h3>
                        </div>

                        <div className="absolute w-7/12 mr-20 mt-5">
                            <Image src={Pilar} alt="imagem figurativa do card de serviço" />
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex BgServicesCardBlue items-center text-left justify-end w-fit h-3/4 py-6 rounded-2xl px-4">
                                <p className='text-secondary-light text-xs w-8/12 py-4 pl-4 sm:text-base'>Receba excelentes comissões por cada venda realizada</p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </motion.div>
        </div>
    )
}