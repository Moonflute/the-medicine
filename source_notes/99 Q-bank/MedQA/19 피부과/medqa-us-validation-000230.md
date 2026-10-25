---
type: qbank
schema_version: 1
id: medqa-us-validation-000230
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3708fbae4d6cc27f2bbc0d55aee1012f02165da85740f6e658b248eabc82def1
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "봉와직염"
  - "단독"
  - "연조직 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-uLqOuPhSAoRXJ5c2lwZWxhcykubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 오른쪽 다리의 발적과 부종으로 진료를 받으러 왔다. 만지면 매우 아프고 발열과 오한이 있다. 흉통이나 호흡곤란은 없다. 제2형 당뇨병이 있으며 3년 전 오른쪽 다리의 복재정맥 박리 및 결찰술을 받았다. 경비원으로 일하고, 흡연과 음주는 하지 않는다. 체온은 38.7°C, 맥박 99회/분, 혈압 138/72 mmHg이다. 진찰에서 경계가 뚜렷한 8 cm 크기의 단단하고 압통이 있으며 따뜻한 홍반성 피부 병변이 보인다. 서혜부 림프절병증은 없고 발가락 사이에 간찰진이 있다. 다음 중 가장 적절한 처치는?

## 선택지

A. 경구 세팔렉신 치료
B. 정맥 세파졸린 치료
C. 정맥 시프로플록사신 치료
D. 피하 헤파린 주사

## 해설

원정답은 B, 정맥 세파졸린이다. 발열·오한과 국소 열감·압통을 동반한 경계가 뚜렷한 홍반은 단독/비화농성 봉와직염을 시사하고, 발가락 사이 피부병변은 침입구가 될 수 있다. 제시된 선택지 중 세파졸린은 연쇄상구균과 MSSA를 표적으로 하는 적절한 정맥 항균제이다. 다만 모든 봉와직염에 정맥 치료가 필요한 것은 아니고, 전신상태·중증도·MRSA 위험에 따라 경로와 범위를 결정한다. 진행성 독성 소견, 불균형하게 심한 통증이나 괴사 등이 있으면 깊은 감염/괴사성 감염을 긴급 평가하며 항균범위를 재검토한다. 시프로플록사신 단독이나 헤파린은 이 피부감염의 적절한 대안이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 레이노/니페디핀 해설 오연결. 발열·오한 동반 비화농성 피부감염의 정맥 cefazolin B 설명. 감염중증도에 따른 치료와 응급 재평가 한계 명시.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000230
