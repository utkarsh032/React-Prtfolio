import banner from "../assets/banner.png";


import { IoLocationOutline } from 'react-icons/io5'
import { GoDotFill } from 'react-icons/go'
import { FiGithub } from 'react-icons/fi'
import { FiFigma } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'


import { Link } from 'react-router-dom'


export default function Profile() {
  return (
    <div className="bg-gray-800 mx-4 py-10 shadow-lg" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">

        <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full " />
        </div>

        {/* left side */}
        <div className="md:w-1/2 w-full ">
          <span className="bg-gray-200  hover:text-gray-200 hover:bg-gray-500  px-3 py-2 rounded-t-lg rounded-br-lg cursor-pointer">Hello I'm</span>
          <p className="md:text-6xl text-4xl text-gray-500 font-bold mt-5">
            Utkarsh Raj
          </p>
          <span className='font-semibold text-2xl text-gray-400'>Web Developer</span>
          <p className="text-xl mt-8 text-gray-400">
            Hello! I’m Utkarsh Raj a web developer from UttarPradesh
            Bidhuna. and I enjoy creating amazing websites and web
            applications. I'm a web developer specialized in creating
            interactive experiences and functional interfaces using various
            web technologies.
          </p>
          <div className='mt-5 text-gray-400'>
            <Link className='flex items-center underline' to="https://maps.app.goo.gl/BLzxGR4AxihKE12v5"><IoLocationOutline className="animate-bounce " /> Bidhuna, India</Link>
            <p className='flex items-center '><GoDotFill className='text-lime-600 animate-pulse ' />Available for New Projects</p>
          </div>

          <div className="flex gap-5 text-2xl  mt-5 text-gray-300">
            <Link className='hover:scale-110' to={'https://github.com/utkarsh032'}><FiGithub /></Link>
            <Link className='hover:scale-110' to={'https://www.figma.com/file/rInJIco675GdvpVzsRAJn8/MeetHub?type=design&mode=design&t=V9lkdojnyIG0tfKG-0'}><FiFigma /></Link>
            <Link className='hover:scale-110' to={'https://www.linkedin.com/in/utkarsh-raj032/'}><SlSocialLinkedin /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};
