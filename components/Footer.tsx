import React from 'react';
import { Wallet, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* About Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Wallet size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                On<span className="text-blue-600">Finance</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              חברתנו מתמחה במתן פתרונות מימון חוץ בנקאיים מתקדמים. אנו מאמינים בשקיפות, הגינות ומהירות, ומספקים שירות לאלפי לקוחות מרוצים.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">השירותים שלנו</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">פתרונות פיננסים</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">משכון זהב</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">הלוואות בכרטיסי אשראי</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">הלוואה כנגד נכסים</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">מחזור משכנתאות</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">הלוואות בלון</a></li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">ניווט מהיר</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">דף הבית</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">יתרונות</a></li>
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">מחשבון הלוואה</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">צור קשר</a></li>
            </ul>
          </div>

          {/* Contact/Hours Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">שעות פעילות</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>א' - ה':</span>
                <span className="text-white">08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>יום שישי:</span>
                <span className="text-white">08:30 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>יום שבת:</span>
                <span className="text-white">סגור</span>
              </li>
              <li className="pt-6 flex gap-4">
                <a href="https://www.facebook.com/share/17P6QdUjFv/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Twitter size={20} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-center md:text-right flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} On Finance. כל הזכויות שמורות.
          </div>
          <div className="text-slate-500 text-xs max-w-2xl text-center md:text-left">
            * אי עמידה בפירעון ההלוואה עלול לגרור חיוב בריבית פיגורים והליכי הוצאה לפועל. מתן ההלוואה בכפוף לשיקול דעת החברה ולתנאיה.
          </div>
        </div>
      </div>
    </footer>
  );
};