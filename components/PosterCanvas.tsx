import React, { useRef } from 'react';
import { PosterConfig, PosterVariantType } from '../types';
import { PhoneMockup } from './PhoneMockup';
import { Download } from 'lucide-react';
import { toPng } from 'html-to-image';

interface PosterCanvasProps {
  config: PosterConfig;
  onDownloadStart?: () => void;
  onDownloadEnd?: () => void;
}

export const PosterCanvas: React.FC<PosterCanvasProps> = ({ config, onDownloadStart, onDownloadEnd }) => {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!posterRef.current) return;
    
    if (onDownloadStart) onDownloadStart();

    try {
      // Small delay to ensure styles are ready if needed, though usually not strictly necessary for simple DOM
      const dataUrl = await toPng(posterRef.current, { 
          cacheBust: true, 
          pixelRatio: 2, // High resolution
          style: { transform: 'scale(1)' } // Ensure no transform scaling issues
      });
      
      const link = document.createElement('a');
      link.download = `AI-Persona-${config.type}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
      alert('Generating image failed. Please try again.');
    } finally {
        if (onDownloadEnd) onDownloadEnd();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
        {/* The Capture Area */}
        <div className="w-full max-w-[400px] mx-auto perspective-1000 shadow-2xl rounded-[32px] overflow-hidden">
            <div 
                ref={posterRef}
                className={`relative w-full aspect-[3/4.5] bg-gradient-to-br ${config.colorTheme} flex flex-col items-center justify-between p-8`}
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-white opacity-20 blur-[80px] rounded-full mix-blend-overlay"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] bg-purple-300 opacity-20 blur-[80px] rounded-full mix-blend-multiply"></div>

                {/* Header Section */}
                <div className="text-center z-10 w-full mt-10">
                    <h1 className="text-4xl font-black text-gray-900 leading-[1.1] mb-2 tracking-tight drop-shadow-sm whitespace-nowrap">
                        {config.headline}
                    </h1>
                    <p className="text-base text-gray-600 font-medium whitespace-nowrap">
                        {config.subheadline}
                    </p>
                </div>

                {/* Visual Focus: Phone Mockup */}
                <div className="relative z-10 transform translate-y-4 scale-95 origin-bottom">
                    <PhoneMockup type={config.type as PosterVariantType} />
                    
                    {/* Dynamic Floating Badges based on Config */}
                    {config.floatingBadge?.top && (
                        <div className="absolute -right-4 top-24 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/60 animate-bounce duration-[3000ms]">
                            <div className="text-sm font-bold text-gray-800 whitespace-nowrap">{config.floatingBadge.top}</div>
                        </div>
                    )}
                    {config.floatingBadge?.bottom && (
                        <div className="absolute -left-4 bottom-32 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/60 animate-bounce delay-700 duration-[4000ms]">
                             <div className="text-sm font-bold text-gray-800 whitespace-nowrap">{config.floatingBadge.bottom}</div>
                        </div>
                    )}
                </div>

                {/* Footer Brand */}
                <div className="absolute bottom-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                    AI DECODER APP
                </div>

            </div>
        </div>

        {/* Action Button */}
        <button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
        >
            <Download size={18} />
            Download HD Poster
        </button>
    </div>
  );
};