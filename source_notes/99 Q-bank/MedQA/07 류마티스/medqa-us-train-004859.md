---
type: qbank
schema_version: 1
id: medqa-us-train-004859
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:150ebbd4f03773ccb85d95374599882f4fc0ee7609facc782183d0d5a5718ec4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신경화증"
  - "경피증 신장위기"
  - "미세혈관병성 용혈성 빈혈"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
  - MDkg7ZiI7JWhL-uvuOyEuO2YiOq0gOuzkeyEsSDsmqntmIgg67mI7ZiIIChNaWNyb2FuZ2lvcGF0aGljIEhlbW9seXRpYyBBbmVtaWEsIE1BSEEpLm1k
question_type: association
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 남자가 두통, 운동 시 호흡곤란, 두 차례의 구토와 무뇨를 보인다. 2년 전부터 손가락 통증과 뻣뻣함이 점차 진행되었고 혈압170/100 mmHg, 부종·경정맥 팽창이 있고 호흡수24회/분, 실내 공기 산소포화도91%이다. 피부가 거칠고 두꺼우며 전반적인 과다색소침착과 모낭 주위 저색소침착이 보인다. 손가락 근위지절간관절 구축, 수포음, 흉수, 제3심음이 관찰되고 혈색소는 8.1 g/dL, 크레아티닌은 5.3 mg/dL이다. 다음 중 예상되는 소견은?

## 선택지

A. 항센트로미어 항체 증가
B. 합토글로빈 감소
C. 총철결합능 증가
D. 항CCP 항체 증가

## 해설


진행성 피부경화와 새 고혈압·무뇨·신기능 저하, 빈혈은 경피증 신위기를 의심하게 한다. 동반 혈전미세혈관병증의 적혈구 분절·혈관내 용혈이 있으면 유리 hemoglobin과 결합한 haptoglobin이 제거되어 혈중 수치가 낮아진다(B). Hemoglobin 자체가 파괴되어 haptoglobin이 감소한다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004859 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Haptoglobin 감소를 hemoglobin 자체 파괴로 설명한 기전을 유리Hb 결합/제거로 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004859
