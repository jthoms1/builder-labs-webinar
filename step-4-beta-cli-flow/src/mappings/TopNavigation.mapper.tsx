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
    if (figma.$findOneByName("External link")) {
      utilities.push({
        type: "button",
        text: "Link",
        href: "https://example.com/",
        external: true,
        externalIconAriaLabel: " (opens in a new tab)",
      });
    }
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
    if (figma.$findOneByName("Customer profile")) {
      utilities.push({
        type: "menu-dropdown",
        text: "Customer name",
        description: "customer@example.com",
        iconName: "user-profile",
        items: [],
      });
    }

    const identityTitle = figma.$findOneByName("Service name")?.$textContent;
    const logoImage = figma.$findOneByName("Logo");
    const logoText = figma.$findOneByName("Logo")?.$textContent;

    return (
      <TopNavigation
        identity={{
          href: "#",
          title: identityTitle || undefined,
          logo: !logoImage
            ? undefined
            : {
                src: logoImage.$imageUrl,
                alt: logoText,
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
