# node-sqs-producer

Small Express + TypeScript service that publishes messages to an AWS SQS
queue using [`sqs-producer`](https://www.npmjs.com/package/sqs-producer).

## Setup

```bash
yarn install
```

## Configuration

Settings are read from environment variables. Optionally they can be placed
in `envs/.env-<NODE_ENV>` (e.g. `envs/.env-development`), which is loaded
at startup when present.

| Variable | Description |
|---|---|
| `AWS_REGION` | AWS region of the queue |
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_QUEUE_URL` | URL of the target SQS queue |
| `AWS_BATCH_SIZE` | Batch size used by the producer |
| `PORT` | HTTP port (default `9000`) |

## Usage

Start the server (for example with `NODE_ENV=development npx ts-node src/index.ts`)
and call the root route:

```bash
curl http://localhost:9000/
```

`GET /` sends `{"message":"hello"}` to the queue (JSON-serialized as the
message body, with a generated UUID as id) and returns the same payload.
If SQS rejects the message, the endpoint answers `502`.
