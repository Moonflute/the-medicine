---
type: qbank
schema_version: 1
id: medqa-us-train-000635
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b022e2c4b0ab7c8a041f081d0c59b4fb720d01b1b8ed643c1806a2239117fa1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 아시아 여성 환자가 2개월 전부터 시작된 보행 시 우측 다리의 심한 통증으로 내원하였다. 환자는 예전에 식료품점까지 0.5마일(800m)을 걸을 수 있었으나, 지난 한 달 동안은 통증 때문에 200미터도 걷지 못하고 멈춰야 했다. 약 5분간 휴식을 취하면 다시 걸을 수 있다. 환자는 고혈압, 심방세동, 제2형 당뇨병을 앓고 있다. 지난 32년간 매일 한 갑씩 흡연해 왔다. 현재 복용 중인 약물은 메트포르민(metformin), 에날라프릴(enalapril), 아스피린, 와파린(warfarin)이다. 활력 징후는 정상 범위 내에 있다. 진찰 결과 맥박은 불규칙하게 불규칙하다(irregularly irregular). 우측 하지의 온도가 좌측 하지보다 낮다. 우측 다리의 피부는 윤기가 나고 건조해 보인다. 대퇴동맥 맥박은 양측에서 촉지되나, 우측의 족배동맥 맥박은 감소되어 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 이중 초음파 검사(Duplex ultrasonography)
B. 신경 전도 검사
C. 발목-상완 지수(Ankle-brachial index)
D. 경골동맥 생검

## 해설

보행 시 악화되고 휴식으로 호전되는 다리 통증, 차가운 피부와 족부 맥박 감소는 말초동맥질환을 의심하게 한다. 초기 비침습적 생리검사로 C, 발목-상완 지수(ABI)를 측정하는 것이 적절하다. 아직 ABI 결과가 제시된 것은 아니다.

당뇨병 등으로 동맥이 비압박성일 때는 발가락-상완 지수 등 추가 검사를 고려한다. 이중초음파는 해부학적 평가 등에 유용하지만 이 문항에서 먼저 요구되는 기본 생리검사는 ABI이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 검사 전인데 ABI가 이미 감소했다고 가정한 해설을 수정하고 초기 진단검사 선택의 근거 설명.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000635
