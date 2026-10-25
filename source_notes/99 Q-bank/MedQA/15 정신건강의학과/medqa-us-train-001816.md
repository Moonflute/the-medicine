---
type: qbank
schema_version: 1
id: medqa-us-train-001816
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1ff02202e90f172eb584c56b3885ded530f66e92e4215caeca28cd61ee80b03
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "lipoma"
  - "autonomous adult patient"
  - "informed consent"
question_type: ethics
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18세 남성이 부모와 함께 정기 건강검진을 위해 내원했다. 7개월 전부터 등에 부어오른 덩이가 있었다. 정맥 헤로인을 사용한 적이 있으나 지난 2개월간 불법 약물은 사용하지 않았다. 중대한 질환의 개인력이나 가족력은 없다. 활력징후는 정상이다. 오른쪽 위쪽 등에 2-cm 크기의 부드럽고 소엽성이며 움직이는 종창이 있고 가장자리를 만지면 손가락에서 미끄러져 달아난다. 양측 팔오금에 치유된 주사 자국이 있다. 이 종괴는 추가 치료가 필요 없는 지방조직으로 된 양성 지방종으로 보인다고 설명했다. 환자는 미용 목적으로 제거를 원한다. 4개월 전 다른 의사에게 제거를 요청했지만 필요하지 않다고 판단해 거절당했다. 절제의 이득과 위험 및 재발 가능성을 설명했으나 부모는 절제하지 말라고 한다. 환자는 수술을 고집한다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 절제술을 시행한다
B. 병원 윤리위원회에 의뢰한다
C. 메타돈 클리닉에 의뢰한다
D. 부모의 동의를 요청한다

## 해설

미국 원문 상황에서 18세 성인이 진단과 절제의 이득·위험·대안을 이해하고 자발적으로 원하며 의사결정능력 저하의 근거가 없으므로, 부모의 반대만으로 본인의 유효한 동의를 무효화하지 않는다. 제시된 선택지 중 충분한 설명과 동의 후 지방종 절제를 시행할 수 있다. 미용 목적이라도 위험이 전혀 없다는 뜻은 아니며, 동의서는 설명·이해·자발성·능력 확인을 대체하지 않는다. 다른 관할의 성년 기준을 이 문항에 그대로 적용하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001816

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 성인 자율성·절제 원정답 유지. 나이만으로 결정능력이 자동 충분하거나 서명만으로 수술 가능·위험 거의 없음이라는 설명 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf
