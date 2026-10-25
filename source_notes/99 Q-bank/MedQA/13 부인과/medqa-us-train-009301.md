---
type: qbank
schema_version: 1
id: medqa-us-train-009301
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bdfc8ecadd747407a40ffbdf036929ace5aee829e24be4245791f5bfb0e2409b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervicitis"
  - "자궁경부염"
  - "Chlamydia trachomatis"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyXvCAoQ2VydmljaXRpcykubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 14주인 28세 G2P1 여성이 3일간의 비정상 질 분비물로 내원했다. 발열, 오한, 복통은 없다. 일주일 전 2세 딸이 요로감염을 앓았지만 항생제 치료 후 빠르게 호전되었다. 환자는 한 남성 파트너와 성생활을 하며 콘돔을 사용하지 않는다. 활력징후는 정상이다. 골반 진찰에서 자궁경부가 염증으로 충혈되고 쉽게 출혈하며, 자궁경부구에서 점액고름성 악취 분비물이 나온다. 자궁 압통이나 자궁경부 이동통은 없다. 질 pH는 3.5이다. 가장 적절한 초기 처치는 무엇인가?

## 선택지

A. 습윤도말검사
B. 아민 검사
C. 소변검사 및 배양
D. 핵산증폭검사

## 해설

쉽게 출혈하는 자궁경부와 점액농성 분비물은 자궁경부염 소견이다. 질·자궁경부 또는 소변 검체 NAAT로 클라미디아와 임질을 평가한다(D). 분비물과 pH만으로 특정 병원체를 확진하지 않으며 필요시 BV·트리코모나스도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 점액농성 자궁경부염의 GC/CT NAAT D 유지. 클라미디아 확정으로 단정한 해설 수정.
- https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009301
