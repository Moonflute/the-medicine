---
type: qbank
schema_version: 1
id: medqa-us-train-007446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3ccba473de52f2f6a57b90b4ffe6e22709259e5e8d15d0de62c1f1ba91da4f7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "침습성 아스페르길루스증"
  - "호중구감소증"
  - "갈락토만난 항원"
  - "보리코나졸"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yVhOyKpO2OmOultOq4uOujqOyKpOymnSAoQXNwZXJnaWxsb3NpcykubWQ
  - MDgg6rCQ7Je8L-2YuOykkeq1rOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
question_type: management
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVm9yaWNvbmF6b2xlLm1k
  - ZHJ1ZzoxMCDsooXslpEvT3hhbGlwbGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

전이성 대장암이 있는 69세 남자가 5일 동안 지속된 호흡곤란, 발열, 오한, 피가 줄무늬처럼 섞인 생산성 기침으로 응급실에 내원했다. 폐기종 병력이 있다. 복통과 두통은 없다. 6주마다 5-플루오로우라실, 류코보린, 옥살리플라틴으로 화학요법을 받고 있으며 마지막 주기는 3주 전이었다. 체온은 38.3°C(101°F), 맥박 112회/분, 실내 공기 산소포화도 83%이다. 오른쪽 폐에서 산발적인 흡기성 수포음이 들리고 점막은 건조하다. 검사에서 헤모글로빈 9.3 g/dL, 백혈구 수 700/mm³, 호중구 68%, 림프구 25%, 호산구 4%, 단핵구 3%, 혈소판 수 104,000/mm³, BUN 41 mg/dL, 크레아티닌 2.1 mg/dL이며 갈락토만난 항원이 양성이다. 다음 중 가장 적절한 초기 약물치료는 무엇인가?

## 선택지

A. 세프트리악손과 아지트로마이신
B. 피페라실린-타조박탐
C. 세프타지딤과 레보플록사신
D. 보리코나졸

## 해설


ANC약476/µL의 항암 환자에서 객혈·galactomannan 양성은 침습성 aspergillosis를 의심하게 하며 D voriconazole은 권고 초기 항진균제 중 하나인 triazole이다. 베타-디아민오레이트라는 계열은 잘못이다. Galactomannan만으로 확진하지 않고 CT·적절한 검체를 평가한다. SpO₂83%의 호흡부전과 발열성 호중구감소증은 긴급 지지/경험적 항세균 치료도 필요하여 D 단독만으로 전체 초기 진료가 충분하다는 뜻은 아니다. 신기능·제형·상호작용/TDM을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007446 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Voriconazole을 베타-디아민오레이트라고 부른 오류 교정; IPA 표적 D 유지하되 FN/저산소의 전체 처치와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/aspergillosis/
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007446
