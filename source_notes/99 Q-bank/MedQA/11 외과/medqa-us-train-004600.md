---
type: qbank
schema_version: 1
id: medqa-us-train-004600
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a10787983be7cb56074f128be8ce75741f22afe6653b22ac213f7b9c2d66e22
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "수술 부위 오류"
  - "의료 오류 예방"
  - "스위스 치즈 모형"
related_disease_slugs: []
question_type: ethics
difficulty: standard
answer: C
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

자동차 사고 후 63세 남성이 수술을 받게 되었다. 응급의사는 왼쪽 원위 하지의 자세 이상과 오른쪽 고관절 및 비구 골절-탈구를 영상 판독에서 확인했다. 그러나 정형외과 상급 전공의는 실수로 왼쪽 고관절 골절-탈구라고 기록하고 왼쪽 고관절을 수술 부위로 표시했다. 수술실에서 외과의가 확인한 왼쪽 하지도 바깥쪽으로 돌아가 있고 짧아져 있었다. 외과의는 왼쪽 경골에 핀을 삽입했지만 실수로 왼쪽 고관절을 수술했다. 수술 후 영상을 재검토한 뒤 오른쪽 고관절 골절-탈구에 대해 두 번째 수술을 시행했다. 외과의 개인만이 아니라 수술팀과 병원 시스템이 절개 전 의무적 '타임아웃' 절차와 준수 모니터링을 시행하지 않은 책임을 함께 진다. 의료 오류를 예방하기 위한 이 접근을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 폐쇄고리 의사소통
B. 근본원인분석
C. 스위스 치즈 모형
D. 중대한 사건

## 해설


수술 부위 오류는 여러 방어 단계가 동시에 실패한 결과이며, 스위스 치즈 모델은 이러한 다중 오류가 겹쳐 사고가 발생한다는 개념을 설명한다. 따라서 정답은 스위스 치즈 모형이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004600
