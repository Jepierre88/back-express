import express from 'express';

const app = express();

const PORT = process.env.PORT || 3006

function main(){
  app.listen(PORT, ()=>  console.log(`Server is running on port ${PORT}`));
;
}


main()

export default app;