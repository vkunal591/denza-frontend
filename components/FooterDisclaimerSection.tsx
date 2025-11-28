const FooterDisclaimerSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-[13px] leading-relaxed text-gray-600 space-y-6">

        <p>
          • Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple,
          and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI
          and are subject to your card’s variable APR. See the{" "}
          <a className="underline cursor-pointer">Apple Card Customer Agreement</a> for more information.
          ACMI is not available for purchases made online at special storefronts. The last month's payment for each product will be the
          product's purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at
          any time for any reason, including but not limited to, installment term lengths and eligible products.
        </p>

        <p>
          • Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S.
          for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE,
          and is subject to credit approval and credit limit. See{" "}
          <a className="underline cursor-pointer">support.apple.com/kb/HT211204</a> for information about upcoming changes to ACMI financing.
        </p>

        <p>
          1. Offer available to new subscribers who purchase an eligible device after September 7th, 2022.
          $9.99/month after trial. Only one offer per Apple Account and only one per family if you're part of a Family Sharing group,
          regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously
          subscribed to Apple Fitness+. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled.
          Restrictions and other terms apply.
        </p>

        <p>
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
          Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or
          for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase or added to an Apple Gift Card.
          Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made.
          Sales tax may be assessed on full value of new purchase. In-store trade-in requires presentation of a valid photo ID
          (local law may require this information). Offer may not be available in all stores and may vary between in-store and online trade-in.
        </p>

        <p>
          1. iPhone highly water or submersion below shallow depth. Water resistance is not a permanent condition and can diminish over time.
          For additional information see{" "}
          <a className="underline cursor-pointer">support.apple.com/en-us/HT205000</a>.
        </p>

      </div>
    </section>
  );
};

export default FooterDisclaimerSection;
