---
type: qbank
schema_version: 1
id: medqa-us-train-006823
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13eacbe5f9bc4a95848eb99c9fe364bf5a3ba1ceba1deefe0ab03e3198d009ec
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 감염"
  - "잠복결핵 선별"
  - "음성 투베르쿨린 피부검사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

44세 남성이 취업 전 평가를 위해 내원했다. 일주일 동안 경미한 기침, 인후통 및 간헐적인 두통이 있다. 발열이나 체중 감소는 없다. 9년 전 HIV를 진단받았고 위식도역류질환이 있다. 정맥주사 약물 남용력이 있으나 8년 전 중단했다. 27년 동안 하루 한 갑 흡연했고 음주는 하지 않는다. 테노포비르, 엠트리시타빈, 에파비렌즈 및 에스오메프라졸을 복용한다. 체온은 37.3°C(99.1°F), 맥박은 분당 81회, 호흡수는 분당 17회, 혈압은 145/75 mm Hg이다. 폐 진찰은 정상이고 왼쪽 팔꿈치 오목에 오래된 흉터가 드문드문 있다. 백혈구 6,200/mm³, 혈색소 13.8 g/dL, CD4+ 수 700/mm³(N≥500)이다. 투베르쿨린 피부검사 50시간 후 경결은 3mm이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 흉부 X선
B. 안심시키기
C. 인터페론-감마 방출검사
D. 6~8주 후 투베르쿨린 피부검사 반복

## 해설


HIV에서 TST 양성 기준은5mm 이상이므로3mm는 음성이다. 알려진 최근 노출 없이 경한 단기 상기도 증상의 취업 선별 맥락에서는 B의 설명·경과관찰이 부합한다. 다만 CD4가 높거나 TST 음성이어도 활동성 TB를 배제할 수 없으며 기침 지속/악화·역학 위험·전신증상이 있으면 흉부 영상/미생물 검사를 시행한다. 최근 밀접 노출이 있으면 별도의 창기간 재검·예방 기준을 적용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006823 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV TST3mm 음성의 선별 맥락 B 유지; 면역 보존/음성 TST로 활동 결핵을 배제하는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html
- https://www.cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006823
