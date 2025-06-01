import React, { useState } from "react";
import { Link } from "react-router-dom";

const BuyPage: React.FC = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    street: "",
    apt: "",
    state: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Address saved!");
  };

  const handleCancel = () => {
    setAddress({
      firstName: "",
      lastName: "",
      street: "",
      apt: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="flex items-center justify-between px-12 pt-8 pb-2">
        <div className="w-12 h-12 flex items-center">
          <div className="w-[50px] h-[50px] rounded-[5px] bg-[url(/frame-8.png)] bg-cover bg-[50%_50%]" />
          <div className="w-4.5 h-4.5 rounded-full bg-white flex items-center justify-center"></div>
        </div>
        <nav className="flex items-center gap-10 text-lg text-gray-900 font-normal">
          <span className="cursor-pointer text-gray-500">About Us</span>
          <span className="cursor-pointer text-gray-500">Waitlist</span>
          <span className="cursor-pointer font-semibold border-b-2 border-black pb-0.5">
            Cart
          </span>
        </nav>
      </header>

      <main className="flex justify-center items-start mt-10 gap-10">
        <section>
          <div className="flex items-center mb-4 ml-1">
            <Link to="/">
              <svg width="28" height="28" className="mr-3 cursor-pointer">
                <polyline
                  points="18,6 10,14 18,22"
                  fill="none"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <span className="text-2xl font-medium text-gray-900">
              Shipping Address
            </span>
          </div>
          <form
            onSubmit={handleSave}
            className="bg-white rounded-xl border-2 border-gray-300 px-8 py-8 max-w-xl min-w-[380px]"
          >
            <div className="flex items-center mb-6">
              <span className="inline-block w-7 h-7 rounded-full border-2 border-red-600 mr-3 relative">
                <span className="block w-3.5 h-3.5 rounded-full bg-red-600 absolute top-1.5 left-1.5"></span>
              </span>
              <span className="font-medium text-lg text-gray-900">
                Add New Address
              </span>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">First Name</label>
                <input
                  name="firstName"
                  value={address.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 border-gray-300 text-base focus:outline-none focus:border-black"
                  autoComplete="off"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  name="lastName"
                  value={address.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 border-gray-300 text-base focus:outline-none focus:border-black"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Street Address</label>
              <input
                name="street"
                value={address.street}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border-2 border-gray-300 text-base focus:outline-none focus:border-black"
                autoComplete="off"
              />
            </div>
            <div className="flex gap-4 mb-8">
              <div className="flex-1">
                <label className="block text-sm mb-1">Apt Number</label>
                <input
                  name="apt"
                  value={address.apt}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 border-gray-300 text-base focus:outline-none focus:border-black"
                  autoComplete="off"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">State</label>
                <input
                  name="state"
                  value={address.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 border-gray-300 text-base focus:outline-none focus:border-black"
                  autoComplete="off"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Zip</label>
                <input
                  name="zip"
                  value={address.zip}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-2 border-gray-300 text-base focus:outline-none focus:border-black"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 py-3 rounded-lg border-2 border-gray-300 bg-white font-semibold text-lg cursor-pointer hover:bg-gray-100"
              >
                cancel
              </button>
              <button
                type="submit"
                className="flex-[2] py-3 rounded-lg bg-black text-white font-semibold text-lg cursor-pointer hover:bg-red-600 transition ease-out duration-500"
              >
                Save This Address
              </button>
            </div>
          </form>
        </section>
        <aside className="bg-gray-100 rounded-xl px-9 py-10 w-[420px] min-w-[380px]">
          <div className="text-base text-gray-700 mb-5 leading-relaxed">
            By placing your order, you agree to our company{" "}
            <span className="font-semibold underline cursor-pointer">
              Privacy policy
            </span>{" "}
            and{" "}
            <span className="font-semibold underline cursor-pointer">
              Conditions of use
            </span>
            .
          </div>
          <hr className="my-5 border-gray-400" />
          <div className="text-xl font-semibold mb-6">Order Summary</div>
          <div className="flex justify-between text-base mb-2">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="flex justify-between text-base mb-2">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="flex justify-between text-base mb-2">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="flex justify-between text-base mb-6">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>
          <hr className="my-5 border-gray-400" />
          <div className="flex justify-between font-bold text-2xl my-5">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>
          <button className="w-full py-4 bg-black text-white font-semibold rounded-lg text-xl mt-2 hover:bg-red-600 transition ease-out duration-500">
            Place Order
          </button>
        </aside>
      </main>
    </div>
  );
};

export default BuyPage;
