---
type: qbank
schema_version: 1
id: medqa-us-train-005785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eac8a414f8035916ecc183020a1227c55352c6a2e5d61fa6186d824d21f5fcc9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방암 골전이"
  - "척추 전이"
  - "척추 MRI"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

유방암을 치료받은 환자가 며칠째 심해지는 야간 등 통증과 흉추의 국소 압통을 보인다. 아직 다리 힘과 감각, 배뇨 기능은 정상이다. 척추 전이가 의심될 때 우선 할 검사는?

## 선택지

A. 적시에 척추 MRI를 시행한다
B. 단순 X선이 정상이면 척추 전이를 배제한다
C. 전이 확인과 무관하게 물리치료부터 시작한다
D. 신경 증상이 생겨야 영상검사를 시행한다

## 해설


암 환자의 지속적 야간 통증이나 척추 국소 압통은 신경 증상이 없어도 전이를 평가할 이유다. MRI로 골수 병변과 척수관 침범을 살피고 신경학적 이상이 새로 생기면 응급으로 전환한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005785 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유방암 병력의 심한 새 국소 척추통·압통에서 척추 MRI C가 적절함을 현행 지침과 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005785
