import banner from "../assets/banner.png";
import myProfile from "../assets/profile.jpg";

import { IoIosArrowForward } from 'react-icons/io'


const data =
  [
    { "id": 1, "name": "HTML", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" },
    { "id": 2, "name": "CSS", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" },
    { "id": 3, "name": "JS", "src": "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png" },
    { "id": 4, "name": "Tailwind", "src": "https://pichforest.com/uploads/icon/Tailwind-1874517301.png" },
    { "id": 5, "name": "React", "src": "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" },
    { "id": 6, "name": "Node", "src": "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" },
    { "id": 7, "name": "MongoDB", "src": "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" },
    { "id": 8, "name": "Express", "src": "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" },
    { "id": 9, "name": "BootStarp", "src": "https://cdn.iconscout.com/icon/free/png-256/free-bootstrap-7-1175254.png?f=webp" },
  ]


export default function Profile() {
  return (
    <div className="bg-gray-800 mx-4 py-10 shadow-lg" id="home">
      <div className="lg:px-12 px-4 flex flex-col lg:flex-row items-center justify-between py-24 gap-5">

        {/* left side */}
        <div className="md:w-1/3 w-full ">
          <span className="bg-gray-200  hover:text-gray-200 hover:bg-gray-500 px-3 py-2 rounded-t-lg rounded-br-lg cursor-pointer ">My Skills</span>
          <p className="md:text-5xl text-4xl text-gray-500 font-bold mt-5">
            Let's Explore Populor
          </p>
          <span className='font-semibold text-4xl text-gray-400 '>Skill & Experience</span>
          <p className="text-xl mt-8 text-gray-400">
            Hello! I’m Utkarsh Raj a web developer from UttarPradesh
            Bidhuna. and I enjoy creating amazing websites and web
            applications. I'm a web developer specialized in creating
            interactive
          </p>
          <button className='btnOutLine flex items-center  mt-5'>Learn More<IoIosArrowForward /></button>
        </div>

        {/* rigth side */}

        <div className="md:w-2/3 w-full">
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {
              data.map(data => <div key={data.id} className="bg-gray-500 border-2 bg-opacity-60 backdrop-blur-lg p-10 rounded-lg cursor-pointer  shadow-xl">
                <img src={data.src} alt="data" className="p-2 transition-all duration-300  w-20 h-20 bg-sky-100 rounded-lg shadow-md mb-7 mx-auto" />
                <h3 className="md:text-xl text-3xl font-bold mb-4 text-center ">{data.name}</h3>
              </div>)
            }
          </div>
        </div>

      </div>
    </div>
  );
};
