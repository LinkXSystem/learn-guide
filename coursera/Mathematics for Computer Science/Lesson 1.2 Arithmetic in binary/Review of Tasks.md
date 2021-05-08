Hello there.
We're looking at some examples of your work in writing the algorithms.
Let's look at converting between decimal and binary.
We're going to write the algorithm alongside looking at an example.
从 ::28 开始播放视频并学习脚本0:28
We have the binary number 10111 and we're going to convert it to decimal.
10111, we're going to convert this number to decimal.
We'll look through the place values, which are right here.
So place values 1, 2, 4, 8, 16,
we're going to do that in general for our algorithm.
But let's focus on that example.
For the conversion, all we have to do is to add up a place value when we have a 1.
That's all we do.
So we have that decision there to do.
So let's bear that in mind so
we write that step, that decision, in the algorithm.
从 :1:12 开始播放视频并学习脚本1:12
So in this example, we going to add up the 16, the 4, the 2 and the 1.
So we going to need a container to hold that sum and we going to do it on a loop.
Now it might help, if you picture that we have these values on a bit of paper.
So we going to have a mental bit of paper to hold the value of a number that it's
like a variable.
So let's ready the mind as we go along.
从 :1:42 开始播放视频并学习脚本1:42
So to start with, we need to know which place value we begin.
从 :1:48 开始播放视频并学习脚本1:48
I want to start with the largest place value.
I want to start on the left of the number.
I want to start on the place value 16 here.
So how do I know where to start?
I want to start on that place value 16, I need to know how many digits I've got.
So the first thing is work out how many digits we have.
Count the digits of the number.
So our first step is going to be as simple as count the number of digits, okay?
Count the number, Of digits.
从 :2:33 开始播放视频并学习脚本2:33
Now we count but it's not enough to count.
We need to hold that value in the variable which is like a bit of
paper if you want or a little box where you're going to keep that.
And we going to call N this value, okay?
So, Make big N equals to this number.
从 :3: 开始播放视频并学习脚本3:00
I am using a rather informal language here, and it's fine.
We are precise about the things we need to be precise.
And the other parts can be quite informal in our rhythm.
This is not formal algorithm class.
Right, and so we do that, in our case we count how many digits we have one, two,
three, four, five digits.
Our N is 5, okay?
And how's our help with what we're going to do next?
We're going to start with a large place value.
In our example the large place value is the 1 on place value 16.
How does 16 relate to that N = 5?
16 is 2 to the power of 4.
It's one less than the 5.
That means the first place value we going to add is the 2 to the power,
not N but N- 1.
So I'll say on step 2 for now,
we going to add up the value of 2 to the power of N- 1.
But you are screaming over there, adding where?
从 :4:10 开始播放视频并学习脚本4:10
We need a container don't we?
We need another variable to hold the sum.
So step 2 is actually going to be, make a variable sum.
Make a variable sum.
And it's going to be an integer variable.
Sum, and we going to restart it.
Well, we going to start it with value equals 0.
Okay, that's 0.
And now we've got a container we going to put in there, the first digit,
well not quite the digit.
What we want to put in there is the place value of that left most digit.
So the place value is, in that case is 2 to the 4.
We want 2 to the N- 1.
So step three is going to be, make sum equals to the sum
you had there, which was 0 but doesn't matter.
And 2 to the power N- 1.
从 :5:8 开始播放视频并学习脚本5:08
2 to the N- 1.
从 :5:13 开始播放视频并学习脚本5:13
Great, we got our first little bit in our routine.
从 :5:20 开始播放视频并学习脚本5:20
Now some of you might be thinking,
shouldn't I multiply that place value by the value of the digit?
Yes, you are right, we will do digit times the places value.
But remember, this is the first time we're doing it,
the first digit is the first one you find.
We're not going to run through all the possible zeroes into infinity.
We are going to start with 1, so in this first step we can skip that.
从 :5:48 开始播放视频并学习脚本5:48
But you might be saying, shouldn't we future proof this step and
have a multiplication by the digits?
从 :5:55 开始播放视频并学习脚本5:55
Let's come back to this thought.
So, step 3 so far is this way, and now we want to move to the next digit.
Move to the next digit, how do I do that?
从 :6:8 开始播放视频并学习脚本6:08
We can say, move to the next digit, let's try and write that down.
从 :6:15 开始播放视频并学习脚本6:15
Move to the next digit.
从 :6:23 开始播放视频并学习脚本6:23
To the right, okay?
We can do that.
That means we now would be, on our example,
we would be on place value 8 which we have a zero.
And then what would we do?
We would do, because I've got a 0, I've got nothing to add to my sum.
If I had a 1, I would add again the place value, okay?
We could do that.
从 :6:46 开始播放视频并学习脚本6:46
So we need to decide, we need to check what that digit is.
So our next step which I'm going to write, we'll say step 5.
从 :6:58 开始播放视频并学习脚本6:58
We would say let's have a look there.
What do we say?
If the digit is 0 do nothing.
If the digit is 1, add the place value, okay?
Now do we know what the place value is?
从 :7:14 开始播放视频并学习脚本7:14
The place value needs to be the other power of 2 a smaller power.
So it looks like we have to update our place value holder,
which I think it's enough to use N, the number of digits.
And now say, I was on the last digit, I want to now go to the next one.
So I'm going to say, I'm going to make N be 1 less.
从 :7:41 开始播放视频并学习脚本7:41
And now, let's see could we use the steps we had before?
Could we go back to step 3 and say the sum is going to be the previous sum?
Plus the next power of 2.
We could do that but we did say that we only do that.
If the digit is a 1, if the digit is a 0, we don't go there.
So it looks like we need to redo that step 3 and have an if.
If the digit is a 1, do this, if the digit is a 0,
just carry on to the next digits.
But you are probably thinking, have we got a way of keeping hold of digits?
Not yet, we're going to need a container for the current digits.
So we're going to have to go back.
And let's see, on step 1, we count the number of digits,
we made n to the number of digits, okay?
On step 2, we said make a variable sum equals 0, that's fine.
But we also need to make a digit variable,
so feels like we need to make a digit variable here.
DIGIT = 1 on that
first step.
So say make variables SUM = 0 and DIGIT = 1.
Okay, maybe that works.
So let's see, on step 5, N = N-1.
So we moved the digit, and we now need to go, where?
We need to go to the step 3, but we need to read the next digit.
So on step 4, we say move to the next digit to the right.
So okay, into value,
into variable digits.
Okay, we're kind of breeding that and,
从 :9:54 开始播放视频并学习脚本9:54
We can go back to step 3.
Okay, so on step 5,
we can say step 6 is go to step 3.
And now, what happens on step 3?
On step 3 says, do the sum, but
we only do that if D equals 1, so we need to do an if there.
We have several options, we could say, at this stage,
we could say if D, if DIGIT = 1, where do we go?
If it's 1, we're going to do the sum, so we go to step 3.
Go to step 3, okay.
What happens if the DIGIT is 0?
If the DIGIT is 0, we want to move to the next digit, okay.
It might be easier for us to do the if on step 3, so that's what I'm going to do.
Instead of going this way, I'm going to say, we do a nice neat loop.
We're going to go here, go to step 3.
And on step 3, we're going to make a change.
On that change there, we're going to do the new
step 3 is going to be if the digit is 1,
do the sum, if it's 0, move on, okay?
So we're going to say if DIGIT
= 1, we're going to do SUM
= SUM + the power of 2.
Else, what else?
Else move on, else do nothing.
Move on to the next digit, okay?
That's great.
So that's new step 3 there.
从 :11:48 开始播放视频并学习脚本11:48
Step 3, Okay, so we place that step 3.
Now, does that make sense?
Let's have a look.
Let's write this down to make sure that the whole algorithm makes sense.
So we're going to do step 1.
从 :12:13 开始播放视频并学习脚本12:13
Make a new variable, N and
make N equal number of digits of the number,
and then what do you say?
On step 2, we make two variables, a sum and a digit.
Okay, we can make that into two steps.
Step 2, make variable SUM,
and set SUM = 0.
On step 3, We can do,
let's list the digit.
Make, Variable DIGIT,
and we set DIGIT to 1, and that's because the first DIGIT, we read is always a 1.
And now our new step 4 is going to be our old step 3.
If the DIGIT is 1, do the sum, if not move on.
So that's going to be step 4.
从 :13:29 开始播放视频并学习脚本13:29
If DIGIT = 1, SUM = the previous SUM, and
top it up with the correct power of 2.
Else, we don't need else, because else just move on.
What happens moving on?
Moving on means go to the next digit.
So we're going to write that step which is now going to be step 5,
从 :13:56 开始播放视频并学习脚本13:56
And move to the next digit to the right, okay?
从 :14:3 开始播放视频并学习脚本14:03
Move to the next
digit to the right,
store it in DIGIT.
That's the variable DIGIT, and
now, it says we should go and
I should decrease N and then go to step 3.
So step 6, will be decrease N.
So N = N-1, and then the next step will be,
从 :14:44 开始播放视频并学习脚本14:44
Go to the loop which now in step 4.
Go to step 4,
step 4 here, okay?
If it's 1, add it, if otherwise then move on decrease the N.
Okay, and now, looks pretty cool.
Does this work?
Is this a good algorithm?
Does this stop?
Not so far, when do we stop?
We stop when we run out of digits.
We run out of digits when N is 1, okay?
So we need to stop, we need to put an if statement somewhere saying,
let's stop when N is 1, when we do the final round.
Okay, so what do we do?
Here, when we say go to step 4, we should say if,
if N is 1, we still want to run the cycle.
So if N is 0, we want to stop.
So we kind of change the state the statement here, and we're going to say,
instead of go to step 4, we going to say, if N = 0, we want to stop.
So I'm going to leave some space for what we're going to say we stop.
because if we stop, We need to print out the value of the number,
and the value is sum, and then stop, okay?
So if N is 0,
output the message.
Value in binary,
从 :16:20 开始播放视频并学习脚本16:20
= bring up the value of the variable, so = SUM, okay?
And then STOP.
Else, if N is not 0, else that means N is 1 or more.
We still go to step 4.
从 :16:42 开始播放视频并学习脚本16:42
Okay, so let's run this by hand now, right.
So step 1 make an new variable N.
N is number of digits.
Our number was 10111, so the number of digits N is 5, okay?
Make my variable SUM = 0, that's fine,
and my variable DIGIT = 1, that's great.
And that's because on the beginning of number 10111.
Now, step 4, if the DIGIT is 1, which it is, do the SUM.
So sum is now the value I had there which was 0 and
2 to the power of 4, because it's 5 minus 1.
So 2 to the 4, great.
And then step 5, move to the next digit to the right.
So that's now the DIGIT = 0.
So now my DIGIT = 0.
And step 6 decrease the N.
So N is now 4, great.
And if N is 0, which is not, else got step 4.
Step 4, DIGIT is 1, no it's not.
So move on.
Step 5, move to the next digit to the right.
And next DIGIT is a 1, store it on the variable, DIGIT is now 1, great.
Decrease the N, N is 3.
If N is 0, no, N is not 0, so go to step 4.
Digit is 1, yes, it is.
Update the sum, the sum is now what I had before, 2 to the 4,
and 2 to the square, because it's 2 to the N-1, and N is 3.
Great, and then step 5, we'd move to the next digit.
So there's another one that is coming.
And step 6 decrease N, N is 2.
And then step 7, if N is 0, no it's not.
So go to step 4, step 4, if DIGIT is 1 which it is, do the sum.
So sum is what I had there before, add 2 to the N-1.
N is 2, so it's 2 to the 1.
And then step 5, move to the next digit.
The next digit is a 1, and step 6, decrease the N.
N is now 1 and if N is 0, no, it's not.
Step 4, step 4, DIGIT is 1 add the SUM.
So sum now is what I had there before, and now add 2 to the 1 less than the N.
So 2 to the 0, and step 5, move to the next digit to the right.
There is no digit to the right, yes.
So it feels that we should fix the algorithm, and
say if there's no where else to move, we should stop.
So the instructions I put on step 7 should be on step 5, and
I'm showing you the how we improve our algorithm as we run it.
I'm not expecting you to write the algorithm neat the first time round,
it's a channeling improvement process.
So we need to go back and fix what we've written and
we going to do it here as well.
So it feels that the right place to have a stop instruction is on step 5.
Move to the next digit to the right and store it digit.
So we need to have this there an instructions.
If N is 0, we would output.
We're going to change our instruction there,
and we're going to say,
从 :20:33 开始播放视频并学习脚本20:33
If N is 1, we now need to output the results.
Output value
in decimal,
从 :20:53 开始播放视频并学习脚本20:53
= SUM, and we STOP.
Else, Else, we need to move to the next digit, okay?
Else move to the next digit.
从 :21:12 开始播放视频并学习脚本21:12
And then store it in DIGIT, okay?
从 :21:17 开始播放视频并学习脚本21:17
And that we're going to tidy up.
That means we're on step,
从 :21:37 开始播放视频并学习脚本21:37
And we need to make the N = N-1 on the same step.
Okay, and then on step 6.
从 :21:50 开始播放视频并学习脚本21:50
Which we only run, If we
still got a digit to go, we do go to step 4.
从 :22:4 开始播放视频并学习脚本22:04
Now does that make sense with our example?
Yes, so where were we?
We were the point where we had N = 1.
If N = 1 output and we had done the sum.
We had a total sum.
If N is 1, we output the value.
So at this point, we print the value
in decimal and then we do the sum.
We had 16 plus 4 plus 2 which was 22.
That's what we accumulated on the variable SUM.
And we stop, okay, great.
Did I change what we've done before?
No, because every time we got to the stage in the other steps, N was bigger than 1.
And so we could carry on, we could carry on doing the sum.
Okay, so here's one example of an algorithm you could
run to the conversion from binary to decimal.
What things could be different?
There are many ways of writing the same algorithm.
But one thing we could change is that in this
algorithm when we do the SUM =SUM + a power of 2.
We could've done a weighted SUM instead of having if DIGIT = 1, we do the SUM.
And if DIGIT equals to 0, go somewhere else.
Instead of that, we could have done SUM = SUM + the digit times the power of 2.
And if the digit is 0, then that means you don't add in anything.
If the DIGIT is 1, you add in the, The power of two.
So, that is an alternative, which means you don't need to have ifs.
There's different ways of solving the same problem.
Another approach could be starting from the right most digits.
You could start from the one on the right and then go up in your powers of two.
You could.
So you could invert the cycle and you could still say, now,
instead of decreasing the N, as we did, you could increase the N.
So pretty much a similar structure as we had written just now,
but instead of having N = N-1 increment, in your decrement,
we would increase N, we would start from N = 1, and then,
N = N+1, and so on, but then how did you know you stop?
Well, same way, you stop because you count the digits to start with,
and you run the cycle that many times, so that's another way.
There is still another way, which I'm not going to write in algorithm form, but
I want to write the algebraic reason for it.
So instead of adding a power of 2 in every cycle you could add the digit,
and then times it by 2 and so you add a digit and
double the result, and that is a lot more efficient,
because you're not calculating powers of 2,
you are doubling every time, which if you remember at machine
level doubling is just putting a zero at the end of a binary number.
It's a very easy operation compared to multiplication.
So, back to this idea.
We can do a new algorithm where the variable sum is going to store the new
digit, then you double the sum, and then you add a new digit, and
then you double the sum, and you carry on going like this.
So I'm going to write the algebra of that, and that's a very elegant way of doing it.
So for our example, where we have five digits, our number is this one.
I'm going to call the digits, d4, d3,
d2, d1, and d0 in that order.
But the expanded form of this number
is going to be (d4)(2^4) +
(d3)(2^3) + (d2)(2^2)
+ (d1)(2^1) + (d0)(2^0).
So this is the expanded form of that number, and
I can have a 2 multiplying for most of it increasing the power.
So, this is what happens.
This first part here, It's a multiple of 2.
I've got a 2 on each fact, on each term.
So, I do 2 times, then instead of having (d4)(2^4),
I'm going to have (d4)(2^3).
从 :27:3 开始播放视频并学习脚本27:03
Because the 2 outside the bracket and the 2^3 multiply out to 2^4.
Then I have (d3)(2^2)
+ (d2)(2^1) + d1)
从 :27:20 开始播放视频并学习脚本27:20
And then outside the bracket I've got (d0)(2^0).
2^0 is just 1.
Okay, and now inside the bracket I can do the same idea.
I put everything from d4 to d2 in a bracket with a factor of two out.
So it's two 2 ((d4)(2^2)
+ (d3)(2^1) + d2) + d1) there,
and I'm going to get rid of that d0,
because it's just one.
And I keep doing this,
so the brackets there is going to
be 2(2(d4)(2) +
d3) + d2) + d1) + d0.
We can check if the brackets are right, let's do some coloring.
Let's do some coloring, I've got these are red brackets,
that's great, and these here are yellow brackets.
That's cool, and the other ones are white brackets, that works.
Okay, so let's do one more.
One more level means two brackets,
two bracket, and now I've got 2(d4
+ d3) + d2) + d1) + d0.
I don't add any brackets, but I just rewrote that d4, 2 as a 2 times I think.
That means this nested sequence of brackets,
it's how I can build the sum in the way I said earlier.
So, if I start with a sum, that it's d4, so
the digit is kept in sum, and then the next round
you double it, you're doing this double sum, and
then the next time you run the loop, you do add the digit,
which gives you this set of brackets, and then you double it,
which means that two multiply for the bracket, and so on.
So that is the most, in my view,
it's the most elegant way of doing this conversion from binary to decimal.
So now lets looks at the other aspects.
Let's write the algorithm for converting from decimal to binary.
We're going to use the division algorithm.
So to convert 38, which is decimal number
into binary, we divide 38 by 2.
Okay, so we start, 38/2 = 19 rem 0.
Then we do 19/2 = 9 rem 1.
9/2 = 4 rem 1.
4/2 = 2 rem 0.
2/2 = 1 rem 0, and
then 1/2 = 0 rem 1.
I just done that example so that we tap into that to write the generic algorithm.
So, what's important?
First we need the number, which is N, and we need the digits.
The digits, they're going to be our binary digits.
I'm going to start with empty words there.
So this is going to be the empty word.
Empty, Word, okay.
We have the number saved in the variable N,
we have the digits containing just an empty word, and
then every time we do a division and capture a remainder,
we're going to save the new remainder in that word.
Let's call Q the integer part of the division of the number.
So it's going to be the integer division of N/2.
So, the integer part, and now we need to extract the remainder.
To extract the R = N- 2Q.
The number minus twice what we've got that's our remainder,
I call it R, so the remainder is our digit.
Okay, and now we going to carry on doing the division, so
let's make N equal to our Q.
N is our Q now, and we just loop.
We should just now loop up there, but you've noticed,
we're not keeping track of the digits.
We need to save the digits, so
we need somewhere to say, let's write
the digit R to the left of the word DIGITS.
从 :32:20 开始播放视频并学习脚本32:20
Okay, that's how we keep track of the digits.
Now, did we do it the right way around?
Is it left or right?
So let's look in our example.
The first remainder, it's going to be the rightmost digits,
and the last one is the leftmost.
So the numbering binary is going to be like this, and we went that way.
So every new digit is written to the left of the digits we had so far, okay?
So those are the steps.
And we can write that into step one, step two,
step three, step four, step five.
How do we stop?
We stop, let's look at our sums.
We stop when we had quotient 0.
If the quotient is 0, we stop and we have to print out the value.
So that means that here,
I would say if Q is 0,
we print digits and STOP,
else we have to go back there, okay?
How do we do that?
You can name all these steps into step one, step two, step three,
step four, step five, and redirect here on the else to step two, okay?
We have an algorithm that stops.
I'll just give you a very brief overview of task two.
On task two, you are to write algorithms of
adding up two digit numbers in binary.
You are to do subtraction as well, And multiplication.
I'm putting boxes for all the digits we need to account for.
And the main thing to consider is that if you're adding these two numbers,
it's all very good if it's 1 with 0 or 0 with 1.
You get one answer there.
But you need to account that if you have 1 + 1, you're going to have 1 0 as an answer
which means you need to have a 0 here and the one that it's carried.
So you need to take into account that you need to have a variable for carries, okay?
So that's a pointer there.
On subtraction, you need to take into account the borrowing
that goes on if they stated here is too small for this one.
Meaning if you've got a zero here on top and
a one below, then you will need to borrow from over there.
So there will be, you will need to change the digits of the numbers as you go along.
With multiplication, we need to take into account that the results
are going to be here, possibly like this.
And then when you multiply this guy here by the top
number, You'll move place value.
So you need to take into account that, okay?
So you're not going to write anything there but
you're going to move place values.
So that's a few pointers of what your algorithms need to take into account.
