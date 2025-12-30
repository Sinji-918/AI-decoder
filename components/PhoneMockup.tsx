
import React from 'react';
import { PosterVariantType } from '../types';
import { MapPin, Brain, Briefcase, Star, Heart, MessageCircle, Sparkles, ChevronLeft, Download, RefreshCw, Copy, Check, X, Upload, Image as ImageIcon, Search, Zap, User } from 'lucide-react';

interface PhoneMockupProps {
  type: PosterVariantType;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ type }) => {
  
  // Render different internal screens based on the type
  const renderScreenContent = () => {
    switch(type) {
        case 'intro':
            return (
                <div className="flex flex-col h-full bg-[#FDF4FF] relative font-sans">
                    {/* Top Content Group */}
                    <div className="pt-16 px-6 flex flex-col items-center text-center space-y-1">
                        <h2 className="text-[2.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#B06AB3] to-[#4568DC] whitespace-nowrap tracking-tighter">
                            AI鉴人
                        </h2>
                        <p className="text-lg text-gray-900 font-bold whitespace-nowrap tracking-wide">
                            读懂TA的朋友圈
                        </p>
                         <p className="text-[10px] text-gray-400 leading-relaxed max-w-[240px] mt-3 text-center">
                            上传朋友圈截图，AI智能分析性格、MBTI、星座，助你快速了解心仪对象
                        </p>
                    </div>

                    {/* Middle Button Group */}
                    <div className="w-full px-8 mt-10 mb-10">
                         <div className="w-full bg-gradient-to-r from-[#C33764] to-[#1D2671] text-white font-bold py-3.5 rounded-full text-center shadow-xl shadow-purple-200 flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                            <Sparkles size={16} fill="white" />
                            立即开始分析
                        </div>
                    </div>

                    {/* Bottom Grid Group */}
                    <div className="px-6 flex-1">
                        <div className="grid grid-cols-3 gap-3">
                             {[
                                 { icon: MapPin, label: "个人背景", color: "text-blue-500" },
                                 { icon: Brain, label: "性格气质", color: "text-purple-500" },
                                 { icon: Briefcase, label: "MBTI", color: "text-green-500" },
                                 { icon: Star, label: "星座", color: "text-orange-500" },
                                 { icon: Heart, label: "择偶偏好", color: "text-pink-500" },
                                 { icon: MessageCircle, label: "关系建议", color: "text-indigo-500" }
                             ].map((item, idx) => (
                                 <div key={idx} className="bg-white rounded-xl py-3 px-1 flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] aspect-square gap-2">
                                     <item.icon className={item.color} size={22} strokeWidth={2} />
                                     <span className="text-[10px] text-gray-600 font-bold whitespace-nowrap">{item.label}</span>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            );

        case 'upload':
             return (
                 <div className="flex flex-col h-full bg-[#FDF4FF] relative font-sans">
                      {/* Header */}
                      <div className="h-12 flex items-center px-4 justify-between bg-white/50 backdrop-blur-sm">
                          <div className="flex items-center gap-1 text-gray-400 font-bold text-[10px]"><RefreshCw size={12}/> 剩余 0 次</div>
                          <div className="text-[10px] font-medium text-gray-400">历史记录</div>
                      </div>

                      <div className="flex-1 px-6 flex flex-col items-center justify-center text-center -mt-8">
                           <h2 className="text-xl font-bold text-gray-900 mb-1">读懂TA的朋友圈</h2>
                           <p className="text-[10px] text-gray-400 mb-8">上传朋友圈截图，让 AI 读出 TA 真实的那一面</p>
                           
                           {/* Dashed Upload Area */}
                           <div className="w-full aspect-[4/3] bg-white rounded-2xl border-2 border-dashed border-purple-200 flex flex-col items-center justify-center gap-3 shadow-sm mb-6">
                               <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                                   <Upload size={20} className="text-purple-500" />
                               </div>
                               <div>
                                   <div className="text-sm font-bold text-gray-800">选择朋友圈截图</div>
                                   <div className="text-[10px] text-gray-400 mt-1">建议上传 3-9 张朋友圈列表截图</div>
                               </div>
                           </div>
                           
                           <div className="w-full bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] text-white font-bold py-3.5 rounded-full text-center shadow-lg flex items-center justify-center gap-2 text-sm">
                                <Sparkles size={16} fill="white" />
                                立即开始分析
                           </div>
                      </div>
                      
                      {/* Bottom Tags */}
                      <div className="px-4 pb-6">
                          <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium mb-3">
                              <span>最近分析</span>
                              <span>1分钟前</span>
                          </div>
                          <div className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
                               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">李</div>
                               <div className="flex-1">
                                   <div className="flex gap-2 mb-1">
                                       <span className="bg-blue-100 text-blue-600 text-[9px] px-1.5 py-0.5 rounded">马斯克风格对谈</span>
                                       <span className="bg-purple-100 text-purple-600 text-[9px] px-1.5 py-0.5 rounded">现实主义创业者</span>
                                   </div>
                                   <div className="text-[9px] text-gray-400 truncate w-40">
                                       提及火星移民计划与Crypto钱包私钥管理...
                                   </div>
                               </div>
                          </div>
                      </div>
                 </div>
             );

        case 'roast':
            return (
                <div className="flex flex-col h-full bg-[#FDF4FF] overflow-hidden font-sans pt-8">
                    <div className="p-4 space-y-5 overflow-y-auto no-scrollbar h-full">
                        {/* Bars */}
                        <div className="space-y-2 bg-white p-4 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-2">
                                <span className="bg-[#EF4444] text-white text-[10px] h-6 flex items-center justify-center rounded-md w-14 font-bold whitespace-nowrap shrink-0">穷</span>
                                <div className="h-6 bg-gray-100 rounded-md flex-1"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-[#F97316] text-white text-[10px] h-6 flex items-center justify-center rounded-md w-14 font-bold whitespace-nowrap shrink-0">顶级</span>
                                <div className="h-6 bg-[#F3E8FF] rounded-md flex-1 relative overflow-hidden border border-[#D8B4FE]">
                                     <div className="absolute inset-0 flex items-center justify-center text-[10px] text-[#9333EA] font-bold whitespace-nowrap">← 当前定位</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-[#EAB308] text-white text-[10px] h-6 flex items-center justify-center rounded-md w-14 font-bold whitespace-nowrap shrink-0">人上人</span>
                                <div className="h-6 bg-gray-100 rounded-md flex-1"></div>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="bg-gray-300 text-white text-[10px] h-6 flex items-center justify-center rounded-md w-14 font-bold whitespace-nowrap shrink-0">NPC</span>
                                <div className="h-6 bg-gray-100 rounded-md flex-1"></div>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="bg-gray-400 text-white text-[10px] h-6 flex items-center justify-center rounded-md w-14 font-bold whitespace-nowrap shrink-0">拉完了</span>
                                <div className="h-6 bg-gray-100 rounded-md flex-1"></div>
                            </div>
                        </div>

                        {/* Tags */}
                         <div className="flex flex-wrap gap-2 justify-center">
                            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white text-[10px] px-4 py-1.5 rounded-full font-medium shadow-sm whitespace-nowrap">新中产体验派掌门</span>
                            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white text-[10px] px-4 py-1.5 rounded-full font-medium shadow-sm whitespace-nowrap">朋友圈在职研究生</span>
                        </div>

                         <div className="flex justify-center">
                              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white text-[10px] px-4 py-1.5 rounded-full font-medium shadow-sm whitespace-nowrap">赛博游牧吉普赛人</span>
                         </div>

                        {/* Roast Card */}
                        <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-2xl p-4 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xl">🔥</span>
                                <span className="text-[#991B1B] font-bold text-base whitespace-nowrap">人设锐评</span>
                            </div>
                            <div className="text-xs text-[#7F1D1D] leading-relaxed font-medium space-y-3 text-justify">
                                <p>你的朋友圈不是生活记录，是融资路演BP。</p>
                                <p>每一张冲浪、滑雪、看展的照片，都在为你的“有趣灵魂”人设拉投资。</p>
                                <p>看似在追逐诗和远方，其实是给自己的AI产品经理身份做品牌背书，生怕别人不知道你既懂技术又懂生活。</p>
                                <p>这种用力过猛的丰富，反而暴露了对平庸的极度恐惧。</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        
        // --- NEW CASE 1: RANK LIST (Left Phone) ---
        case 'rank_list':
             return (
                 <div className="flex flex-col h-full bg-[#FDF4FF] overflow-hidden font-sans">
                     {/* Header */}
                     <div className="h-12 flex items-center px-4 justify-between bg-white border-b border-gray-100">
                         <div className="flex items-center gap-1 text-gray-700 font-bold text-xs"><ChevronLeft size={16}/> 返回</div>
                         <div className="text-sm font-black text-gray-900">分析结果</div>
                         <div className="flex items-center gap-1 text-purple-600 font-bold text-[10px]"><Download size={14}/> 保存</div>
                     </div>
                     
                     <div className="p-4 space-y-4">
                         {/* Rank Buttons */}
                         <div className="space-y-2.5">
                             <div className="w-full bg-[#EF4444] text-white py-3 px-4 rounded-xl flex justify-between items-center shadow-md">
                                 <span className="font-bold text-sm">穷</span>
                                 <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Top 95%</span>
                             </div>
                             <div className="w-full bg-[#F5F3FF] border-2 border-[#8B5CF6] text-[#6D28D9] py-3 px-4 rounded-xl flex justify-between items-center shadow-lg relative">
                                 <span className="font-bold text-sm">顶级 (T0级)</span>
                                 <div className="absolute right-3 bg-[#8B5CF6] text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                                    <span className="animate-pulse">●</span> 当前定位
                                 </div>
                             </div>
                             <div className="w-full bg-[#EAB308] text-white py-3 px-4 rounded-xl flex justify-between items-center opacity-40">
                                 <span className="font-bold text-sm">人上人</span>
                             </div>
                             <div className="w-full bg-gray-400 text-white py-3 px-4 rounded-xl flex justify-between items-center opacity-40">
                                 <span className="font-bold text-sm">NPC</span>
                             </div>
                             <div className="w-full bg-gray-800 text-white py-3 px-4 rounded-xl flex justify-between items-center opacity-40">
                                 <span className="font-bold text-sm">拉完了</span>
                             </div>
                         </div>

                         {/* Tags Area */}
                         <div className="flex flex-wrap gap-2 mt-4">
                             <span className="bg-[#8B5CF6] text-white text-[10px] px-3 py-1.5 rounded-lg font-bold">初中严待处女座</span>
                             <span className="bg-[#7C3AED] text-white text-[10px] px-3 py-1.5 rounded-lg font-bold">朋友圈在职研究生</span>
                             <span className="bg-[#6D28D9] text-white text-[10px] px-3 py-1.5 rounded-lg font-bold">拒绝物欲牧羊人</span>
                         </div>
                         
                         {/* Mini Card */}
                         <div className="bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                              <h5 className="text-[10px] font-bold text-red-600 mb-1 flex items-center gap-1">🔥 人设锐评</h5>
                              <p className="text-[9px] text-gray-500 leading-tight">
                                  看似在追逐诗和远方，其实是给自己的AI产品经理身份做品牌背书，生怕别人不知道你既懂技术又懂生活。
                              </p>
                         </div>
                     </div>
                 </div>
             );

        // --- NEW CASE 2: ANALYSIS DETAIL (Right Phone) ---
        case 'analysis_detail':
            return (
                 <div className="flex flex-col h-full bg-[#FDF4FF] overflow-hidden font-sans">
                     {/* Header */}
                     <div className="h-12 flex items-center px-4 justify-between bg-white border-b border-gray-100">
                         <div className="flex items-center gap-1 text-gray-400 font-bold text-xs"><ChevronLeft size={16}/> 返回</div>
                         <div className="text-sm font-black text-gray-900">分析结果</div>
                         <div className="flex items-center gap-1 text-purple-600 font-bold text-[10px]"><Download size={14}/> 保存</div>
                     </div>

                     <div className="p-4 overflow-hidden h-full">
                         {/* Card Container */}
                         <div className="bg-white w-full h-full rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col">
                             <div className="flex items-center gap-2 mb-4 border-b border-yellow-100 pb-3">
                                <span className="text-lg">⚡️</span>
                                <span className="text-[#854D0E] font-black text-sm">攻略红黑榜</span>
                            </div>

                            <div className="space-y-5 flex-1 overflow-hidden">
                                {/* Red List (Pros) */}
                                <div className="space-y-3">
                                    <span className="text-[#16A34A] font-bold text-xs flex items-center gap-1">
                                        <Check size={12} strokeWidth={4}/> 红榜：做什么最加分
                                    </span>
                                    <div className="flex gap-2 items-start pl-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
                                            聊他分享的AI文章，但提出一个比他更刁钻的观点，让他眼前一亮。
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-start pl-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
                                            约他去一个他没去过的小众户外地，比如板浆探洞，为他提供新的“体验素材”。
                                        </p>
                                    </div>
                                     <div className="flex gap-2 items-start pl-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
                                            在他朋友圈发一个他意想不到的低调乱乱的餐厅照片，配一句冷门歌词。
                                        </p>
                                    </div>
                                </div>

                                {/* Black List (Cons) */}
                                <div className="space-y-3 pt-2">
                                    <span className="text-[#DC2626] font-bold text-xs flex items-center gap-1">
                                        <X size={12} strokeWidth={4}/> 黑榜：做什么会瞬间下头
                                    </span>
                                    <div className="flex gap-2 items-start pl-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
                                            追问他未来的职业规划，什么时候买房，什么时候稳定下来。
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-start pl-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
                                            表现出对科技、旅行、音乐一无所知，只会聊明星八卦和家长里短。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bottom Input Mock */}
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                     <div className="flex items-center gap-1 text-[#16A34A] font-bold text-[10px]">
                                         <MessageCircle size={12}/> 破冰话题
                                     </div>
                                     <div className="flex items-center gap-1 text-gray-400 text-[9px]">
                                         <RefreshCw size={10}/> 换一换
                                     </div>
                                </div>
                                <div className="bg-gray-50 p-2 rounded text-[9px] text-gray-500 relative">
                                    "看你去了阿苏，那边的火山灰还好吗？有没有..."
                                    <div className="absolute right-2 top-2 text-gray-300"><Copy size={10}/></div>
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
            );

        // --- NEW CASE 3: DASHBOARD (Cyberpunk Dark Mode) ---
        case 'dashboard':
            return (
                <div className="flex flex-col h-full bg-[#0F172A] relative font-sans overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-800">
                        <ChevronLeft className="text-gray-400" size={16} />
                        <span className="text-white font-bold text-sm">AI鉴人</span>
                        <Upload className="text-gray-400" size={16} />
                    </div>

                    {/* Profile Section */}
                    <div className="p-4 flex flex-col items-center">
                         <div className="w-16 h-16 rounded-full border-2 border-[#8B5CF6] p-0.5 mb-2 relative">
                             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover opacity-80" />
                             <div className="absolute -bottom-1 -right-1 bg-[#8B5CF6] text-white text-[8px] px-1.5 py-0.5 rounded-full">高危</div>
                         </div>
                         <h3 className="text-white font-bold text-lg">ENTJ 指挥官</h3>
                         <p className="text-[10px] text-gray-400 max-w-[200px] text-center mt-1">
                             精准把握职场动向，独创性思维，是天生的一线领导者。
                         </p>
                    </div>

                    {/* Radar Chart Mock */}
                    <div className="px-4 mb-4">
                        <div className="bg-[#1E293B]/50 rounded-xl border border-gray-700 p-3">
                             <div className="flex items-center gap-1 text-[#38BDF8] text-[10px] font-bold mb-2">
                                 <Brain size={12}/> MBTI分析
                             </div>
                             <div className="relative w-full aspect-[2/1] flex items-center justify-center">
                                 {/* Simplified Pentagon Mock */}
                                 <div className="w-24 h-24 border border-blue-500/30 relative transform rotate-12">
                                     <div className="absolute inset-0 border border-blue-500/50 transform rotate-45 scale-75"></div>
                                     <div className="absolute inset-2 bg-blue-500/20 clip-path-polygon"></div>
                                 </div>
                                 <div className="absolute inset-0 flex flex-col justify-between items-center text-[8px] text-gray-400 py-1">
                                     <span>直觉</span>
                                     <div className="flex justify-between w-full px-6">
                                         <span>思考</span>
                                         <span>情感</span>
                                     </div>
                                     <span>S 级</span>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Constellation Card */}
                    <div className="px-4 mb-4">
                         <div className="bg-[#1E293B]/50 rounded-xl border border-gray-700 p-3 flex items-center gap-3">
                             <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center border border-indigo-500/30">
                                 <Star className="text-indigo-400" size={20} />
                             </div>
                             <div className="flex-1">
                                 <div className="text-[10px] font-bold text-indigo-300 mb-1">天蝎座 - 敏锐洞察</div>
                                 <div className="flex gap-1 flex-wrap">
                                     <span className="text-[8px] bg-indigo-900/50 text-indigo-200 px-1.5 py-0.5 rounded border border-indigo-500/20">神秘莫测</span>
                                     <span className="text-[8px] bg-indigo-900/50 text-indigo-200 px-1.5 py-0.5 rounded border border-indigo-500/20">极强控制</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                     
                     {/* Chat Strategy */}
                     <div className="px-4 flex-1">
                          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30 p-3 h-full">
                               <div className="flex items-center gap-1 text-[#E879F9] text-[10px] font-bold mb-2">
                                 <MessageCircle size={12}/> 社交攻略
                               </div>
                               <ul className="text-[9px] text-gray-300 space-y-2 list-disc pl-3">
                                   <li>直接沟通，避免拐弯抹角</li>
                                   <li>展示专业能力</li>
                                   <li>不要试图掌控他</li>
                               </ul>
                          </div>
                     </div>
                </div>
            );

        case 'background':
            return (
                 <div className="flex flex-col h-full bg-[#FDF4FF] overflow-hidden font-sans pt-8">
                    <div className="p-4 space-y-4 overflow-y-auto no-scrollbar h-full">
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#3B82F6]"></div>
                             <div className="flex items-center gap-2 mb-4">
                                <span className="text-xl">💼</span>
                                <span className="text-[#1E40AF] font-bold text-base whitespace-nowrap">工作背调</span>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1.5 whitespace-nowrap">行业/职位/公司推测</h4>
                                    <p className="text-[10px] text-gray-600 leading-relaxed text-justify">
                                        AI/Web3领域的产品经理或初创公司合伙人。证据链非常完整：“做AI产品2年多总结”、“ChatGPT Agent”、“Web3氛围”，加上“找实习同学”的口吻，说明已脱离执行层。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1.5 whitespace-nowrap">真实经济实力、收入</h4>
                                    <p className="text-[10px] text-gray-600 leading-relaxed text-justify">
                                        精神富足的“体验新贵”。收入客观（预估年包40-60W），但钱都烧给了航空公司、Livehouse和滑雪场，属于典型的“高流水、低存款”选手。不屑于炫耀物质资产，因为体验本身就是他的奢侈品。
                                    </p>
                                </div>
                                 <div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1.5 whitespace-nowrap">未来潜力</h4>
                                    <p className="text-[10px] text-gray-600 leading-relaxed text-justify">
                                        高潜力股，但风险并存。踩在时代风口上，如果项目成功，阶层跃迁指日可待。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            );
        
        case 'radar':
             return (
                 <div className="flex flex-col h-full bg-[#FDF4FF] overflow-hidden font-sans pt-8">
                    <div className="p-4 space-y-4 overflow-y-auto no-scrollbar h-full">
                         <div className="bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#A855F7]"></div>
                             <div className="flex items-center gap-2 mb-3">
                                <span className="text-xl">🧘</span>
                                <span className="text-[#6B21A8] font-bold text-base whitespace-nowrap">性格画像</span>
                            </div>
                             <h4 className="text-xs font-bold text-gray-900 mb-1 whitespace-nowrap">MBTI & 星座</h4>
                             <p className="text-xs text-gray-600 mb-3 font-medium whitespace-nowrap">ENTP (辩论家) / 射手座</p>
                             <h4 className="text-xs font-bold text-gray-900 mb-1 whitespace-nowrap">理由</h4>
                             <p className="text-[10px] text-gray-600 leading-relaxed text-justify">
                                 表面是热衷社交、拥抱世界的E人，但分享地下丝绒的音乐和深夜行业复盘，暴露了他需要用独处来消化信息的I人内核。他不是真的爱热闹，他爱的是热闹给他的素材和灵感。
                             </p>
                         </div>

                         <div className="bg-white rounded-2xl p-5 shadow-sm border border-red-50 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]"></div>
                             <div className="flex items-center gap-2 mb-3">
                                <span className="text-xl">⚠️</span>
                                <span className="text-[#991B1B] font-bold text-base whitespace-nowrap">渣男/女风险雷达</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-gray-700">风险指数</span>
                                <div className="flex gap-0.5 text-[#FBBF24]">
                                    <Star fill="#FBBF24" strokeWidth={0} size={16} />
                                    <Star fill="#FBBF24" strokeWidth={0} size={16} />
                                    <Star fill="#FBBF24" strokeWidth={0} size={16} />
                                    <Star fill="#FBBF24" strokeWidth={0} size={16} />
                                    <Star fill="#E5E7EB" strokeWidth={0} size={16} />
                                </div>
                            </div>
                            <h4 className="text-xs font-bold text-gray-900 mb-1 whitespace-nowrap">判词</h4>
                             <p className="text-[10px] text-gray-600 leading-relaxed text-justify">
                                 顶级时间管理大师，鱼塘里的鱼都是经过A/B测试的。他的生活是一场流动的盛宴，不断邂逅新人，收集新的故事。他擅长制造短期、高浓度的亲密感，但转头就会奔赴下一场，因为稳定对他来说等于无聊。
                             </p>
                         </div>
                    </div>
                 </div>
             );
        
        case 'strategy':
            return (
                 <div className="flex flex-col h-full bg-[#FDF4FF] overflow-hidden font-sans pt-8">
                    <div className="p-4 space-y-4 overflow-y-auto no-scrollbar h-full">
                         {/* Red/Black List */}
                         <div className="bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#EAB308]"></div>
                             <div className="flex items-center gap-2 mb-3">
                                <span className="text-xl">⚡️</span>
                                <span className="text-[#854D0E] font-bold text-base whitespace-nowrap">攻略红黑榜</span>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[#16A34A] font-bold text-xs shrink-0 whitespace-nowrap flex items-center gap-1">
                                        √ 红榜：做什么最加分
                                    </span>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 leading-snug">聊他分享的AI文章，但提出一个比他更刁钻的观点，让他眼前一亮。</p>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 leading-snug">约他去一个他没去过的小众户外地点，比如浆板探洞，为他提供新的“体验素材”。</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-gray-100"></div>
                                <div className="space-y-2">
                                    <span className="text-[#DC2626] font-bold text-xs shrink-0 whitespace-nowrap flex items-center gap-1">
                                        × 黑榜：做什么会瞬间下头
                                    </span>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 leading-snug">追问他未来的职业规划，什么时候买房，什么时候稳定下来。</p>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1 shrink-0"></div>
                                        <p className="text-[10px] text-gray-600 leading-snug">表现出对科技、旅行、音乐一无所知，只会聊明星八卦和家长里短。</p>
                                    </div>
                                </div>
                            </div>
                         </div>

                         {/* Icebreakers */}
                         <div className="bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#16A34A]"></div>
                             <div className="flex items-center gap-2 mb-3">
                                <span className="text-xl">💭</span>
                                <span className="text-[#14532D] font-bold text-base whitespace-nowrap">破冰话题</span>
                            </div>
                             <div className="space-y-2">
                                 <div className="bg-gray-50 p-2.5 rounded-lg text-[10px] text-gray-700 leading-relaxed border border-gray-100">
                                     "看你去了阿苏，那边的火山灰还好吗？有没有去草千里看马？"
                                 </div>
                                 <div className="bg-gray-50 p-2.5 rounded-lg text-[10px] text-gray-700 leading-relaxed border border-gray-100">
                                     "你分享的那个ChatGPT Agent文章很有意思，你觉得它最先能落地的商业场景是啥？"
                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>
            );

        default:
            return null;
    }
  }

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[520px] w-[290px] shadow-2xl flex flex-col overflow-hidden transform transition-all hover:scale-[1.01]">
      <div className="w-[100px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      
      {/* Screen Content */}
      <div className="bg-white h-full w-full overflow-hidden font-sans">
        {renderScreenContent()}
      </div>
    </div>
  );
};
