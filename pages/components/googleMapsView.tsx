'use client'

export default function GoogleMapsView(){
    return(
        <>
            <iframe
                className="hidden lg:flex"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.662197424554!2d-43.000796799999996!3d-22.8149776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9990f338136c93%3A0x6dab50a38ed14879!2sR.%20Amauri%20de%20Souza%20-%20Vila%20Tr%C3%AAs%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1672667147916!5m2!1spt-BR!2sbr" 
                style={{borderRadius: 8, width: '50vw', height: '40vh', paddingInlineEnd: '5vw'}} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <iframe
                className="flex lg:hidden pt-10"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.662197424554!2d-43.000796799999996!3d-22.8149776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9990f338136c93%3A0x6dab50a38ed14879!2sR.%20Amauri%20de%20Souza%20-%20Vila%20Tr%C3%AAs%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1672667147916!5m2!1spt-BR!2sbr" 
                style={{borderRadius: 8, width: '65vw', height: '45vh'}} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    )
}