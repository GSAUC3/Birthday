import React, { useState } from 'react';
import './index.css'
import './App.css';
import { Cake } from './Components/Cake';
import { Words } from './Components/Words';
import { Card } from './Components/Card';


const ExampleComponent = () => {
  return (
    <>  
    <div className="flex flex-col items-center justify-evenly gap-5">

    <Words></Words>
    <Cake></Cake>
    <Card></Card>
    </div>
    {/* footer section credit Image by <a href="https://www.freepik.com/free-psd/birthday-vertical-blank-banner_43703287.htm#query=simple%20birthday%20card&position=31&from_view=search&track=ais&uuid=db2865ee-26ce-4ece-a5ec-2a32c6141e97">Freepik</a> */}
    </>
  );
};

export default ExampleComponent;
