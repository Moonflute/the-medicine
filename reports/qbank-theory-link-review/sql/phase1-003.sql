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
    ('QB-PF2026-V02-PE-Y2021-0020', '4c7e74ebd755d62b4b888cf2fdf791b2', '[]'::jsonb, 'no-suitable-document', '무반응·호흡 불확실 소아에서 맥박 확인과 CPR 순서를 묻는 소생술 문제다.', 'high', '["missing-exact-document","procedure-topic"]'::jsonb, '소아 기본소생술', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2023-0012', '27ddafe4f50a10377b024cab8089b1de', '[]'::jsonb, 'no-suitable-document', '앙와위에서 악화되고 복와위에서 호전되는 만성 영아 흡기성 협착음으로 후두연화증을 진단한다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '후두연화증', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2023-0018', '8173c460697b0f4c6bb61a4b13d156d2', '[]'::jsonb, 'no-suitable-document', '거대아 분만 뒤 한쪽 팔 움직임 저하에서 Moro 반사로 쇄골 골절·상완신경총 손상을 평가하는 문제다.', 'high', '["missing-exact-document"]'::jsonb, '신생아 쇄골 골절 및 상완신경총 손상', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2026-0004', '26cd8c457aa7eee913681fdde6e9c7b4', '[]'::jsonb, 'no-suitable-document', '작고 부드럽고 움직이는 급성 경부 림프절과 악성 위험신호를 감별해 경과관찰을 선택한다.', 'high', '["missing-exact-document"]'::jsonb, '소아 경부 림프절종대', 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V02-PE-Y2026-0015', '756464d94f7e1fcac378056a904e54ff', '[]'::jsonb, 'keep-drug-only', '미숙아 무호흡은 투약 배경이고 정답은 theophylline 치료적 약물농도 측정의 trough 시점이므로 기존 약물 문서만 유지한다.', 'high', '["drug-theory-sufficient","incidental-disease-context"]'::jsonb, null, 'phase1-unlinked-pediatrics.json'),
    ('QB-PF2026-V01-GS-BANK-0004', '458d3b362f217d0dc10e13fcd8d8d20c', '[{"type":"disease","slug":"MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ","title":"화상 (Burn)"}]'::jsonb, 'add', '체중과 화상 범위·깊이로 Parkland 공식의 초기 8시간 수액량을 계산하므로 화상 문서가 직접 대응한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0015', '374abf9072b0e3eedc0120d9a8775815', '[]'::jsonb, 'no-suitable-document', '신장이식 직후 재관류 실패와 초급성 거부반응에 따른 이식편 제거가 핵심이나 해당 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '신장이식 및 이식 후 합병증', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0019', 'f2a2b264f77682e9b22fcc968d3dba97', '[]'::jsonb, 'no-suitable-document', '근이완 후 후두경 고장 시 bag-valve-mask로 산소화를 유지하는 구조 기도관리가 핵심이나 해당 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '기도관리 및 기관내삽관', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0028', 'c1d9ac64259d9ff8c9d231223fe7a992', '[]'::jsonb, 'no-suitable-document', '신장이식 직후 관류되지 않는 이식편의 초급성 거부반응과 즉시 제거가 핵심이나 해당 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '신장이식 및 이식 후 합병증', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0031', '45e3e1cd7b64d3434c7f3759fa664889', '[{"type":"disease","slug":"MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ","title":"화상 (Burn)"}]'::jsonb, 'add', '환상형 전층 화상 후 원위부 맥박 소실에서 가피절개술을 선택하므로 화상 문서가 직접 대응한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0032', 'f159abcd96e577a603bff7ea190a1fa6', '[{"type":"disease","slug":"MTEg7Jm46rO8L-yZuOqzvOyggSDrj4Tqtawg67CPIOqzte2GtSDtlITroZzthqDsvZwgKFN1cmdpY2FsIFRvb2xzIGFuZCBDb3JlIFByb3RvY29scykubWQ","title":"외과적 도구 및 공통 프로토콜 (Surgical Tools and Core Protocols)"}]'::jsonb, 'add', '대장 수술 예방적 항균제의 절개 전 투여 시점은 외과 공통 프로토콜의 감염 예방 내용과 직접 맞는다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0033', '09a297fa6ae2c7625ad14633443aeea6', '[]'::jsonb, 'keep-drug-only', 'Warfarin 외래 추적의 PT/INR 모니터링 문항으로 기존 Warfarin 약물 문서가 정확하며 별도 disease/CC 연결은 불필요하다.', 'high', '["drug-theory-sufficient"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0034', '825d86f33859b51ef77f92b3d33536f1', '[{"type":"disease","slug":"MTEg7Jm46rO8L-yZuOqzvOyggSDrj4Tqtawg67CPIOqzte2GtSDtlITroZzthqDsvZwgKFN1cmdpY2FsIFRvb2xzIGFuZCBDb3JlIFByb3RvY29scykubWQ","title":"외과적 도구 및 공통 프로토콜 (Surgical Tools and Core Protocols)"}]'::jsonb, 'add', '수술 전 aspirin 중단과 항고혈압제 지속을 구분하는 공통 약제 점검 문항으로 외과 공통 프로토콜이 관련된다.', 'medium', '["retains-existing-drug-link"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0036', '9d68843f5ef4f648e5d3e8c4a6814b12', '[]'::jsonb, 'no-suitable-document', '저혈압 중증 외상 환자의 급속연속기관삽관 유도제로 etomidate를 선택하는 문항이나 이를 설명할 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '기도관리 및 기관내삽관', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0038', '51619a8c91b349838279ab2e4289c8de', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ","title":"유방암 (Breast Cancer)"}]'::jsonb, 'add', '비정형 유관 증식증에서 업그레이드 가능성 때문에 절제생검을 시행하는 진단 경로를 유방암 문서가 명시한다.', 'high', '["diagnostic-pathway-not-disease-assertion"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0045', 'ff635f97becec9afcc3f218fa8fdfff1', '[]'::jsonb, 'no-suitable-document', '신장이식 직후 허혈성 이식편의 초급성 거부반응과 이식편 제거가 핵심이나 해당 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '신장이식 및 이식 후 합병증', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0047', '4f264b3767c70d2b9141d7bd49ef4aa2', '[{"type":"disease","slug":"MTEg7Jm46rO8L-yZuOqzvOyggSDrj4Tqtawg67CPIOqzte2GtSDtlITroZzthqDsvZwgKFN1cmdpY2FsIFRvb2xzIGFuZCBDb3JlIFByb3RvY29scykubWQ","title":"외과적 도구 및 공통 프로토콜 (Surgical Tools and Core Protocols)"}]'::jsonb, 'add', '수술 전 aspirin과 amlodipine 처리를 비교하는 공통 약제 점검 문항으로 외과 공통 프로토콜이 관련된다.', 'medium', '["retains-existing-drug-link"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0050', 'e2c8fd7e22aa8a2fc6151cc9c0969ee5', '[{"type":"disease","slug":"MTEg7Jm46rO8L-q0gO2GteyDgSDrs7XrtoDsmbjsg4EgKFBlbmV0cmF0aW5nIEFiZG9taW5hbCBJbmp1cnkpLm1k","title":"관통상 복부외상 (Penetrating Abdominal Injury)"}]'::jsonb, 'add', '복부 관통상으로 장기가 탈출한 환자의 젖은 멸균 거즈·폐쇄 드레싱 처치를 묻는 직접적인 복부 관통상 문항이다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0052', '2159fa67efd46bef48456b0096ea36f8', '[{"type":"disease","slug":"MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA","title":"경부외상 (Cervical Trauma)"}]'::jsonb, 'add', '경추 손상이 의심되는 외상에서 목 움직임을 최소화하는 jaw-thrust 기도 확보를 묻기 때문에 경부외상 문서가 적절하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0064', '7ea06d83024472f7f144b6ce4f78bf3c', '[{"type":"cc","slug":"7Jyg67Cp642p7J20","title":"유방덩이"}]'::jsonb, 'add', '확진 전 유방 종괴의 수술 전 병리 확보 방법으로 총생검을 고르는 증상 접근 문항이므로 CC 유방덩이가 가장 직접적이다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0065', '8067fe6fc8b22243c98a5dec12483de7', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ","title":"유방암 (Breast Cancer)"}]'::jsonb, 'add', '유방암 수술 중 감마 프로브를 이용한 감시 림프절 생검을 묻기 때문에 유방암 문서가 직접 대응한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0067', '9835c5f24fc4cfa1c58c4463b7239302', '[]'::jsonb, 'no-suitable-document', '소아 심정지 후 현저한 서맥의 다음 처치를 묻는 소아소생 알고리즘 문항이며 기존 Epinephrine 약물 문서만으로는 불충분하다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 심폐소생술', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0071', '5c6017256d37a2dce7e897da110fa14e', '[{"type":"disease","slug":"MTEg7Jm46rO8L-qysOyepSDshpDsg4EgKENvbG9uIEluanVyeSkubWQ","title":"결장 손상 (Colon Injury)"}]'::jsonb, 'add', '즉시 발견된 작은 S상결장 외상성 천공에서 오염 정도를 보고 일차 봉합을 선택하는 결장 손상 문항이다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0082', 'd8343bd34f9c118ace4b6711c888e0d0', '[{"type":"disease","slug":"MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riw64-EIOuCtCDsnbTrrLwgKEZvcmVpZ24gQm9keSBBc3BpcmF0aW9uKS5tZA","title":"기도 내 이물 (Foreign Body Aspiration)"}]'::jsonb, 'add', '성인의 완전 기도폐쇄에서 복부 밀어올리기를 시행하며, 기도 내 이물 문서가 연령별 완전폐쇄 응급처치를 포함한다.', 'high', '["cross-specialty-document"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0088', 'b1682d33207dd48a9cad70bedb570180', '[]'::jsonb, 'no-suitable-document', '심폐소생술 중 ETCO2 급상승으로 자발순환회복을 판단하는 문항이나 CPR 질 지표와 ROSC를 다루는 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '심폐소생술', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0091', 'aa5fbbcdacb73c84679e3bcc12a0d3ec', '[]'::jsonb, 'no-suitable-document', 'AED 제세동 직후 흉부압박을 즉시 재개하는 기본소생술 순서를 묻지만 해당 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '심폐소생술', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0097', 'ba85df66c2a806e36c45c93821249d87', '[]'::jsonb, 'no-suitable-document', '국소마취제 투여 후 초기 전신독성과 중증도별 처치를 묻는다. Lidocaine 약물 문서는 징후를 다루지만 처치 문서로는 불충분하다.', 'high', '["missing-exact-document"]'::jsonb, '국소마취제 전신독성', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0110', '89d7414f8c7d4a7659c7d5789be83ee3', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ","title":"유방암 (Breast Cancer)"}]'::jsonb, 'add', 'HER2 3+ 전이성 유방암에서 trastuzumab을 선택하므로 기존 약물 문서와 함께 유방암 문서를 연결한다.', 'high', '["retains-existing-drug-link"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0148', '23afa6888570b06a0136b31185a46a38', '[{"type":"disease","slug":"MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riw64-EIOuCtCDsnbTrrLwgKEZvcmVpZ24gQm9keSBBc3BpcmF0aW9uKS5tZA","title":"기도 내 이물 (Foreign Body Aspiration)"}]'::jsonb, 'add', '소아의 갑작스러운 기침·일측성 천명과 호기성 공기포획에서 경직성 기관지경을 선택하는 전형적 기도 이물 문항이다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0158', '38c890c81b2c1c7b6e6b204df53a885a', '[]'::jsonb, 'no-suitable-document', 'Goldman 심장위험지수에서 JVD/S3를 고위험 소견으로 고르는 위험층화 문항이다. 심부전 자체로 강제 연결하면 범위가 어긋난다.', 'high', '["missing-exact-document"]'::jsonb, '수술 전 심혈관 위험 평가', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0163', '2a7ebd4092520cb269ecb034dbaacbc9', '[{"type":"disease","slug":"MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ","title":"창상 감염 (Wound Infection)"}]'::jsonb, 'add', '감염 창상에서 괴사조직을 건강한 출혈 조직까지 제거하는 변연절제 원칙을 묻기 때문에 창상 감염 문서가 직접 해당한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0172', '9027273e38ba127d69209b29dcd04423', '[]'::jsonb, 'no-suitable-document', '비위관·비장관 영양의 흡인 위험과 장점, 장점막 유지 효과를 비교하는 경장영양 문항이나 대응 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '수술 환자 영양지원', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0179', 'b00f97cfb26dca069c893643a3e2c14b', '[{"type":"disease","slug":"MTEg7Jm46rO8L-yZuOqzvOyggSDrj4Tqtawg67CPIOqzte2GtSDtlITroZzthqDsvZwgKFN1cmdpY2FsIFRvb2xzIGFuZCBDb3JlIFByb3RvY29scykubWQ","title":"외과적 도구 및 공통 프로토콜 (Surgical Tools and Core Protocols)"}]'::jsonb, 'add', '손 씻기, 제모 시점, 예방적 항균제, 빈혈과 폐쇄 배액 등 여러 수술 전 공통 준비 원칙을 비교하므로 공통 프로토콜이 적절하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-BANK-0182', '98049a6b112e8e6381b84ed29b58bb79', '[{"type":"disease","slug":"MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA","title":"창상 및 열상 (Wounds and Lacerations)"}]'::jsonb, 'add', '해부학적 부위별 봉합사 제거 시점을 비교하는 문항으로 창상 봉합·추적관리를 다루는 창상 및 열상 문서가 맞는다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2017-0016', '5b3372584332d0cb70a6fb4f8bf213a2', '[]'::jsonb, 'no-suitable-document', '고도비만과 조절되지 않는 당뇨·고혈압에서 Roux-en-Y 위우회술 적응증과 술식을 묻지만 비만수술 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '비만 및 대사·비만수술', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2018-0001', 'c7f922fc67265ede49e161dbf682256b', '[]'::jsonb, 'no-suitable-document', '반응·호흡·맥박이 없는 소아에서 구조 요청과 소생 순서를 묻는 기본소생술 문항이나 해당 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '소아 심폐소생술', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2018-0004', 'a399ea562385deedef617f2a33e169ae', '[{"type":"disease","slug":"MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k","title":"한랭손상 (Cold Injury)"}]'::jsonb, 'add', '혼수·서맥·저혈압·저환기와 Osborn J파가 있는 중증 저체온증에서 가온 산소·환기를 시행하므로 한랭손상 문서가 직접 대응한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2018-0010', 'edb218c4996e529d61f76bf4c5b678d3', '[]'::jsonb, 'no-suitable-document', '장기 경장영양이 필요한 뇌졸중 환자에서 반복 구토·흡인 후 위루관을 선택하는 영양 접근 문항이다. 흡인성 폐렴은 보조 상황이다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '수술 환자 영양지원', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2018-0029', '07d8ea09e5019a97d075f305bd1718fb', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ","title":"유방암 (Breast Cancer)"}]'::jsonb, 'add', '촉지되지 않는 유방촬영 미세석회화 병변에서 위치결정 후 절제생검을 시행하는 진단 경로를 유방암 문서가 명시한다.', 'high', '["diagnostic-pathway-not-disease-assertion"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2019-0002', '9b0d0cc5c6695d2b7ea77c752ee94fc6', '[]'::jsonb, 'no-suitable-document', '기관내관 위치를 객관적으로 확인하는 방법으로 호기말 이산화탄소를 선택하는 삽관 문항이나 대응 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '기도관리 및 기관내삽관', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2019-0003', '2389ed5c217ea5830b3b8e0db2d66695', '[]'::jsonb, 'no-suitable-document', '신장이식 직후 급격한 무뇨에서 Foley 폐쇄 같은 가역적 원인을 먼저 확인하는 이식 후 합병증 문항이나 관련 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '신장이식 및 이식 후 합병증', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2020-0003', '1b18eb118b830d13dc57b774f0ad38cd', '[{"type":"disease","slug":"MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ","title":"다발외상 (Polytrauma)"}]'::jsonb, 'add', '쇼크와 중증 의식저하·얕은 호흡이 있는 외상 환자에서 ABC에 따라 기관삽관을 우선하므로 다발외상 초기평가에 해당한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2020-0005', 'a937a8621a7209103879593829e82f6c', '[{"type":"disease","slug":"MTEg7Jm46rO8L-yZuOqzvOyggSDrj4Tqtawg67CPIOqzte2GtSDtlITroZzthqDsvZwgKFN1cmdpY2FsIFRvb2xzIGFuZCBDb3JlIFByb3RvY29scykubWQ","title":"외과적 도구 및 공통 프로토콜 (Surgical Tools and Core Protocols)"}]'::jsonb, 'add', '예방적 cefazolin의 절개 전 1시간 이내 투여 원칙을 묻는 공통 감염예방 문항으로 외과 공통 프로토콜을 추가한다.', 'high', '["retains-existing-drug-link"]'::jsonb, null, 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2020-0009', '064963380c9fd65bb354b46d0da4e220', '[]'::jsonb, 'no-suitable-document', '신장이식 3일 후 핍뇨·체중증가·고혈압·이식편 압통에서 혈전증과 거부반응 감별을 위한 Doppler를 고르는 문항이나 이식 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '신장이식 및 이식 후 합병증', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2020-0012', 'f27fa177ff9835b8084f3a07efec8e64', '[]'::jsonb, 'no-suitable-document', '장허혈·쇼크·승압제로 경장영양이 금기인 수술 환자에서 조기 비경구영양을 결정하는 문항이나 영양지원 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '수술 환자 영양지원', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2021-0013', '2a137e0d31f06a713886659ab9a14106', '[]'::jsonb, 'no-suitable-document', '중증 악안면 골절로 4주 이상 경장영양이 필요한 환자에서 PEG를 선택하는 장기 영양 접근 문항이나 관련 문서가 없다.', 'high', '["missing-exact-document","recurring-topic"]'::jsonb, '수술 환자 영양지원', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2022-0015', '3f2282e1d205b4ab28c2c2cff4627660', '[]'::jsonb, 'no-suitable-document', 'reverse Trendelenburg를 식별하고 위 수술 체위와 연결하는 문항이다. 공통 프로토콜은 압박 손상 예방만 다뤄 정답 학습에 충분하지 않다.', 'high', '["missing-exact-document"]'::jsonb, '수술 체위', 'phase1-unlinked-surgery.json'),
    ('QB-PF2026-V01-GS-Y2024-0014', '71e8b74b6d573fa6773901b31364f9a4', '[{"type":"disease","slug":"MTEg7Jm46rO8L-y3jOyepSDshpDsg4EgKFBhbmNyZWF0aWMgSW5qdXJ5KS5tZA","title":"췌장 손상 (Pancreatic Injury)"}]'::jsonb, 'add', '혈역학적으로 불안정한 둔상 환자의 grade IV 췌장 절단에서 응급 개복술을 선택하는 직접적인 췌장 손상 문항이다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-surgery.json')
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
