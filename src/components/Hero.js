import styles from '@/app/styles/components/Hero.module.scss';
import { FaArrowRight } from 'react-icons/fa';
const Hero = () => {
    return (
        <div className="text-white py-20 mt-20 sm:mt-32 flex flex-col justify-between min-h-screen">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My <span className="highlight">Portfolio</span></h1>
                <p className="text-xl mb-8">Hi, I am <span className="highlight">Bishow</span>, a <span className='bg-gray p-4 rounded-full'>?</span> </p>
            </div>
            <div className="container mx-auto text-center mb-[20rem]">
                <a href="#about" className={`${styles.heroBtn} text-white font-bold py-2 px-4 rounded bg-primary hover:bg-primary-dark transition duration-300 ease-in-out`}>
                    More About Me
                    <span className={`${styles.heroBtnIcon} ml-2`}>
                <FaArrowRight />
            </span>
                </a>
            </div>
        </div>
    );
};

export default Hero;
