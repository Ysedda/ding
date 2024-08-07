# Pre-requisites

- Node.js
- npm
- Docker
- Prisma CLI

## Installation

```bash
npm install
```

## Create .env file

```bash
DATABASE_URL="postgresql://postgres:pw@localhost:5432/mydb?schema=public"
```

## Launching the database

```bash
docker run --name postgres -e POSTGRES_PASSWORD=pw -d -p 5432:5432 postgres
```

## Applying database model

```bash
npx prisma db push
```

## Applying seeds

```bash
npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
