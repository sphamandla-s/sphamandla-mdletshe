import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import {DemoImg} from 'public/assets/images/download.png'

export const Projects = ()=> {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <section id="projects" className='w-full h-screen'>
        <h1 className="text-3xl text-center">
          Some Things I’ve Built.
        </h1>

              <Carousel responsive={responsive} infinite={true}>
                  <div>
                  <Image src={DemoImg} alt={''}/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/2.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/3.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/5.png" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
        
      </section>
    )
}