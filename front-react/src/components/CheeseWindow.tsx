import React from 'react'

const croix = require("../images/Mono/croix-bleu.png")


const CheeseWindow = ({ titre, text, photo, setOpenCheese }: { titre: string, text: string, photo: any, setOpenCheese: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <div className='contact-container rounded-[20px] bg-gray-50 w-[1000px] flex justify-center p-6'>
      <div className='w-full flex'>
        <div className='w-1/2'>
          <img src={photo} className='w-full rounded-[20px]' />
        </div>
        <div className='w-1/2 relative pl-6'>
          <button className='close-cross absolute top-0 right-0 h-[30px] w-[30px] hover:scale-[1.15] transition-transform duration-200'>
            <img className='object-cover' src={croix} onClick={() => setOpenCheese(false)} />
          </button>
          <p
            style={{ fontFamily: 'OpenSansBold' }}
            className='text-fondue-red text-[30px] mb-4 text-left'>
            {titre}
          </p>
          <p
            style={{ fontFamily: 'OpenSansRegular' }}
            className='text-fondue-blue sm:text-[15px] lg:text-[20px] mb-4 text-justify'>
            {text}
          </p>

        </div>
      </div>
    </div>


  )

  // return (
  //   <div className='cheeseWindow-container w-[1000px] flex rounded-[20px] bg-gray-400 h-[90vh]'>
  //     <div className='photo w-[50%] h-[90%] my-auto border'>
  //       <img className='' src={photo} />
  //     </div>
  //     <div className='flex flex-col h-full w-[50%]'>
  //       <button className='absolute h-8 w-8 top-2 right-2'>
  //         <img className='object-cover' src={croix} onClick={() => { setOpenCheese(false) }} />
  //       </button>
  //       <div className='titre h-[250px] w-full mt-10 border'>
  //         <img className='h-[200px] mx-auto my-auto' src={titre} />
  //       </div>
  //       <div className='text h-full w-full flex justify-center items-center border'>
  //         <p className='text-[20px]'>
  //           {text}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default CheeseWindow