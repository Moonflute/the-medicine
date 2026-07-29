# 미생물학 DB 및 감염 허브 개편 개발 계획

작성일: 2026-07-29  
대상: `source_notes/09 Microbiology`, 감염 Specialty hub, 항생제 spectrum, 감염 퀴즈, 통합 검색 및 관계 데이터  
목적: 임상적으로 신뢰할 수 있는 병원체 문서를 독립 DB로 구축하고, 감염 허브를 `병원체 | 질환 | 항생제 | 퀴즈` 구조로 정리한다.

---

## 1. 최종 목표

이번 개발이 끝나면 다음 상태가 되어야 한다.

1. `source_notes/09 Microbiology`가 미생물학 원본 Markdown DB로 존재한다.
2. 병원체 문서는 더 이상 질환 문서와 동일한 entity로 취급되지 않는다.
3. species, genus, clinical group, resistance phenotype을 명확히 구분한다.
4. 감염 허브는 `병원체 | 질환 | 항생제 | 퀴즈` 네 개 탭으로 동작한다.
5. 기존 `Spectrum matrix`는 독립 탭이 아니라 `항생제` 탭 안의 비교 도구로 제공한다.
6. `병원체` 탭은 Specialties 화면처럼 분류별 카드와 목록을 제공한다.
7. 병원체 상세 문서에서 관련 질환, 진단검사, 항생제, 내성 phenotype으로 이동할 수 있다.
8. 질환과 항생제 화면에서도 관련 병원체로 역방향 이동할 수 있다.
9. 모든 공개 병원체 문서는 허용된 전문 출처로 작성되고 교차검증을 통과한다.
10. 출처와 검수 상태가 부족한 문서는 공개 데이터와 퀴즈에서 제외된다.
11. 새 하단 navigation tab은 추가하지 않는다.
12. 버전 변경과 배포는 사용자가 별도로 요청한 경우에만 수행한다.

최종 구조를 한 문장으로 정의하면 다음과 같다.

> 미생물학 DB는 병원체 지식의 canonical source이고, 감염 허브는 병원체·질환·항생제 관계를 임상적으로 탐색하는 주 진입점이다.

---

## 2. 확정된 설계 원칙

### 2.1 웹에서는 `항생제`라는 명칭을 사용한다

- 감염 허브의 세 번째 탭 명칭은 `항생제`로 고정한다.
- `항감염제`로 자동 변경하지 않는다.
- 항생제 탭의 1차 범위는 antibacterial drug로 한정한다.
- 항바이러스제, 항진균제, 항기생충제는 해당 병원체와 질환 문서에서 관련 약물로 연결할 수 있다.
- 비세균 치료제가 충분히 구축되기 전에는 항생제 matrix에 억지로 포함하지 않는다.

### 2.2 병원체 DB와 감염 질환 DB를 분리한다

- 병원체 원본은 `source_notes/09 Microbiology`에 둔다.
- 감염 질환은 기존 `source_notes/02 Diseases` 위치를 유지한다.
- 항생제는 기존 `source_notes/04 Pharmacology/08 감염` 위치를 유지한다.
- 기존 질환 slug와 약물 slug를 변경하지 않는다.
- 병원체를 `유형: disease`로 신규 생성하지 않는다.
- 동일한 본문을 미생물학 폴더와 감염 질환 폴더에 중복 저장하지 않는다.

### 2.3 웹 주 진입점은 감염 허브로 제한한다

- 하단 navigation에 Microbiology를 추가하지 않는다.
- Specialties 첫 화면에 미생물학 버튼을 별도로 추가하지 않는다.
- 감염 Specialty hub의 `병원체` 탭을 미생물학 목록의 주 진입점으로 사용한다.
- 병원체 상세 페이지는 전역 검색과 관계 링크를 통해 직접 접근할 수 있다.
- 향후 독립 미생물학 허브가 필요해도 DB와 상세 route를 재사용할 수 있어야 한다.

### 2.4 문서와 구조화 데이터를 역할별로 분리한다

- Markdown은 사람이 읽는 임상 설명의 canonical source다.
- YAML frontmatter는 식별자, 분류, 검색, 검수 상태와 관계 ID를 관리한다.
- spectrum, taxonomy filter, 관계 edge처럼 기계가 사용하는 구조화 정보는 registry JSON으로 관리할 수 있다.
- 동일 임상 권고를 Markdown과 여러 JSON에 반복해서 수동 입력하지 않는다.
- 생성된 `_webapp/data/*.json`은 직접 편집하지 않는다.

### 2.5 임상적 유용성을 기준으로 작성한다

- 순수 분류학 백과사전 형태로 만들지 않는다.
- 의사가 병원체를 마주쳤을 때 필요한 동정, 전파, 질환, 검체, 진단, 치료 원칙, 내성, 감염관리를 우선한다.
- 일반적인 생물학적 사실은 임상 판단에 필요한 범위만 포함한다.
- 질환별 상세 regimen과 용량은 질환 pathway 및 약물 문서와 중복하지 않는다.

---

## 3. 현재 구조와 해결할 문제

### 3.1 현재 source DB

현재 주요 원본 영역은 다음과 같다.

| 영역 | 원본 위치 | 현재 역할 |
|---|---|---|
| Chief Complaint | `source_notes/01 Chief Complaint` | 증상 기반 접근 |
| Diseases | `source_notes/02 Diseases` | 질환 및 Specialty |
| Pathology | `source_notes/03 Pathology` | 아직 실질 콘텐츠 없음 |
| Pharmacology | `source_notes/04 Pharmacology` | 약물 문서 |
| Physiology | `source_notes/05 Physiology` | 생리학 총론 |
| Lab & Img | `source_notes/06 Lab & Img` | 검사 및 영상 |
| Skills | `source_notes/07 Skills` | 술기 |
| Specialty Roadmaps | `source_notes/08 Specialty Roadmaps` | 학습 경로 |

미생물학은 독립 영역이 없으며 병원체 관련 문서가 감염 질환 폴더에 섞여 있다.

### 3.2 기존 병원체 문서의 문제

현재 다음과 같은 문서는 `source_notes/02 Diseases/08 감염`에 있고 `유형: disease`로 처리된다.

- 녹농균
- 대장균
- 레지오넬라
- 리스테리아
- 마이코플라스마
- 수막구균
- 포도상구균
- 혐기성 세균

이 구조에는 다음 문제가 있다.

