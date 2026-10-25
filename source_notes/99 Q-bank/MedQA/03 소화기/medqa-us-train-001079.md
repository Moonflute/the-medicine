---
type: qbank
schema_version: 1
id: medqa-us-train-001079
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ce7b1de9b9e3072250ebe0b6327a3fd087354f4a279003e8e1b859150093abc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "sickle cell disease"
  - "cholelithiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: complex
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

겸상 적혈구 빈혈(sickle cell disease)이 있는 13세 아프리카계 미국인 소년이 지난 24시간 동안의 복통을 주소로 응급실에 내원하였다. 통증은 우상복부에 위치하며 날카로운 양상으로 통증 점수는 8/10점이고 우측 견갑골 끝으로 방사된다. 환자는 또한 지난 2일간 식욕 부진과 구역을 호소한다. 환자는 다리, 손, 허벅지, 허리, 복부의 통증 삽화로 여러 차례 입원한 적이 있다. 마지막 입원은 4개월 전 급성 흉통으로 인한 것이었으며, 항생제, 진통제, 정맥 수액 치료를 받았다. 환자는 하이드록시우레아(hydroxyurea)를 복용 중이며 가끔 적혈구 교환 수혈을 받는다. 부모님은 모두 건강하다. 체온은 38°C, 혈압은 133/88 mm Hg, 맥박은 102회/분, 호흡수는 20회/분, BMI는 18 kg/m2이다. 진찰 결과, 환자는 통증을 호소하며 복부 압통과 흡기 시 통증이 관찰된다. 우상복부를 부드럽게 촉진하면 환자가 통증으로 비명을 지른다. 검사실 검사: 전혈구 검사(CBC) - 헤모글로빈 8.5 g/dL, MCV 82 fl, 백혈구 13,500/mm3, 혈소판 145,000/mm3. 기본 대사 패널(BMP) - 혈청 Na+ 135 mEq/L, 혈청 K+ 3.9 mEq/L, 혈청 Cl- 101 mEq/L, 혈청 HCO3- 23 mEq/L. 간 기능 검사 - 혈청 빌리루빈 2.8 mg/dL, 직접 빌리루빈 0.8 mg/dL, AST 30 U/L, ALT 35 U/L, 혈청 합토글로빈 23 mg/dL (정상범위 41–165 mg/dL). 복부 초음파 검사에서 다음 영상이 확인되었다. 이 초음파 소견의 병태생리는 무엇인가?

## 선택지

A. 콜레스테롤 분비 증가
B. 담낭 배출 장애
C. 담즙산염 흡수 감소
D. 만성 용혈

## 해설

겸상적혈구병과 낮은 합토글로빈, 간접빌리루빈 우세 상승은 만성 용혈을 지지한다. 적혈구 분해로 빌리루빈이 많이 생성되면 흑색 색소담석 형성 위험이 높아지므로 보기 중 D, 만성 용혈이 합당하다. 단순 담낭배출장애가 이 사례에서 핵심 위험기전이라는 설명은 맞지 않는다. 원문에서 언급한 초음파 사진은 제공되지 않아 구체적인 벽 비후나 결석 모양을 확인한 것은 아니며, 판단은 임상·검사와 명시된 선지의 기전에 근거한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. B 담낭배출장애를 정답처럼 설명한 해설을 만성용혈→빌리루빈 과다→색소담석으로 교체. 미제공 초음파를 관찰했다고 주장하지 않음.
- https://www.cdc.gov/sickle-cell/complications/liver-problems.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001079
