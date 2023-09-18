// "use client";

// import { getData } from "@/lib/getData";

// // async function getData() {
// //   return { data: "mint" };
// // }

// export default async function Page() {
//   const data = await getData();

//   return <main>{data.title}</main>;
// }

"use client";
import axios from "axios";
import React, { useState } from "react";

function Page() {
  const [token, setToken] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handlePostToApi = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to send the token to.

      const response = await axios.get("/api/authen", {
        headers: {
          "token-header": "hello",
        },
      });

      // Handle the response from the API here.
      setResponse(JSON.stringify(response.data));
    } catch (error) {
      // Handle any errors that occur during the request.
      console.error("Error:", error);
      setResponse("An error occurred");
    }
  };

  return (
    <div>
      <h1>DSCF</h1>
      <form method="POST" action="/api/authen">
        <input id="token" name="token" type="text" value="mint" readOnly />
        <button type="submit">Send Token</button>
      </form>

      {/* <div>
        <p>API Response:</p>
        <pre>{response}</pre>
      </div> */}
    </div>
  );
}

export default Page;
