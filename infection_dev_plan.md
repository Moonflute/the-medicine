# 감염 임상 연결 기능 개발 계획

## 1. 문서 목적

이 문서는 기존 `Specialty > 감염`의 원인균 중심 자료구조와 `Drugs > 항생제 overview`를 훼손하지 않으면서 다음 임상 흐름을 연결하는 개발 계획이다.

```text
감염질환 또는 임상 증후군
→ 환자·감염 환경과 중증도
→ 가능한 원인균
→ 경험적 항균요법
→ 배양 및 감수성 결과
→ 표적 항균요법과 개별 약물 정보
```

목표는 자동 처방기가 아니라, 신뢰할 수 있는 근거를 바탕으로 질환·병원체·항생제 사이를 양방향으로 탐색하는 임상 교육 및 참조 기능을 만드는 것이다.

---

## 2. 핵심 결정 사항

### 2.1 감염 Specialty의 기본 정렬은 원인균 중심으로 유지한다

현재 감염 분과의 기본 구조는 다음 원칙을 유지한다.

- `G(+)`
- `G(-)`
- 혐기성균
- atypical 및 기타 세균
- 바이러스
- 진균
- 원생동물
- 기생충
- 원내감염
- 면역저하자 등 특수 상황

감염 부위나 장기별 질환을 기준으로 기존 목차를 전면 재편하지 않는다. 폐렴, 요로감염, 감염심내막염, 수막염처럼 장기별 분과에서 관리하는 질환은 원래 위치를 유지한다.

### 2.2 기존 노트를 관계 데이터의 저장소로 사용하지 않는다

개별 질환 노트의 치료 문장을 자동으로 파싱하여 추천 데이터로 사용하지 않는다. 노트마다 작성 시점과 상세도가 다르고, 동일 문서 안에서도 단순 요약과 조건부 설명이 함께 있을 수 있기 때문이다.

질환-병원체-항생제 관계는 별도의 canonical dataset에서 명시적으로 관리한다.

### 2.3 기존 구조 위에 기능을 추가한다

이 개발은 다음을 원칙으로 한다.

- 기존 `.md` 파일의 이동을 최소화한다.
- 기존 YAML의 `계통`, `분류`, `관련분과` 의미를 바꾸지 않는다.
- 기존 disease slug와 drug slug를 유지한다.
- 기존 감염 목차와 약물 분류 화면을 대체하지 않는다.
- 새 기능은 독립적인 route와 component로 추가한다.
- 기존 `antibiotic-spectrum.json`을 복제하지 않고 참조한다.

---

## 3. 현재 상태

2026-07-17 기준 확인 결과는 다음과 같다.

### 3.1 Specialty > 감염

- `source_notes/02 Diseases/08 감염`에 `_목차.md`를 제외한 Markdown 문서가 83개 있다.
- 73개 문서에 치료 section이 있다.
- 70개 문서에 출처 또는 `sources` 표기가 있다.
- 병원체 노트, 질환 노트, 임상 증후군, 환경 분류용 index 노트가 함께 존재한다.
- 현재 `_목차.md`는 G(+), G(-), 기타, 바이러스, 진균, 원생동물, 기생충, 발열, 원내감염, 지역사회 순서를 정의한다.
- `원생돌물`처럼 명백한 오탈자와 일부 분류 불일치는 별도 정리가 필요하다.

### 3.2 다른 Specialty의 주요 감염질환

감염질환 전체가 `08 감염` 폴더에 있는 것은 아니다.

| 임상 영역 | 기존 관리 위치 예시 |
|---|---|
| 폐렴 | `02 호흡기` |
| UTI, cystitis, pyelonephritis | `05 신장` |
| infective endocarditis | `01 순환기` |
| spontaneous bacterial peritonitis | `03 소화기` |
| meningitis | `16 신경과-신경외과`, `14 소아청소년과` |
| otitis media, sinusitis | `17 이비인후과`, `14 소아청소년과` |
| 소아 감염 | `14 소아청소년과` |

이 문서들을 감염 폴더로 복제하거나 이동하지 않는다. 기존 `관련분과`와 별도의 관계 dataset을 이용하여 감염 화면에서 조회한다.

### 3.3 항생제 overview

- route: `/drugs/antibiotics`
- canonical source: `source_notes/04 Pharmacology/08 감염/_data/antibiotic-spectrum.json`
- 현재 schema version: `1`
- 병원체 및 내성 phenotype: 20개
- 항생제: 57개
- 주요 기능: spectrum matrix, 균→항생제, 항생제→균, quiz
- 개별 항생제는 기존 약물 노트로 연결된다.

### 3.4 기존 Clinical graph의 한계

