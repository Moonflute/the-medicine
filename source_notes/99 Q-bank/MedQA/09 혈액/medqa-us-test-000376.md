---
type: qbank
schema_version: 1
id: medqa-us-test-000376
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7a0ae491f9bcdba6370c3e749cae28a18d53305d6d31155512db28ac9ee0ef35
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "겸상적혈구병 관련 뇌졸중"
  - "허혈성 뇌졸중"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

겸상적혈구병이 있는 22세 남성이 갑자기 발생한 안면 비대칭과 심한 통증으로 응급실에 왔다. 학교에서 교사가 왼쪽 얼굴 처짐을 발견했다. 체온 99.9°F(37.7°C), 혈압 122/89 mmHg, 맥박 110회/분, 호흡 19회/분, 실내 공기 산소포화도 98%였다. 안면 비대칭과 상·하지 근력 4/5가 관찰되었다. 두부 CT에서 두개내 출혈은 보이지 않았다. 다음 중 가장 적절한 치료는?

## 선택지

A. 알테플라제
B. 교환수혈
C. 헤파린
D. 와파린

## 해설


SCD에서 급성 국소 신경결손이 생기면 응급 수혈을 시행하며 교환수혈(B)은 HbS 분율을 낮추면서 산소 운반과 점도를 조절한다. 총 헤모글로빈을 무조건 낮추는 치료가 아니다. 성인 뇌졸중의 혈전용해 적응증은 별도로 검토하되 수혈을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000376 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 교환수혈 B 유지. 총Hb를 낮추는 치료라는 오류를 HbS 분율 감소와 산소운반 개선으로 교정, 성인 tPA의 일률 배제 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7189278/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000376
