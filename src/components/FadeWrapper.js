import React from 'react';
import { motion } from 'framer-motion';

export default function FadeWrapper({ children }) {
    return (
        <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    )
}