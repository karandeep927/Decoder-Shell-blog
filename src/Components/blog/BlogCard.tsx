
type BlogCardProps = {
  imgUrl:string | "imgUrl",
  title:string | "title",
  tags:string[]
}


function BlogCard({imgUrl,title,tags}:BlogCardProps) {
  return (
    <div className="min-w-40 h-60 rounded-xl shadow overflow-hidden cursor-pointer transition-transform duration-500 hover:shadow-lg hover:scale-102">
      <div className="h-36 w-full">
        <img
        src={imgUrl}
        alt='image'
        className="w-full h-full object-cover"
      />
      </div>
      <div className="px-2 py-0.5 sm:py-2">
        {tags.map((tag,index)=>(
          <span key={index} className="text-xs border rounded-lg overflow-hidden px-2 py-0.5 ">{tag}</span>
        ))}
        <p className="font-semibold my-1">{title}</p>
      </div>
    
    </div>
  )
}

export default BlogCard