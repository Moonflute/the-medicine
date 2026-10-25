---
type: qbank
schema_version: 1
id: medqa-us-train-001463
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:51cbdd93ae2f395d8ddc58dbde932401e578795c0256aa747419dc3b1c95b596
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "alcohol-associated liver disease"
  - "alcoholic cardiomyopathy"
  - "cirrhosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_slYzsvZTsmKzshLEg6rCE7KeI7ZmYIChBbGNvaG9saWMgTGl2ZXIgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 호흡곤란으로 응급실에 내원했다. 6개월 전에는 멈추지 않고 수 km를 걸을 수 있었으나 어제는 침대에서 화장실까지 걷는 것만으로 숨이 찼다. 최근 새로 생긴 복부팽만과 다리 부종도 점점 악화되고 있다. 고혈압과 고지혈증 병력이 있다. 신체검사에서 중등도 복부팽만, 무릎까지의 함요부종 및 양쪽 폐기저부 수포음이 있다. 검사 결과 헤모글로빈 13.4 g/dL, MCV 102 µm3, 백혈구 11,200/mm3(감별 정상), 혈소판 256,000/mm3, Na+ 137 mEq/L, Cl− 100 mEq/L, K+ 4.2 mEq/L, HCO3− 25 mEq/L, BUN 18 mg/dL, 포도당 126 mg/dL, 크레아티닌 0.9 mg/dL, ALP 88 U/L, AST 212 U/L, ALT 104 U/L이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 금주
B. 항바이러스 치료
C. 호르몬 대체
D. 비타민 보충

## 해설

AST가 ALT보다 약 2배 높고 대적혈구증이 있으며 심장·간의 알코올 관련 손상을 의심하게 하는 체액 저류 소견이 있어, 보기 중 원인 교정에 해당하는 A, 금주가 출제 의도에 가장 합당하다.

그러나 이 검사 패턴만으로 음주력을 확정하거나 알코올성 간질환을 단정할 수는 없으므로 실제 음주력과 다른 원인을 확인해야 한다. 심한 운동능력 저하·폐수포음·부종은 심부전 등 급성 울혈 평가와 치료가 필요한 소견이며 금주 상담만으로 응급 처치를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. AST/ALT 패턴만으로 알코올성 간질환을 확진하고 금주만으로 급성 울혈 치료를 끝내는 듯한 설명을 보완.
- https://www.aasld.org/practice-guidelines/alcohol-associated-liver-disease

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001463