- 하나의 병원체와 그 병원체가 일으키는 여러 질환이 구분되지 않는다.
- `E. coli` 자체와 EHEC 장염, UTI, 신생아 수막염이 한 문서에 혼합될 수 있다.
- 병원체 문서가 질환 수와 Specialty 통계에 포함될 수 있다.
- 병원체별 공통 동정·내성·감염관리 정보를 질환마다 반복하게 된다.
- 항생제 matrix의 병원체 ID와 질환 문서 slug 사이 관계가 불완전하다.

### 3.3 기존 spectrum organism의 문제

현재 antibiotic spectrum에는 organism 항목이 22개 있으나 동일한 의미 수준이 아니다.

| 종류 | 예시 |
|---|---|
| species | `Listeria monocytogenes`, `Pseudomonas aeruginosa` |
| genus 또는 상위군 | `Neisseria spp.`, `Streptococcus spp.` |
| 임상적 병원체군 | `Enterobacterales`, oral anaerobes, atypical pathogens |
| 내성 phenotype | MRSA, VRE, ESBL, AmpC, CRE |

미생물학 DB에서는 이를 다음과 같이 분리해야 한다.

```text
organism
clinical_group
resistance_phenotype
```

Matrix는 위 세 종류를 모두 열로 사용할 수 있지만, 상세 문서와 taxonomy에서는 서로 다른 entity로 처리해야 한다.

### 3.4 기존 웹 구조의 문제

현재 감염 치료 탐색기는 질환, 균, 항생제, matrix, quiz 기능을 제공하지만 다음 문제가 있다.

- Matrix가 정보 분류와 같은 수준의 top-level tab으로 놓여 있다.
- `균`이 단순 spectrum filter인지 미생물 문서인지 의미가 불분명하다.
- 세균 외 바이러스, 진균, 기생충을 체계적으로 탐색하기 어렵다.
- 병원체 상세 지식과 치료 도구의 경계가 불명확하다.
- 모바일에서 탭 수와 너비가 증가하기 쉽다.

---

## 4. 목표 정보 구조

### 4.1 감염 허브의 네 개 탭

탭 순서와 명칭은 다음으로 고정한다.

```text
[ 병원체 ] [ 질환 ] [ 항생제 ] [ 퀴즈 ]
```

- 기본 진입 탭은 `병원체`로 한다.
- URL query 또는 path state로 현재 탭을 보존한다.
- 뒤로가기, 새로고침, 공유 링크에서 동일한 화면이 복원되어야 한다.
- 모바일에서 네 탭이 한 줄에 들어가도록 icon, label, padding을 조정한다.
- 탭 안에 다시 과도한 하위 탭을 만들지 않고 filter chip, select, section anchor를 사용한다.

권장 URL 상태는 다음과 같다.

```text
/specialty/{infectionSlug}/hub?view=pathogens
/specialty/{infectionSlug}/hub?view=diseases
/specialty/{infectionSlug}/hub?view=antibiotics
/specialty/{infectionSlug}/hub?view=quiz
```

기존 route가 이미 안정적으로 사용 중이면 route를 변경하지 않고 `view` 상태만 적용한다.

### 4.2 병원체 탭

Specialties 첫 화면과 유사한 분류형 화면을 사용한다.

```text
병원체 검색

세균
G(+) 구균 | G(+) 간균 | G(-) 구균·구간균 | G(-) 간균
혐기성균 | 비정형균 | Mycobacteria | Spirochetes

바이러스
호흡기 | Herpesvirus | 간염 | 장관 | 신경계 | 출혈열·매개체

진균
Yeast | Mold | Dimorphic fungi | 기타 기회감염 진균

기생충
Protozoa | Helminths | Ectoparasites

내성 phenotype
MRSA | VRE | ESBL | AmpC | CRE | 기타 주요 phenotype
```

화면 구성 원칙은 다음과 같다.

- 상단 hero는 만들지 않거나 한 줄 제목 수준으로 제한한다.
- 분류별 section과 compact card grid를 사용한다.
- card에는 병원체명, 임상 분류, 핵심 식별 특징을 짧게 표시한다.
- card 전체가 병원체 상세 페이지 링크로 동작한다.
- 검색은 국문명, scientific name, abbreviation, 구명칭, 임상 alias를 지원한다.
- 세균 card에는 Gram stain, morphology, oxygen requirement를 선택적으로 표시한다.
- 바이러스 card에는 genome/family보다 임상적으로 유용한 transmission 또는 대표 syndrome을 우선 표시한다.
- resistance phenotype은 실제 organism과 색 또는 badge로 구분한다.
- colonizer와 pathogen의 의미가 상황에 따라 달라지는 경우 단정적 badge를 사용하지 않는다.

### 4.3 질환 탭

현재 감염 질환 pathway 기능을 계승한다.

- 질환명, 영문명, alias 검색
- 감염 부위
- 지역사회 또는 의료관련 감염 환경
- 대상군
- 중증도와 숙주 상태
- 주요 원인 병원체
- 경험적 항생제
- 배양 후 표적치료
- source control 및 진단 포인트
- 기존 질환 문서 링크

질환 문서는 기존 Specialty 위치를 유지한다.

- 폐렴은 호흡기 문서를 재사용한다.
- UTI는 신장 또는 비뇨기 문서를 재사용한다.
- 감염심내막염은 순환기 문서를 재사용한다.
- 수막염은 신경과 또는 소아청소년과 문서를 재사용한다.
- 감염 허브를 위해 질환 파일을 복제하지 않는다.

### 4.4 항생제 탭

항생제 탭은 다음 세 기능을 담당한다.

```text
항생제 검색
Class별 항생제 탐색
Spectrum matrix
```

- 기존 약물 노트와 class 분류를 재사용한다.
- 항생제를 누르면 해당 약물 상세 페이지로 이동한다.
- 항생제 상세에서 관련 병원체와 질환으로 이동할 수 있다.
- Matrix는 `Spectrum matrix 열기` 또는 `비교 보기` 버튼으로 진입한다.
- Matrix의 전체화면 기능을 유지한다.
- Matrix에서 병원체 열 제목을 누르면 병원체 상세로 이동한다.
- Matrix에서 항생제 행 제목을 누르면 약물 상세로 이동한다.
- spectrum은 일반적 교육용 coverage이며 실제 감수성 결과를 대체하지 않는다는 안내를 유지한다.

### 4.5 퀴즈 탭

퀴즈는 병원체, 질환, 항생제 데이터를 통합한다.

문제 범위는 다음을 선택할 수 있어야 한다.

- 병원체 → 질환
- 질환 → 병원체
- 병원체 → 항생제
- 항생제 → 병원체
- 병원체 → 진단검사 또는 검체
- 동정 특징 → 병원체
- 내성 phenotype 판별
- Spectrum matrix 판독

문제 형식은 다음을 유지한다.

- 객관식
- 단답형
- 객관식과 단답형 혼합

단답형 원칙은 다음과 같다.

- 자유 텍스트 완전 일치만 요구하지 않는다.
- 입력 중 국문명, scientific name, abbreviation의 자동완성을 표시한다.
- registry의 alias를 정답 후보로 인정한다.
- species와 genus를 구분해야 하는 문제에서는 요구 수준을 문제에 명시한다.
- 여러 정답이 임상적으로 가능한 항생제 문제는 단일 정답 단답형으로 출제하지 않는다.

퀴즈 출제 제한은 다음과 같다.

- `review_status: verified`인 병원체와 관계만 출제한다.
- 치료 권고의 source가 만료되었거나 검토되지 않은 항목은 제외한다.
- `unknown`, `variable`, 조건부 coverage를 정답 하나로 단정하지 않는다.
- 지역 antibiogram과 감수성 검사가 필요한 문제는 조건을 문제에 명시한다.
- 문제 종료 후 점수, 정답, 오답, 근거 링크와 새로 풀기 버튼을 표시한다.

---

## 5. 원본 폴더 구조

### 5.1 신규 폴더

다음 구조로 시작한다.

```text
source_notes/09 Microbiology/
├─ index.md
├─ _templates/
│  ├─ microorganism.md
│  ├─ clinical-group.md
│  └─ resistance-phenotype.md
├─ _data/
│  ├─ microorganism-registry.json
│  ├─ microbiology-relations.json
│  └─ microbiology-sources.json
├─ 01 Bacteria/
│  ├─ 01 Gram-positive cocci/
│  ├─ 02 Gram-positive bacilli/
│  ├─ 03 Gram-negative cocci and coccobacilli/
│  ├─ 04 Enterobacterales/
│  ├─ 05 Non-fermenting Gram-negative bacilli/
│  ├─ 06 Anaerobes/
│  ├─ 07 Atypical bacteria/
│  ├─ 08 Mycobacteria/
│  └─ 09 Spirochetes and other bacteria/
├─ 02 Viruses/
├─ 03 Fungi/
├─ 04 Parasites/
├─ 05 Clinical Groups/
└─ 06 Resistance Phenotypes/
```

폴더명은 콘텐츠 목록을 위한 1차 분류다. 정밀 taxonomy는 폴더 경로가 아니라 registry 필드로 관리한다.

### 5.2 파일명 원칙

- canonical 제목은 가능한 한 scientific name을 사용한다.
- 제목 형식은 `국문명 (Scientific name).md`를 기본으로 한다.
- 임상에서 영문명만 통용되는 경우 억지 국문 번역을 만들지 않는다.
- species명은 genus를 생략하지 않고 전체 이름으로 저장한다.
- 약어는 alias로 관리한다.
- resistance phenotype은 `MRSA.md`, `ESBL-producing Enterobacterales.md`처럼 임상 통용명을 사용할 수 있다.
- 파일명 변경에 의존하지 않도록 YAML의 안정적인 `microbiology_id`를 canonical ID로 사용한다.

---

## 6. 데이터 모델

### 6.1 entity 종류

`entity_kind`는 다음 값 중 하나를 사용한다.

| 값 | 의미 | 예시 |
|---|---|---|
| `organism` | 실제 taxonomic organism | `Pseudomonas aeruginosa` |
| `clinical_group` | 임상적으로 함께 다루는 병원체군 | Enterobacterales, oral anaerobes |
| `resistance_phenotype` | 내성 특성 중심 entity | MRSA, VRE, ESBL, CRE |

`pathogen_type`은 다음 값 중 하나를 사용한다.

```text
bacterium
virus
fungus
protozoan
helminth
ectoparasite
prion
mixed
```

`mixed`는 clinical group에만 제한적으로 사용한다.

### 6.2 Markdown frontmatter

권장 기본 schema는 다음과 같다.

```yaml
---
microbiology_id: pseudomonas-aeruginosa
entity_type: microorganism
entity_kind: organism
pathogen_type: bacterium
scientific_name: Pseudomonas aeruginosa
korean_name: 녹농균
taxonomic_rank: species
taxonomy_ids:
  - NCBI:287
aliases:
  - P. aeruginosa
  - pseudomonas
classification:
  - G(-)
  - bacillus
  - aerobic
clinical_tags:
  - healthcare-associated
  - opportunistic
  - biofilm
related_disease_ids: []
related_antibiotic_ids: []
related_lab_ids: []
source_ids: []
review_status: draft
reviewed_at:
---
```

현재 parser가 nested YAML을 완전히 지원하지 않는 경우 다음 원칙을 적용한다.

- frontmatter는 flat scalar와 list로 제한한다.
- taxonomy와 관계의 복잡한 구조는 `microorganism-registry.json`에 둔다.
- parser를 먼저 확장하지 않고 임의 문자열 파싱으로 우회하지 않는다.

### 6.3 registry schema

`microorganism-registry.json`은 목록, 필터, alias, taxonomy와 관계 연결의 기준이다.

```json
{
  "schemaVersion": 1,
  "reviewedAt": "YYYY-MM-DD",
  "entities": [
    {
      "id": "pseudomonas-aeruginosa",
      "entityKind": "organism",
      "pathogenType": "bacterium",
      "scientificName": "Pseudomonas aeruginosa",
      "koreanName": "녹농균",
      "aliases": ["P. aeruginosa", "pseudomonas"],
      "taxonomy": {
        "rank": "species",
        "ncbiTaxonomyId": "287"
      },
      "microbiology": {
        "gramStain": "negative",
        "morphology": "bacillus",
        "oxygenRequirement": "aerobic",
        "sporeForming": false,
        "motility": "motile"
      },
      "clinicalTags": ["healthcare-associated", "opportunistic", "biofilm"],
      "noteSourceFile": "01 Bacteria/05 Non-fermenting Gram-negative bacilli/녹농균 (Pseudomonas aeruginosa).md",
      "sourceIds": [],
      "reviewStatus": "draft",
      "reviewedAt": null
    }
  ]
}
```

