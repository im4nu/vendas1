import React from 'react'
import GlobalButton from './button';

export default function InputGlobal(){
    const [mail, setMail] = React.useState('');
    return(
        <div className="flex justify-center items-center gap-4 text-center w-3/4 flex-col lg:flex-row lg:gap-0 lg:w-full">
            <input 
                type="text" 
                value={mail}
                placeholder='Digite o seu email'
                className='w-full borderInput justify-center text-center bg-transparent py-2'
                ></input>
                
            <button className="flex justify-center items-center text-center bg-primary-main text-secondary-light font-secondary h-full w-2/4 rounded py-3 lg:py-0">
                Enviar
            </button>
        </div>
    )
}