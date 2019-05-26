# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

#Docker

For use this framework with docker, you must to run on host ``0.0.0.0`` on port`3333`, so i have change the `.env` :
```
HOST=0.0.0.0
PORT=3333
```

I have use image of TheCodingMachine to build my image. ``thecodingmachine/nodejs:10``.
