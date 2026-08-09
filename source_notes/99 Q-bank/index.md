# 99 Q-bank

웹앱 QBank의 사용자용 원본 Markdown입니다. 문제 유형별 폴더를 분리하며, 생성 중간 산출물·API 원시 응답·체크포인트는 이 폴더에 두지 않고 `workspace_ops/qbank/`에서 관리합니다.

- `MedQA/` — 미국 임상증례형 객관식 문제
- `Theory/` — 질병·CC·약물 문서를 기반으로 생성한 이론 객관식 문제
- `KMLE/`, `ResidentBoard/`, `NEJM_case_challenge/` — 별도 출처 문제
- `WrongAnswers/` — 개인 오답 관리용 문서

빌드 시 `MedQA/`와 `Theory/`의 `type: qbank` 문서가 QBank 데이터셋으로 통합됩니다. 두 문제군은 웹앱에서 따로 선택하거나 함께 출제할 수 있습니다.