현재 `clinical-relations.json`과 `RelatedClinicalContent`는 질환·약물·검사 등 범용 관계를 보여준다. 하지만 감염 치료에 필요한 다음 관계를 구분하지 못한다.

- 흔한 원인균과 드문 원인균
- 경험적 치료와 표적치료
- 1차 선택과 대체 선택
- 단독요법과 병용요법
- 지역사회와 원내 발생
- 중증도와 숙주 조건
- intrinsic resistance와 지역 내성률
- 감염 부위별 약동학적 예외

따라서 범용 Clinical graph는 유지하되, 감염 전용 관계 dataset과 UI를 별도로 둔다.

---

## 4. 범위

### 4.1 1차 범위

- 세균성 감염을 중심으로 한 질환-병원체-항생제 연결
- 성인에서 흔하거나 즉시 치료 판단이 중요한 감염
- 지역사회 감염과 원내감염의 구분
- 경험적 치료와 배양 후 표적치료의 구분
- 기존 질환·병원체·항생제 노트로의 양방향 연결
- 근거 출처, guideline 연도, 검토 상태 표시

### 4.2 후속 범위

- 소아 감염
- 임신 중 감염
- 면역저하자 및 neutropenic fever
- 항진균 치료
- 항바이러스 치료
- 항기생충 치료
- 예방적 항균요법
- 수술 전 예방적 항생제
- 치료 기간 및 IV-to-PO 전환 세부 도구

### 4.3 비범위

- 환자별 자동 처방
- 용량 자동 산출
- 신기능·간기능에 따른 자동 dose adjustment
- 기관별 antibiogram을 반영하지 않은 절대적 항생제 순위
- 배양 결과를 대신하는 definitive susceptibility 판정
- 비검수 Markdown 문장에서 자동 생성한 치료 추천의 공개

---

## 5. 정보 구조

### 5.1 Specialty > 감염

기존 원인균 중심 목록 위에 간결한 도구 진입부를 추가한다.

```text
08 감염
├─ 임상 도구
│  ├─ 질환별 항균치료
│  ├─ 균 → 항생제
│  ├─ 항생제 → 균
│  └─ 항생제 overview
└─ 기존 원인균 중심 노트 목록
   ├─ G(+)
   ├─ G(-)
   ├─ 혐기성균 및 기타 세균
   ├─ 바이러스
   ├─ 진균
   ├─ 원생동물
   ├─ 기생충
   ├─ 원내감염
   └─ 특수 상황
```

도구 영역은 기존 section grouping과 시각적으로 분리한다. 기존 병원체 목록의 순서와 노트 링크를 밀어내거나 숨기지 않는다.

### 5.2 질환별 항균치료 route

권장 route:

`/specialty/{infectionSlug}/treatment-pathways`

이 route를 감염 Specialty 아래에 두는 이유는 사용자의 출발점이 약물보다 감염질환과 임상 상황이기 때문이다. 다만 데이터는 Drugs의 항생제 spectrum과 공유한다.

### 5.3 양방향 URL 상태

선택 상태는 query parameter로 공유할 수 있어야 한다.

```text
/specialty/{infectionSlug}/treatment-pathways?disease=community-acquired-pneumonia
/specialty/{infectionSlug}/treatment-pathways?organism=pseudomonas-aeruginosa
/drugs/antibiotics?organism=pseudomonas-aeruginosa
/drugs/antibiotics?antibiotic=cefepime
```

이를 통해 새 창, 뒤로가기, 링크 공유, 개별 노트에서 특정 결과로 이동하는 기능을 지원한다.

---

## 6. Canonical 데이터 설계

### 6.1 파일 위치

권장 원본 위치:

`source_notes/02 Diseases/08 감염/_data/infection-pathways.json`

빌드 결과:

`_webapp/data/infection-pathways.json`

병원체 및 항생제 상세 정보는 다음 파일을 계속 기준으로 사용한다.

`source_notes/04 Pharmacology/08 감염/_data/antibiotic-spectrum.json`

### 6.2 식별자 원칙

- `diseaseSlug`: 현재 `diseases.json`의 slug를 사용한다.
- `organismId`: `antibiotic-spectrum.json`의 organism ID를 재사용한다.
- `antibioticId`: `antibiotic-spectrum.json`의 antibiotic ID를 재사용한다.
- `drugSlug`: 기존 약물 페이지 연결에만 사용하고 중복 저장을 최소화한다.
- 하나의 명칭에 여러 ID를 만들지 않는다.
- 균종과 resistance phenotype을 구분한다.
  - 예: `staphylococcus-aureus`와 `mrsa`
  - 예: `enterobacterales`와 `esbl-enterobacterales`

### 6.3 권장 schema

