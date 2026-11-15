---
type: qbank
schema_version: 1
id: medqa-us-train-003175
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab8aa3079312ce0c8741907df9e6c24b09f29c087628219afad8426b14a8531c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "transient ischemic attack"
  - "carotid atherosclerosis"
  - "transient focal neurologic deficit"
  - "secondary stroke prevention"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 갑자기 말이 어눌해지고 왼쪽 얼굴이 처졌다. 20분 뒤 증상은 완전히 사라졌다. 뇌 CT에서 출혈은 없고, 뒤이어 시행한 확산강조 MRI에서도 급성 뇌경색은 없었다. 가장 가능성 높은 진단은?

## 선택지

A. 기능성 신경장애
B. 국소 운동 발작
C. 일과성 허혈발작
D. 다발성 경화증 재발

## 해설


갑자기 발생한 국소 신경기능 소실이 회복되고 급성 경색이 확인되지 않으면 일과성 허혈발작을 의심한다. 증상이 사라졌거나 비조영 CT가 정상이라는 이유만으로 평가를 끝내지 않는다. 조기 뇌졸중 위험 때문에 신속한 뇌혈관·심장 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 일과성 국소 신경결손·죽상경화 위험은 선택지상 TIA C. 정상 CT만으로 급성허혈을 완전히 배제했다는 판정은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003175
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8829490/
