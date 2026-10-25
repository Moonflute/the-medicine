---
type: qbank
schema_version: 1
id: medqa-us-train-008270
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c61d5fc07381901e819dc19f478e505566046bb769ac24eb307f845aab39e629
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "cluster headache"
  - "episodic cluster headache"
  - "verapamil prophylaxis"
question_type: prevention
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남자가 1년 전부터 발생한 야간 두통으로 내원했다. 수개월 동안 발작이 없다가 3주 전부터 다시 시작되었다. 일주일에 여러 번 밤에 두통이 발생하고 갑자기 시작되는 좌측 눈 위의 찌르는 전기통 같은 통증이며 좌측 눈물이 난다. 2~3시간 후 저절로 호전되지만 통증으로 깰까 봐 잠을 피한다. 두부와 부비동 CT는 정상이다. 향후 발작을 예방할 가능성이 가장 높은 치료는?

## 선택지

A. 카바마제핀
B. 수마트립탄
C. 토피라메이트
D. 베라파밀

## 해설

야간에 반복되는 2~3시간의 심한 일측 안와 통증과 동측 눈물은 군발두통에 합당하다. Verapamil(D)은 발작군 기간의 예방 치료로 고려하며 심장 전도장애 위험 때문에 전문적 용량 조절과 심전도 감시가 필요하다. Sumatriptan은 급성 발작 치료에 사용한다. 약제 반응과 금기에 따라 다른 예방 치료가 필요할 수도 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 예방 verapamil D 유지. 발작군 사이 무증상 기간 번역 누락 복원 및 심전도 감시 명시.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008270
