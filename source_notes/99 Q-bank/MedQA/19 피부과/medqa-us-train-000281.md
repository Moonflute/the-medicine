---
type: qbank
schema_version: 1
id: medqa-us-train-000281
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:684d60806960b9a4a5217929034c63d39871794096b25c8dbf4ba2418b5f24f4
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Ecthyma gangrenosum"
  - "Pyoderma gangrenosum"
  - "Blastomycosis"
  - "Basal cell carcinoma"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-q4sOyggCDshLjtj6zslZQgKEJhc2FsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDgg6rCQ7Je8L-ynhOq3oC5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvTWVzYWxhemluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 여성이 1개월 전부터 발생한 오른쪽 다리의 통증성 피부 병변으로 내원하였다. 처음에는 작은 붉은 반점으로 시작되었으나 이 기간 동안 크기가 급격히 커졌다. 환자는 병변이 발생하기 전에 다리에 개미에 물린 기억이 있다고 한다. 8개월 전 전방 포도막염(anterior uveitis)으로 코르티코스테로이드 치료를 받은 적이 있다. 과거력으로 크론병(Crohn's disease), 제2형 당뇨병, 고혈압이 있다. 현재 복용 중인 약물은 인슐린, 메살라민(mesalamine), 에날라프릴(enalapril), 아스피린이다. 2개월 전 아들을 방문하기 위해 위스콘신에 다녀왔다. 체온은 37.6°C, 맥박은 98회/분, 혈압은 126/88 mm Hg이다. 신체 검진상 하지에 함요 부종(pitting pedal edema)이 관찰된다. 오른쪽 앞다리에 중심부 괴사 기저부와 보라색의 불규칙한 경계를 가진 4cm 크기의 압통성 궤양성 병변이 있다. 양쪽 하지에 확장되고 굴곡진 정맥이 관찰된다. 대퇴동맥 및 발등동맥 맥박은 양측 모두 촉지된다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 괴저성 농창(Ecthyma gangrenosum)
B. 괴저성 농피증(Pyoderma gangrenosum)
C. 분아균증(Blastomycosis)
D. 기저세포암(Basal cell carcinoma)

## 해설

염증성 장질환 병력에 작은 외상 뒤 빠르게 커진 심한 통증의 궤양과 자색 불규칙 경계가 있어 괴저성 농피증(pyoderma gangrenosum, B)이 가장 적절하다. 외상에 반응해 악화되는 pathergy가 나타날 수 있다. Ecthyma gangrenosum(A)은 감염성 괴사 병변으로 B와 별개 질환이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Crohn병·외상 후 빠른 통증성 자색 궤양의 PG B는 맞으나 A ecthyma gangrenosum도 같은 한국어로 번역한 선지를 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000281
