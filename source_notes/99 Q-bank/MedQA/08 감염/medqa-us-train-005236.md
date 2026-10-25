---
type: qbank
schema_version: 1
id: medqa-us-train-005236
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a2d8555b57569c0feb201be0eee8b3480618aa3a4d9863d907d3ce79ac83a21
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "파종성 결핵"
  - "인터페론감마 결핍"
  - "소아 면역결핍"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yigeyMgCDqsrDtlbUgKE1pbGlhcnkgVHViZXJjdWxvc2lzKS5tZA
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

3세 남아가 일주일 동안 발열과 기침, 근육강직과 호흡곤란, 전신 발진으로 내원했다. 인도 여행 후 증상이 시작되었고 몸통과 어깨에 출혈성 괴사를 동반한 작은 홍반성 농포, 전신 림프절병증이 있다. 흉부 X선에서 양쪽 폐에 1~4 mm 결절과 우측 흉수, 간질 침윤이 보이며 혈액도말에서 항산균이 확인되었다. 추가 평가에서 예상되는 소견은?

## 선택지

A. IFN-γ 수치 감소
B. WAS 유전자 돌연변이
C. 정상 T세포 수를 동반한 B세포 결핍
D. PCR에서 T세포 수용체 절제환 감소

## 해설


소아 파종성 항산균 감염은 IL12–IFNγ 축의 선천 면역결함을 고려하게 한다. 선택지 A는 IL12/수용체 등의 결함에 따른 IFNγ 생산 저하를 묻는 맥락에 가장 부합한다. 하지만 모든 항산균 감수성 질환에서 혈청 IFNγ가 낮은 것은 아니며 IFNγ 수용체 반응 결함에서는 높을 수 있다. 항산균 검출만으로 결핵 종과 특정 유전결함을 확정하지 않고 면역 기능/유전검사로 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005236 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IFNγ 생산·반응 경로 결함과 실제 혈청 수치를 구분하여 A의 출제의도 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://rupress.org/jhi/article/1/1/e20250003/277390

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005236