```json
{
  "schemaVersion": 1,
  "reviewedAt": "YYYY-MM-DD",
  "sources": [],
  "pathways": [
    {
      "id": "adult-community-acquired-pneumonia",
      "displayName": "성인 지역사회획득폐렴",
      "diseaseSlug": "existing-disease-slug",
      "infectionSite": "lower-respiratory-tract",
      "setting": "community",
      "population": ["adult"],
      "severity": ["outpatient", "inpatient", "severe"],
      "exclusions": ["major-immunocompromise"],
      "diagnosticNotes": [],
      "sourceControlNotes": [],
      "pathogenGroups": [
        {
          "context": "standard-risk",
          "organisms": [
            {
              "organismId": "streptococcus-pneumoniae",
              "likelihood": "common",
              "notes": []
            }
          ]
        }
      ],
      "empiricRegimens": [
        {
          "id": "cap-outpatient-standard",
          "context": "outpatient-standard-risk",
          "rank": "preferred",
          "components": [
            {
              "antibioticIds": ["amoxicillin"],
              "selection": "one-of"
            }
          ],
          "conditions": [],
          "avoidWhen": [],
          "notes": [],
          "sourceIds": []
        }
      ],
      "targetedTherapies": [
        {
          "organismId": "streptococcus-pneumoniae",
          "susceptibilityCondition": "susceptible-isolate",
          "rank": "preferred",
          "antibioticIds": ["penicillin-g"],
          "notes": [],
          "sourceIds": []
        }
      ],
      "reviewStatus": "verified",
      "reviewedBy": "",
      "reviewedAt": "YYYY-MM-DD"
    }
  ]
}
```

### 6.4 필수 enum

#### Setting

- `community`
- `healthcare-associated`
- `hospital-acquired`
- `ventilator-associated`
- `procedure-associated`

`healthcare-associated`는 과거 HCAP처럼 일괄 광범위 항생제를 유도하는 독립 진단명이 아니라, 구체적인 내성 위험인자를 표현하는 보조 맥락으로만 사용한다.

#### Population

- `adult`
- `pediatric`
- `neonate`
- `pregnant`
- `immunocompromised`
- `neutropenic`

#### Likelihood

- `common`
- `important`
- `risk-factor-dependent`
- `uncommon`
- `excluded`

#### Regimen rank

- `preferred`
- `alternative`
- `conditional`
- `salvage`
- `not-recommended`

#### Review status

- `draft`: 작성 중이며 UI 추천 결과에 노출하지 않음
- `reviewed`: source와 ID 연결을 검토함
- `verified`: 임상 조건과 최신 guideline을 교차 검증함
- `retired`: 오래되었거나 대체되어 사용하지 않음

### 6.5 병용요법 표현

항생제 배열 하나로 병용요법을 표현하지 않는다.

```json
"components": [
  {
    "antibioticIds": ["ceftriaxone", "cefotaxime"],
    "selection": "one-of"
  },
  {
    "antibioticIds": ["azithromycin", "doxycycline"],
    "selection": "one-of"
  }
]
```

위 구조는 `beta-lactam 중 하나 AND atypical coverage 중 하나`를 의미한다. `one-of`, `all-of`, `optional`을 명시해 조합 해석 오류를 막는다.

### 6.6 중복 저장 금지

`infection-pathways.json`에는 다음을 중복 저장하지 않는다.

- 항생제 route
- pregnancy status
- 전체 spectrum matrix
- drug class
- 개별 약물 부작용과 금기
- 약물 노트 본문

이 정보는 `antibiotic-spectrum.json` 또는 기존 약물 노트에서 읽는다.

---

## 7. UI 상세 계획

### 7.1 감염 Specialty 진입부

감염 분과 header 아래에 `감염 임상 도구` 한 줄 또는 compact card group을 둔다.

필수 진입 버튼:

- `질환별 항균치료`
- `균 → 항생제`
- `항생제 → 균`
- `항생제 overview`

요구사항:

- 기존 원인균 분류보다 지나치게 큰 hero를 사용하지 않는다.
- mobile에서 한 줄에 억지로 네 버튼을 배치하지 않는다.
- 2열 grid 또는 horizontal scroll을 사용한다.
- icon, 짧은 이름, 명확한 active/focus state를 적용한다.
- 항생제 overview의 기존 query state와 호환한다.

### 7.2 질환별 항균치료 탐색기

기본 진입 상태에서는 질환 검색과 임상 영역을 제공한다.

필터:

- 질환명 및 alias 검색
- 감염 부위
- community / hospital-acquired
- 성인 / 소아 / 임신 / 면역저하
- 외래 / 입원 / 중증
- MRSA 위험
- Pseudomonas 위험
- ESBL 및 기타 내성 위험

