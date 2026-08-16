# 인터랙티브 의학 페이지 제작 가이드

## 목적

인터랙티브 페이지는 기초의학 내용을 모두 옮기는 별도 교과서가 아니다. 사용자가 변수를 직접 바꾸고 임상 결과가 달라지는 과정을 보면서 질병, 검사, 약물의 연결을 이해할 때 가치가 있는 주제만 만든다.

다음 조건을 만족하는 주제를 우선한다.

- 조절 가능한 원인 또는 생리 변수가 있다.
- 변수 변화가 기전, 검사값, 증상 또는 치료 반응으로 이어진다.
- 정적인 표보다 직접 조작했을 때 오개념을 줄일 수 있다.
- 기존 질병, 검사, 약물 페이지와 실제 연결점이 있다.

## 현재 구조

| 역할 | 경로 |
| --- | --- |
| 페이지 메타데이터와 연결 대상 | `data/interactive-concepts.json` |
| 메타데이터 조회 함수와 타입 | `src/lib/interactive-concepts.ts` |
| 임상 계산 모델 | `src/lib/<concept>-model.ts` |
| p5 시각화 | `src/components/<concept>-p5-canvas.tsx` |
| 조절 UI와 설명 | `src/components/<concept>-lab.tsx` |
| 공통 라우트 | `src/app/interactive/[slug]/page.tsx` |
| 기존 페이지의 역방향 링크 | `src/components/related-interactive-concepts.tsx` |

첫 구현은 `/interactive/acid-base-balance`이다. 신장과 호흡기 Overview에서 같은 페이지를 공유하며, 관련 질병과 검사 페이지에서도 이 페이지로 들어올 수 있다.

## 새 페이지 추가 순서

1. `data/interactive-concepts.json`에 slug, 표시명, 검색어, 요약, 관련 분과와 연결 대상을 등록한다.
2. 계산은 React 컴포넌트에서 분리한 순수 함수로 작성한다. 입력 범위, 단위, 가정과 clamp 범위를 코드에서 명시한다.
3. 조절 UI와 결과 설명은 React가 담당한다. 키보드 접근이 가능한 기본 input과 button을 사용한다.
4. 연속 애니메이션이나 입자 흐름이 필요한 경우에만 p5 캔버스를 추가한다.
5. 공통 라우트에서 slug에 맞는 구현 컴포넌트를 렌더링한다.
6. 관계 생성기를 실행한다. 등록한 분과 Overview에서는 상단에, 질병·검사·약물 페이지에서는 하단 `관련 임상 콘텐츠 > 인터랙티브 개념`에 링크가 나타나는지 확인한다.
7. 검색 결과와 직접 URL을 확인하고 lint, 타입 검사, 프로덕션 빌드를 실행한다.

레지스트리 예시:

```ts
{
  slug: "acid-base-balance",
  title: "Acid-Base Balance",
  shortTitle: "산-염기 균형",
  summary: "조절로 확인할 핵심 임상 기전",
  specialties: ["신장", "호흡기"],
  targets: [
    { type: "disease", title: "산증 (Acidosis)", label: "산증" },
    { type: "lab", title: "Arterial Blood Gas Analysis (ABGA)", label: "ABGA" },
  ],
  status: "prototype",
}
```

`targets.title`은 생성된 DB의 실제 문서 제목과 정확히 같아야 한다. 이름이 맞지 않으면 링크를 추측해서 만들지 않고 표시 대상에서 제외한다.

`targets`는 반드시 연결할 핵심 문서이고, `keywords`는 본문에서 해당 용어가 발견된 문서에 자동 관계를 추가한다. 너무 짧거나 넓은 표현은 관련 없는 문서까지 연결하므로, `ABGA`, `PaCO2`, `산-염기`처럼 개념을 구체적으로 가리키는 용어만 사용한다. 분과 Overview는 키워드 자동 연결에서 제외되고 상단 전용 영역으로만 표시된다.

