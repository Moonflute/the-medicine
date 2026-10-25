---
type: qbank
schema_version: 1
id: medqa-us-train-001106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84ea3aec32a37325880bd48120d7d60861c629831a3e9650aa7492795e5f1e81
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chronic obstructive pulmonary disease"
  - "narrow-complex tachycardia"
  - "atrial fibrillation"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 폐쇄성 폐질환(COPD) 과거력이 있는 60세 남성이 호흡곤란으로 구급차를 통해 응급실로 이송되었습니다. 환자는 숨이 차서 문장을 제대로 이어 말하지 못합니다. 응급구조사는 환자가 티오트로피움(tiotropium) 흡입기를 여러 번 사용했으나 효과가 없었다고 전합니다. 환자의 활력징후는 다음과 같습니다: 체온 정상, 혈압 90/60 mmHg, 심박수 120회/분, 호흡수 24회/분. 산소포화도는 90%입니다. 심전도(EKG) 검사 결과, 각 QRS 복합체 앞에 불규칙한 P파가 선행하고 PR 간격이 불규칙한 좁은 복합체 빈맥(narrow-complex tachycardia)이 관찰됩니다. 다음으로 가장 적절한 처치는 무엇입니까?

## 선택지

A. 혈액 화학 검사 및 일반 혈액 검사를 시행하고 관찰한다
B. 즉시 라베탈롤(labetalol)을 투여하고 응급실에서 관찰한다
C. 즉시 산소를 투여한다
D. 기관내 삽관을 시행하고 중환자실로 입원시킨다

## 해설

정답은 C이다. COPD 악화에서 가변 P파와 PR간격을 동반한 불규칙 좁은 QRS 빈맥은 다소성 심방빈맥(MAT)을 의심하게 하며 P파가 없는 AF라고 설명하지 않는다. 세 가지 이상 P파 형태 등 실제 ECG와 전해질을 확인한다. 기저 호흡기 악화와 유발 요인을 치료하고 산소는 COPD의 목표 범위에 맞추어 조절한다. SpO2 90%는 무조건 고농도 산소를 투여하라는 근거가 아니며 심한 호흡곤란·저혈압에 대해 환기/순환을 함께 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: QRS앞 P파/불규칙 PR을 AF라 한 오류를 MAT 의심으로 교정하고 산소를 조절 투여함을 명시.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001106
