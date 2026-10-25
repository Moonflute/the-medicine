---
type: qbank
schema_version: 1
id: medqa-us-train-005710
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc767e14ffc9d86297cb062e68f8f71df8ff0a72862e41260d098ec418c5c8c3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "내경동맥 박리"
  - "일과성 허혈발작"
  - "동측 호너 증후군"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 하프마라톤을 완주한 지 24시간 후 시작된 심한 좌측 두통과 목 통증으로 응급실에 왔다. 두통이 시작된 직후 우측 상지 쇠약과 좌측 눈의 갑작스러운 시력 소실이 있었으나 병원으로 오는 길에 모두 호전되었다. 도착 시 사람, 장소, 시간에 대한 지남력은 정상이다. 체온은 37.3°C(99.1°F), 맥박은 분당 77회, 호흡수는 분당 20회, 혈압은 160/90 mmHg이다. 좌측 눈꺼풀 처짐과 좌측 동공 축동이 있고 양안 시력은 20/20이다. 시신경유두 부종은 없다. 양측 근력과 심부건반사는 정상이다. 조영제를 사용하지 않은 뇌 CT는 정상이다. 경부 이중초음파에서 좌측 내경동맥 혈류가 보이지 않는다. 다음 중 투여하는 것이 관리의 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 100% 산소
B. 만니톨
C. 헤파린
D. 알테플라제

## 해설

운동 후 새 편측 두경부 통증, 동측 Horner 징후와 일과성 망막·반구 허혈은 좌측 경부 내경동맥 박리를 강하게 의심하게 한다. 출혈과 금기를 평가한 뒤 항혈전 치료를 하며 주어진 선지 중 헤파린(C)이 가능한 선택이다. 현재 권고는 박리의 임상·영상 및 출혈 위험에 따라 항혈소판제 또는 항응고제를 개별 선택하여 보통3–6개월 치료하는 것으로, 모든 급성 경동맥 폐색에 헤파린이 보편적1차라는 뜻은 아니다. CTA/MRA 등으로 병변과 범위를 확인한다. 현재 증상이 완전히 소실된 상황을 지속 장애성 뇌졸중과 동일하게 다루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두경부 통증·Horner와 일과성 동측 단안 시력소실/반대측 위약을 경동맥 박리로 연결하고 모든 급성 경동맥 폐색에 헤파린이1차라는 오류를 수정했다.
- 공식/학회 근거: https://www.ahajournals.org/doi/epdf/10.1161/STR.0000000000000457

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005710
