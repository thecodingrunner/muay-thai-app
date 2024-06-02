export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the incoming data
      const { value } = req.body;
      console.log('Received value:', value);
      
      // Respond to the Arduino
      res.status(200).json({ message: 'Data received' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }