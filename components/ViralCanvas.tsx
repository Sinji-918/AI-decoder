
import React, { useRef } from 'react';
import { PosterConfig } from '../types';
import { PhoneMockup } from './PhoneMockup';
import { Download, AlertTriangle, Fingerprint, Search, Sparkles, XCircle, Brain, Star, MessageCircle, Flame, User, CheckCircle2, X } from 'lucide-react';
import { toPng } from 'html-to-image';

interface ViralCanvasProps {
  config: PosterConfig;
  onDownloadStart?: () => void;
  onDownloadEnd?: () => void;
}

export const ViralCanvas: React.FC<ViralCanvasProps> = ({ config, onDownloadStart, onDownloadEnd }) => {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!posterRef.current) return;
    if (onDownloadStart) onDownloadStart();

    try {
      const dataUrl = await toPng(posterRef.current, { 
          cacheBust: true, 
          pixelRatio: 2, 
          style: { transform: 'scale(1)' } 
      });
      const link = document.createElement('a');
      link.download = `Viral-AI-Persona-${config.type}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
      alert('Generating image failed.');
    } finally {
        if (onDownloadEnd) onDownloadEnd();
    }
  };

  const getMockupType = () => {
      if (config.type === 'viral_tags') return 'roast';
      if (config.type === 'viral_warning') return 'radar';
      if (config.type === 'viral_question') return 'background';
      return 'intro';
  };

  // Helper for adding noise texture
  const NoiseOverlay = () => (
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
        {/* The Capture Area - Aspect Ratio 4:5 */}
        <div className="w-full max-w-[400px] mx-auto perspective-1000 shadow-2xl rounded-[12px] overflow-hidden border-8 border-gray-900">
            <div 
                ref={posterRef}
                className={`relative w-full aspect-[4/5] ${config.colorTheme} flex flex-col overflow-hidden`}
            >
                <NoiseOverlay />

                {/* =========================================================
                    STYLE 1: 3 Phones Fan Out (Features)
                   ========================================================= */}
                {config.type === 'viral_features' && (
                    <>
                         <div className="absolute inset-0 bg-gradient-to-b from-[#A855F7] via-[#C084FC] to-[#EC4899]"></div>
                         {/* Sparkles */}
                         <Sparkles className="absolute top-8 left-8 text-white opacity-80" size={32} />
                         <Sparkles className="absolute top-12 right-12 text-yellow-300 opacity-80" size={24} />
                         <Sparkles className="absolute bottom-32 left-4 text-pink-200 opacity-60" size={20} />

                         <div className="relative z-10 flex flex-col h-full pt-10 items-center">
                             {/* Header */}
                             <h1 className="text-5xl font-black text-white drop-shadow-md tracking-tight mb-2" style={{ textShadow: '0 2px 0 #D946EF, 0 4px 0 rgba(0,0,0,0.2)' }}>
                                 AI 鉴人
                             </h1>
                             <p className="text-2xl font-bold text-white mb-8 tracking-wider">读懂TA的朋友圈</p>

                             {/* Phones Container */}
                             <div className="relative w-full h-[400px] flex justify-center mt-4">
                                 {/* Left Phone */}
                                 <div className="absolute left-[-20px] top-12 transform -rotate-[10deg] scale-[0.65] z-10 origin-bottom-right shadow-2xl">
                                     <PhoneMockup type="background" />
                                 </div>
                                 {/* Right Phone */}
                                 <div className="absolute right-[-20px] top-12 transform rotate-[10deg] scale-[0.65] z-10 origin-bottom-left shadow-2xl">
                                     <PhoneMockup type="strategy" />
                                 </div>
                                 {/* Center Phone */}
                                 <div className="absolute top-0 transform scale-[0.75] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                     <PhoneMockup type="roast" />
                                 </div>

                                 {/* Floating Feature Pills */}
                                 <div className="absolute top-16 left-2 bg-white text-[#7C3AED] px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1">
                                     <Brain size={12}/> MBTI分析
                                 </div>
                                 <div className="absolute top-20 right-2 bg-white text-[#DB2777] px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1">
                                     <Flame size={12}/> 人设锐评
                                 </div>
                                 <div className="absolute bottom-20 left-4 bg-white text-[#EA580C] px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1">
                                     <Star size={12}/> 星座解读
                                 </div>
                                 <div className="absolute bottom-24 right-4 bg-white text-[#059669] px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1">
                                     <MessageCircle size={12}/> 社交攻略
                                 </div>
                             </div>

                             {/* Bottom Banner */}
                             <div className="absolute bottom-6 w-[90%] bg-gradient-to-r from-[#DB2777] to-[#7C3AED] rounded-full py-3 px-4 shadow-xl border border-white/30 flex justify-center items-center">
                                 <span className="text-white font-bold text-sm">上传3-9张朋友圈截图，AI帮你深度解析</span>
                             </div>
                         </div>
                    </>
                )}

                {/* =========================================================
                    STYLE 2: 2 Phones Side-by-Side (Comparison)
                   ========================================================= */}
                {config.type === 'viral_comparison' && (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#A78BFA] via-[#F472B6] to-[#F43F5E]"></div>
                        {/* Soft Glows */}
                        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-white opacity-20 blur-[60px] rounded-full"></div>
                        
                        <div className="relative z-10 flex flex-col h-full pt-10 items-center">
                            {/* Header */}
                            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-100 drop-shadow-sm mb-2" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))'}}>
                                AI 鉴人
                            </h1>
                            <p className="text-xs font-bold text-white bg-black/20 backdrop-blur px-3 py-1 rounded-full border border-white/20 mb-2">
                                你的朋友圈不是生活记录，是融资路演BP!
                            </p>

                            {/* Phones Area */}
                            <div className="flex-1 w-full relative flex justify-center items-start mt-6 gap-2">
                                {/* Left Phone */}
                                <div className="relative transform scale-[0.65] origin-top-right z-10 shadow-2xl">
                                    <PhoneMockup type="intro" />
                                </div>
                                {/* Right Phone */}
                                <div className="relative transform scale-[0.65] origin-top-left z-10 shadow-2xl">
                                    <PhoneMockup type="upload" />
                                </div>

                                {/* Circular Icons */}
                                <div className="absolute left-2 top-10 flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                                        <Brain size={20} />
                                    </div>
                                    <span className="text-white font-black text-xs stroke-black paint-order-stroke drop-shadow-md">MBTI分析</span>
                                </div>

                                <div className="absolute right-2 top-20 flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                                        <MessageCircle size={20} />
                                    </div>
                                    <span className="text-white font-black text-xs drop-shadow-md">人设锐评</span>
                                </div>

                                <div className="absolute left-4 bottom-32 flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                                        <Star size={20} />
                                    </div>
                                    <span className="text-white font-black text-xs drop-shadow-md">星座解读</span>
                                </div>

                                <div className="absolute right-4 bottom-24 flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-white font-black text-xs drop-shadow-md">社交攻略</span>
                                </div>
                            </div>

                             {/* Bottom Banner */}
                             <div className="absolute bottom-6 w-[90%] bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-full py-3 px-2 shadow-xl border-2 border-white flex justify-center items-center">
                                 <span className="text-white font-black text-sm tracking-wide">上传3-9张朋友圈截图，AI帮你深度解析</span>
                             </div>
                        </div>
                    </>
                )}

                {/* =========================================================
                    STYLE 3: Rank PK (Purple/Orange Split)
                   ========================================================= */}
                {config.type === 'viral_rank' && (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#581c87] via-[#7e22ce] to-[#f97316]"></div>
                        
                        <div className="relative z-10 h-full w-full flex flex-col pt-8">
                            <div className="text-center px-4 space-y-1 relative z-20">
                                <h1 className="text-[3.5rem] font-black italic text-white leading-none tracking-tighter drop-shadow-md transform -skew-x-6">
                                    AI鉴人
                                </h1>
                                <p className="text-lg font-bold text-white tracking-widest drop-shadow-sm">
                                    你的朋友圈人设是...
                                </p>
                            </div>

                            {/* Tags Floating */}
                            <div className="absolute left-2 top-32 transform -rotate-12 z-0">
                                <span className="text-3xl font-black text-white italic drop-shadow-[0_2px_0_black]" style={{ WebkitTextStroke: '1px black' }}>顶级<br/>玩家</span>
                            </div>
                             <div className="absolute left-4 bottom-40 transform rotate-6 z-20">
                                <span className="text-3xl font-black text-white italic drop-shadow-[0_2px_0_black]" style={{ WebkitTextStroke: '1px black' }}>NPC</span>
                            </div>
                             <div className="absolute right-2 top-36 transform rotate-6 z-0">
                                <span className="text-3xl font-black text-white italic drop-shadow-[0_2px_0_black]" style={{ WebkitTextStroke: '1px black' }}>体验<br/>派</span>
                            </div>
                             <div className="absolute right-2 bottom-32 transform -rotate-12 z-20">
                                <span className="text-3xl font-black text-white italic drop-shadow-[0_2px_0_black]" style={{ WebkitTextStroke: '1px black' }}>社交<br/>达人</span>
                            </div>


                            {/* Dual Phone Display */}
                            <div className="flex-1 w-full relative flex justify-center items-start mt-2 px-2 gap-3 overflow-hidden">
                                {/* Left Phone (Rank List) */}
                                <div className="relative transform scale-[0.65] origin-top-right -mr-4 z-10 shadow-2xl">
                                    <PhoneMockup type="rank_list" />
                                </div>
                                
                                {/* Right Phone (Analysis) */}
                                <div className="relative transform scale-[0.65] origin-top-left -ml-4 z-10 shadow-2xl">
                                    <PhoneMockup type="analysis_detail" />
                                </div>

                                {/* Center Overlay Text */}
                                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                                    <div className="bg-white/90 px-3 py-4 rounded-xl shadow-xl transform rotate-3">
                                        <div className="text-black text-4xl font-black writing-vertical-rl text-center leading-none tracking-tighter">
                                            你中了哪个?
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Banner */}
                            <div className="absolute bottom-0 w-full bg-[#ea580c] py-5 px-4 flex flex-col items-center justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.2)] z-30">
                                <div className="text-white font-black text-2xl tracking-tighter text-center leading-none">
                                    上传朋友圈截图，<span className="bg-white text-[#ea580c] px-1 rounded">AI帮你分析</span>
                                </div>
                                <div className="text-orange-200 text-xs mt-1">上传3-9张截图，立即获得专业分析</div>
                            </div>
                        </div>
                    </>
                )}

                {/* =========================================================
                    STYLE 4: Contrast (Split Screen Dark/Neon)
                   ========================================================= */}
                {config.type === 'viral_contrast' && (
                    <>
                        <div className="absolute inset-0 bg-black flex">
                            {/* Left Side (Dark/Grayscale) */}
                            <div className="w-1/2 h-full bg-zinc-900 relative overflow-hidden flex flex-col items-center pt-8 border-r border-gray-700">
                                <div className="absolute inset-0 bg-black/50 z-10"></div>
                                {/* Simulated "Bad" Phone state */}
                                <div className="transform scale-[0.6] origin-top grayscale contrast-125 blur-[1px] opacity-60">
                                    <PhoneMockup type="background" />
                                    {/* Cracked Screen Effect Overlay */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0,0 L40,40 L30,60 L60,50 L100,20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                                        <path d="M40,40 L50,80 L20,100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                                    </svg>
                                </div>
                                <div className="absolute top-20 z-20 text-center w-full px-2">
                                     <div className="text-gray-300 font-bold text-xl mb-1">还在靠直觉判断?</div>
                                     <div className="text-gray-500 text-xs">盲目猜测，容易翻车。</div>
                                </div>
                            </div>

                            {/* Right Side (Neon) */}
                            <div className="w-1/2 h-full bg-gradient-to-b from-indigo-900 to-purple-900 relative overflow-hidden flex flex-col items-center pt-8">
                                 <div className="transform scale-[0.6] origin-top z-10 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                                     <PhoneMockup type="dashboard" />
                                 </div>
                                 <div className="absolute top-16 z-20 text-center w-full px-2">
                                     <div className="text-white font-bold text-xl mb-1 drop-shadow-[0_0_10px_white]">AI帮你精准分析</div>
                                 </div>
                            </div>

                            {/* Center Splitter */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                                 <div className="bg-black border-2 border-purple-500 text-purple-400 font-black text-2xl px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.8)] tracking-tighter">
                                     AI鉴人
                                 </div>
                                 {/* Glowing Line */}
                                 <div className="h-20 w-1 bg-purple-500 shadow-[0_0_10px_#A855F7] mt-[-10px] -z-10"></div>
                                 <div className="h-20 w-1 bg-purple-500 shadow-[0_0_10px_#A855F7] mb-[-10px] mt-[-60px] -z-10"></div>
                            </div>

                            {/* Top Text Overlay */}
                            <div className="absolute top-4 w-full text-center z-30 px-2">
                                <h2 className="text-white font-bold text-sm bg-black/50 backdrop-blur inline-block px-3 py-1 rounded-full border border-gray-700">
                                    你的朋友圈不是生活记录，是融资路演BP!
                                </h2>
                            </div>
                            
                            {/* Bottom CTA */}
                             <div className="absolute bottom-8 w-[90%] left-[5%] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full py-3 px-4 shadow-xl border border-white/20 flex justify-center items-center z-30">
                                 <Search className="text-white mr-2" size={16}/>
                                 <span className="text-white font-bold text-xs tracking-wide">立即体验 AI 分析</span>
                             </div>

                             <div className="absolute bottom-2 w-full text-center z-30">
                                 <p className="text-[10px] text-gray-400">上传朋友圈截图，AI帮你读懂TA的真实人设</p>
                             </div>
                        </div>
                    </>
                )}

                {/* =========================================================
                    PREVIOUS STYLES (Kept for compatibility)
                   ========================================================= */}
                
                {/* Style: Warning (Yellow) */}
                {config.type === 'viral_warning' && (
                    <>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="bg-black text-[#FFD600] px-4 py-4 transform -skew-y-3 mt-4 border-b-4 border-white shadow-xl flex justify-between items-center">
                                 <AlertTriangle size={32} strokeWidth={3} />
                                 <h1 className="text-3xl font-black uppercase tracking-tighter italic">渣男警报</h1>
                                 <AlertTriangle size={32} strokeWidth={3} />
                            </div>
                            <div className="px-6 pt-6">
                                <h2 className="text-5xl font-black text-black leading-[0.9] drop-shadow-md italic whitespace-pre-wrap">{config.headline}</h2>
                            </div>
                            <div className="flex-1 relative mt-4">
                                <div className="absolute right-[-20px] top-0 transform rotate-12 scale-100 z-10 drop-shadow-2xl">
                                     <PhoneMockup type="radar" />
                                </div>
                                <div className="absolute left-6 top-20 bg-black text-white px-4 py-2 font-black text-xl rounded-lg transform -rotate-12 border-2 border-[#FFD600] shadow-[4px_4px_0px_#000]">STOP!</div>
                            </div>
                        </div>
                    </>
                )}

                {/* Style: Exposed (White Grid) */}
                {config.type === 'viral_tags' && (
                    <>
                        <div className="absolute inset-0 bg-white" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <div className="relative z-10 h-full p-6 flex flex-col">
                            <h1 className="relative text-5xl font-black text-gray-900 leading-[0.9] tracking-tighter z-10 mb-4">
                                {config.headline.split('\n').map((line, i) => <div key={i} className={i===1 ? "text-red-600" : ""}>{line}</div>)}
                            </h1>
                            <div className="flex-1 relative">
                                <div className="absolute left-1/2 top-4 transform -translate-x-1/2 scale-105 z-10">
                                     <PhoneMockup type="roast" />
                                </div>
                                <div className="absolute top-10 -left-2 bg-black text-white px-3 py-2 font-bold transform -rotate-6 text-sm shadow-[4px_4px_0px_#ccc]"># 装B实录</div>
                            </div>
                        </div>
                    </>
                )}

                {/* Style: Cyber (Dark Purple/Blue) */}
                {config.type === 'viral_question' && (
                    <>
                        <div className="absolute inset-0 bg-black">
                             <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-[80px] opacity-70 animate-pulse"></div>
                             <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-blue-600 rounded-full blur-[80px] opacity-70"></div>
                        </div>
                        <div className="relative z-10 h-full flex flex-col items-center pt-8">
                             <Sparkles className="absolute top-10 left-8 text-white opacity-50 animate-spin-slow" />
                             <div className="text-center mb-6 px-4">
                                 <h1 className="text-4xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">{config.headline}</h1>
                             </div>
                             <div className="relative transform scale-95">
                                 <PhoneMockup type="background" />
                             </div>
                        </div>
                    </>
                )}

            </div>
        </div>

        {/* Action Button */}
        <button 
            onClick={handleDownload}
            className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95"
        >
            <Download size={18} className="group-hover:animate-bounce" />
            保存社媒爆款图
        </button>
    </div>
  );
};
