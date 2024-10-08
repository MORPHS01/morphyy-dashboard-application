"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';




export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/dashboard")
  }, [])

  function handleRedirect(){
    router.push("/dashboard")
  };
  
  return (
    <>
      <Dialog open={true} onClose={handleRedirect} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="text-center" >
        <DialogTitle id="alert-dialog-title" className="text-bold text-myCyan">
          {"Redirecting to dashboard app"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Click the button below to access the dashboard</DialogContentText>
        </DialogContent>
        <DialogActions className="flex justify-center">
          <Button className="bg-myCyan text-white hover:bg-darkCyan" onClick={handleRedirect}>Dashboard Application</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
