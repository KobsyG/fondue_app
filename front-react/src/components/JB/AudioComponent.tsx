import React, { ReactNode, createContext, useEffect, useRef, useState } from 'react'

// Create a context
export const AudioContext = createContext<{
    audioGentRef: React.MutableRefObject<HTMLAudioElement | null>;
    permissionGranted: boolean | null;
}>({
    audioGentRef: { current: null },
    permissionGranted: null,
});

const AudioComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    const audioGentRef = useRef<HTMLAudioElement | null>(null);
    const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

    useEffect(() => {
        const requestPermission = async () => {
            try {
                // If permission is granted -> Promise solved -> set new state value
                await navigator.mediaDevices.getUserMedia({ audio: true });
                setPermissionGranted(true);
            } catch (error: any) {
                if (error.name === 'NotAllowedError') {
                    console.log('Permission denied');
                } else {
                    console.error('Error:', error.message);
                }
                setPermissionGranted(false);
            }
        };
        requestPermission();
    }, []);

    return (
        <AudioContext.Provider value={{ audioGentRef, permissionGranted }}>
            <audio ref={audioGentRef}>
                {/* <source src="./testSound.mp3" type="audio/mpeg" /> */}
            </audio>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioComponent