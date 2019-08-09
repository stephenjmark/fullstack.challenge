# [Double](https://withdouble.com) · Full-stack engineering challenge

:wave: If you're looking for an adventure, [look no further](https://withdouble.com/jobs).

## Instructions

- To complete this challenge, you will need `npm`, `node` and `git` installed locally
- Solve each level in order
- Include the `.git` directory when submitting your solution
- Don't spend more than **4 hours** on this test
- To start the app:
  - run `npm i`
  - run `npm start`
  - open `http://localhost:8080/`
- If needed, here are the documentation links of: [React](https://reactjs.org/), [Mobx](https://mobx.js.org/index.html) and [Luxon](https://moment.github.io/luxon/index.html)

### Pointers

- Keep in mind that you are working on an existing code-base.
- Code should be clean, extensible and robust. Don't overlook edge cases.
- You will have to create some basic UI. While we're not expecting you to be a skilled designer, it should come close to the look and feel of the app. We _are_ looking for engineers with some product-sense.
- We like [emojis](https://gitmoji.carloscuesta.me/) :wink:

### Submitting your results

2 possibilities:

1. Fork this repository and send us a Pull Request
2. Clone this repository and share yours with [@pierre-elie](https://github.com/pierre-elie) and [@quentinsl](https://github.com/quentinsl)

In both cases, we will review your code within 3 days and will be in touch via email

Let's do this! :muscle:

## Challenge

**Double helps executives and their assistants work better together**. Managing agendas is an important part of an assistant's job, and we're inviting you to join our mission of making assistants's lives easier.

### Level 1: Agenda's title bug fix

One of our users just submitted a bug report: the agenda's title ("Good morning", "Good afternoon", etc.) does not always update as the day goes by.
Identify the source of this behavior and fix it.

### Level 2: Filter agenda events by calendar

We want to add a filtering mechanism on agenda events. The requirements for this feature are:

1. Add a select menu that will filter events by `calendar`
2. When a calendar is selected, only events from that calendar are displayed
3. By default `all` calendars are displayed

### Level 3: Group agenda events by department

Another enhancement would be to show all calendar events in one page, grouping them by `department`. Here is a quick mock-up of what the feature could look like:

<img src="https://user-images.githubusercontent.com/45558407/61964225-5f967b80-af9b-11e9-9e39-b201a5644bf9.png" width="300" />

The requirements for this feature are:

1. Add a button to toggle groups by `department`
2. When enabled, events will be grouped and each group will be clearly identified
3. In each group, events will be sorted by ascending date-time

### Questions

Please add your answers to the questions below:

1. How long did you spend on this challenge?

   I took about 4 hours to complete this challenge.

2. In your opinion, what are features that Double could work on that would be helpful for assistants when managing agendas?

   Double could integrate the DarkSky API and give weather icon warnings when travel is needed between events. You might also be able to integrate data from Google Maps API to give live updates on the traffic between events. This could help assistants adjust for traffic and grab umbrellas if that is part of their duties. As a result, Double could also give notifications to warn for such events, and offer ways to reschedule low priority appointments.

3. If you had more time, what would you add or change in the codebase?

I was moving quickly in the first challenge and didn't notice the runEvery helper in the lib file - I would go back and try to make use of preexisting code - for cleanliness and consistancy. I would fix some of the styling of the calendar select and department group toggle, as I'm not very happy with the proportions and spacing. I might add color to the department group names or the containers around them to help give definition to the groups of events. The calendar objects don't have name fields just IDs, I'd create a feature to allow people to customize their calendar names and have them appear in the selector and maybe in the header when selected.

4. Do you have any constructive feedback that you would like to share with our team?

   Having done a bunch of these challenges recently. This is a really good one. I can see how it does well to test how developers might work inside of an existing codebase. I think you did well to hint at trying to reuse existing code and adapting to use unfamiliar libraries like Mobx. (Unfamiliar to me, but maybe not others). It would be great to have a "calendar name" field in the faked data, but perhaps this was purposely designed into the challenge.
