
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AcknowledgmentSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isChecked) {
      toast({
        title: "Thank you!",
        description: "Your acknowledgment has been recorded.",
        duration: 5000,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Action required",
        description: "Please acknowledge the guidelines and code of conduct.",
        duration: 5000,
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-md animate-on-scroll">
          <h2 className="text-2xl font-bold text-netcore-blue mb-6 text-center">
            Acknowledgment
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="flex items-start space-x-3 mb-6">
              <Checkbox 
                id="acknowledgment" 
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                className="mt-1 border-netcore-blue text-netcore-blue"
              />
              <label 
                htmlFor="acknowledgment" 
                className="text-gray-700 cursor-pointer"
              >
                I have read and understood the event guidelines and code of conduct for the Netcore Sales Conference 2025 in Bangkok.
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-netcore-blue hover:bg-netcore-darkBlue text-white"
            >
              Submit Acknowledgment
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-netcore-blue mb-2">Contact</h3>
            <p className="text-gray-600 mb-4">
              For any questions or information, please contact:
            </p>
            <p className="text-gray-700">
              <a 
                href="mailto:sko-committee@netcorecloud.com" 
                className="text-netcore-blue hover:underline"
              >
                sko-committee@netcorecloud.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcknowledgmentSection;
