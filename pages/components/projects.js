import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { HiArrowCircleRight, HiLink } from 'react-icons/hi'
import DemoImg from 'public/assets/images/contact-img.svg'
import SpaceWars from 'public/assets/images/ai-takeda--461rTEnnso-unsplash.jpg'
import Password from 'public/assets/images/regularguy-eth-j7mGBT2hyM8-unsplash.jpg'
import Notify from 'public/assets/images/sigmund-xLZ9EP4hJtQ-unsplash.jpg'
import Portfolio from 'public/assets/images/Screenshot from 2023-03-01 18-13-24.png'
import Advice from 'public/assets/images/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg'
import Flash from 'public/assets/images/luis-villasmil-mlVbMbxfWI4-unsplash.jpg'
import Task from 'public/assets/images/contact-img.svg'



export const Projects = () => {
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
        <section id="projects" className='w-full h-fit py-20'>
            <h1 className="md:text-7xl text-center text-4xl">
                Some Things I’ve Built.
            </h1>

            <Carousel responsive={responsive} infinite={true} className="pt-20">
                <div className=" relative overflow-hidden rounded-md group mx-2 h-96">
                    <Image src={Flash} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">Slogger</h3>
                        <p>
                            Pro Manager is a web-based project management tool that helps teams manage
                            their projects using the Agile methodology.
                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/pro_mananger" target="_blank" ><HiLink /></a>
                    </div>
                </div>
                <div className=" relative overflow-hidden rounded-md group mx-2 h-96">
                    <Image src={Notify} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">NotifyMeSA</h3>
                        <p>
                            The app provides users with the latest weather forecast,
                            current news, past news articles, load shedding schedules,
                            and note-taking functionality.
                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/NotifyMeSA" target="_blank" ><HiLink /></a>
                    </div>
                </div>
                <div className=" relative overflow-hidden rounded-md group mx-2 h-96">
                    <Image src={Password} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">Password Breaker</h3>
                        <p>
                            A recursive algorithm to crack passwords by trying every possible
                            combination of characters until the correct password is found.
                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/password-cracker-with-python-recursion" target="_blank" ><HiLink /></a>
                    </div>
                </div>
                <div className=" relative overflow-hidden rounded-md group mx-2 h-96">
                    <Image src={SpaceWars} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">Space Wars</h3>
                        <p>
                            A classic arcade-style space shooter game,
                            where players control a spaceship to fight off waves of enemy spaceships
                            and bosses. The game is coded using Python and Pygame.
                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/Space-wars-with-pygame" target="_blank" ><HiLink /></a>
                    </div>
                </div>
                <div className=" relative overflow-hidden rounded-md group mx-2 h-96">
                    <Image src={Portfolio} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">Portfolio Website</h3>
                        <p>
                            My personal website that showcases my skills,
                            projects, and experience to potential employers or clients.
                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/sphamandla-mdletshe" target="_blank" ><HiLink /></a>
                    </div>
                </div>
                <div className=" relative overflow-hidden rounded-lg group m-2 h-96">
                    <Image src={Advice} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">Advice Generator</h3>
                        <p>
                            The application is designed to provide users with quick and easy access to
                            useful advice that can help them make better decisions or improve their
                            lives in some way.

                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/advice-generator-app" target="_blank" ><HiLink /></a>
                    </div>
                </div>
                <div className=" relative overflow-hidden rounded-lg group mx-2 h-96">
                    <Image src={Task} alt={''} className="group-hover:scale-110 duration-500 h-full" />
                    <div className=" flex  flex-col justify-center items-center text-center absolute bottom-0 left-0 w-full h-full mb-[-500px] py-0 px-10 bg-gradient-to-t from-red-600 to-slate-700 text-white group-hover:mb-[1px] duration-700">
                        <h3 className="mb-5 text-2xl font-bold">Task Manager</h3>
                        <p>
                            The Task Manager Application is a web-based tool for managing tasks and to-do lists.
                            The application is built using HTML, CSS, Bootstrap, EJS, Node.js, Express, and MongoDB.

                        </p>
                        <a className="mt-5 bg-white h-16 w-16 rounded-full text-rose-500 leading-5 text-xl overflow-hidden flex flex-col items-center justify-center" href="https://github.com/sphamandla-s/task-manager" target="_blank" ><HiLink /></a>
                    </div>
                </div>
            </Carousel>

            <div className="text-center float-right pb-5">
                <a href="https://github.com/sphamandla-s" className='group bg-gradient-to-r from-rose-600 to-blue-600 py-2 px-6 text-white rounded-md mt-8 flex w-fit items-center gap-2 hover:scale-110 duration-300'>View More <span className='group-hover:rotate-90 duration-300'><HiArrowCircleRight /></span></a>
            </div>

        </section>
    )
}