// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { bootstrap } from './bootstrap';

const port = process.env.PORT || 8000;

bootstrap()
    .then((app) => app.listen(8000))
    .then(() => {
        console.log(
            `Application Started. Env : ${process.env.ENV}, PORT : ${port}`,
        );
    })
    .catch((err) => {
        console.error('Error occurred on bootstraping', err);
        process.exit(1);
    });
