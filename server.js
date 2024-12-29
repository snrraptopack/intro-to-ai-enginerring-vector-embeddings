import 'dotenv/config';
import { app } from './app.js';

const port = process.env.PORT || 3000 || 3001;


//express 5
app.listen(port, (err) => {
    if(err){
      console.log('Error starting server:', err);
    }
    console.log(`Server is running on port ${port}`);
})

// (async function startServer() {
//   try {
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   } catch (error) {
//     console.error('Error starting server:', error);
//     process.exit(1);
//   }
// })()
//
