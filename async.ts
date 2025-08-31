const fetchGreeting = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Hello, TypeScript!");
      } else {
        reject(new Error("Failed to fetch greeting"));
      }
    }, 1000);
  });
};

// Using the Promise with proper type inference
fetchGreeting()
  .then((greeting) => {
    // TypeScript knows 'greeting' is a string
    console.log(greeting.toUpperCase());
  })
  .catch((error: Error) => {
    console.error("Error:", error.message);
  });