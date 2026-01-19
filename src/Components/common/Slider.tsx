import Carousel from 'react-multi-carousel';

function Slider({children}) {
    const responsive = {
         all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
    }
    return (
         <div className="w-full h-full">
      <Carousel
        responsive={responsive}
        infinite
        swipeable
        draggable
        autoPlaySpeed={3000}
        arrows={false}
        containerClass="h-full"
        itemClass="h-full"
        sliderClass="h-full"
        autoPlay
      >
        {children}
      </Carousel>
    </div>
    
  )
}

export default Slider