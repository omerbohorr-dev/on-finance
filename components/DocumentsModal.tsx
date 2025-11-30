import React, { useState } from 'react';
import { X, Upload, Check, FileText } from 'lucide-react';

interface DocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentsModal: React.FC<DocumentsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const text = `*שליחת מסמכים לבדיקת זכאות*%0A` +
                 `----------------` +
                 `%0A*שם מלא:* ${formData.name}` +
                 `%0A*טלפון:* ${formData.phone}` +
                 `%0A%0A*המשך תהליך:* נא לצרף את תמונות המסמכים כאן בצ'אט.`;
    
    const whatsappUrl = `https://wa.me/972544491815?text=${text}`;

    // Simulate processing time
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', phone: '' });
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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

        {!isSuccess ? (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Upload size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">העלאת מסמכים</h3>
              <p className="text-slate-500 text-sm">נא לצרף את המסמכים הנדרשים לבדיקת זכאות מהירה</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">שם מלא</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-all" 
                    placeholder="שם מלא" 
                  />
                </div>
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-slate-700">טלפון</label>
                   <input 
                    required 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-all" 
                    placeholder="050-0000000" 
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <FileInput label="תעודת זהות + ספח" required />
                <FileInput label="רשיון נהיגה (אם יש)" />
                <FileInput label="דפי חשבון (חודשיים אחורה)" required />
                <FileInput label="תלוש משכורת אחרון" required />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-700 mb-2">
                * בלחיצה על "המשך לוואטסאפ" תועבר לצ'אט לשליחת צילומי המסמכים.
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl mt-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'מעבד נתונים...' : 'המשך לשליחה בוואטסאפ'}
                {!isSubmitting && <Upload size={18} />}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">הועברת לוואטסאפ!</h3>
            <p className="text-slate-600">אנא צרף את המסמכים בצ'אט שנפתח.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FileInput: React.FC<{ label: string; required?: boolean }> = ({ label, required }) => (
  <div className="relative group">
    <label className="flex items-center justify-between p-3 border border-dashed border-slate-300 rounded-xl hover:border-blue-600 hover:bg-blue-50/30 cursor-pointer transition-all">
      <div className="flex items-center gap-3">
        <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-100 transition-colors">
          <FileText size={18} />
        </div>
        <div className="text-right">
            <span className="text-sm font-bold text-slate-700 block">
            {label} {required && <span className="text-red-500">*</span>}
            </span>
            <span className="text-[10px] text-slate-400">PDF, JPG, PNG</span>
        </div>
      </div>
      <div className="mr-2">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg group-hover:bg-blue-100 transition-colors">
              בחר קובץ
          </span>
      </div>
      <input type="file" className="hidden" required={required} accept="image/*,.pdf" />
    </label>
  </div>
);