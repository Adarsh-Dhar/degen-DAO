"use client"
import Appbar from "@/components/Appbar";
import ProposalForm from "@/components/ProposalForm";
import ProposalList from "@/components/ProposalList";
import Voting from "@/components/Voting";
import GetAllVotes from "@/components/getAllVotes";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <Appbar />
      <ProposalForm />
      <ProposalList />
      <GetAllVotes />
      <Voting />
    </RecoilRoot>
  );
}
