---
type: qbank
schema_version: 1
id: medqa-us-train-000232
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f69bce9e4e37f76f15cf78b14c576529e70957b6d350124fd7e2ca4c5cf74a2
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "tinea versicolor"
  - "vitiligo"
  - "pityriasis alba"
  - "hypopigmented macules"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yWtOujqOufrOq4sCAoVGluZWEgVmVyc2ljb2xvcikubWQ
  - MTkg7ZS867aA6rO8L-uwseuwmOymnSAoVml0aWxpZ28pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

특이 과거력이나 가족력이 없는 17세 라틴계 여성이 오랫동안 지속된 여러 피부 병변에 대한 우려로 소아청소년과에 내원했다. 환자는 지난 2년간 가슴과 복부에 밝은 색의 발진이 있었다고 언급했다. 혈압은 111/81 mm Hg, 맥박은 82회/분, 호흡수는 16회/분, 체온은 37.3°C이다. 신체 검진상 가슴과 복부에 다수의 저색소 침착 반점(hypopigmented macules)이 관찰된다. 손바닥이나 발바닥에는 병변이 보이지 않는다. 질문에 대해 환자는 이 병변들이 햇빛에 노출되었을 때 나머지 피부처럼 태닝되지 않는다고 답했다. 나머지 계통 문진은 음성이다. 이 병변의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 말라세지아(Malassezia) 효모
B. 피부 T세포 림프종(Cutaneous T cell lymphoma)
C. 멜라닌 세포 내 TYR 유전자 기능 장애
D. 매독균(Treponema pallidum) 감염

## 해설

몸통에 생긴 만성 저색소 반점이 햇빛 노출 후 주변 피부처럼 짙어지지 않는 것은 어루러기(pityriasis/tinea versicolor)에 합당하다. 원인은 Malassezia 효모의 과증식(A)이며 멜라닌 형성과 색소 분포 변화가 나타날 수 있다. 햇빛에 노출되지 않았기 때문에 생긴 탈색이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 어루러기 A를 유지하고 햇빛 비노출이 원인인 것처럼 적은 설명과 질환명 오역을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000232
