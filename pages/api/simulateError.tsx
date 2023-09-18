// pages/api/simulateError.js
export default (req: any, res: any) => {
    // Simulate a server-side error by throwing an error
    throw new Error('This is a simulated server-side error.');
  };
  