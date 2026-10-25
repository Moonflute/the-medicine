---
type: qbank
schema_version: 1
id: medqa-us-train-008487
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d801daf49472b39b595dfe15a82b547e5f3db15a441e7c4562e6856d8520690
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "lichen sclerosus"
  - "balanitis xerotica obliterans"
  - "urethral meatal stenosis"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-q3gOuRkCDtj6ztlLzsl7wgKEJhbGFub3Bvc3RoaXRpcykubWQ
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

성생활을 하는 37세 남성이 7일 동안 지속된 생식기 부위 가려움으로 내원했다. 배뇨 시 작열감도 있다. 경구 메트포르민으로 잘 조절되는 제2형 당뇨병이 있다. 골반검사에서 귀두와 포피에 압통이 있는 위축성 백색 구진과 주변 피부의 홍반이 보인다. 요도구가 좁아져 있고 경화되어 있다. 다음 중 진단을 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 클로베타솔 국소 도포
B. 플루코나졸 국소 도포
C. 병변 생검
D. 타크로리무스 국소 도포

## 해설

위축성 백색 구진과 포피·귀두 병변, 경화된 요도구 협착은 남성 생식기 경화태선을 시사한다. 진단 확인이나 다른 병변/악성 변화 감별을 위해 제시된 선택지 중 생검(C)이 적절하다. 전형적 경화태선은 임상적으로 진단할 수도 있어 모든 환자에 생검이 필수라는 의미는 아니다. 클로베타솔·타크로리무스는 치료제이지 조직학적 진단검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경화태선 병명 오역과 모든 병변에 생검 필수라는 단정 완화. 진단검사를 묻는 이 선지에서 C 유지.
- 공식/학회 근거: https://www.bad.org.uk/pils/lichen-sclerosus-in-males

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008487
