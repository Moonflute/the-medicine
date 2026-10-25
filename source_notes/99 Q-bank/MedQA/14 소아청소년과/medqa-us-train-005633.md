---
type: qbank
schema_version: 1
id: medqa-us-train-005633
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:995cdfb1ead185c977e397a0c418d490af9e6347c3c6d8c5288605a375ffc481
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "자폐 스펙트럼 장애"
  - "발달 평가"
  - "불필요한 추가검사"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
difficulty: standard
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

4세 남아가 학교에서 집중하거나 친구를 사귀지 못한다고 교사가 지적하여 부모와 함께 소아과를 방문했다. 부모는 아이가 집, 학교 및 어린이집에서도 다른 사람들과 잘 상호작용하지 못한다고 말한다. 신체검사에서 활력징후는 안정적이고 나이와 성별에 맞는 정상 체중, 키 및 머리둘레를 보인다. 일반 및 신경학적 검사는 완전히 정상이다. 최근 청력검사도 정상이었고 임상심리사 평가에서 지적장애는 배제되었다. 현재 진단 평가의 일부로 다음 중 시행해야 할 검사는 무엇인가?

## 선택지

A. 뇌 자기공명영상(MRI)
B. 뇌파검사
C. 메틸-CpG 결합 단백질 2(MECP2) 유전자 돌연변이 검사
D. 추가 검사는 필요하지 않다

## 해설

이 사례에서 신경학적 이상·경련·특징적 퇴행이 없어 보기의 MRI, EEG 또는 MECP2 검사를 일률적으로 시행할 근거가 없으므로 D가 적절하다. 그러나 사회성 문제만으로 자폐를 확진하는 것은 아니며 발달·언어·반복행동 등 포괄 평가가 필요하다. 자폐가 확인되면 적절한 원인 유전 평가도 논의할 수 있어 '어떠한 추가 평가도 필요 없다'는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 보기의 불필요한 MRI/EEG/MECP2 검사 배제와 자폐의 전체 평가 불필요를 구분.
- https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/Identification-Evaluation-and-Management-of?autologincheck=redirected%23sec-8

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005633
