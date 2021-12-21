import http from "k6/http";
import { sleep } from "k6";

export default function () {
  console.log("imported module output: ", hello_world());
  http.get("https://test.k6.io");
  sleep(1);
}
