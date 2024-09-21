import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
///////////////images
import img1 from '../assets/images/testimonials/testimonials-1.jpg';
import img2 from '../assets/images/testimonials/testimonials-2.jpg';
import img3 from '../assets/images/testimonials/testimonials-3.jpg';
import img4 from '../assets/images/testimonials/testimonials-4.jpg';
import img5 from '../assets/images/testimonials/testimonials-5.jpg';
import Card3 from './Card3';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    const data =[
        {
        img:img1,
        name:"Saul Goodman",
        work:"Ceo & Founder",
        },
        {
            img:img2,
            name:"Sara Wilsson",
            work:"Designer",
            },
            {
                img:img3,
                name:"Jana Karlis",
                work:"Store Owner",
                about:"",
                },
                {
                    img:img4,
                    name:"Matt Brandon",
                    work:"Freelancer",
                    },
                    {
                        img:img5,
                        name:"John ",
                        work:"Enterpreneur",
                        },
    ]
    return(<>
    
    <Splide aria-label="My Favorite Images" options={ {
    rewind: true,
    arrows:false,
    gap   : '1rem',
    autoplay:true ,
    interval:"3000",
    type:"loop"
  } }>
        {data.map((e)=>{
            return(
                <>
                <SplideSlide >
                    <Card3 img={e.img} name={e.name} work={e.work}/>
                </SplideSlide>
                </>
            )
        })}
    </Splide>
</>)
}