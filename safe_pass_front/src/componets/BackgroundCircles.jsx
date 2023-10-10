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
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#6e0d0d95] rounded-full h-[200px] w-[200px] mt-52 animate-ping duration-1000 " />
      <div className="rounded-full border border-[#47bcd128] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#47bcd123] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#66d89f97] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div />
    </motion.div>
  )
}
