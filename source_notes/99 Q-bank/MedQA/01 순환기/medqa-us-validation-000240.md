---
type: qbank
schema_version: 1
id: medqa-us-validation-000240
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e5342127bb355d4a6c1d3df7e1ae358ea26cc6b09353a8dccfd6e4ee8f0a5a43
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심근경색 후 좌심실 자유벽 파열"
  - "심장압전"
  - "ST분절 상승 심근경색"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL1NU67aE7KCIIOyDgeyKuSDsi6zqt7zqsr3sg4nspp0gKFNURU1JKSAoU1QtRWxldmF0aW9uIE15b2NhcmRpYWwgSW5mYXJjdGlvbikubWQ
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만한 50세 여성이 12시간 동안 지속된 흉통으로 시골 병원 응급실에 왔다. 통증은 흉골 뒤에서 짓누르는 양상이고 목으로 퍼지며 심한 발한을 동반한다. 고혈압이 있지만 약을 잘 복용하지 않는다. 외부 병원 심전도에서 STEMI가 확인되어 아스피린을 투여받았다. 병원으로 이송하던 구급차가 사고를 당해 늦게 도착했고, 심장내과 의사는 늦은 내원으로 중재를 연기하기로 했다. 통증은 호전되었다. 환자는 3일 밤 동안 호흡곤란이나 부종 없이 안정적이었고 혈압도 조절되었다. 4번째 밤에 매우 불안해하다가 곧 반응이 없어졌으며 맥박이 만져지지 않았다. 경정맥압이 상승하고 심음이 약하게 들렸다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 심낭염
B. 좌심실 자유벽 파열
C. 유두근 파열
D. 폐색전증

## 해설

심근경색 수일 후 갑자기 발생한 무맥박, 경정맥압 상승과 약한 심음은 자유벽 파열에 따른 혈심낭과 심낭압전을 의심하게 하므로 B가 적합하다. 유두근 파열은 주로 급성 중증 승모판 역류와 폐부종을 일으킨다. 자유벽 파열이 모든 심근경색 사망의 가장 흔한 원인이라는 뜻은 아니다. 또한 원문의 12시간 내원만을 이유로 재관류를 일률적으로 미루는 처치를 승인하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자유벽 파열 B의 기전을 명확히 하고 이를 전체 MI 사망의 최빈 원인으로 일반화한 오류를 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000240
