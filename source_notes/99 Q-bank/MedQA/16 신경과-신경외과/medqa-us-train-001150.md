---
type: qbank
schema_version: 1
id: medqa-us-train-001150
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa6ad269c8b9a4bc8122575bce08a51c03b538f0200ff270bc0b6b93e0a46891
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Tabes dorsalis"
  - "Cervical disk prolapse"
  - "Multiple sclerosis"
  - "Syringomyelia"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 1년 전부터 시작된 목과 팔의 타는 듯한 통증으로 내원하였다. 같은 기간 동안 손의 감각 이상(paresthesia)도 있었다. 지난 3개월 동안 양손의 근력 약화가 점진적으로 심해졌다. 환자는 제2형 당뇨병, 고콜레스테롤혈증, 고혈압을 앓고 있다. 3년 전 자동차 사고를 겪은 적이 있다. 현재 복용 중인 약물은 메트포르민(metformin), 시타글립틴(sitagliptin), 에날라프릴(enalapril), 아토르바스타틴(atorvastatin), 아스피린이다. 평생 7명의 성 파트너가 있었으며 콘돔을 일관되게 사용하지 않았다. 시간, 장소, 사람에 대한 지남력이 있다. 활력 징후는 정상 범위 내에 있다. 동공은 양측이 동일하며 빛에 반응한다. 상지 검사에서 양측의 근력 저하, 반사 소실, 악력 저하 및 근섬유다발수축(fasciculation)이 관찰된다. 가슴과 양쪽 상완 부위에서 온도 및 통증 감각이 소실되었다. 상지의 진동 및 관절 위치 감각은 정상이다. 뇌신경 검사에서 국소적인 이상 소견은 없다. 하지 검사에서는 이상 소견이 없다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 척수매독(Tabes dorsalis)
B. 경추 디스크 탈출증(Cervical disk prolapse)
C. 다발성 경화증(Multiple sclerosis)
D. 척수공동증(Syringomyelia)

## 해설

외상 후 지연 발생한 양측 상지 위약·반사저하·근섬유다발수축과 망토형 온통각 소실은 척수공동증(D)에 합당하다. 척수 중앙의 공동이 전백색교련에서 교차하는 통증·온도 섬유를 손상시키며, 전각 침범은 해당 분절의 하위 운동신경원 징후를 만든다. 후주가 상대적으로 보존되어 진동·위치감각은 유지될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선택적 온통각 소실을 전각 단독 손상으로 설명한 오류를 전백색교련 및 전각 침범으로 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001150
