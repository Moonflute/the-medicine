---
type: qbank
schema_version: 1
id: medqa-us-train-005582
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0bf1fff363827181e5d7f0dd44b3812d75dc18fa62353d272fcf225e385112d8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병 급성흉부증후군"
  - "폐렴구균 백신"
  - "겸상적혈구 예방관리"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: prevention
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

겸상적혈구빈혈이 있는 8세 남아가 고열, 생산성 기침, 피로와 저혈압, 저산소증, 왼쪽 폐기저부 수포음으로 내원했다. 혈색소 8.1 g/dL, 백혈구 17,000/mm³이다. 다음 중 이 상태를 예방했을 가능성이 가장 높은 것은?

## 선택지

A. 만성 수혈치료
B. 다당질 백신
C. 엽산
D. 저분자량 헤파린

## 해설


SCD의 기능적 무비장 상태는 폐렴구균 등 피막균의 침습 감염에 취약하다. 고열·폐렴·쇼크 의심 상황을 예방하는 선택지로 B의 폐렴구균 피막 다당 항원에 대한 예방접종이 가장 부합한다. 현행 실제 접종은 과거 접종력에 따라 PCV 및 필요시 PPSV23을 사용하며 PPSV 단독이 모든 상황의 완전한 접종 요법이라는 뜻은 아니다. 감염 이외에도 원인이 있는 모든 급성흉부증후군을 백신이 예방한다고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005582 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 다당질 백신 B의 피막균 감염 예방 의도 유지; 모든 급성흉부증후군을 PPSV 단독으로 예방한다는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/risk-indications.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005582
