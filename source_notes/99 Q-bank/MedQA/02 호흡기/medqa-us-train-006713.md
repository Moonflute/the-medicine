---
type: qbank
schema_version: 1
id: medqa-us-train-006713
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:121d790a133306a9a31a1954e477b39837367919975e502cf3a1395be71abddd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "고립성 폐결절"
  - "폐결절 평가"
  - "PET 검사"
  - "pulmonary nodule"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성의 얇은 절편 CT에서 비석회화 고형 폐결절(14 mm)이 확인됐다. 흡연력이 있고 이전 비교 영상은 없다. 임상과 CT 소견으로 평가한 악성 가능성은 중간 정도(약 25%)이다. 조직검사 여부를 결정하기 위해 악성 가능성을 더 가늠할 검사는?

## 선택지

A. 객담 세포검사 단독
B. 흉부 X선 재촬영
C. FDG PET/CT
D. 전신 뼈 스캔

## 해설

8 mm를 넘는 고형 결절의 악성 가능성이 중간 정도면 FDG PET/CT로 위험을 다시 평가할 수 있다. 양성 결과가 곧 암 확진을 뜻하지는 않고 결핵 등 염증성 질환도 섭취를 보일 수 있다. 결과와 기존 위험을 함께 고려해 조직검사나 추적을 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 8.5mm 결절의 PET C를 위험기반 선택으로 한정하며 모든 작은결절에 의무검사라는 설명 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3749714/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006713
- https://pmc.ncbi.nlm.nih.gov/articles/3749714/
