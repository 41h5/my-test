
import React from 'react';
import { SubjectConfig, SubjectGrades } from '../types';
import { getIcon } from '../constants';

interface SubjectCardProps {
  config: SubjectConfig;
  grades: SubjectGrades;
  onChange: (subjectId: string, type: 'exam' | 'td', value: number) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ config, grades, onChange }) => {
  const handleInputChange = (type: 'exam' | 'td', e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val)) val = 0;
    if (val < 0) val = 0;
    if (val > 20) val = 20;
    onChange(config.id, type, val);
  };

  const subjectAverage = config.type === 'core' 
    ? (grades.exam * 0.6 + (grades.td || 0) * 0.4)
    : grades.exam;

  return (
    <div className="glass p-5 rounded-2xl shadow-lg border border-white/20 transition-all hover:scale-[1.02] duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
          {getIcon(config.icon)}
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">{config.nameAr}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{config.name} • معامل {config.coeff}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 pr-1">نقطة الامتحان (Exam)</label>
          <input
            type="number"
            min="0"
            max="20"
            step="0.01"
            value={grades.exam || ''}
            placeholder="0.00"
            onChange={(e) => handleInputChange('exam', e)}
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {config.type === 'core' && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 pr-1">نقطة القسم (TD)</label>
            <input
              type="number"
              min="0"
              max="20"
              step="0.01"
              value={grades.td || ''}
              placeholder="0.00"
              onChange={(e) => handleInputChange('td', e)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">معدل المادة:</span>
        <span className={`text-lg font-bold ${subjectAverage >= 10 ? 'text-green-600' : 'text-red-500'}`}>
          {subjectAverage.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default SubjectCard;
