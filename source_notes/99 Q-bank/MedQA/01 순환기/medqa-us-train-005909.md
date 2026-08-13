---
type: qbank
schema_version: 1
id: medqa-us-train-005909
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d42e35d88932f28fe29d6f641489077918445010d70a28440f7882fb73a5d7c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심인성 쇼크"
  - "급성 심근경색 합병증"
  - "폐모세혈관 쐐기압"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: prognosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

71세 남성이 심한 흉골하 흉통으로 응급실에 왔다. 초기 심전도에서 V2, V3, V4, V5 유도의 ST 상승과 상호 변화가 보였다. 아스피린과 헤파린을 시작하고 심장 카테터실로 이송했다. 며칠 후 회복했으나 병동에서 심한 피로감을 느끼고 물리치료 도움을 받아도 걷기 힘들 정도로 쇠약하다. 흉부 X선에서 심장 음영이 커지고 양측 폐기저부에 액체가 보인다. 체온은 98.4°F(36.9°C), 혈압은 85/50 mmHg, 맥박은 분당 110회, 호흡수는 분당 13회, 산소포화도는 97%이다. 다음 중 예상되는 소견은 무엇인가?

## 선택지

A. 전신혈관저항 감소
B. 조직 산소 추출 감소
C. 박출률 증가
D. 폐모세혈관 쐐기압 증가

## 해설


대량 심근경색 후 심인성 쇼크에서는 좌심실 수축력 저하로 폐모세혈관 정맥압(PCWP, 폐모세혈관 쐐기압)이 상승한다. 이는 폐 울혈과 호흡곤란을 야기한다. 따라서 PCWP 증가가 예상되는 소견이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005909
