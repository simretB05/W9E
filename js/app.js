// Defined  array named tweets that hold  objects with information about a given tweet, username, day of tweet and age of a person tweeting.
let tweets = [
        {
            tweet: `well,well,well, if it isn't the consequences of my own actions`,
            username: `Lil Du Bois`,
            created_at: `29-09-2018`,
            age:28
        },
        {
            tweet: ` don't worry, i will hold your stuff. you just worry about making friends.- Cargo Shorts`,
            username: `Artie Johann`,
            created_at: `9-12-2010`,
            age:40
        }
        ,{
            tweet: ` just heard a guy at the park tell his dog "No!" and then more quietly, "we talked about this.`,
            username: `Summer Goth`,
            created_at: `10-04-2014`,
            age:52
        },
        {
            tweet: ` so today i was looking at a girl cause she had a piece of lettuce in her hair & she looks at me and said " I have a boyfriend" ok lettuce head!`,
            username: `Bentonto`,
            created_at: `14-09-2016`,
            age:37
        },
        {
            tweet: ` the best part of being a flight attendant has to be when you walk the aisle saying "trash" to everyon's face`,
            username: `Louis Virtel`,
            created_at: `05-11-2018`,
            age:44
        },
        {
            tweet: ` i keep a baseball bat under my bed in case someone tries to break in and pitch a no hitter`,
            username: `Sage Boggs`,
            created_at: `05-06-2014`,
            age:18
        },
        {
            tweet: ` Sick of having to go to 2 different hunts to buy pizza and sunglasses`,
            username: `Louis Virtel`,
            created_at: `19-11-2012`,
            age:16
        },
        {
            tweet: `If you live to be 100, you should make up some fake reason why, 
            just to fuck with people... like claim you ate a pinecone every single day.`,
            username: `Guy Endore-kaiser`,
            created_at: `19-03-2012`,
            age:29
        },
        {
            tweet: `The Roomba vacuum cleaner just beat me to a piece of popcorn
            I dropped on the floor & this is how the war against the machines begins.`,
            username: `Tony Logan`,
            created_at: `29-11-2013`,
            age:16
        },
        {
            tweet: `control this is uhh definitely one of the astronauts... umm... what would
            you do if a janitor got stuck on the shuttle somehow ......over.`,
            username: `Bill_Nye_tho`,
            created_at: `29-11-2013`,
            age:17
        },
    
]
// defined a counter
let counter = 0
// created a while loop that loops through the length of tweets as long as the counter number is less than the taotal length starting from 0 to 10 
while ( counter < tweets.length )
{
// created an if statement that checks if the tweets age is >=18. if so prints the tweet,the name and the date created
    if ( tweets[counter][`age`] >= 18 )
    {
        console.log( ` tweet (${ tweets[counter][`tweet`] }) By ${ tweets[counter][`username`] }, Date ${ tweets[counter][`created_at`] }` )
  
    }
    // counter is set to itself and +1 so it increments the the loop from 0 t0 1 and this will continue untill counter is 10 and the condition for the while loop  is met
    counter = counter + 1
    
}

// created a for loop that loops through the array named  tweets that holds  is a collection  of objets with key value of  information
// counter is set to 0 initially.each time the loop gose through the array the counter will add 1 to itsself  untill counter = to the lenght of the tweets bojects;

for ( let counter = 0; counter < tweets.length; counter = counter + 1 )
{
    // created an if statement that checks if the tweets age is <18. if so prints the tweet,the name and the date created
    if ( tweets[counter][`age`] < 18 )
    {
        console.log( ` tweet  (${ tweets[counter][`tweet`] }) By ${ tweets[counter][`username`] }, Date ${ tweets[counter][`created_at`] }` )

    }
}