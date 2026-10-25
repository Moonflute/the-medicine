---
type: qbank
schema_version: 1
id: medqa-us-train-003210
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:277c12054116cbcfa6d62ab67aeff6cea5dcbb46260c13b5b26fc330531927c8
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "knee osteoarthritis"
  - "obesity-related osteoarthritis"
  - "weight loss intervention"
  - "crepitus"
question_type: management
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 여성이 3주 동안 오른쪽 무릎 통증으로 내원했다. 하루가 끝날 때와 걸을 때 악화되어 아파트 계단을 오르기 어렵다. 고혈압과 건선이 있으며 언니는 류마티스관절염이 있다. 매일 맥주 2~3잔을 마시고 하이드로클로로티아지드, 국소 베타메타손, 종합비타민을 복용한다. BMI는 36 kg/m²이고 불안해 보인다. 오른쪽 무릎은 압통이나 홍반이 없고 운동 범위가 제한되며 굴곡·신전 시 염발음이 들린다. 혈액검사는 정상이며 X선 영상이 제시되어 있다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 관절 내 글루코코르티코이드 주사
B. 체중감량 프로그램
C. 관절 전치환술
D. 콜히친 치료

## 해설

정답은 B, 체중감량 프로그램이다. 활동 후 악화되는 무릎 통증, 비만, 염발음 및 뚜렷한 염증 소견의 부재는 무릎 골관절염에 부합한다. 과체중·비만 환자의 체중감량과 운동은 초기 관리의 핵심이다. 필요하면 통증 약물이나 주사치료를 병행할 수 있으므로 모든 약물보다 체중감량이 항상 우월하거나 다른 치료를 반드시 미뤄야 한다는 뜻은 아니다. 충분한 비수술적 치료 없이 관절 전치환술을 우선하지 않으며, 콜히친을 선택할 급성 결정관절염 단서도 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 비만성 무릎 OA에서 체중감량 권고는 맞으나 모든 약물·수술보다 가장 효과적이라는 과장 수정. 그림 없이 본문으로 초기 보존치료 답 B 판단 가능.
- X선 이미지 자체는 제공되지 않았으며 영상 소견을 추정하지 않았다. 본문의 기계적 증상·비만·염발음과 치료 선택지로 원래 초기 관리 답을 판단할 수 있어 이미지 언급만으로 보류하지 않았다.
- 공식/학회 근거: https://www.arthritis.org/getmedia/d57cf9f5-e096-43a2-832d-dbc174065a58/Kolasinski-2020-american-college-of-rheumatology-a.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003210
