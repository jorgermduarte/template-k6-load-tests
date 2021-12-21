import http from 'k6/http';
import { sleep } from 'k6';
import faker from 'faker';

export default function () {
    const exampleObject = {
        name: faker.random.word(5),
        city: faker.address.city(),
        email: faker.internet.email()
    };
    console.log(
        'Faker.js usage example imported from npm [bundled with Webpack]',
        JSON.stringify(exampleObject)
    );
    http.get('https://test.k6.io');
    sleep(1);
}
