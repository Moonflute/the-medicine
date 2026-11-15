---
type: qbank
schema_version: 1
id: medqa-us-train-006251
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c957c369f33023a40cf2bf851a26cfea96f1eac49e21b3f3e4f00e157cb5f249
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "심상성 여드름"
  - "자궁내막암"
  - "복합 경구피임약"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
difficulty: simple
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

18세 환자는 얼굴에 면포와 염증성 구진이 반복된다. 흉터나 깊은 결절은 없고 이전에는 세정제만 사용했다. 항생제 없이 두 종류 국소 작용을 함께 이용하는 초기 선택은?

## 선택지

A. 아다팔렌과 벤조일퍼옥사이드
B. 국소 클린다마이신 단독 장기 치료
C. 국소 스테로이드와 항진균제
D. 경구 독시사이클린 단독 장기 치료

## 해설

국소 레티노이드는 면포 형성을 줄이고 벤조일퍼옥사이드는 염증 병변을 줄이는 데 도움이 된다. 항생제를 사용하더라도 단독 장기 사용을 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. COC의 자궁내막암 예방 A를 estrogen 자체가 내막 증식을 억제한다고 반대로 설명한 오류를 교정한다.
- 공식/학회 근거: https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/oral-contraceptives-fact-sheet
- 공식/학회 근거: https://www.cancer.gov/types/uterine/hp/endometrial-prevention-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006251
- https://pubmed.ncbi.nlm.nih.gov/38300170/
