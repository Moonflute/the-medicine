---
type: qbank
schema_version: 1
id: medqa-us-train-007278
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d3023380357b04c25c65a74cbf362c6873770ea351b326c7ed823a3a1814074
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "G6PD 결핍"
  - "하인츠 소체"
  - "수포세포"
  - "메트헤모글로빈 환원검사"
  - "G6PD deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
question_type: investigation
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

15세 아프리카계 미국인 남자가 3일 동안 공막이 노랗게 변해 소아과에 내원했다. 어머니는 신생아 시기에 황달이 오래 지속되었다고 말한다. 활력징후는 안정적이고 경미한 황달과 창백이 있다. 복부검사에서 경미한 비장비대가 의심된다. 검사 결과는 헤모글로빈 9.9 g/dL, 백혈구 수 7,500/mm³, 혈소판 수 320,000/mm³, 망상적혈구 5%, 평균 적혈구 혈색소량 27.7 pg/세포, 평균 적혈구 혈색소 농도 32%, 평균 적혈구 용적 84 µm³, 총 빌리루빈 4.2 mg/dL, 직접 빌리루빈 0.3 mg/dL이다. 쿰스 검사는 음성이다. 말초혈액도말에서 다염성, 수포세포, 하인츠 소체가 보이고 복부 초음파에서 담석이 보인다. 이 환자의 진단에 가장 도움이 될 검사는 무엇인가?

## 선택지

A. 글리세롤 용혈검사
B. 메트헤모글로빈 환원검사
C. 혈청 T4, T3, TSH
D. 간담도 이미노디아세트산 스캔

## 해설


DAT 음성 용혈·blister cell/Heinz body와 신생아 황달은 G6PD 결핍을 의심하게 한다. 선택지 B는 G6PD 기반 환원능을 보는 전통적 선별 검사로 관련된다. 실제로 정량 적혈구 G6PD 활성 등으로 확인하며 급성 용혈/최근 수혈 시 위음성이 가능하여 필요시 회복 후 재검한다. 이를 모든 경우의 유일 특이 확진검사라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007278 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Methemoglobin reduction B는 전통적 G6PD 선별이며 유일 특이 확진검사라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/ency/article/003671.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007278
