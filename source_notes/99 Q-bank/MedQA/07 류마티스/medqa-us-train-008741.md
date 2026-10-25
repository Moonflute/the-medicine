---
type: qbank
schema_version: 1
id: medqa-us-train-008741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4f3d97e474db65c5f70f7970062d4afc9df87c7fc8fc683e059331708444366
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic lupus erythematosus"
  - "anti-dsDNA antibodies"
  - "pancytopenia"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: investigation
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 여성이 손, 어깨, 무릎의 통증으로 일차진료를 받으러 왔다. 통증은 몇 달 동안 지속되었지만 최근 악화된 것 같다. 병을 열거나 걷거나 양치질하는 등 어떤 활동도 아프다. 과거력으로 대학 시절 자살 시도, 변비, 불안, 우울증이 있고, 서핑 후 햇볕에 타 알로에베라 젤로 치료받았다. 체온 99.5°F(37.5°C), 혈압 137/78mmHg, 맥박 92회/분, 호흡수 14회/분, 산소포화도 98%이다. 검사 결과 혈색소 9g/dL, 헤마토크릿 33%, 백혈구 2,500/mm³(감별 정상), 혈소판 107,000/mm³이며 전해질, 신장·간기능은 정상이다. 다음 중 이 환자에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 항CCP 항체
B. 항dsDNA 항체
C. 체중부하 관절의 연골 변성
D. 파보바이러스 B19에 대한 IgM

## 해설


수개월의 다관절통과 빈혈·백혈구감소·혈소판감소는 SLE를 의심하게 하며 보기 중 anti-dsDNA B가 가장 부합한다. 이 항체는 비교적 특이하지만 SLE 진단에 단독으로 가장 가치가 높거나 반드시 양성이라는 뜻은 아니다. 임상기준, ANA·보체·소변 및 혈구감소의 다른 원인을 함께 평가한다. 서핑 후 일광화상 병력만을 곧바로 루푸스 광과민발진으로 바꾸지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008741 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항dsDNA B 선택은 유지하되 가장높은진단가치라는 일반화·진단확정 과장과 햇볕노출만으로 광과민 단정 방지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008741
