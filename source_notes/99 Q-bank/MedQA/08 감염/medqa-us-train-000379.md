---
type: qbank
schema_version: 1
id: medqa-us-train-000379
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35544719ee3e15bdc4d43ddc21466b51623eaf7aa31adb32ecc48c343d3eae92
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infective endocarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: diagnosis
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

혈액 배양 검사가 실험실로 보내졌다. 정맥 내 항생제 치료가 시작되었다. 경식도 심초음파(transesophageal echocardiography)상 삼첨판(tricuspid valve)에 부착된 크고 진동하는 증식물(vegetation)이 관찰된다. 삼첨판 판막 끝에 부착된 다수의 작은 증식물들이 있다. 중등도의 삼첨판 역류(tricuspid regurgitation)가 있다. 심장의 좌측과 박출률(ejection fraction)은 정상이다. 이 환자의 상태를 유발했을 가능성이 가장 높은 원인균은 무엇인가?

## 선택지

A. Streptococcus sanguinis
B. Enterococcus faecalis
C. Neisseria gonorrhoeae
D. Staphylococcus aureus

## 해설


삼첨판의 증식물과 역류는 우심계 감염성 심내막염을 지지한다. 선택지 중 우심계 IE의 흔한 원인인 S. aureus(D)가 가장 가능성이 높다. 정맥주사 약물사용이나 혈관내 기구는 관련 위험요인이지만 이 문항에는 실제로 제시되지 않았다. 다른 균도 삼첨판 IE를 일으킬 수 있으므로 최종 원인균은 혈액배양으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000379 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 삼첨판 IE의 S. aureus 연관은 유지하되 원문에 없는 급성 전신증상·정맥주사력을 환자 사실로 추가하지 않았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000379
