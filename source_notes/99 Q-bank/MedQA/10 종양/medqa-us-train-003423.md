---
type: qbank
schema_version: 1
id: medqa-us-train-003423
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10ede720078123c44835a354ef7c674a177a1f8b038d5bfaa3c7ba77a073ceb7
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "invasive lobular carcinoma"
  - "invasive ductal carcinoma"
  - "bilateral breast cancer"
  - "E-cadherin loss"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
question_type: association
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

60세 여성이 한 달 전부터 지속된 왼쪽 유방의 변화로 내원했다. 왼쪽 유방 일부가 두꺼워진 느낌이 들었고 호전되지 않았다. 진찰에서 왼쪽 유방 상외측에 경계가 불분명하고 고무처럼 부드러우며 움직이는 종괴가 만져졌다. 액와 림프절병증은 없었다. 최근 체중이 3.6 kg 감소했고 자매가 55세에 전이성 유방암으로 사망했다. 친구는 침윤성 유관암종으로 진단받았다. 환자는 levothyroxine으로 조절되는 Hashimoto 갑상선염이 있으며30갑년 흡연력이 있지만15년 넘게 금연했다. 초경은11세, 폐경은53세였고 출산력이나 성생활력은 없다. 마지막 선별 유방촬영은10개월 전 정상이었다. 이 환자에게 가장 가능성 높은 유방암은 친구의 진단과 비교할 때 어떤 특징을 보이는가?

## 선택지

A. 예후가 더 나쁘다
B. 양측성으로 나타날 수 있다
C. 유병률이 더 높다
D. 유방촬영술에서 뚜렷한 가시모양 종괴로 보일 가능성이 더 높다

## 해설


경계가 불명확한 유방 비후와 미미하게 촉지되는 종괴는 침윤성 소엽암을 고려하게 한다. 이 종양은 침윤성 유관암에 비해 다중심성·양측성(B) 경향이 있고 E-cadherin 기능소실과 관련된다. 두 암 모두 양측으로 발생할 수 있으므로 소엽암만 양측성이 가능하다는 뜻은 아니다. 임상 모양이나10개월 전 정상 유방촬영만으로 조직형을 확정하지 않으며 조직검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003423 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Lobular carcinoma의 양측성 연관은 유지하고 진단 추론에 중요한 정상 유방촬영·원문 위험요인을 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003423
