---
type: qbank
schema_version: 1
id: medqa-us-train-002772
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b9b215c36939a0ae4a793e3bc00f28d03565163f14ed218837630cf710daf32
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometriosis"
  - "deep dyspareunia"
  - "cyclic pelvic pain"
  - "diagnostic laparoscopy"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
difficulty: standard
answer: C
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

임신 경험이 없는 28세 여성이 추적 진료를 위해 내원했다. 5개월 동안 성교 시 깊은 통증과 월경 전에 심해지는 골반통이 있었다. 경구피임약을 복용해도 통증이 가라앉지 않았다. 질 분비물이나 악취는 부인하며 2년째 남편과 일부일처 관계이다. 중대한 질환의 병력은 없다. 활력징후는 정상이다. 신체검사에서 하복부를 깊게 촉진할 때 압통이 있다. 질과 자궁경부의 질경검사에서는 이상이나 분비물이 없다. 혈청 β-hCG는 6 mIU/mL이고 복부 초음파는 정상이다. 다음 중 진단을 확립하는 데 가장 가능성 높은 검사는?

## 선택지

A. 복부 및 골반 CT
B. 암항원 125(CA-125)
C. 복강경검사
D. 자궁경부확장 및 소파술

## 해설

주기 골반통·깊은 성교통과 경구피임약 불응은 자궁내막증을 의심하게 한다. 정상 초음파가 표재 병변을 배제하지 않아 선택지 중 복강경(C)을 고려한다. 모든 의심 환자에게 수술 확진이 필수인 것은 아니다. hCG 6은 검사실에 따라 경계값이므로 수술 전 재확인하며, 임신 경험이 없다는 사실만으로 불임을 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신경험부재를불임으로단정한오류 및 hCG6경계값·현행진단접근반영.
- https://academic.oup.com/hropen/article/2022/2/hoac009/6537540

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002772
