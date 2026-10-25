---
type: qbank
schema_version: 1
id: medqa-us-train-008658
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c700b4015a7c672bbc5f56d52ca59a29b43d4a36d7b69600e93c3bda0118404
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "giant cell arteritis"
  - "thoracic aortic aneurysm"
  - "amaurosis fugax"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: prognosis
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

71세 여성이 그날 아침 15분 동안 오른쪽 눈의 갑작스러운 시력 소실이 있었으나 저절로 호전되어 내원했다. 지난 4개월 동안 피로, 체중 4kg(8.8파운드) 감소, 밤에 땀에 흠뻑 젖어 깨는 일이 여러 차례 있었다. 지난 2개월 동안 잦은 두통과 씹을 때 턱 통증이 있었다. 흡연과 음주는 하지 않는다. 체온 37.5°C(99.5°F), 맥박 88회/분, 혈압 118/78mmHg이다. 시력은 왼쪽 20/25, 오른쪽 20/30이고 동공은 동일하며 반응한다. 시신경유두 부종은 없다. 혈색소 10.5g/dL, 혈소판 420,000/mm³, 적혈구 침강속도 69mm/h이다. 이 환자 상태에서 향후 가장 위험이 증가하는 합병증은 무엇인가?

## 선택지

A. 심근경색
B. 흉부 대동맥류
C. 급속 진행성 사구체신염
D. 폐동맥 고혈압

## 해설


새 두통, 턱 파행, 전신증상과 일과성 단안 시력소실은 GCA를 강하게 시사한다. 큰 동맥 염증과 벽 약화로 흉부대동맥류 B 위험이 높아진다. 이는 제시한 장기 합병증 비교이며 시력손상보다 덜 중요하거나 현재 시력소실을 기다려도 된다는 뜻은 아니다. 현재 증상은 즉각적인 시력위협 평가·치료 대상이며 대혈관 영상 및 추적은 임상상에 따라 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008658 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA의 대동맥류 위험 B 유지하되 현재 일과성 시력소실의 응급성을 간과하거나 모든 합병증 중 가장위험이라 바꾼 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008658
