---
type: qbank
schema_version: 1
id: medqa-us-train-001421
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:939c04d5c1a7e49800c8c67543ad18e3126c8c083efa63b8a26f947d86c6d4f2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "follicular thyroid carcinoma"
  - "capsular invasion"
  - "vascular invasion"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: diagnosis
difficulty: complex
answer: C
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

요오드 결핍 지역에 거주하는 40세 여성이 통증이 없고 서서히 커지는 앞목 종괴로 내원했다. 간헐적인 연하곤란이 있으나 두경부 방사선 조사력은 없다. 종괴는 삼킬 때 움직여 갑상샘 종괴로 보인다. 목 초음파에서 오른쪽 갑상샘 엽에 3 cm x 3 cm (1.2 in x 1.2 in) 종괴가 있고 점상 미세석회화, 저에코, 불규칙한 경계 및 혈류 증가가 보인다. 경부 림프절병증은 없다. 혈청 TSH 3.3 mU/L, T3 2.2 nmol/L, T4 111 nmol/L이다. 결절의 세침흡인검사에서 여포성 종양이 의심되는 다수의 여포세포가 보인다. 오른쪽 갑상샘 엽절제술과 협부절제술을 시행했다. 다음 중 진단에 도움이 되는 조직병리 소견은 무엇인가?

## 선택지

A. 사종체의 존재
B. 혈관 침범이 없는 잘 분화된 여포세포
C. 핵 비정형은 없지만 피막 및 혈관 침범이 있는 여포세포
D. 증식한 여포곁 C세포

## 해설

정답은 C이다. 여포암은 종양 피막 또는 혈관 침범의 조직학적 확인이 핵심이며 세포의 핵 비정형이 뚜렷하지 않아도 가능하다. C는 피막·혈관 침범을 명시하므로 진단에 합당하다. FNA의 세포 모양만으로 선종과 암을 확정 구별하지 못하며 사종체는 유두암, C세포 증식은 수질성 병변과 관련된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 모세혈관 침범이 없는데 혈관 침범이 있다는 해설 모순을 정리.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001421
