---
type: qbank
schema_version: 1
id: medqa-us-train-004888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2b0b7f077dc6bfffe2d5809fbe94bb9257bfc0468612395f3a00055831e2e777
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "중증근무력증"
  - "단일 근섬유 근전도검사"
  - "흉선종"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHspp0g6re866y066Cl7KadIChNeWFzdGhlbmlhIGdyYXZpcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여자가 몇 주 동안 심한 피로를 호소한다. 퇴근 후 계단을 오르거나 머리를 빗거나 음식을 씹기 힘들고 간헐적으로 복시가 있다. 오른쪽 위눈꺼풀이 약간 처져 있으며 목 굴곡이 약하다. 사지 근력은 처음 5/5이지만 5분 동안 어깨를 반복적으로 굽혔다 펴게 하면 상지 근위부 근력이 4/5로 저하된다. 근긴장도와 심부건반사는 정상이다. 이 질환을 진단하는 데 가장 적절한 검사는?

## 선택지

A. 흉부 CT
B. 혈장교환
C. 단일 근섬유 근전도검사
D. 텐실론 검사

## 해설

반복 사용 후 안검·연하/저작·목과 근위부 근력의 피로성 저하, 정상 반사·감각은 중증근무력증을 시사한다. 선지 중 단일근섬유 근전도검사(C)는 신경근전달 장애에 민감하며 같은 운동단위의 근섬유 사이 발화시간 변동(jitter) 증가와 전달 차단을 평가한다. '재발성 전위'가 진단표지라는 뜻이 아니다. 이상 jitter는 다른 신경근 질환에서도 가능하므로 임상·항체 및 다른 전기생리 결과를 종합한다. 흉부 CT는 흉선종 평가에 쓰이지만 신경근전달 장애를 직접 진단하는 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SFEMG의 이상 소견을 재발성 전위로 잘못 설명한 것을 jitter 증가·차단으로 교정했다. 주어진 진단검사 중 C를 유지하며 민감도와 특이도를 구별한다.
- 공식/학회 근거: https://www.aanem.org/docs/default-source/documents/aanem/practice/guidelines/myastheniagravis_reaffirmed.pdf?sfvrsn%3D178424ec_3=
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/WNL.29.1.68

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004888
