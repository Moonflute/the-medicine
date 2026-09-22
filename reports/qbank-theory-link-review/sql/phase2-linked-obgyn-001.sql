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
    ('QB-PF2026-V02-OG-BANK-0001', '228655d1c3b4ee20a572f11d54c5c6a0', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg7YOc7JWEIOqwkOyLnCAoRmV0YWwgTW9uaXRvcmluZykubWQ","title":"임신 중 태아 감시 (Fetal Monitoring)"}]'::jsonb, 'keep', '감소한 태동 뒤 NST 반응성을 판독하고 추적 간격을 정하는 문제로, 임신 중 태아 감시 문서가 검사 해석과 처치를 직접 다룬다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0002', '72f2ad09dd21baa4c88565964a8c052c', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2bhOq4sOqwkOyGjSAoTGF0ZSBEZWNlbGVyYXRpb24pLm1k","title":"후기감속 (Late Deceleration)"}]'::jsonb, 'replace', '전자태아감시에서 반복 후기감속을 판독하고 응급 분만을 결정하므로 일반 태아 감시보다 후기감속 개별 문서가 더 정확하다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0004', '45fae13504e587c834f9db1bdebfcf3c', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA","title":"산후출혈"}]'::jsonb, 'keep', '분만 3주 뒤 자궁 퇴축부전으로 발생한 후기 산후출혈에 자궁수축제를 쓰는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0005', 'f2296037db2cd2304bf9d01535210b0d', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yekOq2geqyveu2gCDrrLTroKXspp0gKEluY29tcGV0ZW50IEludGVybmFsIE9zIG9mIENlcnZpeCkubWQ","title":"자궁경부 무력증 (Incompetent Internal Os of Cervix)"}]'::jsonb, 'keep', '반복 조산력과 현저히 짧은 자궁경부에 자궁경부결찰술을 선택하므로 자궁경부 무력증 문서와 일치한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0006', 'cbbfd8724ee7a7479da4588674b5764d', '[{"type":"disease","slug":"MTIg7IKw6rO8L-qyrOqwkSDrgpzsgrAgKFNob3VsZGVyIER5c3RvY2lhKS5tZA","title":"견갑 난산 (Shoulder Dystocia)"}]'::jsonb, 'keep', '견갑난산에서 맥로버츠 술기를 식별하는 그림 문항이므로 견갑 난산 문서가 가장 구체적이다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0007', 'e80defab7b2d7a98574ddbbeb36a5d45', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ","title":"태반조기박리 (Placental Abruption)"}]'::jsonb, 'keep', '고혈압 위험인자, 통증성 질출혈, 자궁 압통으로 태반조기박리를 진단한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0008', '0b4b4ed4b04e8d6d80b7cec906433e74', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA","title":"전자간증 (Preeclampsia)"}]'::jsonb, 'keep', '중증 소견을 동반한 전자간증에서 급성 혈압 조절 약제를 선택하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0009', '71b0c786ab47f9cf58ae53617f18ebb1', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-unpOuPhSAoU3lwaGlsaXMpLm1k","title":"임신 중 매독"}]'::jsonb, 'replace', 'VDRL과 TPHA가 모두 양성인 임신부의 페니실린 치료를 묻기 때문에 광범위한 임신 중 감염보다 임신 중 매독 문서가 정확하다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0010', '042c358397801c5fb452b0dbcb7777c1', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geuCtOunieycoOywqeymnSAoQXNoZXJtYW4gU3luZHJvbWUpLm1k","title":"자궁내막유착증 (Asherman Syndrome)"}]'::jsonb, 'keep', '반복 소파술 뒤 과소월경·불임이 발생한 아셔만 증후군의 자궁경 진단을 묻는다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0011', 'b6410b8e983240e3b78006b3e66e1574', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k","title":"불임 (Infertility)"}]'::jsonb, 'keep', '여성 불임 평가에서 월경 직후 난관조영술의 시행 시기를 묻는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0012', 'ffe4d9bf56f7a64c214b374657a03d45', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ","title":"자궁근종 (Uterine Fibroids)"}]'::jsonb, 'replace', '무증상 자궁근종의 경과관찰 적응증을 묻고 있어 자궁근종 정본 문서 하나로 정리한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0013', 'c0f2630e9c362aeef83d863f14d20cb0', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ","title":"자궁근종 (Uterine Fibroids)"}]'::jsonb, 'replace', '불임의 원인이 된 점막하 자궁근종의 자궁경하 절제술을 묻고 있어 중복 별칭 문서를 제거하고 정본 자궁근종 문서만 남긴다.', 'high', '["image-dependent","duplicate-alias-cleanup"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0014', '8bbf3e599c07c897fef3294e21bfeb75', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ","title":"자궁 내막암 (Endometrial Cancer)"}]'::jsonb, 'keep', '조직학적으로 확인된 자궁내막암에서 수술적 병기 설정을 선택하는 문제다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0015', '9b4802cf7c3577e8111640d00c64dbec', '[]'::jsonb, 'no-suitable-document', '가임기 여성의 단순 난소낭종 관찰 원칙을 묻지만 현재 카탈로그에는 단순·기능성 난소낭종 문서가 없고, 난소 종양 대표문서로 강제 연결하면 범위가 지나치게 넓다.', 'high', '["image-dependent","missing-exact-document"]'::jsonb, '단순·기능성 난소낭종', 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0016', '2752d074d5779f42930c01ec843d4960', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA","title":"자궁경부 상피내 종양 (Cervical Intraepithelial Neoplasia)"}]'::jsonb, 'keep', '임신 중 확인된 CIN 3의 산후 추적 원칙을 묻기 때문에 자궁경부 상피내 종양 문서가 정확하다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0017', '1f637a429f428bc9d282eaf5307e389e', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA","title":"자궁경부암 (Cervical Cancer)"}]'::jsonb, 'keep', '진행성 자궁경부암의 병기별 복합 화학방사선 치료를 묻는다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0018', '5f90d058c50152d55d2ce8019c52fce7', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-uCtOuwsOyXveuPmeyiheyWkSAoRW5kb2Rlcm1hbCBTaW51cyBUdW1vcikubWQ","title":"내배엽동종양 (Endodermal Sinus Tumor)"}]'::jsonb, 'keep', '소아·청소년 난소 종괴와 AFP 상승으로 난황낭종양을 진단하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0019', 'e9ffae46df89e29a07c254a26ff487f8', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA","title":"포상기태 (Molar Pregnancy)"}]'::jsonb, 'replace', '고 hCG와 snowstorm 초음파로 완전포상기태를 진단하고 흡입소파술을 선택하므로 중복 별칭을 제거하고 포상기태 정본만 남긴다.', 'high', '["image-dependent","duplicate-alias-cleanup"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0020', '4e8df751a85905742bc0503ddc7b061a', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k","title":"요실금 (Urinary Incontinence)"}]'::jsonb, 'keep', '절박뇨와 야간뇨를 동반한 절박성 요실금을 분류하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0021', 'd2872351c822d3e7f1b36b2b03e1d49b', '[]'::jsonb, 'no-suitable-document', '목덜미 투명대 측정 시기를 묻는 산전 염색체이상 선별검사 문제로, 임신 중 태아 감시는 범위가 다르고 카탈로그에 정확한 산전 선별검사 문서가 없다.', 'high', '["image-dependent","missing-exact-document"]'::jsonb, '산전 태아 염색체이상 선별검사', 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0022', 'c2aa5ee552835bf4e12579873e76f71a', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ","title":"양수 과소증 (Oligohydramnios)"}]'::jsonb, 'keep', '만삭의 양수과소증에서 분만을 선택하는 문제로 양수 과소증 문서가 직접 대응한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0023', '67c382792e24a24186a69a730c97de1c', '[{"type":"disease","slug":"MTIg7IKw6rO8L-ycoOuPhCDrtoTrp4wgKEluZHVjdGlvbiBvZiBMYWJvcikubWQ","title":"유도 분만 (Induction of Labor)"}]'::jsonb, 'keep', '옥시토신 유도분만 중 자궁빈수축을 확인해 투여를 중단하는 문제로 유도 분만 문서가 처치 맥락을 포함한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0024', 'acd56649e3c00613d9f6ffc4ad0992c4', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yekOq2geqyveu2gCDrrLTroKXspp0gKEluY29tcGV0ZW50IEludGVybmFsIE9zIG9mIENlcnZpeCkubWQ","title":"자궁경부 무력증 (Incompetent Internal Os of Cervix)"}]'::jsonb, 'keep', '반복 조산력과 자궁경부 funneling을 근거로 결찰술을 선택하므로 자궁경부 무력증 문서가 정확하다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0025', 'fe520d4da29ee2f81bdd6478db2dc910', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2bhOq4sOqwkOyGjSAoTGF0ZSBEZWNlbGVyYXRpb24pLm1k","title":"후기감속 (Late Deceleration)"}]'::jsonb, 'replace', 'NST에서 후기감속을 판독하고 자궁내 소생술을 시행하는 문제이므로 일반 태아 감시보다 후기감속 개별 문서가 적절하다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0026', 'd4e5c83bfcf7eca0fe4e6428584be594', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2DnOyVhCDshLHsnqUg7KeA7JewIChGZXRhbCBHcm93dGggUmVzdHJpY3Rpb24pLm1k","title":"태아 성장 지연 (Fetal Growth Restriction)"},{"type":"disease","slug":"MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ","title":"양수 과소증 (Oligohydramnios)"}]'::jsonb, 'add', '36주 태아성장지연에 양수과소증이 동반되어 분만 시점을 결정하므로 두 질환이 모두 처치 판단의 핵심이다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0027', '4b746698bea5c9c8db61fb12ca5dda4e', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yeoOuzteq4sCDsp4Dsl7AgKFByb2xvbmdlZCBMYXRlbnQgUGhhc2UpLm1k","title":"잠복기 지연 (Prolonged Latent Phase)"}]'::jsonb, 'keep', '출제 해설은 잠복기 지연의 관찰 처치를 목표로 하므로 해당 문서를 유지하되, 제시된 경과 시간이 진단 기준에 못 미치는 원문 오류 가능성을 표시한다.', 'medium', '["source-criteria-review"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0028', '6bcc0092f4d2f148d9aadbce10b83c03', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ","title":"자궁근종 (Uterine Fibroids)"}]'::jsonb, 'keep', '증상성 다발 자궁근종과 중증 빈혈에서 수술 전 GnRH 작용제를 사용하는 문제다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0029', '7ee6749caa69b09778433b6b4e628b2d', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA","title":"전자간증 (Preeclampsia)"},{"type":"disease","slug":"MTIg7IKw6rO8L-2DnOyVhCDshLHsnqUg7KeA7JewIChGZXRhbCBHcm93dGggUmVzdHJpY3Rpb24pLm1k","title":"태아 성장 지연 (Fetal Growth Restriction)"}]'::jsonb, 'add', '만삭 전자간증에 태아성장지연이 동반되어 유도분만을 결정하므로 두 상태가 모두 임상 판단에 관여한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0030', '23fed94212bb942500447ce3b7ff81c0', '[{"type":"disease","slug":"MjAg67mE64eo6riw6rO8L-uLqOyInO2PrOynhCAoR2VuaXRhbCBoZXJwZXMpLm1k","title":"단순포진 (Genital herpes)"}]'::jsonb, 'replace', '분만 시 활성 생식기 헤르페스 병변이 있어 제왕절개를 선택하는 문제로, 광범위한 임신 중 감염보다 생식기 단순포진 문서가 구체적이다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0031', 'bf034665640038ad8e05984f039caeb1', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k","title":"불임 (Infertility)"}]'::jsonb, 'keep', '양측 난관 폐쇄를 동반한 불임에서 IVF-ET를 선택하는 보조생식술 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0032', '18d9bc253235c9601c0cd0a96a073962', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k","title":"상피성 난소암 (Epithelial Ovarian Cancer)"}]'::jsonb, 'keep', '재발성 상피성 난소암의 이차 종양감축술 적응증을 묻기 때문에 상피성 난소암 문서가 정확하다.', 'medium', '["image-dependent","source-management-review"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0033', '9a820a9bc54006464d89f664c0700d3f', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ","title":"자궁 내막암 (Endometrial Cancer)"}]'::jsonb, 'keep', '폐경 후 출혈과 자궁내막 비후에서 자궁내막암을 배제하기 위한 조직검사를 선택한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0034', '1ab3cbf169f1438b09c6767197cd8c64', '[{"type":"disease","slug":"MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA","title":"요로감염"}]'::jsonb, 'keep', '폐경 여성의 재발성 요로감염 예방 전략을 묻기 때문에 요로감염 문서가 현재 카탈로그에서 가장 가까운 개별 문서다.', 'medium', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0035', 'd31486690f3d008f6912d733d08edb74', '[{"type":"disease","slug":"MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA","title":"골다공증 (Osteoporosis)"}]'::jsonb, 'replace', 'T-score가 골다공증 범위이고 골절 예방 치료를 묻는 문제이므로 폐경보다 골다공증 문서가 핵심 질환에 맞다.', 'medium', '["source-management-review"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0036', 'd30a29295408613cf41dae5263338baa', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA","title":"자궁경부 상피내 종양 (Cervical Intraepithelial Neoplasia)"}]'::jsonb, 'replace', 'HSIL 세포검사와 CIN 1 생검의 불일치에서 원추절제술을 선택하는 문제로 침윤암이 아니라 자궁경부 상피내 종양 문서가 맞다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0037', '184a3a07130fa730460f126993f38cc8', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA","title":"자궁경부암 (Cervical Cancer)"}]'::jsonb, 'keep', '미세침윤 자궁경부암의 병기와 추가 치료 여부를 판단하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0038', 'a0de39e2aec69f64099ee3a00267c00c', '[]'::jsonb, 'no-suitable-document', '림프절 곽청술 뒤 하지 림프부종을 배경으로 발생한 림프관염을 진단하는 문제이며 외음부암은 과거 수술 배경일 뿐이다. 현재 림프부종·림프관염 문서가 없다.', 'medium', '["image-dependent","missing-exact-document","incidental-history-link-removed"]'::jsonb, '수술 후 하지 림프부종 및 림프관염', 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0039', '5a2dac276eaf02eea29c777a7ddc8f54', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA","title":"전치태반 (Placenta Previa)"}]'::jsonb, 'keep', '무통성 임신 후기 출혈과 초음파로 전치태반을 진단하고 제왕절개를 선택한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0040', 'af4ed88a89c69aa808b61148836daa07', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ","title":"골반내 감염 (Pelvic Inflammatory Disease)"}]'::jsonb, 'keep', '장기간 IUD 사용과 만성 골반 통증·악취 분비물에서 골반내 감염을 진단하고 장치 제거를 결정한다.', 'medium', '["image-dependent","source-management-review"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0041', '4b5f0ee87aa845d4627f136d1b1dfae9', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k","title":"불임 (Infertility)"}]'::jsonb, 'keep', '불임 평가에서 황체기 중반 혈청 프로게스테론으로 배란을 확인하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0042', '5fcdbda97ac398e9fb6240ab0c5061f7', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ","title":"양수 과소증 (Oligohydramnios)"}]'::jsonb, 'keep', '33주 양수과소증에서 태아 생물리학 계수로 안녕을 평가하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0043', 'bc245335f4402473efa02834ca25e2f9', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg7YOc7JWEIOqwkOyLnCAoRmV0YWwgTW9uaXRvcmluZykubWQ","title":"임신 중 태아 감시 (Fetal Monitoring)"}]'::jsonb, 'keep', '20분 비반응성 NST를 20분 더 연장하는 검사 해석 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0044', '5a23acf9a21f924b8d0eb6adcb5f3f1e', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yekOq2geqyveu2gCDrrLTroKXspp0gKEluY29tcGV0ZW50IEludGVybmFsIE9zIG9mIENlcnZpeCkubWQ","title":"자궁경부 무력증 (Incompetent Internal Os of Cervix)"}]'::jsonb, 'keep', '임신 2분기의 무통성 자궁경부 개대와 funneling으로 자궁경부 무력증을 진단한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0045', '97eef55d6da43be1f03eeae595d7fdb2', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA","title":"산후출혈"}]'::jsonb, 'keep', '산후 1주 안정 환자의 후기 산후출혈·태반부착부 퇴축부전에 자궁수축제를 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0046', '1b170c428dbd9cee79cd563ce63e18e7', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA","title":"전자간증 (Preeclampsia)"}]'::jsonb, 'keep', '임신 20주 이전 고혈압 뒤 새 단백뇨가 생긴 중복전자간증으로, 별도 하위 문서가 없어 전자간증 문서를 유지한다.', 'medium', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0047', 'a0dc4edea8b00bed17924e207d11d7ef', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2bhOq4sOqwkOyGjSAoTGF0ZSBEZWNlbGVyYXRpb24pLm1k","title":"후기감속 (Late Deceleration)"}]'::jsonb, 'keep', '태아심박동 그림에서 후기감속과 태아곤란을 판독해 응급 제왕절개를 결정한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0048', 'a4cf5a483f4c24735a2f3aba9195927d', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA","title":"임신성 당뇨병 (Gestational Diabetes Mellitus)"}]'::jsonb, 'keep', '식이요법으로 조절되지 않는 임신성 당뇨병에서 인슐린으로 전환하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0049', '3877a6194131c9291f5e0648ec500a78', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDtg4jstpwgKFV0ZXJpbmUgUHJvbGFwc2UpLm1k","title":"자궁 탈출 (Uterine Prolapse)"}]'::jsonb, 'keep', '다산 여성의 환원되는 외음부 종괴와 배뇨 증상으로 자궁 탈출을 진단한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0050', '5e8938353c5fec3d6f503bf05ba5fb18', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k","title":"조기 양막 파수 (Premature Rupture of Membranes)"}]'::jsonb, 'keep', '31주 조기 양막 파수에서 감염·진통 없이 태아 폐성숙 스테로이드를 투여하는 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0051', '0c9d622506d930cb058b868d1dbda223', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDshKDsspzquLDtmJUgKENvbmdlbml0YWwgVXRlcmluZSBBbm9tYWx5KS5tZA","title":"자궁 선천기형 (Congenital Uterine Anomaly)"}]'::jsonb, 'keep', '반복 유산 환자의 자궁난관조영술에서 중격자궁을 확인하고 자궁경 수술을 선택한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0001-0050.json'),
    ('QB-PF2026-V02-OG-BANK-0052', 'c3e70724dce9bd8009e9f105f71fc82f', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ","title":"자궁 내막암 (Endometrial Cancer)"}]'::jsonb, 'keep', '난소까지 침범한 고등급 자궁내막암의 수술적 병기 설정과 보조 항암치료를 묻는다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0053', '70ddb6bc2a6ddcb20216390be7cef6c2', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA","title":"자궁경부 상피내 종양 (Cervical Intraepithelial Neoplasia)"}]'::jsonb, 'keep', 'LSIL과 고위험 HPV 양성에서 질확대경하 조직검사를 시행하는 자궁경부 상피내병변 평가 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0054', 'd772516e057225cfbceaf9ea0a4f0fcf', '[]'::jsonb, 'no-suitable-document', '원추절제 절제면 양성인 자궁경부 선암 상피내암(AIS)의 자궁절제 적응증을 묻지만, 현재 카탈로그에는 AIS 개별 문서가 없고 편평상피 CIN이나 침윤성 자궁경부암으로 대체하면 병리가 달라진다.', 'medium', '[]'::jsonb, '자궁경부 선암 상피내암 (AIS)', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0055', 'f265d9474e80394d660c02d9235900c6', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA","title":"자궁경부암 (Cervical Cancer)"}]'::jsonb, 'keep', '수신증을 동반한 진행성 자궁경부 편평상피암의 병기와 동시 항암화학방사선치료를 묻는다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0056', '6ceb957834c5d335e21b38b37894fe1b', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k","title":"상피성 난소암 (Epithelial Ovarian Cancer)"}]'::jsonb, 'replace', '동결절편에서 장액성 선암으로 확인된 상피성 난소암의 수술적 병기 설정 문제이므로 난소 종양 대표문서보다 상피성 난소암 개별 문서가 정확하다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0057', 'f02fc6d611c5b5df8f647b138983ed8a', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k","title":"요실금 (Urinary Incontinence)"}]'::jsonb, 'keep', '고령 여성의 절박성 요실금에서 항콜린제를 선택하는 치료 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0058', '22f6122783e562d71390eb1908f02a81', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yhsOq4sCDsp4TthrUgKFByZXRlcm0gTGFib3IpLm1k","title":"조기 진통 (Preterm Labor)"}]'::jsonb, 'keep', '35주 규칙적 진통과 자궁경부 변화가 있는 조기 진통의 관리 문제다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0059', 'e1cce0f328deaa5d87fa8d7b37da7186', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yehOyLoCDsnLXrqqgg7KKF7JaRIChHZXN0YXRpb25hbCBUcm9waG9ibGFzdGljIE5lb3BsYXNpYSkubWQ","title":"임신 융모 종양 (Gestational Trophoblastic Neoplasia)"}]'::jsonb, 'keep', '분만 뒤 지속성 출혈, 고 hCG, 폐전이 소견을 보이는 임신성 융모종양의 전이 평가를 묻는다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0060', '833bafed29b21a64c339045acc08b505', '[{"type":"disease","slug":"MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ","title":"태아 다운증후군"}]'::jsonb, 'replace', '고위험 쿼드검사 뒤 양수천자로 태아 다운증후군을 확진하는 산전진단 문제이므로 태아 정본 문서만 남기고 소아 문서와 오래된 제목을 제거한다.', 'high', '["duplicate-cross-specialty-link-cleanup"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0061', 'c13765741a7cb9c56cf33f6364bbfd97', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA","title":"전자간증 (Preeclampsia)"}]'::jsonb, 'keep', '임신 후기 고혈압과 단백뇨를 전자간증으로 분류하고 경증 관리 방침을 묻는다.', 'medium', '["source-diagnostic-and-management-review"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0062', '95ee2f0a6d368d800543186a4162f25f', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yEoOyynOyEsSDtko3sp4Qg7Kad7ZuE6rWwIChDb25nZW5pdGFsIFJ1YmVsbGEgU3luZHJvbWUpLm1k","title":"선천성 풍진 증후군 (Congenital Rubella Syndrome)"}]'::jsonb, 'replace', '임신 초기 풍진 노출 뒤 IgM·IgG를 해석해 태아 선천성 풍진 위험을 평가하므로 선천성 풍진 증후군 문서가 가장 직접적이다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0063', 'd6a8368092b8dcf4ced45a14efbe2a05', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ","title":"태반조기박리 (Placental Abruption)"}]'::jsonb, 'keep', '교통사고 뒤 통증성 출혈과 후기감속으로 태반조기박리 및 태아곤란을 진단한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0064', '3c4d859fc10434fcd983b1e63a7d7b79', '[{"type":"disease","slug":"MjAg67mE64eo6riw6rO8L-uLqOyInO2PrOynhCAoR2VuaXRhbCBoZXJwZXMpLm1k","title":"단순포진 (Genital herpes)"}]'::jsonb, 'replace', '외음부 다발 수포를 생식기 헤르페스로 진단하고 acyclovir를 선택하므로 일반 HSV 감염보다 생식기 단순포진 문서가 구체적이다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0065', '852ced03873f15a154065c9d0b87333d', '[{"type":"disease","slug":"MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k","title":"항인지질 증후군 (Antiphospholipid Syndrome)"}]'::jsonb, 'keep', '반복 자연유산과 지속성 항카디오리핀항체로 산과적 항인지질증후군을 진단하고 헤파린·아스피린을 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0066', '93d3d347e0212c9bdbf27f0b25d57067', '[{"type":"disease","slug":"MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k","title":"만성 B형 간염 (Chronic Hepatitis B (HBV))"}]'::jsonb, 'replace', 'HBsAg·HBeAg 양성 산모의 신생아에게 출생 직후 HBIG와 백신을 투여하는 B형간염 수직감염 예방 문제로, 광범위한 임신 중 감염 문서는 제거한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0067', '19c7126463b482319076b55dc251dd75', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k","title":"요실금 (Urinary Incontinence)"},{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDtg4jstpwgKFV0ZXJpbmUgUHJvbGFwc2UpLm1k","title":"자궁 탈출 (Uterine Prolapse)"}]'::jsonb, 'add', '복압성 요실금과 자궁 탈출이 함께 있으며 질관폐쇄술을 선택하므로 두 질환이 모두 처치 판단의 핵심이다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0068', 'c35f3ac8454c9f7491916d06da753d0c', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yhsOq4sCDsp4TthrUgKFByZXRlcm0gTGFib3IpLm1k","title":"조기 진통 (Preterm Labor)"}]'::jsonb, 'keep', '30주 자궁수축과 자궁경부 개대·소실로 조기 진통을 진단하고 자궁수축억제 치료를 묻는다.', 'medium', '["source-management-review"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0069', '14eaf67dfbde4dacefc9fe8eed050867', '[{"type":"disease","slug":"MTIg7IKw6rO8L-ycteuqqCDslpHrp4nsl7wgKENob3Jpb2Ftbmlvbml0aXMpLm1k","title":"융모 양막염 (Chorioamnionitis)"}]'::jsonb, 'keep', '조기 양막 파수 뒤 발열과 태아빈맥이 발생한 융모양막염에서 즉시 분만을 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0070', '9317cc76c544d3990eafd1b9183d6944', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k","title":"상피성 난소암 (Epithelial Ovarian Cancer)"}]'::jsonb, 'replace', 'CA-125 상승, 복수의 선암세포와 복강 내 전이 소견은 진행성 상피성 난소암에 합당해 난소 종양 대표문서보다 개별 문서가 정확하다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0071', '6618ce9c62e1122c4dc53bfea9cfd606', '[{"type":"disease","slug":"MTIg7IKw6rO8L-ygnOyZleygiOqwnOyIoCAoQ2VzYXJlYW4gU2VjdGlvbikubWQ","title":"제왕절개술 (Cesarean Section)"}]'::jsonb, 'keep', '과거 고전적 제왕절개 절개창으로 자궁파열 위험이 높은 진통 산모의 반복 제왕절개 적응증을 묻는다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0072', '0857e61e9c689e5b00e0dc887a067749', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k","title":"불임 (Infertility)"}]'::jsonb, 'keep', '양측 난관 폐쇄 불임에서 IVF-ET를 선택하는 문제다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0073', '7ccf15f7b9e49c444b4fe3d9e28deb05', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDsg5jqt7zsnKHspp0gKFV0ZXJpbmUgQWRlbm9teW9zaXMpLm1k","title":"자궁 샘근육증 (Uterine Adenomyosis)"}]'::jsonb, 'replace', 'MRI의 두꺼운 junctional zone과 월경과다로 자궁샘근육증을 진단한다. 기존 호환 문서 링크를 정본 문서로 교체한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0074', 'd3f0fd5d5b38d3791d547312f37f0ba8', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA","title":"자궁경부 상피내 종양 (Cervical Intraepithelial Neoplasia)"}]'::jsonb, 'keep', 'LSIL·고위험 HPV와 비정상 질확대경 소견 뒤 표적 조직검사를 선택하는 CIN 평가 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0075', '32cbfe16a590c0efb5cfe083cea6106a', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k","title":"요실금 (Urinary Incontinence)"}]'::jsonb, 'keep', '절박성 요실금의 초기 평가로 배뇨일지를 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0076', '882fce0a72fde4c2a50dcb7b450f57e1', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ","title":"자궁근종 (Uterine Fibroids)"}]'::jsonb, 'keep', '대형 증상성 자궁근종으로 월경과다와 중증 빈혈이 생긴 환자의 수술 치료를 묻는다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0077', 'a6b47852d52ab25c730626e875081320', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA","title":"자궁경부암 (Cervical Cancer)"}]'::jsonb, 'keep', '수신증을 동반한 진행성 자궁경부암에서 동시 항암화학방사선치료를 선택한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0078', '936e6e6bee871fe4bd74063473bf07d9', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ","title":"경구피임약 (Oral Contraceptives)"}]'::jsonb, 'keep', '기존 난관 결찰 병력이 있는 여성의 효과적인 가역 피임법으로 경구피임약을 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0079', '07a0f21a5d07831eaefb9296e75e7c9c', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg7YOc7JWEIOqwkOyLnCAoRmV0YWwgTW9uaXRvcmluZykubWQ","title":"임신 중 태아 감시 (Fetal Monitoring)"}]'::jsonb, 'keep', '정상 생물리학적 계수와 반응성 NST를 판독해 경과관찰하는 태아 감시 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0080', '30c6a313638f90f28a839d592abaca42', '[{"type":"disease","slug":"MTIg7IKw6rO8L-qzvOyImeyehOyLoCAoUG9zdC10ZXJtIFByZWduYW5jeSkubWQ","title":"과숙임신 (Post-term Pregnancy)"}]'::jsonb, 'replace', '예정일을 3일 지난 반응성 NST 산모의 추적 시점을 묻는다. 유도분만 자체가 현재 정답은 아니므로 과숙임신 문서만 유지하되 임신 주수 용어의 부정확성을 표시한다.', 'medium', '["source-gestational-age-terminology-review"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0081', 'e6ce1f0a53ef243ea0d74b2dce58ed25', '[{"type":"disease","slug":"MTIg7IKw6rO8L-y0iOq4sOqwkOyGjSAoRWFybHkgRGVjZWxlcmF0aW9uKS5tZA","title":"초기감속 (Early Deceleration)"}]'::jsonb, 'replace', '태아심박동 그림에서 초기감속을 판독하고 태아 머리 압박을 원인으로 고르는 문제다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0082', '31619de3938133d89e8725a4819cc4ee', '[{"type":"disease","slug":"MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k","title":"수두-대상포진 바이러스 감염 (Varicella-Zoster Virus Infection)"}]'::jsonb, 'replace', '임신 중 대상포진의 acyclovir 치료를 묻기 때문에 광범위한 임신 중 감염보다 수두-대상포진 바이러스 문서가 구체적이다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0083', '288a493e3331d336920cabf282b663dc', '[{"type":"disease","slug":"MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ","title":"폐결핵 (Pulmonary Tuberculosis)"}]'::jsonb, 'keep', '임신 초기에 진단된 활동성 폐결핵의 즉시 항결핵 치료를 묻는다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0084', '4842aa31e7097525bdb74583b3c7ddb4', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2DnOyVhCDshLHsnqUg7KeA7JewIChGZXRhbCBHcm93dGggUmVzdHJpY3Rpb24pLm1k","title":"태아 성장 지연 (Fetal Growth Restriction)"},{"type":"disease","slug":"MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ","title":"양수 과소증 (Oligohydramnios)"}]'::jsonb, 'add', '35주 태아성장지연에 양수과소증이 함께 있고 감시 이상을 근거로 즉시 분만하므로 두 질환 모두 핵심이다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0085', '14845b877a3c353013dff083957ae580', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yblOqyve2GtSAoRHlzbWVub3JyaGVhKS5tZA","title":"월경통 (Dysmenorrhea)"}]'::jsonb, 'keep', '정상 골반검사를 보이는 청소년의 일차성 월경통에서 NSAID를 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0087', '2bfbf6ae16cd2f4c43b33e0767939f46', '[]'::jsonb, 'no-suitable-document', '반응성 NST와 자궁경부 변화 없는 불규칙 통증으로 가진통을 판단하는 문제이며, 현재 유도 분만 연결은 정답 개념이 아니다. 진진통·가진통 감별 문서가 없다.', 'medium', '["image-dependent","missing-exact-document"]'::jsonb, '진진통과 가진통의 감별', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0088', '9468b081d615ae15809d3d0d6b80ccf0', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k","title":"불임 (Infertility)"}]'::jsonb, 'keep', '중증 남성요인 불임에서 ICSI를 선택하는 보조생식술 문제다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0089', '20d5c9430319a0cb3ff14b9873d654fb', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-2PkOqyvSAoTWVub3BhdXNlKS5tZA","title":"폐경 (Menopause)"}]'::jsonb, 'keep', '안면홍조·불면과 무월경에서 폐경 이행기를 평가하는 FSH 검사를 묻는다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0090', 'a80da43af799dd658cb1d4477a9c03fb', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ","title":"자궁 내막암 (Endometrial Cancer)"}]'::jsonb, 'keep', '수술 병기설정이 끝난 자궁내막암의 병기별 보조치료를 묻는다.', 'medium', '["source-management-review"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0091', '202fd16333ee9d96f301a8c64e9c1aed', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yEseyImeq4sO2YleyihSAoTWF0dXJlIFRlcmF0b21hKS5tZA","title":"성숙기형종 (Mature Teratoma)"}]'::jsonb, 'keep', '난소 염전 수술 표본에서 성숙기형종의 육안 소견을 식별한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0092', 'afa52c737d82b19eeab40dd54aed143e', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-uCnOyGjCDrgq3sooUg7YyM7Je0IChSdXB0dXJlZCBPdmFyaWFuIEN5c3QpLm1k","title":"난소 낭종 파열 (Ruptured Ovarian Cyst)"}]'::jsonb, 'keep', '급성 복통, 출혈성 난소 병변과 혈복강 소견으로 난소낭종 파열을 진단한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0093', '4c7139d8d35ec3f339ab98a685bc61cb', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k","title":"요실금 (Urinary Incontinence)"}]'::jsonb, 'keep', '빈뇨·절박뇨·야간뇨가 있는 요실금 환자의 초기 평가로 배뇨일지를 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0094', '244f700ad4c9f067981f3a1f1741b5fd', '[]'::jsonb, 'no-suitable-document', '근치 자궁절제술 중 장골혈관 아래를 지나는 폐쇄신경을 식별하는 골반 수술해부 문제이며, 광범위한 부인과 대표문서는 적절한 이론 문서가 아니다.', 'medium', '["missing-exact-document","incidental-cancer-history-link-removed"]'::jsonb, '부인과 골반 수술해부 및 폐쇄신경', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0095', 'fcb9da58e858afb433faf20ebe5301c7', '[]'::jsonb, 'no-suitable-document', '배란 뒤 프로게스테론의 열발생 효과로 기초체온이 상승하는 정상 월경주기 생리 문제이며, 내분비 대표문서로 강제 연결할 수 없다.', 'medium', '["image-dependent","missing-exact-document"]'::jsonb, '월경주기·배란 생리와 기초체온', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0096', 'f27f4491cd563c332c79b2c1b731d546', '[]'::jsonb, 'no-suitable-document', '산전 초음파와 AFP 상승으로 제대탈장(omphalocele)을 진단하는 문제다. 현재 배꼽 탈장은 별개의 질환이고 카탈로그에 제대탈장 문서가 없다.', 'medium', '["image-dependent","missing-exact-document","incorrect-condition-link-removed"]'::jsonb, '제대탈장 (Omphalocele)', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0097', '8071a41d81d28740373d1fc4fdf7ea0a', '[{"type":"disease","slug":"MTIg7IKw6rO8L-y0iOq4sOqwkOyGjSAoRWFybHkgRGVjZWxlcmF0aW9uKS5tZA","title":"초기감속 (Early Deceleration)"}]'::jsonb, 'replace', '태아심박동 그림에서 초기감속을 판독하고 관찰하는 문제이므로 일반 태아 감시보다 초기감속 문서가 정확하다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0099', 'c8a255c60cfda14f780214505e5be390', '[]'::jsonb, 'no-suitable-document', '41주 진통 중 정상 잠복기를 확인하고 관찰하는 문제로, 지연 기준을 충족하지 않아 잠복기 지연 문서 연결은 부정확하다.', 'medium', '["missing-exact-document","incorrect-delayed-latent-phase-link-removed"]'::jsonb, '정상 분만 단계와 잠복기 관리', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0100', '050786da442f7b53fd07c9691426a718', '[{"type":"disease","slug":"MTIg7IKw6rO8L-2bhOq4sOqwkOyGjSAoTGF0ZSBEZWNlbGVyYXRpb24pLm1k","title":"후기감속 (Late Deceleration)"}]'::jsonb, 'replace', '태아심박동 그림에서 후기감속을 판독하고 체위 변경 등 자궁내 소생술을 시행한다.', 'high', '["image-dependent"]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0101', '2f5f503abf4c05fef8ac672a314f3377', '[]'::jsonb, 'no-suitable-document', '단단히 수축한 자궁과 지속 출혈로 산도 열상을 진단하지만, 출혈 부위가 특정되지 않아 자궁경부 열창으로 좁히면 과도하다. 산도손상 총론 문서가 없다.', 'medium', '["missing-exact-document","overly-specific-link-removed"]'::jsonb, '산과적 산도열상 및 회음열상', 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0102', '227cfc9c514d756b9315055042fc86aa', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA","title":"자궁외 임신 (Ectopic Pregnancy)"}]'::jsonb, 'keep', '고 hCG, 빈 자궁강, 난관의 배아 심박 종괴와 혈역학 이상으로 자궁외임신 수술을 선택한다.', 'high', '[]'::jsonb, null, 'phase2-linked-obgyn-0051-0100.json'),
    ('QB-PF2026-V02-OG-BANK-0103', 'f4829b3b117f372dad2be627ed37bd64', '[]'::jsonb, 'no-suitable-document', 'Leopold 3단계 촉진으로 선진부의 골반 진입을 평가하는 산전 신체진찰 술기 문제이며 임신 중 모체 변화와는 무관하다.', 'medium', '["image-dependent","missing-exact-document","incorrect-topic-link-removed"]'::jsonb, 'Leopold 복부촉진과 태위·태향·선진부 평가', 'phase2-linked-obgyn-0051-0100.json')
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
        'reviewedAt', '2026-09-22T09:49:08.350Z',
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
