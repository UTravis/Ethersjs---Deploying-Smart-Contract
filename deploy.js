const ethers = require("ethers");
const fs = require('fs-extra');
require("dotenv").config();

async function main() {
    // RPC Call
    const providers = new ethers.providers.JsonRpcProvider(process.env.RPC_ENDPOINT);
    // Connecting wallet to sign transaction
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, providers);

    const bin = fs.readFileSync("./Employees_sol_Employees.bin","utf8");
    const abi = fs.readFileSync("./Employees_sol_Employees.abi", "utf8");

    const contractDeployment = new ethers.ContractFactory(abi, bin, wallet);
    const contract = await contractDeployment.deploy(); // Deploying contract
    
    console.log("Contract deploying!! Please wait....")
    // console.log(contract); // Logging the contract object

    // Contract Transaction
    const contractTransaction = contract.deployTransaction;
    //console.log(contractTransaction); // Returns contract transaction

    // Contract Reciept
    const contractReciept = await contract.deployTransaction.wait(1); // Waits for 2 block confirmations
    console.log(contractReciept);
}

main()






