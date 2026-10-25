---
type: qbank
schema_version: 1
id: medqa-us-train-002493
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d3e228e8012eb4ab8d2a790184fdee8deefbebcc028c2973e17d4d98446402a8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "rotavirus gastroenteritis"
  - "acute viral diarrhea"
  - "stool enzyme immunoassay"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFuOuhnOuwlOydtOufrOyKpCDqsJDsl7wgKE5vcm92aXJ1cyBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: D
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

8개월 여아가 3일간 지속된 발열, 구토, 설사로 응급실에 왔다. 하루에 물설사를 최소 10회 하고 2개월 전 어린이집에 다니기 시작한 후 상기도감염을 세 번 앓았으나 발달은 정상이다. 예방접종은 불완전하다. 체온 38.5°C, 맥박 145회/분, 혈압 92/54 mmHg이며 점막이 건조하고 피부긴장도가 감소되어 있고 장음은 항진되어 있다. 혈액검사와 포도당, BUN, 크레아티닌은 정상이나 저칼륨혈증이 있다. 정맥 수액 소생과 함께 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 복부 초음파
B. 지사제 투여
C. 혈액배양
D. 대변 효소면역검사

## 해설

불완전 예방접종 영아의 수양성 설사·구토는 로타바이러스 등 급성 위장염에 합당하며 대변 항원 EIA(D)로 확인할 수 있다. 다만 비합병 위장염 모두에 검사가 필요한 것은 아니고 입원·격리·집단발병 등 진단 필요성에 따라 선택한다. 핵심 치료는 수분·전해질 교정과 수유 유지이며 영아 지사제는 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 보기 중 로타 항원 대변 EIA D는 진단 선택지이나 모든 급성 위장염에 필수라는 해설 수정.
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-19-rotavirus.html
- https://www.rch.org.au/clinicalguide/guideline_index/Gastroenteritis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002493
