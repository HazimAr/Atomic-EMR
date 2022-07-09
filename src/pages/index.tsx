import Agencies from "@components/home/agencies";
import Hero from "@components/home/hero";
import Manage from "@components/home/manage";
import Stats from "@components/home/stats";
import Testimonials from "@components/home/testimonials";
import Therapists from "@components/home/therapists";

export default function () {
  return (
    <>
      <Hero />
      <Manage />
      <Stats />
      <Therapists />
      <Agencies />
      <Testimonials />
    </>
  );
}
