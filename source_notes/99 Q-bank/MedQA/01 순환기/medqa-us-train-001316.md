---
type: qbank
schema_version: 1
id: medqa-us-train-001316
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:942b7674e6eed03074c40bf72f448ef18b44136dcfd0ba97845b7eee78371202
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "pulmonary embolism"
  - "right ventricular strain"
  - "deep vein thrombosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

대장암 수술 6일째인 59세 남성이 갑자기 숨이 차고 실신했다. 혈압 80/50 mmHg, 산소포화도 88%이고 왼쪽 종아리가 다른 쪽보다 붓고 아프다. 폐색전증이 의심되지만 혈압이 불안정해 당장 CT실로 옮기기 어렵다. 원인 평가에 도움이 되는 즉시 시행 가능한 검사는?

## 선택지

A. 운동부하 심전도
B. 침상에서 시행하는 스파이로메트리
C. 침상 경흉부 심초음파
D. D-dimer 단독 검사

## 해설


폐색전증이 의심되는 쇼크 환자를 CT실로 옮기기 어렵다면 침상 심초음파로 우심실 확장과 기능 저하를 평가하면서 심낭압전 등 다른 쇼크 원인도 살핀다. 우심실 부담 소견이 폐색전증에 특이적이지 않으므로 상황에 따라 CT 혈관조영으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술 후 실신/쇼크·저산소·편측 다리부종과 JVD는 고위험PE. 급성 폐혈관저항 증가로 RV확장 C가 예상됨.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001316
- https://academic.oup.com/eurheartj/article/41/4/543/5556136
- https://www.jacc.org/doi/10.1016/j.jacc.2025.11.005
