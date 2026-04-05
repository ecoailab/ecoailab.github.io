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
        ## Eyes on the sky: Innovate for the future
        
        ### 🌱 한밭대학교 EcoAI 연구실
        
        환경에너지 × 인공지능의 융합을 통해 
        **지속가능한 미래**를 만들어갑니다
        
        🚀 **Quantum Computing** · **Reinforcement Learning** · **IoT/Security**
      primary_action:
        text: 연구 소개
        url: /research
        icon: rocket-launch
      secondary_action:
        text: 논문 보기
        url: /publication
        icon: document-text
    design:
      background:
        gradient_end: '#0c4a6e'
        gradient_start: '#0891b2'
        text_color_light: true
      spacing:
        padding: ['100px', '0', '100px', '0']

  - block: stats
    content:
      items:
        - statistic: '10+'
          description: 논문 게재
        - statistic: '5+'
          description: 진행 중인 프로젝트
        - statistic: '20+'
          description: 연구실 멤버
        - statistic: '2018'
          description: 설립 연도
    design:
      columns: '4'
      background:
        color: '#f0f9ff'
      spacing:
        padding: ['40px', '0', '40px', '0']

  - block: markdown
    id: news
    content:
      title: '📰 최신 소식'
      subtitle: 'News & Updates'
      text: |
        <div class="news-list" style="display: flex; flex-direction: column; gap: 16px; margin-top: 24px;">
        
        <div class="news-item" style="display: flex; align-items: flex-start; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #3b82f6;">
          <div style="min-width: 80px; color: #64748b; font-size: 0.875rem; font-weight: 600;">2026.01</div>
          <div>
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">KICS Winter Conference Undergraduate Paper Award</div>
            <div style="color: #64748b; font-size: 0.9rem;">"Self-Evolving Four-Layer Normalization Gate for Cost-Efficient Intelligent AICC" - Jihoon Kim, Gihun Gil, and Sangkeum Lee</div>
          </div>
        </div>
        
        <div class="news-item" style="display: flex; align-items: flex-start; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #10b981;">
          <div style="min-width: 80px; color: #64748b; font-size: 0.875rem; font-weight: 600;">2026.01</div>
          <div>
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">AAAI 2026 Newsletter — EcoAI Lab Featured</div>
            <div style="color: #64748b; font-size: 0.9rem;">Research on reinforcement learning and quantum AI-based optimization for energy systems</div>
          </div>
        </div>
        
        <div class="news-item" style="display: flex; align-items: flex-start; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #f59e0b;">
          <div style="min-width: 80px; color: #64748b; font-size: 0.875rem; font-weight: 600;">2026.01</div>
          <div>
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">HBNU High-Impact Researcher Award</div>
            <div style="color: #64748b; font-size: 0.9rem;">Hanbat National University, Academic Year 2026</div>
          </div>
        </div>
        
        <div class="news-item" style="display: flex; align-items: flex-start; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #8b5cf6;">
          <div style="min-width: 80px; color: #64748b; font-size: 0.875rem; font-weight: 600;">2025.12</div>
          <div>
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">KICS Fall Conference — 3 Undergraduate Paper Awards</div>
            <div style="color: #64748b; font-size: 0.9rem;">RL-based Wi-Fi 7 MLO scheduling and quantum battery charging research recognized</div>
          </div>
        </div>
        
        </div>
    design:
      columns: '1'
      background:
        color: '#ffffff'
      spacing:
        padding: ['60px', '0', '60px', '0']

  - block: markdown
    content:
      title: '🎯 연구 분야'
      subtitle: 'Research Areas'
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
        
        <div style="background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%); padding: 25px; border-radius: 16px; border-left: 4px solid #06b6d4;">
        <h3 style="color: #0e7490; margin-top: 0;">🌍 환경에너지</h3>
        <ul style="margin: 0; padding-left: 20px;">
        <li>스마트팩토리 에너지 최적화</li>
        <li>스마트홈 에너지 관리</li>
        <li>재생에너지 예측 시스템</li>
        </ul>
        </div>
        
        <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 25px; border-radius: 16px; border-left: 4px solid #10b981;">
        <h3 style="color: #047857; margin-top: 0;">🔒 IoT & 보안</h3>
        <ul style="margin: 0; padding-left: 20px;">
        <li>IoT 센서 네트워크</li>
        <li>사이버보안 시스템</li>
        <li>물리보안 솔루션</li>
        </ul>
        </div>
        
        <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 25px; border-radius: 16px; border-left: 4px solid #3b82f6;">
        <h3 style="color: #1d4ed8; margin-top: 0;">🤖 AI 기술</h3>
        <ul style="margin: 0; padding-left: 20px;">
        <li>양자컴퓨팅 & 머신러닝</li>
        <li>강화학습 기반 최적화</li>
        <li>멀티에이전트 시스템</li>
        </ul>
        </div>
        
        </div>
    design:
      columns: '1'
      background:
        color: '#ffffff'

  - block: features
    id: features
    content:
      title: '✨ 핵심 기술'
      subtitle: 'Core Technologies'
      items:
        - icon: atom
          icon_pack: fas
          name: 'Quantum AI'
          description: '양자컴퓨팅을 활용한 차세대 AI 알고리즘 연구'
        - icon: network-wired
          icon_pack: fas
          name: 'Smart Grid'
          description: '지능형 전력망 최적화 및 에너지 효율화'
        - icon: shield-alt
          icon_pack: fas
          name: 'Security'
          description: 'AI 기반 사이버보안 및 위협 탐지'
        - icon: robot
          icon_pack: fas
          name: 'Multi-Agent'
          description: '분산 AI 시스템 및 자율 에이전트'
    design:
      columns: '4'
      background:
        gradient_start: '#f8fafc'
        gradient_end: '#e2e8f0'

  - block: collection
    id: publications
    content:
      title: '📚 주요 논문'
      subtitle: 'Featured Publications'
      text: '최신 연구 성과를 확인핵니다'
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: card
      columns: 2

  - block: markdown
    content:
      title: '👥 연구실 구성원'
      subtitle: 'Lab Members'
      text: |
        <div style="text-align: center; margin: 30px 0;">
        
        ### 교수 (Professor)
        
        <div style="display: inline-block; background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 30px 50px; border-radius: 20px; margin: 20px;">
        <h3 style="color: #0369a1; margin: 0;">이상금 (Sangkeum Lee), Ph.D.</h3>
        <p style="color: #64748b; margin: 10px 0;">한밭대학교 컴퓨터공학과 교수</p>
        <p style="color: #94a3b8; font-size: 0.9em;">EcoAI Lab Director</p>
        </div>
        
        ### 학생 (Students)
        
        <p>석사·박사과정 및 학부 연구생들과 함께 활발한 연구를 진행하고 있습니다.</p>
        
        <div style="margin-top: 20px;">
        <span style="display: inline-block; background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; margin: 5px;">석사과정</span>
        <span style="display: inline-block; background: #3b82f6; color: white; padding: 8px 16px; border-radius: 20px; margin: 5px;">박사과정</span>
        <span style="display: inline-block; background: #8b5cf6; color: white; padding: 8px 16px; border-radius: 20px; margin: 5px;">학부연구생</span>
        </div>
        
        </div>
    design:
      columns: '1'
      background:
        color: '#ffffff'

  - block: markdown
    content:
      title: '📞 연락처'
      subtitle: 'Contact Us'
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 30px;">
        
        <div style="text-align: center; padding: 25px;">
        <div style="font-size: 2em; margin-bottom: 10px;">📧</div>
        <strong>Email</strong><br>
        sangkeum@hanbat.ac.kr
        </div>
        
        <div style="text-align: center; padding: 25px;">
        <div style="font-size: 2em; margin-bottom: 10px;">📞</div>
        <strong>전화</strong><br>
        +82 42 821 1205
        </div>
        
        <div style="text-align: center; padding: 25px;">
        <div style="font-size: 2em; margin-bottom: 10px;">📍</div>
        <strong>연구실</strong><br>
        N4-416, 한밭대학교
        </div>
        
        <div style="text-align: center; padding: 25px;">
        <div style="font-size: 2em; margin-bottom: 10px;">🏫</div>
        <strong>주소</strong><br>
        대전광역시 유성구 동서대로 125
        </div>
        
        </div>
        
        <div style="text-align: center; margin-top: 40px; padding: 20px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 16px;">
        <h4 style="color: #92400e; margin: 0;">🤝 산학협력 및 인턴십 문의를 환영합니다!</h4>
        </div>
    design:
      columns: '1'
      background:
        color: '#f8fafc'

  - block: cta-card
    content:
      title: '🚀 EcoAI Lab과 함께 미래를 만들어가세요'
      text: |
        환경과 AI 기술의 융합을 통해 지속가능한 미래를 만들어갑니다.
        
        열정적인 학생들을 항상 환영합니다!
      button:
        text: 연구실 문의하기
        url: mailto:sangkeum@hanbat.ac.kr
        icon: mail
    design:
      card:
        css_class: 'bg-gradient-to-r from-cyan-500 to-blue-500'
      spacing:
        padding: ['60px', '0', '60px', '0']
---
