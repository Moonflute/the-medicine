---
type: qbank
schema_version: 1
id: medqa-us-train-000615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a1bcd6220c2865b6a5425c58107882a29160b34bf53a8831a487a3605461390f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Hodgkin lymphoma"
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

65세 남성이 목의 종괴와 체중 감소에 대한 평가를 위해 내원하였다. 그는 2개월 전부터 종괴가 커지는 것을 처음 알아차렸다. 종괴는 통증이 없다. 그는 또한 식욕 부진과 간헐적인 복통을 겪고 있다. 지난 3개월 동안 10kg(22lb)의 체중이 감소하였다. 때때로 아침에 식은땀으로 흠뻑 젖은 채 잠에서 깬다. 그는 매일 일반의약품 종합비타민을 복용한다. 창백해 보인다. 맥박은 분당 65회, 혈압은 110/70 mm Hg, 체온은 38.1°C(100.6°F)이다. 신체 검진상 목의 앞삼각(anterior triangle)에서 통증이 없는 골프공 크기의 종괴가 관찰된다. 생검 결과 CD15 및 CD30 양성인 이엽성 핵을 가진 거대 세포가 확인되었다. 혈청 검사 결과 칼슘 수치는 14.5 mg/dL, 부갑상선 호르몬(PTH) 수치는 40 pg/mL이다. 이 환자의 검사 결과에 대한 가장 가능성 있는 설명은 무엇인가?

## 선택지

A. 골모세포성 전이(Osteoblastic metastasis)
B. 이소성 비타민 D 생성
C. 종합비타민 과다복용
D. 골용해성 전이(Osteolytic metastasis)

## 해설


호지킨 림프종에서 분비되는 1α‑hydroxylase가 비정상적으로 비타민 D를 활성화시켜 1,25‑디하이드로비타민 D를 증가시키고, 이는 장에서 칼슘 흡수를 촉진해 고칼슘혈증을 일으킨다. 따라서 비타민 D의 이소성 생성이 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000615
