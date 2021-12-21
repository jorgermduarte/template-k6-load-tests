import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

import { initializationOauth } from "../http/oauth";

export default function () {
  initializationOauth();
}

export function handleSummary(data) {
  return {
    "__reports__/result.html": htmlReport(data),
    stdout: textSummary(data, {
      indent: " ",
      enableColors: true,
    }),
    "__reports__/raw-data.json": JSON.stringify(data, null, 4),
  };
}
