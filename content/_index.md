---
# Leave the homepage title empty to use the site title
title: ''
summary: '한밭대학교 EcoAI Lab은 환경에너지와 인공지능을 결합해 스마트팩토리, 스마트홈, IoT 보안, 강화학습, 양자컴퓨팅 기반 문제 해결을 연구합니다.'
date: 2024-01-01
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: hero
    id: about
    content:
      title: 'EcoAI Lab'
      text: |
        ## 환경에너지와 인공지능으로 지속가능한 미래를 연구합니다
        
        ### 한밭대학교 컴퓨터공학과 EcoAI 연구실
        
        EcoAI Lab은 스마트팩토리·스마트홈 에너지 최적화, IoT 센서 네트워크, 보안, 강화학습, 양자컴퓨팅, 멀티에이전트 AI를 연구합니다.
        
        **Environmental Energy** · **IoT/Security** · **Reinforcement Learning** · **Quantum AI**
      primary_action:
        text: 연구 소개
        url: '#research'
        icon: rocket-launch
      secondary_action:
        text: 논문 보기
        url: '#publications'
        icon: document-text
    design:
      background:
        image:
          filename: lab/prof-lee-hero.jpg
          filters:
            brightness: 0.42
            saturate: 0.9
        text_color_light: true
      spacing:
        padding: ['100px', '0', '100px', '0']

  - block: stats
    id: highlights
    content:
      items:
        - statistic: '10+'
          description: 연구 성과
        - statistic: '5+'
          description: 핵심 연구 주제
        - statistic: '12'
          description: 교수 및 학생 구성원
        - statistic: '2018'
          description: 설립 연도
    design:
      columns: '4'
      background:
        color: '#f0f9ff'
      spacing:
        padding: ['40px', '0', '40px', '0']

  - block: markdown
    id: research
    content:
      title: '연구 분야'
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
    id: technologies
    content:
      title: '핵심 기술'
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
    id: projects
    content:
      title: '주요 연구 프로젝트'
      subtitle: 'Research Projects'
      text: 'EcoAI Lab의 핵심 연구 방향을 프로젝트 형태로 정리했습니다.'
      filters:
        folders:
          - projects
        featured_only: true
    design:
      view: card
      columns: 3

  - block: markdown
    id: publications
    content:
      title: '주요 논문'
      subtitle: 'Featured Publications'
      text: |
        EcoAI Lab의 검증된 논문 목록을 정리 중입니다.

        실제 논문 데이터가 확정되면 DOI, PDF, 코드, 데이터 링크와 함께 공개하겠습니다.
    design:
      columns: '1'
      background:
        color: '#ffffff'

  - block: markdown
    id: members
    content:
      title: '연구실 구성원'
      subtitle: 'Lab Members'
      text: |
        <div style="text-align: center; margin: 30px 0;">
        
        ### 교수 (Professor)
        
        <div style="display: inline-block; background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 30px 50px; border-radius: 20px; margin: 20px; box-shadow: 0 20px 45px rgba(2, 132, 199, 0.12);">
        <img src="/media/authors/admin.jpg" alt="이상금 교수 프로필 사진" style="width: 160px; height: 160px; object-fit: cover; border-radius: 999px; margin: 0 auto 20px; border: 4px solid white; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);">
        <h3 style="color: #0369a1; margin: 0;">이상금 (Sangkeum Lee), Ph.D.</h3>
        <p style="color: #64748b; margin: 10px 0;">한밭대학교 컴퓨터공학과 교수</p>
        <p style="color: #94a3b8; font-size: 0.9em;">EcoAI Lab Director</p>
        </div>
        
        ### 학생 (Students)
        
        <p>학부 연구생들과 함께 환경에너지와 AI 융합 연구를 진행하고 있습니다. 개인정보 보호를 위해 학번 등 식별 정보는 공개하지 않습니다.</p>
        
        <div class="ecoai-member-grid">
        <span>장현석 <small>Hyeonseok Jang</small></span>
        <span>박준성 <small>Junseong Park</small></span>
        <span>박범도 <small>Beomdo Park</small></span>
        <span>강한성 <small>Hanseong Kang</small></span>
        <span>김준서 <small>Junseo Kim</small></span>
        <span>정민성 <small>Minsung Jung</small></span>
        <span>권우현 <small>Woohyeon Kwon</small></span>
        <span>박선아 <small>Suna Park</small></span>
        <span>안다은 <small>Daeun Ahn</small></span>
        <span>구남석 <small>Namseok Koo</small></span>
        <span>서지윤 <small>Jiyun Seo</small></span>
        </div>

        ### 졸업생 및 Alumni

        <div class="ecoai-alumni-panel">
          <strong>Alumni 정보 정리 중</strong>
          <p>졸업생·수료생 명단, 진학/취업 현황, 연구 기여 정보는 공개 가능 여부를 확인한 뒤 업데이트합니다.</p>
        </div>
        
        </div>
    design:
      columns: '1'
      background:
        color: '#ffffff'

  - block: markdown
    id: gallery
    content:
      title: '연구실 갤러리'
      subtitle: 'Lab Gallery'
      text: |
        <div class="ecoai-gallery">
          <figure>
            <img src="/media/lab/prof-lee-profile.jpg" alt="EcoAI Lab 연구실 대표 사진">
            <figcaption>EcoAI Lab research leadership</figcaption>
          </figure>
          <figure>
            <img src="/media/lab/prof-lee-gallery-1.jpg" alt="EcoAI Lab 프로필 사진 1">
            <figcaption>Environmental Energy × AI</figcaption>
          </figure>
          <figure>
            <img src="/media/lab/prof-lee-gallery-2.jpg" alt="EcoAI Lab 프로필 사진 2">
            <figcaption>IoT, Security, and Intelligent Systems</figcaption>
          </figure>
          <figure>
            <img src="/media/lab/prof-lee-gallery-3.jpg" alt="EcoAI Lab 프로필 사진 3">
            <figcaption>Smart Energy Research</figcaption>
          </figure>
        </div>
    design:
      columns: '1'
      background:
        gradient_start: '#f8fafc'
        gradient_end: '#ecfeff'

  - block: markdown
    id: contact
    content:
      title: '연락처'
      subtitle: 'Contact Us'
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 30px;">
        
        <div style="text-align: center; padding: 25px;">
        <div style="font-size: 2em; margin-bottom: 10px;">📧</div>
        <strong>Email</strong><br>
        <a href="mailto:sangkeum@hanbat.ac.kr">sangkeum@hanbat.ac.kr</a>
        </div>
        
        <div style="text-align: center; padding: 25px;">
        <div style="font-size: 2em; margin-bottom: 10px;">📞</div>
        <strong>전화</strong><br>
        <a href="tel:+82428211205">+82 42 821 1205</a>
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
        <h4 style="color: #92400e; margin: 0;">산학협력, 공동연구, 인턴십 문의를 환영합니다.</h4>
        </div>
    design:
      columns: '1'
      background:
        color: '#f8fafc'

  - block: cta-card
    content:
      title: 'EcoAI Lab과 함께 지속가능한 미래를 연구하세요'
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
