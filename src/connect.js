const { homedir } = require("os");
const near = require("near-api-js");
const { keyStores } = near;
const keyStore = new keyStores.UnencryptedFileSystemKeyStore(
  `${homedir()}/.near-credentials`
);
//Setup default client options
const options = {
  networkid: process.env.NEAR_NETWORK,
  nodeUrl: process.env.NEAR_NODE_URL,
  walletUrl: `https://wallet.${process.env.NEAR_NETWORK}.near.org`,
  helperUrl: `https://helper.${process.env.NEAR_NETWORK}.near.org`,
  explorerUrl: `https://explorer.${process.env.NEAR_NETWORK}.near.org`,
  keyStore: keyStore,
};

async function connectNearApi() {
  //configure the client with options
  const client = await near.connect(options);
  const provider = client.connection.provider;
  console.log("client config", client.config);

  //get current node status
  const status = await provider.status();
  console.log("Status:", status);
}
connectNearApi();
