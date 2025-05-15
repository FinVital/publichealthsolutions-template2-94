
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PhoneAssistant = () => {
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format phone number as user types
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      let formattedValue = '';
      if (value.length > 3 && value.length <= 6) {
        formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length > 6) {
        formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
      } else if (value.length > 0) {
        formattedValue = `(${value}`;
      }
      setPhoneNumber(formattedValue || value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for US phone number (10 digits)
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the phone number to a backend service
    console.log("Phone number submitted:", phoneNumber);
    setSubmitted(true);
    
    // Simulate success message
    toast({
      title: "Request received!",
      description: "We'll call you shortly to assist you.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="flex items-center bg-primary-green hover:bg-primary-green/90"
          onClick={() => {
            setSubmitted(false);
            setPhoneNumber('');
          }}
        >
          <Phone className="mr-2 h-4 w-4" />
          <span>Phone Assistance</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary-blue">Phone Assistance</DialogTitle>
          <DialogDescription>
            Get help from our automated phone assistant or request a callback.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {!submitted ? (
            <>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Call Us Directly</CardTitle>
                  <CardDescription>
                    Speak with our automated assistant
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-center text-xl font-medium text-primary-blue">
                    (646) 619-6400
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-primary-blue hover:bg-primary-blue/90"
                    onClick={() => {
                      // In a real app, this could use tel: protocol to initiate a call
                      toast({
                        title: "Calling...",
                        description: "In a real app, this would initiate a phone call."
                      });
                    }}
                  >
                    Call Now
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Request a Callback</CardTitle>
                  <CardDescription>
                    We'll call you back as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Your phone number
                      </label>
                      <Input
                        id="phone"
                        placeholder="(123) 456-7890"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="col-span-3"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary-teal hover:bg-primary-teal/90"
                    >
                      Request Callback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="border-primary-green/20 bg-primary-green/5">
              <CardHeader>
                <CardTitle className="text-primary-green flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Request Submitted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We've received your callback request at <span className="font-medium">{phoneNumber}</span>.
                </p>
                <p>One of our representatives will call you shortly to assist you with your healthcare needs.</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-primary-blue hover:bg-primary-blue/90"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhoneAssistant;
