import '../../styles/soundButton.css';

function SoundButton() {
  return (
    <div className='absolute h-[170px] w-[170px] bg-fondue-blue top-0 left-[50%] flex items-center justify-center'>
      <div className="absolute-center">
        <svg className="h-[250px] w-[250px]" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
            </path>
          </defs>
          <text className="circle-text" dy="70" textLength="1220">
            <textPath href="#textcircle_top">
              Activer le son - Activer le son - Activer le son -
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute-center">
        <div className="h-[150px] w-[150px] rounded-full">
          <svg
            className="h-[30%] w-[30%] absolute-center"
            width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="icon" fill="#FFFFFF" transform="translate(42.666667, 85.333333)">
              <path d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,0 L80.8957867,87.2292267 L0,87.2292267 L0,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,0 L191.749973,0 Z" id="Shape"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SoundButton