---
type: qbank
schema_version: 1
id: medqa-us-train-000776
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b57e7300940d2c3018dca892834afb7172d73688b0bbe83e21cacacd7031209a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "acute cholecystitis"
  - "atrial fibrillation"
  - "necrotic small intestine"
  - "thromboembolism"
  - "superior mesenteric artery occlusion"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDUg7Iug7J6lL-yLoOuPmeunpSDtmIjsoITsg4nsoITspp0gKFJlbmFsIEFydGVyeSBUaHJvbWJvZW1ib2xpc20pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: ethics
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 남성이 6시간 전 갑자기 시작된 복통으로 응급실에 내원했다. 10점 척도에서 통증은 8~9점이라고 답했다. 복통은 우상복부에서 가장 심하다. 환자는 심방세동과 고지혈증 병력이 있다. 체온은 38.7°C, 맥박은 110회/분, 혈압은 146/86 mmHg이다. 환자는 급성 병색을 보인다. 신체 검진상 복부 팽만과 전 복부의 압통 및 방어근 긴장(guarding)이 관찰되나 반발통은 없다. 머피 징후(Murphy's sign)는 양성이다. 우상복부 초음파상 담낭벽 비후, 담낭 내 슬러지, 결장 주위 지방 침윤(pericolic fat stranding)이 확인되었다. 환자는 급성 담낭염으로 입원하여 담낭절제술에 동의했다. 환자의 아내가 의료 대리인(healthcare power of attorney, POA)이지만 출장 중이다. 오늘 환자와 함께 온 사람은 형제이다. 마취 유도 후, 외과의는 담낭을 제거하던 중 상장간막동맥(superior mesenteric artery)의 분지를 폐쇄하는 큰 혈전색전증으로 인해 소장의 일부가 괴사된 것을 발견했다. 치료를 위해서는 소장 절제술 및 혈전내막절제술을 추가로 시행해야 한다. 다음 중 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. 환자가 동의할 수 있을 때까지 진정 상태를 줄인다
B. 동의를 구하지 않고 추가 수술을 진행한다
C. 대기실에 있는 환자의 형제에게 동의를 구한다
D. 환자의 의료 대리인(POA)에게 연락하여 동의를 구한다

## 해설


마취 중 발견한 장괴사와 장간막 동맥 폐색은 지연하면 추가 장손상과 생명 위험이 생기는 응급상황이다. 환자가 동의할 수 없고 지정 대리인에게 즉시 동의를 받을 수 없어 처치가 지연된다면 필요한 추가 수술을 시행할 수 있으므로 B가 적절하다. 가능하면 치료를 지연시키지 않는 범위에서 아내에게 연락하되 연락 성공을 기다리며 괴사 장 치료를 미루지 않는다. 응급성·판단과 연락 시도를 기록하고 수술 후 환자와 대리인에게 설명한다. 단순히 마취 중이라는 이유로 비응급 추가 수술을 임의 시행할 수 있다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000776 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정답 B와 반대로 POA 동의 D를 권한 해설을 응급 수술 동의 예외로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000776
