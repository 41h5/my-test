
export type SubjectType = 'core' | 'standard';

export interface SubjectConfig {
  id: string;
  name: string;
  nameAr: string;
  coeff: number;
  type: SubjectType;
  icon?: string;
}

export interface SubjectGrades {
  exam: number;
  td?: number;
}

export interface GradesState {
  [subjectId: string]: SubjectGrades;
}
