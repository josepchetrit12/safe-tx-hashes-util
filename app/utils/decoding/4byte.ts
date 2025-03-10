export async function fetch4ByteSignature(methodId: string): Promise<string | null> {
    try {
      const url = `https://www.4byte.directory/api/v1/signatures/?hex_signature=${methodId}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        // Sort results by ID (ascending) and take the one with the lowest ID
        const sortedResults = [...data.results].sort((a, b) => a.id - b.id);
        return sortedResults[0].text_signature;
      }
      return null;
    } catch (error) {
      console.error("Error fetching method signature:", error);
      return null;
    }
  }