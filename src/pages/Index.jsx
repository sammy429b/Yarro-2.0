import { Link } from 'react-router-dom'
import {Typewriter} from 'react-simple-typewriter'

const NewIndex = () => {
  return (
    <>
      <div id="mainConatiner" className="flex flex-col-reverse md:flex-row items-start pt-16 justify-start bg-white dark:bg-gray-900 h-[100%]">
        <div id="leftContainer" className='flex flex-col justify-center pl-8 gap-y-3 w-full h-[16rem] lg:h-[40.6rem] lg:w-1/2 '>
          <h2 className='flex gap-x-2 w-[82%] lg:w-full text-[2rem] lg:text-5xl text-4xl font-semibold text-black dark:text-white'>
            <p className='text-blue-400'>Make connections </p>
            <Typewriter words={[" with Friends", " with People"]} loop={false} cursor
            cursorStyle='!'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}/>
          </h2>
        <p className='text-gray-900 text-xl sm:text-2xl lg:text-3xl w-[80%] lg:w-full pr-4 dark:text-white'>
          The Simple way to connect and look back on moments forever.
        </p>

        <Link to="/register"><button className='mt-2 w-[8rem] h-[3rem] rounded text-white bg-purple-600'>Get Started</button></Link>
        </div>

        <div id='rightConatiner' className='w-full lg:w-1/2 h-[30rem] lg:h-[40.6rem]'>
          <img src="/images/connect.png" alt=""  className=' sm:w-[90%]'/>
        </div>
      </div>
    </>
  )
}

export default NewIndex
