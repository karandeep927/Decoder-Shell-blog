function ReadPage(){
    return(
        <div
        className="w-full min-h-screen overflow-x-hidden px-4 py-3">
            <h1 className="text-lg sm:text-xl font-bold">Title</h1>
            <div className="-mt-1.5 flex text-xs items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                <p>Written by:</p>
                <div className="flex items-center">
                <img className="inline-block w-6 h-6 mr-2 rounded-full bg-blue-600"/>
                <p>Author</p>
                </div>
                </div>
                <p>Publish Date: </p> 
            </div>
            <div className="flex justify-center my-3">
            <img src="img" alt=""  className="w-60 h-52 object-contain"/>
            </div>
            <p className="px-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi dolore, asperiores molestiae, ullam a praesentium tempore est maxime odit inventore soluta dolor fuga. Qui vitae harum quas eum deleniti non itaque excepturi id sint ipsum distinctio quo, incidunt voluptatum repellat, debitis corrupti iste hic? Quia hic unde, culpa maiores, blanditiis expedita quis quasi ex ipsa dolore voluptatem voluptates rerum tenetur debitis nostrum nulla ea? Dolore expedita veniam aperiam itaque molestiae sit alias id accusantium ipsum et, sunt iste voluptas odio quaerat magnam qui. Magnam fugiat, dolore natus corporis est enim dolorem, odio exercitationem veritatis ab vel praesentium corrupti perspiciatis.</p>
        </div>
    )
}
export default ReadPage