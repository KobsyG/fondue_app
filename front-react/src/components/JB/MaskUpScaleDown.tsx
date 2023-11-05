import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MIB from '../../images/portrait_of_black_man.jpg';

function MaskUpScaleDown() {
    const scrollTriggerInitialized = useRef(false);

    useEffect(() => {
        if (!scrollTriggerInitialized.current) {
            gsap.timeline()
                .from(".mib", {
                    duration: 1,
                    scale: 2,
                })
                .fromTo('.mask',
                {
                    clipPath: 'polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)',
                }, {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }, 0)

            scrollTriggerInitialized.current = true;
        }

    }, []);

    return (
        <div className='ad w-[40vh] h-[40vh] bg-black flex items-center justify-center'>
            <div className='mask custom-clip-path w-[38vh] h-[38vh] overflow-hidden'>
                <img src={MIB} className='mib object-cover w-full h-full' />
            </div>
        </div>
    );
}

export default MaskUpScaleDown;