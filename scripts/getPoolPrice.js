const hre = require("hardhat");

async function main() {
 const pool_address = "0xcbcdf9626bc03e24f779434178a73a0b4bad62ed";

    //Deploy
    const Oracle = await hre.ethers.getContractFactory("UniswapV3Oracle");
    const oracle = await Oracle.deploy(pool_address);
    console.log("Deploying contract ....");
    
    //Wait until deployment is successful
    await oracle.deployed();
    console.log("Contract Deployed with address: ",oracle.address);

    //Call Uniswap v3 Oracle
    let [price, decimals] = await oracle.getPrice.call();

    //Format returned variables
    price = Number(price.toString());
    decimals = Number(decimals.toString());

    //Price WBTC
    const result = price / decimals;
    console.log("Price of WBTC/WETH: ", result);
    
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
