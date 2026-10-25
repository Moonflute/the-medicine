---
type: qbank
schema_version: 1
id: medqa-us-train-005665
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c386a1d6e166e358286a150fbda6f03e88656fd51cee889d698c95376fff11c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "위식도 역류질환"
  - "흉골하 작열감"
  - "프로톤펌프억제제"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: management
difficulty: simple
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 흉골 뒤 흉통과 입안의 금속 맛을 평가받기 위해 진료실에 왔다. 대사증후군과 갑상선기능저하증 병력이 있으며 매일 레보티록신을 복용한다. 활력징후는 안정적이다. 경미한 불편감을 보이지만 의식은 명료하고 지남력은 정상이다. 복부는 방어 없이 경미한 압통이 있다. 병력과 신체검사에 근거할 때 가장 적절한 치료는 무엇인가?

## 선택지

A. 오메프라졸
B. 라니티딘
C. 비스무트 서브살리실레이트
D. 수산화마그네슘

## 해설

흉골뒤 통증과 입안의 역류 맛은 GERD 가능성이 있어 선택지 A의 PPI가 합리적이다. 다만 증상만으로 식도점막 손상이 확진되는 것은 아니며 흉통의 위험도에 따라 심장 등 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 역류 의심 omeprazole A는 유지하되 흉통만으로 식도손상 확정·심장원인 배제하지 않음.
- https://doi.org/10.14309/ajg.0000000000001538

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005665
