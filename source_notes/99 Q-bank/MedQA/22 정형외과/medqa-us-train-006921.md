---
type: qbank
schema_version: 1
id: medqa-us-train-006921
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fdacd0bc5de66fdb0a9c648dff3f26fd74d91365862900dbfd5444044a4bc8c8
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "그람음성 화농성 관절염"
  - "세균성 관절염"
  - "세페핌"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

82세 남성이 3일 전 시작되어 아세트아미노펜에도 악화된 오른쪽 무릎의 심한 통증과 뻣뻣함으로 응급실에 내원했다. 양성 전립선비대증과 고혈압이 있고 일주일 전 요로감염으로 니트로푸란토인 치료를 받았다. 에날라프릴, 히드로클로로티아지드 및 탐스로신을 복용하며 흡연과 음주는 하지 않는다. 체온은 38.7°C(101.5°F), 맥박은 분당 92회, 혈압은 135/90 mm Hg이다. 오른쪽 무릎이 붓고 붉으며 따뜻하고 운동 범위가 통증으로 제한되어 있다. 관절천자에서 황록색 혼탁액이 나오고 그람염색에서 백혈구와 그람음성 막대균이 다수 보인다. 무릎 X선은 정상이다. 다음 중 약물치료로 가장 적절한 것은?

## 선택지

A. 정맥 나프실린
B. 정맥 세페핌
C. 정맥 세프타지딤과 겐타마이신
D. 정맥 반코마이신

## 해설

발열을 동반한 급성 단관절염과 관절액의 다수 그람음성 막대균은 그람음성균 화농성 관절염을 시사한다. 최근 요로감염은 잠재 감염원이며, 선지 중 그람음성균을 포괄하는 정맥 세페핌(B)이 적절하다. 그람염색만으로 녹농균을 특정하거나 본문에 없는 신우신염·신기능저하를 단정하지 않는다. 배양과 감수성 결과에 따라 항생제를 좁히고 실제 신기능을 확인해 용량을 조절하며 관절 배액도 필요하다. 세프타지딤+겐타마이신의 중복 그람음성 범위는 항상 필요한 것이 아니고 독성을 고려해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요로감염을 신우신염·신기능저하로 바꾸고 Pseudomonas를 확정한 해설을 제거했다. 그람음성 막대균에 대한 선지 B를 유지하고 배양 및 신기능에 따른 개별화를 설명했다.
- 공식/학회 근거: https://jbji.copernicus.org/articles/8/29/2023/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006921
