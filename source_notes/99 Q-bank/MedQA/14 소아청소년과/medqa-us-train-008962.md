---
type: qbank
schema_version: 1
id: medqa-us-train-008962
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8eb48f155b15c40e4828e830aaedc363456d636636b09cf455a7c43d84a2f9e4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Meckel diverticulum"
  - "painless lower gastrointestinal bleeding"
  - "technetium scan"
question_type: investigation
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6QgKERpdmVydGljdWx1bSkubWQ
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18개월 남아가 2일 동안 직장에서 짙은 붉은 피를 많이 배출해 부모와 함께 내원했다. 지난 3주 동안 검은 변도 여러 차례 보였고 최근 24시간 동안 평소보다 더 많이 자고 창백해졌다. 식욕은 정상이고 구토는 없다. 키와 체중은 50백분위수이다. 체온 37°C(98.6°F), 맥박 135회/분, 호흡수 38회/분, 혈압 90/50mmHg이다. 결막이 창백하고 복부는 부드럽고 압통이 없다. 기저귀에 소량의 짙은 붉은 피가 있다. 혈색소 9.5g/dL, 헤마토크릿 30%, MCV 68μm³, 백혈구 7,200/mm³, 혈소판 300,000/mm³이다. 다음 중 진단을 가장 잘 확진할 수 있는 검사는 무엇인가?

## 선택지

A. 테크네튬-99m 퍼테크네테이트 스캔
B. 수용성 조영제 관장
C. 식도위십이지장내시경
D. 대장내시경

## 해설

통증 없는 소아 하부위장관 출혈과 빈혈은 메켈게실의 이소성 위점막에서 분비되는 산에 의한 인접 장점막 궤양을 시사한다. 테크네튬-99m 퍼테크네테이트 스캔(A)은 이소성 위점막의 섭취를 이용해 출혈 원인인 메켈게실을 찾는 검사로 이 선택지 중 가장 적합하다. 모든 메켈게실에 이소성 위점막이 있거나 검사가 항상 양성인 것은 아니므로 음성 결과만으로 완전히 배제하지 않는다. 출혈 환자의 순환 상태 평가는 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 메켈게실의 이소성 위점막 검출 기전으로 A 설명. 모든 출혈성메켈에 가장민감하다는 단정 제거.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008962