## p5 사용 규칙

- p5는 Client Component의 `useEffect` 안에서 동적으로 import한다. 서버 렌더링 단계에서는 불러오지 않는다.
- 전역 모드 대신 instance mode를 사용한다. 컴포넌트가 사라질 때 `remove()`로 캔버스와 이벤트를 정리한다.
- 컨테이너 크기는 `ResizeObserver`로 추적한다. 모바일에서도 캔버스가 부모 너비를 넘지 않아야 한다.
- p5는 기전의 시각화만 담당한다. 슬라이더, 버튼, 텍스트 결과와 링크는 React가 담당한다.
- `prefers-reduced-motion`에서는 연속 루프를 중단하고 입력이 바뀔 때만 다시 그린다.
- 캔버스에는 `describe()`로 현재 상태를 설명한다. 색만으로 정상과 이상을 구분하지 않는다.
- 애니메이션이 필요 없는 도식은 HTML/CSS 또는 정적 SVG가 더 단순하면 그것을 사용한다.

## 시각 디자인 기준

- 학생용 플랫 아이콘보다 medical/scientific explainer와 절제된 semi-realistic 2.5D 도해를 지향한다.
- 장기는 실제 해부 구조를 단순화하되 얇은 outline, 저채도 shading과 작은 cutaway로 깊이를 표현한다. 굵은 검은 외곽선, 만화체, glossy 3D는 사용하지 않는다.
- 기본 surface는 저채도 회색·청록·조직색으로 구성하고 CO₂, HCO₃⁻, H⁺처럼 조작 의미가 있는 변수만 accent color를 사용한다.
- particle 수는 농도, 이동 속도·방향·선 굵기는 flux 또는 보상 방향처럼 계산된 상태를 반영해야 한다. 의미 없는 부유 입자는 넣지 않는다.
- 폐 팽창, 폐포 CO₂ 제거, bicarbonate buffer, renal handling은 하나의 연속된 시스템으로 읽혀야 한다.
- inset은 alveolus, nephron, reaction처럼 주 화면의 기전을 확대할 때만 사용하고 모바일에서는 핵심 흐름을 위해 생략할 수 있다.
- 화면은 개별 교육 카드의 모음보다 하나의 polished physiology interface처럼 구성한다.

## 임상 내용 규칙

- 페이지에서 사용하는 식, 정상 범위와 보상 규칙은 신뢰 가능한 근거로 검토한다.
- 단순화한 값은 실제 환자 측정값처럼 표현하지 않는다. 모델의 가정과 한계를 화면에 명시한다.
- 하나의 입력 결과만으로 진단을 확정하지 않는다. 혼합성 장애나 서로 구분할 수 없는 상태는 그대로 불확실성을 표시한다.
- 임상 의사결정에 필요한 최소한의 기전만 설명하고, 조작과 관계없는 대사경로 나열은 넣지 않는다.
- 관련 문서 링크는 현재 DB에 존재하는 제목으로 검증한다.

## 검증 체크리스트

- 정상 프리셋이 정상 범위의 값을 만든다.
- 각 단일 장애 프리셋이 예상 방향으로 pH, PaCO2, HCO3-를 바꾼다.
- 보상 조작이 원발 장애를 제거한 것으로 표현되지 않는다.
- 모든 슬라이더를 키보드로 조작할 수 있고 결과 영역이 `aria-live`로 갱신된다.
- reduced motion에서 화면 내용이 사라지지 않는다.
- 데스크톱과 모바일에서 조절 UI, 캔버스와 긴 문서명이 겹치지 않는다.
- 관련 분과 Overview와 등록된 기존 문서 양쪽에서 이동할 수 있다.
- `concept:` 및 `개념:` 검색으로 페이지를 찾을 수 있다.
- ESLint, TypeScript, Next 프로덕션 빌드가 통과한다.
