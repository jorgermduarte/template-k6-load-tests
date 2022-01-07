import http from 'k6/http';
// eslint-disable-next-line
// @ts-ignore
import {textSummary} from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import {sleep} from 'k6';
// eslint-disable-next-line
// @ts-ignore
import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export default function initialization() {
  const defaultWaitTime = 1;
  http.get('https://test.k6.io');
  sleep(defaultWaitTime);
}

// eslint-disable-next-line
export function handleSummary(data: any) {
  const stringifySpaceLength = 4;
  return {
    'reports/raw-data.json': JSON.stringify(
        data,
        null,
        stringifySpaceLength,
    ),
    'reports/result.html': htmlReport(data),
    'stdout': textSummary(
        data,
        {
          enableColors: true,
          indent: ' ',
        },
    ),
  };
}
