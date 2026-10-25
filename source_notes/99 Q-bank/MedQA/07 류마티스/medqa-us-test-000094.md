---
type: qbank
schema_version: 1
id: medqa-us-test-000094
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c2e7fb8d02d055c9d0de7760b856cb6789601a8a8f3b4eb1e8b06cd34c5dfa5b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "환축추 불안정성"
  - "류마티스관절염"
  - "척수 압박"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

정신지체, 고혈압, 당뇨병 병력이 있는 54세 여성이 행동 변화로 응급실에 내원했다. 보호자들은 갑자기 보행이 운동실조성으로 변하고 평소 말이 없는 상태보다 반응이 줄었다고 한다. 체온 36.9°C, 혈압 125/68 mmHg, 맥박 분당 90회, 호흡수 분당 15회, 산소포화도 99%이다. 새로운 경직, 3+ 반사, 양성 바빈스키 징후가 있으며 양손의 대칭적 부종과 변형이 있다. 머리에 뒤쪽 힘을 가하고 경추에 앞쪽 힘을 가하면 ‘뚝’ 소리가 난다. 다음 중 이 상태에 취약하게 만든 가장 가능성 높은 위험요인은?

## 선택지

A. 뇌성마비
B. 당뇨병
C. 다운증후군
D. 류마티스관절염

## 해설


대칭성 손관절 변형은 류마티스관절염을 지지하며, 이는 환축추 관절의 인대·관절 손상으로 불안정성과 아탈구를 일으킬 수 있다. 새 경직·과반사·바빈스키 징후는 경수 압박을 시사해 D가 타당하다. 골절이 입증된 것은 아니며 이러한 환자에서 본문에 기술된 유발 조작을 실제로 반복해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000094` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대칭성 변형성 손관절염과 경수증의 위험 RA D 유지. 골절로 단정하지 않고 환축추 불안정성·경수 압박의 연결로 교정; 위험한 조작을 권하지 않음.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000094
