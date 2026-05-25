---
# Leave the homepage title empty to use the site title
title: ''
summary: '한밭대학교 EcoAI Lab은 환경에너지와 인공지능을 결합해 스마트팩토리, 스마트홈, IoT 보안, 강화학습, 양자컴퓨팅 기반 문제 해결을 연구합니다.'
date: 2026-05-15
lastmod: 2026-05-25
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

        <span class="ecoai-hero-kicker">Hanbat National University · Environmental Energy AI</span>

        <div class="ecoai-hero-brand">
          <span class="ecoai-hero-mark" role="img" aria-label="EcoAI Lab logo"></span>
          <div>
            <strong>EcoAI Lab</strong>
            <span>Environmental Energy × AI</span>
          </div>
        </div>

        <figure class="ecoai-hero-photo">
          <img src="/media/lab/prof-lee-gallery-2.jpg" alt="EcoAI Lab 연구실 구성원 단체 사진" width="1600" height="1067" loading="eager" decoding="async" fetchpriority="high" sizes="(max-width: 900px) calc(100vw - 32px), 520px">
          <figcaption>
            <span>Lab signal</span>
            <strong>Data, sensing, security, and intelligent operation.</strong>
          </figcaption>
        </figure>

        <span class="ecoai-hero-title">환경에너지 AI를 현장 운영의 언어로 만듭니다</span>

        <span class="ecoai-hero-subtitle">한밭대학교 컴퓨터공학과 EcoAI 연구실</span>
        
        <span class="ecoai-hero-deck">EcoAI Lab은 스마트팩토리, 스마트홈, IoT 센서 네트워크에서 생기는 에너지 문제를 데이터로 설명하고, 보안과 강화학습 기반 최적화로 실험 가능한 해법을 만듭니다.</span>

        <div class="ecoai-hero-brief" aria-label="EcoAI Lab research output summary">
          <span>Research archive</span>
          <strong>61 international · 61 domestic · 13 patents</strong>
          <a href="/publications/">성과 보기</a>
        </div>

        <div class="ecoai-hero-proof">
          <span><strong>Energy Data</strong> 스마트팩토리 · 스마트홈 운영 신호</span>
          <span><strong>Secure Sensing</strong> IoT 센서 네트워크 · 이상 흐름</span>
          <span><strong>Adaptive Agents</strong> 강화학습 · 데이터 기반 의사결정</span>
        </div>

        <div class="ecoai-hero-signal" aria-label="EcoAI Lab research operating principles">
          <span><strong>Observe</strong> 현장 데이터와 센서 흐름을 정리합니다</span>
          <span><strong>Model</strong> 예측·탐지·최적화 모델로 검증합니다</span>
          <span><strong>Deploy</strong> 논문·특허·협업 과제로 연결합니다</span>
        </div>

        <div class="ecoai-hero-pathways" aria-label="Visitor pathways">
          <a href="#agenda"><strong>Map</strong><span>연구 지도</span></a>
          <a href="#flagships"><strong>Stories</strong><span>대표 연구</span></a>
          <a href="/join-us/"><strong>Students</strong><span>Join Us</span></a>
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
            brightness: 0.92
            saturate: 0.62
        text_color_light: false
      spacing:
        padding: ['32px', '0', '12px', '0']

  - block: stats
    id: highlights
    content:
      items:
        - statistic: '61'
          description: International journal/conference records
        - statistic: '61'
          description: Domestic journal/conference records
        - statistic: '13'
          description: Patent records
        - statistic: '2026'
          description: Latest archived activity year
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
          <strong>에너지 관리 · 센서 네트워크 · 보안</strong>
          <p>스마트팩토리, 스마트홈, 항만, IoT 기반 환경에너지 문제를 연결합니다.</p>
          </div>
          <div>
          <span>Core Methods</span>
          <strong>강화학습 · 이상탐지 · 데이터 분석</strong>
          <p>운영 데이터를 기반으로 예측, 탐지, 최적화 문제를 다룹니다.</p>
          </div>
          <div>
            <span>Collaboration</span>
            <strong>산학협력 및 인턴십</strong>
            <p>공동연구, 산업 문제 해결, 학부 연구 참여를 위한 접점을 제공합니다.</p>
          </div>
        </div>

        <div class="ecoai-research-board" aria-label="EcoAI Lab research board">
          <div class="ecoai-board-head">
            <span>EcoAI operating map</span>
            <strong>현장 신호를 연구 가능한 단위로 나누고, 검증된 산출물로 연결합니다.</strong>
            <p>에너지 수요, 센서 신뢰성, 최적화 의사결정, 논문·특허 기록을 한 흐름 안에서 다룹니다.</p>
          </div>

          <div class="ecoai-board-tabs" aria-label="Research route labels">
            <span>Problem</span>
            <span>Data</span>
            <span>Model</span>
            <span>Output</span>
          </div>

          <div class="ecoai-board-grid">
            <a class="ecoai-board-node ecoai-node-energy" href="/projects/smart-energy-optimization/">
              <span>01 · Energy</span>
              <strong>수요와 운영 패턴</strong>
              <p>스마트팩토리·스마트홈 에너지 데이터를 예측과 제어 문제로 정리합니다.</p>
            </a>
            <a class="ecoai-board-node ecoai-node-sensing" href="/projects/iot-security-sensing/">
              <span>02 · Sensing</span>
              <strong>센서 신뢰성과 보안</strong>
              <p>센서 오류, 이상 흐름, 보안 이벤트가 AI 판단에 미치는 영향을 추적합니다.</p>
            </a>
            <a class="ecoai-board-node ecoai-node-model" href="/projects/quantum-rl-agents/">
              <span>03 · Model</span>
              <strong>강화학습 의사결정</strong>
              <p>복잡한 운영 조건을 에이전트 기반 탐색과 최적화 실험으로 비교합니다.</p>
            </a>
            <a class="ecoai-board-node ecoai-node-output" href="/publications/">
              <span>04 · Archive</span>
              <strong>논문·특허 기록</strong>
              <p>실험 결과를 국제·국내 논문, 특허, 프로젝트 기록으로 남깁니다.</p>
            </a>
          </div>
        </div>

        <div class="ecoai-method-panel" aria-label="EcoAI Lab research method">
          <div>
            <span>Research Method</span>
            <strong>문제를 좁히고, 데이터를 확인하고, 결과를 기록합니다.</strong>
          </div>
          <ol class="ecoai-method-steps">
            <li class="ecoai-method-step"><strong class="ecoai-method-step-title">Problem Framing</strong><small class="ecoai-method-step-copy">에너지·보안·운영 문제를 측정 가능한 질문으로 바꿉니다.</small></li>
            <li class="ecoai-method-step"><strong class="ecoai-method-step-title">Modeling</strong><small class="ecoai-method-step-copy">강화학습, 이상탐지, 예측 모델을 비교 가능한 실험으로 설계합니다.</small></li>
            <li class="ecoai-method-step"><strong class="ecoai-method-step-title">Evidence</strong><small class="ecoai-method-step-copy">논문, 특허, 프로젝트 기록으로 연구 결과를 검증합니다.</small></li>
          </ol>
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
        복잡한 에너지 운영 문제를 데이터, 보안, 최적화 관점에서 연구합니다.
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

        <div class="ecoai-research-cadence" aria-label="Research cadence">
          <span>Lab cadence</span>
          <strong>주간 보고 → 실험 리뷰 → 산출물 아카이브</strong>
          <p>연구 주제를 넓게 벌리기보다, 매주 기록된 진행 상황을 바탕으로 실험·분석·문서화를 연결합니다. 학생 연구는 작은 검증 단위에서 시작해 프로젝트와 논문 기록으로 확장합니다.</p>
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

  - block: markdown
    id: flagships
    content:
      title: '대표 연구 스토리'
      subtitle: 'Flagship Problems'
      text: |
        <div class="ecoai-flagship-layout">
          <div class="ecoai-flagship-visual" aria-label="EcoAI Lab research pipeline">
            <span class="ecoai-visual-label">EcoAI research pipeline</span>
            <strong>Field signals become models, decisions, and archived outputs.</strong>
            <div class="ecoai-data-rail" aria-hidden="true">
              <span>Sensor</span>
              <span>Model</span>
              <span>Decision</span>
              <span>Output</span>
            </div>
          </div>

          <div class="ecoai-flagship-copy">
            <span>From field data to evidence</span>
            <strong>연구 주제는 현장 문제에서 출발하고, 실험 가능한 산출물로 끝납니다.</strong>
            <p>스마트 에너지, 보안 센싱, 강화학습 에이전트는 따로 떨어진 기술 목록이 아니라 하나의 흐름으로 연결됩니다. 데이터를 모으고, 신뢰성을 확인하고, 예측·탐지·최적화 모델로 검증합니다.</p>
          </div>

          <a class="ecoai-story-card" href="/projects/smart-energy-optimization/">
            <span>01 · Energy</span>
            <strong>스마트 에너지 최적화</strong>
            <p>스마트팩토리와 스마트홈 데이터를 기반으로 수요 예측, 재생에너지 변동성, 강화학습 제어 정책을 다룹니다.</p>
            <small>Forecast → Simulation → RL Policy</small>
          </a>

          <a class="ecoai-story-card" href="/projects/iot-security-sensing/">
            <span>02 · Secure Sensing</span>
            <strong>IoT 센서 네트워크와 보안</strong>
            <p>센서 오류, 데이터 변조, 네트워크 장애가 AI 판단을 흔들지 않도록 이상 탐지와 보안 이벤트 분석 구조를 설계합니다.</p>
            <small>Quality Check → Threat Analysis → Safe Service</small>
          </a>

          <a class="ecoai-story-card" href="/projects/quantum-rl-agents/">
            <span>03 · Agents</span>
            <strong>양자 AI와 강화학습 에이전트</strong>
            <p>복잡한 에너지·보안 최적화 문제를 멀티에이전트 의사결정과 양자 최적화 가능성 관점에서 비교합니다.</p>
            <small>Multi-Agent → Quantum Search → Evaluation</small>
          </a>
        </div>
    design:
      columns: '1'
      background:
        color: '#f8fafc'
      spacing:
        padding: ['72px', '0', '58px', '0']

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
        <strong class="ecoai-output-title">연구성과는 검증된 기록 중심으로 정리합니다.</strong>

        기존 Google Sites의 International, Domestic, Patents 하위 페이지를 새 사이트 내부 페이지로 옮겼습니다. 국제논문·국제학술대회 61건, 국내논문·국내학술대회 61건, 특허 13건을 유형별로 확인할 수 있습니다.

        <div class="ecoai-output-meta" aria-label="Research output categories">
          <span>International</span>
          <span>Domestic</span>
          <span>Patents</span>
          <span>Lab News</span>
        </div>

        <div class="ecoai-output-scoreboard" aria-label="Research output summary">
          <span><strong>61</strong>International records</span>
          <span><strong>61</strong>Domestic records</span>
          <span><strong>13</strong>Patent records</span>
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
        <img src="/media/authors/admin.jpg" alt="이상금 교수 프로필 사진" width="150" height="150" loading="lazy" decoding="async">
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
            <img src="/media/lab/prof-lee-profile.jpg" alt="EcoAI Lab 연구실 대표 사진" width="1200" height="800" loading="lazy" decoding="async">
            <figcaption>EcoAI Lab research leadership</figcaption>
          </figure>
          <figure>
            <img src="/media/lab/prof-lee-gallery-1.jpg" alt="EcoAI Lab 프로필 사진 1" width="1600" height="1067" loading="lazy" decoding="async">
            <figcaption>Environmental Energy × AI</figcaption>
          </figure>
          <figure>
            <img src="/media/lab/prof-lee-gallery-2.jpg" alt="EcoAI Lab 프로필 사진 2" width="1600" height="1067" loading="lazy" decoding="async">
            <figcaption>IoT, Security, and Intelligent Systems</figcaption>
          </figure>
          <figure>
            <img src="/media/lab/prof-lee-gallery-3.jpg" alt="EcoAI Lab 프로필 사진 3" width="1600" height="1067" loading="lazy" decoding="async">
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
        color: '#f8fafc'

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
      title: 'EcoAI Lab과 함께 연구할 학생과 협업 파트너를 기다립니다'
      text: |
        환경에너지와 AI 기술의 접점에서 실제 문제를 함께 다룰 학생과 협업 파트너를 기다립니다.
        
        지원 전에는 Join Us 페이지의 준비 자료와 관심 주제 안내를 확인해 주세요.
      button:
        text: Join Us 보기
        url: /join-us/
        icon: mail
    design:
      card:
        css_class: 'ecoai-cta-quiet'
      spacing:
        padding: ['60px', '0', '60px', '0']
---
