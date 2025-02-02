"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { TopNavigation, Input } from "@cloudscape-design/components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(TopNavigation), {
  name: "TopNavigation",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "i18nStrings",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "I18nStrings",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "identity",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Identity",
      },
      required: true,
    },
    {
      name: "search",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "utilities",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly Utility[]",
      },
    },
  ],
});

Builder.registerComponent(Input, {
  name: "Input",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
      meta: {
        ts: "string | boolean",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "clearAriaLabel",
      type: "string",
    },
    {
      name: "controlId",
      type: "string",
    },
    {
      name: "disableBrowserAutocorrect",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "invalid",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "step",
      type: "string",
      enum: ["any"],
    },
    {
      name: "type",
      type: "string",
      enum: ["email", "number", "password", "search", "text", "url"],
    },
    {
      name: "value",
      type: "string",
      required: true,
    },
    {
      name: "warning",
      type: "boolean",
    },
  ],
});
