---
type: qbank
schema_version: 1
id: medqa-us-train-009893
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52e8fcd6ab0a9b33836464163359c11cfe6e775fa2f7aea4e084499e51f55d3a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "복막염"
  - "복강 내 천공"
  - "급성 복증"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDrs7Xspp0gKEFjdXRlIEFiZG9tZW4pLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

36세 여성이 갑자기 시작된 심한 전반적 복통으로 응급실에 이송되었다. 통증은 지속적이며 강도는 10점 만점에 9점이다. 고혈압, 고지혈증, 만성 요통이 있다. 월경은 28일 간격으로 규칙적이고 중등도 양으로 4일간 지속된다. 마지막 월경은 2주 전이었다. 한 남성 파트너와 성관계를 하며 콘돔은 일관되게 사용하지 않는다. 15년 동안 매일 담배 한 갑을 피웠고 주말에 맥주 2~3잔을 마신다. 라니티딘, 히드로클로로티아지드, 아토르바스타틴, 이부프로펜을 복용한다. 아파 보이고 움직이려 하지 않는다. 체온 38.4°C, 맥박 분당 125회, 호흡수 분당 30회, 혈압 85/40 mmHg이다. 복부는 팽창되고 타진 시 고창음이 나며 전반적인 압통, 경직, 반발통이 있고 장음은 들리지 않는다. 백혈구 14,000/mm³, 헤마토크릿 32%이다. 다음 중 이 환자 통증의 가장 가능성 높은 원인은?

## 선택지

A. 파열된 자궁외임신
B. 장폐색
C. 천공
D. 대장직장암

## 해설


갑작스러운 전반 복통, 움직임 회피·경직·반발통·장음소실과 발열/쇼크는 복막염을 동반한 위장관 천공(C)을 강하게 시사한다. Ibuprofen·흡연력은 소화성 궤양 천공 가능성을 높인다. 단순 장폐색이나 대장암만으로 전체 급성 양상을 설명하기 어렵다. 다만 가임 여성의 불규칙한 피임 상황에서는 신속 β-hCG 등으로 자궁외임신도 평가하며 최근 월경만으로 임신을 완전히 배제하지 않는다. '급성복통·저혈압의 가장 흔한 원인은 언제나 장천공'이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009893 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 쇼크·복막염을 모든 환자의 최빈 장천공으로 일반화하지 않고 NSAID 등 실제 사례 근거로 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009893
