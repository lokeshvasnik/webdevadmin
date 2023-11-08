// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { useState } from "react";
import { BaseEditor } from "slate";
import { Editable, ReactEditor } from "slate-react";
import { createEditor, Descendant } from "slate";
import { Slate, withReact } from "slate-react";
import supabase from "../backend/supabase";
type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string; bold?: true };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const Achievement = () => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  );
};

export default Achievement;