결과 순서:

1. 선택한 질환과 적용 대상
2. 즉시 확인할 중증도 및 red flag
3. 권장 검사와 배양
4. 주요 예상 원인균
5. 경험적 항균요법
6. source control
7. 배양 후 표적치료로 전환하는 원칙
8. 관련 질환 노트와 항생제 노트
9. 출처와 검토일

### 7.3 병원체 결과

병원체를 선택하면 다음을 표시한다.

- 균명, Gram/형태, 주요 resistance phenotype
- 흔히 연관되는 감염질환
- 감염 부위별로 신뢰 가능한 항생제
- 감수성 확인이 필요한 항생제
- intrinsic resistance
- 선택한 질환에서의 임상적 중요도
- 항생제 overview의 해당 column으로 이동하는 링크
- 기존 병원체 노트 링크

일반 spectrum과 특정 감염의 치료 선택을 같은 의미로 표시하지 않는다.

### 7.4 항생제 결과

항생제를 선택하면 다음을 표시한다.

- 기존 spectrum 요약
- 관련 감염질환
- 해당 질환에서의 위치: 경험적, 표적, 대체, 병용
- 감염 부위별 caveat
- 병원체별 활성 수준
- 기존 약물 노트 링크

### 7.5 질환 노트 내 연결 패널

검증된 pathway가 존재하는 질환 노트에만 `감염 치료 연결` panel을 표시한다.

패널 내용:

- 주요 예상 원인균 최대 3~5개
- 임상 조건별 경험적 요법 요약
- `전체 치료 경로 보기`
- 각 병원체 및 항생제의 상세 링크

질환 본문의 `치료` section을 대체하지 않는다. panel은 canonical 관계 데이터의 compact view다.

### 7.6 항생제 overview와 연결

기존 `/drugs/antibiotics` 기능은 유지한다.

추가 기능:

- 균 선택 결과에 `관련 감염질환` 표시
- 항생제 선택 결과에 `이 약물이 사용되는 감염질환` 표시
- 질환 이름을 누르면 기존 질환 노트로 이동
- `질환별 항균치료에서 보기` 링크 제공
- query parameter로 기존 선택 상태를 복구

### 7.7 Mobile 및 접근성

- 44px 이상의 touch target을 사용한다.
- 긴 regimen은 문장으로 압축하지 않고 component 단위로 줄바꿈한다.
- 색상만으로 preferred/alternative/conditional을 구분하지 않는다.
- keyboard navigation과 visible focus를 제공한다.
- matrix 또는 관계도가 필요한 경우 전체 화면 보기를 지원한다.
- 작은 화면에서는 3단 관계도를 세로 단계형 UI로 변환한다.

---

## 8. 원인균 중심 Specialty와의 연결 방식

### 8.1 병원체 노트를 기준점으로 사용한다

감염 Specialty의 각 병원체 노트는 해당 병원체의 임상적 특징을 설명하는 기준 페이지로 유지한다.

연결 예시:

```text
Pseudomonas aeruginosa 병원체 노트
├─ 흔한 감염: HAP/VAP, complicated UTI, bacteremia 등
├─ 관련 내성 phenotype
├─ 항생제 overview에서 spectrum 보기
└─ 질환별 치료 경로 보기
```

병원체 노트에 질환별 항생제 regimen 전체를 반복 작성하지 않는다.

### 8.2 원인균 분류와 임상 증후군을 별도 axis로 둔다

기존 목차는 병원체 taxonomy를 담당한다. 새 탐색기는 임상 증후군 axis를 제공한다.

```text
기존 목차: 어떤 병원체인가?
새 탐색기: 어떤 감염질환에서 어떤 병원체를 고려하는가?
항생제 overview: 어떤 약물이 어떤 병원체에 활성이 있는가?
```

세 axis를 하나의 목차로 합치지 않고 링크와 공통 ID로 결합한다.

### 8.3 원내감염은 독립 임상 맥락으로 유지한다

원내감염은 병원체 하나로 설명할 수 없고, 내성 위험과 의료기기·수술·재원기간이 치료 선택을 크게 바꾸므로 별도 영역으로 유지한다.

우선 포함 대상:

- HAP/VAP
- catheter-related bloodstream infection
- catheter-associated UTI
- surgical site infection
- C. difficile infection
- healthcare-associated intra-abdominal infection
- device/prosthesis-related infection

단순히 `원내 = 광범위 항생제`로 처리하지 않고, 구체적인 내성 위험인자와 기관 antibiogram 확인을 요구한다.

---

## 9. 콘텐츠 우선순위

### 9.1 Pilot 4개 질환

schema와 UI를 검증하기 위해 먼저 다음 질환만 구현한다.

