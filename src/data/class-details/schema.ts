export interface ClassProgression {
  headers: string[];
  rows: string[][];
}

export interface ClassBasics {
  hitPoints: string | null;
  trainedSkills: string | null;
  classSkills: string | null;
  bonusTalents: string | null;
}

export interface ClassContentTable {
  headers: string[];
  rows: string[][];
}

export interface ClassSection {
  title: string | null;
  level: number;
  paragraphs: string[];
  tables: ClassContentTable[];
}

export interface ClassTalent {
  id: string;
  name: string;
  prerequisite: string | null;
  prerequisiteLevel: number | null;
  paragraphs: string[];
}

export interface ClassDetail {
  slug: string;
  name: string;
  family: string;
  sourceDocId: string;
  sourceTitle: string;
  status: 'complete' | 'wip' | 'incomplete_source';
  editorialNotes: string[];
  basics: ClassBasics;
  progression: ClassProgression;
  sections: ClassSection[];
  classTalents: ClassTalent[];
}
