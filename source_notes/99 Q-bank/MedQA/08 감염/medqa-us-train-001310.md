---
type: qbank
schema_version: 1
id: medqa-us-train-001310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09e70e1f3019d3b02144e36738aed27b1e739d3f2c4a8367abe7b18d33ec63fe
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Pneumocystis jirovecii pneumonia"
  - "immunocompromised host"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

6개월 전 신장이식을 받은 56세 남성이 발열, 호흡곤란, 비생산성 기침 및 무기력으로 내원했다. 면역억제제 외에는 다른 약을 복용하지 않는다. 활력징후는 맥박 110회/분, 혈압 126/76 mm Hg, 호흡수 26회/분, 실내 공기 산소포화도 80%, 체온 37.7°C (99.9°F)이다. 흉부 청진은 양측에서 간헐적인 천명음이 들리는 것 외에는 정상이다. 흉부 X선에서 미만성 간질성 침윤이 보인다. 기관지폐포 세척을 시행했고 메테나민 은 염색에서 기생충 감염이 확인되었다. 다음 중 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 펜타미딘 정맥주사
B. 트리메토프림-설파메톡사졸 정맥주사
C. 고용량 코르티코스테로이드와 기관지확장제
D. 답손과 트리메토프림 경구 투여

## 해설


면역억제 이식 환자의 심한 저산소혈증, 간질성 폐침윤과 은염색 소견은 Pneumocystis jirovecii 폐렴에 부합한다. 이 병원체는 과거 원충으로 분류되었으나 현재 진균이며, 중증 질환에서 보기 중 정맥 TMP-SMX B가 적절하다. 정맥 pentamidine은 TMP-SMX를 사용할 수 없을 때의 대체 PCP 치료제이지 아메바증 치료제라고 배제할 약이 아니다. Steroid·기관지확장제만으로 감염을 치료할 수 없다. NIH 인용 지침은 HIV 환자 대상이므로 비-HIV 이식 환자의 보조 steroid 여부까지 동일하게 확정하는 근거로 사용하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001310 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Pneumocystis는 진균이며 pentamidine은 PCP 대체요법이지 아메바증 약이라는 오설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001310
