---
type: qbank
schema_version: 1
id: medqa-us-train-002783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22ca6f77e018590a9857b998608be0b4bcf6167de9bb72e156d84d09b4e8a8a5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Wolff-Parkinson-White syndrome"
  - "preexcited atrial fibrillation"
  - "wide-complex tachycardia"
  - "procainamide"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yauO2UhC3tjIztgqjsiqgt7ZmU7J207Yq4IOymne2bhOq1sCAoV1BXIFN5bmRyb21lKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남아가 16시간 전 시작된 두근거림과 어지럼증으로 응급실에 왔다. 전날 밤 폭음했다고 한다. 진정 후 전기적 심율동전환을 시행했고, 이후 기록한 심전도가 제시되어 있다. 의식을 회복한 후 관찰을 위해 입원했으며 크레아티닌과 전해질 수치는 정상이다. 심율동전환 12시간 후 다시 두근거림을 호소한다. 어지럼증이나 흉통은 없다. 체온은 37.1°C, 맥박은 220회/분, 호흡수는 20회/분, 혈압은 112/84 mmHg, 실내 공기 산소포화도는 98%이다. 신체검사는 정상이다. 새 심전도에서 PR 간격 단축과 규칙적인 넓고 단형인 QRS 복합체가 보인다. 다음 중 관리에서 가장 적절한 다음 단계는?

## 선택지

A. 황산마그네슘 투여
B. 베라파밀 투여
C. 아테놀롤 투여
D. 프로카인아미드 투여

## 해설

서술된 리듬은 규칙적이고 넓은 단형 QRS 빈맥이므로 불규칙한 pre-excited AF로 부르면 안 된다. WPW 관련 antidromic AVRT 등 부전도로를 이용한 빈맥을 의심할 수 있으며, 안정적인 넓은 QRS 빈맥에서 선택지 중 procainamide D가 적절하다. AV nodal blocker인 verapamil·atenolol은 진단 불확실한 pre-excited 빈맥에서 피한다. 실제 기전 확정에는 누락된 이전 ECG 및 전체 리듬 기록이 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문은 규칙적 넓은 단형 빈맥인데 해설이 AF로 오연결. 안정적 preexcitation 의심 wide tachycardia의 procainamide D 취지로 수정.
- https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Supraventricular-Tachycardia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002783
