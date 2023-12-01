import React from 'react'

const CheeseWindow = ({ titre, text, photo }: { titre: any, text: string, photo: any }) => {
  return (
    <div className='cheeseWindow-container w-[1000px] flex rounded-[20px] bg-gray-400 h-[90vh]'>

      <div className='photo w-[50%] h-[90%] my-auto border'>
        <img className='' src={photo} />
      </div>

      <div className='flex flex-col h-full w-[50%]'>
        <div className='titre h-[250px] w-full border'>
          <img className='h-[200px] mx-auto my-auto' src={titre} />
        </div>

        <div className='text h-full w-full flex justify-center items-center border'>
          <p className='text-[20px]'>
            {text}
          </p>
        </div>
      </div>

    </div>
  )
}

export default CheeseWindow