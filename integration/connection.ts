import { ethers } from "ethers";

// Contract ABIs
import { DAOTreasuryABI,DAOABI, DAOGovernanceABI, DAOMembershipABI, DAOTokenABI, DAOTokenDistributionABI, DAOVotingABI } from "./abi";
import { DAOTokenAddress,DAOGovernanceAddress,DAOMembershipAddress,DAOTokenDistributionAddress, DAOTreasuryAddress, DAOVotingAddress } from "./address";

// Contract addresses (Replace these with your deployed contract addresses)
const DAOAddress = "0xYourDAOContractAddress";
const TokenAddress = "0xYourTokenContractAddress";

// Ethereum provider and signer
let provider;
let signer : any;

// Initialize the provider and signer
export const initEthereum = async () => {
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
    } else {
        console.log("MetaMask is not installed!");
    }
};

// Get the DAO contract instance
// export const getDAOContract = () => {
//     return new ethers.Contract(DAOAddress, DAOAbi, signer);
// };

// Get the Token contract instance
export const getDAOGovernanceContract = () => {
    return new ethers.Contract(DAOGovernanceAddress, DAOGovernanceABI, signer);
};

export const getDAOMembershipContract = () => {
    return new ethers.Contract(DAOMembershipAddress, DAOMembershipABI, signer);
};

export const getDAOTokenContract = () => {
    return new ethers.Contract(DAOTokenAddress, DAOTokenABI, signer);
};

export const getDAOTokenDistributionContract = () => {
    return new ethers.Contract(DAOTokenDistributionAddress, DAOTokenDistributionABI, signer);
};

export const getDAOTreasuryContract = () => {
    return new ethers.Contract(DAOTreasuryAddress, DAOTreasuryABI, signer);
};

export const getDAOVotingContract = () => {
    return new ethers.Contract(DAOVotingAddress, DAOVotingABI, signer);
};
