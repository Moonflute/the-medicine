---
type: qbank
schema_version: 1
id: medqa-us-train-001403
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:99b857dc49a000628ff6de3889a92979caa2436723b6f3afe7df57b6215e8795
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "post myocardial infarction free wall rupture"
  - "cardiac tamponade"
  - "hemopericardium"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9idXRhbWluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압이 있고 6일 전 급성 ST분절 상승 심근경색(STEMI)을 경피적 경혈관성형술(PTA)로 치료받은 66세 여성이 갑작스러운 흉통, 호흡곤란, 식은땀 및 실신으로 내원했다. 체온은 37°C (98.6°F), 혈압은 80/50 mm Hg, 맥박은 125회/분, 호흡수는 12회/분, 실내 공기 산소포화도는 92%이다. 창백하고 반응이 없다. 심장검사에서 빈맥과 심첨부에서 가장 크게 들리고 등으로 방사되는 뚜렷한 범수축기 잡음이 있다. 폐 청진은 정상이다. 흉부 X선에서 심비대와 깨끗한 폐야가 보인다. 심전도에서 전흉부 유도(V2–V4)의 ST 상승과 저전압 QRS 복합체가 보인다. 응급 경흉부 심초음파에서 좌심실 벽운동 이상과 상당한 심낭삼출이 확인된다. 삽관하고 적극적인 수액 소생을 시작했다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 대동맥 내 풍선 역박동
B. 도부타민 70 mcg/min 정맥주사
C. 즉시 수술실로 이송
D. 즉시 심장 카테터 삽입

## 해설

정답은 C이다. MI6일 후 쇼크·실신과 상당한 심낭삼출은 좌심실 자유벽 파열에 의한 혈심낭/압전을 우려하게 해 즉각적인 외과 평가·복구가 필요하다. IABP나 도부타민만으로 파열을 치료할 수 없다. 저음성 잡음이 자유벽 파열의 특징이라는 뜻은 아니며 심첨부 범수축기잡음은 다른 기계적 합병증의 동반 가능성도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MI후 free-wall rupture/hemopericardium에서 저음성잡음이 특징이라는 근거 없는 문장 제거.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001403
