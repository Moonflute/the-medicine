---
type: qbank
schema_version: 1
id: medqa-us-train-003250
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcf49ac19668c7dd354eb3a5eb10d6014fc1248ff713c109a0c75e655bef2354
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute-on-chronic limb ischemia"
  - "peripheral artery disease"
  - "digital subtraction angiography"
  - "arterial occlusion"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
question_type: investigation
difficulty: complex
answer: B
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

71세 남성이 8시간 동안 진행된 심한 왼쪽 다리 통증과 저림으로 응급실에 왔다. 수개월 동안 오래 걸으면 종아리 경련과 간헐적인 발 저림이 있었지만 진료를 받지 않았다. 고혈압, 고지혈증, 제2형 당뇨병, 골관절염이 있고 과거 35년 동안 하루 한 갑의 담배를 피웠다. 왼쪽 다리는 차갑고 오금동맥, 후경골동맥, 발등동맥 맥박이 감소되어 있지만 근력은 5/5이고 관절에 삼출, 홍반, 압통은 없다. 다음 중 진단을 확진하는 데 가장 도움이 되는 검사는?

## 선택지

A. 크레아틴키나아제 농도
B. 디지털 감산 혈관조영술
C. 발목상완지수
D. 구획압 측정

## 해설

기존 운동성 파행에 안정 시 급성 통증·냉감·맥박 감소가 더해져 급성-on-만성 동맥폐색을 의심한다. DSA B는 폐색의 해부학적 위치를 직접 확인하고 중재와 연계할 수 있어 확진에 유용하다. 그러나 임상적 사지 생존도 평가·응급 항응고/재관류를 지연해서는 안 되며, 모든 PAD에서 DSA를 첫 검사로 시행한다는 뜻은 아니다. 상태와 가용성에 따라 duplex/CTA 등도 사용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 급성-on-만성 사지허혈의 DSA B는 확진·재관류 계획에 유용하나 모든 PAD에서 반드시 첫 검사라는 뜻은 아님.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003250
