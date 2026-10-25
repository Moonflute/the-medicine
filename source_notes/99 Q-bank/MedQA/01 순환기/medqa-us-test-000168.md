---
type: qbank
schema_version: 1
id: medqa-us-test-000168
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d3e127eed35dd322b5ab79af4557c365bc23947203f6a9fbf71ebdc3102ccaea
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "타코츠보 심근병증"
  - "스트레스 심근병증"
  - "급성 심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여성이 남편을 자동차 사고로 잃은 뒤 극심한 충격 상태에서 심한 흉통으로 오빠와 함께 응급실에 내원했다. 혈압 105/67 mmHg, 심박수 분당 96회로 규칙적이고 호흡수 분당 23회, 산소포화도 96%이다. S3 심음과 양쪽 폐 하엽 수포음이 들리며 12유도 심전도는 특이사항이 없다. 심초음파에서 좌심실과 좌심방이 커져 있다. 가장 가능성 높은 진단은?

## 선택지

A. 심방세동
B. 수축성 심낭염
C. 타코츠보 심근병증
D. 제한성 심근병증

## 해설

남편의 갑작스러운 사망이라는 극심한 정서적 스트레스 직후 발생한 흉통과 S3, 양측 폐기저부 수포음은 급성 심기능 저하를 시사한다. 제시된 보기 중 가장 가능성 높은 진단은 C, 타코츠보(스트레스) 심근병증이다. 규칙적인 맥박과 정상 범위의 심전도는 심방세동을 지지하지 않으며, 수축성 심낭염이나 제한성 심근병증은 이 급성 유발 상황을 덜 잘 설명한다.

다만 좌심실·좌심방 확장만으로 타코츠보를 확진할 수는 없다. 진단에서는 일시적인 국소 좌심실 벽운동 이상과 회복을 평가하고 급성 관상동맥증후군 및 심근염 등을 감별한다. 드물게 심전도 변화가 없을 수 있으므로 정상 심전도만으로 타코츠보나 급성 관상동맥증후군을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UGIB 해설이 타코츠보 케이스에 오연결되어 교체. 원정답 C 유지; 심방·심실 확장만으로 확진하거나 정상 ECG로 ACS를 배제하지 않도록 한계 명시.
- https://academic.oup.com/eurheartj/article/39/22/2032/5025412

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000168
