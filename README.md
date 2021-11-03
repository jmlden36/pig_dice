# _Pig Dice_

#### By _**Jacob Wilson, Ryan Ashby, Matt Luker**_

#### _Play a game of Pig dice with your friend!_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_A detailed description of the project._

## Setup/Installation Requirements

Leave nothing to chance!

* _You can find the github repository [here]()_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_
* _OR_
* _You can find the project on github pages[here]()_

## Known Bugs

* _No known bugs_

## Tests

Describe: diceRoll()

Test: It should return a random number between 1 and 6 including 1 and 6
Code: diceRoll = function(){
  return Math.floor(Math.random() * 6 ) + 1;
}
diceRoll();
Expected Output: 1

Test: It should return a random number between 1 and 6 including 1 and 6 unless and if the number is 1 

Describe: Dice(currentRoll)

Test: It should create the Dice constructor
Code: let diceCurrentRoll = new Dice(1);
Expected Output: undefined
Note: diceCurrentRoll;
        Dice {currentRoll: 1, rolls: Array(0)}

Describe: Score(currentScore, totalScore)

Test: It should create the Score constructor
Code: let scoreInfo = new Score(12, 100);
Expected Output: undefined
Note: scoreInfo;
        Score {currentScore: 12, totalScore: 100}


## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a separate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _Date_ _Jacob Wilson, Ryan Ashby, Matt Luker_