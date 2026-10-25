---
type: qbank
schema_version: 1
id: medqa-us-train-001135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00b3fe3c7401ba6b33dc176e69399eee1ff7a3afee7cdedacae644fdadf3a9dd
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Huntington disease"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4ztjIXthLTrs5EgKEh1bnRpbmd0b24gRGlzZWFzZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 남성이 우울증과 이상한 움직임을 주소로 아내와 함께 일차 진료 의사를 방문하였다. 아내는 남편이 지난 두 달 동안 평소와 달라졌다고 보고하였다. 이전에는 외향적이고 '파티의 분위기 메이커'였으나, 현재는 짜증이 많고 내성적으로 변했다. 그는 회계 법인의 파트너이지만, 업무 성과가 계속 저조할 경우 해고하겠다는 동료들의 경고를 받고 있다. 환자는 최근의 기분 변화를 설명하지 못하며, 자신에게 심각한 문제가 생긴 것 같아 두렵다고 눈물을 흘리며 인정하였다. 아내는 남편의 상태가 점점 악화되고 있다고 말한다. 환자의 과거력상 고혈압이 있으며, 리시노프릴(lisinopril)을 복용 중이다. 입양아였기 때문에 가족력은 알 수 없다. 환자는 생모를 한 번 만난 적이 있으며, 아버지는 알지 못하지만 50대에 사망했다는 이야기만 들었다. 일주일에 와인 몇 잔을 마시며 흡연은 한 적이 없다. 신체 검진상 환자는 무표정한 얼굴(flat affect)과 얼굴 찡그림, 상지의 갑작스러운 불수의적 움직임(jerky movements)을 보인다. 추가 검사에서 가장 나타날 가능성이 높은 것은 무엇인가?

## 선택지

A. 뇌척수액(CSF) 14-3-3 단백질 검사 양성
B. 뇌 생검상 알파-시누클레인(alpha-synuclein) 응집
C. 뇌 생검상 신경섬유 엉킴(neurofibrillary tangles)
D. 두부 CT상 등쪽 선조체(dorsal striatum) 위축

## 해설

중년에서 진행하는 성격·인지 변화와 얼굴 찡그림 및 불규칙한 불수의운동은 헌팅턴병의 무도증을 시사한다. 미상 가족력은 상염색체우성 유전질환을 배제하지 않는다. 미상핵과 조가비핵을 포함한 등쪽 선조체 위축(D)이 적절한 영상 소견이다. 이를 전측두엽치매의 전형적 선조체 소견이라고 설명하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 헌팅턴병의 무도증·정신행동 변화와 선조체 위축 D를 전측두엽치매로 잘못 연결한 해설을 교체한다.
- 공식/학회 근거: https://www.ncbi.nlm.nih.gov/books/NBK1305/pdf/Bookshelf_NBK1305.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001135
