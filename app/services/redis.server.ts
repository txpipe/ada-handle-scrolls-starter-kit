import * as redis from 'redis';

const client = redis.createClient({
    url: 'redis://kvrocks-mainnet-adahandle.ftr-scrolls-v0.svc.cluster.local:6666',
    
});

export interface AdaHandle {
    key: string
    value: string
}

export async function searchHandle(name: string): Promise<AdaHandle[]> {
    if (!client.isReady) {
        console.log('connecting redis client');
        await client.connect();
    }

    const keys = await client.sendCommand(["keys",`c.${name}*`]) as string[];

    if (!keys) return [];

    const values = await client.mGet(keys);
    
    let index = 0;

    const result = keys.map((k) => {
        const item: AdaHandle = {
            key: k.split('c.')[1],
            value: values[index] || ''
        };
        index += 1;
        return item;
    });

    return result;
}