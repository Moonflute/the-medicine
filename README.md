# the-medicine

GitHub Pages source for the medicine web app.

## 노트 수정

원본 노트는 `source_notes` 아래에 있습니다. 앱 내용을 바꿀 때는 이 `.md` 파일을 직접 수정하세요. `_webapp/data` 아래 JSON은 빌드 결과물이므로 직접 수정하지 않습니다.

로컬에서 markdown을 수정한 뒤에는 앱 폴더에서 데이터를 다시 생성합니다:

```bash
cd apps/medicine-web
npm run sync:data
```

## 로드맵 작성

분과 페이지 상단에 보이는 로드맵은 `source_notes/08 Specialty Roadmaps` 아래의 `.md` 파일에서 생성됩니다. 파일 하나가 분과 하나의 로드맵입니다.

```txt
source_notes/08 Specialty Roadmaps/산과.md
source_notes/08 Specialty Roadmaps/소아청소년과.md
```

frontmatter에는 어떤 분과에 붙일지와 화면에 보일 제목, 설명, 출처를 적습니다.

```md
---
specialty: 12 산과
title: 산과 시기별 체크 로드맵
description: 임신 전부터 산후까지 시기별 체크포인트를 빠르게 훑는 섹션입니다.
sources:
  - ACOG prenatal testing | https://www.acog.org/womens-health/infographics/prenatal-testing
  - CDC pregnancy vaccines | https://www.cdc.gov/vaccines-pregnancy/
---
```

본문은 `##`가 로드맵 줄(lane), `### 시기 | 제목`이 각 카드입니다. 카드 안의 bullet은 체크포인트로 표시됩니다.

```md
## 임신 전-1삼분기

### 10-13주 | 염색체 선별검사
- cfDNA/NIPT 또는 통합 선별검사 상담
- NT 초음파 시행 여부 확인
```

작성 규칙:

- `specialty`는 분과 이름과 번호를 정확히 씁니다. 예: `12 산과`, `14 소아청소년과`
- 제목 구분자는 `### 시기 | 제목` 형식을 권장합니다.
- lane을 여러 개 만들면 화면에서도 여러 줄의 로드맵으로 표시됩니다.
- 수정 후 `npm run sync:data`를 실행하면 `_webapp/data/specialty-roadmaps.json`이 다시 생성됩니다.

## 질병 분류

각 질병 페이지는 해당 질병 `.md` 파일의 frontmatter `분류` 목록으로 분과 페이지에 배치됩니다.

Example:

```md
분류:
- 부인과
- 난소종양
- 비상피성난소암
```

현재 앱은 분류 depth를 3단계까지 사용합니다:

```md
- 1단계
  - 2단계
    - 3단계
```

- 1단계: 큰 분과 섹션 제목
- 2단계: 큰 카드형 소분류 제목
- 3단계: 작은 구분선 제목. 단, 해당 3단계 그룹에 질병이 4개 이상일 때만 따로 분리됩니다.

이름은 정확히 같아야 합니다. 예: `난소 종양`과 `난소종양`은 서로 다른 그룹으로 처리됩니다.

## 분과별 목차 파일

각 분과 폴더에 `_목차.md` 파일이 있습니다:

```txt
source_notes/02 Diseases/13 부인과/_목차.md
```

이 파일은 해당 분과 페이지에서 분류 그룹을 어떤 순서로 보여줄지 정합니다. 질병 페이지로는 빌드되지 않습니다.

markdown bullet을 사용하고, depth는 스페이스 2칸씩 들여씁니다. 탭은 쓰지 않는 것을 권장합니다.

올바른 형식:

```md
# 부인과 목차

- 부인과
  - 구조 질환
  - 난소종양
    - 동반질환
    - 비상피성난소암
  - 무월경
  - 불임
  - 피임법
```

Depth 규칙:

- 앞에 공백 없음: 1단계, `분류[0]`과 매칭
- 앞에 스페이스 2칸: 2단계, `분류[1]`과 매칭
- 앞에 스페이스 4칸: 3단계, `분류[2]`과 매칭

순서를 바꾸려면 `_목차.md` 안에서 줄 순서를 옮기면 됩니다. 예를 들어 `피임법`을 `불임`보다 위에 보이게 하려면:

```md
- 부인과
  - 피임법
  - 불임
```

새 분류 그룹을 추가하려면:

1. 질병 `.md` frontmatter의 `분류`에 정확한 그룹명을 넣습니다.
2. 해당 분과의 `_목차.md`에 같은 이름을 원하는 위치에 추가합니다.
3. `npm run sync:data`를 실행합니다.

질병 파일에는 있지만 `_목차.md`에 없는 분류는, 앱에서 목차에 있는 항목 뒤에 가나다순 fallback으로 표시됩니다.
