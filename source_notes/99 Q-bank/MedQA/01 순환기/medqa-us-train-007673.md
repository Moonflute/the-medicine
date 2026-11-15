---
type: qbank
schema_version: 1
id: medqa-us-train-007673
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1dd1f5f26701fdd6f0128d8014c28a0ee06346b8461e32eef40412c2f0d940f5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "tachycardia-induced cardiomyopathy"
  - "atrial fibrillation"
  - "dilated cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 2개월간 심해진 운동 시 호흡곤란으로 내원했다. 3개월 전 심초음파의 좌심실 박출률은 60%였다. 최근 여러 차례 심전도와 활동심전도에서 심박수 120–140회/분인 심방세동이 지속되었다. 현재 심초음파에서 좌심실은 확장됐고 박출률은 40%로 떨어졌다. 가장 가능성 높은 원인은?

## 선택지

A. 아밀로이드 침착
B. 급성 심리적 스트레스
C. 만성 빈맥
D. 관상동맥 폐색

## 해설

지속적인 빠른 심실 반응이 시작된 뒤 좌심실이 확장되고 수축기능이 떨어져 빈맥 유발 심근병증을 의심한다. 다른 원인을 함께 평가하며, 심박수·리듬 조절 뒤 좌심실 기능이 회복되는지가 진단을 뒷받침한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. AF/좌심실 확장에서 빈맥유발 심근병증을 선택할 수 있으나 단일 빈맥 측정만으로 원인을 확진할 수 없고 과거 항암/방사선도 고려함을 보완.
- https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/06/03/17/33/arrhythmia-induced-cardiomyopathy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007673
