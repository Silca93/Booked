import React from 'react'

export default function Carrousel() {

  const bookArray = ["https://images.gr-assets.com/books/1361975680l/2657.jpg", "https://images.gr-assets.com/books/1320399351l/1885.jpg", "https://images.gr-assets.com/books/1361039443l/41865.jpg", "https://images.gr-assets.com/books/1424037542l/7613.jpg", "https://images.gr-assets.com/books/1516211014l/332613.jpg", "https://images.gr-assets.com/books/1327868566l/2429135.jpg", "https://images.gr-assets.com/books/1260470010l/4473.jpg", "https://images.gr-assets.com/books/1348990566l/5470.jpg"];
  
  const randomBook = bookArray.sort(() => Math.floor(Math.random() - 0.5))

  return (
    <div className="w-full">
        <h1  className="text-center py-5 text-xl font-bold">Our Recommendations</h1>
      <div className="carousel carousel-center max-w-full h-[23rem] p-5 space-x-11 bg-[#edede9] ">
        
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
      </div>
      
    </div>
  )
}
