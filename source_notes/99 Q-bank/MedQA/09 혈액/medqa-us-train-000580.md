---
type: qbank
schema_version: 1
id: medqa-us-train-000580
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a20f6a7714f3df66a3ff3477e2aa2ab14b5a1e7c8613b6afa7896b44a66601f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "latent tuberculosis"
  - "anemia"
  - "scleral icterus"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

30세 남성이 2시간 전 시작된 갑작스러운 등 통증으로 응급실에 내원했다. 어제부터 눈이 노랗게 보이고 소변 색이 평소보다 진해진 것을 알아차렸다. 2개월 전, 10년 전 미국으로 이민 오기 전 살았던 그리스 여행에서 돌아왔다. 3일 전 잠복결핵 진단을 받고 이소니아지드(isoniazid)를 복용하기 시작했다. 지난 5년간 배관공으로 일했다. 체온은 37.4°C, 맥박은 80회/분, 혈압은 110/70 mm Hg이다. 진찰상 등 압통과 공막 황달이 관찰된다. 검사실 검사 결과는 다음과 같다: 헤마토크릿 29%, 백혈구 수 8000/mm3, 혈소판 수 280,000/mm3. 혈청 빌리루빈 총 4 mg/dL, 직접 0.7 mg/dL, 합토글로빈 15 mg/dL (정상 41–165 mg/dL), 젖산탈수소효소(LDH) 180 U/L. 소변 검사상 혈액 3+, 단백질 1+, 적혈구 2–3/hpf, 백혈구 2–3/hpf. 이 환자의 빈혈에 대한 가장 가능성 있는 기저 원인은 무엇인가?

## 선택지

A. 초승달 모양의 적혈구
B. 환원형 글루타치온(reduced glutathione)의 결핍
C. 아미노레불린산 탈수효소(aminolevulinate dehydratase)의 억제
D. 적혈구 막의 결함이 있는 안키린(ankyrin)

## 해설


급성 등 통증·황달, 간접 bilirubin 증가·낮은 haptoglobin과 적혈구 수에 비해 강한 요잠혈은 혈관내 용혈을 시사한다. 지중해 지역 출신이라는 맥락에서 선택지 B는 G6PD 결핍에 따른 NADPH 생성 감소와 환원형 glutathione 재생 장애를 뜻한다. 이는 산화손상에 대한 적혈구 방어를 약화시킨다. Isoniazid 관련 B6 결핍은 별도로 철적모구빈혈/신경병증을 일으킬 수 있지만 G6PD를 억제하는 동일 경로가 아니다. Isoniazid 투여 직후라는 시간관계만으로 G6PD 용혈의 원인 약물임을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000580 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Isoniazid/B6/헤모글로빈 합성과 G6PD를 뒤섞은 잘못된 기전을 G6PD-NADPH-glutathione 경로로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b46d1d-2300-457d-a7bd-a88a3f8d2235

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000580
