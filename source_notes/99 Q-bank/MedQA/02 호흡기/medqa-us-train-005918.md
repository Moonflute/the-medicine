---
type: qbank
schema_version: 1
id: medqa-us-train-005918
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f3b01dd5abe1115cb6338dab208815c68c00fd3114bc3116d78d44a15e37f224
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐색전증"
  - "객혈"
  - "CT 폐혈관조영술"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: investigation
difficulty: complex
answer: A
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

60세 남성이 발목 수술 3주 뒤 갑자기 숨이 차고 깊게 숨쉴 때 가슴이 아프다. 맥박은 120회/분이고 한쪽 종아리에 부종과 압통이 있다. 혈압은 안정적이다. 폐색전증의 임상 확률이 높고 조영제 금기는 없다. 폐색전증을 확인할 다음 검사는?

## 선택지

A. 폐동맥 CT 혈관조영술
B. D-dimer가 음성이면 영상 없이 배제한다
C. 흉부 X선만 시행하고 정상이면 배제한다
D. 운동부하 심전도

## 해설

혈전 위험이 큰 상황에 갑작스러운 흉막통과 호흡곤란, 심부정맥혈전 징후가 동반되면 폐색전증 가능성이 높다. 혈역학적으로 안정적이고 조영제를 쓸 수 있다면 폐동맥 CT 혈관조영술로 확인한다. 이 경우 객혈이나 양성 D-dimer를 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 객혈 C는 PE 단서이나 객혈을 기다려야 CTPA한다는 위험한 전제 교정.
- https://www.nice.org.uk/guidance/ng158/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005918
- https://www.jacc.org/doi/10.1016/j.jacc.2025.11.005
