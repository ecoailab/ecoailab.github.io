export const site = {
  name: 'EcoAI Lab',
  tagline: 'Eyes on the sky: Innovate for the future',
  description:
    'EcoAI Lab at Hanbat National University — AI-driven optimization for energy systems and smart industries: deep reinforcement learning, quantum computing, LLM agents, and anomaly detection for carbon-neutral operations.',
  email: 'sangkeum@hanbat.ac.kr',
  tel: '+82 42 821 1205',
  room: 'N4 - 416',
  affiliation: '한밭대학교 컴퓨터공학과',
  affiliationEn: 'Department of Computer Engineering, Hanbat National University',
  github: 'https://github.com/ecoailab',
  scholar: 'https://scholar.google.com/citations?user=HaZWX-AAAAAJ&hl=en',
  logo: '/assets/brand/ecoai-logo.png',
} as const;

export interface Domain {
  id: string;
  title: string;
  titleKr: string;
  description: string;
  icon: 'factory' | 'home' | 'harbor' | 'quantum' | 'battery' | 'satellite';
}

export const domains: Domain[] = [
  {
    id: 'smart-factory',
    title: 'Smart Factory Energy',
    titleKr: '스마트팩토리',
    description:
      'FEMS, 공정 에너지 최적화, 디지털 트윈 기반 자율 운전으로 탄소중립 제조를 실현합니다.',
    icon: 'factory',
  },
  {
    id: 'smart-home',
    title: 'Smart Home & Building',
    titleKr: '스마트홈/빌딩',
    description:
      'HEMS, 재실 감지, HVAC 강화학습 제어로 주거 에너지를 실시간 진단하고 절감합니다.',
    icon: 'home',
  },
  {
    id: 'port',
    title: 'Port Energy',
    titleKr: '항만',
    description: '항만 에너지관리 시스템(PEMS)과 탄소중립 클러스터 최적화를 연구합니다.',
    icon: 'harbor',
  },
  {
    id: 'quantum-ai',
    title: 'Quantum AI',
    titleKr: '양자AI',
    description:
      '양자 심층강화학습, 하이브리드 양자-고전 알고리즘으로 산업 최적화의 한계를 넘습니다.',
    icon: 'quantum',
  },
  {
    id: 'quantum-battery',
    title: 'Quantum Battery',
    titleKr: '양자배터리',
    description:
      '초고속 충전 양자배터리의 강건 충전 프로토콜과 양자 오류정정 AI 디코더를 개발합니다.',
    icon: 'battery',
  },
  {
    id: 'comm',
    title: 'IoT & Satellite Comm.',
    titleKr: '통신(IoT/위성)',
    description:
      '주파수 도약 동기화, 위성통신, 산업 IoT 네트워크의 지능형 링크 스케줄링을 연구합니다.',
    icon: 'satellite',
  },
];

export interface CoreTech {
  id: string;
  title: string;
  description: string;
}

export const coreTech: CoreTech[] = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description:
      'IBM Q, PennyLane 기반 변분 양자 회로와 하이브리드 양자-고전 프레임워크를 설계하고 실산업 문제에 적용합니다.',
  },
  {
    id: 'drl',
    title: 'Deep Reinforcement Learning',
    description:
      'PPO, SAC, 다단계 커리큘럼 RL로 안전 제약이 있는 연속 공정과 에너지 시스템을 최적 제어합니다.',
  },
  {
    id: 'llm-agent',
    title: 'LLM Agents',
    description:
      'RAG, Function Calling, 구조화 피드백으로 공정 진단과 운전 의사결정을 지원하는 대화형 에이전트를 만듭니다.',
  },
  {
    id: 'anomaly-detection',
    title: 'Anomaly Detection',
    description:
      'LSTM-AE, USAD, Isolation Forest, 물리 제약 인코더로 산업 전력·공정 시계열의 이상을 조기에 탐지합니다.',
  },
  {
    id: 'bigdata',
    title: 'Big Data Analytics',
    description:
      '스마트미터링과 공정 빅데이터의 수집·정제·군집·예측 파이프라인을 구축하고 인사이트를 시각화합니다.',
  },
];

export const stats = [
  { value: 163, suffix: '+', label: 'Publications & Patents' },
  { value: 25, suffix: '', label: 'Research Projects' },
  { value: 99, suffix: '+', label: 'Awards & Activities' },
  { value: 30, suffix: '+', label: 'Collaborating Journals' },
] as const;

export const venues = [
  'Applied Energy',
  'IEEE Access',
  'AAAI',
  'IJCAI',
  'IEEE TII',
  'IEEE TQE',
  'Energy and AI',
  'Scientific Reports',
  'Knowledge-Based Systems',
  'ETRI Journal',
  'Energy and Buildings',
  'IEEE Sensors Journal',
  'Expert Systems with Applications',
  'Desalination',
  'Renewable & Sustainable Energy Reviews',
  'Neurocomputing',
] as const;
