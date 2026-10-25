---
type: qbank
schema_version: 1
id: medqa-us-train-005731
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1386e355e169ee22f5662f20914916b2b40e798bf6613a833fa5981e668d38f4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "비알코올성 지방간염"
  - "간세포 풍선변성"
  - "대사증후군"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ruYTslYzsvZTsmKzshLEg7KeA67Cp6rCE7Je8IChOb24tYWxjb2hvbGljIFN0ZWF0b2hlcGF0aXRpcykubWQ
  - MDQg64K067aE67mEL-uMgOyCrOymne2bhOq1sCAoTWV0YWJvbGljIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 정기 건강검진을 위해 내원했다. 4년 전 당뇨병을 진단받았으며 그 외 병력은 특이하지 않다. 매일 메트포르민만 복용한다. 지난 10년 동안 매일 밤 맥주 한 캔을 마셨다. 혈압은 145/90 mmHg, BMI는 31kg/m²이다. 신체검사는 정상이다. 검사에서 활성화 부분 트롬보플라스틴 시간 30초(정상 25~40초), 프로트롬빈 시간 13초(정상 11~15초), INR 1.2, 혈청 알부민 4g/dL, 총 빌리루빈 0.9mg/dL, 직접 빌리루빈 0.2mg/dL, 알칼리성 인산분해효소 45U/L, AST 43U/L, ALT 56U/L, GGT 43U/L(정상 5~50U/L)이다. A형 간염 항체, B형 간염 표면항원, C형 간염 항체는 모두 음성이다. 간생검에서 세포 내 지방 축적 증가, 간세포 풍선변성 및 유의한 섬유화 없이 소정맥 주위 림프구와 호중구 침윤이 보인다. 다음 중 이 소견을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 알코올성 지방간
B. 알코올성 간염
C. 비알코올성 지방간질환으로 인한 간경변
D. 비알코올성 지방간염

## 해설

비만·당뇨·ALT우세의 경미한 상승과 지방축적·풍선변성·염증은 D의 NASH(현행 대사성 용어로 MASH에 해당하는 표현형)를 지지한다. 본문은 맥주1캔/일이며 간헐적 과음으로 임의 변경하면 안 된다. 유의한 섬유화가 없어 간경변 C는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 매일 맥주1캔을 간헐적 고알코올섭취로 바꾼 설명을 제거하고 대사성 지방간염 D로 정리.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005731