### 6.4 관계 schema

`microbiology-relations.json`은 다음 관계를 명시적으로 표현한다.

```text
causes
commonly_causes
occasionally_causes
associated_with
colonizes
transmitted_by
detected_by
confirmed_by
treated_with
usually_susceptible_to
intrinsically_resistant_to
may_express
phenotype_of
member_of
requires_precaution
prevented_by
```

각 relation에는 다음 필드를 둔다.

```json
{
  "sourceType": "microorganism",
  "sourceId": "pseudomonas-aeruginosa",
  "relation": "commonly_causes",
  "targetType": "disease",
  "targetId": "existing-disease-id",
  "context": ["healthcare-associated", "immunocompromised"],
  "sourceIds": ["source-id"],
  "reviewStatus": "verified",
  "reviewedAt": "YYYY-MM-DD"
}
```

범용 `clinical-relations.json`을 즉시 파괴적으로 변경하지 않는다.

- 1단계에서는 microbiology relation을 별도 생성한다.
- 웹 component에서 기존 relation과 병합해 표시한다.
- node type과 relation type이 안정된 뒤 공통 knowledge graph로 통합 여부를 결정한다.

---

## 7. 병원체 문서 표준

### 7.1 organism 문서 순서

모든 organism 문서는 다음 순서를 기본으로 한다.

```markdown
YAML frontmatter

# 국문명 (Scientific name)

> [!summary]

## 동정 및 분류
## 저장소와 전파
## 병원성 및 병태생리
## 임상 정보
#### 주요 감염질환
#### 고위험군
#### 집락화와 감염의 구분
## 진단
#### 권장 검체
#### 현미경·배양
#### 항원·분자검사
#### 해석상 주의
## 치료 원칙
## 내성
## 감염관리 및 예방
## 비고
## 출처
```

### 7.2 작성 원칙

- 의학용어, 균명, 검사명, 유전자명은 영어를 사용할 수 있다.
- 설명 문장은 한국어로 작성한다.
- 영어 원문을 장문으로 붙여 넣지 않는다.
- 핵심 특징은 표와 목록을 우선 사용한다.
- 문단이 필요한 병태생리는 짧은 단락으로 작성한다.
- `항상`, `절대`, `완전히 커버` 같은 과도한 단정 표현을 피한다.
- 정상 집락화와 실제 감염을 구분한다.
- 검체 오염 가능성과 colonization 가능성을 명시한다.
- 경험적 치료와 감수성 확인 후 표적치료를 구분한다.
- local antibiogram, 감염 부위, 숙주 상태에 따라 달라지는 내용을 표시한다.
- 항생제 용량은 약물 노트 또는 질환 pathway로 연결하고 불필요하게 반복하지 않는다.

### 7.3 clinical group 문서

Clinical group 문서는 실제 taxonomy인 것처럼 작성하지 않는다.

예시는 다음과 같다.

- Enterobacterales
- oral anaerobes
- atypical pathogens
- coagulase-negative staphylococci

본문에는 다음 내용을 포함한다.

- 이 group을 임상적으로 묶는 이유
- 포함되는 주요 organism
- 공통 동정 또는 임상 특징
- group 수준 설명의 한계
- species별 예외
- 관련 질환 및 항생제 탐색 링크

### 7.4 resistance phenotype 문서

Resistance phenotype 문서는 다음 순서를 사용한다.

```markdown
# MRSA

> [!summary]

## 정의
## 해당 병원체
## 내성 기전
## 검사 및 판정
## 임상적 의미
## 치료 원칙
## 감염관리
## 지역 역학과 해석상 주의
## 출처
```

다음 원칙을 적용한다.

- MRSA를 별도의 species처럼 표현하지 않는다.
- ESBL과 AmpC를 동일한 phenotype으로 취급하지 않는다.
- genotype, phenotype, susceptibility result를 구분한다.
- EUCAST와 CLSI 해석 차이가 존재하면 기준과 버전을 명시한다.
- 단일 항생제에 대한 내성을 전체 class 내성으로 임의 확대하지 않는다.

---

## 8. 출처 및 신뢰도 정책

### 8.1 기본 원칙

병원체 문서는 검색 결과나 AI 기억만으로 작성하지 않는다.

- 모든 핵심 임상 주장에는 추적 가능한 source가 있어야 한다.
- AI는 요약과 형식 정리에만 사용할 수 있다.
- AI가 생성한 문장은 원문 source와 대조한 뒤에만 저장한다.
- source URL, 문서명, 발행기관, 발행 또는 갱신 연도를 기록한다.
- 치료, 내성, 감염관리 내용은 최신성을 별도로 확인한다.
- 출처가 확인되지 않는 내용은 삭제하거나 `검토 필요`로 비공개 처리한다.

### 8.2 분야별 우선 출처

| 정보 분야 | 1차 허용 출처 | 보조 출처 |
|---|---|---|
| 세균 nomenclature | LPSN, NCBI Taxonomy | peer-reviewed taxonomy paper |
| 바이러스 taxonomy | ICTV | NCBI Taxonomy |
| 진균 nomenclature | 공인 nomenclature DB, CDC, peer-reviewed taxonomy source | 표준 의학미생물학 교과서 |
| 기생충 분류·생활사 | CDC DPDx, WHO, KDCA | 표준 의학기생충학 교과서 |
| 역학·전파·감염관리 | KDCA, CDC, WHO, ECDC | 국가 또는 전문학회 지침 |
| 임상 양상 | CDC, WHO, KDCA, IDSA, NIH, peer-reviewed guideline | Mandell, Murray 등 표준 교과서 |
| 검체·미생물 검사 | IDSA/ASM laboratory guideline, CDC, KDCA, CLSI | peer-reviewed diagnostic guideline |
| 항생제 감수성·내성 | EUCAST, CLSI, WHO, CDC, KDCA/KOR-GLASS | IDSA AMR guidance |
| 질환별 치료 | IDSA, ESCMID, WHO, CDC, KDCA, 해당 전문학회 최신 guideline | 체계적 문헌고찰, 표준 교과서 |
| 백신·노출 후 예방 | KDCA, CDC, WHO, 공식 예방접종 지침 | 전문학회 guideline |

분류 정보는 NCBI Taxonomy와 LPSN 또는 ICTV처럼 해당 분야의 권위 있는 nomenclature source를 기준으로 한다. 임상미생물 검사 내용은 IDSA/ASM의 최신 laboratory utilization guideline을 우선 검토한다.

### 8.3 출처 등급

#### Tier A

- 정부·국제기구 공식 지침
- 공식 taxonomy 또는 nomenclature DB
- IDSA, ESCMID, ASM, EUCAST, CLSI 등 전문기관의 공식 guideline 또는 standard
- 최신 peer-reviewed clinical practice guideline

#### Tier B

- 표준 전문 교과서
- peer-reviewed review article
- NCBI Bookshelf의 전문 의학 chapter
- 대학병원 또는 학회가 책임 편집한 교육자료

#### Tier C

- 전문가가 작성했더라도 개인 블로그
- 병원 홍보성 페이지
- 제약회사 교육 페이지
- 출처가 불완전한 요약 사이트

Tier C는 탐색 단서로만 사용할 수 있고 병원체 문서의 유일한 근거가 될 수 없다.

### 8.4 사용 금지 출처

- 작성자와 편집 책임이 확인되지 않는 블로그
- 한의학·대체의학 기반 설명
- SEO용 건강정보 사이트
- Wikipedia 단독 근거
- 검색결과 snippet
- 출처를 제시하지 않는 AI 답변
- 제약회사 마케팅 자료를 이용한 단독 치료 권고
- 최신 지침과 충돌하는 오래된 비검수 요약
- 원문 확인이 불가능한 재인용

### 8.5 교차검증 기준

- taxonomy와 공식 명칭은 해당 공식 DB 1개 이상으로 확인한다.
- 주요 임상질환, 전파, 고위험군은 Tier A 1개를 포함한 2개 출처로 확인한다.
- 치료 원칙은 현재 유효한 guideline 1개 이상으로 확인한다.
- 중증 감염, 임신, 소아, 면역저하자 치료는 가능하면 2개 전문 출처로 확인한다.
- intrinsic resistance와 susceptibility 예측은 EUCAST 또는 CLSI 기준을 포함한다.
- 격리와 신고 기준은 국내에서는 KDCA를 우선하고 국제 지침을 보조로 사용한다.
- 출처 간 불일치는 숨기지 않고 적용 지역, 대상군, 판정 기준을 기록한다.
- 단순 생물학적 기초 사실은 표준 교과서와 공식 taxonomy source 조합으로 검증할 수 있다.

### 8.6 검수 상태

`review_status`는 다음 값으로 제한한다.

| 상태 | 의미 | 웹 공개 | 퀴즈 사용 |
|---|---|---|---|
| `draft` | 초안 또는 source 미완료 | 원칙적으로 제외 | 제외 |
| `source_checked` | 출처 확인 완료 | 검토 표시 후 제한 공개 가능 | 제외 |
| `clinically_reviewed` | 임상 내용 검토 완료 | 공개 가능 | 관계 검증 후 가능 |
| `verified` | schema, source, 관계, 임상 검증 완료 | 공개 | 가능 |
| `needs_update` | 지침 또는 taxonomy 갱신 필요 | 경고 표시 또는 제외 | 제외 |

고위험 내용에 오류가 발견되면 문서 전체를 다시 쓰기 전에 해당 claim과 relation만 우선 차단하고 수정한다.

---

## 9. 기존 문서 마이그레이션

### 9.1 전수 inventory

다음 대상을 먼저 목록화한다.

- `source_notes/02 Diseases/08 감염`의 전체 Markdown
- 다른 Specialty에 존재하는 병원체 중심 문서
- `antibiotic-spectrum.json`의 전체 organism
- `infection-pathways.json`의 pathogen reference
- 질환 YAML과 본문의 병원체 wikilink
- Lab & Img의 미생물 검사 문서
- Q-bank에서 사용하는 병원체 alias

각 항목을 다음으로 분류한다.

```text
disease
syndrome
organism
clinical_group
resistance_phenotype
taxonomy_or_index
host_or_setting
```

### 9.2 이동 원칙

- 병원체 본문은 검증 후 `09 Microbiology`를 canonical 위치로 삼는다.
- 기존 질환 문서를 무조건 파일 이동하지 않는다.
- 기존 병원체 문서 slug가 외부 또는 내부에서 사용 중이면 redirect 또는 alias mapping을 먼저 구현한다.
- redirect가 불가능한 단계에서는 기존 파일을 얇은 연결 문서로 유지할 수 있다.
- 연결 문서에는 중복 임상 본문을 남기지 않는다.
- 감염질환 문서는 기존 위치와 내용을 유지한다.
- 이동 전후 broken link와 search index를 비교한다.

### 9.3 spectrum ID 정리

기존 ID를 즉시 전부 변경하지 않는다.

- 기존 matrix ID는 compatibility ID로 유지한다.
- 새 registry의 canonical ID와 mapping table을 둔다.
- `mssa`, `mrsa`처럼 phenotype이 섞인 항목을 명시적으로 표시한다.
- `atypicals`처럼 여러 organism을 포함하는 항목은 `clinical_group`으로 분류한다.
- species 단위 coverage와 group 단위 coverage를 혼동하지 않도록 UI에 entity kind를 표시한다.
- 안정화 후에만 schema version을 올리고 ID migration을 시행한다.

---

## 10. 초기 콘텐츠 범위

### 10.1 1차 필수 범위

먼저 현재 matrix와 감염 pathway가 실제로 참조하는 병원체를 완성한다.

#### Gram-positive bacteria

- `Staphylococcus aureus`
- coagulase-negative staphylococci
- `Streptococcus pyogenes`
- `Streptococcus agalactiae`
- `Streptococcus pneumoniae`
- viridans group streptococci
- `Enterococcus faecalis`
- `Enterococcus faecium`
- `Listeria monocytogenes`
- `Corynebacterium diphtheriae`
- `Clostridioides difficile`

#### Gram-negative bacteria

- `Escherichia coli`
- `Klebsiella pneumoniae`
- `Proteus mirabilis`
- 주요 Enterobacterales clinical group
- `Pseudomonas aeruginosa`
- `Acinetobacter baumannii` complex
- `Stenotrophomonas maltophilia`
- `Haemophilus influenzae`
- `Neisseria meningitidis`
- `Neisseria gonorrhoeae`
- `Moraxella catarrhalis`
- `Legionella pneumophila`

#### Anaerobic and atypical bacteria

