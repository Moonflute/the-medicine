---
type: qbank
schema_version: 1
id: medqa-us-train-001001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:969bb17afd6371e21892b3568e9cc61f471422f3fd76c42074663f6c2af1b4e4
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "Focal segmental glomerulosclerosis"
  - "Membranous nephropathy"
  - "Rapidly progressive glomerulonephritis"
  - "Thin basement membrane disease"
  - "chronic bronchitis"
  - "nephrotic syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-q1reyGjCDthqDrpqzqtbPsnYzspp0gKEZvY2FsIFNlZ21lbnRhbCBHbG9tZXJ1bG9zY2xlcm9zaXMpLm1k
  - MDUg7Iug7J6lL-unieyEsSDsgqzqtazssrTsi6Dsl7wgKE1lbWJyYW5vdXMgTmVwaHJvcGF0aHkpLm1k
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-yWleydgCDthqDrpqzrsJTri6Xrp4nrs5EgKFRoaW4gQmFzZW1lbnQgTWVtYnJhbmUgRGlzZWFzZSkubWQ
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 백인 남성이 10일간 지속된 피로감과 하지 부종을 주소로 내원하였다. 지난 6개월 동안 3.6kg(8lb)의 체중 감소가 있었다. 만성 기관지염이 있으며 필요 시 알부테롤(albuterol) 흡입기를 사용한다. 44년 동안 매일 한 갑의 담배를 피웠으며 매일 술을 한 잔 마신다. 체온은 37°C, 맥박은 88회/분, 혈압은 120/75mmHg이다. 환자는 야위어 보인다. 진찰상 양측 정강이 앞 부종(pretibial edema) 2+가 관찰된다. 심폐 진찰상 이상 소견은 없다. 검사실 검사 결과는 다음과 같다: 혈색소 11.2g/dL, 백혈구 수 8500/mm3, 혈소판 수 130,000/mm3. 혈청: 요소질소 23mg/dL, 포도당 77mg/dL, 크레아티닌 1.6mg/dL, 알부민 1.8g/dL, 총 콜레스테롤 475mg/dL. 소변: 혈액 음성, 포도당 음성, 단백질 4+, 백혈구 0-1/hpf, 지방 원주(fatty casts) 다수. 흉부 X-선 검사에서 우상엽 음영이 관찰된다. 흉부 CT 검사에서 2.5 x 3.5 x 2cm 크기의 우상엽 종괴가 관찰된다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 국소 분절 사구체 경화증(Focal segmental glomerulosclerosis)
B. 막성 신병증(Membranous nephropathy)
C. 급속 진행성 사구체 신염(Rapidly progressive glomerulonephritis)
D. 얇은 기저막 병증(Thin basement membrane disease)

## 해설

정답은 B이다. 심한 단백뇨·지방원주·저알부민혈증·고지혈증·부종은 신증후군이며 노인의 폐종괴와 체중 감소는 악성종양을 우려하게 한다. 고형암과 연관될 수 있는 막성신병증이 제시된 선택지 중 가장 합당하다. 만성 기관지염 자체가 막성신병증의 전형적 원인이라는 뜻은 아니며 원인 평가와 필요 시 신생검으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성 기관지염 자체를 막성신병증의 원인처럼 설명한 부분을 고형암 연관 신증후군으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001001
