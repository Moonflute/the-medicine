---
type: qbank
schema_version: 1
id: medqa-us-train-001204
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f85d6e2eadd5775709b61818079753ad439378369606ecbb6bab34d0d1d1f34
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "multiple myeloma"
  - "hip fracture"
  - "femoral neck fracture"
question_type: mechanism
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 여성이 집 안에서 걷다가 넘어진 후 1시간 만에 오른쪽 고관절 통증으로 응급실에 내원했다. 넘어진 이후로 서거나 걸을 수 없는 상태이다. 고혈압과 통풍 병력이 있다. 자매가 55세에 다발성 골수종(multiple myeloma)으로 사망했다. 현재 복용 중인 약물은 암로디핀(amlodipine)과 페북소스타트(febuxostat)이다. 담배는 피우지 않는다. 매일 와인 한 잔을 마신다. 체온은 37.3°C, 맥박은 101회/분, 혈압은 128/86 mm Hg이다. 진찰 결과 오른쪽 서혜부 압통이 관찰된다. 오른쪽 고관절의 관절 가동 범위는 통증으로 인해 제한된다. 나머지 신체 검진 결과는 정상이다. 전혈구 검사(CBC)와 혈청 크레아티닌 농도는 참고 범위 내에 있다. 고관절 X-선 검사에서 오른쪽 대퇴경부의 선형 골절이 확인되었다. 환자는 수술이 예정되어 있다. 이 환자의 골절에 대한 가장 가능성 있는 기저 원인은 무엇인가?

## 선택지

A. 골모세포 활성 감소
B. 단클론항체 생성
C. 골 무기질화 장애
D. 파골세포 기능 결함

## 해설


고관절 골절이 외상 없이 발생한 경우 골밀도 감소가 원인일 가능성이 높다. 환자는 고령이며 골다공증 위험인자(흡연, 알코올)도 존재한다. 골모세포 활성 감소는 골다공증의 주요 병리이며, 이는 골절을 초래한다. 따라서 가장 가능성 높은 기저 원인은 골모세포 활성 감소이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001204
