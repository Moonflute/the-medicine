---
type: qbank
schema_version: 1
id: medqa-us-train-006982
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ecf525922addb8b15128ddc1820d4b4207af5b3b9336535f25f071e69a4f8048
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "모노아민 산화효소 억제제"
  - "티라민 상호작용"
  - "고혈압성 위기"
  - "페넬진"
question_type: mechanism
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여자가 3시간 동안 지속된 심한 박동성 두통, 오심, 광선공포증으로 응급실에 내원했다. 심한 후두부 통증과 흉부 압박감도 있다. 증상 발생 전에 네트워킹 행사에 참석해 적포도주를 마셨고, 곧이어 살라미와 말린 과일을 간식으로 먹었다. 재발성 편두통과 우울증이 있어 매일 약물을 복용한다. 약간 괴로워하며 발한이 있고 얼굴이 홍조를 띤다. 체온은 37.0°C(98.6°F), 맥박은 90회/분, 호흡수는 20회/분, 혈압은 195/130 mmHg이다. 의식은 명료하고 지남력은 정상이며 양측 심부건반사는 2+이다. 이 환자의 증상은 다음 중 어떤 약물의 부작용으로 가장 잘 설명되는가?

## 선택지

A. 페넬진
B. 설트랄린
C. 수마트립탄
D. 토피라메이트

## 해설

페넬진(A)은 비선택적 MAO 억제제로, 음식의 티라민 대사를 줄여 티라민 노출에 따른 노르에피네프린 방출과 심한 혈압 상승을 유발할 수 있다. 본문의 적포도주·살라미 섭취 후 심한 두통·발한과 195/130 mmHg 혈압이 이 상호작용에 부합한다. MAO를 억제하는 것은 페넬진이지 티라민이 아니다. 본문에 없는 치즈 섭취를 실제 병력으로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 티라민이 MAO-A를 차단한다고 한 약물-음식 상호작용의 역전된 설명을 교정했다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fa041652-fdde-4794-a8d2-279dd309e075

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006982
