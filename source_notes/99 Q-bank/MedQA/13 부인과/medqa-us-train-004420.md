---
type: qbank
schema_version: 1
id: medqa-us-train-004420
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7f6d57c487a2026f6fd690bb887ed8f40e82ceb423c4d653a39af6889666da3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골반염증성 질환"
  - "난관난소농양"
  - "자궁경부염"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyXvCAoQ2VydmljaXRpcykubWQ
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3hpdGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여아가 양쪽 하복부의 급성 복통을 호소하며 응급실에 왔다. 오심이 있고 24시간 동안 여러 차례 구토했다고 한다. 여러 파트너와 보호되지 않은 성관계를 했다고 인정한다. 체온은 102.0°F (38.9°C)이다. 신체검사에서 양쪽 하복부 압통이 있다. 양손 진찰에서 자궁경부 분비물과 자궁경부 움직임 압통이 확인된다. β-hCG는 정상 범위이다. 질식 초음파에서 오른쪽 하복부에 관 모양의 복합 병변이 보인다. 이 환자 치료의 가장 적절한 초기 단계는 무엇인가?

## 선택지

A. 세폭시틴과 독시사이클린
B. 레보플록사신과 메트로니다졸
C. 메트로니다졸
D. 플루코나졸

## 해설

임신검사가 음성인 청소년에서 발열·자궁경부 움직임 압통·복합 난관 병변은 PID와 난관난소농양을 시사한다. 입원 정주 세폭시틴과 독시사이클린(A)은 권고 요법이다. 농양이 있으면 경과를 관찰하고 경구 전환 후에도 혐기성균 치료를 포함해 총 14일 완료한다. 임신부 사례가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비임신 청소년 PID/농양의 세폭시틴·독시사이클린 A 유지. 임신부로 오인하고 Mycoplasma 치료를 단정한 해설을 교정.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004420
