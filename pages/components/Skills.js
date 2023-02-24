import Image from 'next/image';
import HtmlCss from 'public/assets/images/icons8-html-64.png';
import Javascript from 'public/assets/images/icons8-javascript-48.png';
import Python from 'public/assets/images/icons8-python-48.png'
import Java from 'public/assets/images/icons8-java-48.png'
import Git from 'public/assets/images/icons8-git-48.png'
import Flutter from 'public/assets/images/icons8-flutter-48.png'
import Docker from 'public/assets/images/icons8-docker-48.png'
export const Skills = () => {
  return (
    <div id='skills'>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8'>
        <div className=' shadow-md shadow-red-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={HtmlCss} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>HTML & CSS</p>
        </div>
        <div className=' shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Javascript} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Javascript</p>
        </div>
        <div className=' shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Python} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Python</p>
        </div>
        <div className=' shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Java} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Java (OOP)</p>
        </div>
        <div className=' shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Git} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Git</p>
        </div>
        <div className=' shadow-md shadow-blue-300 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Flutter} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Flutter</p>
        </div>
        <div className=' shadow-md shadow-blue-600 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Docker} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Docker</p>
        </div>
        <div className=' shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={HtmlCss} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>HTML & CSS</p>
        </div>
        <div className=' shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={HtmlCss} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>HTML & CSS</p>
        </div>
      </div>

    </div>
  )
}