// pages/api/simulateError.js
export default (req: any, res: any) => {
    // Simulate a server-side error by throwing an error
    // Simulate a server-side error by returning a 500 status code
  res.status(500).json({ error: 'Internal Server Error' });
  };
  