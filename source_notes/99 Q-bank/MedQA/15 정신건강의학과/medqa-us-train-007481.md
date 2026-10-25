---
type: qbank
schema_version: 1
id: medqa-us-train-007481
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff9732f359714560a3ef2517fff859bb25b506fa2809062fbaaf86393a3041ac
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "비전형 우울증"
  - "플루옥세틴"
  - "MAO 억제제"
  - "세로토닌 증후군"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여자가 침대에서 나오지 않고 대부분의 날을 울거나 벽을 바라보며 보내어 어머니와 함께 내원했다. 증상은 3개월 전 시작되었다. 대부분의 시간 매우 슬프고 예전에 관심 있던 활동도 더 이상 흥미롭지 않다고 한다. 매일 밤 10시간 이상 자고 낮에도 몇 시간씩 낮잠을 잔다. 요리해 주는 어머니는 증상 전보다 훨씬 많은 양을 먹는다고 한다. 남자친구와 헤어지고 지역 대학 박사과정에서 퇴학당한 후 어머니와 함께 살게 되었으며 스스로를 부양하지 못하는 것에 죄책감을 느낀다. 2개월 전 비전형 우울증을 진단받아 플루옥세틴을 규칙적으로 복용 중이다. 활력징후와 신체검사는 정상이고 정신상태검사에서 우울한 기분과 편평한 정동이 보이며 자살사고는 없다. 다음 중 치료의 다음 단계로 금기인 것은 무엇인가?

## 선택지

A. 플루옥세틴을 계속하고 용량을 늘린다
B. 플루옥세틴을 감량하며 데시프라민으로 변경한다
C. 플루옥세틴을 계속하고 부프로피온을 추가한다
D. 플루옥세틴을 계속하고 페넬진을 추가한다

## 해설

플루옥세틴과 MAOI 페넬진을 병용하면 심각한 세로토닌 증후군 위험이 있어 금기이다. 플루옥세틴 중단 후 MAOI 시작 전에는 긴 반감기 때문에 최소 5주 등 충분한 휴약기간이 필요하며 상황에 따라 더 길 수 있다. 다른 선지의 전환·증강도 무조건 안전한 것은 아니며, 특히 플루옥세틴의 CYP2D6 억제로 데시프라민 노출이 증가할 수 있어 용량·전환 계획과 상호작용을 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007481

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. SSRI-MAOI 병용 금기 답 유지. 다른 전환·증강도 자동으로 안전하다는 단정 제거하고 플루옥세틴의 긴 휴약 필요성 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7cc62309-cb23-4888-afba-bb774658a748&type=display
