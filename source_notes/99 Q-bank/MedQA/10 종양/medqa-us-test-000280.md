---
type: qbank
schema_version: 1
id: medqa-us-test-000280
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c44dbf0760e553bba8d1626b9912d8e8ae14e7b6db6c17690455f14f304d25c3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "폐암 전이"
  - "척수 압박"
  - "악성 척수 압박"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

76세 남성이 지난 4주 동안의 요통과 쇠약으로 아내와 함께 병원에 왔다. 통증은 날카롭고 왼쪽으로 방사되며 작열감이 있었다. 2개월 동안 때때로 피가 섞인 가래를 기침으로 뱉었다. 그 기간 동안 체중이 3.2 kg(7.0 lb) 감소했다. 이제 도움 없이는 걸을 수 없고 지난 2주 동안 변비와 배뇨 곤란이 있었다. 고혈압으로 에날라프릴을 복용 중이며 60년 동안 매일 담배 한 갑을 피웠다. 체온 37°C(98.6°F), 맥박 75회/분, 혈압 150/80 mmHg였다. 사람, 장소, 시간에 대한 지남력은 정상이었다. 신경학적 진찰에서 하지 근력은 3/5였고 심부건반사는 과도하게 항진되어 있었다. 양측 바빈스키 징후가 양성이었다. 감각검사에서 T4 피부절 이하의 핀으로 찌르는 감각이 감소했다. 심한 통증 때문에 바로 누울 수 없었다. 흉부 X선에서 양쪽 폐에 크기가 다양한 둥근 음영이 여러 개 보였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 방사선치료
B. 정맥 덱사메타손 치료
C. 정맥 아시클로버 치료
D. 정맥 세프트리악손 및 아지트로마이신 치료

## 해설


통증·진행성 하지 약화·감각수준·괄약근 증상은 악성 척수압박을 강하게 의심하게 한다. 신속한 덱사메타손(B)과 함께 응급 척추 MRI 및 전문의 평가로 수술·방사선치료를 계획한다. 스테로이드 단독이 최종 치료이거나 무제한 고용량을 쓰라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000280 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경징후 동반 악성 척수압박 의심에서 B 유지. 무제한 고용량 단독치료라는 해설을 신속 dex+MRI/최종치료로 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000280
