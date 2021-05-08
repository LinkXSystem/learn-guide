You've worked with integers,
in binary and decimal, to and fro.
We're going to look at numbers that aren't integers,
numbers with a fractional part.
Say we've got 1101.101,
that's what I mean by fractional parts,
there is a point which we usually call a decimal point,
but it's not decimal point because we're working on binary, the fractional point.
These guys over here are the non-integer part.
Now, what's their place value?
What are they worth?
Similarly to what we did with the integer part,
we are going to write the place values above the digits.
So we've got one, two, four,
and eight, and the way we work those out,
we start in one, we doubled, doubled, doubled.
To go into the fractional part,
we're going to divide by two every time.
So, one divided by two,
we've got a half,
which is 0.5, and then we've got 0.25,
and we've gotten 0.125.
We can write these as fractions,
which I'm going to write above it and I encourage you to do so.
That's a half, that's a quarter,
and that's an eighth.
We can write it as well as powers of two. Let's do it.
Two to the zero there,
two to the one, two to the two,
two the three, and two to the minus one,
two to the minus two,
two to the minus three.
Now, how do we now calculate this number into decimal?
As before, where you've got a one,
you add the place value,
where you've got a zero just ignore it. Let's do it.
I've got to add up the place values that have a one,
so eight plus four plus one plus the half and plus the one-eighth.
Because we want this written in decimal and we want
a decimal expansion with fractional part,
let's add up as digital expansion of numbers.
So, we've got eight plus four plus one, we got 13,
and then we've got a one-half which is 0.5 and one eighth,
which was 0.125, and that adds up to 13.625,
and that is 110.101 in binary.
Now, just reminding you again that in place value, the fractional part,
so this number in decimal 13.625,
I will never say 13.625 never,
unless I want to refer to 625 thousandths.
But let's simply call it 13.625.
Now, that was binary to decimal for fractional numbers,
let's do the other way around.
Let's do from decimal to binary.
Say my number is 271.25,
that's my decimal number.
How to write this in binary?
Here's the algorithm, for the integer part,
you've seen that we divide by two and keep note of the remainders.
That's how we transform an integer number from decimal to binary.
You divide by two, over and over again.
When you have a fractional part of the number,
we're not going to divide by two,
we're going to multiply by two,
and instead of taking the remainder,
we're going to take the integer part of that results.
I'll show you. So, this number 271.25,
the 271 you know how to do that one in binary,
so I'm going to ignore it for now.
I'm going to focus on writing the 0.25,
writing that in binary.
So in other words, we always separate the number into integer plus fractional.
Okay. And we have two separate algorithms for them.
For 0.25, I will consecutively multiply by two.
Now, 0.25 times two is 0.5,
the integer part is zero.
So that integer part to zero is my first fractional digit.
So, that is going to be 0.0,
that's the first digit, did just now.
Now, I look at what's left,
so 0.5 times by two again,
I get one, and one the integer part is one,
so that is going to be my next digit that appears there.
The next thing to do is to take away that integer part and see what's left.
Well, in this case there's nothing left because one is the same as 1.000000.
So, when you take away the one, all you have is zero.
So, you would finish the algorithm there.
So, we stop as
the results is an integer.
That means that 0.25 is 0.01 in binary,
which is not very surprising if you think about the place value.
The place value for that zero, is one-half.
The place value for that one,
is one-quarter and one-quarter is 0.25.
So, bang on, is correct.
We've calculated the fractional part of this number in binary.
Let's now put it together with the binary translation of the integer part.
So 271 is 100001111,
which I haven't calculated here but to you now know how to calculate.
So, that is 271 into binary and then
dot the zero-one that we calculated here for the fractional parts.
So, that in binary it's 271.25.
Just to recap, we separate the integer part and the fractional part of the number,
used the division algorithm to calculate the integer part into binary,
for the fractional part,
which is the new bit we've done here,
you keep multiplying by two,
take the integer part of that result as
your binary digit and keep doubling what's left over and over again.
Let's just do one more example.
Say our number is now 0.75,
that's a decimal number, fractional.
How do we do this into binary?
Once again, we take the number, we double it,
and 0.75 times two is 1.5.
The integer part of this result is one.
So that's the first fractional digit. That's one.
Now, I'm going to take away the integer part, so that 1.5,
I'm going to take away the integer part which is just the fractional part is 0.5,
and I will double that 0.5,
that gives me one.
So, that's the other digit.
Again, we don't have any more fractional part left,
so this is an integer stop.
So, we stop and therefore 0.75 is written as 0.11 in binary,
and looking at the place value,
each of these ones corresponds to the fractional place values of one-half and
a quarter and one-half plus a quarter is 0.5 plus 0.25 which is 0.75.
So it all adds up.
So 0.5 add with 0.25 is 0.75.
Just to double-check that we make sense of the calculations and the results we obtained.
