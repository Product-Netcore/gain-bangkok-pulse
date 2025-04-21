
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const days = [
    {
      id: "day1",
      date: "April 24, 2025",
      title: "Day 1",
      events: [
        {
          time: "08:00 AM - 12:00 PM",
          title: "Arrival at the Venue – Breakfast for early Arrivals",
          description: "(No rooms availability till 3PM)"
        },
        {
          time: "01:00 PM – 3:00 PM",
          title: "🍽️ Power Lunch",
          description: ""
        },
        {
          time: "03:00 PM - 04:00 PM",
          title: "Check In / Leisure",
          description: ""
        },
        {
          time: "04:00 PM - 04:10 PM",
          title: "Assemble in Ballroom for Netcore Anthem",
          description: ""
        },
        {
          time: "04:10 PM – 04:20 PM",
          title: "🚀 GAINing Momentum: Welcome Address by Amit & Abithab",
          description: ""
        },
        {
          time: "04:25 PM – 04:55 PM",
          title: "🌟 Visionary GAIN: Rajesh Jain’s Keynote Address",
          description: ""
        },
        {
          time: "05:00 PM - 07:00 PM",
          title: "Event Kickoff with Team building Activity",
          description: "(External Team will drive the next few hours)"
        },
        {
          time: "07:00 PM Onwards",
          title: "Dinner & Leisure",
          description: ""
        },
        {
          time: "",
          title: "Note",
          description: "Group Pick up shall be provided from the Airport Post Airport Check out. For Individuals, they can book their transfers from Airport & will be re-imbursed accordingly"
        }
      ]
    },
    {
      id: "day2",
      date: "April 25, 2025",
      title: "Day 2",
      events: [
        {
          time: "07:30 AM - 09:20 AM",
          title: "Breakfast",
          description: ""
        },
        {
          time: "09:00 AM – 09:10 AM",
          title: "🚀 Booting Up: Welcome to GAIN Mode",
          description: ""
        },
        {
          time: "09:15 AM – 09:25 AM",
          title: "🎬 Fueling the Mind: AI-Spirational Kickoff",
          description: ""
        },
        {
          time: "09:30 AM – 09:55 AM",
          title: "📈 Past. Present. GAIN. – A CEO’s Viewpoint – KJ",
          description: ""
        },
        {
          time: "10:00 AM – 10:25 AM",
          title: "🚀 Activating GAIN Mode: Vision 2025 - Abithab",
          description: ""
        },
        {
          time: "10:30 AM – 10:55 AM",
          title: "💰 Scaling Smart: Revenue in the Age of AI - Amit",
          description: ""
        },
        {
          time: "11:00 AM – 11:10 AM",
          title: "☕ GAIN a Sip: Tea & Chatter Break",
          description: ""
        },
        {
          time: "11:15 AM – 11:40 AM",
          title: "🔥 Recharge. Rethink. Rise – Diana",
          description: ""
        },
        {
          time: "11:45 AM – 12:25 PM",
          title: "🦸‍♂️ Sales Avengers: Powering the Pipeline",
          description: ""
        },
        {
          time: "12:30 PM – 12:55 PM",
          title: "🎉 AI or Nay? The GAIN Game Begins with Girish & Balajee",
          description: ""
        },
        {
          time: "01:00 PM – 01:55 PM",
          title: "🍽️ System Cooldown: Refuel & Refresh",
          description: ""
        },
        {
          time: "02:00 PM – 02:40 PM",
          title: "🦸‍♂️ Sales Avengers: Powering the Pipeline",
          description: ""
        },
        {
          time: "02:45 PM - 03:10 PM",
          title: "💡GAIN Starts with You – Mr. Jaimit Doshi",
          description: ""
        },
        {
          time: "03:15 PM – 03:40 PM",
          title: "🔬 Product Deep Dive - GAIN Tech Stack - Kedar & Saurabh",
          description: ""
        },
        {
          time: "03:45 PM - 03:55 PM",
          title: "☕ GAIN a Sip: Tea & Chatter Break",
          description: ""
        },
        {
          time: "04:00 PM - 04:25 PM",
          title: "⚡ Firestorm with Praveen & AV",
          description: ""
        },
        {
          time: "04:30 PM - 04:55 PM",
          title: "🎤 Mastering the Shift: From Growth to GAIN – Sid",
          description: ""
        },
        {
          time: "05:00 PM – 05:15 PM",
          title: "🎤 System Shutdown: Sync, Reflect & GAIN More - Amit / AB",
          description: ""
        },
        {
          time: "07:45 PM - 11:00 PM",
          title: "🏆 GAINing Glory: Awards Nite & Gala Dinner",
          description: ""
        }
      ]
    },
    {
      id: "day3",
      date: "April 26, 2025",
      title: "Day 3",
      events: [
        {
          time: "07:30 AM - 10:00 AM",
          title: "Breakfast in Hotel",
          description: ""
        },
        {
          time: "10:00 AM",
          title: "Check out (Baggage to be kept in Baggage area)",
          description: ""
        }
      ]
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-netcore-blue text-center mb-12 animate-on-scroll">
          Conference Agenda
        </h2>
        
        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {days.map((day) => (
              <TabsTrigger 
                key={day.id} 
                value={day.id}
                className={cn(
                  "data-[state=active]:bg-netcore-blue data-[state=active]:text-white",
                  "transition-all duration-300"
                )}
              >
                {day.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {days.map((day, dayIndex) => (
            <TabsContent 
              key={day.id} 
              value={day.id}
              className="animate-fade-in"
            >
              <div className="rounded-lg overflow-hidden border border-gray-100 shadow-md">
                <div className="bg-netcore-lightGray py-4 px-6">
                  <h3 className="text-xl font-semibold text-netcore-blue">{day.date}</h3>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className="p-6 animate-on-scroll"
                      style={{ animationDelay: `${eventIndex * 0.07}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start">
                        <div className="md:w-1/3 font-medium text-gray-500 mb-2 md:mb-0">
                          {event.time}
                        </div>
                        <div className="md:w-2/3">
                          <h4 className="text-lg font-semibold text-netcore-blue mb-1">
                            {event.title}
                          </h4>
                          {event.description && (
                            <p className="text-gray-600">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AgendaSection;
