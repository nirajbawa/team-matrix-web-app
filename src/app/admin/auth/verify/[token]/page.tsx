import React from 'react';
import jwt from 'jsonwebtoken';
import InvitationModel from '@/models/Invitation';
import VerifyCodeForm from './components/VerifyCodeForm';
import { DecodedToken } from '../../[token]/page';


async function Page({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const token = (await params).token
  try{
    
    const SECRET_KEY = process.env.NEXT_AUTH_SECRET; // Make sure JWT_SECRET is set in your environment variables
    if (!SECRET_KEY) {
      throw new Error('Secret key is not defined');
    }

    const decode : DecodedToken = jwt.verify(token, SECRET_KEY) as DecodedToken;

    if (new Date(decode?.expiresIn) > new Date()) {
      
      const data = await InvitationModel.findOne({_id:decode.id, used: false});
      if(data)
      {
        return (
          <div><VerifyCodeForm tokenPayload={decode} token={token}/></div>
        )
      }
      else{
        throw Error("invalid token");
      }
    }else{
      throw Error("invalid token");
    }

  }catch(error)
  {
    return (<div>
      invalid token
    </div>)
  }

  
}

export default Page;