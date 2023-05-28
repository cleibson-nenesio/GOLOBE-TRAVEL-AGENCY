"use client";

// Next
import Image from "next/image";

// React
import React, { useEffect, useState } from "react";

// Components
import TextInput from "@/components/UI/Inputs/Text";
import Button from "@/components/UI/Button";

// Libraries
import { useFormik } from "formik";

// Icons
import * as I from "@/assets/icons";

// Yup
import { emailSchema } from "./emailSchema";

const NewsletterContainer = () => {
  const [isStemUp, setIsStempUp] = useState<boolean>(false);

  const formikForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => handleSubscribeNewsletter(values?.email),
  });

  function handleSubscribeNewsletter(email: string) {
    formikForm?.resetForm();

    setIsStempUp(true);

    setTimeout(() => {
      setIsStempUp(false);
    }, 1000 * 3);
  }

  return (
    <div className="flex items-center justify-between px-5 bg-light-mint gap-44 rounded-2xl absolute -top-56 sm:-top-36 mx-3">
      <div className="py-5">
        <h3 className="w-min text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-blacklish-green leading-11 mb-5">
          Subscribe Newsletter
        </h3>

        <p className="text-lg font-semibold text-blacklish-green opacity-80">
          The Travel
        </p>
        <p className="text-md text-blacklish-green opacity-80 mb-3">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>

        <form
          onSubmit={formikForm?.handleSubmit}
          className="flex flex-col sm:flex-row gap-3 rounded"
        >
          <TextInput
            placeholder="Your email address"
            onChange={formikForm?.handleChange}
            value={formikForm?.values?.email}
            name="email"
            error={
              formikForm?.touched?.email ? formikForm?.errors?.email : undefined
            }
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      <div className="hidden xl:block">
        <I.MailboxIcon stemUp={isStemUp} />
      </div>
    </div>
  );
};

export default NewsletterContainer;
