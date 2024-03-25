export const questions = [
  {
    section: 1,
    items: [
      {
        label: "Hello and wellcome to Weight Win! What is your name?",
        type: "text",
        value: "userName",
      },
      // {
      //   label: 'password',
      //   type: 'password',
      //   value: 'password'
      // }
    ],
  },
  {
    section: 2,
    items: [
      {
        label: "What is your current weight in Kg?",
        type: "text",
        value: "currWeight",
      },
      {
        label: "What is your ideal weight in Kg?",
        type: "text",
        value: "goalWeight",
      },
      {
        label: "What is your height in meters?",
        type: "text",
        value: "height",
      },
      // {
      //   label: 'State',
      //   type: 'select',
      //   value: 'state',
      //   options: [ 'State 1', 'State 2']
      // }
    ],
  },
  {
    section: 3,
    items: [
      {
        label: `What is your motivation for using WeightWin?`,
        type: "check",
        value: "affirm",
        valuesArr: ["Lose Weight", "Get Strong", "Be Healthy"],
      },
    ],
  },
  {
    section: 4,
    items: [
      {
        label: "Well done! We are ready to start",
        type: "information",
        value: "username",
      },
      // {
      //   label: 'password',
      //   type: 'password',
      //   value: 'password'
      // }
    ],
  },
];
