import unittest
from pathlib import Path
from sync_group_overview_members import replace_list, replace_included_section, split_frontmatter
import json
ROOT=Path(__file__).resolve().parents[2]
class GroupMembershipTests(unittest.TestCase):
 def test_list_at_end_does_not_join_old_items(self):
  original='aliases: []\ngroup_members:\n- A\n- B'
  expected='aliases: []\ngroup_members:\n- X\n- Y'
  self.assertEqual(replace_list(original,'group_members',['X','Y']),expected)
  self.assertEqual(replace_list(expected,'group_members',['X','Y']),expected)
 def test_other_metadata_survives(self):
  raw='group_members:\n  - A\n  - B\nsources:\n- Reference\nclinical_priority: tier_1'
  out=replace_list(raw,'group_members',['C','C'])
  self.assertEqual(out,'group_members:\n- C\nsources:\n- Reference\nclinical_priority: tier_1')
 def test_duplicate_keys_and_empty_lists(self):
  self.assertEqual(replace_list('group_members: []\ngroup_members:\n- A','group_members',[]),'group_members: []')
 def test_included_section_preserves_explanation(self):
  body='## 설명\nKeep this\n## 포함 질환\n- [[A]]\n## 치료\nKeep treatment\n'
  out=replace_included_section(body,['B'])
  self.assertIn('Keep this',out);self.assertIn('Keep treatment',out);self.assertNotIn('[[A]]',out)
  self.assertEqual(replace_included_section(out,['B']),out)
 def test_all_current_sources_are_stable(self):
  diseases=json.loads((ROOT/'_webapp/data/diseases.json').read_text(encoding='utf8'))
  hierarchy=json.loads((ROOT/'_webapp/data/disease-hierarchy.json').read_text(encoding='utf8'));by={d['slug']:d for d in diseases}
  for d in diseases:
   if not d.get('groupOverview'):continue
   raw=(ROOT/d['sourcePath']).read_text(encoding='utf8');front,body=split_frontmatter(raw)
   members=[by[s]['title'] for s in hierarchy['groupMemberSlugsBySlug'][d['slug']]]
   rendered=('---\n'+replace_list(front,'group_members',members)+'\n---\n'+replace_included_section(body,members)).rstrip()+'\n'
   self.assertEqual(rendered,raw,d['title'])
if __name__=='__main__':unittest.main()
