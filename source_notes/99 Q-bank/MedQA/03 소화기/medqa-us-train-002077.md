---
type: qbank
schema_version: 1
id: medqa-us-train-002077
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e7ad9c72121e13c102a244163039c6c20371b825b2170072f5049394064b82b4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Gardner syndrome"
  - "familial adenomatous polyposis"
  - "osteoma"
  - "colorectal polyps"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 지난 한 달 동안 두 차례 직장 출혈이 있어 내원했다. 아버지는 42세에 대장암으로 사망했다. 환자는 중대한 질환 병력이 없고 약물도 복용하지 않는다. 흡연하지 않는다. 활력징후는 정상이다. 신체검사에서 오른쪽 아래턱 위에 압통이 없고 기저 뼈에 고정된 작고 단단한 종괴가 만져진다. 복직근 위에도 비슷하게 단단하고 통증 없는 5×5 크기의 종괴가 만져진다. 직장검사에서 손가락 끝 높이에 폴립양 종괴가 만져진다. 직장구불결장경검사에서 수많은 폴립이 보인다. 다음 중 이러한 소견을 가장 잘 설명하는 것은?

## 선택지

A. 가드너 증후군
B. 린치 증후군
C. 포이츠-예거스 증후군
D. 터콧 증후군

## 해설

가족성 조기 대장암·다발성 대장선종에 하악골 골종과 복벽 desmoid 종양이 동반되어 Gardner 증후군 A를 시사한다. 이는 APC 관련 가족성 선종성 용종증의 장외 소견이다. 골종을 골수의 종양으로 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 다발 대장선종+하악골종+복벽 desmoid는 Gardner A; 골수 종양으로 서술한 오역 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002077
