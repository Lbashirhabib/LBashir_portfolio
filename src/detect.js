import detectEthereumProvider from "@metamask/detect-provider"

async function setup() {
  const provider = await detectEthereumProvider()

  if (provider && provider === window.ethereum) {
    console.log("MetaMask is available!")
    startApp(provider) // Initialize your dapp with MetaMask.
  } else {
    console.log("Please install MetaMask!")
  }
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?")
  }
}

window.addEventListener("load", setup)

const chainId = await window.ethereum.request({ method: "eth_chainId" })

window.ethereum.on("chainChanged", handleChainChanged)

function handleChainChanged(chainId) {
  // We recommend reloading the page, unless you must do otherwise.
  window.location.reload()
}

// You should only attempt to request the user's account in response to user interaction, such as
// selecting a button. Otherwise, you risk spamming the user. If you fail to retrieve
// the user's account, you should encourage the user to initiate the attempt.
const ethereumButton = document.querySelector(".enableEthereumButton")
const showAccount = document.querySelector(".showAccount")

ethereumButton.addEventListener("click", () => {
  getAccount()
})

// While awaiting the call to eth_requestAccounts, you should disable any buttons the user can
// select to initiate the request. MetaMask rejects any additional requests while the first is still
// pending.
async function getAccount() {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error.
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.")
      } else {
        console.error(err)
      }
    })
  const account = accounts[0]
  showAccount.innerHTML = account
}

