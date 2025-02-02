import * as React from "react";
import { TopNavigation, Input } from "@cloudscape-design/components";

export default function Header() {
  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "Service name",
        logo: { src: "", alt: "Service name logo" },
      }}
      search={
        <Input
          ariaLabel="Input field"
          clearAriaLabel="Clear"
          value=""
          type="search"
          placeholder="Search"
        />
      }
      utilities={[
        {
          type: "button",
          iconName: "notification",
          ariaLabel: "Notifications",
          badge: true,
          disableUtilityCollapse: true,
        },
        {
          type: "button",
          iconName: "settings",
          title: "Settings",
          ariaLabel: "Settings",
        },
        {
          type: "menu-dropdown",
          text: "Customer name",
          description: "customer@example.com",
          iconName: "user-profile",
          items: [],
        },
      ]}
    />
  );
}
