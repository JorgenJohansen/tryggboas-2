import client from './sanity';

export async function getPages(){
    const results = await client.fetch(`*[_type == 'page']`)
    return results;
}