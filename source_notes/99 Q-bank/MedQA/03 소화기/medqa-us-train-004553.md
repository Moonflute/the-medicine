---
type: qbank
schema_version: 1
id: medqa-us-train-004553
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa62de48c8109e4d0b7dec5a9a2a4785d4a20cbdf3c22588a93ebc8d761d4056
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "보어하브 증후군"
  - "식도 파열"
  - "종격동염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 여러 차례 스스로 구토를 유발한 뒤 7시간 동안 지속된 경한 흉골 뒤 통증으로 응급실에 왔다. 9개월 전 신경성 폭식증 진단을 받았다. 유일한 복용약은 시탈로프람이다. 키는 170cm (5피트 7인치), 체중은 62kg (136.6lb), BMI는 21.5kg/m2이다. 창백해 보인다. 체온은 37°C (98.6°F), 맥박은 분당 75회, 호흡수는 분당 21회, 혈압은 110/75 mm Hg이다. 폐 청진은 깨끗하고 심장 진찰에서 잡음, 마찰음이나 분마음은 없다. 복부는 부드럽고 압통이 없으며 장기비대도 없다. 그 외 진찰에서 침샘 부종, 건조한 피부와 부서지기 쉬운 손발톱이 보인다. 심전도와 흉부 X선은 정상이다. 가스트로그라핀을 이용한 조영 식도조영술에서 하부 식도에서 종격동으로 조영제가 약간 새지만 흉막강과 복강으로의 조영제 유출은 없다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 정맥 옥트레오티드 치료
B. 정맥 라베타롤 치료
C. 정맥 암피실린과 설박탐 치료
D. 조영제를 사용한 CT 촬영

## 해설

초기발현·안정상태·국소 contained leak의 식도천공에서 IV ampicillin-sulbactam C는 적절한 광범위항균치료이다. 금식·영양·면밀감시와 전문외과/내시경평가를 병행하고 배액/봉합 필요성을 판단한다. 항생제만으로 모든식도천공이 치료된다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기 contained식도천공의 antibiotics C 유지. 항생제단독이면충분하다는 오독 방지.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004553
