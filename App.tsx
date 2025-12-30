import React, { useState, useMemo } from 'react';
import { CHANNEL_CONTENT, POSTER_TEMPLATES } from './constants';
import { PosterCanvas } from './components/PosterCanvas';
import { ViralCanvas } from './components/ViralCanvas';
import { PosterCategory } from './types';
import { Copy, Check, Sparkles, Image as ImageIcon, MessageSquare, Flame } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [activeCategory, setActiveCategory] = useState<PosterCategory>('official');
  const [activePosterId, setActivePosterId] = useState<string>(POSTER_TEMPLATES[0].id);
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const [activeCopyIndex, setActiveCopyIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Derived Data
  const filteredTemplates = useMemo(() => 
    POSTER_TEMPLATES.filter(t => t.category === activeCategory), 
  [activeCategory]);

  const currentPoster = POSTER_TEMPLATES.find(t => t.id === activePosterId) || filteredTemplates[0];
  const currentChannel = CHANNEL_CONTENT[activeChannelIndex];
  const currentCopy = currentChannel.copyOptions[activeCopyIndex];

  // Update active poster if category changes and ID is no longer valid
  React.useEffect(() => {
    const exists = filteredTemplates.find(t => t.id === activePosterId);
    if (!exists && filteredTemplates.length > 0) {
        setActivePosterId(filteredTemplates[0].id);
    }
  }, [activeCategory, filteredTemplates, activePosterId]);


  // Handlers
  const handleCopy = () => {
    const text = `${currentCopy.title ? currentCopy.title + '\n\n' : ''}${currentCopy.content}\n\n${currentCopy.hashtags.join(' ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 font-sans selection:bg-purple-200">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
              AI
            </div>
            <h1 className="font-bold text-lg tracking-tight">AI 鉴人 <span className="hidden sm:inline text-gray-400 font-normal text-sm">| 增长物料生成器</span></h1>
          </div>
          <div className="text-xs font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
            v2.1 Social Viral Suite
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Generator (Sticky) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
             <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center">
                
                <div className="w-full flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                        <ImageIcon size={20} className="text-purple-600"/>
                        海报生成 (Poster Generator)
                    </h3>
                </div>

                {/* Category Switcher */}
                <div className="bg-gray-100 p-1 rounded-xl flex gap-1 mb-6 w-full max-w-sm">
                    <button
                        onClick={() => setActiveCategory('official')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${
                            activeCategory === 'official' 
                            ? 'bg-white text-gray-900 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <ImageIcon size={16} /> 官方海报
                    </button>
                    <button
                        onClick={() => setActiveCategory('viral')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${
                            activeCategory === 'viral' 
                            ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <Flame size={16} /> 社媒爆款
                    </button>
                </div>

                {/* Poster Type Selector */}
                <div className="w-full overflow-x-auto no-scrollbar mb-6">
                    <div className="flex gap-2 min-w-max pb-2 justify-center">
                        {filteredTemplates.map((template) => (
                            <button
                                key={template.id}
                                onClick={() => setActivePosterId(template.id)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                                    activePosterId === template.id
                                    ? activeCategory === 'viral' 
                                        ? 'bg-gray-900 text-white border-gray-900 shadow-md ring-2 ring-pink-200'
                                        : 'bg-gray-900 text-white border-gray-900 shadow-md'
                                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                {template.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* The Canvas Area - Switch based on category */}
                <div className={isGenerating ? "opacity-50 pointer-events-none transition-opacity" : "transition-opacity"}>
                     {activeCategory === 'official' ? (
                        <PosterCanvas 
                            config={currentPoster.config} 
                            onDownloadStart={() => setIsGenerating(true)}
                            onDownloadEnd={() => setIsGenerating(false)}
                        />
                     ) : (
                        <ViralCanvas 
                            config={currentPoster.config} 
                            onDownloadStart={() => setIsGenerating(true)}
                            onDownloadEnd={() => setIsGenerating(false)}
                        />
                     )}
                </div>
                
                <p className="mt-4 text-xs text-gray-400 text-center max-w-sm">
                    {isGenerating ? "生成高清图片中..." : "点击上方按钮即可下载高清 PNG 图片"}
                </p>
            </div>
          </div>

          {/* Right Column: Copywriting & Strategy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Context Switcher for Copy */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                        <MessageSquare size={20} className="text-purple-600"/>
                        文案库 (Copywriting)
                    </h3>
                </div>

                {/* Channel Tabs */}
                <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6">
                    {CHANNEL_CONTENT.map((channel, idx) => (
                        <button
                            key={channel.id}
                            onClick={() => {
                                setActiveChannelIndex(idx);
                                setActiveCopyIndex(0); // Reset variant when changing channel
                            }}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                                activeChannelIndex === idx
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {channel.name.split(' ')[0]}
                        </button>
                    ))}
                </div>

                {/* Copy Variant Selector (if multiple) */}
                {currentChannel.copyOptions.length > 1 && (
                     <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                        {currentChannel.copyOptions.map((_, idx) => (
                             <button
                                key={idx}
                                onClick={() => setActiveCopyIndex(idx)}
                                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border ${
                                    activeCopyIndex === idx
                                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                                    : 'bg-white text-gray-500 border-gray-200'
                                }`}
                            >
                                文案版本 {idx + 1}
                            </button>
                        ))}
                     </div>
                )}

                {/* Content Box */}
                <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed font-mono whitespace-pre-wrap border border-gray-200 mb-4 relative group">
                    <button 
                        onClick={handleCopy}
                        className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm z-10 ${
                            copied ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? '已复制' : '复制'}
                    </button>

                    {currentCopy.title && (
                        <div className="font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200 pr-16">
                            {currentCopy.title}
                        </div>
                    )}
                    {currentCopy.content}
                    
                    {currentCopy.hashtags.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 text-purple-600 font-medium">
                            {currentCopy.hashtags.join(' ')}
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-6 sm:p-8 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-yellow-400"/>
                    投放建议 (Tips)
                </h3>
                <div className="space-y-4 text-sm text-gray-300">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-white font-bold block mb-1">🔥 社媒爆款公式</span>
                        使用"社媒爆款"模版时，文案请务必带上强情绪词，如“避雷”、“渣男”、“破防”、“泪目”。
                    </div>
                     <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-white font-bold block mb-1">⏰ 平台特性</span>
                        小红书首图建议使用 3:4 或 4:5 比例（社媒模版默认 4:5），视觉冲击力更强，占据屏幕面积更大。
                    </div>
                </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;