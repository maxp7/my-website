import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import tv from '../assets/tv.png';
import morpheus from '../assets/mor.png'
import neo from '../assets/neo.png';

function Home() {
    const [animationClass1, setAnimationClass1] = useState('');
    const [animationClass2, setAnimationClass2] = useState('');
    const [animationClass3, setAnimationClass3] = useState('');
    const navigate = useNavigate();

    const morpheusClick = () => {
        console.log('morph');
    };

    const tvClick = () => {
        
        setAnimationClass3('exit-animation3'); // Start the exit animation
        console.log('tv');
        setTimeout(() => {
            navigate('/works');// Navigate after the animation
        }, 500); // Adjust this time to match the duration of the animations
       
    };

    const neoClick = () => {
        setAnimationClass1('exit-animation1'); // Start the exit animation
        setAnimationClass2('exit-animation2'); // Start the exit animation
        setTimeout(() => {
            navigate('/about'); // Navigate after the animation
        }, 2100); // Adjust this time to match the duration of the animations
    };
    

    return (
        <div className={`container ${animationClass1}${animationClass3}`}>
            <h1 className={`header ${animationClass2}`}>WELCOME TO THE REAL WORLD</h1>
            <div className={`button-container ${animationClass1}`} >
                <div className='morpheus' >
                    <img src={morpheus} alt=""  onClick={morpheusClick} />
                </div>
                <div className='tv'>
                    <img src={tv} alt="" onClick={tvClick} />
                </div>
                <div className='neo'>
                    <img src={neo} alt=""  onClick={neoClick} />
                </div>
            </div>
        </div>
    );
}

export default Home;
