import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenDocuments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDocuments }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          alt="Financial planning"
          className="w-full h-full object-cover"
        />
        {/* Updated overlay to be softer/warmer instead of stark white */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-50/95 to-blue-50/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-sm font-bold shadow-sm">
            <ShieldCheck size={16} />
            <span>מורשה ומפוקח על פי חוק</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900">
            פתרונות מימון <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-blue-700">
              חכמים ומהירים
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
            אנו מספקים מעטפת פיננסית מלאה הכוללת הלוואות על בסיס משכון זהב, ניכיון שקים ופתרונות אשראי חוץ בנקאיים בריבית הוגנת.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/972507474458?text=היי%20אני%20מעוניין%20בבדיקת%20זכאות%20להלוואה"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              <MessageCircle size={20} />
              בדיקת זכאות בוואטסאפ
            </a>
            
            <a
              href="#services"
              className="bg-white/80 backdrop-blur hover:bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-center flex items-center justify-center shadow-sm hover:shadow-md"
            >
              למד עוד עלינו
            </a>
          </div>

          <div className="pt-12 flex items-center gap-8 text-slate-500 text-sm">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">15+</span>
              <span>שנות ניסיון</span>
            </div>
            <div className="w-px h-10 bg-slate-300"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">עד 3</span>
              <span>ימי עסקים לאישור</span>
            </div>
            <div className="w-px h-10 bg-slate-300"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">100%</span>
              <span>דיסקרטיות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};