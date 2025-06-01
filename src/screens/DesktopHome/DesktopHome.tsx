import {
  ArrowDown,
  ArrowRightIcon,
  Triangle,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DesktopHome = (): JSX.Element => {
  const initialSizeOptions = [
    { id: 1, size: "XS", selected: false },
    { id: 2, size: "S", selected: false },
    { id: 3, size: "M", selected: false },
    { id: 4, size: "L", selected: false },
    { id: 5, size: "XL", selected: false },
  ];

  const [sizeOptions, setSizeOptions] = useState(initialSizeOptions);

  const handleToggle = (id: number) => {
    setSizeOptions((options) =>
      options.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  const size = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M", selected: true },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  const navLinks = [
    { id: 1, text: "About Us", href: "#" },
    { id: 2, text: "Waitlist", href: "#" },
    { id: 3, text: "Cart", href: "#" },
  ];

  const footerLinks = [
    { id: 1, text: "Home", href: "#" },
    { id: 2, text: "About", href: "#" },
    { id: 3, text: "Buy", href: "#" },
    { id: 4, text: "Our Customers", href: "#" },
    { id: 5, text: "Contacts", href: "#" },
  ];

  const productImages = [
    { id: 1, src: "/frame-12.png", alt: "Product front view" },
    { id: 2, src: "/frame-11.png", alt: "Product side view" },
    { id: 3, src: "/frame-13.png", alt: "Product back view" },
  ];

  const productDetails = [
    {
      id: "size-fit",
      title: "Size & Fit",
      content:
        "Model is 6'1\" and wearing size M. Fits true to size with a relaxed silhouette.",
    },
    {
      id: "delivery-returns",
      title: "Delivery & Returns",
      content:
        "Free standard delivery on all orders. Return within 30 days for a full refund.",
    },
    {
      id: "how-made",
      title: "How This Was Made",
      content:
        "Crafted from premium wool blend fabric. Made in our sustainable factory with minimal waste.",
    },
  ];

  return (
    <div className="bg-[#000000] flex flex-row justify-center w-full">
      <div className="bg-[#000000] w-[1440px] h-[5336px] relative content-center">
        <header className="fixed w-full h-[75px] top-0 left-0 z-50">
          <div className="h-[75px] bg-[#00000096] backdrop-blur-[18.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.5px)_brightness(100%)]">
            <div className="relative w-[1115px] h-[45px] top-[13px] left-[100px] flex items-center">
              <div className="w-[50px] h-[50px] rounded-[5px] bg-[url(/frame-8.png)] bg-cover bg-[50%_50%]" />
              <div className="flex-1 " />
              <div className="flex space-x-20">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-thin text-white text-[19.3px] tracking-[-0.39px] leading-[normal] whitespace-nowrap"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <Button className="fixed top-3 left-[1300px] bg-white text-black rounded-[8.71px] px-[38.69px] py-[25px] z-50 text-center hover:bg-red-600 hover:text-white transition-all duration-300">
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-Thin text-[19.3px] tracking-[-0.39px] leading-[normal] ">
            Buy
          </span>
        </Button>

        <div className="absolute w-[500px] h-[500px] top-[25px] -left-5">
          <div className="w-[500px] h-[500px] bg-[url(/Brand.svg)] bg-cover bg-center rounded-xl shadow-lg " />
        </div>

        <div className="absolute w-[53px] h-[18px] top-[309px] left-[1339px] flex items-center">
          <div className="w-[11px] h-[11px] bg-[url(/group-1.png)] mr-2" />
          <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px] leading-[normal]">
            2025
          </div>
        </div>

        <div className="absolute w-[1339px] h-[530px] top-[353px] left-[50px] rounded-[5px] overflow-hidden bg-[url(/3753692-uhd-3840-2160-25fps-1.png)] bg-cover bg-[50%_50%]">
          <div className="absolute bottom-[32px] right-[32px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[34.6px] tracking-[-0.69px] leading-[normal] whitespace-nowrap">
            A silhouette worth remembering
          </div>
        </div>

        <p className="absolute w-[900px] top-[1066px] left-[50px] font-nimbus font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>

        <div className="absolute w-[312px] h-[41px] top-[1320px] left-[50px] group cursor-pointer bg-transparent hover:bg-white transition-all duration-[1s] ease-in-out">
          <div className="absolute top-1.5 left-0 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px] leading-[normal] group-hover:text-black group-hover:translate-x-5 transition-all duration-[1s] ease-in-out">
            Learn more about Eclypse
          </div>

          <div className="absolute top-10 left-0 w-full h-[1px] bg-white/50 group-hover:bg-black/50 transition-all duration-[2s] ease-in-out" />

          <ArrowRightIcon className="absolute w-[39px] h-[39px] top-0 right-0 text-white transition-all duration-300 ease-in-out group-hover:hidden" />
        </div>

        <div className="absolute w-[883px] h-[489px] top-[1510px] left-[50px] rounded-[5px] bg-[url(..//frame-3.png)] bg-cover bg-center" />

        <div className="absolute top-[1510px] left-[964px] w-[424px] h-[489px] rounded-[5px] overflow-hidden group">
          <img
            src="/frame-18-2.png"
            alt="Garment"
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <img
              src="/Premium.png"
              alt="Garment Hover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[2027px] left-[50px] w-[424px] h-[397px] rounded-[5px] overflow-hidden group">
          <img
            src="/frame-18.png"
            alt="Garment"
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <img
              src="/Hover2.png"
              alt="Garment Hover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[2027px] left-[509px] w-[424px] h-[397px] rounded-[5px] overflow-hidden group">
          <img
            src="/frame-18-1.png"
            alt="Garment"
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <img
              src="/Hover3.png"
              alt="Garment Hover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[2027px] left-[964px] w-[424px] h-[397px] rounded-[5px] overflow-hidden group">
          <img
            src="/frame-8.png"
            alt="Garment"
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <img
              src="/Brand.svg"
              alt="Garment Hover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="absolute w-[800px] top-[2607px] left-[43px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal]">
          Silhouette No. 1 – Vermilion
        </h2>

        <section className="absolute w-[1439px] h-[912px] top-[2850px] left-0 bg-[#f6f6f6]">
          <img
            className="absolute w-[704px] h-[912px] top-0 left-0 object-cover"
            alt="Product main image"
            src="/rectangle-2.png"
          />

          <div className="absolute w-[539px] top-[53px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-[normal]">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </div>

          <div className="absolute top-[153px] left-[736px] flex gap-6">
            {productImages.map((image) => (
              <Card
                key={image.id}
                className="w-52 h-[199px] rounded-none border-0 overflow-hidden"
              >
                <CardContent
                  className="p-0 h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
              </Card>
            ))}
          </div>

          <Separator className="w-[654px] absolute top-[401px] left-[736px] h-[1.5px]  bg-gray-300" />

          <div className="absolute top-[455px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px] leading-[normal]">
            ₹ 7,999
          </div>
          <div className="absolute top-[473px] left-[864px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px] leading-[normal] whitespace-nowrap">
            MRP incl. of all taxes
          </div>

          <div className="absolute top-[537px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
            Please select a size
          </div>
          <a
            href="#"
            className="absolute top-[540px] left-[933px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline whitespace-nowrap leading-[normal]"
          >
            Size chart
          </a>

          <div className="absolute top-[604px] left-[736px] flex gap-[32px]">
            {sizeOptions.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                onClick={() => handleToggle(option.id)}
                className={`w-[82px] h-[49px] rounded flex items-center justify-center ${
                  option.selected
                    ? "bg-[#000000] text-[#ffffff] cursor-pointer hover:bg-black hover:text-white" // No hover effect when selected
                    : "bg-[#d9d9d9] text-[#767676] cursor-pointer hover:bg-[#c2c2c2] hover:text-[#000000]"
                }`}
              >
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px]">
                  {option.size}
                </span>
              </Button>
            ))}
          </div>

          <Separator className="w-[654px] absolute top-[706px] left-[736px] h-[1.5px] bg-gray-300" />

          <div className="absolute top-[792px] left-[736px] flex gap-8">
            <Button
              variant="outline"
              className="w-[196px] h-[66px] rounded-[8.71px] border-2 border-solid bg-white border-[#c2c2c2] hover:bg-white"
            >
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px]">
                Add to Cart
              </span>
            </Button>
            <Link to="/buy">
              <Button className="w-[428px] h-[66px] bg-black rounded-[8.71px] hover:bg-red-600">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]">
                  Buy
                </span>
              </Button>
            </Link>
          </div>
        </section>

        <div className="absolute w-[1342px] top-[3941px] left-[20px] space-y-8">
          {productDetails.map((detail) => (
            <div key={detail.id}>
              <div className="flex justify-between items-center bg-black p-8 rounded-lg">
                <h2 className="text-white text-3xl">{detail.title}</h2>
                <ArrowDown className="text-white w-10 h-10" />
              </div>

              <div className="pl-8">
                <Separator className="w-full h-[1px] bg-white/35 mt-5" />
              </div>
            </div>
          ))}
        </div>

        <section className="absolute w-[1341px] h-[412px] top-[4483px] left-[50px]">
          <h4 className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px] leading-[normal] whitespace-nowrap">
            OUR CUSTOMERS
          </h4>

          <div className="absolute top-[92px] left-4 [font-family:'Coolvetica-Regular',Helvetica] text-[#f6f6f6] text-[118.8px] leading-[normal] font-normal tracking-[0]">
            &quot;
          </div>

          <blockquote className="absolute w-[750px] top-28 left-[84px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-5xl tracking-[0] leading-[52.3px]">
            Understated, but unforgettable. It feels like it was made for me
          </blockquote>

          <Triangle
            className="absolute top-[146px] left-[1138px] -rotate-90 w-6 h-6 text-gray-300 "
            fill="currentColor"
          />

          <div className="absolute top-[304px] left-[82px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#c3c3c3] text-2xl tracking-[0] leading-9 whitespace-nowrap">
            Random Woman
          </div>

          <div className="absolute top-[352px] left-[84px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6 whitespace-nowrap">
            NY, USA
          </div>

          <img
            className="absolute w-[126px] h-[126px] top-[97px] left-[1205px]"
            alt="Customer avatar"
            src="/ellipse-3.png"
          />

          <img
            className="absolute w-[69px] h-[69px] top-[253px] left-[1233px]"
            alt="Testimonial navigation dot"
            src="/ellipse-4.png"
          />

          <img
            className="absolute w-[69px] h-[69px] top-[343px] left-[1233px]"
            alt="Testimonial navigation dot"
            src="/ellipse-5.png"
          />
        </section>

        <Separator className="w-[1342px] absolute top-[4995px] left-[50px] bg-white/35" />

        {/* Footer */}
        <footer className="flex w-[1340px] items-end gap-6 p-6 absolute top-[5067px] left-[50px] bg-[#090808]">
          <div className="inline-flex flex-col items-start gap-[67px] relative flex-[0_0_auto]">
            <div className="gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8 whitespace-nowrap">
                Eclypse
              </div>
              <img
                className="relative w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
                alt="Vector"
                src="/vector-2.svg"
              />
            </div>

            <nav className="flex-col gap-1 inline-flex items-start relative flex-[0_0_auto]">
              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                {footerLinks.slice(0, 3).map((link, index) => (
                  <React.Fragment key={link.id}>
                    <a
                      href={link.href}
                      className="[font-family:'Neue_Montreal-Medium',Helvetica] text-sm tracking-[0] leading-[19.6px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap"
                    >
                      {link.text}
                    </a>
                    {index < 2 && (
                      <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                        /
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>
              </div>

              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <a
                  href={footerLinks[3].href}
                  className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap"
                >
                  {footerLinks[3].text}
                </a>
                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>
              </div>

              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <a
                  href={footerLinks[4].href}
                  className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap"
                >
                  {footerLinks[4].text}
                </a>
              </div>
            </nav>
          </div>

          <div className="flex flex-col items-start justify-end gap-8 relative flex-1 self-stretch grow">
            <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="opacity-60 [font-family:'Inter',Helvetica] text-[10px] tracking-[1.50px] leading-[13px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
                CONTACT
              </div>
              <div className="relative w-fit [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px] leading-[24.0px] whitespace-nowrap">
                +91 123-456-7890
              </div>
            </div>

            <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px] whitespace-nowrap">
                EMAIL
              </div>
              <div className="relative w-fit [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                eclypse@gmail.com
              </div>
            </div>
          </div>

          <div className="relative flex-1 self-stretch grow" />

          <div className="flex flex-col items-end justify-between relative flex-1 self-stretch grow">
            <Button
              className="w-10 h-10 bg-white rounded-[20px] p-0 flex items-center justify-center hover:bg-white "
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className="w-[13px] h-[15px]"
                alt="Arrow up"
                src="/vector-3.svg"
              />
            </Button>

            <div className="relative w-fit opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px] whitespace-nowrap">
              <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px]">
                ©
              </span>
              <span className="[font-family:'Degular_Demo-Medium',Helvetica] font-medium">
                {" "}
                Eclypse 2025
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
