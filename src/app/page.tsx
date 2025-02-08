import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="HAPSCALE Benefits"
        title=" Why should you use HapScale?"
      >
        Welcome to HapScale! We believe that being happy is super important, both for people and for companies. Our goal is to help workers feel joyful and satisfied, which leads to better work and happy teams. We use creative ideas and special plans to make sure everyone enjoys their job. Join us in making the world a happier place, one person and one company at a time.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="WATCH A DEMO"
        title="See how HapScale works"
      >
        . Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Our customers are not only satisfied but Happiest all over the World!
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        More Doubts Regarding our services.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
