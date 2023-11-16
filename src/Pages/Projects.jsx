import React from 'react';
import Fitclub from "../assets/fitclub.gif";
import Destination from "../assets/destination.gif";
import Omnifood from "../assets/omnifood.gif";
import Ubereat from "../assets/ubereat.gif";
import BharatEstate from "../assets/bharataestate.gif";
import Book from "../assets/book.gif";

import { Link } from 'react-router-dom';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'

const project = [
  {
    "id": "1",
    "name": "The FitClub",
    "desc": "A fitness responsive website for booking your health program",
    "src": Fitclub,
    "github": "",
    "demo": "https://the-fit-club.netlify.app/"
  },
  {
    "id": "2",
    "name": "Destination",
    "desc": "A fitness responsive website for booking your health program",
    "src": Destination,
    "github": "",
    "demo": "https://the-fit-club.netlify.app/"
  },
  {
    "id": "3",
    "name": "Omnifood",
    "desc": "A fitness responsive website for booking your health program",
    "src": Omnifood,
    "github": "",
    "demo": "https://omnifood-utkarshraj.netlify.app/"
  },
  {
    "id": "4",
    "name": "Uber-Eats",
    "desc": "A fitness responsive website for booking your health program",
    "src": Ubereat,
    "github": "",
    "demo": "https://the-fit-club.netlify.app/"
  },
  {
    "id": "5",
    "name": "Bharat-Estate",
    "desc": "A fitness responsive website for booking your health program",
    "src": BharatEstate,
    "github": "https://github.com/utkarsh032/Bharat-Estate",
    "demo": "https://the-fit-club.netlify.app/"
  },
  {
    "id": "6",
    "name": "Book",
    "desc": "A fitness responsive website for booking your health program",
    "src": Book,
    "github": "https://github.com/utkarsh032/Bharat-Estate",
    "demo": "https://the-fit-club.netlify.app/"
  },
  {
    "id": "7",
    "name": "Bharat-Estate",
    "desc": "A fitness responsive website for booking your health program",
    "src": BharatEstate,
    "github": "https://github.com/utkarsh032/Bharat-Estate",
    "demo": "https://the-fit-club.netlify.app/"
  },

];

export default function Projects() {
  return (
    <div className='mx-4 py-16 shadow-lg bg-gray-800'>

      <div className='lg:px-12 px-4'>
        <span className="bg-gray-200  hover:text-gray-200 hover:bg-gray-500 px-3 py-2 rounded-t-lg rounded-br-lg cursor-pointer ">My Projects</span>
        <p className="md:text-5xl text-4xl text-gray-500 font-bold mt-5">
          Explore My Popular Projects
        </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 py-16'>
        
          {project.map(project => (
            <div key={project.id} className='bg-gray-800 rounded-xl  shadow-2xl backdrop-blur-md pb-8'>
              <img className='p-4 bg-black border-2 rounded-xl mb-8 shadow-xl' src={project.src} alt={project.name} />
              <p className='text-4xl px-4  font-semibold my-2 uppercase text-gray-500'>{project.name}</p>
              <p className='md:text-xl text-md mb-4 px-4 text-gray-400'>{project.desc}</p>
              <div className='flex gap-3 px-4 '>
                <Link className='flex items-center gap-2 btnOutLine hover:scale-105 duration-100' target='blank' to={project.demo}>Demo<BsFillArrowUpRightCircleFill /></Link>
                <Link className='flex items-center gap-2 btnOutLine hover:scale-105 duration-100' target='blank' to={project.github}>Github<BsFillArrowUpRightCircleFill /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
