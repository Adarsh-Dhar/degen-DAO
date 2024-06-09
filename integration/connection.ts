import { ethers } from "ethers";

// Contract ABIs
import { DAOTreasuryABI,DAOABI, DAOGovernanceABI, DAOMembershipABI, DAOTokenABI, DAOTokenDistributionABI, DAOVotingABI } from "./abi";
import { DAOTokenAddress,DAOGovernanceAddress,DAOMembershipAddress,DAOTokenDistributionAddress, DAOTreasuryAddress, DAOVotingAddress } from "./address";



// Ethereum provider and signer
let provider;
let signer : any;

// Initialize the provider and signer
export const initEthereum = async () => {
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        console.log(`signer : ${signer}`)
        console.log(`provider : ${provider}`)
        return { signer, provider };

    } else {
        console.log("MetaMask is not installed!");
        return null;
    }
};



export const setDAOGovernanceContract = async () => {
    const result = await initEthereum();
    if (!result) {
        console.log("MetaMask is not installed!");
        return null; // Ensure function returns null if MetaMask is not installed
    }
    
    const { signer, provider } = result;
    
    console.log(`DAOGovernance Address: ${DAOGovernanceAddress}`);
    
    const contract = new ethers.Contract(DAOGovernanceAddress, DAOGovernanceABI, signer);
    console.log("DAO Governance Contract:", contract);
    
    return contract;
};

export const getDAOGovernanceContract = async () => {
    const result = await initEthereum();
    if (!result) {
        console.log("MetaMask is not installed!");
        return null; // Ensure function returns null if MetaMask is not installed
    }
    
    const { provider } = result;
    
   
    
    const contract = new ethers.Contract(DAOGovernanceAddress, DAOGovernanceABI, provider);
    console.log("DAO Governance Contract:", contract);
    
    return contract;
};

export const getDAOMembershipContract = () => {
    console.log(`signer : ${signer}`);
    
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

export const setDAOVotingContract = async () => {
    const result = await initEthereum();
    if (!result) {
        console.log("MetaMask is not installed!");
        return null; // Ensure function returns null if MetaMask is not installed
    }
    
    const { signer, provider } = result;
    
    console.log(`DAOVoting Address: ${DAOVotingAddress}`);
    
    const contract = new ethers.Contract(DAOVotingAddress, DAOVotingABI, signer);
    console.log("DAO voting Contract:", contract);
    
    return contract;
};

export const getDAOVotingContract = async () => {
    const result = await initEthereum();
    if (!result) {
        console.log("MetaMask is not installed!");
        return null; // Ensure function returns null if MetaMask is not installed
    }
    
    const { provider } = result;
    
   
    
    const contract = new ethers.Contract(DAOVotingAddress, DAOVotingABI, provider);
    console.log("DAO Voting Contract:", contract);
    
    return contract;
};
