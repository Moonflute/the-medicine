---
type: qbank
schema_version: 1
id: medqa-us-train-005838
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3645a676dbe6b7dfa5d345b6386e7edf1244aff85f169f8dcdbbc3d4d3e4886b
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "급성 두드러기"
  - "식품 알레르기"
  - "히스타민 H1 차단제"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-uRkOuTnOufrOq4sCAoVXJ0aWNhcmlhKS5tZA
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
---

# MedQA US 임상문제

## 문제

4세 남아가 조개를 먹은 뒤 전신에 가려운 팽진이 생겼다. 천명, 목소리 변화, 복통·구토는 없고 혈압과 산소포화도는 정상이다. 관찰하면서 피부 증상을 완화할 우선 약제는?

## 선택지

A. 국소 스테로이드
B. 경구 세티리진
C. 경구 프레드니솔론
D. 근육주사 에피네프린

## 해설


피부에 국한된 급성 두드러기에는 2세대 H1 항히스타민제를 사용한다. 호흡곤란이나 순환장애 등 아나필락시스 소견이 새로 생기면 즉시 에피네프린으로 대응한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-005838`와 직접 대조했다.
- 판정: 피부에 국한된 급성 두드러기에서 B 유지. 국소 스테로이드가 중증 전신반응 치료라는 오류 제거. 원문의 이미지 언급은 있지만 텍스트의 팽진·기도 정상 소견만으로 선택 가능.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://doi.org/10.1111/all.70210
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005838
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6684
