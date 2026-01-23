import { useState } from "react"
import BlogCard from "../Components/blog/BlogCard"


function Blogs() {
  const categories = ['Python','JavaScript','React','HTML','Git','JS Patterns']
  const [selectedCategory,setSelectedCategory] = useState('Python')
  const selectedCategoryStyle = 'bg-primary text-white'
  return (
    <div className="w-full min-h-screen overflow-x-hidden px-2 py-3">
      <h1 className="text-xl font-bold my-2">All Blogs</h1>
      {/* category section  */}
      <div className=" px-3 py-2 flex flex-wrap gap-4 justify-center mb-2">
          {categories.map((category,index)=>(
            <button key={index} className={`min-w-24 rounded-2xl flex justify-center border border-fifth cursor-pointer shadow-md transition-all duration-500 hover:bg-primary hover:text-white ${selectedCategory === category ? selectedCategoryStyle : ''}`}>
            <p onClick={(e)=>setSelectedCategory(e.target.innerHTML)} className="w-full">{category}</p>
          </button>
          ))}

      </div>
      {/* all blogs section  */}
      <div className="mt-3 px-2 py-3 grid grid-cols-1 gap-6 sm:grid-cols-4 md:px-5 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
      </div>
    </div>
  )
}

export default Blogs