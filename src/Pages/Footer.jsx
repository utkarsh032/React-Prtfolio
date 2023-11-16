import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='md:px-10 bg-gray-700 shadow-lg rounded-b-xl mx-4'>

      {/* Bottom Line Footer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-400">
        <p>Copyright 2023, <a className='text-gray-100 font-semibold animate-pulse hover:text-gray-200' href={'/'}>Utkarsh</a> All rights reserved</p>
        <div className='flex gap-6 justify-between mx-2'>
          <a href={'https://www.youtube.com/channel/YourYouTubeChannel'} target='_blank' rel="noopener noreferrer" className='hover:text-gray-100 hover:font-semibold'>Youtube</a>
          <a href={'https://twitter.com/YourTwitterAccount'} target='_blank' rel="noopener noreferrer" className='hover:text-gray-100 hover:font-semibold'>Twitter</a>
          <a href={'https://discord.com/YourDiscordServer'} target='_blank' rel="noopener noreferrer" className='hover:text-gray-100 hover:font-semibold'>Discord</a>
          <a href={'https://www.linkedin.com/in/YourLinkedInProfile'} target='_blank' rel="noopener noreferrer" className='hover:text-gray-100 hover:font-semibold'>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
