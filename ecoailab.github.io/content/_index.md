---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2024-01-01
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: hero
    content:
      title: 'EcoAI Lab'
      text: |
        Eyes on the sky: Innovate for the future
        
        **한밭대학교 EcoAI 연구실**
        
        환경에너지, 스마트팩토리/홈, 센서(IoT, 보안) 기술과 
        양자컴퓨팅, 강화학습, 에이전트, 빅데이터분석 기반 최적화 솔루션을 연구합니다.
      primary_action:
        text: 연구 소개
        url: /research
        icon: rocket-launch
      secondary_action:
        text: 연락처
        url: /contact
    design:
      background:
        gradient_end: '#0f172a'
        gradient_start: '#134e4a'
        text_color_light: true

  - block: markdown
    content:
      title: '🎯 연구 분야'
      subtitle: 'Research Areas'
      text: |
        ### 환경에너지 (Environmental Energy)
        - 스마트팩토리 에너지 관리 및 최적화
        - 스마트홈 에너지 효율화 시스템
        - 재생에너지 통합 및 예측
        
        ### 센서 및 IoT (Sensors & IoT)
        - IoT 센서 네트워크 및 데이터 수집
        - 사이버보안 및 물리보안 시스템
        - 에지 컴퓨팅 및 실시간 처리
        
        ### 인공지능 기술 (AI Technologies)
        - 양자컴퓨팅 및 양자 머신러닝
        - 강화학습 기반 최적화
        - 멀티에이전트 시스템
        - 빅데이터 분석 및 예측 모델링
    design:
      columns: '1'

  - block: collection
    id: research
    content:
      title: 진행 중인 프로젝트
      subtitle: 'Current Projects'
      filters:
        folders:
          - projects
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: publications
    content:
      title: 주요 논문
      subtitle: 'Featured Publications'
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation
      columns: 1

  - block: markdown
    content:
      title: '👥 연구실 구성원'
      subtitle: 'Lab Members'
      text: |
        ### 교수 (Professor)
        **이상금 (Sangkeum Lee)**  
        한밭대학교 전자공학과
        
        ### 학생들 (Students)
        - 석박사과정 및 학부 연구생들과 함께 연구를 진행하고 있습니다.
        
        [자세한 멤버 정보 보기](/people)
    design:
      columns: '1'

  - block: markdown
    content:
      title: '📞 연락처'
      subtitle: 'Contact Us'
      text: |
        - **Email**: sangkeum@hanbat.ac.kr
        - **Tel**: +82 42 821 1205
        - **Room**: N4 - 416, 한밭대학교
        - **Address**: 대전광역시 유성구 동서대로 125
        
        **산학협력 및 인턴십 문의 환영합니다!**
    design:
      columns: '1'

  - block: cta-card
    content:
      title: EcoAI Lab과 함께 미래를 만들어가세요
      text: |
        환경과 AI 기술의 융합을 통해 지속가능한 미래를 만들어갑니다.
        
        우리 연구실은 열정적인 학생들을 항상 환영합니다!
      button:
        text: 연구실 문의하기
        url: mailto:sangkeum@hanbat.ac.kr
    design:
      card:
        css_class: 'bg-primary-300 dark:bg-primary-700'
---
