---
type: qbank
schema_version: 1
id: medqa-us-test-001238
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:960888af4dbaab2ef60c7bb9afbf67970ae4a476b9a1e93b91f632e83eade476
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "석면폐증"
  - "간질성 폐질환"
  - "폐포-동맥혈 산소분압차"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yEneuptO2PkOymnSAoQXNiZXN0b3NpcykubWQ
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

57세 남성이 조선소에서 단열재를 다루며 22년간 일했다. 최근 운동 시 호흡곤란이 악화되고 양쪽 폐기저부에서 미세 수포음이 들린다. 고해상도 CT에서 석회화 흉막판과 함께 양쪽 하엽의 흉막하 섬유화가 보인다. 폐 섬유화의 가장 가능성 높은 원인은?

## 선택지

A. 장기간 석면 노출에 의한 석면폐증
B. 단순 흉막판만 있고 폐 실질 질환은 없음
C. 흡연에 의한 폐기종
D. 급성 폐색전증

## 해설


잠복기가 긴 직업성 석면 노출이 있고 하엽·흉막하 중심의 폐 실질 섬유화가 있으면 석면폐증을 의심한다. 흉막판은 노출을 뒷받침하지만 흉막판만으로 폐 실질의 석면폐증을 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조선소 석면 노출과 횡격막 상부 흉막비후/간질성 폐질환은 DLCO 감소·A-a 차 증가 A에 부합. 누락 현미경 그림 없이도 작업력/영상 기술로 판단 가능.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001238
- https://www.sjweh.fi/article/3462
