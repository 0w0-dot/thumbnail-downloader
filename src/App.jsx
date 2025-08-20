import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Search, Upload, Sparkles } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-cyber-gradient overflow-x-hidden font-mono text-light-text relative scanlines">
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg animate-grid-move pointer-events-none" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-retro font-black text-neon-glow-pink animate-neon-glow mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🌈 RETRO THUMBS 🌈
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xs md:text-sm font-pixel text-neon-glow-blue mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to the Grid - Find Your Perfect Thumbnail
          </motion.p>
          
          {/* Main Card */}
          <motion.div 
            className="bg-dark-bg/80 border-2 border-neon-blue rounded-lg p-8 mb-8 shadow-neon-blue backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-retro text-neon-glow-yellow mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" />
              Coming Soon
              <Sparkles className="w-6 h-6" />
            </h2>
            <p className="text-base md:text-lg mb-4">레트로 스타일 썸네일 다운로드 사이트</p>
            <p className="text-sm md:text-base mb-6">80년대 사이버펑크 감성으로 제작 중...</p>
            
            {/* Interactive Demo */}
            <div className="mb-6">
              <motion.button
                className="bg-transparent border-2 border-neon-pink text-neon-pink px-6 py-3 rounded font-mono text-lg shadow-neon-pink hover:bg-neon-pink/10 hover:shadow-glow-strong transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setCount(count + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Count: {count} ⚡
              </motion.button>
            </div>
            
            {/* Feature Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div 
                className="bg-retro-purple/30 border border-retro-purple rounded p-4 hover:bg-retro-purple/50 transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <Download className="w-8 h-8 mx-auto mb-2 text-retro-purple" />
                <p className="text-xs">다운로드</p>
              </motion.div>
              
              <motion.div 
                className="bg-neon-blue/30 border border-neon-blue rounded p-4 hover:bg-neon-blue/50 transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <Search className="w-8 h-8 mx-auto mb-2 text-neon-blue" />
                <p className="text-xs">검색</p>
              </motion.div>
              
              <motion.div 
                className="bg-neon-pink/30 border border-neon-pink rounded p-4 hover:bg-neon-pink/50 transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <Upload className="w-8 h-8 mx-auto mb-2 text-neon-pink" />
                <p className="text-xs">업로드</p>
              </motion.div>
              
              <motion.div 
                className="bg-neon-yellow/30 border border-neon-yellow rounded p-4 hover:bg-neon-yellow/50 transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl mx-auto mb-2">🎨</div>
                <p className="text-xs">카테고리</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Category Grid */}
          <motion.div 
            className="grid grid-cols-4 gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {['🎨', '🎮', '💻', '🎵'].map((emoji, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-retro-purple/30 border border-retro-purple rounded flex items-center justify-center text-3xl hover:bg-retro-purple/50 transition-colors cursor-pointer"
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 10px 25px rgba(72, 52, 212, 0.4)' 
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Footer */}
          <motion.div 
            className="mt-8 text-xs text-light-text/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p>🤖 Built with SuperClaude & React + Vite</p>
            <p>🚀 GitHub Pages에서 곧 만나요!</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App