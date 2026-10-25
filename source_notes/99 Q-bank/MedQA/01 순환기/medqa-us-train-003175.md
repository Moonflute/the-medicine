---
type: qbank
schema_version: 1
id: medqa-us-train-003175
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab8aa3079312ce0c8741907df9e6c24b09f29c087628219afad8426b14a8531c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "transient ischemic attack"
  - "carotid atherosclerosis"
  - "transient focal neurologic deficit"
  - "secondary stroke prevention"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 30분 동안 지속된 말 어눌함과 왼쪽 안면 처짐으로 남편과 함께 응급실에 왔다. 왼쪽 얼굴의 무감각도 있었지만 이런 에피소드는 처음이다. 고혈압, 고지혈증, 제2형 당뇨병이 있고 아버지가 일주일 전 폐암으로 사망했다. 30년 동안 하루 한 갑의 담배를 피우며 현재 메트포르민, 시타글립틴, 에날라프릴, 아토르바스타틴을 복용한다. 시간·장소·사람에 대한 지남력은 정상이고 왼쪽 얼굴 처짐 외 근력, 반사, 손가락-코 검사, 보행은 정상이다. 오른쪽 경동맥 잡음이 들리고 심전도에서 좌심실비대가 있다. 비조영 뇌 CT는 정상이며 CT에서 돌아오는 길에 증상이 소실되었다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 전환장애
B. 부분발작
C. 일과성 허혈발작
D. 다발성 경화증

## 해설


갑작스러운 언어 장애와 안면 마비가 일시적으로 나타났으며, 증상이 완전히 회복된 점은 일과성 허혈발작(TIA)을 시사한다. 경동맥 잡음과 고혈압 위험인자도 뇌혈관성 질환을 뒷받침한다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 일과성 국소 신경결손·죽상경화 위험은 선택지상 TIA C. 정상 CT만으로 급성허혈을 완전히 배제했다는 판정은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003175
