---
type: qbank
schema_version: 1
id: medqa-us-train-004371
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:724e8fd81ef3b738d1e09747d863dea435c7cbd2de11c826e54d73e6e7162374
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "B형간염 노출 후 예방"
  - "주사침 손상"
  - "B형간염 면역글로불린"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
question_type: 임상증례 객관식
difficulty: standard
answer: D
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
---

# MedQA US 임상문제

## 문제

29세 남자가 정기 건강검진을 위해 내원했다. 지역 병원에서 간호사로 일하며 3일 전 B형간염 혈청검사 양성인 환자의 주사바늘에 찔렸다. 2년 전 B형간염 백신 3회 접종을 완료했고 다른 예방접종도 최신 상태다. 건강해 보이고 신체검사는 정상이다. B형간염 표면항원, 표면항체, C형간염 항체가 모두 음성이다. 이 주사침 손상 후 가장 적절한 관리는 무엇인가?

## 선택지

A. B형간염 면역글로불린과 B형간염 백신 1회 투여
B. B형간염 백신 2회 재접종
C. B형간염 백신 3회 재접종
D. B형간염 면역글로불린과 B형간염 백신 3회 접종

## 해설


한 차례3회 접종 뒤 면역반응 확인 기록이 없고 현재 anti-HBs가 보호역치 미만이며 노출원이 HBsAg 양성/불명인 상황이면 HBIG1회와 두 번째 접종 시리즈 D가 해당한다. 이후 항체 및 감염 추적을 한다. 과거 적절한 접종 후 anti-HBs≥10mIU/mL가 문서화된 면역정상 반응자는 시간이 지나 항체가 낮아져도 같은 방식으로 비면역이라 단정하지 않는다. 두 시리즈에도 무반응인 경우의 요법도 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004371 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 한 번 접종 시리즈 완료 후 반응 미확인·노출시 anti-HBs 음성의 HBIG+재접종 D 유지; 과거 확인 반응자와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-b/hcp/infection-control/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004371
