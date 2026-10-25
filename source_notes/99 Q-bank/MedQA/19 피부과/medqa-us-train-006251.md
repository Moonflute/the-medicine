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
question_type: prevention
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

건강한 18세 여성이 얼굴, 등 위쪽 및 팔에 발생한 심한 심상성 여드름이 1년째 지속되어 내원했다. 경구 항생제와 벤조일퍼옥사이드 및 레티노이드 병용 국소치료를 받았으나 증상이 완전히 호전되지 않았다. 진찰에서 지성 피부와 함께 얼굴과 등 위쪽에 다수의 면포, 농포 및 흉터가 관찰된다. 복합 경구피임약을 이용한 장기 치료를 시작했다. 이 약물은 다음 중 어떤 질환의 발생 위험을 유의하게 감소시키는가?

## 선택지

A. 자궁내막암
B. 심부정맥혈전증
C. 악성 흑색종
D. 간세포선종

## 해설

복합 경구피임약은 자궁내막암 위험을 낮추므로 A가 적절하다. Progestin 성분이 estrogen의 내막 증식 작용을 길항하고 내막 증식을 억제하는 것이 핵심이다. Estrogen 단독이 이를 억제하는 것으로 설명하면 안 된다. COC는 혈전 위험을 낮추는 약도 아니며 정맥혈전증 위험은 오히려 증가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. COC의 자궁내막암 예방 A를 estrogen 자체가 내막 증식을 억제한다고 반대로 설명한 오류를 교정한다.
- 공식/학회 근거: https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/oral-contraceptives-fact-sheet
- 공식/학회 근거: https://www.cancer.gov/types/uterine/hp/endometrial-prevention-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006251
