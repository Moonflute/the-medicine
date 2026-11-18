-- Both read functions are SECURITY INVOKER. The existing approval policy
-- continues to govern the rest of the catalogue and its separate assets.
create policy authored_mocks_read on public.private_qbank_canonical_items
  for select to anon, authenticated
  using (
    id like 'QB-MOCK-%'
    and index_data->>'bookSeries' = '창작 모의고사'
    and index_data->>'bookId' ~ '^mock-(full|mini)-[1-9][0-9]*$'
    and payload->>'sourceSplit' = 'original-residency-mock'
    and source_ids = array[id]
  );

grant select (id, index_data, source_ids, payload)
  on public.private_qbank_canonical_items to anon;
grant execute on function public.private_qbank_index(),
  public.private_qbank_questions(text[]) to anon;
