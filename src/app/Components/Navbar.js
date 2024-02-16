import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-24 mb-10 shadow-md ">
      <div className="h-24 mb-8 z-[39] fixed w-full bg-white">
        <div className="flex items-center justify-between mx-auto container w-full h-full">
          {/* <div>
      <Image
      src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo.svg"
      width={150}
      height={150}
      alt="Logo"
    />
      </div>
      <div className='flex items-center justify-between gap-6 '>
        <p>Products</p>
        <p>About WeddingPro</p>
        <p>Our Customers</p>
        <p>Resources</p>
        <p>Blog</p>
      </div>
      <div className='flex items-center justify-between gap-6'>
        <p>Log in</p>
        <button>Sign up</button>
        <span>X</span>
      </div> */}
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden z-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu sm:pr-80 md:pl-20 menu-sm dropdown-content mt-2 z-[100] shadow bg-white rounded-box w-screen h-screen"
                >
                  <li>
                    <details className="text-xl">
                      <summary className="text-2xl">Products</summary>
                      <ul className="p-2 bg-white">
                        <li>
                          <a>
                            <h4 className="text-xl">Products</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Storefront</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Inbox</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Insights</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Reviews</h4>
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary className="text-2xl">About WeddingPro</summary>
                      <ul className="p-2 bg-white">
                        <li>
                          <a>
                            <h4 className="text-xl">About WeddingPro</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Fellowship for Change</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Educator Program</h4>
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>
                      <h3 className="text-2xl">Our Customers</h3>
                    </a>
                  </li>

                  <li>
                    <details>
                      <summary className="text-2xl">Resources</summary>
                      <ul className="p-2 bg-white">
                        <li>
                          <a>
                            <h4 className="text-xl">Resources</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Reports</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Webinars</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Events</h4>
                          </a>
                        </li>
                        <li>
                          <a>
                            <h4 className="text-xl">Vendor Support</h4>
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>
                      <h4 className="text-2xl">Blog</h4>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="link link-primary mt-20">
                      <h4 className="text-2xl">Log In</h4>
                    </a>
                  </li>
                  <li>
                    <a className="btn w-1/3 mt-5">Sign Up</a>
                  </li>
                  <li>
                    <button className="btn btn-square mt-5 w-1/3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-search"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>

              <Link href={"/"}>
                <Image
                  src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo.svg"
                  width={150}
                  height={150}
                  alt="Logo"
                  className="max-lg:hidden"
                />
              </Link>
            </div>
            <div className="navbar-center lg:hidden">
              
            <Link href={"/"}>
                <Image
                  src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo.svg"
                  width={150}
                  height={150}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg">
                <li>
                  <details>
                    <summary>Products</summary>
                    <ul className="p-2 bg-white">
                      <li>
                        <a>Products</a>
                      </li>
                      <li>
                        <a>Storefront</a>
                      </li>
                      <li>
                        <a>Inbox</a>
                      </li>
                      <li>
                        <a>Insights</a>
                      </li>
                      <li>
                        <a>Reviews</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>About WeddingPro</summary>
                    <ul className="p-2 bg-white">
                      <li>
                        <a>About WeddingPro</a>
                      </li>
                      <li>
                        <a>Fellowship for Change</a>
                      </li>
                      <li>
                        <a>Educator Program</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Our Customers</a>
                </li>

                <li>
                  <details>
                    <summary>Resources</summary>
                    <ul className="p-2 bg-white">
                      <li>
                        <a>Resources</a>
                      </li>
                      <li>
                        <a>Reports</a>
                      </li>
                      <li>
                        <a>Webinars</a>
                      </li>
                      <li>
                        <a>Events</a>
                      </li>
                      <li>
                        <a>Vendor Support</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="link link-primary px-2 max-xl:hidden">Log In</a>
              <a className="btn mx-2">Sign Up</a>
              <a>
                <button className="btn btn-square max-md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
