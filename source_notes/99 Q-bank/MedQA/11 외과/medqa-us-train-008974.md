---
type: qbank
schema_version: 1
id: medqa-us-train-008974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f20ecf2f9e3274c2061ce8a15e9061c4ccbf4e77d392e1ad0856dd0d156989d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "femoral artery injury"
  - "penetrating extremity trauma"
  - "duplex ultrasonography"
related_disease_slugs:
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
question_type: investigation
difficulty: complex
answer: D
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

38세 남성이 오른쪽 허벅지에 총상을 입은 지 35분 후 응급실에 내원했다. 제1형 당뇨병이 있다. 맥박 112회/분, 호흡수 20회/분, 혈압 115/69mmHg, 실내 공기 산소포화도 98%이다. 오른쪽 허벅지 앞안쪽, 서혜인대에서 2cm 아래에 입구가 있고 잡음이나 진동은 없다. 출구는 없고 오른쪽 발 맥박이 왼쪽보다 감소되어 있다. 복부는 부드럽고 압통이 없다. 헤마토크릿 46%, BUN 24mg/dL, 포도당 160mg/dL, 크레아티닌 3.1mg/dL이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 상처 세척과 파상풍 톡소이드
B. 근막절개술
C. 디지털 감산 혈관조영술
D. 이중 초음파검사

## 해설


총상 부위가 대퇴혈관에 가깝고 오른발 맥박이 감소하여 동맥 손상 평가가 필요하다. 현재 뚜렷한 활동성 출혈·확장성 혈종·무맥/명확한 사지허혈이 제시되지 않았고 Cr3.1 mg/dL이므로, 선택지 중 조영제가 필요 없는 duplex 초음파(D)가 합리적이다. 정상 결과만으로 모든 손상을 배제하는 것은 아니며 임상·ABI/API·검사 가능성과 긴급도에 따라 CTA/혈관조영 또는 수술을 선택한다. 신기능 저하가 생명·사지구제에 필요한 조영검사의 절대금기는 아니고 명확한 hard sign이 있으면 검사로 처치를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008974 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈관 손상 의심의 duplex D를 유지하고 Cr3.1이라는 선택 근거와 초음파의 한계를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2025/01/2025-Vascular-Trauma-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008974
