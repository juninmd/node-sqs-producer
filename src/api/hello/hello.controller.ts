import Producer from '../../producer';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  try {
    await Producer.getInstance().sendMessage(body);
  } catch (error) {
    // Express 4 does not catch async rejections: without this the request
    // hangs until timeout and only the global unhandledRejection logs it.
    console.error(`sendMessage failed: ${(error as Error).message}`);
    return res.status(502).send({ error: 'Failed to send message to SQS' });
  }

  res.send(body);
}

export { getHello };