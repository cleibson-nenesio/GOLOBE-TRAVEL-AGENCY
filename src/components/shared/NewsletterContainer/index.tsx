// Next
import Image from "next/image";

// React
import React from "react";

// Components
import TextInput from "@/components/UI/Inputs/Text";
import Button from "@/components/UI/Button";

const NewsletterContainer = () => {
  return (
    <div className="flex items-center justify-between px-5 bg-light-mint gap-44 rounded-2xl absolute -top-56 sm:-top-36 mx-3">
      <div className="py-5">
        <h3 className="w-min text-3xl lg:text-4xl xl:text-5xl font-gothic font-bold text-blacklish-green leading-11 mb-5">
          Subscribe Newsletter
        </h3>

        <p className="text-lg font-semibold text-blacklish-green opacity-80">
          The Travel
        </p>
        <p className="text-md text-blacklish-green opacity-80 mb-3">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 rounded">
          <TextInput placeholder="Your email address" />
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className="hidden xl:block">
        <Image
          src="/images/mailbox.png"
          alt="Mailbox Image"
          width={400}
          height={305}
        />
      </div>
    </div>
  );
};

export default NewsletterContainer;