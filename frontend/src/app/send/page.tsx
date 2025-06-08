"use client";
import { useEffect } from "react";
import supabase from "client/supabase";
import { Button } from "@mui/material";


export default function SendPage() {
  // useEffect(() => {
  //   const challengeChannel = supabase.channel('challenge-channel')
  //   challengeChannel.on('broadcast', { event: 'challenge' }, (payload) => {
  //     console.log({ payload });
  //   }).subscribe();

  //   return () => {
  //     challengeChannel.unsubscribe();
  //   }
  // }, []);

  const handleSendMessage = async () => {
    const challengeChannel = supabase.channel('challenge-channel')
    const response = await challengeChannel
      .send({
        type: 'broadcast',
        event: 'challenge',
        payload: { message: 'Hi' },
      });

    console.log({ response });
  }

  return (
    <div id="send-page">
      <Button onClick={handleSendMessage} variant="contained" size="small">send message</Button>
    </div>
  );
}
