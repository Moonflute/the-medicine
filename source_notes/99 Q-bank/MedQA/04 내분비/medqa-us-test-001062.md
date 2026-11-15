---
type: qbank
schema_version: 1
id: medqa-us-test-001062
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c1af41fe9eb283da205fac4dcf52f198a750b1d0e2aca301493c64019e5344dc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선 폭풍"
  - "갑상선기능항진증"
  - "프로프라놀롤"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

메티마졸을 중단한 그레이브스병 환자가 40°C의 고열, 심한 빈맥과 혼돈을 보인다. 중환자실에서 갑상선폭풍으로 치료한다. 항갑상선제와 무기 요오드를 모두 쓰기로 했다. 투여 순서는?

## 선택지

A. 요오드를 먼저 주고 항갑상선제는 다음 날 시작
B. 요오드만 투여하고 항갑상선제를 생략
C. 해열 뒤까지 두 약 모두 보류
D. 항갑상선제를 먼저 시작하고 최소 1시간 뒤 요오드 투여

## 해설

갑상선호르몬 합성을 먼저 억제한 뒤 요오드로 호르몬 방출을 억제한다. 글루코코르티코이드와 지지요법, 유발 원인 치료를 함께 시행한다. 베타차단 여부는 쇼크나 심부전 상태를 보고 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 갑상샘폭풍에 propranolol 단독이면 충분하다는 인상을 없애고 저혈압 시 위험과 복합치료를 명시.
- https://doi.org/10.1089/thy.2016.0229

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001062
- https://doi.org/10.1530/ETJ-26-0043
- https://www.ncbi.nlm.nih.gov/books/NBK278927/
