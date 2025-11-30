import React from 'react';
import { Landmark, CreditCard, Gem, CheckCircle2, Building2, RefreshCw, Timer } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'gold',
      icon: <Gem size={40} />,
      title: 'הלוואות משכון זהב',
      description: 'קבל כסף מזומן מיידי תמורת תכשיטי הזהב שלך, ללא צורך במכירתם. הערכה מקצועית במקום ושמירה מאובטחת בכספת.',
      benefits: ['הערכה מיידית', 'ללא בדיקת BDI', 'נשאר בבעלותך'],
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'finance',
      icon: <Landmark size={40} />,
      title: 'פתרונות פיננסים',
      description: 'הפוך את התשלומים הדחויים למזומן עכשיו. פתרונות מימון מתקדמים לפרטיים ועסקים המאפשרים תזרים מזומנים בריא.',
      benefits: ['פריסה רחבה', 'עמלה תחרותית', 'שירות עד הבית'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'credit',
      icon: <CreditCard size={40} />,
      title: 'הלוואות בכרטיסי אשראי',
      description: 'הלוואות חוץ בנקאיות מהירות כנגד מסגרת הכרטיס. תהליך דיגיטלי פשוט ללא בירוקרטיה מיותרת וללא ערבים.',
      benefits: ['עד 60 תשלומים', 'אישור אונליין', 'לכל מטרה'],
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 'assets',
      icon: <Building2 size={40} />,
      title: 'הלוואה כנגד נכסים',
      description: 'פתרון מימון לגיוס סכומים גבוהים כנגד שיעבוד נכס קיים (דירה, רכב או נדל"ן מסחרי) בתנאים נוחים.',
      benefits: ['סכומים גבוהים', 'פריסה ארוכה', 'ריבית אטרקטיבית'],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      id: 'mortgage',
      icon: <RefreshCw size={40} />,
      title: 'מחזור משכנתאות',
      description: 'בדיקה והתאמה של תנאי המשכנתא הקיימת לריביות השוק הנוכחיות. חיסכון משמעותי בהחזר החודשי או הכולל.',
      benefits: ['חיסכון כספי', 'התאמה אישית', 'קיצור תקופה'],
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 'balloon',
      icon: <Timer size={40} />,
      title: 'הלוואות בלון',
      description: 'הלוואת גישור גמישה לתקופה קצרה בה משלמים רק את הריבית, ואת הקרן מחזירים בסוף התקופה.',
      benefits: ['החזר חודשי נמוך', 'פתרון ביניים', 'גמישות מלאה'],
      color: 'bg-rose-50 text-rose-600',
    },
  ];

  const handleWhatsAppClick = (serviceTitle: string) => {
    const text = `היי, אשמח לקבל פרטים נוספים לגבי ${serviceTitle}`;
    window.open(`https://wa.me/972507474458?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">השירותים שלנו</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-800 text-lg mb-4 font-medium">
            אנו מציעים מגוון מסלולי מימון המותאמים אישית לצרכים שלך, תוך הקפדה על שקיפות מלאה ותנאים הוגנים.
          </p>
          <p className="text-xl font-bold text-blue-700 bg-blue-50 inline-block px-6 py-2 rounded-full border border-blue-100">
            ליווי צמוד לאורך כל התהליך
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 transition-transform group-hover:scale-110 ${service.color.replace('text', 'bg')}`}></div>
              
              <div className={`inline-flex p-4 rounded-2xl mb-6 w-fit ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-800 mb-8 leading-relaxed flex-grow font-medium">
                {service.description}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-900 font-bold">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100/80">
                <button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="text-blue-700 font-black hover:text-blue-800 flex items-center gap-2 group/link bg-transparent border-none cursor-pointer p-0 text-lg"
                >
                  קבל פרטים נוספים
                  <span className="group-hover/link:-translate-x-1 transition-transform">&larr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};