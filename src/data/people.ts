export interface CareerStep {
  period: string;
  role: string;
  org: string;
}

export interface Person {
  name: string;
  nameKr: string;
  note?: string;
  github?: string;
}

export const professor = {
  name: 'Sangkeum Lee',
  nameKr: '이상금',
  title: 'Associate Professor',
  photo: '/assets/people/prof-lee.jpg',
  scholar: 'https://scholar.google.com/citations?user=HaZWX-AAAAAJ&hl=en',
  github: 'https://github.com/ecoailab',
  career: [
    {
      period: '2026.04 — Present',
      role: 'Associate Professor',
      org: 'Hanbat National University, Department of Computer Engineering',
    },
    {
      period: '2023.09 — 2026.03',
      role: 'Assistant Professor',
      org: 'Hanbat National University, Department of Computer Engineering',
    },
    {
      period: '2021.03 — 2023.08',
      role: 'Senior Researcher',
      org: 'ETRI, Energy & Environment ICT Research Department',
    },
    {
      period: '2020.09 — 2021.02',
      role: 'Post-Doc',
      org: 'KAIST, Mechanical Engineering Research Institute',
    },
    {
      period: '2018.03 — 2020.08',
      role: 'Ph.D.',
      org: 'KAIST, CCS Graduate School of Green Transportation',
    },
    {
      period: '2016.09 — 2018.02',
      role: 'M.S.',
      org: 'KAIST, CCS Graduate School of Green Transportation',
    },
    {
      period: '2009.03 — 2016.08',
      role: 'B.S.',
      org: 'Korea University, Department of Electronics and Information Engineering',
    },
  ] satisfies CareerStep[],
  lectures: [
    { name: 'Machine Learning', terms: '2023-2, 2024-2' },
    { name: 'Information Security', terms: '2023-2, 2024-2, 2025-2, 2026-1' },
    { name: 'Data Science', terms: '2024-1, 2025-1, 2026-1' },
    { name: 'Block Chain', terms: '2024-1, 2025-1, 2026-1' },
    { name: 'Data Mining', terms: '2024-2, 2026-1' },
    { name: 'Big Data Analysis', terms: '2025-2' },
  ],
  service: [
    'Reviewing Editor, Springer Nature Reviewer Communities (2025 – Present)',
    'Program Committee, 16th Symposium on Educational Advances in Artificial Intelligence (EAAI-2026), co-located with AAAI-2026',
    'Committee, 3rd Big Data Committee, Seo-gu, Daejeon Metropolitan City Government (2025–2027)',
    'Committee, National Heritage R&D Review, Cultural Heritage Administration (2025–2027)',
    'Reviewer for 60+ journals and conferences — IEEE Trans. series, Applied Energy, Energy, AAAI, IJCAI, ICML, NeurIPS and more',
  ],
} as const;

export const msStudents: Person[] = [
  { name: 'Junyeon Kim', nameKr: '김준연', note: 'current: SK shieldus' },
  { name: 'Minu Baek', nameKr: '백민우', github: 'https://github.com/dovi0129' },
  { name: 'Gihun Gil', nameKr: '길기훈', github: 'https://github.com/mark4653' },
  { name: 'Junseong Park', nameKr: '박준성', note: 'Int. B.S.–M.S.', github: 'https://github.com/junseong00' },
  { name: 'Beomdo Park', nameKr: '박범도', note: 'Int. B.S.–M.S.', github: 'https://github.com/beomdo-park' },
  { name: 'Hyeonseok Jang', nameKr: '장현석', note: 'Int. B.S.–M.S.', github: 'https://github.com/seokchu' },
  { name: 'Yeojin Jang', nameKr: '장여진', github: 'https://github.com/jyeoj251' },
  { name: 'Minsung Jung', nameKr: '정민성', note: 'Int. B.S.–M.S.', github: 'https://github.com/Polyestere' },
  { name: 'Jenilyn Park', nameKr: '박제니린', github: 'https://github.com/jenipark' },
];

export const undergradStudents: Person[] = [
  { name: 'Seoyoung Lee', nameKr: '이서영', github: 'https://github.com/2seoyoungg' },
  { name: 'Jio Yoo', nameKr: '유지오', github: 'https://github.com/dbwldh12' },
  { name: 'Juhui Kim', nameKr: '김주희', github: 'https://github.com/Kjh753' },
  { name: 'Dowon Noh', nameKr: '노도원', github: 'https://github.com/20252710' },
];

export interface AlumniGroup {
  year: number;
  members: string;
  note: string;
}

export const alumni: AlumniGroup[] = [
  {
    year: 2026,
    members: 'Woohyeon Kwon (권우현), Jisu Kang (강지수), Byounghoon Son (손병훈)',
    note: 'undergraduate',
  },
  {
    year: 2025,
    members:
      'Naeun Yoon (윤나은), Seungju Lee (이승주), Juryeong Kim (김주령), Daeun Ahn (안다은), Namseok Koo (구남석), Suna Park (박선아), Jiyun Seo (서지윤), Donggeon Yu (유동건), Jeongseop Lee (이정섭), Harin Jang (장하린)',
    note: 'undergraduate',
  },
  {
    year: 2024,
    members: 'Beomhee Jung (정범희), Nayoung Jin (진나영)',
    note: 'undergraduate',
  },
];
