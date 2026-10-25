---
type: qbank
schema_version: 1
id: medqa-us-test-000169
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:17054450c2e935f57689b3c2ef583b981703909fda8e2804c2521c2838f593c1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "상부 위장관 출혈"
  - "토혈"
  - "위내시경"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sg4HrtoAg7JyE7J6l6rSAIOy2nO2YiCAoVXBwZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남성이 거리에서 의식을 잃은 채 발견되어 응급실에 왔다. 직원들은 그를 오랜 알코올중독 병력이 있는 지역 노숙인으로 알아보았다. 맥박 분당 95회, 혈압 110/70 mmHg, 호흡수 분당 20회, 실내 공기 산소포화도 98%이다. 의식이 없는 환자에게 피와 작은 혈전, 음식물이 섞인 구토물이 묻어 있고 알코올 냄새가 난다. 직장수지검사에서 검은 타르색 변이 만져진다. 산소와 정맥 수액을 투여하고 비위관을 간헐적 흡인으로 삽입했다. 검사와 처치를 준비 중이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 대장내시경
B. 상부 위장관 내시경
C. 양성자펌프억제제와 H. pylori 제균요법
D. 소화성 궤양 수술

## 해설

토혈과 흑색변은 상부 위장관 출혈을 시사한다. 제시된 선택지 중 출혈원을 확인하고 필요하면 지혈까지 시행할 수 있는 검사는 B, 상부 위장관 내시경이다. 대장내시경은 이 임상 양상의 첫 검사가 아니며, 경험적 제균요법이나 궤양 수술이 초기 내시경 평가를 대신하지 않는다.

실제 처치에서는 ABC 평가, 순환 소생과 기도보호가 먼저다. 이 환자는 의식이 없고 토혈이 있으므로 내시경 전 흡인 위험을 평가하고 필요 시 기관삽관으로 기도를 확보해야 한다. 내시경은 안정화 후 시행하며, 비정맥류 출혈은 일반적으로 24시간 이내, 정맥류 출혈이 의심되면 적절한 소생 후 12시간 이내 시행한다. 정상 산소포화도만으로 기도보호 능력이 보장되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 타코츠보 해설이 상부 위장관 출혈 케이스에 오연결되어 교체. 원정답 B 유지; 의식저하 환자의 기도보호가 내시경보다 앞섬을 명시.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2026_a-2863-8314.pdf
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000169