1. 성인 community-acquired pneumonia
2. acute cystitis / acute pyelonephritis
3. cellulitis 및 purulent skin infection
4. sepsis with suspected bacterial infection

선정 이유:

- 서로 다른 감염 부위를 포함한다.
- 외래와 입원을 모두 검증할 수 있다.
- 경험적 치료와 중증도 분기가 필요하다.
- MRSA, Pseudomonas 등 위험인자 분기를 시험할 수 있다.
- 기존 질환 노트와 항생제 노트가 이미 존재한다.

### 9.2 2차 확장

- infective endocarditis
- bacterial meningitis
- intra-abdominal infection
- acute cholangitis
- spontaneous bacterial peritonitis
- osteomyelitis
- septic arthritis
- catheter-related bloodstream infection
- HAP/VAP
- febrile neutropenia

### 9.3 3차 확장

- ENT infection
- STI
- diabetic foot infection
- prosthetic joint infection
- bite wound infection
- obstetric and gynecologic infection
- neonatal and pediatric infection
- opportunistic infection

### 9.4 병원체 목록 감사

기존 20개 organism/phenotype으로 충분한지 다음 기준으로 검사한다.

- 주요 G(+) cocci
- 주요 G(-) cocci와 bacilli
- Enterobacterales 세분화 필요성
- anaerobe
- atypical organism
- MRSA, VRE, ESBL, AmpC, CRE, MDR Pseudomonas, CRAB
- 병원체 노트는 있으나 spectrum dataset에 없는 항목
- spectrum dataset에는 있으나 병원체 노트가 없는 항목

병원체를 무조건 세분화하지 않는다. 치료 선택을 실제로 바꾸는 수준에서만 별도 ID를 만든다.

---

## 10. 출처 및 의학적 검증

### 10.1 출처 우선순위

#### Tier A: 핵심 근거

- 국내 관련 전문학회 최신 진료지침
- 질병관리청 및 식품의약품안전처 공식 자료
- IDSA 및 질환별 국제 전문학회 guideline
- WHO guideline
- CDC 공식 clinical guidance
- NICE guideline
- 공식 의약품 허가사항과 label

#### Tier B: 교차 검증

- peer-reviewed systematic review
- 주요 학술지 review 및 consensus statement
- Merck Manual Professional
- StatPearls는 원문 guideline 확인을 돕는 보조 자료로만 사용

#### Tier C: 탐색 보조

- 신뢰도가 확인된 전문의 교육 자료와 블로그
- 병원 antimicrobial stewardship 자료

Tier C는 topic 발견과 설명 방식 참고에 사용할 수 있지만, regimen 또는 금기 판단의 단독 근거로 사용하지 않는다.

### 10.2 검증 규칙

각 pathway는 최소 다음 조건을 만족해야 `verified`가 된다.

- 최신 전문학회 guideline 또는 동등한 Tier A 출처 1개 이상
- 서로 독립적인 출처를 이용한 교차 검증
- 적용 인구, 감염 환경, 중증도 명시
- 경험적 치료와 표적치료 분리
- 주요 내성 위험과 감염 부위 예외 확인
- 항생제 ID와 병원체 ID가 canonical dataset에 존재
- 출처 발행연도와 검토일 저장
- 오래된 guideline 사용 시 최신 대체 자료 존재 여부 확인

### 10.3 국내 적용성

국제 guideline을 그대로 국내 권고로 표시하지 않는다.

다음 항목을 별도로 확인한다.

- 국내 허가 여부와 제형
- 국내에서 사용 가능한 항생제
- 국내 내성률 및 질병관리청 자료
- 국내 보험·처방 관행은 임상 근거와 구분
- 국내 전문학회 권고와 국제 guideline 차이
- 기관별 antibiogram이 필요한 판단

### 10.4 정보 표현 안전장치

- 정확한 용량을 검증하지 않았다면 dose를 표시하지 않는다.
- 치료 기간은 질환, source control, 임상 반응에 따라 달라지는 경우 범위와 조건을 함께 표시한다.
- allergy를 단일 `penicillin allergy` boolean으로 처리하지 않는다.
- 임신은 과거 FDA letter category를 사용하지 않는다.
- 신기능·간기능·투석 상태는 별도 dose 조정이 필요하다고 명시한다.
- 배양 전 경험적 선택과 배양 후 표적 선택을 같은 목록에 섞지 않는다.
- local resistance가 큰 항생제는 `preferred`로 고정하지 않는다.

---

## 11. Build 및 코드 구조

### 11.1 예상 파일

