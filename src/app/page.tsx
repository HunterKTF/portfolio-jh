import IconLinks from "@/components/home/iconLinks";
import Titles from "@/components/home/titles";
import Descriptions from "@/components/home/descriptions";
import Profile from "@/components/home/profile";
import Stats from "@/components/home/stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-10 xl:gap-0 mb-5">
          <div className="xl:order-first order-last flex flex-col gap-5 xl:gap-10">
            <Titles />
            <Descriptions />
            <IconLinks />
          </div>
          <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
            <Profile />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
