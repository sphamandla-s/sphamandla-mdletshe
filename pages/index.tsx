import Head from 'next/head'
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown, AiOutlineMail } from 'react-icons/ai'
import { BsSunFill, BsMoonStarsFill, BsGithub, BsFillPersonFill } from 'react-icons/bs'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { BiMenuAltRight } from 'react-icons/bi'
import Image from 'next/image';
import BannerImg from '../public/assets/images/astrocat.png';
import { useState } from 'react';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import ContactImg from '../public/assets/images/contact-img.svg'
import { Projects } from './components/projects'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [tabs, setTabs] = useState('skills');
  const [nav, setNav] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Siphamandla Mdletshe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900 dark:text-white'>
        <header className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between align-middle'>
            <h1 id="logo" className='text-xl'>
              SSM
            </h1>

            <div className="flex items-center">
              <ul className='hidden md:flex'>
                <li className=' px-4 capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#banner">Home</a></li>
                <li className=' px-4  capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#about">About</a></li>
                <li className=' px-4  capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#projects">Projects</a></li>
                <li className=' px-4  capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#contact">Contact</a></li>

              </ul>

              <div className="social-icons  flex px-4 lg:hidden">
                <a href='#' className='text-2xl cursor-pointer px-2'><AiFillLinkedin /></a>
                <a href='#' className='text-2xl cursor-pointer px-2'><AiFillGithub /></a>
              </div>


              <div className="themes px-4">
                {darkMode ? <span onClick={() => setDarkMode(!darkMode)} className='text-2xl cursor-pointer'><BsSunFill /></span> : <span onClick={() => setDarkMode(!darkMode)} className={'text-2xl cursor-pointer'}><BsMoonStarsFill /></span>}
              </div>

              <div className='text-2xl cursor-pointer px-4 md:hidden z-10' onClick={() => setNav(!nav)}>
                <BiMenuAltRight />
              </div>

              {nav && (
                <ul className=' flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-black md:hidden'>
                  <li className=' py-4 text-3xl capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#banner">Home</a></li>
                  <li className=' py-4 text-3xl capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#about">About</a></li>
                  <li className=' py-4 text-3xl capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#projects">Projects</a></li>
                  <li className=' py-4 text-3xl capitalize cursor-pointer font-medium hover:text-gray-400 transition-all duration-200'><a href="#contact">Contact</a></li>

                </ul>
              )}



            </div>

          </nav>

          <div className=' lg:px-36'>

            <section id='banner' className='py-10'>
              <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex-col">
                  <h1 className='text-4xl sm:text-7xl py-2 font-bold text-rose-600'>Siphamandla Mdletshe</h1>
                  <h3 className='text-2xl py-2 text-blue-500'>Full stack Software Developer</h3>
                  <p className='font-medium py-5 leading-6 text-gray-800 dark:text-gray-400 max-w-md'>
                    'bringing things to life with code is my superpower. Happiest when I'm learning, building
                    and contributing to meaningful projects. I love building high-quality products
                    and bringing them to life through design and code.'
                  </p>

                  <div className="resume py-4">
                    <a href='./Siphamandla Mdletshe Developer Resume.pdf' target='_blank' download={true} className='group bg-gradient-to-r from-rose-600 to-blue-600 py-2 px-6 text-white rounded-md mt-8 flex w-fit items-center gap-2'>RESUME <span className='group-hover:rotate-90'><AiOutlineArrowDown /></span></a>
                  </div>
                </div>


                <div className='relative mx-auto bg-gradient-to-b from-yellow-400 rounded-full w-80 h-80 mt-8'>
                  <Image src={BannerImg} alt={'my profile'} />
                </div>
              </div>

            </section>
          </div>
        </header>

        <div className=' lg:px-36'>
          <section className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
              <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-300 rounded-tr-md dark:bg-gray-700 ml-[-100px] hover:ml-[-10px] hover:rounded '>
                <a href="#" className='flex justify-between w-full items-center'>
                  <>
                    Linkedin <AiFillLinkedin size={30} />
                  </>
                </a>
              </li>
              <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-300 dark:bg-gray-700 ml-[-100px] hover:ml-[-10px] hover:rounded '>
                <a href="#" className='flex justify-between w-full items-center'>
                  <>
                    GitHub <BsGithub size={30} />
                  </>
                </a>
              </li>
              <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-300 dark:bg-gray-700 ml-[-100px] hover:ml-[-10px] hover:rounded '>
                <a href="mailto:mdletshespha38@gmail.com" className='flex justify-between w-full items-center'>
                  <>
                    Email <HiOutlineMail size={30} />
                  </>
                </a>
              </li>
              <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-300 dark:bg-gray-700 ml-[-100px] hover:ml-[-10px] rounded-br-md hover:rounded '>
                <a href="./Siphamandla Mdletshe Developer Resume.pdf" target='_blank' download={true} className='flex justify-between w-full items-center'>
                  <>
                    Resume <BsFillPersonFill size={30} />
                  </>
                </a>
              </li>
            </ul>
          </section>

          <section id="about" className='py-5'>
            <div className="about-header">
              <h1 className="text-3xl text-center">
                Readme.
              </h1>
              <p className='font-medium py-5 leading-6 text-gray-800 dark:text-gray-400'>
                I am a recent system developer graduate with a passion for software development,
                data science and blockchain. I have a strong foundation in programming concepts
                and am proficient in several programming languages including Java, flutter, and
                Python. I am also familiar with software development methodologies such as Agile
                and Scrum. I am eager to apply my skills and continue learning on the job as an
                entry level software developer. I am a fast learner and I have strong problem-solving
                skills, I also have good verbal and written communication skills. In addition,
                I have completed several projects during my studies that have helped me to
                improve my software development skills. I am an energetic, hardworking, and
                ambitious individual who has developed a mature and responsible approach to
                any task or situation that I am presented with. I excel at collaborating with
                others to achieve a specific goal on time and with excellence. I am always
                eager to learn and share my knowledge. Happiest when I'm learning, building
                and contributing to meaningful projects. I love building high-quality products
                and bringing them to life through design and code.
              </p>
            </div>
            <div className="about-formalities">
              <div className="tabs flex gap-10 pt-5 text-2xl transition-all cursor-pointer">
                <h3 onClick={() => setTabs('skills')} className={tabs === 'skills' ? "border-b-2 border-blue-400 transition-all" : ''}>Skills</h3>
                <h3 onClick={() => setTabs('education')} className={tabs === 'education' ? "border-b-2 border-blue-400 transition-all" : ''} >Education</h3>
              </div>
              <div id="content" className=' py-4'>
                {tabs === 'skills' ? <Skills /> : <Education />}
              </div>
            </div>
          </section>

          <Projects />

          <section id="contact" className='py-5'>
            <h1>Let Talk.</h1>
            <div>
              <form action="" method="get">
                <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent rounded-md focus:outline-none' />
                <input type="text" name='email' placeholder='Enter email' className='p-2 bg-transparent rounded-md focus:outline-none' />
                <textarea name="message"  rows={10}></textarea>

              </form>
            </div>

          </section>
        </div>
      </main>
    </div>
  )
}
