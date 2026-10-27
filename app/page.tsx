import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionTitle from "@/components/section-title";
import NestedBorderedContainer from "@/components/containers/NestedBorderedContainer";
import Image from "next/image";
import TestImg from "@/assets/images/test.jpg";
import Divider from "@/components/divider";
import SectionContainer from "@/components/containers/SectionContainer";


export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex flex-1 flex-col gap-20">
        <section>
          test
        </section>

        <SectionContainer>
          <SectionTitle title="Features" />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative rounded-[10px] overflow-hidden">
              <Image src={TestImg} alt="feature" fill className="object-cover object-top" />
            </div>

            <div className="flex flex-col gap-2">
              <NestedBorderedContainer>
                <h5 className="font-audiowide tracking-wider px-3.5">Section title</h5>
                <Divider />
                <p className="text-[#9E9E9E] px-3.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatibus veniam fugiat excepturi quod aut ex sequi aliquam? Harum veniam neque dignissimos praesentium repellat eveniet blanditiis unde. Aspernatur, repellendus corrupti?</p>
              </NestedBorderedContainer>

              <NestedBorderedContainer>
                <h5 className="font-audiowide tracking-wider px-3.5">Section title</h5>
                <Divider />
                <p className="text-[#9E9E9E] px-3.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatibus veniam fugiat excepturi quod aut ex sequi aliquam? Harum veniam neque dignissimos praesentium repellat eveniet blanditiis unde. Aspernatur, repellendus corrupti?</p>
              </NestedBorderedContainer>
            </div>


            <div className="flex flex-col gap-2">
              <NestedBorderedContainer>
                <h5 className="font-audiowide tracking-wider px-3.5">Section title</h5>
                <Divider />
                <p className="text-[#9E9E9E] px-3.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatibus veniam fugiat excepturi quod aut ex sequi aliquam? Harum veniam neque dignissimos praesentium repellat eveniet blanditiis unde. Aspernatur, repellendus corrupti?</p>
              </NestedBorderedContainer>

              <NestedBorderedContainer>
                <h5 className="font-audiowide tracking-wider px-3.5">Section title</h5>
                <Divider />
                <p className="text-[#9E9E9E] px-3.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatibus veniam fugiat excepturi quod aut ex sequi aliquam? Harum veniam neque dignissimos praesentium repellat eveniet blanditiis unde. Aspernatur, repellendus corrupti?</p>
              </NestedBorderedContainer>
            </div>

            <div className="relative rounded-[10px] overflow-hidden">
              <Image src={TestImg} alt="feature" fill className="object-cover object-bottom" />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle title="why us" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <NestedBorderedContainer className="size-full items-center justify-center">
              <h3 className="uppercase font-audiowide">about</h3>
            </NestedBorderedContainer>

            <NestedBorderedContainer>
              <h5 className="uppercase text-[#939393] px-3.5">title</h5>
              <Divider />
              <div className="flex gap-8 px-3.5">
                <h1 className="font-audiowide text-[#CACACA]">01</h1>

                <ul className="flex flex-col gap-2 list-disc list-inside font-audiowide text-sm">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing!</li>
                  <li>Voluptatem, fugit perspiciatis</li>
                  <li>Cupiditate repellendus quis eum nostrum</li>
                </ul>
              </div>
            </NestedBorderedContainer>
            <NestedBorderedContainer>
              <h5 className="uppercase text-[#939393] px-3.5">title</h5>
              <Divider />
              <div className="flex gap-8 px-3.5">
                <h1 className="font-audiowide text-[#CACACA]">02</h1>

                <ul className="flex flex-col gap-2 list-disc list-inside font-audiowide text-sm">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing!</li>
                  <li>Voluptatem, fugit perspiciatis</li>
                  <li>Cupiditate repellendus quis eum nostrum</li>
                </ul>
              </div>
            </NestedBorderedContainer>
            <NestedBorderedContainer>
              <h5 className="uppercase text-[#939393] px-3.5">title</h5>
              <Divider />
              <div className="flex gap-8 px-3.5">
                <h1 className="font-audiowide text-[#CACACA]">03</h1>

                <ul className="flex flex-col gap-2 list-disc list-inside font-audiowide text-sm">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing!</li>
                  <li>Voluptatem, fugit perspiciatis</li>
                  <li>Cupiditate repellendus quis eum nostrum</li>
                </ul>
              </div>
            </NestedBorderedContainer>
            <NestedBorderedContainer>
              <h5 className="uppercase text-[#939393] px-3.5">title</h5>
              <Divider />
              <div className="flex gap-8 px-3.5">
                <h1 className="font-audiowide text-[#CACACA]">04</h1>

                <ul className="flex flex-col gap-2 list-disc list-inside font-audiowide text-sm">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing!</li>
                  <li>Voluptatem, fugit perspiciatis</li>
                  <li>Cupiditate repellendus quis eum nostrum</li>
                </ul>
              </div>
            </NestedBorderedContainer>
            <NestedBorderedContainer>
              <h5 className="uppercase text-[#939393] px-3.5">title</h5>
              <Divider />
              <div className="flex gap-8 px-3.5">
                <h1 className="font-audiowide text-[#CACACA]">05</h1>

                <ul className="flex flex-col gap-2 list-disc list-inside font-audiowide text-sm">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing!</li>
                  <li>Voluptatem, fugit perspiciatis</li>
                  <li>Cupiditate repellendus quis eum nostrum</li>
                </ul>
              </div>
            </NestedBorderedContainer>
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle title="contact us" />

          <NestedBorderedContainer className="size-full items-center justify-center">
            <h1 className="font-audiowide uppercase tracking-wider">want to learn more?</h1>
            <p className="tracking-[6px] text-center">WE ARE ALWAYS OPEN TO NEW OPPORTUNITIES</p>

            <p>Leave us your email:</p>

            <div className="flex gap-2">
              <input type="email" className="h-10 border rounded-lg border-[#959595] min-w-80" />
              <button className="bg-primary rounded-lg px-8 uppercase">send</button>
            </div>

            <p>Or contact with:</p>
            <div className="flex justify-center gap-2">
              <div className="size-7 bg-[#959595] rounded"></div>
              <div className="size-7 bg-[#959595] rounded"></div>
            </div>
          </NestedBorderedContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle title="FAQ" />

          <div className="flex flex-col gap-2">
            <label htmlFor="faq1" className="group">
              <input type="checkbox" name="faq1" id="faq1" className="peer sr-only" />
              <NestedBorderedContainer className="cursor-pointer gap-0! group-has-checked:gap-3!">
                <div className="flex items-center justify-between px-3.5">
                  <p className="font-audiowide text-[#939393]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                  <div>
                    icon
                  </div>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden h-0 group-has-checked:h-full ">
                  <div className="flex justify-center">
                    <Divider className="flex justify-center w-0! group-has-checked:w-full! duration-300" />
                  </div>
                  <div className="px-3.5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti necessitatibus, molestias magnam, sapiente hic dolorem explicabo quos quae asperiores a tempora optio natus repellat quidem nobis atque praesentium aperiam mollitia.
                    Ducimus, aliquid! Ea, consequuntur. Cupiditate architecto libero laboriosam voluptates, aliquam tempora ipsam, deserunt minus quaerat impedit eum illum, deleniti ipsa suscipit? Odio consequatur, eius minima nisi beatae atque qui consectetur?
                  </div>
                </div>
              </NestedBorderedContainer>
            </label>

            <label htmlFor="faq2" className="group">
              <input type="checkbox" name="faq2" id="faq2" className="peer sr-only" />
              <NestedBorderedContainer className="cursor-pointer gap-0! group-has-checked:gap-3!">
                <div className="flex items-center justify-between px-3.5">
                  <p className="font-audiowide text-[#939393]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                  <div>
                    icon
                  </div>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden h-0 group-has-checked:h-full ">
                  <div className="flex justify-center">
                    <Divider className="flex justify-center w-0! group-has-checked:w-full! duration-300" />
                  </div>
                  <div className="px-3.5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti necessitatibus, molestias magnam, sapiente hic dolorem explicabo quos quae asperiores a tempora optio natus repellat quidem nobis atque praesentium aperiam mollitia.
                    Ducimus, aliquid! Ea, consequuntur. Cupiditate architecto libero laboriosam voluptates, aliquam tempora ipsam, deserunt minus quaerat impedit eum illum, deleniti ipsa suscipit? Odio consequatur, eius minima nisi beatae atque qui consectetur?
                  </div>
                </div>
              </NestedBorderedContainer>
            </label>

            <label htmlFor="faq3" className="group">
              <input type="checkbox" name="faq3" id="faq3" className="peer sr-only" />
              <NestedBorderedContainer className="cursor-pointer gap-0! group-has-checked:gap-3!">
                <div className="flex items-center justify-between px-3.5">
                  <p className="font-audiowide text-[#939393]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                  <div>
                    icon
                  </div>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden h-0 group-has-checked:h-full ">
                  <div className="flex justify-center">
                    <Divider className="flex justify-center w-0! group-has-checked:w-full! duration-300" />
                  </div>
                  <div className="px-3.5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti necessitatibus, molestias magnam, sapiente hic dolorem explicabo quos quae asperiores a tempora optio natus repellat quidem nobis atque praesentium aperiam mollitia.
                    Ducimus, aliquid! Ea, consequuntur. Cupiditate architecto libero laboriosam voluptates, aliquam tempora ipsam, deserunt minus quaerat impedit eum illum, deleniti ipsa suscipit? Odio consequatur, eius minima nisi beatae atque qui consectetur?
                  </div>
                </div>
              </NestedBorderedContainer>
            </label>

            <label htmlFor="faq4" className="group">
              <input type="checkbox" name="faq4" id="faq4" className="peer sr-only" />
              <NestedBorderedContainer className="cursor-pointer gap-0! group-has-checked:gap-3!">
                <div className="flex items-center justify-between px-3.5">
                  <p className="font-audiowide text-[#939393]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                  <div>
                    icon
                  </div>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden h-0 group-has-checked:h-full ">
                  <div className="flex justify-center">
                    <Divider className="flex justify-center w-0! group-has-checked:w-full! duration-300" />
                  </div>
                  <div className="px-3.5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti necessitatibus, molestias magnam, sapiente hic dolorem explicabo quos quae asperiores a tempora optio natus repellat quidem nobis atque praesentium aperiam mollitia.
                    Ducimus, aliquid! Ea, consequuntur. Cupiditate architecto libero laboriosam voluptates, aliquam tempora ipsam, deserunt minus quaerat impedit eum illum, deleniti ipsa suscipit? Odio consequatur, eius minima nisi beatae atque qui consectetur?
                  </div>
                </div>
              </NestedBorderedContainer>
            </label>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  );
}
