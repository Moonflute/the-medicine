# ECG membrane·리듬 보강 · v0.13.124

2026-10-29. 교육용 내부 검증이며 환자 ECG 검증이 아니다.

## 변경

- Hyperkalemia/QT의 Ventricular membrane을 LR-I에서 사람 TP06으로 변경했다. INa, ICaL, Ito, IKr/IKs/IK1, pump/exchanger, Ca²⁺ 구획 및 Na⁺/K⁺ 농도를 적분한다.
- Endo/M/Epi phenotype과 고정된 IKs 공간 분포를 추가했다. 문헌의 1–1.5배 범위로 Base→Apex 및 Endo→Epi 방향을 각각 변화시킨다. 전극·K⁺ 조건·목표 파형은 이 분포를 결정하지 않는다.
- QT 조절은 IKr conductance만 바꾼다. 같은 모델·같은 Geometry의 K⁺ 5.4/IKr 100%를 점선으로 비교한다.
- Infranodal block의 고정 불응 Timer를 연속적인 Voltage-dependent availability로 교체했다. His recovery 200–3,500 ms를 조절한다.
- AF에 PV-border focal drive 및 Atrial recovery 조절을 추가했다. 자동능을 끈 뒤 남은 Re-entry와 소실 여부도 계산 결과이며, Sinus rhythm으로 강제 전환하지 않는다.
- 리듬 ‘구간 이동’과 검사 RR은 실제 심실 Vm 상승 구간을 사용한다. 작은 His 반응이나 His보다 먼저 시작하는 PVC를 놓치지 않는다. 검출 결과는 Solver·ECG 출력에 되먹임되지 않는다.
- 원본 이론 노트를 갱신했다. 변경 UI는 기존 모델 설정에만 추가했으며, 활성 구간 검색은 기록 변경 시에만 실행한다.

## 수치 결과

`final/summary.json`은 최종 코드의 14개 조건 검사 결과다. 공통 Gain·원 전위로 비교했고 시간 정렬, Lead별 정규화, 파형 추가를 하지 않았다.

| Ionic 조건 | LV lateral APD90 | Lead II T peak | T half-height width |
|---|---:|---:|---:|
| K⁺ 5.4, IKr 100% | 302.85 ms | 0.36257 a.u. | 56 ms |
| K⁺ 7 | 295.75 ms | 0.37322 a.u. | 46 ms |
| IKr 45% | 326.10 ms | 0.34686 a.u. | 70 ms |
| IKr 200% | 271.75 ms | 0.34433 a.u. | 42 ms |

모두 연속 3박동에서 심실 본체 1,458개 구역이 활성화됐다. K⁺ 7의 T 진폭 증가는 작다. V1–V2의 T는 음성이며, V3는 작은 복합 파형으로 이 설정이 완전한 정상 성인 12유도나 임상 Hyperkalemia를 재현했다고 주장하지 않는다. K⁺ 10의 850 ms 경계 검사에서는 수치 발산 없이 Atrial/AV 전달 실패와 심실 Non-capture가 발생했다. 이를 K⁺ 10인 환자의 필연적 반응으로 해석하지 않는다.

### 회복·자동능 실험

- His recovery 200 / 2,000 / 3,500 ms에서 8초 내 완전한 심실 활성군은 각각 9 / 5 / 3회였다. 첫 조건에는 기록 끝 뒤로 이어지는 추가 His 활성도 있어, 단순 박동 개수만으로 전도비를 확정하지 않는다.
- 3,500 ms에서 His의 고정 0.5 기준을 넘는 표시는 없지만 심실 활성은 존재했다. 표시 기준을 억지로 낮추지 않고 실제 심실 Vm 상승을 읽는 탐색 기능으로 보완했다.
- Node 실행의 기본 AF는 8초까지 지속되고 심실 활성 간격 CV 약 0.30이었다. Focal drive 0%에서는 마지막 심실 활성군이 약 4.4초에 끝났다. Recovery 150 ms에서는 다른 불규칙 반응이 유지됐다. 브라우저의 Focal drive 0% 기록은 마지막 심실 활성이 약 5.67초에 시작했다. 이 민감한 재진입 모델의 개별 RR·소실 시각은 엔진별 부동소수점 차이에 영향을 받으며 정확한 시각을 임상 예측으로 제시하지 않는다. 두 입력 모두 실제 막전류/회복 변수를 변경한다.

