# ECG Ischemia 개선 · v0.13.126

기준: master e1d0ae8818f91ed581cea149ffcf15aa0d7e7ee1. 기본 작업 폴더에서 작업했으며 별도 worktree는 사용하지 않았다. 다른 작업의 의학 문서 수정은 보존하고 이번 배포에 포함하지 않는다.

## 원인과 변경

기존 모델은 Mitchell–Schaeffer 계수로 허혈을 근사했고 구역 간 연결은 Endocardium에만 있었다. 국소 Ionic 변화와 벽 전체의 정상·허혈 경계 전류가 불충분했다.

TP06에 Local extracellular K, ATP-dependent KATP/ICaL, pH-dependent Na availability를 적용했다. Resting Vm, AP amplitude, APD와 ST 높이를 직접 지정하지 않는다. Gap-junction coupling 저하는 별도의 현상론적 가정이다. 경계 Cable은 Endo–Epi 6개 층에서 전류를 전달하고 양쪽 부위의 대사 조건을 보간한다. 무손상 비교도 동일한 Ionic 확장·Geometry·Conductance를 사용한다.

ECG 생성부는 그대로이며 전극 전위에서 ST 보정·파형 평활화·유도별 Gain을 추가하지 않았다. UI의 초기 Ionic 감도 0.5×는 모든 유도·비교 기록에 공통인 표시 배율이며 사용자가 변경할 수 있다.

근거와 구현 가정:

