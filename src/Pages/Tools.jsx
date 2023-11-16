const tools =
  [
    { "id": 2, "name": "VScode", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" },
    { "id": 1, "name": "Figma", "src": "https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/figma.png" },
    { "id": 3, "name": "Netlify", "src": "https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" },
    { "id": 4, "name": "Postman", "src": "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" },
    { "id": 5, "name": "Github", "src": "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
  ]



export default function Tools() {
  return (
    <div className="lg:mx-4 mx-4 py-24 px-10 text-black bg-gray-800 shadow-lg" id="tools">

      <div className="mb-20">
        <span className="text-xl bg-gray-200 px-3 py-2 rounded-t-lg rounded-bl-lg cursor-pointer hover:text-gray-200 hover:bg-gray-500">
          Tools
        </span>
        <h2 className="md:text-5xl text-gray-500 text-4xl mt-5 font-bold">That I'm Using</h2>
      </div>

      {/* card */}

      <div className=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
          tools.map(tool => <div key={tool.id} className="bg-gray-500 border-2 bg-opacity-60 backdrop-blur-lg p-10 rounded-lg cursor-pointer shadow-xl">
            <img src={tool.src} alt="tool" className="-translate-y-16  p-2 transition-all duration-300  w-20 h-20 bg-sky-100 rounded-lg shadow-md mb-7 mx-auto" />
            <h3 className="text-3xl font-bold mb-4 text-center -translate-y-14">{tool.name}</h3>

          </div>)
        }
      </div>

    </div>
  )
}
