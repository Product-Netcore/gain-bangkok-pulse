
import React from 'react';
import AgendaEvent from './agenda/AgendaEvent';

type AgendaItem = {
  time: string;
  title: string;
  description?: string;
};

type DayAgenda = {
  day: string;
  events: AgendaItem[];
  note?: string;
};

const agendaData: DayAgenda[] = [
  {
    day: 'DAY 1',
    events: [
      { time: '08:00 AM - 12:00 PM', title: 'Arrival at the Venue – Breakfast for early Arrivals', description: '(No rooms availability till 3PM)' },
      { time: '01:00 PM – 3:00 PM', title: '🍽️ Power Lunch' },
      { time: '03:00 PM - 04:00 PM', title: 'Check In / Leisure' },
      { time: '04:00 PM - 04:10 PM', title: 'Assemble in Ballroom for Netcore Anthem' },
      { time: '04:10 PM – 04:20 PM', title: '🚀 GAINing Momentum: Welcome Address by Amit & Abithab' },
      { time: '04:25 PM – 04:55PM', title: '🌟 Visionary GAIN: Rajesh Jain’s Keynote Addres' },
      { time: '05:00 PM - 07:00 PM', title: 'Event Kickoff with Team building Activity', description: '(External Team will drive the next few hours )' },
      { time: '07:00 PM Onwards', title: 'Dinner & Leisure' },
    ],
    note: `Group Pick up shall be provided from the Airport Post Airport Check out. For Individuals, they can book their transfers from Airport & will be re-imbursed accordingly`,
  },
  {
    day: 'DAY 2',
    events: [
      { time: '07:30 AM - 09:20 AM', title: 'Breakfast' },
      { time: '09:00 AM – 09:10 AM', title: '🚀 Booting Up: Welcome to GAIN Mode' },
      { time: '09:15 AM – 09:25 AM', title: '🎬 Fueling the Mind: AI-Spirational Kickoff' },
      { time: '09:30 AM – 09:55 AM', title: '📈 Past. Present. GAIN. – A CEO’s Viewpoint – KJ' },
      { time: '10:00 AM – 10:25 AM', title: '🚀 Activating GAIN Mode: Vision 2025 - Abithab' },
      { time: '10:30 AM – 10:55 AM', title: '💰 Scaling Smart: Revenue in the Age of AI - Amit' },
      { time: '11:00 AM – 11:10 AM', title: '☕ GAIN a Sip: Tea & Chatter Break' },
      { time: '11:15 AM – 11:40 AM', title: '🔥 Recharge. Rethink. Rise – Diana' },
      { time: '11:45 AM – 12:25 PM', title: '🦸‍♂️ Sales Avengers: Powering the Pipeline' },
      { time: '12:30 PM – 12:55 PM', title: '🎉 AI or Nay? The GAIN Game Begins with Girish & Balajee' },
      { time: '01:00 PM – 01:55 PM', title: '🍽️ System Cooldown: Refuel & Refresh' },
      { time: '02:00 PM – 02:40 PM', title: '🦸‍♂️ Sales Avengers: Powering the Pipeline' },
      { time: '02:45 PM - 03:10 PM', title: '💡GAIN Starts with You – Mr. Jaimit Doshi' },
      { time: '03:15 PM – 03:40 PM', title: '🔬 Product Deep Dive - GAIN Tech Stack - Kedar & Saurabh' },
      { time: '03:45 PM - 03:55 PM', title: '☕ GAIN a Sip: Tea & Chatter Break' },
      { time: '04:00 PM - 04:25 PM', title: '⚡ Firestorm with Praveen & AV' },
      { time: '04:30 PM - 04:55 PM', title: '🎤 Mastering the Shift: From Growth to GAIN – Sid' },
      { time: '05:00 PM – 05:15 PM', title: '🎤 System Shutdown: Sync, Reflect & GAIN More - Amit / AB' },
      { time: '07:45 PM - 11:00 PM', title: '🏆 GAINing Glory: Awards Nite & Gala Dinner' },
    ],
  },
  {
    day: 'DAY 3',
    events: [
      { time: '07:30 AM - 10:00 AM', title: 'Breakfast in Hotel' },
      { time: '10:00 AM', title: 'Check out ( Baggage to be kept in Baggage area )' },
    ],
  }
];

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      className="pt-16 pb-12 max-w-7xl mx-auto container px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-netcore-blue text-center">Agenda</h2>
      {agendaData.map(({ day, events, note }, dayIndex) => (
        <article key={day} className="mb-14">
          <h3 className="text-xl font-semibold mb-6 text-netcore-pink">{day}</h3>
          <div className="border border-netcore-pink rounded-lg divide-y divide-netcore-pink">
            {events.map((event, eventIndex) => (
              <AgendaEvent key={`${day}-${eventIndex}`} event={event} index={eventIndex} />
            ))}
          </div>
          {note && (
            <p className="mt-4 text-sm italic text-gray-400">{note}</p>
          )}
        </article>
      ))}
    </section>
  );
};

export default AgendaSection;
