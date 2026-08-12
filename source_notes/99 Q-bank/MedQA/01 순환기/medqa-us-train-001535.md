---
type: qbank
schema_version: 1
id: medqa-us-train-001535
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10f3c9773a1f741896a42a535ca1862864b3a66c1a0d232250699ea61336fbe1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "torsades de pointes"
  - "QT prolongation"
  - "clarithromycin toxicity"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uLpO2YleyEsSDsi6zsi6Qg67mI66elIChUZFApIChUb3JzYWRlcyBkZSBQb2ludGVzIChUZFApLm1k
question_type: mechanism
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

중증 폐렴으로 입원한 지 4일째 76세 여성이 갑자기 반응이 없어졌다. 심장질환 병력은 없다. 클라리트로마이신과 세프트리악손을 복용 중이다. 경동맥 맥박이 만져지지 않는다. 단일 유도 심전도 기록이 제시되어 있고 이전 심전도에서 QT 연장이 보였다. 검사에서 Na+ 145 mEq/L, K+ 6.1 mEq/L, Ca2+ 10.5 mEq/L, Mg2+ 1.8 mEq/L, 갑상샘자극호르몬 0.1 μU/mL이다. 심폐소생술을 시작했다. 다음 중 최근 상태를 일으킨 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 고칼슘혈증
B. 갑상샘중독증
C. 클라리트로마이신
D. 패혈성 쇼크

## 해설


QT 연장이 기존에 있었고 클라리트로마이신은 K⁺ 차단제로 QT 연장을 악화시켜 토르사데스(Torsades de pointes)를 유발한다. 환자는 급성 무맥성 실신과 고칼륨혈증을 보였으며, 클라리트로마이신 복용이 가장 가능성 높은 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001535
