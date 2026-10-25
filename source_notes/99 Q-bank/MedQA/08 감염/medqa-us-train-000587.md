---
type: qbank
schema_version: 1
id: medqa-us-train-000587
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6732a03e92f270f87a6f1a3de27b35d5bd5551760a52c088a98af5acec419af0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "sepsis"
  - "IV drug abuse"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

24세 남성이 지난 하루 동안 지속된 심한 복통으로 응급실에 내원했다. 환자는 밤에 잠을 이루지 못할 정도의 심한 수양성 설사와 복통이 있다고 말한다. 또한 배변 후 휴지에 혈액이 묻어 나오며 최근 5파운드의 체중 감소가 있었다고 한다. 과거력상 정맥 주사 약물 남용(IV drug abuse)과 최근 패혈증으로 인한 입원 치료 병력이 있다. 체온은 99.5°F(37.5°C), 혈압은 120/68 mmHg, 맥박은 100회/분, 호흡수는 14회/분, 실내 공기에서 산소 포화도는 98%이다. 신체 검진상 통증으로 복부를 움켜쥐고 있는 젊은 남성이 관찰된다. 복부 검진에서 장음 항진과 전반적인 복부 압통이 확인된다. 심폐 검진은 정상 범위 내에 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 메트로니다졸(Metronidazole)
B. 반코마이신(Vancomycin)
C. 클린다마이신(Clindamycin)
D. 보존적 치료 및 증상 지속 시 시프로플록사신(Ciprofloxacin) 투여

## 해설


최근 패혈증 입원 뒤 심한 수양성 설사와 복통은 항생제 관련 C. difficile 감염을 의심하게 한다. 정맥주사 약물사용력만으로 장내 MRSA라고 진단하지 않는다. 설사 빈도·중증도와 다른 원인을 확인하고 적절한 대변검사를 시행한다. CDI로 판단해 치료한다면 선택지 중 vancomycin(B)이 적절하며 반드시 장내에 도달하는 경구 경로를 뜻한다. 현행 지침은 초기 CDI에서 fidaxomicin을 조건부 선호하고 경구 vancomycin을 유효한 대안으로 인정한다. 안정된 환자에서 검사 없이 모든 설사에 경험적 vancomycin을 쓰라는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000587 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장내 MRSA라는 잘못 연결된 설명을 최근 입원 후 C. difficile 의심과 경구 vancomycin의 역할로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridium-difficile/
- https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000587