- `Bacteroides fragilis` group
- oral anaerobes
- `Clostridium` clinical group
- `Mycoplasma pneumoniae`
- `Chlamydia pneumoniae`
- `Chlamydia trachomatis`

#### Mycobacteria and spirochetes

- `Mycobacterium tuberculosis` complex
- nontuberculous mycobacteria overview
- `Treponema pallidum`
- `Borrelia` clinical group
- `Leptospira` species

#### Resistance phenotypes

- MRSA
- VRE
- ESBL-producing Enterobacterales
- AmpC-producing Enterobacterales
- CRE
- carbapenem-resistant `Acinetobacter baumannii`
- multidrug-resistant `Pseudomonas aeruginosa`

### 10.2 2차 바이러스 범위

- Influenza virus
- RSV
- SARS-CoV-2
- Adenovirus
- Enterovirus
- Norovirus
- Rotavirus
- HSV-1 and HSV-2
- VZV
- CMV
- EBV
- Hepatitis A, B, C virus
- HIV
- HPV
- Measles, mumps, rubella virus

### 10.3 3차 진균·기생충 범위

#### Fungi

- `Candida` species
- `Cryptococcus` species complex
- `Aspergillus` species
- Mucorales
- `Pneumocystis jirovecii`
- dermatophytes
- 주요 dimorphic fungi

#### Parasites

- `Plasmodium` species
- `Toxoplasma gondii`
- `Giardia duodenalis`
- `Entamoeba histolytica`
- `Cryptosporidium` species
- 주요 intestinal helminths
- tissue helminths
- ectoparasites

초기 범위는 단순 문서 수 목표로 완료 처리하지 않는다. 현재 감염 허브와 임상 경로에서 참조되는 병원체의 연결 완성도를 우선한다.

---

## 11. 빌드 파이프라인

### 11.1 신규 생성 데이터

권장 출력은 다음과 같다.

```text
_webapp/data/microorganisms.json
_webapp/data/microbiology-toc.json
_webapp/data/microbiology-relations.json
_webapp/data/microbiology-sources.json
```

통합 검색에는 다음 type을 추가한다.

```text
microorganism
clinicalGroup
resistancePhenotype
```

### 11.2 builder 작업

- `buildMicrobiology()`를 추가한다.
- `09 Microbiology/index.md`, `_templates`, `_data`는 note 생성에서 제외한다.
- Markdown frontmatter와 registry의 ID 일치를 검사한다.
- note 없는 registry entity를 검출한다.
- registry에 없는 note를 검출한다.
- duplicate scientific name과 duplicate alias를 검출한다.
- 관계 target이 실제 disease, drug, lab, microorganism에 존재하는지 검사한다.
- manifest에 domain count와 source path를 추가한다.
- search index에 국문명, scientific name, abbreviation, alias, 분류 tag를 추가한다.
- source Markdown에서 생성 JSON으로만 단방향 생성한다.

### 11.3 stable ID와 URL

- URL slug를 파일 경로만으로 만들지 않는 방향을 검토한다.
- canonical ID는 `microbiology_id`를 사용한다.
- 권장 상세 route는 `/microbiology/{slug}`다.
- 목록의 주 진입점은 감염 허브에 두되 상세 route는 독립적으로 유지한다.
- 파일 이동 후에도 `microbiology_id`가 같으면 URL이 유지되게 한다.
- 기존 disease 병원체 문서에서 새 상세 route로 이동하는 compatibility mapping을 둔다.

---

## 12. 웹 component 계획

### 12.1 감염 허브 shell

- 기존 hub header를 간결하게 유지한다.
- 네 개 탭을 동일한 크기와 위계로 표시한다.
- icon은 병원체, 질환, 항생제, 퀴즈를 명확히 구분한다.
- 선택 탭만 진한 배경으로 표시한다.
- 모바일에서 label이 두 줄로 깨지지 않게 한다.
- 각 탭의 filter 상태는 다른 탭으로 이동했다 돌아와도 가능한 범위에서 유지한다.

### 12.2 병원체 목록 component

필요 component 예시는 다음과 같다.

```text
PathogenSearch
PathogenCategorySection
PathogenCard
PathogenFilterChips
ResistancePhenotypeCard
```

필터 후보는 다음과 같다.

- pathogen type
- Gram stain
- morphology
- oxygen requirement
- transmission
- 주요 infection site
- community 또는 healthcare-associated
- resistance phenotype

모든 필터를 첫 화면에 펼치지 않는다. 기본 검색과 주요 category를 먼저 보여주고 상세 필터는 접을 수 있게 한다.

### 12.3 병원체 상세 페이지

상단에는 다음 핵심 정보만 compact하게 표시한다.

- 국문명과 scientific name
- entity kind
- 핵심 분류 badge
- reviewed date와 review status

본문 다음에는 관련 항목을 표시한다.

- 관련 질환
- 관련 미생물 검사
- 관련 항생제
- 관련 resistance phenotype
- 관련 감염관리 지침

관련 항목은 문서 본문 문자열 검색이 아니라 relation dataset을 기준으로 표시한다.

### 12.4 Matrix 연결

- Matrix organism header에 상세 링크를 추가한다.
- clinical group과 resistance phenotype을 시각적으로 구분한다.
- 상세 병원체에서 `Spectrum matrix에서 보기` 버튼을 제공한다.
- 버튼은 해당 병원체 열을 강조한 상태로 matrix를 연다.
- matrix에 직접 대응하는 ID가 없는 병원체는 잘못된 근사 열로 연결하지 않는다.

---

## 13. 의료 안전 및 품질 검증

### 13.1 자동 검증

- Markdown frontmatter parse
- 필수 field 존재
- canonical ID 중복
- scientific name 중복
- alias 충돌
- source ID 유효성
- relation target 유효성
- disease 및 drug slug 유효성
- note와 registry 간 orphan
- 공개 문서의 `reviewed_at` 누락
- verified 문서의 Tier A source 누락
- broken internal link
- search result route 유효성

### 13.2 임상 검증

- organism, clinical group, phenotype 구분이 맞는지 확인한다.
- 감염과 colonization을 구분한다.
- 검체와 진단법이 실제 임상 상황에 맞는지 확인한다.
- 검사 양성이 질환 확진을 의미하지 않는 예외를 확인한다.
- intrinsic resistance와 acquired resistance를 구분한다.
- 경험적 항생제와 표적 항생제를 구분한다.
- 감염 부위별 항생제 침투 예외를 확인한다.
- 임신, 소아, 면역저하자 주의사항이 과도하게 일반화되지 않았는지 확인한다.
- 격리 종류와 신고 의무는 국내 기준을 별도로 확인한다.
- 오래된 taxonomy 이름은 current name과 clinical alias를 함께 제공한다.

