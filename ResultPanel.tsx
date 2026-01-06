
import React from 'react';
// Added GraduationCap to imports
import { Trophy, Frown, Sparkles, RefreshCcw, GraduationCap } from 'lucide-react';

interface ResultPanelProps {
  average: number;
  onReset: () => void;
}

const ResultPanel: React.FC<ResultPanelProps> = ({ average, onReset }) => {
  const isPassing = average >= 10;
  
  const getMessage = () => {
    if (average >= 16) return { text: 'ممتاز! واصل تألقك وطموحك العالي.', icon: <Sparkles className="text-yellow-400" /> };
    if (average >= 14) return { text: 'جيد جداً! عمل رائع ومجهود يذكر فيشكر.', icon: <Trophy className="text-yellow-400" /> };
    if (average >= 12) return { text: 'جيد! أداء مستقر وناجح.', icon: <Trophy className="text-blue-400" /> };
    if (average >= 10) return { text: 'ناجح! مبروك، يمكنك التحسن أكثر في المستقبل.', icon: <GraduationCap className="text-green-400" /> };
    if (average > 0) return { text: 'معوض خير! لا تستسلم، الفرصة القادمة أفضل.', icon: <Frown className="text-red-400" /> };
    return { text: 'ابدأ بإدخال نقاطك لمعرفة النتيجة.', icon: null };
  };

  const message = getMessage();

  return (
    <div className="sticky bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl z-40">
      <div className={`glass p-6 rounded-3xl shadow-2xl border-2 transition-colors duration-500 ${isPassing ? 'border-green-400/30' : 'border-red-400/30'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`relative w-24 h-24 rounded-full flex items-center justify-center border-4 transition-all duration-700 ${isPassing ? 'border-green-500 scale-110' : 'border-red-500'}`}>
              <span className={`text-3xl font-black ${isPassing ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {average.toFixed(2)}
              </span>
              <div className={`absolute -inset-2 rounded-full opacity-20 blur-lg ${isPassing ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
            
            <div className="text-right">
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 justify-end">
                <span>معدلك العام</span>
                {message.icon}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{message.text}</p>
            </div>
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-all active:scale-95 group"
          >
            <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>مسح الكل</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
