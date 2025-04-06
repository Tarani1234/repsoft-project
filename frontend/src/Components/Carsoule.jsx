import React from 'react'

const Carsoule = () => {
   const games = [
      { name: "VALORANT", img: "./Reant.png" },
      { name: "ROCKET LEAGUE", img: "./Rocket.png" },
      { name: "LEAGUE OF LEGENDS", img: "./Legends.png" },
      { name: "CALL OF DUTY", img: "./Duty.png" },
      { name: "APEX LEGENDS", img: "./Apex.png" },
      { name: "PUBG MOBILE", img: "./Pubg.png" },
      { name: "FORTNITE", img: "./Fortnite.png" },
      { name: "CS:GO", img: "./Go.png" }
   ]

  return (
    <div className='mt-30 container mx-auto px-4'>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center'>
        {games.map((game, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img 
              src={game.img} 
              className='w-full max-w-[250px] h-auto object-contain' 
              alt={game.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carsoule