### 13.3 문서 품질 검증

- 설명은 한국어인지 확인한다.
- 의학용어 이외의 불필요한 영어 줄글을 제거한다.
- 표와 목록이 지나치게 길지 않은지 확인한다.
- 동일 내용이 다른 section에 반복되지 않는지 확인한다.
- 깨진 문자, XML 잔재, 잘못된 HTML anchor를 검사한다.
- source 문장을 과도하게 그대로 복제하지 않는다.
- unrelated 내용이 다른 문서에 섞이지 않았는지 확인한다.

### 13.4 공개 차단 조건

다음 중 하나라도 해당하면 verified로 공개하지 않는다.

- 치료 source가 없거나 유효 시점을 확인할 수 없음
- taxonomy entity 종류가 불명확함
- 병원체와 질환이 혼합되어 관계가 잘못됨
- 항생제 coverage가 source 없이 단정됨
- 감염관리 또는 신고 기준이 미검증임
- relation target이 존재하지 않음
- 임상적으로 중요한 출처 간 충돌이 해결되지 않음

---

## 14. 작업 단계

### Phase 0. 기준선 저장 및 inventory

- 현재 source note, spectrum, pathway, relation 수를 기록한다.
- 감염 폴더 83개 문서를 entity 종류별로 분류한다.
- spectrum organism 22개를 organism, group, phenotype으로 분류한다.
- 기존 link와 slug 사용 위치를 전수 조사한다.
- migration mapping 초안을 만든다.

완료 기준:

- 이동 또는 신규 생성 대상이 누락 없이 목록화되어 있다.
- 기존 link를 깨뜨릴 항목이 표시되어 있다.

### Phase 1. `09 Microbiology` 및 schema 생성

- 폴더 구조를 생성한다.
- 세 종류 template을 만든다.
- source registry와 source 정책 파일을 만든다.
- builder type과 validation 규칙을 정의한다.
- 초기 schema test fixture를 만든다.

완료 기준:

- organism, clinical group, phenotype 예시가 각각 build된다.
- schema 오류가 build에서 명확하게 실패한다.

### Phase 2. 기존 핵심 병원체 마이그레이션

- 현재 감염 폴더의 병원체 중심 문서를 검토한다.
- 기존 내용을 그대로 복사하지 않고 신뢰 가능한 source로 claim을 재검증한다.
- `09 Microbiology`에 canonical 문서를 만든다.
- 기존 slug compatibility를 구현한다.
- spectrum ID와 canonical ID mapping을 만든다.

완료 기준:

- 기존 matrix에서 note가 연결된 모든 병원체가 새 상세 문서로 연결된다.
- disease count에 신규 병원체 문서가 포함되지 않는다.
- 기존 질환 링크가 깨지지 않는다.

### Phase 3. 감염 허브 네 탭 개편

- 탭을 `병원체 | 질환 | 항생제 | 퀴즈`로 변경한다.
- Matrix를 항생제 탭 내부로 이동한다.
- 병원체 분류 grid와 검색을 구현한다.
- 기존 질환 pathway를 질환 탭으로 옮긴다.
- 항생제 class, 검색, matrix를 항생제 탭에 통합한다.
- query state와 모바일 레이아웃을 검증한다.

완료 기준:

- 기존 기능이 네 탭 어디에서 접근 가능한지 명확하다.
- 독립 Matrix 탭 제거로 기능이 유실되지 않는다.
- 모바일에서 네 탭이 깨지지 않는다.

### Phase 4. 병원체 상세 및 관계 연결

- 병원체 상세 route를 구현한다.
- 관련 질환, 검사, 항생제, phenotype을 연결한다.
- 질환과 약물 페이지에서 병원체 역링크를 표시한다.
- global search에 병원체 type을 추가한다.
- matrix와 병원체 상세의 양방향 링크를 구현한다.

완료 기준:

- 병원체에서 질환과 항생제로 이동할 수 있다.
- 질환과 항생제에서 병원체로 돌아올 수 있다.
- 검색 결과에서 entity kind가 구분된다.

### Phase 5. 콘텐츠 확장

- 1차 세균 및 내성 phenotype을 우선 보강한다.
- 바이러스, 진균, 기생충을 단계적으로 추가한다.
- 질환 pathway에서 참조하지만 문서가 없는 병원체를 우선한다.
- source freshness audit를 자동화한다.

완료 기준:

- 주요 감염 pathway의 병원체 relation이 orphan 없이 연결된다.
- 문서 수보다 임상 경로 coverage가 우선 지표로 사용된다.

### Phase 6. 퀴즈 통합

- 병원체 기반 문제 유형을 추가한다.
- 객관식과 단답형을 모두 지원한다.
- autocomplete와 alias 정답 판정을 구현한다.
- verified relation만 문제 pool에 포함한다.
- 결과 화면에 근거 문서 링크를 표시한다.

완료 기준:

- 모든 문제의 정답 근거를 추적할 수 있다.
- 다의적 항생제 문제를 단일 정답으로 강제하지 않는다.

### Phase 7. 최종 검증

- source, schema, relation, build 검증을 실행한다.
- 병원체·질환·항생제 대표 시나리오를 수동 점검한다.
- desktop과 mobile을 확인한다.
- 기존 감염 hub URL과 링크 회귀를 확인한다.
- 공개 차단 조건에 해당하는 문서를 제외한다.

완료 기준:

- build error와 broken target이 없다.
- verified 병원체는 모두 Tier A source를 포함한다.
- 기존 질환과 약물 기능의 회귀가 없다.
- 버전 변경과 배포 전 사용자 확인을 받는다.

---

## 15. 작업 진행도 표시

장시간 작업에서는 다음 값을 진행도 파일 또는 terminal에 표시한다.

```text
Inventory: 완료 문서 / 전체 후보
Drafted: 작성 문서 / 목표 문서
Source checked: 출처 확인 문서
Clinically reviewed: 임상 검토 문서
Verified: 공개 가능 문서
Relations: 유효 관계 / 전체 관계
Broken targets: 개수
Build status: pending | running | passed | failed
```

권장 report는 다음과 같다.

