---
type: qbank
schema_version: 1
id: medqa-us-train-005056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0d1f85b5e62c1a7a5e7331487bf4dedf37c2dfeffdc8b76c5c7fad9aed80fb1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈"
  - "후교통동맥 낭상동맥류"
  - "동맥류 파열"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: complex
answer: B
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

67세 여자가 갑작스러운 의식소실로 응급실에 왔다. 2시간 전부터 심한 두통과 메스꺼움이 있었고 현재 지남력이 없으며 목 경직과 통증 자극에 대한 굴곡 자세가 있다. 안저에서 양측 유리체출혈이 보이고 비조영 두부 CT에서 뇌 기저부, 특히 왼쪽 반구 위에 광범위한 출혈이 보인다. 가장 가능성 높은 원인은?

## 선택지

A. 감염성 동맥류 파열
B. 낭상 동맥류 파열
C. 두개내 동맥 박리
D. 척수 동정맥 기형

## 해설

갑작스러운 두통·의식저하·목경직과 뇌기저부 중심의 광범위 출혈은 동맥류성 지주막하출혈을 시사하여 낭상 동맥류 파열(B)이 가장 가능하다. 유리체출혈은 Terson 증후군으로 동반될 수 있다. 이 출혈 분포만으로 후교통동맥이라는 특정 동맥을 확정하지 않으며 실제 위치는 혈관영상으로 확인한다. 감염성 동맥류를 특별히 뒷받침하는 감염 병력은 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 문자 CT와 SAH 임상으로 낭상 동맥류 B를 유지하되 출혈만으로 후교통동맥 위치를 확정한 해설을 제거했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005056
