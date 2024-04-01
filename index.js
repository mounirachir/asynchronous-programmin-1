// task 1
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}
const values = ["A", "B", "C", "D", "E"];
iterateWithAsyncAwait(values);

// task 2
async function awaitCall() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data: " + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
awaitCall();
// task 3
async function concurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://api.example.com/data1"),
      fetch("https://api.example.com/data2"),
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log("Combined Results:", { data1, data2 });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
concurrentRequests();
