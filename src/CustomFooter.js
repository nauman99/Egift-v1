import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

function CustomFooter() {
  return (
    <div>
      <Footer
        backgroundColor="#ff7676"
        columns={[
          {
            title: "Get to know us.",
            items: [
              {
                title: "Careers",
              },
              {
                title: "Our Planet",
              },
              {
                title: "Investor Relations",
              },
              {
                title: "Press Releases",
              },
            ],
          },
          {
            title: "Make Money with Us",
            items: [
              {
                title: "Sell",
              },
              {
                title: "Sell Under Accelerator",
              },
              {
                title: "Associates",
              },
              {
                title: "Host on Hub",
              },
            ],
          },
          {
            title: "Payment Products",
            items: [
              {
                title: "Rewards Mastercard",
              },
              {
                title: "Shop with Points",
              },
              {
                title: "Reload your balance",
              },
              {
                title: "cash",
              },
            ],
          },
          {
            title: "Let Us Help You",
            items: [
              {
                title: "COVID-19 and",
              },
              {
                title: "Shipping Rates & Policies",
              },
              {
                title: "Prime",
              },
              {
                title: "Customer Service",
              },
            ],
          },
        ]}
        bottom="Made with ❤️ by Nauman"
      />
      ,
    </div>
  );
}

export default CustomFooter;
