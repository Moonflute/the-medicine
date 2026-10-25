---
type: qbank
schema_version: 1
id: medqa-us-train-007189
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07a572fdf1db447ced5bb429092d0bdbc474637762f7e4d5cdf3d9da24337cf5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "독성 거대결장"
  - "위막성 대장염"
  - "하스트라 소실"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 여자가 하루 동안 지속된 심한 복통, 오심, 구토로 응급실에 내원했다. 5일 동안 피가 줄무늬처럼 섞인 심한 물 설사도 있었다. 3주 전 요로감염으로 14일간 시프로플록사신 치료를 받았다. 매우 괴로워 보인다. 체온은 39.3°C(102.7°F), 맥박은 110회/분, 혈압은 100/60 mmHg이다. 복부가 팽창하고 하복부 압통이 있으며 장음은 감소되어 있다. 반발통과 복부 경직은 없다. 심폐검사에서 이상은 없다. 대변 잠혈검사는 양성이다. 검사에서 헤모글로빈 10.2 g/dL, 백혈구 수 28,000/mm³, 나트륨 133 mEq/L, 칼륨 3.3 mEq/L, 염소 97 mEq/L, 포도당 98 mg/dL, 크레아티닌 1.3 mg/dL이다. 굵은 정맥주사 바늘 두 개를 삽입하고 정맥 수액을 투여했다. 이 환자의 복부 X선에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 결장 확장과 하스트라 소실
B. 장 고리의 줄 모양 소견
C. 오른쪽 횡격막 아래 많은 양의 가스
D. 커피콩 모양의 구불결장 확장

## 해설

항생제 사용 후 발생한 심한 설사, 발열, 복부 팽만 및 백혈구 증가는 중증 C. difficile 대장염과 독성 거대결장을 시사한다. 예상되는 영상 소견은 A의 결장 확장과 결장팽대주름(haustra) 소실이다. Haustra는 결장의 분절성 팽대와 주름을 뜻하며 지방층이 아니다. 실제 확장 직경과 전신 독성 소견을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Haustra를지방층으로오역한설명을결장팽대주름으로교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007189
