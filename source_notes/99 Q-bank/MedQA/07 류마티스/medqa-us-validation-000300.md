---
type: qbank
schema_version: 1
id: medqa-us-validation-000300
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:deee7121e9c5bc5d49134e1319976bbe61223beca9dbe8a4d037be8cdc329dea
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "메토트렉세이트"
  - "메토트렉세이트 유발 폐렴"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
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
---

# MedQA US 임상문제

## 문제

47세 여성이 양손 손가락의 통증과 부종으로 응급실에 왔다. 20년 동안 학교 버스 운전기사로 일했다. 5년 전 일과성 허혈발작 병력이 있으며 최근 2개월 동안 식단 변화 없이 체중이 감소하고 하루 종일 피로하다. 아킬레스건에 결절이 있고 양쪽 손목이 붉고 부어 있으며 압통이 있다. 혈색소 11.0 g/dL, ESR 55 mm/h, 항CCP 항체 45(정상 <20)이다. 이 환자 상태의 치료에 선택되는 약물과 관련된 부작용은?

## 선택지

A. 망막병증
B. 동맥성 고혈압
C. 비감염성 폐장염(pneumonitis)
D. 잠복결핵 재활성화

## 해설


대칭 손·손목 활막염과 anti-CCP 상승은 RA를 지지한다. Methotrexate는 대표적인 초기 DMARD이며 드물지만 급성·아급성 비감염성 pneumonitis를 일으킬 수 있어 C가 맞다. 호흡기 증상이 생기면 약물폐장염, 감염 및 RA 관련 폐질환을 감별해야 한다. Retinopathy는 hydroxychloroquine, 고혈압은 leflunomide 등, 잠복결핵 재활성화는 TNF 억제제와 더 대표적으로 연관된다. 기존 신증후군/방광경 설명은 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000300 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RA 약제 부작용 문항에 신증후군·방광경 해설이 연결된 오연결 교체; C Pneumonitis를 폐렴이 아닌 비감염성 폐장염으로 복구.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/008085s072lbl.pdf
- https://doi.org/10.1016/j.ard.2026.01.023

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000300
