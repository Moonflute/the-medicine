begin;

with review_values (
  id,
  payload_hash,
  proposed_documents,
  action,
  rationale,
  confidence,
  flags,
  needed_document,
  manifest
) as (
  values
    ('QB-PF2026-V02-OG-Y2022-0002', '65a7ad781951d22747e8539cd32aea26', '[]'::jsonb, 'no-suitable-document', '기계식 인공판막을 가진 임신 초기 환자에서 와파린의 태아독성을 피하면서 항응고를 유지하도록 헤파린으로 전환하는 문항이다. 특정 판막질환이 아니라 임신 중 인공판막 항응고가 핵심이며 이에 맞는 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '임신 중 기계판막 항응고요법', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2022-0003', '407cd71754be2afd3f7fed160254ce7b', '[]'::jsonb, 'no-suitable-document', '만삭에 불규칙 수축이 있으나 2시간 동안 자궁경부 변화가 없는 가진통을 진단하고 귀가 교육하는 문항이다. 잠복기 지연은 실제 분만진통의 진행 이상이므로 대체 연결하면 안 된다.', 'high', '["missing-exact-document"]'::jsonb, '진진통과 가진통의 감별', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2022-0020', 'db9af41ed67619d5db7a4ea7cf08def5', '[]'::jsonb, 'no-suitable-document', '다분만 고령 여성의 외음부 돌출과 배뇨 곤란을 근거로 골반장기탈출증을 진단한다. 카탈로그의 자궁 탈출은 하위 형태 하나에 불과하고 사진에서 탈출 장기를 확정할 수 없으므로 임의로 좁히지 않는다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '골반장기탈출증 (Pelvic Organ Prolapse)', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2023-0001', '144ac8f20c90dd02c8b573de44b5fa85', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg7YOc7JWEIOqwkOyLnCAoRmV0YWwgTW9uaXRvcmluZykubWQ","title":"임신 중 태아 감시 (Fetal Monitoring)"}]'::jsonb, 'add', '태아심박동의 sinusoidal pattern을 판독하고 중증 태아빈혈을 원인으로 고르는 문항이다. 태아빈혈 개별 문서가 없으며 검사 패턴 해석이 핵심이므로 태아 감시 문서가 적절하다.', 'high', '["image-dependent"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2023-0003', '1ecfd4251b1664cd46198d81ee2407e5', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg7YOc7JWEIOqwkOyLnCAoRmV0YWwgTW9uaXRvcmluZykubWQ","title":"임신 중 태아 감시 (Fetal Monitoring)"}]'::jsonb, 'add', '진통 중 태변착색과 비정상 태아심박동을 함께 해석해 태아곤란으로 즉시 분만할지를 결정한다. 특정 감속형보다 전체 감시장치 판독과 처치가 핵심이므로 태아 감시 문서가 적절하다.', 'medium', '["image-dependent","explanation-conflict"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2023-0018', '6a40bc291ad576e0ad12ba0213f8d9e7', '[]'::jsonb, 'no-suitable-document', '폐전이가 동반된 자궁 평활근육종의 진행성 병기 치료로 항암화학요법을 선택한다. 자궁근종은 양성 평활근 종양으로 별개이며 카탈로그에 자궁 평활근육종 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '자궁 평활근육종 (Uterine Leiomyosarcoma)', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2023-0019', '6fd5fecc3f7059bb423d1a73f2d8bcf1', '[]'::jsonb, 'no-suitable-document', '복강 내 젤리 같은 점액성 물질로 복막가성점액종을 진단하고 흔한 충수돌기 원발을 확인하는 문항이다. 난소암은 감별 배경이며 카탈로그에 복막가성점액종 또는 충수 점액성 종양 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '복막가성점액종 및 충수 점액성 종양', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2024-0003', 'eba8c04e9b07a1eb49d4025d10d2adc9', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-unpOuPhSAoU3lwaGlsaXMpLm1k","title":"임신 중 매독"}]'::jsonb, 'add', '임신 초기 VDRL 양성에서 treponemal 확진검사를 먼저 시행하는 산전 매독 선별·확진 문항이다. 일반 매독 문서보다 임신 중 매독 특수집단 문서가 더 좁고 정확하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2026-0005', '4385f44d7d3e459f41f1468d231cfa05', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA","title":"산후출혈"}]'::jsonb, 'add', '분만 3주 뒤 소량의 갈색 출혈이 정상 오로인지 후기 산후출혈인지 감별하고 관찰을 선택하는 문항이다. 진단은 정상 오로이지만 후기 산후출혈의 원인·위험 신호 배제가 정답 판단의 중심이므로 산후출혈 대표문서가 관련 이론으로 유용하다.', 'medium', '["broader-than-ideal-target"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2026-0014', '4e626b33d8890a12af8bc3ae42ade1a4', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k","title":"불임 (Infertility)"}]'::jsonb, 'add', '1년간 임신 실패한 여성의 기초체온표를 이용해 배란 후 프로게스테론과 황체 기능을 해석한다. 단순 월경주기 생리 문항과 달리 불임 평가 맥락이 명시되어 있어 불임 문서가 적절하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-PE-BANK-0001', 'dad428f45f8831e7f99e35b036187939', '[]'::jsonb, 'no-suitable-document', '6개월 정상 발달 이정표를 직접 묻는 문제이며, 병적 발달지연 문서에 우회 연결하는 것보다 정상 발달 총론 문서가 필요하다.', 'high', '["missing-exact-document"]'::jsonb, '소아 정상 성장·발달', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0002', '795460da406a113d2dbcfa926b68e51e', '[]'::jsonb, 'no-suitable-document', '유지량과 기존 소실량을 합산하는 소아 탈수 수액 계산 문제로, 현재 카탈로그에 해당 총론 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0022', '3ad410a52d4abddb32a93779c087f5a2', '[]'::jsonb, 'keep-drug-only', '정답은 와파린의 INR 기반 효과 모니터링이며 기존 Warfarin 약물 문서가 정확하다. 특정 질환 연결은 불필요하다.', 'high', '["drug-theory-sufficient"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0023', '4534c93ea5adc994ff3c3e82f72666cd', '[]'::jsonb, 'no-suitable-document', '10% 탈수에서 초기 20 mL/kg 급속 수액량을 묻는 전형적인 소아 탈수 처치 문제다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0043', 'c6cc5ab7487700b5b44546bc79bebc64', '[]'::jsonb, 'no-suitable-document', '중증 탈수에서 초기 생리식염수 20 mL/kg을 계산하는 문제다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0044', '77f92b5321c443b6d3b10d67461ef9bb', '[]'::jsonb, 'no-suitable-document', '생후 7일 고암모니아혈증의 초기 식이·대사 처치를 묻지만 해당 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '신생아 고암모니아혈증 및 요소회로장애', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0053', '38ccbe56d0fe22c7d51849945a9b52dd', '[]'::jsonb, 'no-suitable-document', '빨기-삼키기-호흡 협응이 가능한 재태연령과 경구영양 시작 기준을 묻는 신생아 영양 문제다.', 'high', '["missing-exact-document"]'::jsonb, '미숙아·신생아 영양', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0061', 'd69dda562849f4d560a1e27229e4632a', '[]'::jsonb, 'no-suitable-document', '2세 아동의 정상 미세운동 발달 이정표를 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 정상 성장·발달', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0077', '98adde3a654402c1abfb3f3cee4cd89e', '[]'::jsonb, 'no-suitable-document', '계단 보행과 간단한 문장 사용 시기를 묻는 정상 발달 이정표 문제다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 정상 성장·발달', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0078', '66d02e84d24df81b1fc7e55013f24725', '[]'::jsonb, 'no-suitable-document', '생우유 시작 시기와 이유식 시행 원칙을 직접 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '영아 영양 및 이유식', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0090', 'c052c0c2a9cd49dc7c6071e7039d9e1f', '[]'::jsonb, 'no-suitable-document', '오펜하임 반사의 진찰법을 식별하는 신경학적 진찰 문제다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '소아 원시반사와 병적반사', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0095', 'bf57909c116db19b016b8bad2fc3d444', '[]'::jsonb, 'no-suitable-document', '수유·울음에서 악화되고 복와위에서 호전되는 영아 흡기성 천명의 진단과 경과관찰을 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '후두연화증', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0096', 'cfac75d8d41362396689d81e00638351', '[]'::jsonb, 'no-suitable-document', '2세의 미세운동 발달인 직선 모방을 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 정상 성장·발달', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0097', 'c0a2f4acbc824a8e10c11022a1a32dd0', '[]'::jsonb, 'no-suitable-document', '5개월 영아의 필요 열량과 이유식·생우유 원칙을 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '영아 영양 및 이유식', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0098', 'f848e1e0595fd3f50730fbae1bfb6f7a', '[]'::jsonb, 'no-suitable-document', '연령별 소변·혈색소·혈압·지질 선별검사의 시점을 묻는다.', 'high', '["missing-exact-document"]'::jsonb, '소아 건강감시 및 선별검사', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0099', 'a1cf3b5a2fbe88e3cdf48cd00afa1921', '[]'::jsonb, 'no-suitable-document', '중증 탈수의 유지량과 결핍량을 합산하는 24시간 수액 계산 문제다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0102', '2fd5cf2d1c82c8524b180cc31988fcc6', '[]'::jsonb, 'no-suitable-document', '심박수·호흡·자극반응·근긴장·피부색으로 Apgar 점수를 계산한다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, 'Apgar 점수와 신생아 초기평가', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0113', '2ea346a49bc91e0c717d1ff668eff568', '[]'::jsonb, 'no-suitable-document', '10개월의 대운동·언어 반응 발달 이정표를 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 정상 성장·발달', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0114', '6c342c83ef0e82b8914b9bdaa6b1506c', '[]'::jsonb, 'no-suitable-document', '성공적인 모유수유 원칙과 인공 젖꼭지 회피를 묻는다.', 'high', '["missing-exact-document"]'::jsonb, '모유수유', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0115', '72fdd4b2b45d5634d55ba5d4029bffd5', '[]'::jsonb, 'keep-drug-only', '글루코코르티코이드 역가 비교의 기준 약물을 묻고 있어 Hydrocortisone 약물 문서가 정확하다.', 'high', '["drug-theory-sufficient"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0166', '72445afd0ece2bde628394487499176d', '[]'::jsonb, 'no-suitable-document', '그림 모방 능력으로 미세운동 발달 연령을 평가하는 문제다.', 'medium', '["missing-exact-document","recurring-topic","image-dependent"]'::jsonb, '소아 정상 성장·발달', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0167', '604c534ee00fb5e18cfb71e621c60c01', '[{"type":"cc","slug":"7JqU7Iuk6riI","title":"요실금"}]'::jsonb, 'add', '7세 야간 유뇨증의 1차 행동치료를 묻는 문제로 요실금 접근 문서가 가장 가까우며, 기존 Desmopressin 약물 연결은 보존한다.', 'medium', '["cc-approach"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0169', '84e1b9fe61242ac31ebea154464f32dc', '[]'::jsonb, 'no-suitable-document', '유지량·기존 결핍량·지속 소실량을 모두 합산하는 소아 수액 계산 문제다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0170', 'e8933630e1276ed2725324c329ffd19c', '[]'::jsonb, 'no-suitable-document', '소변 FeCl3 검사가 유용한 선천대사질환으로 단풍당뇨증을 식별하는 문제다.', 'high', '["missing-exact-document"]'::jsonb, '단풍당뇨증', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0171', '7871601038e16e86456a1c120b5412cf', '[]'::jsonb, 'no-suitable-document', '활력 있는 신생아의 태변 착색 양수 처치를 묻는 문제로, 이미 발생한 태변흡인증후군 문서에 연결하면 학습 포인트가 왜곡된다.', 'high', '["missing-exact-document","avoid-near-match"]'::jsonb, '태변 착색 양수와 신생아 초기 처치', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0172', 'e40375e808e7df193dbd74c150a01933', '[]'::jsonb, 'no-suitable-document', '바이러스 전구증상 뒤 뇌압상승과 급성 간기능 이상을 보이는 라이 증후군의 치료를 묻는다.', 'high', '["missing-exact-document"]'::jsonb, '라이 증후군', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0176', 'ec67680cb75896b3965ee57961d4d8ed', '[{"type":"cc","slug":"7J2Y7Iud7J6l7JWg","title":"의식장애"}]'::jsonb, 'add', '눈뜨기·언어·운동 반응으로 Glasgow coma scale을 계산하는 의식장애 평가 문제다.', 'high', '["cc-approach"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0183', 'b41351bc5e71ccc87a8e9fc118badcc7', '[]'::jsonb, 'keep-drug-only', '천식 자체보다 theophylline 최저농도 채혈 시점이 정답을 결정하므로 기존 약물 문서만 유지한다.', 'high', '["drug-theory-sufficient","incidental-disease-context"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0184', 'f4d901c95291a070ae30d689cd3ba5f2', '[]'::jsonb, 'no-suitable-document', 'Schaefer 반사의 유발 방법을 식별하는 신경학적 진찰 문제다.', 'medium', '["missing-exact-document","image-dependent"]'::jsonb, '소아 원시반사와 병적반사', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0189', '3e1f858ee0f3b9d7f88b8334cfb2cd0e', '[]'::jsonb, 'no-suitable-document', '탈수에서 농축뇨와 요중 나트륨 감소 등 신장 보상 소견을 묻는다.', 'high', '["missing-exact-document","recurring-topic","image-dependent"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0201', '122262a4506977402d05cebd9136ecd7', '[{"type":"disease","slug":"MTEg7Jm46rO8L-yZuOqzvOyggSDrj4Tqtawg67CPIOqzte2GtSDtlITroZzthqDsvZwgKFN1cmdpY2FsIFRvb2xzIGFuZCBDb3JlIFByb3RvY29scykubWQ","title":"외과적 도구 및 공통 프로토콜 (Surgical Tools and Core Protocols)"}]'::jsonb, 'add', '절단침의 단면과 피부 봉합 적응을 묻는 외과 도구 문제여서 해당 도구·프로토콜 문서가 직접적이다.', 'high', '["procedure-topic","image-dependent"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0210', '5b2a7fe90bcdd2bb8a83ca4e1f912bd4', '[]'::jsonb, 'no-suitable-document', '5개월 이하 영아에서 사용하는 고유량 산소 후드를 식별하는 술기·장비 문제다.', 'high', '["missing-exact-document","procedure-topic"]'::jsonb, '소아 산소공급 장치', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0213', 'e1955041bdfde655b012ee129b0d5789', '[]'::jsonb, 'no-suitable-document', '소아 혈압 측정의 커프 크기와 Korotkoff phase를 묻는 진찰법 문제로 고혈압 질환 문서에 억지로 연결하지 않는다.', 'high', '["missing-exact-document","procedure-topic"]'::jsonb, '소아 활력징후 측정과 건강감시', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0226', '933cfe6cc50170fb9ceb48ecd656b2b0', '[]'::jsonb, 'no-suitable-document', '할리퀸 색조·독성 홍반·몽고반·대리석 피부가 정상 신생아 피부 소견임을 묻는다.', 'high', '["missing-exact-document"]'::jsonb, '정상 신생아 신체진찰', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0227', '703cb0acd55162677741e1c55e835228', '[]'::jsonb, 'no-suitable-document', '분만 직후 다섯 항목으로 Apgar 점수를 계산하는 문제다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, 'Apgar 점수와 신생아 초기평가', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-BANK-0232', '11da63c064b51bd97f106655fe273023', '[]'::jsonb, 'keep-drug-only', '무기질코르티코이드 효과가 가장 적은 dexamethasone 선택 문제로 기존 약물 문서가 충분하다.', 'high', '["drug-theory-sufficient"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2017-0001', 'd4c757482b1074fcb35686f99788c5fd', '[]'::jsonb, 'no-suitable-document', '10% 체중감소와 무뇨가 있는 중증 탈수에서 초기 20 mL/kg 생리식염수 투여량을 묻는다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 탈수 및 수액요법', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2017-0016', 'fee9bbca0a84e7e655e2c2b240e45a32', '[{"type":"disease","slug":"MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k","title":"성조숙증 (Sexual Precociousness)"}]'::jsonb, 'add', '8세 이전 유방 발달·골연령 증가·LH 상승으로 중추성 성조숙증을 진단하고 GnRH 작용제를 선택한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2020-0001', 'bd436ba7f041497c3155583f00d85998', '[{"type":"disease","slug":"MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k","title":"성조숙증 (Sexual Precociousness)"}]'::jsonb, 'add', '정상 사춘기 시작과 성조숙증의 연령·골연령 기준을 감별하는 문제여서 성조숙증 문서가 관련 이론을 직접 제공한다.', 'high', '["differential-normal-vs-disease"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2020-0002', '56e2d8705fa8168094a624029dcbf150', '[]'::jsonb, 'no-suitable-document', '울음 뒤 청색증과 일시적 의식소실, 정상 심전도·뇌파를 보이는 청색증형 호흡중지발작의 부모 교육을 묻는다.', 'high', '["missing-exact-document"]'::jsonb, '호흡중지발작', 'phase1-unlinked-pediatrics.json')
),
prepared as (
  select
    c.id,
    c.payload,
    c.index_data,
    v.action,
    v.rationale,
    v.confidence,
    v.flags,
    v.needed_document,
    v.manifest,
    coalesce((
      select jsonb_agg(document)
      from jsonb_array_elements(coalesce(c.payload->'relatedDocuments', '[]'::jsonb)) document
      where document->>'type' = 'drug'
    ), '[]'::jsonb) || v.proposed_documents as final_documents,
    coalesce((
      select jsonb_agg(document->>'slug')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'disease'
    ), '[]'::jsonb) as final_disease_slugs,
    coalesce((
      select jsonb_agg(document->>'title')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'disease'
    ), '[]'::jsonb) as final_disease_terms,
    coalesce((
      select jsonb_agg(document->>'slug')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'cc'
    ), '[]'::jsonb) as final_cc_slugs
  from public.private_qbank_canonical_items c
  join review_values v on v.id = c.id
  where md5(c.payload::text) = v.payload_hash
),
updated as (
  update public.private_qbank_canonical_items c
  set
    payload = c.payload || jsonb_build_object(
      'relatedDocuments', p.final_documents,
      'relatedDiseaseSlugs', p.final_disease_slugs,
      'relatedDiseaseTerms', p.final_disease_terms,
      'relatedCcSlugs', p.final_cc_slugs,
      'linkReview', jsonb_strip_nulls(jsonb_build_object(
        'status', case
          when p.action = 'no-suitable-document' then 'codex-semantic-reviewed-no-suitable-document'
          when p.action = 'needs-review' then 'codex-semantic-review-pending'
          else 'codex-semantic-reviewed'
        end,
        'method', 'question-answer-explanation-review',
        'reviewVersion', '2026-09-22-v1',
        'reviewedAt', '2026-09-22T09:47:10.848Z',
        'action', p.action,
        'reason', p.rationale,
        'confidence', p.confidence,
        'flags', p.flags,
        'neededDocument', p.needed_document,
        'manifest', p.manifest,
        'previous', jsonb_build_object(
          'relatedDocuments', coalesce(c.payload->'relatedDocuments', '[]'::jsonb),
          'relatedDiseaseSlugs', coalesce(c.payload->'relatedDiseaseSlugs', '[]'::jsonb),
          'relatedDiseaseTerms', coalesce(c.payload->'relatedDiseaseTerms', '[]'::jsonb),
          'relatedCcSlugs', coalesce(c.payload->'relatedCcSlugs', '[]'::jsonb),
          'linkReview', coalesce(c.payload->'linkReview', '{}'::jsonb)
        )
      ))
    ),
    index_data = coalesce(c.index_data, '{}'::jsonb) || jsonb_build_object(
      'relatedDiseaseSlugs', p.final_disease_slugs,
      'relatedCcSlugs', p.final_cc_slugs
    )
  from prepared p
  where c.id = p.id
  returning c.id
)
select jsonb_build_object(
  'requested', (select count(*) from review_values),
  'updated', (select count(*) from updated),
  'conflicts', coalesce((
    select jsonb_agg(v.id order by v.id)
    from review_values v
    left join updated u on u.id = v.id
    where u.id is null
  ), '[]'::jsonb)
) as result;

commit;
