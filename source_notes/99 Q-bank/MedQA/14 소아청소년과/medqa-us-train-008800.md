---
type: qbank
schema_version: 1
id: medqa-us-train-008800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1795befb57c585603438822b0e7e0a6eb2ba63e943fc592a8c76b5b9262b8080
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal respiratory distress syndrome"
  - "prematurity"
  - "surfactant deficiency"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Zi47Z2h6rOk656AIOymne2bhOq1sCAoUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당직 소아과 의사가 신생아를 평가했다. 임신 33주에 34세 G1P1 산모에게 자연 질식분만으로 태어났다. 임신 중 제2형 당뇨병 조절이 잘 되지 않았다. 출생 체중 3,700g이고 Apgar 점수는 1분 7점, 5분 8점이었다. 탯줄은 3개의 혈관이었고 태반은 자갈색이며 모든 태반소엽이 온전했다. 태아막은 황백색이고 반투명했다. 정상으로 보이는 태반과 탯줄을 추가 평가를 위해 병리과에 보냈다. 신생아 활력징후는 체온 36.8°C(98.2°F), 혈압 60/44mmHg, 맥박 185회/분, 호흡수 74회/분이다. 콧벌렁거림, 늑골하 함몰, 경미한 청색증이 있고 양쪽 폐기저부의 호흡음이 감소되어 있다. 동맥혈가스에서 pH 6.91, PaCO₂ 97mmHg, PaO₂ 25mmHg, 염기과잉 15.5mmol/L(정상 ±3)이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 신생아 일과성 빈호흡
B. 신생아 호흡곤란증후군
C. 태변흡인증후군
D. 태아알코올증후군

## 해설

33주 미숙아·모체 당뇨와 출생 직후 심한 호흡곤란은 계면활성제 결핍 RDS(B)에 부합한다. 심한 저산소혈증·고탄산혈증과 산혈증은 응급 환기 지지가 필요한 상황을 나타낸다. 원문의 pH 6.91/PaCO₂ 97과 양의 base excess 15.5는 내부적으로 맞지 않아 부호를 임의로 추정하지 않고 이 수치의 해석에는 제한이 있음을 명시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: RDS 판단은 유지하되 원문 혈액가스의 염기과잉 부호 불일치를 정상값처럼 해석하지 않음.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008800