```text
source_notes/02 Diseases/08 감염/_data/
└─ infection-pathways.json

_webapp/data/
└─ infection-pathways.json

apps/medicine-web/src/app/specialty/[slug]/treatment-pathways/
└─ page.tsx

apps/medicine-web/src/components/
├─ infection-tool-entry.tsx
├─ infection-pathway-explorer.tsx
├─ infection-pathway-card.tsx
└─ disease-infection-panel.tsx

apps/medicine-web/src/lib/
├─ types.ts
└─ webdb.ts

workspace_ops/scripts/ 또는 기존 build script
└─ validate_infection_pathways.py
```

실제 파일명은 기존 build pipeline을 확인한 뒤 조정하되, source data와 generated data의 구분은 유지한다.

### 11.2 TypeScript type

다음 type을 추가한다.

- `InfectionPathwayDataset`
- `InfectionPathway`
- `PathogenContext`
- `EmpiricRegimen`
- `TargetedTherapy`
- `RegimenComponent`

`AntibioticEntry`와 `AntibioticOrganism`을 중복 선언하지 않는다.

### 11.3 webdb 함수

예상 함수:

- `getInfectionPathways()`
- `getInfectionPathwayById(id)`
- `getInfectionPathwaysForDisease(slug)`
- `getInfectionPathwaysForOrganism(id)`
- `getInfectionPathwaysForAntibiotic(id)`

static export를 유지하므로 서버 database와 runtime API를 추가하지 않는다.

### 11.4 검증 script

build 전에 다음을 검사한다.

- schema version
- 중복 pathway ID
- 존재하지 않는 disease slug
- 존재하지 않는 organism ID
- 존재하지 않는 antibiotic ID
- 빈 `sourceIds`
- `verified`인데 `reviewedAt`이 없는 항목
- `verified`인데 Tier A source가 없는 항목
- `preferred`와 `not-recommended`가 같은 조건에서 충돌하는 항목
- `one-of`/`all-of`가 잘못 구성된 병용요법
- retired source만 참조하는 항목

검증 실패 시 generated JSON 갱신과 배포를 중단한다.

---

## 12. 기존 Markdown 및 YAML 변경 규칙

### 12.1 허용되는 변경

- 명백한 오탈자 수정
- 누락된 `관련분과: 감염` 추가
- 병원체 alias 보충
- 공식 출처와 검토일 추가
- 잘못된 사실의 국소 수정
- pathway 연결용 panel이 자동 표시되도록 기존 slug 유지

### 12.2 피해야 할 변경

- 감염질환이라는 이유만으로 파일을 `08 감염`로 이동
- 기존 장기별 `계통`을 `감염`으로 일괄 변경
- 모든 질환 노트에 중복 regimen 삽입
- 기존 `분류`를 새 UI에 맞추기 위해 대량 재작성
- 노트 제목 변경으로 slug를 깨뜨리는 작업
- 검수 없이 Gemini 등 LLM 결과를 본문 또는 canonical dataset에 반영

### 12.3 관련분과 사용 원칙

다른 specialty에 존재하는 감염질환은 필요한 경우 다음과 같이 연결한다.

```yaml
관련분과:
  - 감염
```

단, 감염 페이지의 기존 원인균 중심 목록이 관계 노트로 과도하게 뒤섞이지 않도록 `관련분과` 노출 방식은 UI에서 별도 section으로 제어한다. 단순히 관련분과를 대량 추가하여 현재 목록에 그대로 섞는 방식은 사용하지 않는다.

---

## 13. Quiz 확장 계획

Quiz는 pathway dataset의 `verified` 항목만 사용한다.

문제 유형:

- 질환 → 흔한 원인균
- 질환과 위험인자 → 추가로 고려할 원인균
- 질환과 중증도 → 적절한 경험적 regimen
- 배양 결과 → de-escalation할 표적 항생제
- 항생제 → 주요 coverage gap
- 감염 부위 → 사용하면 안 되는 항생제 또는 caveat
- 원내감염 scenario → 필요한 내성 위험 평가

초기에는 자동 생성 문제를 바로 공개하지 않는다. pathway마다 검수된 question template을 두고, 오답 해설에 source와 관련 노트 링크를 표시한다.

---

## 14. 단계별 구현 계획

### Phase 0. 구조 보존 감사

- 감염 `_목차.md`와 83개 노트의 유형을 분류한다.
- 병원체 노트, 질환 노트, index 노트를 구분한다.
- 오탈자와 깨진 wikilink를 찾는다.
- 다른 specialty의 핵심 감염질환 목록을 만든다.
- 기존 slug와 related specialty 동작을 snapshot으로 저장한다.
- 대량 이동이나 YAML 재작성 없이 수정 가능한 범위를 확정한다.

완료 조건:

