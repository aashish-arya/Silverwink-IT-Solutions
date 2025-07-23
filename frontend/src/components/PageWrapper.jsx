import { motion } from "framer-motion";

const transition = {
    duration: 0.8,
    ease: [0.25, 1, 0.5, 1], // iOS-like smooth
};

const variants = {
    initial: {
        opacity: 0,
        filter: "blur(60px)",
    },
    in: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            ...transition,
            delay: 0.1, // smooth suspense entry
        },
    },
    out: {
        opacity: 0,
        filter: "blur(30px)",
        transition: {
            ...transition,
            duration: 0.5,
        },
    },
};

export default function PageWrapper({ children }) {
    return (
        <motion.div
            className="min-h-screen bg-white"
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            style={{
                willChange: "opacity, filter",
                transform: "translateZ(0)",
                overflow: "hidden",
                backfaceVisibility: "hidden",
                background: "rgba(255, 255, 255, 0.72)",
                backdropFilter: "blur(12px)",
            }}
        >
            {children}
        </motion.div>
    );
}
