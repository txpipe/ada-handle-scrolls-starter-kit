import { Client } from '@elastic/elasticsearch'
import { SearchResponse } from '@elastic/elasticsearch/lib/api/types';

const client = new Client({
  node: 'https://elastic-es-http.ftr-adahandle-v0.svc.cluster.local:9200',
  auth: { username: process.env.ELASTIC_USERNAME!, password: process.env.ELASTIC_PASSWORD! },
  tls: { rejectUnauthorized: false}
});

export interface AdaHandle {
  key: string
  value: string
}

export async function searchHandle(name: string): Promise<SearchResponse<AdaHandle>> {
    const result = await client.search<AdaHandle>({
        index: 'adahandles.mainnet',
        query: {
          wildcard: { key: { value: `*${name}*`}}
        },
        size: 10,
      });
    return result;
}