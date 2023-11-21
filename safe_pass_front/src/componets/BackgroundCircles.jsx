// (c) URJC - Safe Pass 2023, rights reserved.
import { motion } from 'framer-motion'

export default function BackgroundCircles(props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="pointer-events-none absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center"
    >
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-light-mode dark:border-dark-mode" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-light-mode dark:border-dark-mode" />
      <div className="absolute mt-52 h-[750px] w-[750px] animate-pulse rounded-full border border-[#c63a74] opacity-20 dark:border-[#66d89f97]" />{' '}
      <div />
    </motion.div>
  )
}