- 기존 감염 Specialty의 노트 수와 주요 링크가 변경 전후 동일하다.
- 원인균 중심 section 순서가 유지된다.
- 수정 대상과 비수정 대상이 목록화된다.

### Phase 1. 데이터 계약 및 validator

- `infection-pathways.json` schema를 확정한다.
- TypeScript type을 작성한다.
- 기존 organism/antibiotic ID와 연결한다.
- validator와 build copy 과정을 구현한다.
- `draft` 데이터가 UI에 노출되지 않도록 한다.

완료 조건:

- 잘못된 slug와 ID가 build 전에 검출된다.
- source가 없는 verified 항목이 차단된다.
- 기존 antibiotic overview build에 회귀가 없다.

### Phase 2. Pilot 콘텐츠

- CAP, UTI, cellulitis, sepsis pathway를 작성한다.
- 질환별 guideline을 수집한다.
- 국내 적용성을 교차 검증한다.
- 예상 원인균, 경험적 regimen, 표적치료 관계를 등록한다.
- 각 항목에 source와 검토 상태를 붙인다.

완료 조건:

- 네 질환 모두 `verified` pathway를 최소 1개 가진다.
- 외래/입원 또는 경증/중증 분기가 필요한 질환에서 분기가 표현된다.
- 항생제 ID와 병원체 ID가 모두 유효하다.

### Phase 3. Specialty 진입부와 탐색기

- 감염 Specialty에서만 도구 진입부를 표시한다.
- 질환별 항균치료 route를 추가한다.
- 검색, setting, population, severity filter를 구현한다.
- 질환 → 병원체 → 항생제 흐름을 표시한다.
- mobile layout과 접근성을 검증한다.

완료 조건:

- 기존 감염 목차가 그대로 표시된다.
- 네 pilot 질환을 검색하고 결과를 확인할 수 있다.
- mobile 320~430px에서 horizontal overflow로 화면이 깨지지 않는다.

### Phase 4. 양방향 연결

- 질환 노트에 compact infection panel을 추가한다.
- 병원체 노트에서 관련 질환과 항생제를 연결한다.
- 항생제 overview에 관련 질환을 표시한다.
- query parameter를 통해 선택 상태를 전달한다.
- 존재하지 않는 관계는 panel 자체를 표시하지 않는다.

완료 조건:

- 질환 → 항생제 overview → 약물 노트 → 관련 질환으로 왕복할 수 있다.
- 동일 정보를 여러 JSON에 중복 저장하지 않는다.
- 뒤로가기와 URL 공유가 정상 작동한다.

### Phase 5. 임상 범위 확대

- 2차 우선순위 감염을 추가한다.
- 원내감염을 별도 맥락으로 확장한다.
- 병원체 및 내성 phenotype 누락을 보완한다.
- guideline 변경 추적 체계를 적용한다.

완료 조건:

- 주요 장기별 중증 감염이 최소 한 pathway로 연결된다.
- 원내감염에서 구체적인 내성 위험 조건이 표현된다.
- 모든 공개 pathway가 검증 상태와 출처를 가진다.

### Phase 6. Quiz와 유지보수 자동화

- verified pathway 기반 quiz를 추가한다.
- source 발행연도와 review age를 검사한다.
- 오래된 pathway report를 생성한다.
- 변경 diff에서 임상 관계 변화를 사람이 검토할 수 있게 한다.

완료 조건:

- 미검수 관계가 quiz 정답으로 사용되지 않는다.
- 오답 해설에서 근거와 관련 페이지로 이동할 수 있다.
- 정기 검토 대상이 자동 목록화된다.

---

## 15. 테스트 계획

### 15.1 데이터 테스트

- 모든 disease slug 존재 여부
- 모든 organism ID 존재 여부
- 모든 antibiotic ID 존재 여부
- 중복 ID와 고아 관계 검사
- verified source completeness
- enum 이외의 값 차단
- 병용요법 component 해석 테스트

### 15.2 UI 테스트

- 감염 Specialty에만 도구 entry가 나타나는지 확인
- 원인균 중심 기존 group과 순서 유지 확인
- 검색 alias 확인
- filter 조합과 초기화 확인
- query parameter 복원 확인
- 질환·병원체·항생제 링크 확인
- 빈 결과와 데이터 없음 상태 확인
- mobile 전체 화면 및 overflow 확인

### 15.3 회귀 테스트

- 모든 기존 specialty page static generation
- 모든 disease page static generation
- `/drugs/antibiotics` 기존 matrix와 quiz
- 개별 drug page의 antibiotic overview 링크
- search index와 Clinical graph
- GitHub Pages static export

### 15.4 임상 검수 테스트

각 pilot pathway에서 다음 scenario를 사람이 확인한다.

