---
type: qbank
schema_version: 1
id: medqa-us-train-001383
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f4882233894ac2669791b6782960dc5fd1236230560d8a09281b01fc4577207b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "thrombosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

43세 여성이 폐색전증으로 항응고 치료를 위해 입원했다. 중국 여행에서 장시간 비행을 하고 돌아온 뒤 시행한 검사에서 심부정맥혈전증도 확인되었다. 과거 혈전 병력은 없지만 어머니도 최근 폐색전증 치료를 받은 적이 있다. 과거력에 전자간증, 고혈압, 다낭성 난소 증후군 및 고콜레스테롤혈증이 있다. 현재 하루 한 갑을 피우고 매일 와인 한 잔을 마시며 불법 약물은 사용하지 않는다. 체온은 36.7°C (98.0°F), 혈압은 126/74 mm Hg, 심박수는 111회/분, 호흡수는 23회/분이다. 맥박은 강하고 안색은 창백하지만 호흡음은 정상이다. 처음 산소포화도는 실내 공기에서 81%였고 안면마스크로 8 L의 산소가 필요했다. 헤파린과 와파린 병용 항응고 6일째 혈소판 수가 182,000/mcL에서 63,000/mcL로 감소했다. INR은 아직 치료 범위가 아니다. 다음 중 가장 적절한 치료의 다음 단계는 무엇인가?

## 선택지

A. INR이 24시간 동안 치료 범위가 될 때까지 헤파린과 와파린을 계속한다
B. 헤파린을 중단하고 와파린을 계속한다
C. 헤파린과 와파린을 중단한다
D. 헤파린과 와파린을 계속하고 비타민 K를 투여한다

## 해설


Heparin 시작6일 뒤 혈소판이 182,000에서 63,000/µL로50% 이상 감소해 HIT를 의심한다. Heparin과 초기 warfarin을 중단하는 C가 제시된 선택지 중 적절하다. 급성 HIT에서 조기 warfarin은 protein C 감소와 정맥성 사지괴사 위험을 높일 수 있으므로 vitamin K로 효과를 되돌리고 argatroban 등 비헤파린 항응고제로 대체해야 한다. 이미 PE/DVT가 있으므로 두 약을 끊은 뒤 항응고 자체를 전부 중단하라는 뜻이 아니다. SVT나 verapamil은 이 문항과 관련 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001383 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIT 사례에 붙은 SVT·심율동전환·verapamil 해설을 해당 혈전·혈소판감소 사례 설명으로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001383
