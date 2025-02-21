import { Request, Response } from 'express';
import DataPoint from '../models/datapoints.js'; // Adjust the import to match your model path
import Chart from '../models/Chart.js'// Adjust the import to match your model path


// Fetch user-specific chart data
export const fetchChartData = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
        const username = req.user.username;  

        //Find all charts that belong to the user
        const charts = await Chart.findAll({ 
            where: { username },
            include: [{ model: DataPoint }]
        });
        
        return res.json(charts);
      } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server error' });
      }
};

// Add a data point to a user-specific chart
export const addDataPoint = async (req: Request, res: Response) => {
    const { chartId, title, x, y } = req.body;
    try {
      await Chart.bulkCreate( [
          {
            username: 'JollyGuru',
            title: 'Chart 1',
            type: 'line',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]);
        const newDataPoint = await DataPoint.create({chartId, title, x, y});
        res.status(200).json(newDataPoint);
    } catch (error) {
      console.log(error)
        res.status(500).json({ message: 'Server error' });
    }
};





