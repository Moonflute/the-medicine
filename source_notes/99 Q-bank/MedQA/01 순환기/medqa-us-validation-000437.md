---
type: qbank
schema_version: 1
id: medqa-us-validation-000437
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:23bb55c46df3aa44a659ada8a940342d0f2a1c707aa854154dc68fb2060f9a6c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 흉통"
  - "급성관상동맥증후군 평가"
  - "심전도"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 여성이 갑자기 시작된 지속적인 흉골 중앙의 날카로운 흉통으로 응급실에 왔다. 다음 주 마라톤을 앞두고 걱정하고 있으며 활력징후와 신체진찰은 정상이고 검사 결과는 대기 중이다. 가장 적절한 초기 처치는?

## 선택지

A. 아스피린, 산소, 니트로글리세린, 모르핀
B. 컴퓨터단층촬영
C. 심전도
D. 헤파린

## 해설


급성 흉통 평가의 첫 단계는 심전도(ECG)로 심근허혈이나 부정맥을 빠르게 확인하는 것이다. 다른 검사는 ECG 결과에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원인 미상의 급성 흉통 초기 평가는 ECG C이며 정상 활력만으로 허혈을 배제하거나 MONA를 일괄 투여하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000437
