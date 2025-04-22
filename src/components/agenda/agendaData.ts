import { DayType } from './DayTab';

export type AgendaEventType = {
  time: string;
  title: string;
  description: string;
  speaker?: string;
};

export const agendaData: DayType[] = [
  {
    id: "day1",
    title: "Day 1 - April 24",
    date: "April 24, 2025",
    events: [
      {
        time: "08:00 AM – 12:00 PM",
        title: "Arrival at the Venue / Breakfast for early arrivals",
        description: "Rooms available after 3 PM"
      },
      {
        time: "01:00 PM – 03:00 PM",
        title: "Lunch",
        description: ""
      },
      {
        time: "03:00 PM – 03:55 PM",
        title: "Check-in / Leisure",
        description: ""
      },
      {
        time: "04:00 PM – 04:10 PM",
        title: "Assemble in Ballroom – Netcore Anthem",
        description: ""
      },
      {
        time: "04:15 PM – 04:55 PM",
        title: "Curtain Raiser – Kalpit Jain",
        description: ""
      },
      {
        time: "05:00 PM – 05:25 PM",
        title: "Keynote Address – Rajesh Jain",
        description: ""
      },
      {
        time: "05:30 PM – 07:30 PM",
        title: "Event Kickoff & Team Building Activity",
        description: "Driven by external team"
      },
      {
        time: "07:30 PM Onwards",
        title: "Dinner & Leisure",
        description: ""
      }
    ]
  },
  {
    id: "day2",
    title: "Day 2 - April 25",
    date: "April 25, 2025",
    events: [
      {
        time: "07:30 AM – 08:55 AM",
        title: "Breakfast",
        description: ""
      },
      {
        time: "09:00 AM – 09:10 AM",
        title: "Welcome to GAIN Mode – Abithab Bhaskar & Amit Ahuja",
        description: ""
      },
      {
        time: "09:15 AM – 09:25 AM",
        title: "AI-Spirational Kickoff",
        description: ""
      },
      {
        time: "09:30 AM – 10:10 AM",
        title: "GAIN – Kalpit Jain",
        description: ""
      },
      {
        time: "10:15 AM – 10:40 AM",
        title: "Transforming International Business – Abithab Bhaskar",
        description: ""
      },
      {
        time: "10:45 AM – 11:10 AM",
        title: "Growth, Grit & Gameplan: India – Amit Ahuja",
        description: ""
      },
      {
        time: "11:15 AM – 11:25 AM",
        title: "Coffee & Chatter Break",
        description: ""
      },
      {
        time: "11:30 AM – 11:55 AM",
        title: "Guest Speaker – Randi Chiah",
        description: ""
      },
      {
        time: "12:00 PM – 12:35 PM",
        title: "Impact Player Session – Part 1",
        description: ""
      },
      {
        time: "12:40 PM – 01:00 PM",
        title: "Inbox Unplugged with the Email Chief – Balajee S",
        description: ""
      },
      {
        time: "01:05 PM – 01:55 PM",
        title: "System Cooldown – Refuel & Refresh",
        description: ""
      },
      {
        time: "02:00 PM – 02:40 PM",
        title: "Impact Player Session – Part 2",
        description: ""
      },
      {
        time: "02:45 PM – 03:10 PM",
        title: "Guest Speaker – Mr. Jaimit Doshi",
        description: ""
      },
      {
        time: "03:15 PM – 03:35 PM",
        title: "Comm Stack Crackdown – Girish Chaturvedi",
        description: ""
      },
      {
        time: "03:40 PM – 04:00 PM",
        title: "Mission: Growth Possible – Avadhoot Revankar",
        description: ""
      },
      {
        time: "04:00 PM – 04:10 PM",
        title: "Coffee & Chatter Break",
        description: ""
      },
      {
        time: "04:15 PM – 04:40 PM",
        title: "Product Deep Dive – Kedar Parikh & Saurabh Tuteja",
        description: ""
      },
      {
        time: "04:45 PM – 05:05 PM",
        title: "Delivering Experience & Advocacy – Praveen Sridhar",
        description: ""
      },
      {
        time: "05:10 PM – 05:35 PM",
        title: "Building Great Customer Relationships: A 'Consultative' Sales Approach – Siddharth Gopalkrishnan",
        description: ""
      },
      {
        time: "05:40 PM – 05:50 PM",
        title: "Reflection of the Day – Amit Ahuja & Abithab Bhaskar",
        description: ""
      },
      {
        time: "07:45 PM – 11:00 PM",
        title: "GAINing Glory: Awards Night & Gala Dinner",
        description: ""
      }
    ]
  },
  {
    id: "day3",
    title: "Day 3 - April 26",
    date: "April 26, 2025",
    events: [
      {
        time: "07:30 AM – 10:00 AM",
        title: "Breakfast in Hotel",
        description: "Leaders are encouraged to set up side meetings post breakfast to align FY25 plans"
      },
      {
        time: "10:00 AM – 10:30 AM",
        title: "Check-out & Baggage Drop",
        description: "Return Transfers will be arranged based on departure times (shared in the group). Pickup will be 4.5 hours prior to flight time."
      }
    ]
  }
];
