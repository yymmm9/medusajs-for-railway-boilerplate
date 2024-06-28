import * as Craft from "@/components/craft";

const PricingCards = () => {
  return (
    <Craft.Section>
      <Craft.Container className="!py-0">
        <div>
          <div className="h-full px-8 py-0 mx-auto md:px-12 lg:px-32 max-w-7xl">
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
            <div className="items-start gap-2 mx-auto mt-12 lg:grid lg:grid-cols-3 lg:-mx-24">
              <div className="flex flex-col justify-between h-full p-8 bg-gray-100 rounded-3xl">
                <div className="flex flex-col">
                  <div>
                    <h3
                      id="tier-standard"
                      className="mt-4 font-medium text-gray-900"
                    >
                      Spotless Monthly License
                    </h3>
                  </div>
                  <div className="order-first text-2xl font-medium text-gray-900">
                    $14 <span>/month</span>
                  </div>
                  <p className="mt-2 text-xs italic text-gray-500">
                    Excluding local taxes or VAT if applicable.
                  </p>
                  <ul
                    role="list"
                    className="flex flex-col gap-2 mt-12 text-sm text-gray-500"
                  >
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Boost your productivity with Spotless</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Available for Google Chrome and Chromium</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>License for 3 devices</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Permanent access to theSpotless community</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <button
                    className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-semibold text-gray-600 transition-all bg-white border border-gray-300 rounded-lg hover:text-gray-500"
                    aria-describedby="tier-standard"
                  >
                    Get started
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between h-full p-8 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-500 rounded-3xl">
                <div className="flex flex-col">
                  <div>
                    <h3
                      id="tier-standard"
                      className="mt-4 font-medium text-white"
                    >
                      Spotless Yearly License
                    </h3>
                  </div>
                  <div className="order-first text-2xl font-medium text-white">
                    $81 <span>/year</span>
                  </div>
                  <p className="mt-2 text-xs italic text-gray-200">
                    Excluding local taxes or VAT if applicable.
                  </p>
                  <ul
                    role="list"
                    className="flex flex-col gap-2 mt-12 text-sm text-white"
                  >
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Save 50% - 6 months free</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Boost your productivity with Spotless</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Available for Google Chrome and Chromium</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>License for 3 devices</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Permanent access to theSpotless community</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Get all updates and new features for one year</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <button
                    className="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-lg transition-all h-10 text-white bg-gradient-to-b from-white/[.105] hover:to-white/[.25] ring-1 ring-inset ring-white/20 to-white/[.15] w-full"
                    aria-describedby="tier-standard"
                  >
                    Get started
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between h-full p-8 bg-gray-100 rounded-3xl">
                <div className="flex flex-col">
                  <div>
                    <h3
                      id="tier-standard"
                      className="mt-4 font-medium text-gray-900"
                    >
                      Spotless Perpetual License
                    </h3>
                  </div>
                  <div className="order-first text-2xl font-medium text-gray-900">
                    $249 <span>/one-time</span>
                  </div>
                  <p className="mt-2 text-xs italic text-gray-500">
                    Excluding local taxes or VAT if applicable.
                  </p>
                  <ul
                    role="list"
                    className="flex flex-col gap-2 mt-12 text-sm text-gray-500"
                  >
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Pay once, use forever</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Boost your productivity with Spotless</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Available for Google Chrome and Chromium</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>License for 3 devices</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Permanent access to theSpotless community</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check-filled"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <p>Get all updates and new features</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <button
                    className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-semibold text-gray-600 transition-all bg-white border border-gray-300 rounded-lg hover:text-gray-500"
                    aria-describedby="tier-standard"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default PricingCards;
