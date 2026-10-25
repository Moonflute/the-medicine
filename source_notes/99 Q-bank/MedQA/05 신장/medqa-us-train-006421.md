---
type: qbank
schema_version: 1
id: medqa-us-train-006421
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0f7f2d18788020418f95b0f52439f79be7f5378d34270a234288dc8b209eb019
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "육아종증 다발혈관염"
  - "폐-신장 증후군"
  - "상기도 출혈"
related_disease_slugs:
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "양성 폐-신장 증후군 및 미제시 폐결절을 창작한 해설 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

62세 남성이 아침부터 시작된 혈뇨와 객혈로 응급실에 내원했다. 성인이 된 이후 폐 감염을 자주 앓았으며 가장 최근 감염은 2주 전이었다. 이전에도 혈뇨가 두 번 있었지만 현재만큼 심하지는 않았다. 그 외 병력은 특이사항이 없고 필요할 때 아세트아미노펜만 복용한다. 혈압은 136/92 mm Hg, 심박수는 분당 86회, 호흡수는 분당 16회, 체온은 37.0°C(98.6°F)이다. 흉부 방사선에서 우중엽의 호전 중인 공기공간 음영이 보인다. 초기 검사에서 적혈구침강속도와 C-반응단백이 상승했다. 진찰 중 자발적인 코피가 발생했다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 연쇄상구균 감염 후 사구체신염
B. IgA 신병증
C. 굿파스처 증후군
D. 육아종증 다발혈관염

## 해설

객혈과 혈뇨의 폐-신장 침범에 코피라는 상기도 단서가 더해져 선택지 중 GPA가 가장 적합하다. 실제 진단에는 ANCA·요검사·영상·필요 생검 등 원인 평가가 필요하다. 본문에는 호전 중인 폐 음영이 제시되어 있으며 폐결절이 확인되었다고 단정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006421

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 양성 폐-신장 증후군 및 미제시 폐결절을 창작한 해설 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
