import CloudCheese from "./CloudCheese"

function LaBelleHistoire() {
  return (
    <div className='w-[100vw] relative bg-fondue-yellow'>
      {/* BG COLOR */}
      <div className='absolute z-0 top-0 left-0 w-full h-full bg-fondue-blue rounded-tr-[4rem]' />
      <CloudCheese classAdd="mt-[40vh] hidden md:block" />

      {/* SMALL PAGE WIDTH */}
      <div className="relative z-10 w-full aspect-[4/8] md:hidden flex flex-col items-center">
        <p
          style={{ fontFamily: 'AvocadoCake' }}
          className='text-center text-white text-[32px] mt-[10vh] mb-[5vh] w-[70vh] w-[90vw] max-w-full'>
          Il était une fois deux amis, bras dessus bras dessous, partis pour conquérir un titre aussi inattendu que réjouissant.
        </p>
        <div className='w-[90%] aspect-[4/6] bg-yellow-700 rounded-t-full'>

        </div>
        <p
          style={{ fontFamily: 'AvocadoCake' }}
          className='text-center text-white uppercase text-[24px] mt-[5vh] mb-[3vh] w-full max-w-full'>
          Le Championnat de Frande de fondue
        </p>
        <p
          style={{ fontFamily: 'MinionPro' }}
          className='text-justify text-white overflow-clip text-[20px] mb-[5vh] w-[90vw] max-w-full'>
          C'est ainsi que le 13 mars 2022, à Montréjeau, Alban et Jean-Jacques remportent le premier titre de Champion de France de Fondue aux Fromages devant 20 autres équipes candidates au titre.
          Ils innovent en proposant une recette à base des 5 AOP du Cantal ! Et quelques ingrédients secrets qui vont vous être dévoilés...
          <br />
          <br />
          Si bonne humeur et convivialité sont au rendez-vous, la performance n’en est pas moins sérieuse, en témoigne le jury de professionnels composé de Meilleurs Ouvriers de France fromagers et restaurateurs, et de critiques gastronomiques, venus spécialement pour déguster et départager LA meilleure fondue.
        </p>
      </div>

      {/* MEDIUM PAGE WIDTH */}
      <div className="relative z-10 w-full aspect-[4/6] hidden xl:hidden md:grid grid-cols-4">
        <div className='col-start-1 col-end-2 flex items-center justify-center'>
          <div className='w-[80%] aspect-[4/5] bg-green-300 rounded-tl-[4rem]'>
          </div>
        </div>
        <div className='col-start-2 col-end-4 flex items-center justify-center'>
          <div className='w-[100%] aspect-[4/6] bg-green-300 rounded-t-full'>
          </div>
        </div>
        <div className='col-start-4 col-end-5 flex items-center justify-center'>
          <div className='w-[80%] aspect-[4/5] bg-green-300 rounded-tr-[4rem]'>
          </div>
        </div>
      </div>

      {/* LARGE PAGE WIDTH */}
      <div className="relative z-10 w-full aspect-[4/6] hidden xl:grid grid-cols-10">
        <div className='col-start-1 col-end-4 flex items-center justify-center'>
          <div className='w-[80%] aspect-[4/5] bg-blue-200 rounded-tl-[4rem]'>
          </div>
        </div>
        <div className='col-start-4 col-end-8 flex items-center justify-center'>
          <div className='w-[100%] aspect-[4/6] bg-blue-200 rounded-t-full'>
          </div>
        </div>
        <div className='col-start-8 col-end-11 flex items-center justify-center'>
          <div className='w-[80%] aspect-[4/5] bg-blue-200 rounded-tr-[4rem]'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaBelleHistoire