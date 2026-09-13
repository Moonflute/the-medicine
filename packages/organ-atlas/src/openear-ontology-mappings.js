// Verified against EBI OLS UBERON records. Generic bone identity only;
// this does not infer specimen laterality or expert validation of the mesh.
export const openearOntologyMappings={
 Malleus:{ontologyId:'UBERON:0001689',ontologyTermLabel:'malleus bone'},
 Incus:{ontologyId:'UBERON:0001688',ontologyTermLabel:'incus bone'},
 Stapes:{ontologyId:'UBERON:0001687',ontologyTermLabel:'stapes bone'},
};
export function openearOntology(id){const term=openearOntologyMappings[id];return term?{...term,mappingEvidence:'source-label-to-ontology-term',mappingReference:'https://www.ebi.ac.uk/ols4/ontologies/uberon/classes?iri='+encodeURIComponent('http://purl.obolibrary.org/obo/'+term.ontologyId.replace(':','_'))}:{};}
