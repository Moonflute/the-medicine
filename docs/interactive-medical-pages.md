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

현재 구현은 `/interactive/acid-base-balance`와 `/interactive/oxygenation-gas-exchange`이다. 산-염기 페이지는 신장과 호흡기, 산소화 페이지는 호흡기·혈액·순환기 Overview에서 공유하며 관련 질병과 검사 페이지에서도 들어올 수 있다.

## 새 페이지 추가 순서

1. `data/interactive-concepts.json`에 slug, 표시명, 검색어, 요약, 관련 분과와 연결 대상을 등록한다.
2. 계산은 React 컴포넌트에서 분리한 순수 함수로 작성한다. 입력 범위, 단위, 가정과 clamp 범위를 코드에서 명시한다.
3. 조절 UI와 결과 설명은 React가 담당한다. 키보드 접근이 가능한 기본 input과 button을 사용한다.
4. 연속 애니메이션이나 입자 흐름이 필요한 경우에만 p5 캔버스를 추가한다.
5. 공통 라우트에서 slug에 맞는 구현 컴포넌트를 렌더링한다.
6. 관계 생성기를 실행한다. 등록한 분과 Overview에서는 상단에, 질병·검사·약물 페이지에서는 하단 `관련 임상 콘텐츠 > 인터랙티브 개념`에 링크가 나타나는지 확인한다.
7. 검색 결과와 직접 URL을 확인하고 lint, 타입 검사, 프로덕션 빌드를 실행한다.

서로 연결된 개념이라도 핵심 질문과 조작 변수가 다르면 별도 페이지로 만든다. 예를 들어 산-염기는 `PaCO2/HCO3- → pH`, 산소화는 `FiO2/가스교환/Hb → PaO2/SaO2/CaO2`를 중심으로 분리하고 페이지 상단에 양방향 링크를 둔다.

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
- 움직이는 입자와 선에는 화면 안에 범례를 둔다. 색·형태가 어떤 물질을 뜻하는지와 속도·방향·선 굵기가 나타내는 생리량을 함께 설명한다.
- 폐 팽창, 폐포 CO₂ 제거, bicarbonate buffer, renal handling은 하나의 연속된 시스템으로 읽혀야 한다.
- 장기 사이의 생리 경로는 화살표로 떨어진 도형을 연결하기보다 기도, 혈관, 관강 또는 막이 실제 구조 가까이 이어지는 배치를 우선한다. 물질의 방향은 경로 내부를 움직이는 입자로 보여주고 화살표는 구조적 연결을 그릴 수 없을 때만 보조적으로 사용한다.
- Shunt, bypass와 collateral flow는 독립된 장식 곡선으로 그리지 않는다. 원래 경로에서 분지되고 목표 경로에 다시 합류하는 짧은 평행 구조로 표현하며 굵기와 입자 수가 우회량을 반영해야 한다.
- 장기 내부의 확대 도식은 장기와 별도 기관처럼 연결하지 않는다. 원본 장기에 선택 사각형을 표시하고 가까운 위치에 leader line으로 확대한 cutaway를 배치해 같은 구조의 확대임을 명확히 한다.
- 여러 장기를 한 화면에 배치할 때는 화면의 빈 공간보다 실제 인체의 상하·좌우·전후 관계와 혈류·관강의 진행 방향을 우선한다. 교육상 위치를 옮겨야 하면 body orientation 또는 inset 표기로 실제 해부학적 위치와 화면상의 확대 위치를 구분한다.
- 조절값이 많으면 핵심 원인 변수만 기본 노출하고 보조 생리 변수는 disclosure에 접는다. 숨겨진 변수를 바꾸는 preset을 선택하면 해당 disclosure를 자동으로 열고, 모바일에서는 반복 설명문을 숨겨 조절 영역이 결과보다 길어지지 않게 한다.
- preset은 값을 순간 교체하는 데서 끝내지 않고 `원인 발생 → 급성 변수 변화 → 보상 → 새 평형`의 상태 전이를 보여준다. 폐 보상과 신장 보상은 서로 다른 시간 척도를 사용한다.
- 보상 실행 버튼은 최종값을 즉시 대입하지 않고 입력값, 도해, 시간 표시를 함께 보간해 보상이 진행되는 과정으로 표현한다.
- inset은 alveolus, nephron, reaction처럼 주 화면의 기전을 확대할 때만 사용하고 모바일에서는 핵심 흐름을 위해 생략할 수 있다.
- 화면은 개별 교육 카드의 모음보다 하나의 polished physiology interface처럼 구성한다.

### 생성형 해부 도해 기준

- 코드로 그린 장기 형태가 아이콘처럼 보이거나 해부학적 판독성을 떨어뜨리면 투명 배경의 생성형 raster 도해를 사용한다. 생성 이미지는 정적 해부 기반이며 농도, flux, 팽창, 보상 강조는 코드가 담당한다.
- 같은 페이지의 에셋은 시점, 조명, outline 두께, 조직색과 shading 강도를 통일한다. 기본 프롬프트는 `polished medical/scientific explainer, restrained semi-realistic 2.5D atlas, thin warm-gray contour, muted tissue palette, transparent background`를 공통으로 사용한다.
- 장기는 완전히 보이는 단일 객체로 만들고 UI에서 필요한 연결 방향을 프롬프트에 명시한다. 배경, 패널, vignette, 외부 그림자, glow, 텍스트, 라벨, 화살표와 입자는 이미지에 굽지 않는다.
- 과도한 photorealism, 수술 사진 같은 질감, glossy plastic, dramatic 3D, 만화체와 굵은 검은 외곽선을 피한다. 작은 표시 크기에서도 cortex, medulla, bronchial tree처럼 해당 기전에 필요한 구조가 구분되어야 한다.
- 결과물은 alpha 경계와 불필요한 배경 픽셀을 확인한 뒤 `public/images/physiology/<concept>-<organ>.png`에 저장한다. 페이지에서는 `NEXT_PUBLIC_BASE_PATH`를 붙여 GitHub Pages에서도 같은 경로로 로드한다.
- 이미지 생성에 사용한 최종 프롬프트는 작업 기록에 남겨 다음 페이지의 분위기와 품질을 재현할 수 있게 한다.

## 임상 내용 규칙

- 페이지에서 사용하는 식, 정상 범위와 보상 규칙은 신뢰 가능한 근거로 검토한다.
- 단순화한 값은 실제 환자 측정값처럼 표현하지 않는다. 모델의 가정과 한계를 화면에 명시한다.
- 하나의 입력 결과만으로 진단을 확정하지 않는다. 혼합성 장애나 서로 구분할 수 없는 상태는 그대로 불확실성을 표시한다.
- 임상 의사결정에 필요한 최소한의 기전만 설명하고, 조작과 관계없는 대사경로 나열은 넣지 않는다.
- 관련 문서 링크는 현재 DB에 존재하는 제목으로 검증한다.
- 산소화 모델은 PAO2, PaO2, SaO2와 CaO2를 구분한다. SaO2만으로 조직 산소 운반량을 대신하지 않고 Hb와 dissolved O2를 포함한 산소함량을 함께 표시한다.
- V/Q 불균형처럼 단일 임상 측정값으로 환산할 수 없는 조작값은 교육용 지수라고 화면에 명시한다. FiO2, 대기압, RQ, 체온, mixed venous blood 등 고정 가정도 하단에 공개한다.
- Shunt는 SaO2를 임의로 차감하지 않고 end-capillary blood와 mixed venous blood의 산소함량을 혼합해 계산한다. 산소해리곡선 이동은 최소한 pH에 따른 P50 변화를 반영한다.

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
