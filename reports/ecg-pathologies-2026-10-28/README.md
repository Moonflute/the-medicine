# ECG 계산 모델 확장 · v0.13.123

검토일: 2026-10-28. 내부 수치·인과 검증이며 환자 ECG에 대한 임상 검증이 아니다.

## 반영 범위

- AV nodal coupling, RBB/LBB 남은 결합도 조절.
- WPW Accessory pathway 3개 위치, PVC 국소 자극 위치·간격.
- Luo–Rudy I 기반 K⁺ 실험과 QT prolongation/shortening. His–Purkinje에도 Ionic 식을 적용하고 SA/AV는 축약 모델을 유지한다.
- AV recovery 기반 Mobitz I, His post-repolarization refractoriness 기반 2:1 Infranodal block, 독립적인 Junctional automaticity, 다초점·재진입 AF 실험.
- 8초 리듬 기록, 실제 His 활성으로 이동, 공통 시간축·감도, Ionic 기준 파형 비교. 기존 실시간 그리기·고정 전기장·Net dipole·수축 표시를 유지한다.

각 조건은 Vm·결합 전류 계산을 바꾼다. ECG 조각, RR 목록, 유도별 진폭/부호 보정, T/ST offset을 추가하지 않았다.

## 계산 결과

`summary.json`에 14개 조건의 계산 결과를 보존했다. Ionic 값은 동일한 Ionic 기준과 비교하며 기본 Mitchell–Schaeffer 모델과 비교해 질환 효과라고 판단하지 않는다.

| 조건 | 확인한 결과 |
|---|---|
| WPW | His 이전의 국소 심근 활성, 두 경로의 Fusion |
| PVC 기본값 | 국소 활성 → Retrograde His, 넓어진 활성 분산과 뒤따르는 긴 간격 |
| Mobitz I | 연속된 AV 전달 지연 증가와 비전도 |
| Infranodal 2:1 | 일정한 Conducted-beat latency와 2:1 전달 |
| Complete AV block | SA와 독립적인 Junctional 주기 약 1.30초 |
| AF | 8초 지속, 불규칙한 Ventricular response; Node 실행의 His RR CV 약 0.28 |
| Ionic 기준 | 연속 3박동 모두 심실 본체 1,458개 구역 활성; 1:1 AV 전달 |
| K⁺ 7 | 같은 LV lateral 구역의 Resting Vm 상승, APD90 약 298 ms |
| QT prolongation | 같은 구역 APD90 약 481 ms (기준 약 337 ms) |
| QT shortening | 같은 구역 APD90 약 244 ms |

APD90는 세포 모델 값이며 ECG의 QT/QTc가 아니다. 모든 유도는 a.u.이고 임상 mV 보정이 없다.

## 검증

- `verify-ecg-pathologies.mjs`: 전도·국소 자극·독립 Escape·리듬 지속·Ionic 변화 및 12-lead 항등식 통과.
- `verify-ecg-ionic-convergence.mjs`: 0.05 → 0.025 ms 비교 통과. 선택 구역 활성 시각 차이 최대 2.125 ms, APD90 차이 최대 1.125 ms. 시간 정렬이나 파형 보정 없이 12유도 NRMSE 최대 약 1.76% (`convergence.json`).
- 기존 `verify-ecg-forward.mjs` 회귀 검사 통과.
- 변경 소스의 TypeScript·ESLint 검사 통과. 임시 미리보기의 생성 JS는 소스 검사 대상에서 제외한 별도 설정을 사용했으며 프로젝트 설정은 변경하지 않았다.
- 로컬 미리보기에서 실제 Worker 계산, AF 8초 재생·종료, 시간축 간격, 한 화면 배치를 확인했다. 배포 후에는 배포 성공 여부만 확인한다.

## 남은 한계

- **Hyperkalemia의 Tall peaked T를 재현했다고 주장하지 않는다.** 현재 K⁺ 7에서 Lead II의 T peak는 기준보다 작다. 정상처럼 보이도록 출력에 임의의 T wave를 더하지 않았다. 인간의 조직별 세포 모델과 해부학·Torso 전도 모델이 더 필요하다.
- 2:1 전도만으로 Mobitz II를 확진할 수 없다. 따라서 메뉴는 Infranodal block · 2:1로 표시하며 다양한 Mobitz II 패턴 전체를 구현한 것으로 소개하지 않는다.
- AF는 Phenomenological substrate와 국소 자동능을 이용한 기전 실험이다. 사람의 PV sleeve·Fibrosis·Rotor map을 재현한 모델이 아니다. 민감한 비선형 계이므로 브라우저 엔진에 따라 개별 RR 시각은 달라질 수 있다.
- PVC의 일부 위치·간격에서는 Non-capture 또는 반복 활성이 생긴다. 고립된 PVC 한 개를 보장하도록 결과를 잘라내지 않는다.
- LR I는 Guinea-pig ventricular 기반이며, SA/AV·Atrial 적응과 축약 Geometry에는 별도의 한계가 있다. 환자의 K⁺·약물 효과·QTc·부정맥 위험 예측에 사용하지 않는다.

계산식·근거 원문은 `source_notes/05 Physiology/Interactive/ecg-arrhythmia.md`에 기록했다. 재실행: 앱 폴더에서 `npm run verify:ecg-pathologies`, `npm run verify:ecg-ionic-convergence`.
