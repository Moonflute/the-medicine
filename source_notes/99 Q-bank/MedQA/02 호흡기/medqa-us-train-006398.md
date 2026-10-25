---
type: qbank
schema_version: 1
id: medqa-us-train-006398
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea0a5b8b4bd7fc6fd073d2fccb892138a0a8ba994f4de7ffbf0cf42fa7165918
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환 악화"
  - "호흡곤란"
  - "폐렴 감별"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 3시간 동안 악화되는 기침, 호흡곤란 및 숨참으로 응급진료센터에 내원했다. 장거리 트럭 운전사이며 최근 아칸소 여행을 마치고 서부 해안으로 돌아왔다. 과거력으로 통풍, 고혈압, 고콜레스테롤혈증, 제2형 당뇨병, 만성폐쇄성폐질환 및 경도 지적장애가 있다. 현재 하루 한 갑 흡연, 하루 맥주 6팩 음주를 하며 과거 주사약물 사용력이 있지만 현재 불법 약물은 부인한다. 체온은 36.7°C(98.0°F), 혈압은 126/74 mm Hg, 심박수는 분당 87회, 호흡수는 분당 23회이다. 양쪽 폐에서 경미한 거친 수포음이 들리지만 그 외 청진은 깨끗하다. 2/6등급 전수축기 심잡음이 있고 복부 진찰은 정상이다. 6일 전 알부테롤 흡입제가 떨어졌으며 재처방을 위해 주치의에게 추적 진료를 받으려 했다. 전혈구검사와 종합대사패널은 정상이고 D-이합체도 정상이다. 다음 중 평가의 다음 단계로 가장 적절한 것은?

## 선택지

A. 동맥혈가스검사
B. 폐기능검사
C. 흉부 방사선 촬영
D. 조영제를 사용한 흉부 CT

## 해설

급성호흡곤란·기침에서 CXR C로 폐렴·기흉·울혈 등 대안을 평가한다. 본문에서 정상인 것은 CBC/CMP와D-dimer이지 동맥혈가스가 아니다. PE배제에 D-dimer를 이용할지는 임상 사전확률도 고려하며 고위험 환자에서 정상값 하나로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 미시행 혈액가스가 정상이라고 만든 해설을 제거하고 급성호흡곤란 CXR C로 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006398
