import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialSubject = 'check' }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: initialSubject,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Map loan types for the message
    const loanTypes: Record<string, string> = {
      'check': 'הלוואה בשקים',
      'gold': 'משכון זהב',
      'credit': 'הלוואת אשראי',
      'business': 'הלוואה עסקית'
    };
    
    const typeLabel = loanTypes[formData.type] || formData.type;

    // Construct WhatsApp message
    const text = `*פנייה חדשה מהאתר - קבלת פרטים*%0A` +
                 `----------------` +
                 `%0A*שם:* ${formData.name}` +
                 `%0A*טלפון:* ${formData.phone}` +
                 `%0A*נושא:* ${typeLabel}` +
                 `%0A*הודעה:* ${formData.message || 'ללא הודעה'}`;
    
    // Target phone number updated to 050-7474458
    const whatsappUrl = `https://wa.me/972507474458?text=${text}`;

    // Simulate delay for UX then redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset and close after a delay
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', type: 'check', message: '' });
        onClose();
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300 hover:rotate-90 z-10"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">הועברת לוואטסאפ!</h3>
            <p className="text-slate-600">אנא שלח את ההודעה בצ'אט שנפתח.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Send size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">יצירת קשר מהיר</h3>
              <p className="text-slate-500 text-sm">השאר פרטים ונחזור אליך תוך זמן קצר</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">שם מלא</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 outline-none transition-all"
                  placeholder="ישראל ישראלי"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">טלפון נייד</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 outline-none transition-all"
                  placeholder="050-0000000"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">נושא הפנייה</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 outline-none transition-all"
                >
                  <option value="check">הלוואה בשקים</option>
                  <option value="gold">משכון זהב</option>
                  <option value="credit">הלוואת אשראי</option>
                  <option value="business">הלוואה עסקית</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">הודעה</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 outline-none transition-all"
                  placeholder="פרטים נוספים..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? 'מעביר לוואטסאפ...' : 'המשך לשליחה בוואטסאפ'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};