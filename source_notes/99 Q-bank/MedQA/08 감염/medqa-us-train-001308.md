---
type: qbank
schema_version: 1
id: medqa-us-train-001308
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a53e262bc29da33690476265cf456998ceebee5daa49c23715c63d886c22448a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cat-scratch disease"
  - "Bartonella henselae infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-usmOyGjOuzkSAoQ2F0IFNjcmF0Y2ggRGlzZWFzZSkubWQ
question_type: management
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

이전에 건강했던 5세 남아가 3주 동안 반복되는 발열과 권태감으로 내원했다. 피로와 식욕 저하도 있었다. 2주 전 처음 진료를 받았을 때 반구진성 발진이 있었으나 이후 사라졌다. 당시 아목시실린-클라불란산을 처방받았다. 인후통이나 근육통은 부인한다. 가정학습을 하고 있어 아픈 사람과 접촉한 적이 없다. 집에는 반려동물이 없지만 어머니가 봉사하는 고양이 보호소를 자주 방문한다. 체온은 38.4°C (101.2°F)이다. 신체검사에서 오른손등에 1 cm 크기의 구진성 병변이 보인다. 겨드랑이와 서혜부에 압통이 있고 크게 부은 림프절이 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 독시사이클린 치료
B. 피리메타민 치료
C. 아지트로마이신 치료
D. 스트렙토마이신 치료

## 해설


고양이 보호소 접촉, 손등의 접종 부위 구진과 압통성 림프절병증은 Bartonella henselae에 의한 묘소병(cat-scratch disease)을 시사한다. 지속 발열과 큰 압통성 림프절을 고려하면 보기 중 azithromycin C를 선택할 수 있다. 면역정상자의 단순 묘소병은 자연 호전되기도 하므로 항생제가 모든 환자에게 필수인 것은 아니며, azithromycin은 림프절 크기가 더 빨리 줄도록 도울 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001308 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고양이 물림병이라는 번역과 모든 건강 소아에서 항생제가 필수인 것처럼 표현한 부분 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/bartonella/hcp/clinical-overview/cat-scratch-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001308
