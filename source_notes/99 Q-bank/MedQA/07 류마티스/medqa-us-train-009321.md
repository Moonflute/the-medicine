---
type: qbank
schema_version: 1
id: medqa-us-train-009321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f44e07232d965761678b67e7cf442decfb3d84c87fac88393a40937cffbea8d3
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "류마티스관절염"
  - "DMARD"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: standard
answer: A
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FkYWxpbXVtYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

42세 여성이 8개월 동안 간헐적인 손발 관절통과 강직으로 내원했다. 증상은 한 달에 약 세 번 아침에 일어난 후 발생해 약 1시간 지속된다. 발작일에는 발열과 근육통도 자주 있다. 통증에는 이부프로펜을 복용하면 잘 호전된다. 마지막 발작은 5일 전이었다. 그 외에는 건강하고 약물은 복용하지 않는다. 언니가 전신홍반루푸스를 앓고 있다. 진찰에서 양쪽 손목과 근위지절관절에 경미한 부종과 압통이 있다. 손 X선 사진이 제시되었다. 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 메토트렉세이트
B. 아달리무맙
C. 프레드니솔론
D. 디클로페낙

## 해설


8개월의 대칭 손목·PIP 통증과 아침강직, 발작 사이에도 남는 활막 부종·압통은 지속 염증성 관절염/RA를 의심하게 한다. 보기 중 methotrexate A가 초기 질병변경 치료에 부합하며 adalimumab을 DMARD-naive 환자의 통상 첫 약으로 사용하지 않는다. NSAID나 steroid 단독은 장기 관절손상 예방 전략이 아니다. 다만 영상은 제공되지 않아 미란이 실제 보인다고 단정하지 않았으며 혈청·임상 및 영상으로 진단과 활동도를 확인한 뒤 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009321 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제공되지 않은 손X선의 미란을 만들어 넣은 설명 교정; 지속 활막염과 질병변경 치료 의도 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1016/j.ard.2026.01.023

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009321
