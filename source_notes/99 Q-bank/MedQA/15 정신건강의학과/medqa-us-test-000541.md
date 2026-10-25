---
type: qbank
schema_version: 1
id: medqa-us-test-000541
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:de239b4a4a75f556db032415ef2b2d6dce99db8046f36006ec45a138c49d54c3
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "삼환계 항우울제 중독"
  - "클로미프라민 과다복용"
  - "혼수"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yCvO2ZmOqzhCDtla3smrDsmrjsoJwg7KSR64-FIChUcmljeWNsaWMgQW50aWRlcHJlc3NhbnQgUG9pc29uaW5nKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 약병 옆에 의식 없이 누워 있는 상태로 발견되어 어머니와 함께 응급실에 왔다. 3년 전 주요우울장애를 진단받아 약물을 복용했으나 증상은 약간만 호전되었다. 여전히 학업에 집중하기 어렵고 대학에서 사회활동에도 참여하지 않았으며 친구가 많지 않고 방에 혼자 앉아 있는 경우가 많았다. 여러 차례 자살하겠다고 위협했지만 어머니는 진심이 아니라고 생각했다. 활력징후를 측정하던 중 혼수에 빠졌다. 심전도 QT 간격은 450 ms였다. 다음 중 과다복용했을 가능성이 가장 높은 약물은?

## 선택지

A. 부프로피온
B. 설트랄린
C. 벤라팍신
D. 클로미프라민

## 해설

선택지 중 삼환계 항우울제인 클로미프라민(D)은 과량복용 시 심장 전도 이상·부정맥, 저혈압, 경련 및 혼수를 일으킬 수 있다. 공식 허가정보는 특히 QRS 폭·축 변화를 중요한 삼환계 독성 지표로 제시한다. 따라서 D가 출제 의도에 부합하지만 심박수 보정 여부도 없는 QT 450 ms 단독으로 약물을 확정하거나 다른 항우울제 과량복용의 심독성을 배제할 수는 없다. 본문에 없는 저혈압을 이미 관찰된 사실로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 삼환계 과량복용의 심장·중추독성 근거를 확인하되 보정되지 않은 QT 450 ms 하나로 다른 약물을 확실히 배제한다는 해석을 피했다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05efab58-ba3c-4e54-bf18-1e66e1b0e41a

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000541
