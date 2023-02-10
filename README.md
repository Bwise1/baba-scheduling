This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

follow these steps to get started:

```bash
git clone https://github.com/Bwise1/baba-scheduling.git

yarn install

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Baba-Scheduling

## What is Baba-Scheduling?

- This is a project that intends to automate the process of booking meetings according to available time slots.

---

## What problem does Baba-Scheduling solve ?

- When a person1 wants to book a meeting with person2 he will send an email requesting for the date and time of the meeting. Person1 is not available at the requested time so he gives a date and time to person2 at which he is free. This goes on till they both find a suitable time slot at which they both are free. This is a long and cumbersome process so Baba-Scheduling solves this by showing person1 the date and time slots person2 is free so he can book his meeting immediately.

### Tools:

- Nextjs for frontend
- NodeJs Express for backend

---

### Use case:

- User1 sends a link with his/her username
- User2 opens the site and sees a UI with available time slots
- User2 presses a time slot and creates a booking
- User1 gets notified about the requested booking
- User1 can approve or disapprove the booking

---

### Requirements:

- Should be able to add events in google calendar
- Should be able to send email notifications
- Should be able to show available spots
- Should check user calendar in case they book something into available spots
- User should be able to pick which times are going to be available to book, weekly, monthly or yearly (for instance Tuesdays at 3 PM is available all year, Monday at 2 PM is only available today etc)
- The user that books meeting should be able to add in details for the meeting
  - Might have options like: type of meeting [Phone, Video, Face to Face]
  - Adding in a note for what the meeting is about
  - Name of booker, name of the company
  - Phone number and email
  - if it's a video conference an option for adding a link to the site of the meeting is required
- Main user should be able to approve or disapprove booking

---

### Edge cases:

- User1 is in the process of booking an appointment and User2 books it before User1 finishes. So once User1 is done it is no longer available.
  - Solution: When a user presses a time slot it becomes unavailable straight away. And if they cancel or get disapproved it will become available again.
- User2 can hog available slots by opening the booking page indefinitely, making the application counter-productive. There has to be a time limit set for a single booking to take place, example: 15 mins available to book a slot after User clicks a slot to book