- [Okada et al. 2020](https://doi.org/10.1186/s12576-020-00760-3): KATP, ATP-dependent ICaL, pH-dependent Na availability, Endo/Epi 차이, 보존된 Purkinje 조건.
- [Shaw & Rudy 1997](https://pubmed.ncbi.nlm.nih.gov/9349389/): Acute ischemia의 Ionic 변화와 흥분·전도 변화.
- [ten Tusscher & Panfilov 2006](https://doi.org/10.1152/ajpheart.00109.2006): 사람 Ventricular ionic model.
- 상세 식·보간과 생략 항은 `source_notes/05 Physiology/Interactive/ecg-arrhythmia.md`의 `regional-ischemia`에 기록했다. Okada의 ORd/Bidomain 원 모델을 복제했다고 주장하지 않는다.

## 촬영 → 피드백 → 수정

1. 기존 화면: LV anterior의 V4 ST−TP 약 +0.0477 a.u.로 변화가 작았다. `before-12lead.jpg`.
2. Ionic 1차: 세포의 Resting/Plateau 변화는 확인됐지만 Endocardial 연결만으로 전체 경계 전류를 표현하지 못했다. 벽 전반의 Cable과 Border zone을 추가했다. ST 표식이 작은 Cable의 늦은 활성까지 전체 QRS로 취급하던 문제도 발견했다.
3. Ionic 2차: V2–V4에 QRS 뒤의 상승 구간이 나타났다. 손상 조직의 조기 AP dome 소실을 전체 T onset으로 오인하지 않도록 Remote myocardium의 회복과 전체 주요 심근의 늦은 Upstroke를 구분했다. Cable 전류는 ECG에서 제거하지 않았다.
4. 최종 실제 앱: `final-anterior-v4.jpg`, `final-anterior-12lead.jpg`. source TSX와 실제 Web Worker를 사용한 로컬 미리보기, 1280×720. 주요 시각화·조작부가 한 화면에 들어간다. Next.js 전체 빌드는 로컬에서 실행하지 않았다.
5. 부위 대조: `final-lateral-12lead.jpg`에서 V5–V6 상승과 V1–V2 하강을 확인했다. `final-partial-wall-12lead.jpg`는 더 약한 동일 대사 조건에서 깊이 비교용 원 계산 보고서다. 모든 이미지가 환자 ECG가 아닌 시뮬레이션 결과다.

## 수치 결과

공통 전극, 70/min, dt 0.05 ms, 저장 2 ms. TP 20–80 ms, ST는 주요 심근 Upstroke 종료 후 35–65 ms. 임상 J-point 자동 판독이나 mV 보정이 아니다.

| 조건 | 대표 ST−TP (a.u.) | 관찰 |
| --- | --- | --- |
| LV anterior, 전체 벽, s=0.7 | V2 +0.4026 / V3 +0.6379 / V4 +0.6042 | 상승 구간, 주요 심근 Upstroke 종료 284 ms와 Remote recovery 482 ms 구분 |
| LV lateral, 전체 벽, s=0.7 | V5 +0.3173 / V6 +0.2937 / V1 −0.1660 | 부위에 따라 상승·반대 방향 변화 |
| LV anterior, 깊이 50%, s=0.35 | V4 −0.0877 | Partial-wall depression |
| LV anterior, 전체 벽, s=0.35 | V4 +0.0288 | 같은 대사 조건에서도 침범 깊이에 따라 방향 차이 |
| LV anterior, 깊이 50%, s=0.7 | 해석 보류 | 강한 손상은 지연 활성·회복 중첩. 깨끗한 ST depression으로 간주하지 않음 |

높이는 검증 목표값이나 Solver 입력이 아니다. s=0/0.7/1은 K 5.4/9/12 mM, ATP 10/1/0.1 mM, pH 7.4/6/6으로 연결하는 고정 대사 도전 가정이다. 발병 시간이나 임상 허혈 중증도 변환식이 아니다.

## 수행한 검증

- 단일 세포 K/ATP/pH Ablation: K가 Resting Vm, ATP가 Plateau, pH가 Na Upstroke를 바꾸는지 각각 확인. Endo/Epi 반응 및 dt 0.025 ms 대조 통과.
- 최종 Anterior, Lateral, Partial-wall, 약한 Transmural에서 전극 전위 독립 재구성, Einthoven/Augmented 항등식, 라벨 변경 불변성, Zero-source, Uniform-Vm gauge, 측정의 비파괴성 통과.
- Anterior dt 0.05 → 0.025 ms: V4 ST−TP 0.604150 → 0.603833. 원 12유도 파형의 Range-normalized RMSE 최대 0.925%. 첫 박동의 ST 값과 다음 박동 약 0.601886 비교. 이것은 수치 일관성이지 임상 정확도 지표가 아니다.
- 깊이/스트레스 0의 Mesh·계수 완전 복원, 같은 위치·Geometry, 비허혈 Purkinje, Scar 연결 차단 검사 통과.
- 기존 `verify-ecg-forward`, `verify-ecg-human-membrane`, `verify-ecg-fields`, `verify-interactive-improvements`, 수정 범위 ESLint, focused TypeScript 검사 통과.
- React 검토: 입력/표시 상태 분리, 계산은 기존 Worker 유지, 기존 취소 처리 유지, 허혈 해제에서 동일 Ionic substrate 보존, 미검증 복합 조건 차단, 불필요한 회복 시상수 조절기 숨김, 키보드/접근성 레이블 유지.

재현 명령은 `apps/medicine-web`에서 실행한다:

```sh
node --experimental-strip-types scripts/verify-ecg-ischemia-mechanisms.mjs
node --experimental-strip-types scripts/verify-ecg-ischemia.mjs --structural-only
node --experimental-strip-types scripts/verify-ecg-ischemia.mjs
node --experimental-strip-types scripts/inspect-ecg-ischemia.mjs
```

`verify-ecg-ischemia.mjs` 기본은 대표 부위·깊이 대조, `--all`은 나머지 부위와 강한 Partial-wall·Scar까지 실행한다. 이번에 모든 조합을 재검증했다고 주장하지 않는다. 최종 대표 결과와 시간 간격 대조는 `summary.json`, 단일 세포 결과는 `isolated-cells.json`에 보존했다.

## 남는 한계

- 희소 Graph와 균질 무한 도체다. 해부학적으로 닫힌 Ventricular mesh, Fiber orientation, 실제 Torso/Bidomain 경계 및 공간 격자의 완전한 수렴은 아직 검증하지 않았다.
- ATP/K/pH는 고정 입력이다. 산소·관류, 대사 시간 변화, ATP/pH-dependent Na/K ATPase kinetics, 재관류를 직접 풀지 않는다. Purkinje도 실제 인간 Purkinje 세포 모델이 아닌 근사다.
- 표준형 정상 파형의 모든 세부 형태, 모든 Coronary territory, 모든 심박수·복수 병변을 임상적으로 재현한다고 볼 수 없다. LV inferior 독립 구역은 없다.
- 병변의 AP dome 소실과 작은 Cable의 늦은 활성은 그대로 ECG에 기여한다. 자동 ST 구간은 보조 표식이고, 원 파형을 대신하지 않는다.
- 일반 전도·K/QT·리듬 조건은 기존 모델을 유지한다. Ischemia와의 복합 조건은 UI에서 지원하지 않는다.
