import http from "k6/http";
import { sleep } from "k6";

export default () => {
  // Make 10 requests
  for (let i = 0; i < 1000; i++) {
    const payload = JSON.stringify({
      email: "talimul11bari@gmail.com",
      password: "pass123",
    });
    const headers = { "Content-Type": "application/json" };
    const urlRes = http.post(
      "http://host.docker.internal:8000/api/user/login",
      payload,
      {
        headers,
      }
    );

    console.log(urlRes.body);
  }

  // Sleep for 1 second between each request
  sleep(1);
};
