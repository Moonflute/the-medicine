---
type: qbank
schema_version: 1
id: medqa-us-train-006488
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b74eee0c241158a7ebf5793d316cf94bf3b651f4556f02a1e606e26e2e87bdd
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "양성 돌발성 체위성 현훈"
  - "체위성 안진"
  - "전정 억제제"
  - "Benign paroxysmal positional vertigo"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ydtOyEneymnSAoQmVuaWduIHBhcm94eXNtYWwgcG9zaXRpb25hbCB2ZXJ0aWdvKS5tZA
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
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: BPPV의 수평안진 평가와 치료 선택지를 교정"
curation_status: "revised"
curation_reason: "BPPV의 수평안진 평가와 치료 선택지를 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 여성이 일주일 동안 지속된 어지럼증으로 가정의에게 내원했다. 누우면 빙빙 도는 느낌이 생기고 고개를 오른쪽으로 돌릴 때 심해진다. 증상은 일시적이고 간헐적이며 1분 이내로 지속되고 하루에도 여러 차례 발생하며 오심이 동반된다. 증상 사이에는 정상으로 일상생활을 할 수 있다. 발열, 청력 이상, 복시, 이명 또는 최근 독감·바이러스 감염은 부인한다. 과거력으로 제2형 당뇨병, 고혈압 및 고콜레스테롤혈증이 있다. 흡연과 음주는 하지 않는다. 혈압은 124/78 mm Hg, 심박수는 분당 79회, 호흡수는 분당 13회이다. 검사 중 앉은 자세에서 머리를 오른쪽으로 45도 돌린 채 바로 눕게 하자 수평 안진이 관찰되었다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 광범위 항생제
B. 고용량 스테로이드
C. 가돌리늄 조영 뇌 MRI
D. 누운 자세 머리회전검사(supine roll test)로 수평반고리관 BPPV를 평가하고 해당 반고리관에 맞는 이석정복술 시행 또는 의뢰

## 해설

체위 변화로 유발되는 1분 미만의 반복 현훈과 발작 사이 정상 상태는 BPPV를 시사한다. 다만 제시된 안진이 수평성이므로 후반고리관 BPPV로 단정해 Epley 술기를 일률적으로 적용하지 않는다. Supine roll test로 수평반고리관 침범을 평가하고 확인된 유형에 맞는 이석정복술을 시행한다. 전정억제제의 일상적인 사용은 권장되지 않는다. 비전형적 안진이나 중추신경계 소견이 생기면 별도 평가가 필요하지만 현재 문항에는 그런 소견이 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: BPPV의 수평안진 평가와 치료 선택지를 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.entnet.org/resource/aao-hnsf-updated-cpg-bppv-press-release-fact-sheet/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006488

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
