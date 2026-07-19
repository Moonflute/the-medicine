---
type: qbank
schema_version: 1
id: medqa-us-train-007050
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:32fa85e857e9d4ff73877ca00ec4663c0270b9fc803881901655ffbdf97d17c0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "저혈량성 쇼크"
  - "폐모세혈관 쐐기압"
  - "전신혈관저항"
question_type: diagnosis
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

46세 남자가 현장에서 의식을 잃은 채 발견되어 응급의료진에 의해 응급실로 이송되었다. 이송 중 기관 삽관을 시행하고 생리식염수 2L를 일시 주입했다. 도착 당시 혈압은 80/60 mmHg, 체온은 37.5°C이다. 경정맥은 편평하고 모세혈관 재충만 시간은 4초이다.

혈관계 지표는 다음과 같다.
심장 지수: 낮음
폐모세혈관 쐐기압(PCWP): 낮음
전신혈관저항: 높음

다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 패혈성 쇼크
B. 저혈량성 쇼크
C. 신경성 쇼크
D. 심인성 쇼크

## 해설


저혈량성 쇼크는 심박출량 감소와 저 PCWP, 높은 전신혈관저항을 보이며, 저혈량이 가장 흔한 원인이다. 따라서 정답은 B이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007050
