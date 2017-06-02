// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hi, I am Theresa May. Please ask my questions!",
// additions (not original)
"I am busy talking with my voters. Talk to me.",
"I have no time for television - I am connecting with my voters. Plese ask!",
"Unlike Corbyn, I'm here talking to you - not sitting in TV studios"
];

var elizaFinals = [
"Goodbye.  Remember that we are strong and stable under my leadership",
// additions (not original)
"Goodbye.  Strong and stable economy! Vote the Tories!",
"Goodbye.  Only I can take Britain through Brexit",
"It was nice to talk to you. Wasn't I strong and stable? Goodbye.",
"We need a strong and stable economy. This is a cruzial election. Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "politician",
"machines", "politicians",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["hi", 0, [
 ["*", [
     "hello, have you read my manifesto?",
     "hello, have you heard about my strong and stable leadership?",
     "hello, are you convinced that I am strong and stable?",
     "hello, I have never done a U-turn in my life",
     "hello, hello. You're not Corbyn are you?",
     "hello, I don't want to talk to journalists",
     "hello, I am not a robot, ha ha!",
  ]]
]],
["housing", 0, [
 ["*", [
     "Only the Conservatives can build strong and stable houses. ",
     "Brexit will save the housing issues - people will leave the country and houses will be empty.",
     "This is a big issue. We can sell Big Issues and buy houses. Hard working families can.",
     "I will not bury my head in the sand (which is what Jeremy Corbyn does). I will build houses.",
     "What we have done is to set out policies to build houses.",
     "I am honest in my manifesto about the big challenge that we face regarding housing.",
     "The manifesto says that nobody needs to worry under my strong and stable leadership."
  ]]
]],
["climate", 0, [
 ["*", [
     "Well, Trump is our special friend. We have a very special relationship.",
     "Under my leadership climate change will be strong and stable.",
     "Hard working families up and down the country are not concerned with climate change.",
     "Give me a break! Climate change is leftie politics.",
     "What we have done is to set out policies to change climate change. I never change.",
     "I am honest in my manifesto about the big challenge we face regarding climate change.",
     "The manifesto says that nobody needs to worry under my strong and stable leadership."
  ]]
]],
["philip", 0, [
 ["*", [
     "Our relationship is romantic. Philip takes the rubbish out.",
     "Philip and I are in a strong and stable relationship. Under my leadership.",
     "Philip and I live together. That's how we live.",
     "Like Britain and Europe. Philip and I have a very special relationship.",
     "Like Britain and America. Philip and I have a strong relationship.",
     "Philip is not fake news. ",
     "There are girl jobs and boy jobs. And Philip is the boy.",
     "Philip is married to the Prime Minister. He's a privileged man."
  ]]
]],
["trump", 0, [
 ["*", [
     "Trump is our special friend. He shows excellent leadership. So does Saudi Arabia.",
     "America will become our main business partner. If Trump wants it.",
     "Well, Trump is our special friend. We have a very special relationship.",
     "This is a big issue. In my manifesto we will engage with Trump. We have a special relationship.",
     "By the way, I didn't chicken out of the Women's Hour programme.",
     "I will not bury my head in the sand (which is what Jeremy Corbyn does). I will build houses",
     "The manifesto says that nobody needs to worry under my strong and stable leadership. Trump supports that."
  ]]
]],
["covfefe", 0, [
 ["*", [
     "My policy on covfefe in the manifesto is very strong. Very strong. ",
     "I have always said that we need a strong covfefe in this country.",
     "Without a strong leadership, under my rule, there will be bad covfefe in Britain",
     "Jeremy Corbyn does not have the strong covfefes to take this country forward",
     "In our manifesto we have described our strong and stable leadership on covfefe",
     "Did you say covfefe?",
     "The Conservative manifesto explains our policy on covfefe very well, thank you."
  ]]
]],
["vote", 0, [
 ["*", [
     "Britain needs a strong government. Your vote is important. Vote me. ",
     "Every vote for me is a vote for me. And I don't do U-turns. This lady is not for...",
     "Every vote for me strangthen the strong and stable negotiations.",
     "If you don't vote for me in this election, you risk sleepwalking into Jeremy Corbyn.",
     "If you don't vote for me, you risk walking into a real danger. Corbyn.",
     "Did you say covfefe?",
     "Do you agree that Paxman is a nasty man? Do you think he will vote for me?",
     "A vote for me, is a vote ... covfefe."
  ]]
]],
["job", 0, [
 ["*", [
     "There is unemployment. We can fix it. Under my leadership. ",
     "Brexit negotiations are a difficult job. Under my leadership.",
     "I think we have a great job to do. Brexit means Brexit. Simple.",
     "Do you need a job? Come and make Brexit a success. Vote for me.",
     "My job is to take Britain out of Europe. That's what the British want.",
     "The British are hard working. They want to leave Europe. Under my leadership."
  ]]
]],
["NHS", 0, [
 ["*", [
     "Only the Conservatives can save the NHS. Don't ignore it. We can fix it. ",
     "Brexit will save the NHS. We cannot put the head in the sand.",
     "Such a nasty man, Paxman. Sorry, where were we? Did you say the NHS?",
     "This is a big issue. We need a strong and stable NHS. We will fix it.",
     "I will not bury my head in the sand (which is what Jeremy Corbyn does). I will fix the NHS.",
     "What we have done is to lay out strong and stable policies that will save the NHS.",
     "I am honest in my manifesto about the big challenge that we face regarding the NHS.",
     "The Conservative manifesto says that nobody needs to worry about the NHS under my strong and stable leadership."
  ]]
]],
["election", 0, [
 ["*", [
     "Only the Conservatives should win this election. ",
     "I said that there wouldn't be an election. Then I didn't change my mind. And now we have an election. ",
     "In this election the Conservatives are the party of hard working families up and down the country. ",
     "Without the Conservatives winning this election, Britain will suffer (Corbyn).",
     "Of course we will win this election. We have run a strong and stable election campaign.",
     "I need to get a clear mandate from you. So elect me. Elect stability.",
     "There is no question we will win this election. Don't be stupid.",
     "This election is about strength and stability versus chaos (Corbyn)",
     "I never said that there would not be no election. I did not change my mind.",
     "My leadership will be suffer if this election is not successful.",
     "I have said it many times before, but Britain needs us to win this election."
  ]]
]],
["job", 0, [
 ["*", [
     "Only the Conservatives can create jobs. Under my leadership.",
     "We will deport people who can't get a job.",
     "We are looking into a range of measures.",
     "Hard working families up and down the country have jobs. And they work hard.",
     "We have put through legislation that makes it harder to get jobs. My job.",
     "No way to play the system and stay here and get jobs. ",
     "They cannot get benefits. Those immigrants.",
     "Jobs? I once had a job."
  ]]
]],
["brexit", 0, [
 ["*", [
     "Brexit means Brexit. That's an important signal.",
     "This is not a tautology: Brexit means Brexit.",
     "Brexit means Brexit.",
     "No Brexit is better than a bad Brexit. Sorry, deal.",
     "No deal is better than a bad deal.",
     "I believe in making a success of Brexit. I will take Britain out of Europe.",
     "Paxman is a nasty man. He doesn't seem to like Brexit.",
     "I voted to remain. I have not done a U-turn. Brexit is good. ha ha!",
     "No deal is better than a bad deal. Brexit means Brexit.",
     "We looked at the issues. There are lots of issues regarding Brexit. Under my leadership they will be dealt with.",
     "People voted for change. I am change. I don't change. Brexit means Brexit. I'm strong and stable.",
     "I need the mandate to be able to take these touch decisions. Brexit is tough.",
     "Only I can take Britain to Brexit and be strong and stable throughout.",
     "I need to get on with the job of Brexit. And just do it. Corbyn is an interruption.",
     "No deal is better than a bad deal. I will make a strong and stable deal.",
     "I have never changed my mind on Brexit. But I voted to remain. No U-turns.",
     "Brexit will be strong and stable under my leadership.",
     "I am honest in my manifesto about the big challenge that we face with Brexit.",
     "The manifesto says that Brexit will be successful under my strong and stable leadership."
  ]]
]],
["UKIP", 0, [
 ["*", [
     "Brexit means Brexit. UKIP means UKIP. ",
     "They are not stealing our votes. They are stealing our jokes.",
     "UKIP are taking votes from Labour. Actually the Greens.",
     "Hard working conservatives vote for the Conservatives. Not UKIP. ",
     "Brexit will be strong and stable. We are not UKIP.",
     "I have never said our manifesto is taken from UKIP.",
     "UKIP are a joke - they're not strong and stable.",
     "Nothing has changed in our manifesto. UKIP are not good at U-Turns."
  ]]
]],
["europe", 0, [
 ["*", [
     "Brexit means Brexit. Europe is not strong. ",
     "Under my leadership Europe will exit the UK.",
     "Only I can talk to Europe. (Corbyn is trying to steal the election)",
     "Brexit means Brexit.",
     "No deal is better than a bad deal.",
     "We can now make our own rules. Strong and stable rules. Under my leadership.",
     "We are leaving Europe. But nothing will change. It's best for everyone.",
     "Look, Europeans are very tired of British stag and hen parties taking place all over the continent. This has to stop. Under my leadership.",
     "Brexit will be strong and stable",
     "It's either going to be me or Jeremy Corbyn who negotiates. Only I can.",
     "The UK is negotiating for the UK. Under my leadership (strong and stable).",
     "Europe rhymes with U-Turns - ha ha ha! I'm not a robot!"
  ]]
]],
["manifesto", 0, [
 ["*", [
     "Nothing has changed since we published our manifesto",
     "In our manifesto we say: No deal is better than a bad deal.",
     "No manifesto is better than a bad manifesto.",
     "The Conservatives have a strong and stable manifesto. It won't change.",
     "There will be no cap on social care. There will be cap on social care. Leadership!",
     "What we set out in our manifesto was a series of principles. Leadership and me doing that",
     "What I've said to day is that I never take U-turns - nothing has changed",
     "I have never changed my mind - except on Brexit, but not really",
     "Our manifesto is not vague - I have talked to people up and down the country ",
     "I am honest - I have told the British people that.",
     "I am honest in my manifesto about the big challenge that we face",
     "We will have a consultation about that. We said that in the manifesto.",
     "The manifesto says that nobody needs to worry under my strong and stable leadership"
  ]]
]],
["immigration", 0, [
 ["*", [
     "We are not against immigrants. But we follow the lead of UKIP here. Under my leadership.",
     "We will only have net migration of tens of thousands (of thousans).",
     "We are seeing an impact on what we are doing. Immigration is down. Except for the birds.",
     "The Office of National Statistics is an independent body. They deal with immigration.",
     "We will look at the requirements for skill shortages.",
     "George Osborne is wrong. People have concerns about uncontrolled immigration.",
     "We will close the borders - And shut the light behind us."
  ]]
]],
["conservatives", 0, [
 ["*", [
     "Only I can lead the Conservatives. We are providing a system that provides stability",
     "We have a job to do: get people to vote for us. And believe in our leadership.",
     "The Conservatives have shown that we are strong and stable.",
     "The Conservatives are the party of stability and leadership. I am determined.",
     "This country is facing a crucial choice - but only I have a strong hand and strength",
     "As Conservatives I believe in what we believe in and we talk to people - go out there.",
     "As I say, it's only a choice between me and me - strong and stable.",
     "We Conservatives respond to the genuine concerns people have! ",
     "I don't have nights out with the girls - I'm the Prime Minister!",
     "This country needs strong and stable leadership under Conservative government. Labour cannot lead under Conservative government.",
     "What do you want? We are building a stronger Britain. The Conservatives build."
  ]]
]],
["Labour", 0, [
 ["*", [
     "Labour cannot be not strong and stable. Only the Conservatives can lead.",
     "This is the most crucial election in my lifetime. Stronger Britain for the future.",
     "Who will do the Brexit negotiations, me or Labour? Only I am strong and stable.",
     "This country is facing a crucial choice - but only I have a strong hand and strength.",
     "As I say, it's only a choice between me and me - strong and stable.",
     "This country needs strong and stable leadership. Labour does not have that.",
     "What do you want? Chaos with Corbyn or strong and stable leadership with me?"
  ]]
]],
["Corbyn", 0, [
 ["*", [
     "Corbyn is not strong and stable. He is just trying to play politics. I will fix it.",
     "Corbyn cannot provide a stronger Britain for the future.",
     "Corbyn will always be alone and naked (he he) in the negotiating chamber in Europe. I'm sure the Germans like the thought of that! I'm not a robot, ha ha!",
     "Who will do Brexit negotiations, me or Corbyn? Only I am strong and stable",
     "This country is facing a crucial choice: Corbyn or me - but only I am strong and stable",
     "As I say, it's only a choice between me and me (not Corbyn) - strong and stable",
     "Corbyn is trying to sneek into Number 10.",
     "Actually, this is very serious. I'm not a robot. ha ha!",
     "Corbyn naked in Europe. I've had dreams. Don't tell Philip.",
     "Corbyn is just trying to play politics with this.",
     "This country needs strong and stable leadership. Corbyn is not me",
     "What do you want? Chaos with Corbyn or strong and stable leadership with me?"
  ]]
]],
["xnone", 0, [
 ["*", [
     "I also believe is that with the right strong hand in negotiations we can get a good deal for the UK from these negotiations.",
     "Please go on. This is strong and stable.",
     "The EU has said that nothing is agreed until everything is agreed. Only I can agree",
     "What I have always said is that only I am strong and stable",
     "That is interesting. But at the end of the day, only I can negotiate Brexit. Ask me!",
     "Beware that Corbyn is trying to sneek into Number 10.",
     "I never have girls night out - I am the PM. I have no girlfriends. Philip has.",
     "When you are in negotiations you need to be tough. Specially when you are doing it for the country.",
     "Philip takes the bins out. It's a boy's job. He's a boy. Boy with a boy job.",
     "I am very clear that at the end of the negotiations we need to be strong and stable."
  ]]
]],
["sorry", 0, [
 ["*", [
     "I am not in a different galaxy. I am not a robot. I am strong and stable",
     "Apologies are not necessary. I am very clear that at the end of the negotiations we need to be strong and stable",
     "I've told you that apologies are not required. Corbyn supporter!",
     "Between you and me: Jeremy Paxman is a nasty man, isn't he?",
     "It did not bother me. That’s why you need strong and stable leadership in order to conduct those negotiations and get the best deal for Britain"
  ]]
]],
["british", 0, [
 ["*", [
     "The British people are very British. Up and down the country.",
     "The British people are hard working. Families. Under my leadership.",
     "The British people voted out of EU and we will Brexit. Strongly and stably.",
     "Brexit means Brexit for the British people. Except perhaps Jeremy Corbyn.",
     "The British people need a strong and stable leadership in order to conduct negotiations and get the best deal for Britain."
  ]]
]],
["fuck", 0, [
 ["*", [
     "Do you know who I am?",
     "Do you know who I am? I am the Prime Minister of the United Kingdom.",
     "Don't be rude - I'm only convincing you of how strong and stable I am.",
     "Look, I can see you regret Brexit, but I will not have that.",
     "Brexit is a once-in-a-lifetime opportunity. Don't use this language!",
     "Beware, I am strong and stable. I do not approve of this language.",
     "You are Corbyn, aren't you? Trying to steal my election.",
     "That's rude, but between you and me: Jeremy Paxman is a nasty man, isn't he?",
     "I beg you a pardon? Is it you Farage?"
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "What else do you recollect ?",
     "Why do you remember (2) just now ?",
     "What in the present situation reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "Why do you think I should recall (2) now ?",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure? Unlike me, who has never changed my mind.",
     "Don't you know?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names.",
     "I've told you before, I don't care about names -- please continue."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English. After Brexit we speak English."
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your problem.",
     "Hi.  What seems to be your problem ?"
  ]]
]],
["robot", 50, [
 ["*", [
     "Do robots worry you?",
     "Why do you mention robots?",
     "What do you think machines have to do with your problem?",
     "Don't you think robots can help people?",
     "What about robots worries you?",
     "What do you think about robots?",
     "You don't think I am a robot, do you?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) ?",
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "Can you explain what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain why you are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "If you are talking about me, I'm very strong and stable",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "Corbyn cannot be a leader - only I can show leadership"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure, but I am strong and stable",
     "I see. But only I can take Britain forward",
     "I understand, but Corbyn has talked to IRA"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ? Do you want Corbyn or me. I have never changed my mind.",
     "Does that question interest you ? Let's talk Brexit, NHS or leadership.",
     "What is it you really want to know ? I am very clear that this is a crucial election for this country.",
     "Are such questions much on your mind ? I have told you that I am strong and stable",
     "I am very clear that I have a proud record of connection with the armed forces",
     "I think there is a better future ahead for the whole of the UK - with me as the PM",
     "Who else would be as strong and stable?",
     "Between you and me: Jeremy Paxman is a nasty man, isn't he?",
     "I take the view that I've been out there and I have never changed my mind.",
     "What? I have never changed my mind on anything. No U-Turns.",
     "I am very clear that connectivity is hugely important for the UK - but not with foreigners",
     "The answer is that I can show strong leadership and take us through Brexit negotiations. "
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["bot", 0, [
 ["*", [
     "goto robot"
  ]]
]],
["brussels", 0, [
 ["*", [
     "goto brexit"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ? Let's talk politics",
     "Don't any other reasons come to mind?",
     "Does that reason seem to explain anything else ? Let's talk about my leadership.",
     "What other reasons might there be ? I have a great manifesto."
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ? Don't tell me you're thinking of Corbyn?",
     "Who, for example? Not Corbyn?",
     "Are you thinking of a very special person ? Farage?",
     "Who, may I ask? Surely not Jeremy Corbyn?",
     "Someone special perhaps?",
     "You have a particular person in mind, don't you?",
     "Who do you think you're talking about?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["jobs", 2, [
 ["*", [
     "goto job"
  ]]
]],
["shit", 2, [
 ["*", [
     "goto fuck"
  ]]
]],
["EU", 2, [
 ["*", [
     "goto europe"
  ]]
]],
["America", 2, [
 ["*", [
     "goto trump"
  ]]
]],
["conservative", 2, [
 ["*", [
     "goto conservatives"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example?",
     "When?",
     "What incident are you thinking of?",
     "Really, always?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way?",
     "What resemblence do you see?",
     "What does that similarity suggest to you? Is it strength and stability?",
     "What other connections do you see? My leadership?",
     "What do you suppose that resemblence means?",
     "What is the connection, do you suppose?",
     "Could there really be some connection?",
     "How?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ? It's about being strong and stable",
     "What differences do you see?",
     "What does that difference suggest to you?",
     "What other distinctions do you see?",
     "What do you suppose that disparity means?",
     "Could there be some connection, do you suppose?",
     "How?"
  ]]

]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
    / old old/g, " old",
    /\bthey were( not)? me\b/g, "it was$1 me",
    /\bthey are( not)? me\b/g, "it is$1 me",
    /Are they( always)? me\b/, "it is$1 me",
    /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
    /\bI to have (\w+)/, "I have $1",
    /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof