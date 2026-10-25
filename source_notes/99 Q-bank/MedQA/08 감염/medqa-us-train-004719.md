---
type: qbank
schema_version: 1
id: medqa-us-train-004719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ddf6ccfe6c8527da5ba120621b8f2bbd51fd580144cc40bbcbfb4ee5310b1efe
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "선택적 IgA 결핍"
  - "반복성 호흡기 감염"
  - "체액성 면역결핍"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: investigation
difficulty: complex
answer: C
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

20세 여성이 7일 동안 지속된 코막힘으로 학생보건센터에 내원했다. 발열, 인후통과 감염성 위장염도 있었다. 자세히 묻자 기억하는 한 1년에 2~3회 비슷한 문제가 있었다고 한다. 부비동염, 귀 감염과 폐 감염이 포함되었다. 체온은 38.6°C (101.4°F), 심박수 분당 70회, 혈압 126/78 mm Hg, 호흡수 분당 18회, 실내 공기 산소포화도 98%이다. 양쪽 콧구멍에서 점액농성 분비물이 나오고 양쪽 상악동에 압통이 있다. 객담 그람염색에서 그람양성 쌍구균이 보인다. 혈청 면역글로불린 검사에서 예상되는 결과는 무엇인가?

## 선택지

A. IgM 정상, IgG 낮음, IgA 낮음
B. IgM 상승, IgG 낮음, IgA 낮음
C. IgM 정상, IgG 정상, IgA 낮음
D. IgM 정상, IgG 정상, IgA 정상

## 해설


반복 점막 호흡기·위장관 감염의 출제 맥락은 선택적 IgA 결핍으로, C의 IgM·IgG 정상/IgA 저하가 해당한다. IgA는 점막 방어에 중요하므로 감소 시 이런 감염이 나타날 수 있다. IgG까지 낮다면 CVID 등 다른 항체결핍을 고려하며 모든 면역글로불린이 정상인 D는 선택적 IgA 결핍의 검사 패턴이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004719 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 IgA라면서 낮은 IgA 정답을 택한 자기모순 해설 교정; 선택적 IgA 결핍 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004719
