---
type: qbank
schema_version: 1
id: medqa-us-train-004818
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5fd213214c393bd967261858afc523adea7b33a49e592024712611f3de9bb0e6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "펜시클리딘 중독"
  - "PCP"
  - "환각성 약물"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성이 물질 남용 치료를 위해 정신과에 내원했다. 2년 전부터 이 물질을 사용했고 담배에 뿌려 피운다고 한다. 피우면 흥분하고 자신이 자기 자신이 아닌 듯한 느낌이 든다. 방에 있을 때 물질을 사용하면 벽에서 선명한 색을 보고 좋아하는 음악을 들으면 눈앞에 색과 모양이 뚜렷하게 보인다. 알코올이나 니코틴 남용은 없다. 한 달 전 급성 물질 중독으로 내원했을 때 망상, 기억상실, 전신 홍반, 빈맥, 고혈압, 동공 산대, 구음장애와 운동실조가 있었다. 이 물질에 중독되었을 때 신체검사에서 나타날 가능성이 가장 높은 소견은 무엇인가?

## 선택지

A. 안진
B. 전신 근긴장저하
C. 통증 감각 증가
D. 과도한 발한

## 해설

해리감·지각 변화와 고혈압·운동실조·구음장애의 양상은 PCP 중독을 시사하며, 제시된 소견 중 안진이 특징적이다. PCP에서는 통증 반응이 감소할 수 있고 근긴장도 증가가 나타날 수 있다. 발한 같은 자율신경 증상도 가능하므로 다른 선지의 증상이 모두 절대로 나타나지 않는다고 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004818

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PCP의 안진 정답 유지. 발한도 생길 수 있는데 다른 부작용은 일치하지 않는다고 한 배타적 설명 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.samhsa.gov/substance-use/learn/hallucinogens
