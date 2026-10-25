---
type: qbank
schema_version: 1
id: medqa-us-train-008871
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:59796fae72b0c08e350d49f1972a28759444baf411f7b56e11a60963b3b04f13
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "lumbar spinal stenosis"
  - "neurogenic claudication"
  - "spinal MRI"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lO2YkeywqeymnSAoU3BpbmFsIFN0ZW5vc2lzKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

73세 남성이 8개월 동안 악화된 양쪽 하지 통증으로 내원했다. 한두 블록을 걸으면 통증이 시작되어 양쪽 엉덩이로 방사되고 경련과 저림이 동반된다. 내리막길을 걸을 때 더 심하고 앉아서 몸을 앞으로 숙이면 호전된다. 고혈압, 고지혈증, 제2형 당뇨병이 있고 55세에 심근경색, 60세에 복부 대동맥류 수술을 받았다. 30년 동안 하루 한 갑을 피웠고 음주와 불법 약물 사용은 없다. 근력은 정상이고 양쪽 발과 발가락의 감각이 감소되어 있다. 하지 직거상검사는 음성이고 척추 X선에서 퇴행성 변화가 보인다. 다음 중 진단을 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. HLA-B27 항원 측정
B. 발목-상완지수 측정
C. 척추 MRI
D. 수면다원검사

## 해설

내리막길에서 악화하고 앉거나 전방 굴곡하면 호전하는 하지 통증은 요추관 협착에 의한 신경인성 파행을 시사한다. 지속되는 증상의 해부학적 평가에는 척추 MRI(C)가 척추관과 신경근의 협착/압박을 확인하는 데 유용하다. 골막 압박을 보는 검사가 아니다. 혈관 위험인자도 많으므로 말초동맥질환이 공존할 가능성은 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척추 MRI를 골막 압박 평가로 설명한 오류 교정.
- 공식/학회 근거: https://acsearch.acr.org/docs/69483/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008871
