import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'check', // default loan type
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Map loan types to Hebrew for the message
    const loanTypes: Record<string, string> = {
      'check': 'הלוואה בשקים',
      'gold': 'משכון זהב',
      'credit': 'הלוואת אשראי',
      'business': 'הלוואה עסקית'
    };
    
    const typeLabel = loanTypes[formData.type] || formData.type;

    // Construct formatted WhatsApp message
    const text = `*פנייה חדשה מהאתר*%0A` +
                 `----------------` +
                 `%0A*שם:* ${formData.name}` +
                 `%0A*טלפון:* ${formData.phone}` +
                 `%0A*סוג הלוואה:* ${typeLabel}` +
                 `%0A*הודעה:* ${formData.message || 'ללא הודעה'}`;
    
    // Target phone number: 0544491815 -> 972544491815 (New number for forms)
    const whatsappUrl = `https://wa.me/972544491815?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success state in UI
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', type: 'check', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'On Finance',
          text: 'On Finance - פתרונות מימון מתקדמים, הלוואות בשקים, אשראי ומשכון זהב.',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('הקישור הועתק ללוח!');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">בואו נדבר תכל'ס</h2>
              <p className="text-slate-600 text-lg mb-12">
                הצוות המקצועי שלנו זמין עבורך לכל שאלה. השאירו פרטים ונחזור אליכם בהקדם האפשרי עם הצעה אטרקטיבית.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl text-blue-600 shadow-sm border border-slate-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">טלפונים ליצירת קשר</h4>
                    <div className="flex flex-col gap-1 items-start">
                      <a href="tel:0507474458" dir="ltr" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-lg">050-7474458</a>
                      <a href="tel:0544491815" dir="ltr" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-lg">054-4491815</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl text-blue-600 shadow-sm border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">דוא"ל</h4>
                    <a href="mailto:onfinanceltd@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">onfinanceltd@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl text-blue-600 shadow-sm border border-slate-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">כתובת</h4>
                    <p className="text-slate-600">בת ים</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <button 
                    onClick={handleShare}
                    className="flex items-start gap-4 w-full text-right group"
                  >
                    <div className="bg-white p-3 rounded-xl text-blue-600 shadow-sm border border-slate-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <Share2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">שתף כרטיס ביקור</h4>
                      <p className="text-slate-600">לחץ לשיתוף האתר עם חברים</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="contact-form" className="scroll-mt-32 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 overflow-hidden">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">הפנייה נשלחה לוואטסאפ!</h3>
                  <p className="text-slate-600">נציג מטעמנו יצור איתך קשר בהקדם.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">
                    שלח פנייה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">טופס יצירת קשר מהיר</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">שם מלא</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="ישראל ישראלי"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">טלפון נייד</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="050-0000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">סוג הלוואה מבוקש</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="check">הלוואה בשקים</option>
                      <option value="gold">משכון זהב</option>
                      <option value="credit">הלוואת אשראי</option>
                      <option value="business">הלוואה עסקית</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">הודעה (אופציונלי)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="פרטים נוספים שיעזרו לנו..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'שולח...' : 'שלח בקשה לבדיקה'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                  
                  <p className="text-xs text-center text-slate-400">
                    בלחיצה על השליחה אני מסכים לתנאי השימוש ומדיניות הפרטיות
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}