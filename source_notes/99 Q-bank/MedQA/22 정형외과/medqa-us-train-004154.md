---
type: qbank
schema_version: 1
id: medqa-us-train-004154
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3e794addca9e4b4bfa29dc1be5f7cc10ff7c7243ea0eeb3df87f0741e4f68ce3
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "화농성 관절염"
  - "황색포도알균"
  - "정맥 약물 사용"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
difficulty: complex
answer: B
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

55세 정맥 약물 사용자 남자가 4일간 지속된 오른쪽 발목 통증으로 응급실에 왔다. 무기력하고 병력 질문에 대답하지 못한다. 심박수 110회/분, 체온 101.5°F, 호흡수 20회/분, 혈압 100/60 mmHg이다. 발가락에 주사 자국이 있고 오른쪽 발목은 홍반과 부종이 있다. 오른쪽 발을 조금만 움직여도 통증이 10점 만점에 10점이다. 방사선 사진에서 골절은 없다. 관절액 흡인액의 그람염색에서 포도송이 모양의 보라색 구균이 보이고, 액체는 노랗고 불투명하며 백혈구가 70,000/mm³ 이상(호중구 80%)이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 살모넬라 감염성 관절염
B. 포도알균 감염성 관절염
C. 보렐리아 감염성 관절염
D. 골관절염

## 해설

고열·빈맥과 심한 수동 관절운동 통증, 혼탁한 호중구 우세 관절액은 화농성 관절염을 시사한다. 관절액 그람염색의 보라색 포도송이 모양 구균은 그람양성 포도알균에 합당하므로 B가 정답이다. 황색포도알균이 대표적 원인이지만 그람염색만으로 종을 확정하지는 못하며 배양·감수성 확인이 필요하다. 주사 자국 자체에서 균이 관찰된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 그람염색이 주사 부위가 아니라 관절액 검체이며 원문 선지 Staphylococcus를 황색포도알균으로 좁힌 번역을 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004154
