---
type: qbank
schema_version: 1
id: medqa-us-validation-001023
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1189bfa266248288b8b575af8c8587ba19fe406f3b6f2a9341e5758f35602a65
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "식품 알레르기"
  - "에피네프린 자동주사기"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: prevention
difficulty: standard
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
---

# MedQA US 임상문제

## 문제

22세 남성이 견과류를 먹은 뒤 두드러기·천명과 저혈압으로 치료받았다. 에피네프린을 투여한 뒤 회복했고 관찰 후 퇴원 기준을 충족했다. 재노출 시 신속히 대처하도록 할 퇴원 조치는?

## 선택지

A. 매일 항히스타민제를 복용하도록 한다
B. 천식 흡입기만 가지고 다니도록 한다
C. 에피네프린 자동주사기를 처방하고 사용법·응급계획을 교육한다
D. 재노출 전에 경구 스테로이드만 복용하도록 한다

## 해설


자가주사용 에피네프린 사용법을 직접 교육하고 재발 시 지체 없이 투여·응급 연락하도록 안내한다. 의심 음식을 피하도록 하고 원인 평가를 연계한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-validation-001023`와 직접 대조했다.
- 판정: 자동주사기 C 유지. 호흡기 증상이 없으므로 중등도 아나필락시스라는 잘못된 진단·중증도 논리 제거. 원문의 천식 병력도 복구.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001023
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6684
