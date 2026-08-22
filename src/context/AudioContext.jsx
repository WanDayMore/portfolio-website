import { createContext, useContext, useState, useEffect } from "react";
import { play8BitSound } from "../assets/audio8Bit";

const AudioContext = createContext();

export function AudioProvider({children}) {
    const [soundEnabled, setSoundEnabled] = useState(() => {
        const saved = localStorage.getItem("soundEnabled");
        if (saved !== null) {
            return JSON.parse(saved);
        } else {
            return true;
        }
    });

    useEffect(() => {
        localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled));
    }, [soundEnabled]);

    const playSound = (type) => {
        if (soundEnabled) {
            play8BitSound(type);
        }
    };

    const toggleSound = () => {
        setSoundEnabled((prev) => !prev);
    };

    return (
    <AudioContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </AudioContext.Provider>
  );
}


export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}