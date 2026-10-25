---
type: qbank
schema_version: 1
id: medqa-us-train-005910
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c44f3d18d52a74007c01c9c672e3c4b0651f4bc7a677e1810dc6715bd0c5382
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 응급"
  - "급성 관상동맥증후군"
  - "에스몰롤과 니트로글리세린"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXNtb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 아프리카계 미국인 남성이 중앙 흉부 압박감으로 응급실에 왔다. 전날 시작된 증상은 처음에는 간헐적이었으나 지속적으로 변했고 턱과 왼쪽 어깨로 방사된다. 호흡곤란도 있다. 1년 전 본태성 고혈압을 진단받았으나 약을 복용하지 않는다. 흡연, 음주 및 약물 사용은 부인하고 가족력은 특이하지 않다. 양팔 혈압은 230/130 mmHg, 체온은 36.9°C(98.4°F), 맥박은 분당 90회이다. 심전도에서 광범위한 T파 역전과 측벽 유도의 ST 저하가 보이고 트로포닌이 상승했다. 다음 중 이 환자의 일차 항고혈압제는 무엇인가?

## 선택지

A. 에스몰롤과 정맥 내 니트로글리세린
B. 페놀도팜
C. 디아제팜
D. 하이드랄라진

## 해설

허혈성 ECG/troponin과230/130은 ACS 동반 고혈압응급이다. 선택지 A의 IV nitroglycerin과 적절한 beta차단은 심근산소요구·혈압을 낮출 수 있다. 쇼크·급성저박출성 HF·서맥/전도장애 등 금기를 확인하고 모니터링하에 적정한다. 무조건 최대속도로 정상혈압을 만들거나 관상동맥관류를 해칠 정도로 낮추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACS 고혈압응급 A를 무제한 신속정상화가 아닌 적정·금기확인하 조절로 한정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005910