```text
reports/microbiology-inventory.json
reports/microbiology-coverage.json
reports/microbiology-source-audit.json
reports/microbiology-relation-audit.json
```

진행률은 단순 파일 생성 수가 아니라 `verified`와 relation coverage를 기준으로 계산한다.

---

## 16. 회귀 방지 원칙

- 기존 질환 문서를 병원체 문서로 자동 변환하지 않는다.
- 기존 감염질환의 분과 소속을 변경하지 않는다.
- 기존 약물 문서를 미생물학 폴더로 이동하지 않는다.
- 기존 matrix coverage를 source 검증 없이 일괄 재작성하지 않는다.
- 병원체 문서를 늘리기 위해 비검수 AI 문장을 대량 저장하지 않는다.
- 생성 JSON을 source of truth로 사용하지 않는다.
- unrelated working-tree 변경을 되돌리지 않는다.
- 사용자의 별도 지시 없이 version을 올리지 않는다.
- 사용자의 별도 지시 없이 배포하지 않는다.

---

## 17. 최종 완료 조건

다음 조건을 모두 만족해야 개발 완료로 본다.

- `source_notes/09 Microbiology`가 canonical DB로 동작한다.
- organism, clinical group, resistance phenotype이 schema와 UI에서 구분된다.
- 감염 허브가 `병원체 | 질환 | 항생제 | 퀴즈` 네 탭으로 정리된다.
- Spectrum matrix가 항생제 탭 안에서 정상 동작한다.
- 병원체 목록이 Specialties 스타일의 분류형 화면으로 제공된다.
- 병원체 상세에 임상적으로 필요한 표준 section이 있다.
- 관련 질환, 검사, 항생제, 내성 phenotype이 양방향으로 연결된다.
- 기존 질환과 약물 slug가 유지된다.
- 전역 검색이 병원체명과 alias를 찾는다.
- verified 문서는 신뢰 가능한 source와 reviewed date를 갖는다.
- 치료, 내성, 감염관리 claim이 교차검증된다.
- draft 또는 needs-update 문서는 퀴즈에서 제외된다.
- broken relation과 orphan note가 없다.
- desktop과 mobile에서 정보 구조가 깨지지 않는다.
- 버전 변경과 배포는 별도 승인 후 진행한다.

---

## 18. 참고할 공식 출처 출발점

- KDCA: `https://www.kdca.go.kr/`
- CDC Infection Control: `https://www.cdc.gov/infection-control/`
- WHO Infectious Diseases and AMR: `https://www.who.int/`
- IDSA Practice Guidelines: `https://www.idsociety.org/practice-guideline/`
- IDSA/ASM Microbiology Laboratory Guideline: `https://www.idsociety.org/practice-guideline/laboratory-diagnosis-of-infectious-diseases/`
- EUCAST: `https://www.eucast.org/`
- NCBI Taxonomy: `https://www.ncbi.nlm.nih.gov/taxonomy`
- LPSN: `https://lpsn.dsmz.de/`
- ICTV: `https://ictv.global/`

이 목록은 whitelist의 시작점이며 개별 문서 작성 시 해당 병원체와 임상 질문에 맞는 최신 세부 guideline을 추가해야 한다.

---

## 19. 구현 및 검증 결과

기준일: 2026-07-29

### 19.1 Canonical DB

- `source_notes/09 Microbiology`를 canonical DB로 생성했다.
- 총 85개 entity를 등록했다.
  - organism 57개
  - clinical group 20개
  - resistance phenotype 8개
- 병원체 유형은 bacterium 47개, virus 19개, fungus 9개, protozoan 5개, helminth 4개, ectoparasite 1개다.
- organism, clinical group, resistance phenotype template과 문서 구조를 분리했다.
- 설명은 한국어를 기본으로 하고 scientific name과 의학용어는 영어 표기를 유지했다.
- 반복적인 일반 문장은 병원체 유형별 임상 맥락에 맞게 정리했다.

### 19.2 출처와 검수 경계

- source registry에 Tier A 공식 출처 25개를 등록했다.
- 85개 문서 모두 Tier A 출처를 하나 이상 포함한다.
- unknown source ID는 0개다.
- 현재 85개 문서의 상태는 `source_checked`다.
- 사람 임상 검토가 완료되지 않은 문서를 `clinically_reviewed` 또는 `verified`로 과대 표시하지 않았다.
- 관계형 퀴즈는 verified infection pathway와 기존 검증 spectrum을 우선 사용한다.

### 19.3 관계와 빌드 데이터

- microorganism relation 986개를 생성했다.
  - disease 156개
  - drug 623개
  - lab 197개
  - microorganism 및 clinical group 10개
- relation broken target은 0개다.
- Matrix organism 22개를 canonical microbiology ID와 연결했다.
- `microorganisms.json`, `microbiology-toc.json`, `microbiology-relations.json`, `microbiology-sources.json`을 생성한다.
- 전역 search index에 microorganism, clinicalGroup, resistancePhenotype type과 alias를 포함한다.
- 질환·약물·Lab & Img 상세에 병원체 역링크를 추가했다.

### 19.4 웹앱

- 감염 Hub를 `병원체 | 질환 | 항생제 | 퀴즈` 네 탭으로 통합했다.
- Spectrum matrix, 균→약, 약→균은 항생제 탭 내부에 유지했다.
- 병원체 탭에 국문명·scientific name·alias 검색과 병원체 유형·entity kind filter를 구현했다.
- 병원체 상세 route에 표준 임상 section, 관련 질환·약물·검사·병원체·출처를 표시한다.
- 퀴즈는 병원체 식별, 병원체↔질환, 질환→항생제, 균↔항생제, coverage 판독을 지원한다.
- 객관식·단답형·혼합, 다중 범위 선택, 문제 수, alias autocomplete, 채점·오답·새로 풀기를 지원한다.

### 19.5 자동 검증 및 QA

- `npm run sync:data`: 통과
- `npm run audit:microbiology`: 85개 검사, error 0, warning 0
- `npm run lint`: 통과
- production build: 통과, 2,083개 static page 생성
- 모바일 390×844과 데스크톱 1440×900에서 네 탭, 병원체 목록, Matrix fullscreen, 단답 autocomplete, 결과 화면과 양방향 링크를 실제 조작해 확인했다.
- 모바일 document overflow와 데스크톱 horizontal overflow가 없음을 확인했다.
- 앱 version은 `0.8.47`로 유지했고 배포하지 않았다.

