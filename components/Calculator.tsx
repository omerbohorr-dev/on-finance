import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(24);
  // Interest rate is now fixed at 10% monthly
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    // Calculation Logic
    const p = amount;
    const r = 0.10; // 10% Fixed Monthly Interest
    const n = months;
    
    let payment = 0;
    
    // Safety check for inputs
    if (p > 0 && n > 0) {
        // Amortization Formula
        payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    if (isNaN(payment) || !isFinite(payment)) {
        payment = 0;
    }

    setMonthlyPayment(payment);
    setTotalInterest((payment * n) - p > 0 ? (payment * n) - p : 0);
  }, [amount, months]);

  const handleInputChange = (setter: (val: number) => void, value: string) => {
      const num = parseFloat(value);
      if (!isNaN(num) && num >= 0) {
          setter(num);
      } else if (value === '') {
          // Allow empty string for better UX while typing
          setter(0);
      }
  };

  const handleApplyClick = () => {
    const text = `*בקשה חדשה מהמחשבון באתר*%0A` +
                 `----------------` +
                 `%0A*סכום מבוקש:* ₪${amount.toLocaleString()}` +
                 `%0A*תקופה:* ${months} חודשים` +
                 `%0A*החזר חודשי משוער:* ₪${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}` +
                 `%0A%0Aאשמח לקבל פרטים נוספים ובדיקת זכאות.`;

    const whatsappUrl = `https://wa.me/972507474458?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
        
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 ring-1 ring-slate-100">
          <div className="grid md:grid-cols-2">
            
            {/* Input Section - First in DOM means Right side in RTL */}
            <div className="p-8 md:p-12 space-y-10 flex flex-col justify-center">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">מחשבון בקשת הלוואה</h3>
                <p className="text-slate-600">
                  אנא הזן את הסכום המבוקש ואת תקופת ההחזר הרצויה לבדיקת התכנות.
                </p>
              </div>

              {/* Amount Input */}
              <div className="space-y-3">
                <label className="flex justify-between font-bold text-slate-700 text-lg">
                  <span>סכום ההלוואה</span>
                  <span className="text-blue-600">₪{amount.toLocaleString()}</span>
                </label>
                <input
                    type="number"
                    value={amount === 0 ? '' : amount}
                    onChange={(e) => handleInputChange(setAmount, e.target.value)}
                    className="w-full px-4 py-4 text-lg border border-slate-200 bg-slate-50 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none font-bold text-slate-900 transition-all"
                    placeholder="הכנס סכום"
                />
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium px-1">
                  <span>₪1,000</span>
                  <span>₪500,000</span>
                </div>
              </div>

              {/* Months Input */}
              <div className="space-y-3">
                <label className="flex justify-between font-bold text-slate-700 text-lg">
                    <span>תקופת החזר (חודשים)</span>
                    <span className="text-blue-600">{months} חודשים</span>
                </label>
                <div className="flex gap-4">
                    <input
                        type="number"
                        value={months === 0 ? '' : months}
                        onChange={(e) => handleInputChange(setMonths, e.target.value)}
                        className="w-32 px-4 py-4 text-lg border border-slate-200 bg-slate-50 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none font-bold text-slate-900 transition-all text-center"
                    />
                     <input
                      type="range"
                      min="3"
                      max="120"
                      step="1"
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="flex-1 h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 self-center"
                    />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-medium px-1">
                  <span>3 חודשים</span>
                  <span>120 חודשים</span>
                </div>
              </div>

            </div>

            {/* Result Section - Second in DOM means Left side in RTL */}
            <div className="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                    <h4 className="text-xl font-medium text-slate-300 mb-2">תוצאת הבקשה המשוערת</h4>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 text-center mb-8 shadow-xl">
                    <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold block mb-3">החזר חודשי משוער</span>
                    <div className="text-5xl md:text-6xl font-black text-blue-400 tracking-tight drop-shadow-lg">
                    ₪{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                </div>
                
                <button 
                  onClick={handleApplyClick}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                >
                    <span>הגש בקשה עכשיו</span>
                    <Send size={20} className="mt-1" />
                </button>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>בדיקה ללא התחייבות וללא עלות</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};