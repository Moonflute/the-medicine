---
type: qbank
schema_version: 1
id: medqa-us-train-004694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a4de13bd7000197f8773ec7f364c03c8c8eb27f613152435b53dcbba75ffa27
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 비대상성 심부전"
  - "체액 과다"
  - "박출률 감소 심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남성이 점점 심해지는 호흡곤란과 경한 흉부 불편감으로 응급실에 왔다. 일주일 전 경한 발열, 두통과 간헐적 야간 발한을 동반한 감기 같은 증상이 생겼다. 편안히 자려면 베개를 두 개 더 사용해야 했고 1~2일 전에는 심한 호흡곤란으로 잠에서 깨 놀랐다. 식사 변화는 없는데 일주일 동안 약 6파운드가 증가했다. 한 층의 계단을 오르거나 한 블록도 걷기 전에 숨이 찬다. 과거에는 경한 호흡곤란으로도 계단 4층과 6~7블록을 걸을 수 있었다. 관상동맥질환으로 5년 전 좌전하행동맥 스텐트와 이중 항혈소판요법을 받았고, 박출률 감소 심부전, 고혈압, 고지혈증과 제2형 당뇨병이 있다. 매일 술 2잔과 담배 한 갑을 35년 동안 피웠다. 체온은 98.6°F (37°C), 혈압은 145/90 mmHg, 맥박은 분당 102회, 호흡수는 분당 20회이다. 신체검사에서 간경정맥 반사 양성, 제3심음, 폐기저부 수포음과 양측 허벅지 중간까지의 함요부종이 보인다. 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 부메타니드
B. 카르베딜롤
C. 도파민
D. 밀리논

## 해설

혈압과 관류가 유지되는 급성 울혈성 악화에서는 A의 bumetanide로 체액과부하를 줄인다. Bumetanide는 헨레고리 굵은상행각 NKCC2를 억제하는 loop 이뇨제이지 ARNI가 아니다. 신기능·전해질·이뇨반응을 감시하며 저관류가 없는 환자에게 dopamine/milrinone을 일률적으로 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Bumetanide를 ARNI로 분류한 오류를 loop 이뇨제로 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004694
