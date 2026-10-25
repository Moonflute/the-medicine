---
type: qbank
schema_version: 1
id: medqa-us-train-001461
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b2262fa6b763c1f0f0f4c5029c26333a71e4fa1fabd2eb5c2488c783ebd5b49
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pelvic inflammatory disease"
  - "gonorrhea"
  - "chlamydia"
  - "HIV screening"
related_disease_slugs:
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

이전에 건강했던 28세 여성이 5일 동안의 하복부 통증과 화농성 질 분비물로 내원했다. 월경은 20–40일 간격으로 불규칙하고 4–8일 지속된다. 2개월 전 만난 새 파트너와 성생활을 하며 콘돔 사용은 일관되지 않다. 5개월 전 자궁경부 세포검사는 정상이었다. 체온은 39°C (102.2°F), 맥박은 85회/분, 혈압은 108/75 mm Hg이다. 하복부 압통과 양측 서혜부 림프절병증이 있고 골반검사에서 자궁 및 양쪽 부속기 압통과 소량의 혈성 자궁경부 분비물이 보인다. 소변 임신검사는 음성이다. 백혈구 14,500/mm3, ESR 90 mm/h이고 핵산증폭검사에서 의심한 진단이 확인되었다. 세프트리악손과 독시사이클린을 시작했다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 복부 CT
B. 질확대경검사
C. 자궁경부 세포검사
D. HIV 검사

## 해설


PID로 진단된 환자는 HIV와 매독 및 임균·클라미디아 검사를 함께 받아야 하므로 보기 중 D가 적절하다. HIV 검사는 감염을 확인하고 연계 치료를 제공하기 위한 것이며 단순히 기존 PID 치료 반응 예측만을 위한 검사는 아니다. 현재 표준 PID 항생제에는 anaerobe를 위한 metronidazole도 포함한다. 39°C 고열은 중증도와 입원·주사 치료 필요성을 함께 평가해야 하는 소견이다. 제시된 ceftriaxone+doxycycline만을 완결된 현행 요법이라고 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001461 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PID의 HIV 검사 D 유지하되 현재의 metronidazole 포함 요법과 고열 시 입원평가 누락을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001461
