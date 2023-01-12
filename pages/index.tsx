import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {motion} from 'framer-motion'

import GlobalButton from './components/button'
import SearchBar from './components/searchBar'
import CarCards from './components/carCards'
import ServiceCards from './components/serviceCards'
import InputGlobal from './components/inputText'
import GoogleMapsView from './components/googleMapsView'
import YoutubeVideo from './components/youtubeVideo'

import { FiMapPin, FiMail, FiArrowUp, FiMenu, FiX } from 'react-icons/fi'
import LogoWhite from './assets/icons/logoWhite.svg'
import Divisor from './assets/icons/aboutDivisor.svg' 
import FooterDivisor from './assets/icons/footerDivisor.svg'

export default function Home() {
  const [menuMobile, setMenuMobile] = useState(true);
	const [scrollActived, setScrollActived] = useState(false);

	useEffect(() => {
		if (menuMobile === true){
			document.getElementById('menu')?.classList.add('opened-menu');
		}else{
			document.getElementById('menu')?.classList.remove('opened-menu');
		}
	}, [menuMobile]);

	useEffect(() => {
		window.addEventListener('scroll' , ChangeMenu);
	}, []);

	function ChangeMenu(){
		if(window.scrollY === 0){
      document.getElementById('menuScroll')?.classList.remove('ScrollActive');
      document.getElementById('menu')?.classList.remove('ChangeColor');

      document.getElementById('LoginButton')?.classList.add('LoginButtonBlack');
      document.getElementById('LoginButton')?.classList.remove('LoginButtonWhite');
			setScrollActived(false)
		}else{
      document.getElementById('menuScroll')?.classList.add('ScrollActive');
      document.getElementById('menu')?.classList.add('ChangeColor');

      document.getElementById('LoginButton')?.classList.remove('LoginButtonBlack');
      document.getElementById('LoginButton')?.classList.add('LoginButtonWhite');
			setScrollActived(true)
		}
	}
	function TogleMenu(){
		setMenuMobile((current) => !current)
	}

  return (
    <>
      <Head>
        <title>Venda Seu Carro | Bem Vindo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className='max-w-screen bg-secondary-lighter'>
          <nav id='menuScroll' className='flex items-center justify-center fixed w-full z-20 py-2 lg:py-0 lg:h-20'>
            <div className="flex flex-col items-center justify-between max-w-7xl w-5/6 lg:flex-row xl:flex-row 2xl:flex-row">
              <div className="flex items-center flex-row justify-between w-full lg:w-5/6 xl:w-5/6 2xl:w-5/6">
                <a href='#home' className="flex items-center justify-center">
                  <Image src={LogoWhite} alt="Logomarca" />
                </a>

                <button className="flex items-center justify-center lg:hidden xl:hidden 2xl:hidden" onClick={TogleMenu}>
                  {menuMobile
                    ?
                    <FiMenu size={30} color='#E6E6E6'/>
                    :
                    <FiX size={30} color='#E6E6E6'/>
                  }
                </button>
              </div>
              
              <div className="flex w-screen justify-center lg:justify-end">
                <div id='menu' className="flex items-center w-screen gap-4 bg-white text-secondary-dark z-50 md:w-full md:rounded lg:flex lg:w-3/5 lg:bg-transparent">
                  <ul className='flex w-full flex-col gap-4 py-4 px-2 lg:flex-row'>
                    <li className='flex w-full items-center justify-center'>
                      <a className='flex w-4/4 py-1 lg:text-sm' href="#home" onClick={TogleMenu}>Início</a></li>
                    <li className='flex w-full items-center justify-center'>
                      <a className='flex w-4/4 py-1 lg:text-sm' href="#services" onClick={TogleMenu}>Serviços</a></li>
                    <li className='flex w-full items-center justify-center'>
                      <a className='flex w-4/4 py-1 lg:text-sm' href="#about" onClick={TogleMenu}>Sobre</a></li>
                    <li className='flex w-full items-center justify-center'>
                      <a className='flex w-4/4 py-1 lg:text-sm' href="#contacts" onClick={TogleMenu}>Contatos</a></li>
                    <li className='flex w-full items-center justify-center'>
                      <a className='flex w-4/4 py-1 lg:text-sm' href="#footer" onClick={TogleMenu}>Navegar</a></li>
                  </ul>

                  <a id='LoginButton' target="_blank" href="https://app.vendaseucarro.com.br/login" className='text-secondary-dark LoginButtonBlack BoxShadowToBottomLogin py-1 hidden xl:flex lg:text-sm' rel="noreferrer">Login</a>
                </div>
              </div>
            </div>
          </nav>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          >

            <section id='home' className='flex flex-col lg:flex-row w-screen vh100 gap-24 lg:gap-0'>
              <div className="flex flex-col bg-hero-car bg-center bg-no-repeat bg-cover gap-5 pb-10 pl-10 lg:w-1/2 xl:pl-28 xl:pt-10 2xl:pl-52">
                <div className="flex z-50 flex-col w-4/5 mt-24 gap-5 pt-10 sm:w-3/5 lg:w-4/5">
                  <h1 className='text-5xl leading-tight font-secondary font-semibold text-secondary-light xl:text-6xl'>SIM! NÓS <br /> CUIDAMOS DA VENDA <br />  PARA VOCÊ!</h1>
                  <p className='text-secondary-light font-normal'>Somos uma Plataforma Completa Para Você Vender, Comprar, Financiar ou se Tornar um Afiliado</p>
                </div>

                <div className="flex w-full justify-start z-50">
                  <GlobalButton action="https://app.vendaseucarro.com.br" field='Consultar Orçamento' />
                </div>

                <div id="large-header" className="large-header">
                  <canvas id="demo-canvas" className='canvasColor'></canvas>
                </div>
              </div>

              <div className="flex z-20 lg:hidden xl:hidden 2xl:hidden SearchBar px-6 md:px-16">
                <SearchBar/>
              </div>

              <div className="flex flex-row justify-end mt-0 lg:mt-12 lg:pl-0 lg:w-1/2">
                <CarCards />
              </div>
            </section>

            <div className="hidden lg:flex SearchBarDesktop px-44 lg:px-56 xl:px-72 2xl:px-96">
              <SearchBar/>
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          >
            <section id='services' className='flex flex-col h-full w-screen justify-center items-center gap-16 text-center'>
              <div className="flex flex-col items-center justify-center w-full mt-28">
                <p className='flex text-primary-main font-medium'>Serviços</p>
              </div>

              <div className="flex items-center justify-center mb-28">
                <ServiceCards />
              </div>
            </section>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          >
            <section id='about' className='flex flex-col h-full w-screen justify-around items-center gap-16 bg-about bg-right bg-cover bg-no-repeat md:px-24 lg:bg-center'>
              <div className="flex mt-28">
                <p className='flex text-secondary-light font-medium'>Quem somos</p>
              </div>

              <div className="flex flex-col gap-6 justify-center items-center lg:flex-row-reverse">
                <div className="flex flex-col text-secondary-light text-center px-4 gap-6 lg:w-2/6">
                  <h2 className='font-secondary font-semibold text-4xl lg:text-4xl'>Algumas coisas nunca mudam, outras surgem pra mudar a nossa vida</h2>
                  <p>Somos uma plataforma completa para você Vender, Comprar, Financiar ou se tornar um Afiliado e aprender todos os caminhos que levam a compra e venda de um veiculo.</p>
                </div>
            
                <div className="flex items-center lg:w-3/6">
                    <YoutubeVideo />
                </div>
              </div>

              <div className="flex flex-col justify-between text-center w-full items-center gap-8 mb-28 lg:flex-row lg:gap-0">
                <div className="flex flex-col gap-4 w-full">
                  <h3 className='text-5xl font-semibold text-secondary-light'>+3.500</h3>
                  <h4 className='text-secondary-light whitespace-nowrap'>Clientes atendidos</h4>
                </div>

                <Image className='rotate-0 lg:rotate-90 xl:rotate-90 2xl:rotate-90' src={Divisor} alt="Divisor de informações" />

                <div className="flex flex-col gap-4">
                  <h3 className='text-5xl font-semibold text-secondary-light'>54</h3>
                  <h4 className='text-secondary-light whitespace-nowrap'>Especialistas disponíveis</h4>
                </div>

                <Image className='rotate-0 lg:rotate-90 xl:rotate-90 2xl:rotate-90' src={Divisor} alt="Divisor de informações" />

                <div className="flex flex-col gap-4 w-full">
                  <h3 className='text-5xl font-semibold text-secondary-light'>19</h3>
                  <h4 className='text-secondary-light whitespace-pre'>Lojas pelo Brasil</h4>
                </div>

                <Image className='rotate-0 lg:rotate-90 xl:rotate-90 2xl:rotate-90' src={Divisor} alt="Divisor de informações" />

                <div className="flex flex-col gap-4 w-full ">
                  <h3 className='text-5xl font-semibold text-secondary-light'>+10</h3>
                  <h4 className='text-secondary-light whitespace-nowrap'>Anos no mercado</h4>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          >
            <section id='contacts' className='flex flex-col items-center justify-center w-screen py-20 md:px-24 lg:flex-row lg:px-0 lg:h-screen'>
              <div className="flex flex-col justify-center items-center text-center gap-16 lg:w-3/6">
                <p className='flex text-primary-main font-medium'>Contatos</p>

                <h2 className='font-semibold font-secondary text-4xl px-8 text-secondary-dark lg:px-16'>Entre em contato com a gente!</h2>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-2">
                    <FiMapPin color='#003057' size={22} />
                    <p>R. Amauri Souza, 346</p>
                  </div>

                  <div className="flex flex-row gap-2">
                    <FiMail color='#003057' size={22} />
                    <p>contato@vendaseucarro.com</p>
                  </div>
                </div>

                <div className="flex">
                  <GlobalButton action='#' field='Consultar Rota' />
                </div>
              </div>

              <div className="flex first-letter mb-28 lg:w-3/6 lg:mb-0">
                  <GoogleMapsView />
              </div>
            </section>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          >
            <footer id='footer' className='flex flex-col BgFooter h-full w-screen gap-16 text-secondary-light lg:pb-20'>
              <div className="flex flex-col justify-center items-center mt-20 lg:flex-row-reverse lg:gap-6">
                <Image src={LogoWhite} alt="Logomarca" />
                <Image className='flex lg:hidden' src={Divisor}  alt="Divisor" />
                <Image className='hidden lg:flex' src={FooterDivisor}  alt="Divisor" />
              </div>
              
              <div className="flex flex-col justify-between w-screen xl:px-20 lg:flex-row">
                <div className="flex pl-6 gap-16 flex-col w-full lg:flex-row">
                  <div className="flex flex-col gap-2">
                    <h2 className='font-secondary'>Compre e Venda</h2>

                    <div className="flex flex-col">
                      <ul className='flex flex-col gap-1'>
                        <li><a className='text-gray-400 text-sm font-light' href="">Encontre um carro</a></li>
                        <li><a className='text-gray-400 text-sm font-light' href="">Torne-se afiliado</a></li>
                        <li><a className='text-gray-400 text-sm font-light' href="">Venda seu carro</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className='font-secondary'>Explore Novos Horizontes</h2>
                    
                    <div className="flex flex-col">
                      <ul className='flex flex-col gap-1'>
                        <li><a className='text-gray-400 text-sm font-light' href="">Linha SUV</a></li>
                        <li><a className='text-gray-400 text-sm font-light' href="">Linha 4x4</a></li>
                        <li><a className='text-gray-400 text-sm font-light' href="">Linha Premium</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className='font-secondary'>Quem Somos</h2>
                    
                    <div className="flex flex-col">
                      <ul className='flex flex-col gap-1'>
                        <li><a className='text-gray-400 text-sm font-light' href="">Vender</a></li>
                        <li><a className='text-gray-400 text-sm font-light' href="">Comprar</a></li>
                        <li><a className='text-gray-400 text-sm font-light' href="">Filiar-se</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 flex-col w-1/2 py-10 xl:w-1/2 lg:justify-start lg:py-0">
                  <div className="flex w-screen justify-center items-center lg:items-start lg:w-full lg:justify-start">
                    <h3>Permaneça Conectado</h3>
                  </div>

                  <div className="flex w-screen justify-center items-center lg:items-end lg:w-full lg:justify-end">
                    <InputGlobal />
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
          
          { scrollActived 
            &&(
              <a href='#' className="fixed ScrollActive bottom-10 right-5 px-3 py-3 rounded-full bg-primary-main">
                <FiArrowUp color='#E6E6E6' size={18}/>
              </a>
            )}
      </main>

      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
    </>
  )
}