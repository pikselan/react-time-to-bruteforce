const config = {
  calculationsPerSecond: 10e9,

  tests: [
      {
          title: "lowercase letters",
          regex: /[a-z]/,
          addsPossibilities: 26
      },
      {
          title: "uppercase characters",
          regex: /[A-Z]/,
          addsPossibilities: 26
      },
      {
          title: "numbers",
          regex: /[0-9]/,
          addsPossibilities: 10
      },
      {
          title: "special characters",
          regex: /[!@#$%^&*(\\)\-_=+[{ \]};:'"|`~,<.>/? ]/,
          addsPossibilities: 33
      }
  ]
}

module.exports = config;