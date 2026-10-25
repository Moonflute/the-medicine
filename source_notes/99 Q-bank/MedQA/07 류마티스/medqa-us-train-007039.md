---
type: qbank
schema_version: 1
id: medqa-us-train-007039
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:99907fa7761ce5b911d78345c49b178135805bd3171777952becff35b0c05e64
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "강직성 척추염"
  - "축성 척추관절염"
  - "천장관절염"
  - "에타너셉트"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0V0YW5lcmNlcHQubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0xlZmx1bm9taWRlLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
---

# MedQA US 임상문제

## 문제

36세 남자가 6개월 동안 점점 심해지는 요통으로 내원했다. 통증은 아침에 일어날 때 가장 심하고 하루 동안 호전된다. 앞으로 몸을 굽히기 어렵다. 이부프로펜을 복용했지만 효과는 제한적이었다. 유일한 복용약은 피부의 홍반성 소양성 반점 두 곳에 바르는 코르티코스테로이드이다. 어머니는 류마티스관절염이 있다. 체온은 37.1°C(98.8°F), 맥박은 75회/분, 호흡수는 14회/분, 혈압은 126/82 mmHg이다. 검사에서 척추 굴곡이 제한되어 있고 오른쪽 전완에 홍반성 구진이 있는 반점 두 개가 보인다. 천장관절을 타진할 때 압통이 있다. 척추 X선 사진이 제시되어 있다. 다음 중 이 환자의 가동성을 가장 향상시킬 치료는 무엇인가?

## 선택지

A. 레플루노마이드
B. 에타너셉트
C. 프레드니솔론
D. 리툭시맙

## 해설


만성 염증성 요통·척추굴곡 제한·천장관절 압통은 축성 척추관절염을 시사한다. NSAID 반응이 부족하고 활동성 질환이 확인되면 선택지 중 TNF 차단제 etanercept(B)가 적절한 치료 옵션이다. Etanercept는 IL-17 억제제가 아니다. 투여 전 진단·충분한 기존 치료·객관적 염증과 TB/감염 위험 등을 평가하며 제공되지 않은 X선 형태를 실제 확인했다고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007039 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Etanercept를 IL-17 억제제라고 한 오류를 TNF 차단제로 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/103795s5605lbl.pdf
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007039
