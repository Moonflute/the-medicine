---
type: qbank
schema_version: 1
id: medqa-us-train-000016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e5b4773bb2bde8eb5d9d67cf46d72b8a2d9d53a11f51ab38236246ea8627b9e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "다리 통증"
  - "당뇨병"
  - "고혈압"
  - "비만"
  - "심방세동"
  - "급성 사지 허혈"
  - "말초동맥질환"
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 남성이 다리 통증으로 응급실에 내원했습니다. 그는 밖에서 걷던 중 갑자기 통증이 시작되었다고 말합니다. 환자는 당뇨병, 고혈압, 비만, 심방세동의 과거력이 있습니다. 그의 체온은 99.3°F (37.4°C), 혈압은 152/98 mmHg, 맥박은 97회/분, 호흡수는 15회/분이며, 실내 공기에서 산소포화도는 99%입니다. 신체 검진에서 왼쪽 다리가 차갑고 창백한 것이 특징적입니다. 환자의 왼쪽 다리 감각은 오른쪽 다리에 비해 현저히 감소했으며, 왼쪽 다리의 근력은 1/5입니다. 다음 중 관리의 최선의 다음 단계는 무엇입니까?

## 선택지

A. 단계적 운동과 아스피린
B. 헤파린 점적 주입
C. 수술적 혈전 제거술
D. 조직 플라스미노겐 활성제

## 해설


갑작스러운 다리 통증, 차가움, 감각 및 운동 저하 등은 급성 동맥 폐색을 시사한다. 급성 폐색에서는 혈전 용해를 위해 즉시 헤파린 점적 주입이 필요하다. 수술적 혈전 제거술은 보존적 치료 후에도 효과가 없을 때 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000016
