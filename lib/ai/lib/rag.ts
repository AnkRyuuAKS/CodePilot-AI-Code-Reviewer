import { pineconeIndex } from "@/lib/pinecone";
import { embed } from "ai"
import { google } from "@ai-sdk/google"

// export async function generateEmbedding(text: string) {
//     const {embedding } = await embed({
//         model: google.embedding("gemini-embedding-001"),
//         value:text
//     })
//     console.log("Embedding length:", embedding.length);
//     return embedding
// }
//change into the lower dimension model
export async function generateEmbedding(text: string) {
  const response = await fetch(
    "https://api.jina.ai/v1/embeddings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.JINA_API_KEY}`,
      },
      body: JSON.stringify({
        model: "jina-embeddings-v5-omni-small",
        input: [text],
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Jina Error:", data);
    throw new Error(data.detail || "Failed to generate embedding");
  }

  const embedding = data.data[0].embedding;

//   console.log("Embedding length:", embedding.length);

  return embedding as number[];
}

export async function indexCodebase(repoId: string, files: { path: string, content: string }[]){
    const vectors = [];

    for(const file of files){
        const content = `File :${file.path}\n\n${file.content}`;

        const truncatedContent = content.slice(0, 8000)
        
        try {
            const embedding = await generateEmbedding(truncatedContent);

            vectors.push({
                id: `${repoId}-${file.path.replace(/\//g, '_')}`,
                values: embedding,
                metadata: {
                    repoId,
                    path: file.path,
                    content:truncatedContent
                }
            })
        } catch (error) {
            console.log(`Failed to embed ${file.path}:`, error);
        }
    }

    if (vectors.length > 0) {
        const batchSize = 100;
        for (let i = 0; i < vectors.length; i += batchSize){
            const batch = vectors.slice(i, i + batchSize);
            await pineconeIndex.upsert({ records: batch })
        }
    }

    console.log("Indexing complete")
}

export async function retrieveContext(query: string, repoId: string, topK: number = 5) {
    const embedding = await generateEmbedding(query);

    const results = await pineconeIndex.query({
        vector: embedding,
        topK,
        includeMetadata:true,
        filter: { repoId }
    })

    return results.matches.map(match => match.metadata?.content as string).filter(Boolean);
}
