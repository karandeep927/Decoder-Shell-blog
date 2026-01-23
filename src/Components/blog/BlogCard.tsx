
type BlogCardProps = {
  imgUrl:string,
  title:string ,
  tags:string[]
}


function BlogCard({imgUrl='' ,title ='title',tags=[]}:BlogCardProps) {
  return (
    <div className="min-w-40 h-60 rounded-xl bg-white border-primary/10 shadow overflow-hidden cursor-pointer transition-transform duration-500 hover:shadow-lg hover:scale-102">
      <div className="h-36 w-full">
        <img
        src={imgUrl}
        alt='image'
        className="w-full h-full object-cover"
      />
      </div>
      <div className="px-2 py-0.5 sm:py-2">
        {tags.map((tag,index)=>(
          <span key={index} className="text-xs border-primary/10 text-surface border rounded-lg overflow-hidden px-2 py-0.5 ">{tag}</span>
        ))}
        <p className="font-semibold text-base my-1 line-clamp-2 capitalize">{title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis non incidunt nesciunt esse sit! Temporibus quisquam et architecto distinctio numquam laborum explicabo sequi ea dolore, neque, animi sapiente, ducimus illo autem. Cupiditate.</p>
      </div>
    
    </div>
  )
}

export default BlogCard