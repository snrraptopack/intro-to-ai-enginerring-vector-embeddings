
--The query used to calculate the similarity between the query and the documents
create or replace function match_documents (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
select
    embeddingDocument.id,
    embeddingDocument.content,
    1 - (embeddingDocument.embedding <=> query_embedding) as similarity
from embeddingDocument
where embeddingDocument.embedding <=> query_embedding < 1 - match_threshold
order by embeddingDocument.embedding <=> query_embedding
    limit match_count;
$$;
