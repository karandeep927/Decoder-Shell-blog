
function Home() {
  const nabTabs = ['Home','Blogs','About','Contact Us']
  return (
    <div>
      <header className="bg-green-400 w-full shadow-md grid grid-cols-4 items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Decoder <span className="text-red-800">Shell</span></h1>
          <h1 className="text-white font-semibold">D<span className="text-red-800">S</span></h1>
        </div>
      <nav className="">
        <ul className="list-none flex ">
        {nabTabs.map((item,index)=>(
          <a href={item}><li className="text-md mx-3 p-1 font-semibold hover:text-blue-800 active:text-blue-700 " key={index}>{item}</li></a>
        ))}
        </ul>
      </nav>
      <div>
        <input type="text" name="search" id="searchBar" className="border "/>
      </div>
      <div className="w-20">

      </div>
      </header>
    </div>
  )
}

export default Home