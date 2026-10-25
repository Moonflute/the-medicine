---
type: qbank
schema_version: 1
id: medqa-us-test-000938
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b1304840d271f9b42a0a21d3d8c3919d4169d495e3e2131dd347ce566b885827
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 급성 지방간"
  - "HELLP 증후군"
  - "재발 위험"
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDquInshLEg7KeA67Cp6rCEIChBY3V0ZSBGYXR0eSBMaXZlciBvZiBQcmVnbmFuY3kpLm1k
  - MTIg7IKw6rO8L0hFTExQIOymne2bhOq1sCAoSEVMTFAgU3luZHJvbWUpLm1k
question_type: prognosis
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 아시아 여성이 임신 30주에 오심, 구토, 우상복부 통증으로 입원했다. 임신 2회, 출산 0회이며 지난 임신에서도 같은 증상이 있었고 임신 31주에 사산했다. 언니는 두 번의 임신 모두 전자간증을 앓았다. 현재 반응은 하지만 기면 상태였다. 혈압 150/90 mmHg, 맥박 85회/분, 호흡 15회/분, 체온 36.4°C(97.5°F)였고 황달, 우상복부 압통, 하지 함요부종 2+가 있었다. 혈색소 10.1 g/dL, 혈소판 190,000/mm³, 총 빌리루빈 5.3 mg/dL, 직접 빌리루빈 4.2 mg/dL, ALT 101 U/L, AST 99 U/L, 크레아티닌 0.9 mg/dL였다. 이 환자 상태의 위험인자는?

## 선택지

A. 환자의 나이
B. 미산부
C. 이전 임신에서 같은 상태를 겪은 병력
D. 형제의 전자간증 병력

## 해설

임신 후기의 오심·구토, 황달·기면, 비교적 경한 간효소 상승은 임신성 급성 지방간(AFLP)을 의심하게 한다. 원문 혈소판은 190,000/mm³로 HELLP의 저혈소판증과 다르다. 이전 임신에서 같은 질환이 의심된 병력은 재발 고위험 관리의 근거이므로 C가 출제 의도이다. 다만 증상만으로 이전 AFLP를 확진할 수 없고, 전자간증 가족력도 임상적으로 무의미한 것은 아니다. 혈당·응고검사 등으로 감별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전자간증으로 잘못 단정하고 가족력을 무의미하다고 한 해설 수정; 원문 혈소판 수 복원.
- https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/ijgo.70161

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000938
