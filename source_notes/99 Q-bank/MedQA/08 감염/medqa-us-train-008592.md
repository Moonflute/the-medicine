---
type: qbank
schema_version: 1
id: medqa-us-train-008592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:694964ad6c4ab2714701e325fcfa489b85571dcb29b5d1a2f3a4e5734fc0eb5d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cryptococcal meningitis"
  - "chronic meningitis"
  - "immunocompromised host"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
  - MDgg6rCQ7Je8L-2BrOumve2GoOy9lOy_oOyKpOymnSAoQ3J5cHRvY29jY29zaXMpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

66세 남성이 3일 동안 점점 심해지는 두통, 구토, 미열, 혼란으로 다른 병원에서 전원되었다. 동반자에 따르면 지난 2주 동안 기억력이 떨어지고 두통을 호소했다. 2년 전 폐이식이 필요했던 간질성 폐질환 병력이 있다. 입원 당시 혈압 160/100mmHg, 맥박 58회/분, 호흡수 15회/분, 체온 36°C(97°F)였다. 구강 칸디다증이 보이고 동공은 대칭적이며 빛에 반응한다. 국소 신경학적 징후나 유두부종은 없다. 요추천자를 시행했다. 다음 중 예상되는 뇌척수액 소견은 무엇인가?

## 선택지

A. 외관 황색, 개방압 정상, 적혈구 증가, 단백질 정상, 포도당 정상
B. 외관 혼탁, 개방압 상승, 호중구 증가, 단백질 상승, 포도당 감소
C. 외관 맑음, 개방압 정상, 림프구 증가, 단백질 정상, 포도당 정상
D. 외관 혼탁, 개방압 상승, 림프구 증가, 단백질 상승, 포도당 감소

## 해설


이식 후 면역억제 환자의 수 주에 걸친 두통과 혼란은 크립토코쿠스 등 아급성 진균성 수막염을 의심하게 한다. 선택지 중 개방압 상승, 림프구 우세, 단백질 상승과 포도당 감소를 묶은 D가 가장 부합한다. 실제 진균성 CSF는 맑을 수도 있고 면역억제 시 세포 반응이 약할 수도 있다. C의 림프구 증가 소견 역시 완전한 정상 CSF라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008592 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이식 후 아급성 수막염의 진균성 CSF 패턴 D 유지. 진균성 CSF가 반드시 혼탁하거나 C가 정상이라는 잘못된 단정은 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008592
