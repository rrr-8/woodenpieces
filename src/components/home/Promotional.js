import { promotionalInfo } from '../../assets/data/data'
import { useNavigate } from 'react-router-dom'

const Promotional = () => {
    const navigate = useNavigate()

    return (
        <div className='flex my-10 flex-col xl:flex-row'>
            {promotionalInfo.map((info) => (
                <div className='relative' key={info.id}>
                    <img src={info.image} alt="" className='w-full h-full lg:h-[300px] xl:h-full object-cover bg-repeat-y' />
                    <div className='absolute top-0 left-0 p-8 2xl:w-[60%]'>
                        <div className='bg-white rounded-sm text-gray-600 py-1 px-3 w-fit'>{info.title}</div>
                        <h2 className='text-xl md:text-3xl font-semibold my-4'>{info.title}</h2>
                        <p className='text-gray-500 text-sm hidden sm:block'>{info.description}</p>
                        <button className="btn-white mt-5 hidden sm:block" onClick={() => navigate('/shop')}>Shop Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Promotional