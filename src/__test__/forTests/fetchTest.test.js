import { dataFetch } from '../../helpers/fetch';

describe('dataFetch function - word check', () => {
    test('should fetch data successfully when word exists', async () => {
        const url = "https://wordlist.onrender.com/hello"
        const method = 'GET';
        const body = {};
        const data = await dataFetch(url, method, body);
        expect(data).toEqual({
            ok: true,
            msg: 'Tareas encontradas',
            data: expect.arrayContaining([
                expect.objectContaining({
                    "_id": expect.any(String),
                    "word": expect.any(String),
                    "__v": expect.any(Number),
                }),
            ]),
        });
    });
})

test('should handle errors during fetching', async () => {
    const url = "https://wordlist.onrender.com/xygfg";
    const method = 'GET';
    const body = {};
    try {
        await dataFetch(url, method, body);
    } catch (error) {
        expect(error).toBeDefined();
        expect(error).toEqual({
            ok: false,
            msg: expect.any(String)
        });
    }
});


