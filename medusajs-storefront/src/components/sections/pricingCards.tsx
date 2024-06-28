import * as Craft from "@/components/craft";

const PricingCards = () => {
  return (
    <Craft.Section>
      <Craft.Container className="!py-0">
        <section x-data="{annual: false}">
          <div className="px-8 mx-auto md:px-12 lg:px-12 max-w-7xl">
            <div className="mx-auto max-w-7xl px-4l lg:text-center sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto lg:max-w-none">
                <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                  Level up your{" "}
                  <span className="lg:block">development experience</span>
                </h2>
                <ul className="flex flex-col items-start justify-center gap-1 mt-12 text-base font-normal tracking-wide text-gray-500 list-none lg:flex-row lg:gap-4">
                  <li>
                    <em>Full refund policy</em>
                  </li>
                  <li className="hidden lg:block">·</li>
                  <li>
                    <em>Used by hundreds of other developers</em>
                  </li>
                  <li className="hidden lg:block">·</li>
                  <li>
                    <em>Dedicated and fast support</em>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="flex flex-col justify-between lg:flex-row lg:items-end">
                    <div>
                      <h1 className="text-4xl font-semibold tracking-tighter text-gray-900">
                        Flexible Pricing Plans,
                        <span className="text-gray-600">suitable for all needs</span>
                      </h1>
                      <p className="mt-4 text-base font-medium text-gray-500">
                        Choose the plan that fits your project requirements the best.
                        <span className="md:block">Flexible options for startups, SMBs, and enterprises.</span>
                      </p>
                    </div>
                    <div className="mx-auto md:max-w-sm lg:ml-auto">
                      <div className="inline-flex w-full border rounded-lg mt-6 overflow-hidden bg-chalk p-0.5 z-0">
                        <button className="block w-full px-8 py-2 text-xs font-medium text-black transition bg-gray-100 border border-transparent rounded-md" @click="annual = false" :className="{ 'bg-gray-100 text-black': !annual }" type="button">
                          Monthly
                        </button>
                        <button className="block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md" @click="annual = true" :className="{ 'bg-gray-100 text-black': annual }" type="button">
                          Annual
                        </button>
                      </div>
                    </div>
                  </div> */}
            <div className="grid grid-cols-1 gap-2 mt-24 lg:grid-cols-3">
              <div className="p-2 overflow-hidden border rounded-3xl">
                <div className="flex flex-col gap-4 h-full p-8 bg-white border shadow-2xl rounded-2xl lg:p-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-black lg:text-2xl">
                        Hobby
                      </span>
                      <div className="flex items-center justify-center text-black rounded-full size-12 bg-gray-50">
                        ❖
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl text-black">
                        <span x-text="annual ? '$7.00' : '$15.00'">$15.00</span>
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        per month
                        {/* <span x-show="annual" style="display: none">
                                (billed anually)
                              </span> */}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-12">
                    <p className="text-lg font-medium text-black lg:text-2xl">
                      includes
                    </p>
                    <ul
                      className="gap-4 mt-4 space-y-3 font-medium text-gray-500 list-none lg:gap-6 not-prose"
                      role="list"
                    >
                      <li className="flex items-center gap-2">
                        ⏤ <span> Unlimited deploys </span>
                      </li>
                      <li className="flex items-center gap-2">
                        ⏤ <span> Unlimited members </span>
                      </li>
                      <li className="flex items-center gap-2">
                        ⏤ <span> 5 TB cloud storage </span>
                      </li>
                      <li className="flex items-center gap-2">
                        ⏤ <span> Growth oriented </span>
                      </li>
                      <li className="flex items-center gap-2">
                        ⏤ <span> Marketing campaigns </span>
                      </li>
                    </ul>
                    <div className="flex w-full mt-6">
                      <button
                        className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        aria-describedby="planDescription"
                        aria-label="Button"
                        type="button"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 overflow-hidden border rounded-3xl lg:col-span-2">
                <div className="flex flex-col gap-4 h-full p-8 bg-white border shadow-2xl rounded-2xl lg:p-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-black lg:text-2xl">
                        Hobby
                      </span>
                      <div className="flex items-center justify-center text-black rounded-full size-12 bg-gray-50">
                        ❖
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl text-black">
                        <span x-text="annual ? '$15.00' : '$30.00'">
                          $30.00
                        </span>
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        per month
                        {/* <span x-show="annual" style="display: none">
                                (billed anually)
                              </span> */}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-12">
                    <p className="text-lg font-medium text-black lg:text-2xl">
                      Includes
                    </p>
                    <div className="grid lg:grid-cols-2">
                      <ul
                        className="gap-4 mt-4 space-y-3 font-medium text-gray-500 list-none lg:gap-6 not-prose"
                        role="list"
                      >
                        <li className="flex items-center gap-2">
                          ⏤ <span> Unlimited deploys </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> Unlimited members </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> 5 TB cloud storage </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> Growth oriented </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> Marketing campaigns </span>
                        </li>
                      </ul>
                      <ul
                        className="gap-4 mt-4 space-y-3 font-medium text-gray-500 list-none lg:gap-6 not-prose"
                        role="list"
                      >
                        <li className="flex items-center gap-2">
                          ⏤ <span> Unlimited deploys </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> Unlimited members </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> 5 TB cloud storage </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> Growth oriented </span>
                        </li>
                        <li className="flex items-center gap-2">
                          ⏤ <span> Marketing campaigns </span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-full mt-6">
                      <button
                        className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        aria-describedby="planDescriptionLink"
                        aria-label="Learn More about Plan"
                        role="button"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Craft.Container>
    </Craft.Section>
  );
};

export default PricingCards;
