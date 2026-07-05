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
      title: ''
      text: |
        <a class="ecoai-skip-link" href="#main-content">본문으로 건너뛰기</a>
        <span id="main-content" class="ecoai-anchor-target" aria-hidden="true"></span>

        <span class="ecoai-hero-kicker">Hanbat National University</span>

        <h1 class="ecoai-hero-title">Eco<span class="ecoai-hero-ai">AI</span> Lab</h1>

        <span class="ecoai-hero-subtitle">Eyes on the sky: Innovate for the future</span>

        <a class="ecoai-scroll-cue" href="#agenda" aria-label="연구 내용으로 이동"></a>
    design:
      background:
        image:
          filename: lab/ecoai-sky-hero.jpg
          filters:
            brightness: 1
            saturate: 1
        text_color_light: false
      spacing:
        padding: ['32px', '0', '12px', '0']
  - block: markdown
    id: agenda
    content:
      title: '연구 분야 지도'
      subtitle: 'Research Map'
      text: |
        <div class="ecoai-authority-strip">
          <div>
          <span>연구 도메인</span>
          <strong>에너지 관리(스마트팩토리/홈/항만), 양자AI, 양자배터리, 통신(IoT/위성)</strong>
          <p>EcoAI Lab은 환경에너지 현장의 데이터를 연구 가능한 문제로 정리합니다.</p>
          </div>
          <div>
          <span>핵심 기술</span>
          <strong>양자컴퓨팅, 심층강화학습, LLM 에이전트, 딥러닝 이상탐지, 빅데이터 분석</strong>
          <p>예측, 탐지, 최적화, 협업 과제를 하나의 연구 흐름으로 연결합니다.</p>
          </div>
          <div>
            <span>Contact</span>
            <strong>산학 협력 및 인턴십 제공</strong>
            <p>Email sangkeum@hanbat.ac.kr · Tel +82 42 821 1205 · Room N4-416</p>
          </div>
        </div>

        <div class="ecoai-reference-links" aria-label="EcoAI Lab quick links">
          <a href="#flagships">
            <picture>
              <source type="image/avif" srcset="/media/lab/prof-lee-gallery-2-640.avif 640w, /media/lab/prof-lee-gallery-2-960.avif 960w, /media/lab/prof-lee-gallery-2-1280.avif 1280w" sizes="(max-width: 800px) 100vw, 460px">
              <source type="image/webp" srcset="/media/lab/prof-lee-gallery-2-640.webp 640w, /media/lab/prof-lee-gallery-2-960.webp 960w, /media/lab/prof-lee-gallery-2-1280.webp 1280w" sizes="(max-width: 800px) 100vw, 460px">
              <img src="/media/lab/prof-lee-gallery-2.jpg" alt="EcoAI Lab 연구 회의 모습" width="1600" height="1067" loading="lazy" decoding="async">
            </picture>
            <span>연구 지도</span>
          </a>
          <a href="/collaborate/">
            <picture>
              <source type="image/avif" srcset="/media/lab/prof-lee-gallery-1-640.avif 640w, /media/lab/prof-lee-gallery-1-960.avif 960w, /media/lab/prof-lee-gallery-1-1280.avif 1280w" sizes="(max-width: 800px) 100vw, 460px">
              <source type="image/webp" srcset="/media/lab/prof-lee-gallery-1-640.webp 640w, /media/lab/prof-lee-gallery-1-960.webp 960w, /media/lab/prof-lee-gallery-1-1280.webp 1280w" sizes="(max-width: 800px) 100vw, 460px">
              <img src="/media/lab/prof-lee-gallery-1.jpg" alt="EcoAI Lab 연구실 단체 사진" width="1600" height="1067" loading="lazy" decoding="async">
            </picture>
            <span>산학 협력 및 인턴십 제공</span>
          </a>
        </div>

        <div class="ecoai-research-board" aria-label="EcoAI Lab research board">
          <div class="ecoai-board-head">
            <span>연구 흐름 지도</span>
            <strong>현장 신호를 연구 가능한 단위로 나누고, 검증된 산출물로 연결합니다.</strong>
            <p>에너지 수요, 센서 신뢰성, 최적화 의사결정, 논문·특허 기록을 한 흐름 안에서 다룹니다.</p>
          </div>

          <div class="ecoai-board-tabs" aria-label="Research route labels">
            <span>문제</span>
            <span>데이터</span>
            <span>실험</span>
            <span>기록</span>
          </div>

          <div class="ecoai-board-grid">
            <a class="ecoai-board-node ecoai-node-energy" href="/projects/smart-energy-optimization/">
              <span>01 · 에너지</span>
              <strong>수요와 운영 패턴</strong>
              <p>스마트팩토리·스마트홈 에너지 데이터를 예측과 제어 문제로 정리합니다.</p>
            </a>
            <a class="ecoai-board-node ecoai-node-sensing" href="/projects/iot-security-sensing/">
              <span>02 · 센서</span>
              <strong>센서 신뢰성과 보안</strong>
              <p>센서 오류, 이상 흐름, 보안 이벤트가 AI 판단에 미치는 영향을 추적합니다.</p>
            </a>
            <a class="ecoai-board-node ecoai-node-model" href="/projects/quantum-rl-agents/">
              <span>03 · 최적화</span>
              <strong>강화학습 의사결정</strong>
              <p>복잡한 운영 조건을 에이전트 기반 탐색과 최적화 실험으로 비교합니다.</p>
            </a>
            <a class="ecoai-board-node ecoai-node-output" href="/publications/">
              <span>04 · 기록</span>
              <strong>논문·특허 기록</strong>
              <p>실험 결과를 국제·국내 논문, 특허, 프로젝트 기록으로 남깁니다.</p>
            </a>
          </div>
        </div>

        <div class="ecoai-method-panel" aria-label="EcoAI Lab research method">
          <div>
            <span>연구 방법</span>
            <strong>문제를 좁히고, 데이터를 확인하고, 결과를 기록합니다.</strong>
          </div>
          <ol class="ecoai-method-steps">
            <li class="ecoai-method-step"><strong class="ecoai-method-step-title">질문 정리</strong><small class="ecoai-method-step-copy">에너지·보안·운영 문제를 측정 가능한 질문으로 바꿉니다.</small></li>
            <li class="ecoai-method-step"><strong class="ecoai-method-step-title">실험 설계</strong><small class="ecoai-method-step-copy">강화학습, 이상탐지, 예측 모델을 비교 가능한 실험으로 설계합니다.</small></li>
            <li class="ecoai-method-step"><strong class="ecoai-method-step-title">결과 검증</strong><small class="ecoai-method-step-copy">논문, 특허, 프로젝트 기록으로 연구 결과를 검증합니다.</small></li>
          </ol>
        </div>

    design:
      columns: '1'
      background:
        color: '#f8fafc'
      spacing:
        padding: ['70px', '0', '46px', '0']
  - block: markdown
    id: flagships
    content:
      title: '대표 연구 스토리'
      subtitle: '현장 문제에서 검증 기록까지'
      text: |
        <div class="ecoai-flagship-layout">
          <div class="ecoai-flagship-visual" aria-label="EcoAI Lab research pipeline">
            <span class="ecoai-visual-label">대표 연구 흐름</span>
            <strong>현장 데이터를 질문으로 바꾸고, 실험 결과로 검증합니다.</strong>
            <div class="ecoai-data-rail" aria-hidden="true">
              <span>현장 데이터</span>
              <span>실험 설계</span>
              <span>결과 해석</span>
              <span>논문·특허</span>
            </div>
          </div>

          <div class="ecoai-flagship-copy">
            <span>현장 자료에서 검증 기록까지</span>
            <strong>연구 주제는 현장 문제에서 출발하고, 실험 가능한 산출물로 끝납니다.</strong>
            <p>스마트 에너지, 보안 센싱, 강화학습 에이전트는 따로 떨어진 기술 목록이 아니라 하나의 흐름으로 연결됩니다. 데이터를 모으고, 신뢰성을 확인하고, 예측·탐지·최적화 모델로 검증합니다.</p>
          </div>

          <a class="ecoai-story-card" href="/projects/smart-energy-optimization/">
            <span>01 · 에너지</span>
            <strong>스마트 에너지 최적화</strong>
            <p>스마트팩토리와 스마트홈 데이터를 기반으로 수요 예측, 재생에너지 변동성, 강화학습 제어 정책을 다룹니다.</p>
            <small>수요 예측 → 시뮬레이션 → 제어 정책</small>
          </a>

          <a class="ecoai-story-card" href="/projects/iot-security-sensing/">
            <span>02 · 센서 보안</span>
            <strong>IoT 센서 네트워크와 보안</strong>
            <p>센서 오류, 데이터 변조, 네트워크 장애가 AI 판단을 흔들지 않도록 이상 탐지와 보안 이벤트 분석 구조를 설계합니다.</p>
            <small>품질 확인 → 위협 분석 → 안정적 서비스</small>
          </a>

          <a class="ecoai-story-card" href="/projects/quantum-rl-agents/">
            <span>03 · 의사결정</span>
            <strong>양자 AI와 강화학습 에이전트</strong>
            <p>복잡한 에너지·보안 최적화 문제를 멀티에이전트 의사결정과 양자 최적화 가능성 관점에서 비교합니다.</p>
            <small>다중 에이전트 → 탐색 실험 → 성능 평가</small>
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
            <picture>
              <source type="image/avif" srcset="/media/lab/prof-lee-profile-640.avif 640w, /media/lab/prof-lee-profile-960.avif 960w, /media/lab/prof-lee-profile-1200.avif 1200w" sizes="(max-width: 720px) calc(100vw - 80px), 465px">
              <source type="image/webp" srcset="/media/lab/prof-lee-profile-640.webp 640w, /media/lab/prof-lee-profile-960.webp 960w, /media/lab/prof-lee-profile-1200.webp 1200w" sizes="(max-width: 720px) calc(100vw - 80px), 465px">
              <img src="/media/lab/prof-lee-profile.jpg" alt="EcoAI Lab 연구실 대표 사진" width="1200" height="800" loading="lazy" decoding="async">
            </picture>
            <figcaption>연구실과 교수진</figcaption>
          </figure>
          <figure>
            <picture>
              <source type="image/avif" srcset="/media/lab/prof-lee-gallery-1-640.avif 640w, /media/lab/prof-lee-gallery-1-960.avif 960w, /media/lab/prof-lee-gallery-1-1280.avif 1280w" sizes="(max-width: 720px) calc(100vw - 80px), 360px">
              <source type="image/webp" srcset="/media/lab/prof-lee-gallery-1-640.webp 640w, /media/lab/prof-lee-gallery-1-960.webp 960w, /media/lab/prof-lee-gallery-1-1280.webp 1280w" sizes="(max-width: 720px) calc(100vw - 80px), 360px">
              <img src="/media/lab/prof-lee-gallery-1.jpg" alt="EcoAI Lab 프로필 사진 1" width="1600" height="1067" loading="lazy" decoding="async">
            </picture>
            <figcaption>환경에너지 AI 연구</figcaption>
          </figure>
          <figure>
            <picture>
              <source type="image/avif" srcset="/media/lab/prof-lee-gallery-2-640.avif 640w, /media/lab/prof-lee-gallery-2-960.avif 960w, /media/lab/prof-lee-gallery-2-1280.avif 1280w" sizes="(max-width: 720px) calc(100vw - 80px), 360px">
              <source type="image/webp" srcset="/media/lab/prof-lee-gallery-2-640.webp 640w, /media/lab/prof-lee-gallery-2-960.webp 960w, /media/lab/prof-lee-gallery-2-1280.webp 1280w" sizes="(max-width: 720px) calc(100vw - 80px), 360px">
              <img src="/media/lab/prof-lee-gallery-2.jpg" alt="EcoAI Lab 프로필 사진 2" width="1600" height="1067" loading="lazy" decoding="async">
            </picture>
            <figcaption>IoT 보안과 지능형 시스템</figcaption>
          </figure>
          <figure>
            <picture>
              <source type="image/avif" srcset="/media/lab/prof-lee-gallery-3-640.avif 640w, /media/lab/prof-lee-gallery-3-960.avif 960w, /media/lab/prof-lee-gallery-3-1280.avif 1280w" sizes="(max-width: 720px) calc(100vw - 80px), 360px">
              <source type="image/webp" srcset="/media/lab/prof-lee-gallery-3-640.webp 640w, /media/lab/prof-lee-gallery-3-960.webp 960w, /media/lab/prof-lee-gallery-3-1280.webp 1280w" sizes="(max-width: 720px) calc(100vw - 80px), 360px">
              <img src="/media/lab/prof-lee-gallery-3.jpg" alt="EcoAI Lab 프로필 사진 3" width="1600" height="1067" loading="lazy" decoding="async">
            </picture>
            <figcaption>스마트 에너지 연구 회의</figcaption>
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
