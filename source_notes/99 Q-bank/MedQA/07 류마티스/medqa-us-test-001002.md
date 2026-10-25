---
type: qbank
schema_version: 1
id: medqa-us-test-001002
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8bbb772d6ce89c74593704cd64dd72894aabb3e3ac1356b07e7b387f568ed779
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "염증성 다발관절염"
  - "자가항체"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

42세 남성이 점점 악화되는 허리 통증으로 가족의학과 진료를 받으러 왔다. 스웨덴에서 최근 이주했고 3년간 검진을 받지 않았다. 3년 전 시작된 통증이 아침에 극심해졌고 일반의약품으로도 호전되지 않았다. 매일 30분에서 1시간 지속되는 강직이 있고 양쪽 무릎도 아프며 앉았다 일어설 때 특히 심하다. 움직이면 호전되어 활동하려고 하지만 손은 관절통과 강직 때문에 오래 사용할 수 없다. 손목과 근위지간관절이 따뜻하고 부어 있었다. 다음 중 다음 단계로 가장 적절한 것은?

## 선택지

A. 혈청 칼슘과 PTH 검사
B. 칼슘과 비타민 D 처방
C. 혈청 ESR과 자가항체 검사
D. 혈청 페리틴 검사

## 해설


아침에 심한 관절통·강직, 양측성 소관절·무릎·손 관절의 부종·통증은 류마티스 관절염을 시사한다. 진단을 확정하려면 염증성 마커와 특이 자가항체(류마티스인자·항CCP) 검사가 필요하다. 따라서 혈청 ESR과 자가항체 검사가 다음 단계이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001002` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 만성 아침강직·손목/PIP 활막염으로 염증성 관절염 평가 ESR·자가항체 C가 선지 중 적절. 원문의 축성 증상도 보존, 검사 하나로 확진되었다는 판단은 아님.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001002
