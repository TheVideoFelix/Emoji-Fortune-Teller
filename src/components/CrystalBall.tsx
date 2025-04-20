'use client';
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";
import SparkleIcon from "@/components/SparkleIcon";

const CrystalBall = () => {
    const [prediction, setPrediction] = useState<string[]>(['🔮', '🔮', '🔮']);
    const [isShaking, setIsShaking] = useState(false);

    const handelShake = () => {
        setIsShaking(true);

        setTimeout(() => setIsShaking(false));
    }


    return (
        <motion.div
            className="relative w-[400px] h-[400px] m-8 cursor-pointer bg-glass rounded-full overflow-hidden"
            animate={{
                rotate: isShaking ? [-10, 10, -10, 10, 0] : 0,
                scale: isShaking ? 1.6 : 1.0,
            }}
            transition={{ duration: 0.5 }}
            onClick={handelShake}
        >
            <motion.div
                className="absolute w-full h-full rounded-full inset-shadow-sm inset-shadow-white/50"
                animate={{
                    opacity: [0.8, 0.1, 0.8],
                    transform: 'revert'
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity
                }}
            />


            <SparkleIcon top={20} left={20} />
            <SparkleIcon top={60} left={70} delay={0.5} />


            <AnimatePresence>
                {prediction.map((emoji, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: 1,
                            y: [0, -30, 0]
                        }}
                        transition={{
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3
                            }
                        }}
                        className="absolute text-7xl drop-shadow-emoji-prediction"
                        style={{
                            left: `${15 + i * 25}%`,
                            top: `${45}%`
                        }}
                    >
                        <motion.span
                            transition={{
                                duration: 0.5,
                                repeatType: 'mirror'
                            }}
                        >
                            {emoji}
                        </motion.span>
                    </motion.div>
                ))}
            </AnimatePresence>

        </motion.div>
    );
};

export default CrystalBall;