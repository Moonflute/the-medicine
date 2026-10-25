---
type: qbank
schema_version: 1
id: medqa-us-train-009155
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce824ecdaca80e37d80c2d7694f67f231fd5e1f3f2702004c1b85b717ebf2c3b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "polyarteritis nodosa"
  - "결절다발동맥염"
  - "type III hypersensitivity"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: mechanism
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
---

# MedQA US 임상문제

## 문제

69세 남자가 고혈압 병력이 있으며 피로, 간헐적 발열, 복통, 양쪽 하지에 만져지는 가려운 발진 등 여러 전신 증상으로 진료소에 왔다. 현재 실직 상태다. 통풍, 고혈압, 고콜레스테롤혈증, 제2형 당뇨병, HIV, C형 간염 병력이 있다. 하루 담배 두 갑과 맥주 6팩을 마시며, 과거 헤로인 주사 약물 사용력이 있지만 현재는 부인한다. 체온 40.0°C, 혈압 126/74 mmHg, 심박수 111회/분, 호흡수 23회/분이다. 발등굽힘 시 운동 약화가 있고 적혈구침강속도, C-반응단백, 단백뇨가 상승하여 결절다발동맥염이 의심된다. 결절다발동맥염의 기저 반응 기전은 무엇인가?

## 선택지

A. 제1형—아나필락시스성 과민반응
B. 제2형—세포독성 과민반응
C. 제3형—면역복합체 매개 과민반응
D. 제4형—세포 매개(지연형) 과민반응

## 해설


보기 C는 특히 HBV 관련 PAN에서 항원-항체 면역복합체가 혈관벽에 침착하는 고전적 제III형 기전을 가리킨다. 그러나 모든 특발성 PAN의 병인이 이 기전으로 확정된 것은 아니다. HCV·자반·신경병증이 있는 이 환자에서는 cryoglobulinemic vasculitis 등도 감별해야 하며 원문은 PAN이 의심된다고 기술했을 뿐 확진자료를 제시하지 않았다. 따라서 C를 PAN의 보편적·확정 병인으로 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009155 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PAN의 모든아형을 면역복합체로 단정하지 않고 고전적 C 기전의 적용범위 및 HCV cryoglobulin 감별을 명확화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://jcp.bmj.com/content/27/11/863

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009155
