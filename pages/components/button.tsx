interface GlobalButtonProps{
    field: string;
    action: string;
}

export default function GlobalButton({field, action} : GlobalButtonProps){
    return(
        <a href={action} target='_blank' className="flex justify-center items-center text-center bg-primary-main text-secondary-light font-secondary py-4 px-6 rounded">
            {field}
        </a>
    )
}