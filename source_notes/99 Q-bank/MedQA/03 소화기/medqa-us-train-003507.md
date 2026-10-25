---
type: qbank
schema_version: 1
id: medqa-us-train-003507
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba9e66f5b007180565694975cdbb73dea54542081dee744bffb5b1494277b009
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "pancreatic adenocarcinoma"
  - "double duct sign"
  - "obstructive jaundice"
  - "contrast-enhanced CT"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 여성이 1개월간 지속된 식후 악화되고 밤에 잠을 깨우는 상복부 통증으로 내원했다. 통증 때문에 먹는 것을 두려워했고 2 kg의 체중감소가 있었다. 흡연력은 40갑년이고 공막은 노랗게 변해 있었다. 총 빌리루빈은 9.8 mg/dL, 직접 빌리루빈은 8.6 mg/dL였다. 복부 초음파에서 담도와 췌관이 확장되었지만 췌장이나 간외 담도 병변은 없었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 대장내시경
B. 조영증강 복부 CT
C. 내시경 초음파
D. 내시경적 역행성 담췌관조영술

## 해설

폐쇄성 황달과 double-duct dilatation은 췌장두부/팽대부 등 폐쇄성 병변을 의심하게 한다. 초음파에서 종괴가 보이지 않아도 pancreatic-protocol 조영 CT B로 병변·절제가능성과 범위를 평가한다. CT만으로 모든 췌장암을 확진하거나 EUS보다 항상 민감하다는 뜻은 아니다. CT가 불명확하면 EUS·조직평가 등을 추가하고 ERCP는 주로 필요한 배액에 사용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Double duct의 pancreatic-protocol CT B는 유지. CT가 모든 병변에 가장 민감·확진이라는 주장은 EUS 등과 구분.
- https://www.nice.org.uk/guidance/NG85/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003507
