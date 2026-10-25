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

48세 여성이 2개월 동안 점점 악화되는 운동 시 호흡곤란과 피로 때문에 내원했다. 청소년기에 호지킨 림프종을 앓았고 화학요법과 방사선 치료로 성공적으로 치료되었다. 아버지는 아밀로이드증 합병증으로 사망했다. 흡연과 음주는 하지 않는다. 체온 36.7°C, 맥박 124회/분, 호흡수 20회/분, 혈압 98/60 mm Hg이다. 심장 진찰에서 심잡음은 없다. 양측 폐기저부에서 거친 수포음이 들린다. 심전도에서 P파가 없고 RR 간격이 불규칙한 심방세동이 보인다. 흉부 X선에서 심장 음영의 구상성 확대, 두드러진 폐문, 양측의 솜털 같은 침윤이 관찰된다. 경흉부 심초음파에서 좌심실 확장과 박출률 40%가 보인다. 다음 중 이 환자 상태의 가장 가능성 높은 원인은?

## 선택지

A. 아밀로이드 침착
B. 급성 심리적 스트레스
C. 만성 빈맥
D. 관상동맥 폐색

## 해설

심방세동과 빈맥, 좌심실 확장 및 박출률 저하는 보기 중 C, 만성 빈맥에 의한 부정맥 유발 심근병증과 합당하다. 아밀로이드 침착은 보통 심실벽 비후와 제한성 양상을 보이며, 급성 스트레스나 관상동맥 폐색을 직접 뒷받침하는 단서는 제시되지 않았다.

다만 이번 진찰의 심박수 124회/분만으로 빈맥의 만성성이나 인과관계가 증명되지는 않는다. 실제 진료에서는 과거 항암제·방사선 치료 등 다른 심근병증 원인을 평가하고, 부정맥 조절 후 좌심실 기능이 회복되는지 확인하여 진단을 뒷받침한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. AF/좌심실 확장에서 빈맥유발 심근병증을 선택할 수 있으나 단일 빈맥 측정만으로 원인을 확진할 수 없고 과거 항암/방사선도 고려함을 보완.
- https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/06/03/17/33/arrhythmia-induced-cardiomyopathy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007673