- 표준 위험 환자
- 중증 환자
- 주요 내성 위험 환자
- allergy 또는 약물 사용 제한이 있는 환자
- 배양 전 경험적 단계
- 배양 후 de-escalation 단계
- source control이 중요한 상황

---

## 16. 위험과 대응

| 위험 | 대응 |
|---|---|
| 기존 감염 목차가 질환 노트로 뒤섞임 | 임상 도구와 관련분과 노출을 별도 section으로 분리 |
| Markdown 치료 문장의 오류가 추천으로 전파됨 | Markdown 자동 추출 금지, canonical dataset 수동 검수 |
| spectrum을 치료 적합성으로 오해 | 감염 부위·중증도·숙주·내성 조건을 별도 관계로 표시 |
| guideline 간 권고 차이 | 지역·발행연도·대상 인구를 source metadata에 명시 |
| 국제 권고를 국내 표준으로 오인 | 국내 허가와 국내 학회 권고를 별도 검토 |
| 데이터 중복으로 내용 불일치 | 약물·병원체 정보는 기존 antibiotic dataset을 단일 기준으로 사용 |
| LLM이 조건을 생략하거나 regimen을 변형 | LLM은 문장 정리 보조로만 사용하고 관계 데이터는 규칙 검증 및 사람 검수 |
| 관계가 많아져 UI가 복잡해짐 | 기본 화면은 핵심 관계만, 조건과 대안은 progressive disclosure |
| 오래된 정보가 계속 노출됨 | reviewedAt, guidelineYear, reviewStatus 및 stale report 사용 |

---

## 17. 배포 전략

### 17.1 Feature flag 또는 데이터 gate

- pilot 기간에는 `verified` pathway만 노출한다.
- dataset이 없거나 validator가 실패하면 기존 Specialty와 antibiotic overview는 그대로 동작해야 한다.
- 새 기능 실패가 기존 질환·약물 페이지 build를 깨뜨리지 않도록 fallback을 둔다.

### 17.2 작은 단위 배포

1. schema와 validator
2. pilot data
3. 감염 Specialty entry
4. treatment pathway page
5. disease/drug cross-link
6. 범위 확대
7. quiz

대량 콘텐츠 추가와 UI 변경을 하나의 배포에 묶지 않는다.

### 17.3 versioning

- dataset schema 변경 시 `schemaVersion`을 올린다.
- 사용자 기능이 추가되는 단계에서 app version을 올린다.
- 임상 데이터만 갱신한 경우 `reviewedAt`과 source 변경을 명확히 기록한다.

---

## 18. 최종 완료 기준

다음 조건을 모두 만족하면 1차 개발 완료로 본다.

- 감염 Specialty의 원인균 중심 목차와 기존 자료구조가 유지된다.
- 감염 페이지 상단에서 네 가지 임상 도구에 진입할 수 있다.
- 최소 10개 주요 감염질환이 verified pathway를 가진다.
- 질환 → 병원체 → 항생제와 역방향 탐색이 가능하다.
- 다른 specialty의 질환 노트를 이동하거나 복제하지 않고 연결한다.
- 항생제 spectrum 정보가 중복 저장되지 않는다.
- 모든 공개 regimen에 공식 source, 대상 조건, 검토일이 있다.
- 경험적 치료와 표적치료가 시각적·구조적으로 구분된다.
- mobile과 desktop에서 핵심 탐색 기능을 사용할 수 있다.
- validator, static build, 링크 검사와 핵심 회귀 테스트를 통과한다.
- 미검수 또는 오래된 정보가 임상 추천처럼 노출되지 않는다.

---

## 19. 권장 첫 작업 묶음

실제 구현을 시작할 때 첫 작업은 다음 범위로 제한한다.

1. 감염 목차와 노트 구조 snapshot 작성
2. `infection-pathways.json` schema 초안 작성
3. disease/organism/antibiotic ID validator 작성
4. CAP 한 건을 `draft`로 입력
5. validator와 generated JSON만 확인
6. UI 구현 전 schema의 임상 조건 표현력이 충분한지 검토

CAP 하나로 다음 질문에 답할 수 있어야 다음 단계로 진행한다.

- 외래와 입원 치료를 구분할 수 있는가?
- 동반질환과 내성 위험인자를 표현할 수 있는가?
- 병용요법을 모호하지 않게 표현할 수 있는가?
- MRSA/Pseudomonas 추가 조건을 표현할 수 있는가?
- 경험적 치료에서 표적치료로 전환할 수 있는가?
- 기존 질환 노트와 항생제 overview를 중복 없이 연결할 수 있는가?

이 검증이 끝난 뒤 UTI, cellulitis, sepsis를 추가하고 UI 개발을 시작한다.
