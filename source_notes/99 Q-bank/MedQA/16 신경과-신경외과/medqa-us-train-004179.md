---
type: qbank
schema_version: 1
id: medqa-us-train-004179
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ebd6ee6104c3658c36a285466a746491735ca5e3cf5a32751d8fb4b729f0516
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "경추 신경근병증"
  - "C6 신경근"
  - "추간판 탈출증"
question_type: 임상증례 객관식
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-y2lOqwhO2MkO2DiOy2nOymnSAoSGVybmlhdGVkIEludGVydmVydGVicmFsIERpc2MpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여자가 3개월간 간헐적으로 심한 왼쪽 목, 어깨, 팔 통증과 왼손 이상감각으로 내원했다. 통증은 왼쪽 팔뚝의 노쪽과 엄지, 검지로 방사된다. 친구의 천막 설치를 도운 뒤 처음 증상을 느꼈다. 중대한 질환의 가족력은 없다. 활력징후는 정상이다. 머리를 왼쪽 아래로 신전·회전하고 아래쪽으로 압력을 가하면 왼쪽 팔뚝 노쪽과 엄지에 이상감각이 생긴다. 저항에 맞서 왼쪽 손목을 신전할 때 근력이 약하고, 왼쪽 상완요골근 반사는 1+, 오른쪽은 2+이다. 양측 요골맥박은 만져진다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 손목터널증후군
B. 척수공동증
C. 흉곽출구증후군
D. C5-C6 추간판 탈출증

## 해설

노쪽 전완·엄지/검지로 방사되는 통증과 손목 신전 약화, 상완요골근 반사 저하는 C6 신경근병증을 시사한다. C5–C6 추간판 탈출(D)이 C6 신경근을 압박할 수 있다. 목을 신전하고 병변 쪽으로 회전한 뒤 아래로 축성 압박을 가해 증상이 재현되는 Spurling 검사 양상도 이를 지지한다. 이는 목을 앞으로 굽히는 검사라는 뜻이 아니다. 손목터널증후군은 목 유발통과 상완요골근 반사저하를 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 목 신전·회전 및 축성 압박의 Spurling 검사를 전방 움직임으로 설명한 오류를 교정하고 C5–6 추간판/C6 신경근을 구별했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004179
