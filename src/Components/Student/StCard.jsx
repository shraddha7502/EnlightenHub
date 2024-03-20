// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function StCard() {
//   return (
//     <Link to="#" className='hover:text-bold'>
//     <Card sx={{maxWidth:400 }}>
   
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//         </Card>
//         </Link>
    
//   );
// }




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'hover:scale(1.2)' }}
//   >
    
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card sx={{ maxWidth: 275 }}>
//       <CardContent>
//         <Link 
//         to='../about'  className='hover:Scale(1.2)'>
//         {/* <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography> */}
//         <Typography sx={{ mb: 1.5,fontSize: 30 }} color="text.secondary">
//           Profile
//         </Typography>
//         {/* <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography> */}
//         </Link>
//       </CardContent>
//       {/* <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions> */}
//     </Card>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import './StCard.css'; // Import custom CSS for card styling

export default function BasicCard({content='Profile'}) {
  return (
    <Card className="card m-2 ms-5">
      <CardContent>
        <Link to="" className="card-link">
          <Typography variant="h4" component="div" className="card-title text-pretty pt-5">
            {content}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

