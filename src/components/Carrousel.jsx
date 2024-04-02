import React from 'react'

export default function Carrousel() {

  const bookArray = ["https://images.gr-assets.com/books/1361975680l/2657.jpg", "https://images.gr-assets.com/books/1329061522l/18131.jpg" , "https://images.gr-assets.com/books/1483412266l/865.jpg", "https://images.gr-assets.com/books/1424037542l/7613.jpg", "https://images.gr-assets.com/books/1434908555l/234225.jpg" , "https://images.gr-assets.com/books/1349927872l/49552.jpg" , "https://images.gr-assets.com/books/1260470010l/4473.jpg", "https://images.gr-assets.com/books/1348990566l/5470.jpg", "https://images.gr-assets.com/books/1309203605l/7126.jpg", "https://images.gr-assets.com/books/1320449708l/6867.jpg", "https://images.gr-assets.com/books/1355046521l/2547.jpg"];
  
  const randomBook = bookArray.sort(() => Math.floor(Math.random() - 0.5))

  return (
    <div className="w-full">
        <h1  className="text-center py-5 text-xl font-bold">Our Recommendations</h1>
      <div className="carousel carousel-center max-w-full h-[23rem] p-5 space-x-11 bg-[#202020] ">
        
        <div className="carousel-item">
          <img src={randomBook[0]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
        <img src={randomBook[1]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
        <img src={randomBook[2]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
        <img src={randomBook[3]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
        <img src={randomBook[4]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
        <img src={randomBook[5]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
        <img src={randomBook[6]} className="rounded-md" />
        </div>
        <div className="carousel-item">
        <img src={randomBook[7]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
          <img src={randomBook[8]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
          <img src={randomBook[9]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
          <img src={randomBook[10]} className="rounded-md" />
        </div> 
        <div className="carousel-item">
          <img src={randomBook[11]} className="rounded-md" />
        </div> 
      </div>
      
    </div>
  )
}
