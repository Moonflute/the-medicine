---
type: qbank
schema_version: 1
id: medqa-us-train-009532
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c73744aa4c6a424b8755de94f18107492e8ab12bc1b7468d97138ee8aae5148e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "cluster headache"
  - "군발두통"
  - "oxygen therapy"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남자가 2주 동안 왼쪽 안와 주위에서 시작해 왼쪽 전두측두부로 방사되는 발작적 통증으로 내원했다. 통증은 심하고 보통 취침 전 1~2시간 지속된다. 발작 중 왼쪽 눈물과 콧물이 동반되며 일반 진통제는 효과가 없었다. 현재도 두통이 있다. 기침, 경련, 오심, 구토, 광선공포증, 소리공포증, 시각장애는 없다. 1년 전 심근경색 후 운동 시 잔여 협심증이 있고 10갑년 흡연력이 있다. 왼쪽 호너증후군이 보인다. 가장 가능성 높은 질환의 급성 치료에서 다음 단계는 무엇인가?

## 선택지

A. 에르고타민
B. 수마트립탄
C. 베라파밀
D. 100% 산소

## 해설

군발두통의 급성 치료에는 100% 산소(D)를 비재호흡 마스크로 충분한 유량으로 투여하는 방법이 적합하다. Sumatriptan도 군발두통 급성 치료제이지만, 이 환자는 심근경색과 잔여 협심증이 있어 혈관수축성 triptan/ergot 사용이 부적절하다. Verapamil은 군발두통 예방약이지 현재 발작을 즉시 중단하는 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 허혈성 심질환에서 산소 D 선택 근거를 보완. Sumatriptan이 군발두통에 쓰이지 않는다는 오류 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009532
