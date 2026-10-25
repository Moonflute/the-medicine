---
type: qbank
schema_version: 1
id: medqa-us-train-008443
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:91a067ad89923dd8f13d1d983269c52a5865d9c32f3c5a6d090c3e615bfd91b1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Clostridioides difficile infection"
  - "antibiotic-associated diarrhea"
  - "proton pump inhibitor"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: other
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 일주일 동안 지속된 설사로 내원했다. 심한 피로와 간헐적인 경련성 복통이 있다. 혈변은 보지 못했다. 한 달 전 폐렴으로 입원하여 항생제 치료를 받은 일이 있다. 최근 가족과 친구를 방문하기 위해 플로리다로 여행했다. 과거력으로 고혈압, 소화성 궤양질환, 고콜레스테롤혈증이 있으며 로사르탄, 에스오메프라졸, 아토르바스타틴을 복용한다. 골다공증으로 칼슘과 비타민 D를 복용하고, 간헐적인 변비에는 필요할 때 일반의약품 완하제를 사용한다. 신체검사에서 하복부 압통이 있지만 그 외에는 특이사항이 없다. 혈압 110/70mmHg, 맥박 80회/분, 호흡수 18회/분이다. 대변검사에서 혐기성 그람양성 간균이 확인되었다. 다음 중 이 환자가 이러한 임상 양상을 보일 위험을 증가시킨 요인은 무엇인가?

## 선택지

A. 최근 플로리다 여행
B. 에스오메프라졸로 치료 중인 소화성 궤양질환
C. 아토르바스타틴으로 치료 중인 고콜레스테롤혈증
D. 칼슘과 비타민 D로 치료 중인 골다공증

## 해설

최근 입원과 항생제 노출 뒤 발생한 설사, 복통 및 혐기성 그람양성 간균이라는 단서는 Clostridioides difficile 감염을 시사한다. 고령과 최근 항생제 사용이 중요한 위험요인이며, 보기 중 추가로 관련된 요인은 B, 에스오메프라졸을 이용한 위산 억제 치료이다.

PPI 치료와 C. difficile 관련 설사의 위험 증가는 관찰연구에서 연관성이 보고되어 허가사항에 경고되어 있다. 소화성 궤양질환 자체를 원인으로 단정하거나 PPI가 개별 환자에서 감염의 확정 원인이라고 해석하지 않는다. 진료에서는 PPI 적응증과 최소 필요 사용을 재평가하며, 대변에서 균이 검출되었다는 사실만이 아니라 증상과 적절한 검사 결과를 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: GCA/스테로이드 해설을 항생제 노출 후 C. difficile 설사 및 PPI 연관 위험 설명으로 교체. 원정답 B 유지, PPI 인과 확정과 불필요한 약제 중단 일반화 방지 및 프레드니솔론 오연결 제거.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/021153s059%2C021957s026%2C022101s023lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008443
