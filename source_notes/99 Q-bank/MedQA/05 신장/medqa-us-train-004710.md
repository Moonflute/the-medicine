---
type: qbank
schema_version: 1
id: medqa-us-train-004710
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ee5e82a434944b9c71cf42356adff7d60fa538791ed76bf447aeaf24b9c4e76
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "트리메토프림에 의한 혈청 크레아티닌 상승"
  - "약물 상호작용"
  - "급성 신손상 감별"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

고혈압과 양성 전립선 비대증이 있는 55세 남성이 트리메토프림-설파메톡사졸로 요로감염을 치료한 지 4일째 추적진료를 받으러 왔다. 증상은 호전되었고 배뇨에는 문제가 없지만 2년 동안 약한 소변 줄기와 배뇨 지연이 있었다. 현재 발열은 없고 혈압은 130/88 mm Hg, 심박수는 분당 80회이다. 옆구리 압통은 없다. 소변검사에서 백혈구와 에스테라제는 음성이고 적혈구가 2개/고배율시야 보이며 원주는 없다. 그러나 의사는 다음 변화를 발견했다.
치료 전 BUN 12 mg/dL, 크레아티닌 1.2 mg/dL
오늘 BUN 13 mg/dL, 크레아티닌 2.1 mg/dL
다음 중 가장 적절한 조치는 무엇인가?

## 선택지

A. 환자를 안심시키고 트리메토프림-설파메톡사졸을 중단한 뒤 1~2주 후 재검
B. 요로폐쇄 확인을 위한 정맥 신우조영술 예약
C. 요도폐쇄 확인을 위한 방광경검사 예약
D. 급성 간질성 신염의 추가 관리를 위해 입원

## 해설


트리메토프림은 크레아티닌 상승을 일으킬 수 있으나, 급성 신손상 증상이 없고 BUN/Cr 상승이 경미하므로 약물 중단 후 재검이 적절하다. 다른 검사는 과도하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004710
