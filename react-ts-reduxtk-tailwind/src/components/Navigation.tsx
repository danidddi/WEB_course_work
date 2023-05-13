import { Link } from 'react-router-dom';



export function Navigation() {
    return (
        <div className="bg-black z-50 text-white h-[50px] flex 
        justify-between items-center sticky top-0
        shadow-xl">
            <div className="ml-[50px] flex gap-12">
                <Link className='hover:text-green-600 duration-150' to='/'>Главная</Link>
            </div>
            <div className="mr-[50px] flex gap-32">
                <Link to='/services' className='hover:text-green-600 duration-150' >История</Link>
                <Link to='/workers' className='hover:text-green-600 duration-150' >Мастера</Link>
                <Link to='/statistics' className='hover:text-green-600 duration-150' >Статистика</Link>
            </div>
        </div>
    )
}