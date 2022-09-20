import { Client } from '@elastic/elasticsearch'
import { SearchResponse } from '@elastic/elasticsearch/lib/api/types';

const client = new Client({
  node: 'https://elastic-es-http.ftr-adahandle-v0.svc.cluster.local:9200',
  auth: { username: '', password: '' },
});

export async function searchHandle(name: string): Promise<SearchResponse> {
    const result = await client.search({
        index: 'adahandles.mainnet',
        size: 20,

        // query: {
        //   match: {
        //     quote: name
        //   }
        // }
      });
    return result;
} 

export async function queryClient() {
}