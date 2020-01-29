import { Client } from 'khipu-client';

const client = new Client({
  receiverId: process.env.KHIPU_RECEIVER_ID!,
  secret: process.env.KHIPU_SECRET!
});

async function main(): Promise<void> {
  const response = await client.getBanks();

  // const response = await client.createPayment({
  //   amount: 1000,
  //   currency: 'CLP',
  //   subject: 'test payment 0'
  // });

  // const response = await client.getPayment('the-payment-id');
  // const response = await client.deletePayment('the-payment-id');
  // const response = await client.confirmPayment('the-payment-id');

  // const response = await client.refundPayment('the-payment-id');

  console.log(JSON.stringify(response, null, 2));
}

main().catch((e) => console.error('ERROR', e));
