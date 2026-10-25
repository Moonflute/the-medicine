---
type: qbank
schema_version: 1
id: medqa-us-train-004663
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:588a2b464ed45ae43e0b56425ea7b0ba9152fcff9f5c07054cfef10bd1750b03
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈"
  - "벼락두통"
  - "뇌동맥류"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: standard
answer: B
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

56세 여성이 90분 동안 갑자기 발생한 심한 두통, 오심, 구토와 목 통증으로 내원했다. 두통은 '벼락두통' 양상이고 곧이어 심한 목 통증과 경직, 오심과 구토가 나타났다. 의식 소실, 경련 또는 과거 유사 증상은 없다. 6개월 전 갑자기 오른쪽 다리에 체중을 싣기 어려웠지만 몇 시간 안에 호전된 적이 있다. 흡연, 음주와 기분전환용 약물 사용은 하지 않는다. 신체검사에서 뚜렷한 경부강직이 보이고 하지 근력은 오른쪽 4/5, 왼쪽 5/5이다. 그 외에는 정상이다. 조영제를 사용하지 않은 두부 CT는 정상이다. 다음 중 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 정맥 tPA
B. 요추천자
C. 뇌 확산강조 자기공명영상
D. 뇌실복강 단락술

## 해설

벼락두통·경부강직으로 SAH가 의심되며 CT가 음성이어도 우측 하지4/5의 신경학적 결손이 있어 단순히6시간 이내 정상 CT만으로 배제하는 경로에 해당하지 않는다. 주어진 선지에서는 요추천자(B)로 출혈을 추가 평가하는 것이 적절하다. 실제로 영상의 질·판독, 다른 두개내압 위험과 LP 금기를 확인하고 CSF 적혈구·황색변조 등을 해석한다. 모든 환자에서 조기 정상 CT 뒤 무조건 LP를 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 음성 CT면 무조건 LP라는 일반화를 CT시점과 신경학적 검사에 따라 제한했다. 이 환자는 우측 하지위약이 있어6시간 이내 CT 단독 배제 조건에 맞지 않으므로 B를 유지한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000436

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004663
