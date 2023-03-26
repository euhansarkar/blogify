import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../../Layout/Layout";
import SectionONe from "../../components/SectionOne/SectionONe";
import SectionTWo from "../../components/SectionTWo/SectionTWo";
import SectionTHRee from "../../components/SectionThree/SectionTHRee";
import SectionFour from "../../components/SectionFour/SectionFour";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <SectionONe />
        <SectionTWo />
        <SectionTHRee />
        <SectionFour/>
      </Layout>
    </>
  );
}
