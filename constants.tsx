
import React from 'react';
import { 
  Beaker, 
  Atom, 
  FunctionSquare, 
  Binary, 
  Cpu, 
  Settings, 
  ShieldCheck, 
  FlaskConical, 
  Zap 
} from 'lucide-react';
import { SubjectConfig } from './types';

export const SUBJECTS: SubjectConfig[] = [
  // Core Subjects (Exam 60%, TD 40%)
  { id: 'chimie', name: 'Chimie', nameAr: 'كيمياء', coeff: 3, type: 'core', icon: 'Beaker' },
  { id: 'physics', name: 'Physics', nameAr: 'فيزياء', coeff: 3, type: 'core', icon: 'Atom' },
  { id: 'algebre', name: 'Algèbre', nameAr: 'جبر', coeff: 2, type: 'core', icon: 'FunctionSquare' },
  { id: 'analyse', name: 'Analyse', nameAr: 'تحليل', coeff: 3, type: 'core', icon: 'Binary' },
  
  // Standard Subjects (Exam 100%)
  { id: 'info', name: 'Informatique', nameAr: 'إعلام آلي', coeff: 2, type: 'standard', icon: 'Cpu' },
  { id: 'st', name: 'ST', nameAr: 'علوم وتقنيات', coeff: 1, type: 'standard', icon: 'Settings' },
  { id: 'ethics', name: 'Ethics', nameAr: 'أخلاقيات', coeff: 1, type: 'standard', icon: 'ShieldCheck' },
  { id: 'tp_chimie', name: 'TP Chimie', nameAr: 'أعمال مخبرية كيمياء', coeff: 1, type: 'standard', icon: 'FlaskConical' },
  { id: 'tp_physics', name: 'TP Physics', nameAr: 'أعمال مخبرية فيزياء', coeff: 1, type: 'standard', icon: 'Zap' },
];

export const TOTAL_COEFF = SUBJECTS.reduce((acc, s) => acc + s.coeff, 0);

export const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Beaker': return <Beaker className="w-6 h-6" />;
    case 'Atom': return <Atom className="w-6 h-6" />;
    case 'FunctionSquare': return <FunctionSquare className="w-6 h-6" />;
    case 'Binary': return <Binary className="w-6 h-6" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'Settings': return <Settings className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    default: return <Settings className="w-6 h-6" />;
  }
};
