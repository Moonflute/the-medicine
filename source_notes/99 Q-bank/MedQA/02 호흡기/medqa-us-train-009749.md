---
type: qbank
schema_version: 1
id: medqa-us-train-009749
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7bafc4c54da18be71602f5fdec75abc03876252bae40e63fee5599bcf20edc14
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "아미오다론 폐독성"
  - "간질성 폐질환"
  - "폐섬유화"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
question_type: mechanism
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FuZGVzYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 남성이 6개월 동안 점점 심해지는 호흡곤란과 마른기침으로 일차진료의에게 내원했다. 과거력으로 천식, 고혈압, 비만, 고콜레스테롤혈증이 있다. 진찰에서 얕게 호흡하며 호흡수는 분당 22회이다. 청진에서 양측 폐기저부 수포음, 천명음 및 2/6등급 범수축기 잡음이 들린다. 활력징후는 체온 36.7°C, 혈압 126/74 mmHg, 심박수 분당 74회이다. 외래 고해상도 흉부 CT에서 양측 폐기저부 벌집모양 음영, 석회화 육아종, 경도의 종격동 림프절 비대가 관찰되었다. 다음 중 이 남성의 폐질환을 유발하거나 악화할 수 있는 약물은?

## 선택지

A. 아미오다론
B. 베라파밀
C. 프로프라놀롤
D. 칸데사르탄

## 해설

아미오다론은 약물성 간질성 폐렴과 폐섬유화를 일으키거나 악화할 수 있으므로 A가 적합하다. 다만 벌집모양 변화는 섬유화 소견이며 석회화 육아종이나 림프절이 아미오다론 독성에 특이한 것은 아니다. 실제 약물 노출력과 다른 섬유화 원인을 함께 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아미오다론이 섬유화 악화 약물 A라는 점은 유지하되 석회화 육아종을 특이 영상으로 단정한 오류 제거.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3e631c5-1204-419c-8dbe-fa9b37a77f97

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009749
