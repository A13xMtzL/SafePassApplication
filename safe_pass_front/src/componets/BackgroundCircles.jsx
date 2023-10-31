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
      className="absolute left-0 top-0 z-[-1] flex h-full w-full items-center justify-center"
    >
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#db9c5560] dark:border-[#47bcd128]" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#db9c5560] dark:border-[#47bcd123]" />
      <div className="absolute mt-52 h-[750px] w-[750px] animate-pulse rounded-full border border-[#c63a74] dark:border-[#66d89f97] opacity-20" />
      <div />
    </motion.div>
  )
}