## 검증

- `verify-ecg-pathologies.mjs`: 14개 조건의 전파·Fusion·PVC·AV block·Escape·AF·Ionic 결과·12-lead 항등식 통과. 오래된 Non-ionic 결과 재사용 옵션은 제거했다.
- `verify-ecg-human-membrane.mjs`: Geometry와 독립된 Endo/M/Epi 세포에서 K⁺의 Resting Vm/Phase 3/APD 변화, IKr의 양방향 APD 변화, 시간 간격 수렴 통과 (`isolated-cells.json`).
- `verify-ecg-ionic-convergence.mjs`: 0.05→0.025 ms에서 선택 조직의 활성/APD90 차이 최대 0.625 ms, 시간 정렬 없는 12-lead NRMSE 최대 1.945% (`convergence.json`).
- `verify-ecg-development-controls.mjs`: 조절값→조직 변수, 고정 Timer 부재, His marker 없이 심실 활성을 찾는 회귀 검사 통과.
- 변경 TS/TSX 범위 TypeScript·ESLint 및 원본 노트 구조/링크 검사 통과. 별도 전체 로컬 빌드는 하지 않았다.
- 실제 React 컴포넌트와 Worker를 로컬에서 실행했다. Hyperkalemia 선택→계산→12유도/Lead II 비교, AF 자동능 100→0% 입력→재계산→변경된 심실 활성 목록을 확인했다. 1,280×720에서 문서 크기도 1,280×720이며 주요 시각화·재생부가 한 화면에 들어온다. 브라우저 경고/오류 없음. 이미지: `hyperkalemia-12lead.png`, `hyperkalemia-focus.png`, `af-controls.png`.
- 배포 후에는 GitHub Actions 성공 여부만 확인한다.

## 한계와 근거

TP06은 Ventricles에 적용했다. Atria는 짧은 AP로 적응시킨 LR-I, SA/AV는 축약 MS 모델이며, His–Purkinje에는 Ventricular 수식을 사용한다. M-cell 위치·Geometry·결합도·공통 Gain은 교육용 가정이다. 두 주기 Warm-up은 장기 이온 정상상태를 보장하지 않는다. QRS 활성 분산이 빠르고, 균질 Torso·12유도 morphology·AF substrate에는 제한이 있다. 출력은 a.u.이며 임상 mV, QTc, 약물 효과, K⁺ 농도나 환자 위험을 예측하지 않는다. Ischemia와 Ionic 실험의 복합 적용은 아직 지원하지 않는다.

- [ten Tusscher & Panfilov, 2006](https://doi.org/10.1152/ajpheart.00109.2006): 사람 Ventricular 수식.
- [Physiome TP06](https://models.physiomeproject.org/e/80d/ten_tusscher_model_2006_epi.cellml/view): 수식·기준값 확인. 원본 소스 파일을 가져온 것이 아니라 수식을 독립 구현했다.
- [Sung et al., 2021](https://doi.org/10.3389/fphys.2021.740389): IKs의 Apicobasal/Transmural 분포 모델링 범위. 논문의 환자별 모델을 재현한 것은 아니다.
- [Corsi et al., 2017](https://www.nature.com/articles/srep42492): K⁺·Repolarization current·T-wave 기전 참고. 해당 Grandi/ORd 모델이나 혈청 K⁺ 추정기를 구현한 것은 아니다.

재실행: 앱에서 `npm run verify:ecg-pathologies`, `npm run verify:ecg-human-membrane`, `npm run verify:ecg-ionic-convergence`, `npm run verify:ecg-development-controls`. 입력별 원 기록은 `inspect-ecg-development.mjs NAME INPUT_JSON OUTPUT_DIR`로 생성한다.

## 정리

이전 승인 대상 `apps/medicine-web/tmp/ecg-pathology-review/`만 삭제했다 (9개 파일, 1.28 MiB). 앱 코드·원본 노트·기존 결과 자료는 보존했다. 이번 `tmp/ecg-human-review/`는 별도 승인을 받은 뒤에만 정리한다.
