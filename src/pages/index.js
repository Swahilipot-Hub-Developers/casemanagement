import Layout from "@/layout/Layout";
import Hero from "@/components/landing/Hero";
import FeaturedMentors from "@/components/landing/FeaturedMentors";
import CTA from "@/components/landing/CTA";
import FAQ from "@/components/landing/FAQ";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedMentors />
      <CTA />
      <FAQ />
    </Layout>
  );
};

export default Home;
