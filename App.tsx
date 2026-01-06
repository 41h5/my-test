
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SubjectCard from './components/SubjectCard';
import ResultPanel from './components/ResultPanel';
import { SUBJECTS, TOTAL_COEFF } from './constants';
import { GradesState } from './types';

const INITIAL_GRADES: GradesState = SUBJECTS.reduce((acc, sub) => {
  acc[sub.id] = sub.type === 'core' ? { exam: 0, td: 0 } : { exam: 0 };
  return acc;
}, {} as GradesState);

const App: React.FC = () => {
  const [grades, setGrades] = useState<GradesState>(() => {
    const saved = localStorage.getItem('yasser_grades');
    return saved ? JSON.parse(saved) : INITIAL_GRADES;
  });
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('yasser_grades', JSON.stringify(grades));
  }, [grades]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleGradeChange = (id: string, type: 'exam' | 'td', value: number) => {
    setGrades(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value
      }
    }));
  };

  const resetGrades = () => {
    if (confirm('هل أنت متأكد من مسح جميع النقاط؟')) {
      setGrades(INITIAL_GRADES);
    }
  };

  const finalAverage = useMemo(() => {
    let totalWeightedSum = 0;
    SUBJECTS.forEach(sub => {
      const g = grades[sub.id];
      const subjectGrade = sub.type === 'core'
        ? (g.exam * 0.6 + (g.td || 0) * 0.4)
        : g.exam;
      totalWeightedSum += subjectGrade * sub.coeff;
    });
    return totalWeightedSum / TOTAL_COEFF;
  }, [grades]);

  return (
    <div className="min-h-screen pb-32 transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SUBJECTS.map((sub) => (
            <SubjectCard
              key={sub.id}
              config={sub}
              grades={grades[sub.id]}
              onChange={handleGradeChange}
            />
          ))}
        </div>

        <ResultPanel average={finalAverage} onReset={resetGrades} />

        <footer className="text-center py-10 text-gray-400 dark:text-gray-600 text-sm">
          <p>ماتنساش تدعي لياسر 🚀</p>
          <p className="mt-1">ياسر يحسب لك معدلك © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
