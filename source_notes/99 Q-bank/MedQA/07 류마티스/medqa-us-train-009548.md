---
type: qbank
schema_version: 1
id: medqa-us-train-009548
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9896ba75efbb071d82e3593d1a034584e742774b2484daa328d6dafe340530d6
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "giant cell arteritis"
  - "거대세포동맥염"
  - "polymyalgia rheumatica"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

76세 여성이 4개월 동안 점점 심해지는 근육통과 강직, 어깨와 다리의 근력저하, 전신 피로로 내원했다. 아침에 침대에서 일어나기 매우 어렵고 아들이 두 번 와서 일으켜야 했다. 4 kg(9 lb)의 체중 감소와 수면장애가 있었으며 지난 2개월 동안 왼쪽 두통과 씹을 때 턱 통증이 여러 번 발생했다. 3개월 전 계단 난간에 머리를 부딪혀 넘어졌다. 체온 38°C, 맥박 101회/분, 혈압 128/88 mmHg이다. 결막 창백, 통증으로 약간 제한된 어깨·고관절 운동, 정상 근력이 있다. ESR 59 mm/시간, 혈청 CK 38 mg/dL이다. 두통의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 만성 경막하혈종
B. 거대세포동맥염
C. 편두통
D. 측두하악관절 장애

## 해설


76세의 새로운 두통과 씹을 때 턱 통증, 전신증상·높은 ESR 및 PMR형 통증은 GCA B를 가장 강하게 시사한다. 기존 낙상 때문에 경막하혈종도 임상 감별이지만 턱 파행·염증성 소견을 더 잘 설명하는 것은 GCA이다. 모든 고령 두통의 가장 흔한 원인이 GCA라는 뜻은 아니다. 원문의 CK38 mg/dL는 효소활성 단위가 아니므로 이 수치를 정상 CK가 확정된 것처럼 사용하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009548 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 새두통의 모든고령 최다원인이라 일반화한 설명을 턱파행·PMR동반 GCA로 교정; 원문CK단위불일치 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009548
