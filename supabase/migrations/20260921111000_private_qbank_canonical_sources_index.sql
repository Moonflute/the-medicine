-- Canonical question lookup is used to combine every source item for a single
-- practice question when reading progress and sessions.
create index private_qbank_canonical_sources_canonical_id_idx
  on public.private_qbank_canonical_sources (canonical_id);
