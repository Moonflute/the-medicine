---
type: qbank
schema_version: 1
id: medqa-us-validation-000054
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:698ac7e354dd3e6f0a1f50b189f166af3e07acbb326bad62d3d7ce8249498db6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "화상"
  - "숙시닐콜린"
  - "고칼륨혈증성 부정맥"
question_type: mechanism
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

체표면적 30% 화상을 입은 지 열흘 된 환자가 수술을 위해 재삽관을 준비한다. 숙시닐콜린을 피해야 하는 직접적인 이유는?

## 선택지

A. 칼륨이 급상승해 치명적 부정맥이 생길 수 있다
B. 혈당이 급격히 내려갈 수 있다
C. 나트륨이 감소해 뇌부종이 생긴다
D. 억제되지 않는 저칼슘혈증이 생긴다

## 해설

큰 화상 뒤 근육의 접합부 밖 아세틸콜린 수용체가 늘어난다. 아급성기에 숙시닐콜린을 쓰면 칼륨 유출이 커져 심정지로 이어질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대화상 뒤 숙시닐콜린의 고칼륨혈증성 부정맥 C를 유지하되 24시간이라는 절대 경계나 단순 탈분극 방해로 설명하지 않는다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b990f84-9515-44bd-a97d-a97bbead065c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000054
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/008845s080lbl.pdf
