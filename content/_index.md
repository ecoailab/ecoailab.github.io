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
        <a class="ecoai-skip-link" href="#main-content">본문으로 건너뛰기</a>
        <span id="main-content" class="ecoai-anchor-target" aria-hidden="true"></span>

        <span class="ecoai-hero-kicker">Hanbat National University · Computer Engineering</span>

        <div class="ecoai-hero-brand">
          <img src="/media/lab/ecoai-logo.jpg" alt="EcoAI Lab logo">
          <div>
            <strong>Eyes on the sky</strong>
            <span>Innovate for the future</span>
          </div>
        </div>

        <span class="ecoai-hero-title">환경에너지와 인공지능으로 지속가능한 미래를 연구합니다</span>

        <span class="ecoai-hero-subtitle">한밭대학교 컴퓨터공학과 EcoAI 연구실</span>
        
        <span class="ecoai-hero-deck">EcoAI Lab은 에너지 관리(스마트팩토리·스마트홈·항만), 양자AI·양자배터리, IoT·위성 통신, 심층강화학습, LLM 에이전트, 딥러닝 이상탐지, 빅데이터 분석을 연구합니다.</span>

        <div class="ecoai-hero-proof">
          <span><strong>Energy</strong> Smart Factory · Smart Home</span>
          <span><strong>AI</strong> Reinforcement Learning · Quantum AI</span>
          <span><strong>Security</strong> IoT Sensor Networks</span>
        </div>
        
        <div class="ecoai-hero-tags">
          <span>Environmental Energy</span>
          <span>IoT/Security</span>
          <span>Reinforcement Learning</span>
          <span>Quantum AI</span>
        </div>

        <div class="ecoai-hero-pathways" aria-label="Visitor pathways">
          <a href="/join-us/"><strong>Students</strong><span>Join Us</span></a>
          <a href="/collaborate/"><strong>Partners</strong><span>Collaborate</span></a>
          <a href="#publications"><strong>Researchers</strong><span>Outputs</span></a>
        </div>
      primary_action:
        text: 연구 소개
        url: '#research'
        icon: rocket-launch
      secondary_action:
        text: Join Us
        url: '/join-us/'
        icon: document-text
    design:
      background:
        image:
          filename: lab/prof-lee-hero.jpg
          filters:
            brightness: 0.2
            saturate: 0.78
        text_color_light: true
      spacing:
        padding: ['112px', '0', '104px', '0']

  - block: stats
    id: highlights
    content:
      items:
        - statistic: '51'
          description: International journal entries
        - statistic: '60'
          description: Domestic conference entries
        - statistic: '13'
          description: Patent records
        - statistic: '6'
          description: Gallery archive pages
    design:
      columns: '4'
      background:
        color: '#0f172a'
      spacing:
        padding: ['34px', '0', '34px', '0']

  - block: markdown
    id: agenda
    content:
      title: '연구 지도'
      subtitle: 'Research Map'
      text: |
        <div class="ecoai-authority-strip">
          <div>
          <span>Research Domains</span>
          <strong>에너지 관리 · 양자AI · 양자배터리 · 통신</strong>
          <p>스마트팩토리/홈/항만, IoT/위성 통신, 에너지 클라우드 문제를 연결합니다.</p>
          </div>
          <div>
          <span>Core Methods</span>
          <strong>양자컴퓨팅 · 심층강화학습 · LLM 에이전트</strong>
          <p>딥러닝 이상탐지와 빅데이터 분석으로 탄소중립 운영 문제를 다룹니다.</p>
          </div>
          <div>
            <span>Collaboration</span>
            <strong>산학협력 및 인턴십</strong>
            <p>공동연구, 산업 문제 해결, 학부 연구 참여를 위한 접점을 제공합니다.</p>
          </div>
        </div>

        <div class="ecoai-benchmark-grid" aria-label="EcoAI Lab website design checklist">
          <span><strong>01</strong> Mission-first hero</span>
          <span><strong>02</strong> Audience pathways</span>
          <span><strong>03</strong> Research taxonomy</span>
          <span><strong>04</strong> Verifiable outputs</span>
          <span><strong>05</strong> People & recruiting</span>
        </div>
    design:
      columns: '1'
      background:
        color: '#f8fafc'
      spacing:
        padding: ['70px', '0', '46px', '0']

  - block: markdown
    id: research
    content:
      title: '연구 분야'
      subtitle: 'Research Areas'
      text: |
        <div class="ecoai-section-intro">
        <span>Research map</span>
        EcoAI Lab은 에너지 시스템, 센서 네트워크, 보안, AI 최적화를 하나의 연구 흐름으로 연결합니다.
        </div>

        <div class="ecoai-research-grid">
        
        <div class="ecoai-research-card ecoai-card-cyan">
        <div class="ecoai-card-icon">01</div>
        <h3>환경에너지</h3>
        <ul>
        <li>스마트팩토리 에너지 최적화</li>
        <li>스마트홈 에너지 관리</li>
        <li>재생에너지 예측 시스템</li>
        </ul>
        </div>
        
        <div class="ecoai-research-card ecoai-card-emerald">
        <div class="ecoai-card-icon">02</div>
        <h3>IoT & 보안</h3>
        <ul>
        <li>IoT 센서 네트워크</li>
        <li>사이버보안 시스템</li>
        <li>물리보안 솔루션</li>
        </ul>
        </div>
        
        <div class="ecoai-research-card ecoai-card-blue">
        <div class="ecoai-card-icon">03</div>
        <h3>AI 기술</h3>
        <ul>
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
      text: 'EcoAI Lab의 핵심 연구 방향을 프로젝트 형태로 정리했습니다. 각 프로젝트는 문제, 접근 방법, 기대 산출물 중심으로 계속 보완합니다.'
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
        <div class="ecoai-output-panel">
        <span class="ecoai-panel-label">Research outputs</span>
        <strong class="ecoai-output-title">검증된 연구성과만 공개합니다.</strong>

        기존 Google Sites의 International, Domestic, Patents 하위 페이지를 새 사이트 내부 페이지로 옮겨 연구성과를 한곳에서 확인할 수 있게 정리했습니다.

        <div class="ecoai-output-meta" aria-label="Research output categories">
          <span>International</span>
          <span>Domestic</span>
          <span>Patents</span>
          <span>Lab News</span>
        </div>

        <div class="ecoai-archive-links">
          <a href="/publications/international/">International publications</a>
          <a href="/publications/domestic/">Domestic publications</a>
          <a href="/publications/patents/">Patents</a>
          <a href="/news/">Lab news</a>
        </div>

        <a class="ecoai-text-link" href="/publications/">논문/연구성과 페이지 보기 →</a>
        </div>
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
        <div class="ecoai-members-section ecoai-editorial-panel">
        
        ### 교수 (Professor)
        
        <div class="ecoai-professor-card">
        <img src="/media/authors/admin.jpg" alt="이상금 교수 프로필 사진">
        <div>
        <span class="ecoai-panel-label">Lab Director</span>
        <h3>이상금 (Sangkeum Lee), Ph.D.</h3>
        <p>한밭대학교 컴퓨터공학과 부교수</p>
        <p class="ecoai-muted">Energy Systems · Smart Industries · Quantum AI · Reinforcement Learning</p>
        </div>
        </div>
        
        ### 학생 (Students)
        
        <p>석사과정, 학석사연계과정, 학부연구생과 함께 환경에너지와 AI 융합 연구를 진행하고 있습니다. 개인정보 보호를 위해 학번 등 식별 정보는 공개하지 않습니다.</p>
        
        <div class="ecoai-member-grid">
        <span>김준연 <small>Junyeon Kim · current: SK shieldus</small></span>
        <span>백민우 <small>Minu Baek · M.S.</small></span>
        <span>길기훈 <small>Gihun Gil · M.S.</small></span>
        <span>박준성 <small>Junseong Park · Int. B.S.–M.S.</small></span>
        <span>박범도 <small>Beomdo Park · Int. B.S.–M.S.</small></span>
        <span>장현석 <small>Hyeonseok Jang · Int. B.S.–M.S.</small></span>
        <span>장여진 <small>Yeojin Jang · M.S.</small></span>
        <span>정민성 <small>Minsung Jung · Int. B.S.–M.S.</small></span>
        <span>박제니린 <small>Jenilyn Park · M.S.</small></span>
        <span>손병훈 <small>Byounghoon Son · M.S.</small></span>
        <span>이서영 <small>Seoyoung Lee · Undergraduate</small></span>
        <span>유지오 <small>Jio Yoo · Undergraduate</small></span>
        <span>강지수 <small>Jisu Kang · Undergraduate</small></span>
        </div>

        ### 졸업생 및 Alumni

        <div class="ecoai-alumni-panel">
          <strong>Alumni</strong>
          <p>Beomhee Jung, Nayoung Jin, Naeun Yoon, Seungju Lee, Juryeong Kim, Daeun Ahn, Namseok Koo, Suna Park, Jiyun Seo, Donggeon Yu, Jeongseop Lee, Harin Jang, Woohyeon Kwon 등 공개된 Alumni 정보를 <a href="/alumni/">Alumni 페이지</a>에 정리했습니다.</p>
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
        <div class="ecoai-gallery ecoai-gallery-editorial">
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

        <div class="ecoai-archive-links ecoai-gallery-links">
          <a href="/gallery/awards/">Awards 갤러리</a>
          <a href="/gallery/memories/">Memories 갤러리</a>
          <a href="/gallery/">전체 갤러리 보기</a>
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
        <div class="ecoai-contact-grid">
        
        <div class="ecoai-contact-card">
        <div class="ecoai-contact-icon">@</div>
        <strong>Email</strong><br>
        <a href="mailto:sangkeum@hanbat.ac.kr">sangkeum@hanbat.ac.kr</a>
        </div>
        
        <div class="ecoai-contact-card">
        <div class="ecoai-contact-icon">T</div>
        <strong>전화</strong><br>
        <a href="tel:+82428211205">+82 42 821 1205</a>
        </div>
        
        <div class="ecoai-contact-card">
        <div class="ecoai-contact-icon">N4</div>
        <strong>연구실</strong><br>
        N4-416, 한밭대학교
        </div>
        
        <div class="ecoai-contact-card">
        <div class="ecoai-contact-icon">KR</div>
        <strong>주소</strong><br>
        대전광역시 유성구 동서대로 125
        </div>
        
        </div>
        
        <div class="ecoai-contact-banner">
        <h4>산학협력, 공동연구, 인턴십 문의는 <a href="/collaborate/">협업 안내</a>와 <a href="/join-us/">Join Us</a>를 참고해 주세요.</h4>
        </div>
    design:
      columns: '1'
      background:
        color: '#f8fafc'

  - block: cta-card
    content:
      title: 'EcoAI Lab과 함께 지속가능한 미래를 연구하세요'
      text: |
        환경에너지와 AI 기술의 접점에서 실제 문제를 함께 다룰 학생과 협업 파트너를 기다립니다.
        
        지원 전에는 Join Us 페이지의 준비 자료와 관심 주제 안내를 확인해 주세요.
      button:
        text: Join Us 보기
        url: /join-us/
        icon: mail
    design:
      card:
        css_class: 'bg-gradient-to-r from-cyan-500 to-blue-500'
      spacing:
        padding: ['60px', '0', '60px', '0']
---
