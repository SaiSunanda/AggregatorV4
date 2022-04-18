const { ethers } = require("hardhat");
  
    let routerAddress = "0x1111111254fb6c44bAC0beD2854e76F90643097d";
    let _daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    let _inchAddress = "0x111111111117dC0aa78b770fA6A738034120C302";
    console.log(routerAddress);
    console.log(_daiAddress);
    console.log(_inchAddress);

    async function main() {

      const SwapProxy = await ethers.getContractFactory("SwapProxy");
      const swapProxy = await SwapProxy.deploy(routerAddress,_daiAddress,_inchAddress);
      console.log("SwapProxy Deployed at :", swapProxy.address);
  
  };

  main()
  .then(() => process.exit(0))
  .catch((e)=>{
      console.log("Error Deploying : ", e);
      process.exit(1);
  })





  