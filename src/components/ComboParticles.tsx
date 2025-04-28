import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "motion/react";

type Particle = {
    id: string,
    emoji: string,
    angle: number,
    distance: number;
}

interface ComboParticlesProps {
    comboHit: boolean,
    comboEmojis: string[]
}

const ComboParticles = ({ comboHit, comboEmojis } : ComboParticlesProps) => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        if (comboHit && !(comboEmojis == undefined) ) {
            const newParticles = Array.from({ length: 12 }).map(() => ({
                id: Math.random().toString(),
                emoji: comboEmojis[Math.floor(Math.random() * comboEmojis.length)],
                angle: Math.random() * Math.PI * 2,
                distance: 100 + Math.random() * 200
            }));

            setParticles(newParticles);

            const timeout = setTimeout(() => setParticles([]), 2000);
            return () => clearTimeout(timeout);
        }
    }, [comboHit, comboEmojis]);

    return (
        <AnimatePresence>
            {particles.map((particles) => (
                <motion.div
                    key={particles.id}
                    initial={{
                        opacity: 0.9,
                        scale: 1,
                        x: 0,
                        y: 0
                    }}
                    animate={{
                        opacity: 0,
                        scale: 0.5,
                        x: Math.cos(particles.angle) * particles.distance,
                        y: Math.sin(particles.angle) * particles.distance
                    }}
                    exit={{ opacity:0 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                    className="absolute text-6xl pointer-events-none z-40"
                    style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                >
                    {particles.emoji}
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default ComboParticles;