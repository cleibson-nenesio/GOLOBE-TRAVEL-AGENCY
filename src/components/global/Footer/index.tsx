// Next
import Link from "next/link";

// React
import React from "react";

// Icons
import * as I from "@/assets/icons";

// Components
import NewsletterContainer from "@/components/shared/NewsletterContainer";

const Footer = () => {
  const socialMedias = [
    {
      icon: <I.FacebookIcon />,
      path: "https://www.facebook.com/",
      id: 1,
    },
    {
      icon: <I.TwitterIcon />,
      path: "https://www.twitter.com/",
      id: 2,
    },
    {
      icon: <I.YoutubeIcon />,
      path: "https://www.youtube.com/",
      id: 3,
    },
    {
      icon: <I.InstagramIcon />,
      path: "https://www.instagram.com/",
      id: 4,
    },
  ];

  const footerMenus = [
    {
      title: "Our Destinations",
      subMenus: [
        {
          label: "Canada",
          path: "/",
        },
        {
          label: "Alaska",
          path: "/",
        },
        {
          label: "France",
          path: "/",
        },
        {
          label: "Iceland",
          path: "/",
        },
      ],
    },
    {
      title: "Our Activities",
      subMenus: [
        {
          label: "Northern Lights",
          path: "/",
        },
        {
          label: "Cruising & sailing",
          path: "/",
        },
        {
          label: "Multi-activities",
          path: "/",
        },
        {
          label: "Kayaing",
          path: "/",
        },
      ],
    },
    {
      title: "Travel Blogs",
      subMenus: [
        {
          label: "Bali Travel Guide",
          path: "/",
        },
        {
          label: "Sri Lanks Travel Guide",
          path: "/",
        },
        {
          label: "Peru Travel Guide",
          path: "/",
        },
        {
          label: "Bali Travel Guide",
          path: "/",
        },
      ],
    },
    {
      title: "About Us",
      subMenus: [
        {
          label: "Our Story",
          path: "/",
        },
        {
          label: "Work with us",
          path: "/",
        },
      ],
    },
    {
      title: "Contact Us",
      subMenus: [
        {
          label: "Our Story",
          path: "/",
        },
        {
          label: "Work with us",
          path: "/",
        },
      ],
    },
  ];

  return (
    <footer className="bg-mint-green flex flex-col items-center px-8 py-6 pt-36 relative mt-60">
      <NewsletterContainer />

      <div className="block lg:flex items-center gap-32 mt-14">
        <div className="flex flex-col gap-5">
          <I.ReverseLogo />
          <div className="flex gap-3">
            {socialMedias?.map((social) => (
              <Link href={social?.path} key={social?.id}>
                {social?.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-between mt-7">
          {footerMenus?.map((menu, index) => (
            <div key={index} className="flex flex-col mb-4">
              <h3 className="font-bold mb-1 font-heading">{menu?.title}</h3>

              {menu?.subMenus?.map((subMenu, index) => (
                <Link
                  href={subMenu?.path}
                  key={index}
                  className="text-blacklish-green opacity-70"
                >
                  {subMenu?.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
