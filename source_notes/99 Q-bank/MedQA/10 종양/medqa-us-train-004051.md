---
type: qbank
schema_version: 1
id: medqa-us-train-004051
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c5d57c54f4191f496571031198e21397189ef706dc584dbcac4efe9fa12af4a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "랑게르한스세포 조직구증"
  - "버벡 소체"
  - "골 병변"
  - "Langerhans cell histiocytosis"
related_disease_slugs:
  - MTAg7KKF7JaRL-uekeqyjOultO2VnOyKpCDshLjtj6wg7KGw7KeB6rWs7KadIChMYW5nZXJoYW5zIENlbGwgSGlzdGlvY3l0b3NpcykubWQ
question_type: 임상증례 객관식
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

2세 남아가 수주간 지속된 통증을 동반한 아래턱 잇몸 증식으로 내원했다. 외상이나 다른 중요한 질환 병력은 없다. 체온 37.0°C, 맥박 92회/분, 호흡수 24회/분이다. 구강 외 검사에서 왼쪽 아래턱에 4×2cm 종창이 보인다. 구강 내 검사에서 괴사성 가피로 덮인 미만성 홍반성 잇몸 종창이 있다. 두부 CT에서 하악, 상악, 왼쪽 후두부와 측두부를 침범하는 여러 연조직 밀도 병변이 보인다. 다음 소견 중 이 환자 질환의 가장 특이적인 지표는 무엇인가?

## 선택지

A. 거친 적색 근섬유
B. 근주위 및 근육다발 사이 위축
C. 버벡 소체
D. 근내막 염증세포 침윤과 근섬유 괴사

## 해설


소아의 잇몸 증식과 여러 두개·안면골 병변은 Langerhans 세포 조직구증(LCH)을 의심하게 한다. 전자현미경상 Birbeck granule(C)은 특징적인 막성 세포소기관이다. 조직학적 평가에서는 CD1a와 langerin(CD207) 등이 사용될 수 있다. LCH를 Graves병이라고 부르지 않으며 다른 선지의 근섬유 병리 소견과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004051 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Langerhans 세포 조직구증을 Graves병으로 잘못 연결한 질환명을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004051
