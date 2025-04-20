import React from 'react';
import {motion} from "motion/react";

interface SparkleIconProps {
    top: number,
    left: number,
    delay?: number
}

const SparkleIcon = ({top, left, delay}: SparkleIconProps) => {
    return (
        <motion.span
            className="absolute text-2xl"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay ? delay : 0
            }}
        >
            ✨
        </motion.span>
    );
};

export default SparkleIcon;