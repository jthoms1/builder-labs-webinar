import { figmaMapping } from "@builder.io/dev-tools/figma";
import {
  TopNavigation,
  Input,
  type TopNavigationProps,
} from "@cloudscape-design/components";

figmaMapping({
  componentKey: "56a35954cce8f53e9b417c0ef7d35fc9899363bc",
  mapper(figma) {
    let utilities: TopNavigationProps.Utility[] = [];
    if (figma.Notifications) {
      utilities.push({
        type: "button",
        iconName: "notification",
        ariaLabel: "Notifications",
        badge: true,
        disableUtilityCollapse: true,
      });
    }
    if (figma["Utility control"]) {
      utilities.push({
        type: "button",
        iconName: "settings",
        title: "Settings",
        ariaLabel: "Settings",
      });
    }
    if (figma.Dropdown === "Profile") {
      utilities.push({
        type: "menu-dropdown",
        text: "Customer name",
        description: "customer@example.com",
        iconName: "user-profile",
        items: [],
      });
    }

    const identityTitle = figma.$findOneByName("ServiceName")?.$textContent;
    const logo = figma
      .$findOneByName("ServiceLogo")
      ?.$findOne((node) => node.type === "IMAGE");

    return (
      <TopNavigation
        identity={{
          href: "#",
          title: identityTitle || undefined,
          logo: !logo
            ? undefined
            : {
                src: logo.$imageUrl,
                alt: "Service name logo",
              },
        }}
        search={
          figma.Search &&
          figma.$findOneByName("Search") && (
            <Input
              ariaLabel="Input field"
              clearAriaLabel="Clear"
              value=""
              type="search"
              placeholder="Search"
            />
          )
        }
        utilities={utilities}
      />
    );
  },
});
