import fs from "fs";
import path from "path";

import { it, vi } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContect = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContect);
vi.stubGlobal("document", document);

it("first test", () => {
  showError("test");
});
