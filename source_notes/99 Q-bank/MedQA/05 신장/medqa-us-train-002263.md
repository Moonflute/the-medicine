---
type: qbank
schema_version: 1
id: medqa-us-train-002263
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12800d9ab92d0a4ebfdcace6bfec4b2515f7cd53dac57ec7f03e0a1f5152d32d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hyperkalemia"
  - "rhabdomyolysis"
  - "insulin-glucose therapy"
  - "acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 오른쪽 고관절 통증으로 응급실에 왔다. 오른쪽으로 넘어져 몇 시간 후 바닥에 누워 있는 채 발견되었다. 10년 전 생체 관련 공여자로부터 신장이식을 받았고 4년간 제2형 당뇨병이 있다. 프레드니손, 사이클로스포린, 메트포르민을 복용한다. 오른쪽 다리가 짧아지고 바깥쪽으로 돌아가 있으며 엉덩이와 허벅지에 광범위한 멍이 있다. X선에서 전위된 대퇴골 경부 골절이 보인다. 응급실에서 소생 후 오른쪽 전고관절치환술을 받았다. 수술 후 칼륨 7.1 mmol/L, 크레아틴키나아제 1,562 U/L이며 소변은 갈색이고 혈액반응이 강하게 양성이다. 심전도에서 뾰족한 T파가 보이고 정맥 칼슘 글루코네이트를 투여했다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 분무형 알부테롤을 투여한다
B. 정맥 인슐린과 포도당을 투여한다
C. 혈액투석을 시작한다
D. 정맥 중탄산나트륨을 투여한다

## 해설

장시간 압박·근손상, CK 상승, 갈색 혈색소 양성 소변은 횡문근융해에 의한 고칼륨혈증을 시사한다. K 7.1과 ECG 변화에 투여한 calcium은 심근을 안정화하지만 혈중 K를 낮추지 않는다. 다음에는 정맥 insulin과 glucose B로 K를 세포 내 이동시키며 혈당·K를 반복 모니터링한다. 효과는 일시적이므로 지속·반발 고K, 신기능 및 임상 상태에 따라 K 제거와 투석을 병행·고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 근육손상 횡격막 오역을 횡문근융해로 수정. Ca 후 K 이동 insulin/glucose B의 의미와 재평가를 명시.
- https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002263
