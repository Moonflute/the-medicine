---
type: qbank
schema_version: 1
id: medqa-us-train-007554
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8ec2229ec2c3114bdf2e2f3363702ce96c97387f21287e5ebead8374c77f451
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "만성 항문열상"
  - "배변통"
  - "선홍색 혈변"
  - "국소 니페디핀"
  - "Anal fissure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_suZjsl7QgKEFuYWwgRmlzc3VyZSkubWQ
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
---

# MedQA US 임상문제

## 문제

38세 남성이 두 달 넘게 배변 때 찢어지는 듯한 통증과 소량의 선홍색 출혈을 겪었다. 진찰에서 항문 뒤쪽 정중선의 치열이 보인다. 식이섬유, 변 완화제와 좌욕을 해도 지속된다. 수술 전 추가할 비수술 치료는?

## 선택지

A. 치핵 고무밴드 결찰
B. 항문 주위 농양 절개
C. 국소 칼슘통로차단제 연고
D. 경구 항생제 장기 투여

## 해설


만성 치열에는 변을 부드럽게 하는 관리와 함께 국소 칼슘통로차단제 등 괄약근의 긴장을 낮추는 치료를 사용할 수 있다. 비전형 위치나 치료에 반응하지 않는 병변에서는 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007554 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 치열 C와 치핵을 혼동하고 심한 통증을 경미하다고 한 오류 교정. 좌욕·변조절과 국소 CCB 우선, 지속 증상/경고징후에는 추가 평가.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ascrsu.com/ascrs/view/ASCRS-Evidence-Based-Guidelines-and-Expert-Consensus/3982013/2/Management_of_Anal_Fissures__2023_

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007554
- https://doi.org/10.1097/DCR.0000000000002664
