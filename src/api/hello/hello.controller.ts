import Producer from '../../producer';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  await Producer.getInstance().sendMessage(body);

  res.send(body);
}

export { getHello };