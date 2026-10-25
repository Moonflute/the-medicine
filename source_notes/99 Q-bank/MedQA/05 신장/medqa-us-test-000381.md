---
type: qbank
schema_version: 1
id: medqa-us-test-000381
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4567cbba049c6c2347893012c4fdf83d385e1e287ff00dd7085a72ef62fd4e69
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "티아지드 이뇨제"
  - "저칼륨혈증성 대사성 알칼리증"
  - "급성 심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 비만 남성이 갑자기 발생한 호흡곤란과 기침으로 응급실에 왔다. 잠을 자던 중 증상이 생겼다고 한다. 제2형 당뇨병이 있으며 리시노프릴, 메트포르민, 인슐린, 어유를 복용 중이다. 양측 발부종과 경정맥 팽창이 있었고 심전도와 흉부 방사선사진을 촬영했다(그림 A와 B). BiPAP과 약물치료를 시작하자 증상이 빠르게 호전되었다. 검사에서 혈청 나트륨 137 mEq/L, 칼륨 3.2 mEq/L, 염소 100 mEq/L, 중탄산염 31 mEq/L, BUN 20 mg/dL, 포도당 120 mg/dL, 크레아티닌 1.2 mg/dL, 칼슘 10.9 mg/dL였다. 다음 중 현재 상태를 가장 잘 설명하는 것은?

## 선택지

A. 푸로세미드
B. 히드로클로로티아지드
C. 제2형 신세뇨관산증
D. 제4형 신세뇨관산증

## 해설

저칼륨혈증과 대사성 알칼리증은 이뇨제 관련 소견일 수 있다. 여기에 칼슘 10.9 mg/dL가 높다는 점은 요중 칼슘 배설을 감소시키는 히드로클로로티아지드(B)를 지지한다. 루프 이뇨제는 반대로 요중 칼슘 배설을 증가시키며, 제2형/제4형 RTA는 대사성 산증을 보인다.

현재 약 목록에는 티아지드가 명시되지 않아 실제 투약 확인이 필요하다. 원문 ECG/CXR 이미지는 없지만 이 선지들의 전해질 패턴은 제시된 수치로 비교할 수 있다. 이 선택이 티아지드를 급성 폐부종의 표준 우선약제로 권고한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 고칼슘혈증을 포함한 티아지드 표적 전해질 패턴으로 설명하고 누락 영상 없이도 숫자로 판별 가능한 범위 한정.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8bc8d5e2-a974-64ed-e053-2a95a90a8340&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000381
