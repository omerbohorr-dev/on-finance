import React from 'react';
import { Zap, Lock, HeartHandshake, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="text-blue-600" size={32} />,
      title: 'מהירות שיא',
      desc: 'אישור עסקה עד שלושה ימי עסקים והעברת כספים מהירה'
    },
    {
      icon: <Lock className="text-blue-600" size={32} />,
      title: 'דיסקרטיות מלאה',
      desc: 'אנו מתחייבים לשמירה מוחלטת על פרטיות הלקוח והמידע'
    },
    {
      icon: <HeartHandshake className="text-blue-600" size={32} />,
      title: 'יחס אישי',
      desc: 'ליווי צמוד של יועץ פיננסי מהרגע הראשון ועד קבלת הכסף'
    },
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: 'גמישות בתשלומים',
      desc: 'אפשרות לפריסת תשלומים נוחה המותאמת ליכולת ההחזר'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">למה לבחור ב-On Finance?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              בעולם הפיננסי המודרני, אתם צריכים שותף שיודע לזוז מהר כמוכם. 
              אנחנו מבינים שצורך במזומן יכול לצוץ ברגע, ולכן בנינו מערכת יעילה שחוסכת לכם זמן, בירוקרטיה וכאבי ראש.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-slate-700">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                  <p className="text-slate-400 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
              alt="Business agreement" 
              className="relative rounded-3xl shadow-2xl border-4 border-slate-800 w-full object-cover h-[500px]"
            />
            
            <div className="absolute bottom-8 right-8 bg-white text-slate-900 p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
              <p className="font-bold text-lg mb-1">"השירות הכי מהיר שקיבלתי!"</p>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <p className="text-slate-500 text-sm mt-2">- דניאל כהן, לקוח מרוצה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};