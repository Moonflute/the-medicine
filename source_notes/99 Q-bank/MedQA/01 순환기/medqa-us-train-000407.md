---
type: qbank
schema_version: 1
id: medqa-us-train-000407
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6fce2b8b353c50c07339ebbbdfe7af3e1da42f70f555f40b7b6c8d2f4d4f9c2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "pulmonary hypertension"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 12개월간 지속된 점진적인 피로감과 운동 시 호흡곤란을 주소로 내원하였다. 5년 전 동유럽에서 이주하였다. 20년간 매일 담배 한 갑을 피웠다. 과거에 메탐페타민과 코카인을 사용한 적이 있으나 5년 전에 끊었다. 활력징후는 정상 범위 내에 있다. 신체 검진상 흉골각 위 9cm에서 경정맥 박동이 관찰된다. 폐 청진음은 깨끗하다. S1은 정상이며 S2는 크게 들리고 분열되어 있다. 흉골 좌측에서 손가락으로 박동을 느낄 수 있다. 복부는 부드럽고 압통은 없다. 손가락 끝이 비대해져 있고 손톱이 굽어 있다. 양측 발목 주위에 함요부종이 있다. 흉부 X-선 검사에서 현저하게 확장된 중심 폐동맥과 두드러진 우심장 경계가 보인다. 다음 중 진단을 확진하는 데 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. CT 혈관조영술
B. 도플러 심초음파
C. 폐 고해상도 CT
D. 우심도자술

## 해설

정답은 D이다. 우심부전 징후, 큰 P2 및 중심 폐동맥 확장은 폐고혈압을 시사한다. 심초음파는 비침습 평가에 중요하지만 확진과 분류에는 우심도자술로 폐동맥압·쐐기압·심박출량 및 폐혈관저항을 평가한다. 우심도자가 우심실 비대 자체를 직접 영상 확인하는 검사라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: RHC의 역할을 혈역학적 확진으로 명료화; RV비대를 직접 확인하는 검사라는 설명 교정.
- https://academic.oup.com/eurheartj/article/43/38/3618/6673929

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000407
