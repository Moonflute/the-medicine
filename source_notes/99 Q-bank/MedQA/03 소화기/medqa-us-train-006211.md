---
type: qbank
schema_version: 1
id: medqa-us-train-006211
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ecc25215b28f763a36a328f9856876821253545a823252fae869b78a56ad4b62
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "비건락성 육아종"
  - "말단 회장 및 대장 침범"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 3주 동안 지속된 복통, 묽은 비혈성 변 및 간헐적 오심으로 내원했다. 간헐적인 발열도 있고 구토, 뒤무직 또는 직장통은 없다. 활력징후는 정상이며 직장검사는 특이하지 않다. 백혈구 15,200/mm³, ESR 44mm/h이고 대변잠혈과 감염검사는 음성이다. 복부 CT에서 말단 회장과 횡행결장의 일부 구역에 장벽 비후와 주변 지방 침윤이 보이며 대장내시경 생검을 시행했다. 다음 중 가장 가능성 높은 진단에 가장 특이적인 소견은 무엇인가?

## 선택지

A. 크립트의 호중구 염증
B. 말단 회장 염증
C. 핵내 및 세포질 봉입체
D. 비건락성 육아종

## 해설

분절성 회장/결장 염증은 Crohn을 시사하며 제시 중 비건락성 육아종 D가 상대적으로 특이적이다. 모든 Crohn에서 보이는 것은 아니고 감염 등에서도 가능하다. Cryptitis나 회장염도 Crohn과 관련되지만 더 비특이적이며 CMV봉입체와 구별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn의 육아종 D를 절대특이소견으로 과장하지 않고 다른선지도 관련됨을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006211
