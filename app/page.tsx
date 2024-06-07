"use client"
import Appbar from "@/components/Appbar";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <Appbar />
    </RecoilRoot>
  );
}
