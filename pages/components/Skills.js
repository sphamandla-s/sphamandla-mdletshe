import Image from 'next/image';
import Javascript from 'public/assets/images/icons8-javascript-48.png';
import Python from 'public/assets/images/icons8-python-48.png';
import Java from 'public/assets/images/icons8-java-48.png';
import Git from 'public/assets/images/icons8-git-48.png';
import Flutter from 'public/assets/images/icons8-flutter-48.png';
import Docker from 'public/assets/images/icons8-docker-48.png';
import MangoDb from 'public/assets/images/icons8-mongodb-48.png';
import Sql from 'public/assets/images/icons8-sql-48.png';
import NodeJs from 'public/assets/images/icons8-node-js-48.png';
import Express from 'public/assets/images/icons8-express-js-64.png';
import ReactJs from 'public/assets/images/icons8-react-16.png';
import Devops from 'public/assets/images/icons8-devops-60.png';
import NextJs from 'public/assets/images/icons8-next.js-48.png';
import Dart from 'public/assets/images/icons8-dart-48.png';
import Html from 'public/assets/images/icons8-html-5-64.png';
import Css from 'public/assets/images/icons8-css3-48.png';
import Linux from 'public/assets/images/icons8-linux-48.png';





export default function Skills(){
  return (
    <div id='skills'>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8'>
        <div className=' shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Html} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>HTML</p>
        </div>
        <div className=' shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Css} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>CSS</p>
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
        <div className=' shadow-md shadow-green-600 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={MangoDb} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>MangoDb</p>
        </div>
        <div className=' shadow-md shadow-blue-200 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Sql} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>SQL</p>
        </div>
        <div className=' shadow-md shadow-green-600 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={NodeJs} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Node Js</p>
        </div>
        <div className=' shadow-md shadow-purple-600 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Express} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Express</p>
        </div>
        <div className=' shadow-md shadow-blue-600 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={ReactJs} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>React Js</p>
        </div>
        <div className=' shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Devops} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Devops</p>
        </div>
        <div className=' shadow-md bg-white text-black shadow-black dark:shadow-red-400  hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={NextJs} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Next Js</p>
        </div>
        <div className=' shadow-md shadow-blue-800  hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Dart} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Dart</p>
        </div>
        <div className=' shadow-md shadow-yellow-500  hover:scale-105 duration-500 py-2 rounded-lg'>
        <Image src={Linux} alt='' className='w-20 mx-auto' />
        <p className='mt-4'>Linux</p>
        </div>
      </div>

    </div>
  )
}




