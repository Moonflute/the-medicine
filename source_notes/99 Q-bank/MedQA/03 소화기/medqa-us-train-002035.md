---
type: qbank
schema_version: 1
id: medqa-us-train-002035
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bbd35dea7942ae34562d7e5183ea63fd64e84847d897aebf20de0d2622919f74
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal variceal bleeding"
  - "recurrent variceal hemorrhage"
  - "TIPS"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성이 혈액성 구토로 응급실에 왔다. 만성 알코올중독과 간경변이 있고 식도정맥류 출혈로 내시경 치료를 받은 적이 두 번 있으며 이번이 세 번째다. 안정화 후 내시경으로 출혈 정맥류 결찰에 성공했다. 입원 1일과 2일의 혈색소는 10.9와 11.1 g/dL이다. 다음 중 최선의 관리 단계는 무엇인가?

## 선택지

A. 안정을 관찰해 퇴원시키고 3개월 간격 내시경 추적
B. 경정맥 간내 문맥전신 단락술(TIPS) 선택을 논의
C. 장기 octreotide와 4주 예방적 항생제 시작
D. 농축적혈구 2단위 투여

## 해설

세 번째 정맥류 출혈이므로 재출혈 예방과 TIPS 적합성을 논의하는 B가 적절하다. 일반적인 이차예방은 비선택적 베타차단제와 반복 내시경 결찰의 병합이며, 이에 실패한 재출혈에서는 TIPS를 권고한다. 병합예방 시행 여부와 간기능·뇌증·심장 상태를 확인해야 하므로 모든 환자에게 즉시 TIPS를 시행한다는 뜻은 아니다. 급성 출혈 시 혈관작용제와 단기 항생제 예방을 사용하되 장기 octreotide와 4주 항생제를 표준 장기예방으로 설명한 기존 해설은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 정맥류 출혈의 TIPS 상담 B인데 기존 해설이 장기 octreotide·4주 항생제 C를 권고한 오류.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002035
