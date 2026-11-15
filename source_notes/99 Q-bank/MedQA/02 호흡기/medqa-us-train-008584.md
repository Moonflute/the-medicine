---
type: qbank
schema_version: 1
id: medqa-us-train-008584
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:835a12169c897cd7e9720040fcbd9fd44981583534865fbef03501a06dccf930
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "Mycoplasma pneumoniae pneumonia"
  - "erythema multiforme"
  - "target lesions"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uniOydtOy9lO2UjOudvOyKpOuniCDtj5DroLQgKE15Y29wbGFzbWEgUG5ldW1vbmlhKS5tZA
  - MTkg7ZS867aA6rO8L-uLpO2YlSDtmY3rsJggKEVyeXRoZW1hIE11bHRpZm9ybWUpLm1k
question_type: diagnosis
difficulty: complex
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여성이 일주일간의 발열, 마른기침, 두통과 근육통으로 내원했다. 팔다리에 중심이 어둡고 주위가 붉은 표적 병변이 여러 개 보인다. 비정형 폐렴과 다형홍반을 함께 설명할 가능성이 높은 병원체는?

## 선택지

A. Klebsiella pneumoniae
B. Haemophilus influenzae
C. Staphylococcus aureus
D. Mycoplasma pneumoniae

## 해설


마른기침과 발열을 동반한 비정형 폐렴에 표적 모양 피부 병변이 나타나면 마이코플라스마 폐렴균 감염을 고려한다. 피부 소견만으로 병원체를 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비정형 폐감염과 삼중 고리 표적 피부 병변은 Mycoplasma D 관련 다형홍반에 부합하며 누락 X선 없이도 핵심 단서가 있음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008584
