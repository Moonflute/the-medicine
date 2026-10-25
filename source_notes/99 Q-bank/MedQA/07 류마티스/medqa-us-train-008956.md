---
type: qbank
schema_version: 1
id: medqa-us-train-008956
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a0ac049a8847f9a7e180b996fd716c882591772030ad786ec0c15ed82e51f8b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "polymyalgia rheumatica"
  - "inflammatory myalgia"
  - "glucocorticoid therapy"
  - "Polymyalgia rheumatica"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 남성이 통증으로 내원했다. 아침에 뻣뻣하고 근육 전반의 불편감과 통증이 있다. 당뇨병 병력이 있지만 현재 약물은 복용하지 않는다. 체온 99.2°F(37.3°C), 혈압 147/98mmHg, 맥박 80회/분, 호흡수 12회/분, 산소포화도 99%이다. 신체검사에서 근육 전반에 경미한 압통이 있고 반사는 2+, 상·하지 근력은 5/5이다. 적혈구 침강속도가 상승해 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 알돌라아제 수치 측정
B. 글루코코르티코이드
C. 측두동맥 생검
D. 티록신

## 해설


50세 이후 아침강직·근육통, 보존된 근력과 ESR 상승에서 PMR를 의심하여 보기 중 glucocorticoid B가 부합한다. 다만 실제 PMR 진단에는 어깨·골반대 분포와 기간 등 추가 확인 및 감염·암·내분비·약물성 유사질환 배제가 필요하다. 저용량 시작을 개별화하며 당뇨·고혈압이 있어 혈당과 혈압, 골 위험을 함께 관리한다. ESR 상승만으로 무조건 steroid를 투여하는 일반 규칙은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008956 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모호한 광범위 근육통만으로 PMR 확진하지 않고 정상근력·아침강직·ESR의 출제의도와 당뇨 steroid위험을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13661133/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008956
