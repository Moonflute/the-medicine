---
type: qbank
schema_version: 1
id: medqa-us-train-004257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c7b7ebdcb02892bd1d029d4d7a980cbb916299881113698b451b3879f0a4b4dc
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발혈관염을 동반한 육아종증"
  - "ANCA 연관 혈관염"
  - "사구체신염"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCrOq1rOyytOyniO2ZmC5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: B
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

57세 여자가 3개월간 지속된 부비동염과 콧물로 가정의를 방문했다. 콧물은 화농성이며 때때로 피가 섞인다. 일반의약품을 여러 번 사용해도 일시적으로만 호전된다. 지난 2주 동안 발목, 무릎, 손목을 중심으로 피로와 관절통도 생겼다. 체온 36.9°C, 혈압 142/91 mmHg, 맥박 82회/분이다. 비점막에 염증과 출혈이 있고 상악동 타진에 압통이 있다. 요검사에서 현미경적 혈뇨 4+와 단백뇨 2+가 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 처그-스트라우스 증후군
B. 다발혈관염을 동반한 육아종증
C. 면역글로불린 A 신병증
D. 유육종증

## 해설


지속적 혈성/화농성 부비동 증상에 혈뇨·단백뇨와 전신 관절통이 더해져 GPA(B)를 의심한다. GPA는 ANCA 연관 혈관염으로 특히 PR3-ANCA와 관련되지만 일부 환자는 ANCA 음성일 수 있다. 음성을 특징이나 필수조건으로 정의하지 않는다. IgA 신병증 단독으로 파괴성 상기도 병변 전체를 설명하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004257 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GPA를 ANCA 음성 혈관염으로 정의한 오류를 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004257
