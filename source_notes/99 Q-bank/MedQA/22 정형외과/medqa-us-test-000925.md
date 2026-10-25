---
type: qbank
schema_version: 1
id: medqa-us-test-000925
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5f3cdf1fb02113cf8e83a2628cdd63fa4ff75f52362e328ac5dacbda5526b121
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골관절염"
  - "관절 공간 협소화"
  - "골극"
question_type: investigation
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 여성이 3개월 동안 왼쪽 무릎 통증과 아침에 10~15분간 뻣뻣함이 있어 진료를 받으러 왔다. 직장에서 오래 서 있거나 계단을 오를 때 통증이 악화된다. 외상 병력은 없다. 고콜레스테롤혈증과 고혈압이 있고 아토르바스타틴, 라베탈롤, 아스피린을 복용한다. 최근 2개월 동안 관절통에 필요할 때 일반의약품 이부프로펜을 복용했다. 체중 84 kg, BMI 31.8 kg/m²였다. 무릎 앞안쪽 관절선 압통, 염발음, 완전 굴곡·신전 시 통증이 있었다. 혈청 요산 8.0 mg/dL, ESR 15 mm/h였다. 무릎 영상에서 가장 가능성 높은 소견은?

## 선택지

A. X선에서 관절 공간 협소화와 골극
B. X선에서 미만성 용해성-경화성 골병변
C. 초음파에서 관절삼출과 판누스
D. 초음파에서 액체로 찬 주머니

## 해설

활동 시 악화되는 무릎 통증, 10~15분의 아침강직, 염발음과 관절선 압통은 골관절염에 합당하다. 영상에서 예상되는 소견은 골극과 관절간격 협소화(A)이다. 이 문항은 실제 영상을 제시하지 않았으므로 영상이 이미 이를 뒷받침한다고 설명해서는 안 된다. 혈중 요산 상승만으로 급성 통풍을 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 기계적 통증과 짧은 아침강직의 OA 예상 영상 A를 유지하고 아직 제시되지 않은 영상 소견을 이미 확인했다고 쓴 표현을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000925
