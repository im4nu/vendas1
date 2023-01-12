import User from '../assets/icons/user.svg'
import Divisor from '../assets/icons/divisor.svg'
import Shop from '../assets/icons/shopCar.svg'
import Pocket from '../assets/icons/pocket.svg'
import Settings from '../assets/icons/settings.svg'
import Search from '../assets/icons/search.svg'

import GlobalButton from './button'
import Image from 'next/image'

export default function SearchBar(){
    return(
        <div className="flex flex-col bg-white min-h-64 rounded-lg px-6 py-6 gap-4 BoxShadowToBottom w-full">
            <div className="flex flex-row justify-start w-1/5 gap-1">
                <Image src={User} alt="Ícone de usuário" />
                <Image src={Divisor} alt="divisor" />
                <Image src={Shop} alt="Ícone de usuário" />
                <Image src={Divisor} alt="divisor" />
                <Image src={Pocket} alt="Ícone de carteira" />
            </div>

            <div className="flex justify-center items-center text-center px-4">
                <h2 className='text-primary-main font-secondary text-2xl'>Consulte pela marca ou modelo que deseja buscar:</h2>
            </div>

            <div className="flex flex-row justify-between items-center text-center border-solid border-2 border-primary-main rounded py-2 pl-2">
                <Image src={Search} alt="Ícone de usuário" />
                <input 
                type="text"
                name='Model'
                placeholder='Ex: Corola'
                style={{
                    border: 'none',
                    width: '100%',
                    paddingLeft: 20,
                    color: '#1C5788BF',
                }}
                />
            </div>

            <div className="flex justify-center items-center">
                <GlobalButton action="https://app.vendaseucarro.com.br" field='Buscar Veículo' />
            </div>

            <a href='#' className="flex justify-center items-center text-center flex-row gap-4">
                <Image src={Settings} alt="Ícone de usuário" />
                <p className='text-primary-default text-sm'>Ou busque por mais detalhes</p>
            </a>
        </div>
    )
}