---
type: qbank
schema_version: 1
id: medqa-us-train-003165
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bfbf2d422fb714c946560d04d23bdf44fcffde5a51f0c129cf2fc3293c303b94
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cat-scratch disease"
  - "Bartonella henselae"
  - "suppurative lymphadenitis"
  - "animal exposure"
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
  - MDgg6rCQ7Je8L-qwkOyXvC5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

10세 남아가 5일 전부터 점점 커지는 오른쪽 겨드랑이의 통증성 림프절로 내원했다. 쇠약, 발한, 식욕부진이 있고 활력징후는 체온 38.2°C, 맥박 89회/분, 호흡수 13회/분, 혈압 110/60 mmHg이다. 오른쪽 겨드랑이에 압통과 파동이 있으며 커진 림프절 여러 개와 위 피부 홍반이 있다. 팔뚝에 통증 없이 염증성으로 보이는 별도 병변이 있다. 다음 중 어떤 병력에 대해 추가로 물어봐야 하는가?

## 선택지

A. 반려동물과의 접촉
B. 잦은 감염
C. 수영
D. 진드기 물림

## 해설


국소 팔뚝 병변과 같은 쪽 겨드랑이 림프절염은 고양이긁힘병을 시사하므로 반려동물 접촉 A를 추가 확인한다. Bartonella henselae는 고양이 긁힘 등에 의해 접종된 뒤 배액 림프절의 염증·화농을 유발할 수 있다. 이는 발톱을 흡인해서 생기는 질환이 아니며 누락된 그림의 구체적 모양을 만들어낼 필요 없이 제시된 임상 단서로 병력을 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003165 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고양이 발톱 흡인성이라는 비의학적 용어를 고양이긁힘병으로 교정; 노출 병력 A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003165
