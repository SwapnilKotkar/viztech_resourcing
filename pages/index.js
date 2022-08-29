import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import ApplyBanner from "../components/ApplyBanner";
import Section from "../components/Section";
import Blogs from "../components/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ApplyBanner />
      <Section />
      <Blogs />
    </>
  );
}
