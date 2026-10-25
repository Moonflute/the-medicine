---
type: qbank
schema_version: 1
id: medqa-us-train-007341
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8340d8d7c7546606eca1b784f7b4e6820d444fccc58065894f4da944ea5f14dd
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈"
  - "뇌혈관 연축"
  - "니모디핀"
  - "동맥류"
question_type: prevention
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 여자가 아침에 집에서 운동자전거를 타던 중 갑자기 시작된 극심한 전신성 두통으로 응급실에 내원했다. 자전거에서 급히 내려 누운 후 의식을 잃었고 1분간 의식이 없었다. 의식이 돌아온 뒤 목이 뻣뻣하고 오심이 있으며 두 차례 구토했다. 고혈압이 있고 담배와 술은 하지 않는다. 클로르탈리돈과 종합비타민을 복용한다. 매우 괴로워 보인다. 체온은 37.3°C(99.1°F), 맥박 88회/분, 호흡수 18회/분, 혈압 169/102 mmHg이다. 조영제 없이 시행한 머리 CT에서 거미막과 연막 사이에 고밀도 물질이 보인다. 수술실에서 동맥류 결찰술을 받고 중환자실로 옮겨졌다. 5일 후 왼쪽 하지에 새로운 국소 근력저하가 발생했다. 체온은 37.1°C(98.8°F), 맥박 70회/분, 호흡수 17회/분, 혈압 148/90 mmHg이며 왼쪽 하지 근력은 3/5, 오른쪽은 5/5이다. 다음 중 어떤 치료가 이 상태를 예방하는 데 가장 도움이 되었을 가능성이 높은가?

## 선택지

A. 정맥 신선동결혈장
B. 정맥 나트륨 니트로프루시드
C. 경구 니모디핀
D. 경구 아스피린과 클로피도그렐

## 해설

동맥류성 지주막하출혈 후 5일째 발생한 새 국소 결손은 지연성 뇌허혈을 우려하게 한다. 조기 경장 nimodipine(C)은 지연성 뇌허혈을 줄이고 기능적 예후를 개선하는 치료이다. 단순히 혈압을 낮춰 혈관연축을 예방한다는 설명은 부정확하다. 저혈압으로 뇌관류를 악화시키지 않도록 관리해야 한다. Aspirin과 clopidogrel을 일반적인 동맥류성 SAH 재출혈 예방약으로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Nimodipine C의 이익을 단순 혈압강하/혈관연축 방지로 환원한 오류와 항혈소판제의 SAH 재출혈 예방 주장을 교정.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000436

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007341
