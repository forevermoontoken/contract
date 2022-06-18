var ForeverMoonToken = artifacts.require("ForeverMoonToken");

// Deploy to mainnet
module.exports = function(deployer) {
  // deployment steps
    deployer.deploy(ForeverMoonToken, 
      "0xe1708a035D6F1bdd10d4D514Ab19829aAA8c8d48",
      "0xe1708a035D6F1bdd10d4D514Ab19829aAA8c8d48"
    );
};