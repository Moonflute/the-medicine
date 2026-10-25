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

38세 남자가 2주 동안 배변할 때 심한 통증으로 내원했다. 변에 선홍색 피가 묻고 통증이 두려워 배변을 피하고 있다. 지난해 모소동 수술로 입원한 적이 있다. 10년 전 직장 사고 이후 만성 요통이 있어 옥시코돈과 가바펜틴을 복용한다. 아버지는 62세에 대장암을 진단받았다. BMI는 37.6kg/m²이다. 활력징후는 정상이고 복부는 부드럽고 압통이 없다. 심한 통증 때문에 직장수지검사는 시행하지 않았다. 헤모글로빈은 16.3 g/dL, 백혈구 수는 8,300/mm³이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 보툴리눔 독소 주사
B. 누관 소파술
C. 좌욕과 국소 니페디핀
D. 대장내시경

## 해설


배변 시 찢어지는 듯한 심한 통증과 선홍색 출혈은 급성 치열을 시사하며 치핵과 같은 병명이 아니다. 선택지 중 좌욕과 국소 nifedipine(C)이 적절한 비수술 치료이다. 수분·섬유와 opioid 관련 변비 조절도 중요하다. 통증이 경미해서라는 근거는 맞지 않으며, 치료 무반응이나 비전형 병변·지속 출혈이면 다른 원인 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007554 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 치열 C와 치핵을 혼동하고 심한 통증을 경미하다고 한 오류 교정. 좌욕·변조절과 국소 CCB 우선, 지속 증상/경고징후에는 추가 평가.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ascrsu.com/ascrs/view/ASCRS-Evidence-Based-Guidelines-and-Expert-Consensus/3982013/2/Management_of_Anal_Fissures__2023_

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007554
