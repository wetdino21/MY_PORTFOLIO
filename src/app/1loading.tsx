"use client"

import { useEffect, useState } from "react"

const funnyMessages = [
  "Assembling starships...",
  "Polishing Saturn’s rings...",
  "Calibrating dark matter...",
  "Recharging quantum flux...",
  "Unfreezing space hamsters...",
  "Counting the moons of Jupiter...",
  "Generating cosmic nonsense...",
]

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[99999]">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );
}

// export default function Loading() {
//   const [messageIndex, setMessageIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMessageIndex((prev) => (prev + 1) % funnyMessages.length)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-900/90 to-black z-[99999]">
//       <div className="text-4xl md:text-5xl text-white font-bold neon-text mb-4 animate-pulse">
//         🌕 Launching...
//       </div>
//       <div className="text-lg md:text-xl text-purple-300 italic transition-all duration-300">
//         {funnyMessages[messageIndex]}
//       </div>
//       <style jsx>{`
//         .neon-text {
//           text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7;
//         }
//       `}</style>
//     </div>
//   )
// }
