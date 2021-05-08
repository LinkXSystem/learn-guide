We looked at fractional numbers and
how we translate between
binary and decimal for those types of numbers.
You may have asked yourself,
are there more types of
numbers than the fraction numbers we saw just before?
There are mainly two types.
You have the numbers
are rational and numbers are irrational.
I'll show you what I mean.
A rational number is a number that
can be written as a ratio.
So something like a fraction,
like two-thirds, it is a rational number.
Because the two numbers I'm
using in this fraction are integers.
The two is an integer, the three is an integer.
Minus one-fifth is also a rational number.
Traditionally, if a number is negative, the top number,
the numerator will be
negative and we keep the denominator,
the bottom number positive.
They are written as fractions, but of course,
every fraction can be written in a digital expansion.
So two-thirds is 0.666 and so on.
It's a recurring decimal we call it.
The digital expansion of
this number has a patent that is repeated,
there is a six that repeats over and over again.
So we write this as 0.6 with that dot
on top that says I repeat the six to infinity.
The minus one-fifth is minus 0.2.
They're both rational numbers,
they both have a digital expansion.
One of them has a repeating digital expansion,
the other a finite expansion.
So this is finite and this is repeating.
从 :2:15 开始播放视频并学习脚本2:15
The cool thing is,
every fraction, every rational number,
when you write it down as a digital expansion,
you either have a finite expansion
or a repeating expansion.
That's it. If the number you're working
with it goes on forever without a repeating pattern,
then it is an irrational number and that means it
cannot be written as
a nice fraction with integer numbers.
It cannot. An example
of that number you are familiar with,
numbers like root two,
the square root of two,
and any number with a root.
It's numbers that you probably come across
as pie, e, and so on.
Lots of constants,
numbers that cannot be written as a fraction.
Now, the point of this is,
in binary you will also meet
digital expansions that are finite or recurring.
I'm just going to look at one example here so
that you are familiar with what
happens when you meet such a number.
So going back to the number two-thirds,
I want to write this in binary.
So we already know that the number is
0.6 recurring in decimal.
In binary, we can approach it in several ways.
Remember the algorithm we just looked,
you keep doubling the number and gather
the integer part as
the digit. That's what we're going to do.
So two-thirds times by 2, that is four-thirds.
Four-thirds is more than one.
That is 1 plus one-third.
The integer part is that one.
So that is going to be the first binary digits.
Now, the one-third is the fractional part.
So we take the one-third,
we times it by two,
and now I have two-thirds which is less than one.
So this is a number like zero point something.
We know is 0.6 recurring.
So the integer part
is the digits. We're going to put there.
Now, we would carry on doubling the number,
0.6 recurring which is
our two-thirds and double and hang on.
We have seen this before because
that's the first line of our calculation.
So we are repeating, we're back there.
We're on a loop.
That means that if we carry on doing
that calculation over and over and over again,
we're going to have that one,
zero repeated over and over again forever.
In other words, two-thirds is written as
a recurring digital expansion in decimal.
That's the 0.66666.
Or in binary, is 0.101010 repeating over and over again.
So I'm going to write this as 0.10 with a dot at
the beginning of the periods
and a dot at the end of the period.
So if you are working with
a recurring digital expansion in binary,
at some point your calculations
will look the same or follow the same pattern.
You'll have a recurring set of
calculations that creates that repeating pattern.
This is how you know that you have such an example.
We are using fractions
and digital expansions to represent a number.
I'm going to go through the process of transforming
a digital expansion decimal into a fraction.
So we know how to handle it.
Say the number in decimal is 0.117,
this number can be written as a fraction we know.
It has a finite digital expansion, therefore,
it can be written as a fraction with two numbers,
a numerator and denominator.
How do we work them out? Here's what we do.
Am just going to call this number x just for convenience,
and I'm going to multiply
this number by 10 over and over again
until I have no fractional part.
So I do 10x, I get 1.17.
If I do a 100x, I get 11.7.
If I do a 1000x, I get 117.
That's the number I want.
In fact, you could have worked out that it was enough
to multiply by 1,000 straightaway. Now what do I do?
From here, to get the fraction for x,
I divide both sides of the equation by 1,000.
So I've got 117 divide by 1,000,
and that's the fraction that
represents that digital expansion.
Is this in lowest terms?
Is this fraction in the simplest way?
As in, are there common factors between 117 and 1,000?
Not in this case,
because 117 is a multiple of three and a multiple of 13,
and the denominator doesn't have those factors.
So it is in their lowest terms.
But I'm going to do another example.
A little bit similar,
but this time it's going to be
a number with a repeating digital expansion.
I'm going to keep it very similar to that one.
Say the pattern that repeats is the 117.
Okay. So in other words,
what I mean by this is 0.117117117 and so on.
Okay, that's what I mean.
That's my number. I'm going to
call it x again for convenience.
What I want to do now,
is to multiply x by a power of 10 until
the fractional part is exactly the
same as the fractional part I have here on x.
So if I multiply this number by 1,000,
I'm going to shift 117 to the integer part of the number.
But because it has the repeating digital expansion,
the 117117 will keep repeating on the fractional parts.
So I still have that and I will
avoid writing forever by putting the dots on top.
Now, here's the trick.
Because the two numbers,
the x and the 1000x,
have the same fractional part,
I can subtract them to obtain an integer number.
So if I subtract, as in I do 1000x take away the x,
that means I'm doing
117.117 recurring and I'm
going to take away 0.117 recurring.
That means, these guys subtract and I've got 117 left.
So the result is 117 which is just the integer part.
从 :9:50 开始播放视频并学习脚本9:50
Now, on this side,
how many multiples of x do I have?
Well, I have a 1,000 of x,
take away one of x,
I've got 999 of x, and that's 117,
and now to get the fraction for my number I divide
everything by 999, and there I am,
and 117 divides by 9,
117 divide by 9,
this was 13 divide by 111.
So that is the fraction that represents
my recurring decimal or
my recurring digital expansion, 0.117.
So in other words, 0.117 equals 13 over 111.
从 :10:49 开始播放视频并学习脚本10:49
Now, I wanted to note that there is a way of
knowing whether a fraction is going
to have a finite expansion or is going to
have a repeating expansion,
it's to do with the denominator of that fraction.
So in the examples we saw,
we've got the two numbers here side by side,
and in that first example,
I have a finite digital expansion
and look what the denominator is,
the denominator of this fraction is 1,000,
which is divisible by two and by five.
On the second example,
where half of the repeating a fractional expansion,
the denominator of the fraction is 111,
which is not divisible by
two and is not divisible by five.
So when I'm working in base 10 in decimal,
the fractions that will give me
a finite expansion have
a denominator that is
a multiple of two or
a multiple of five or a multiple of both.
Any other fraction where the denominator is not
divisible by two or not divisible by five
will give rise to a recurring decimal.
We saw the algorithm to write
fractional numbers in binary.
Now, we multiplied the number by two,
and took the integer part to
get the digit for the digital expansion.
Why do we do that?
Why do we multiply by two
when for the integer part of the number,
we do division by two and take remainders?
We're going to look at why that is.
It is to do with the place values.
So we have the binary number 0.1011,
从 :12:45 开始播放视频并学习脚本12:45
that's a number in binary.
Although the number is in binary,
I'm going to run the algorithms to
first to observe what is happening.
So the algorithm says multiply this number by two.
Now, if we multiply this number
by two because this is in binary,
multiplying by two means
I'm going to shift the place values.
Let's look at the place values
of the number to start with.
从 :13:11 开始播放视频并学习脚本13:11
This is for place value half, one-quarter, one-eighth,
one over 16, and
so multiplying by two is going to shift the place values,
is going to double all of them.
The first one that appears there for place value half,
is going to become the digit for place value one.
The zero for place value quarter is going to
become the digits and place value half, and so on.
So what I mean is that this number multiplied by two is
going to be 1.011 in binary,
and the algorithm said let's take the integer part,
and that's going to become
the first digit of the expansion.
So that should be the first digit, and that is true,
and that is the first digit because that
was the digit four place value one-half,
and now we doubled the number,
it became the integer part,
and the algorithm says take
the integer part away and keep just a fractional.
So we will then have 0.011 in binary,
and we would double it again.
Again, doubling is going to shift all the place values,
so we have 0.11 in binary.
The integer part is zero,
and that zero came from the place value of
one-quarter from the initial number because
by now we multiplied by two twice.
So we shifted the digit two places,
and we keep going.
We double it again,
there's going to be 1.1 in binary,
that integer part is the third digit of the expansion,
take away the integer part,
we get 0.1 in binary multiplied by two,
that means 1.0 in binary.
The integer part is one which is the last digit,
and we know to stop
because as you remove the integer part,
you're left with zero, so we stop.
I hope this example gives you
a better idea of why the algorithm works.
In decimal, we know that to looking
at the digital expansion of a number,
you can tell whether the number
is rational or irrational.
Rational numbers are numbers
that can be written as a fraction,
with whole numbers as numerator and denominator.
If instead of using a fraction we want to
use the digital expansion of the number,
can we tell if the number is rational or irrational?
Yes, we can, because all rational numbers
have either a finite digital expansion
like 0.5. or 0.62
or they have a recurring digital expansion,
like when you do one-third in your calculator,
you see 0.33333 or you can just write a 0.3 with
a dot on top to say that is a
three that is going to repeat over and over again.
Now, those are the two types of rational numbers and they
all are written as fractions
as we saw the method earlier on.
What about binary, what happens with
rational numbers when you write them in
binary or irrational numbers
when you write them in binary?
Surprisingly or not, maybe you
already guessing, the same is true.
If the number is rational,
if the number can be written as a fraction
with integer numerator and denominator,
then the digital expansion
no matter which base you write it on,
each will be either finite or recurring.
It might happen that a number can have
a finite expansion in one base,
but a recurring expansion under
different or have recurring expenses on both,
but with different periods with
different patterns of repetition.
The key to decide
whether it's going to be finite or recurring,
is to do with the denominator of that fraction.
I'm not going to go into too much detail,
but I want to lift the veil of this to you,
so you know what to expect
when you're working with these numbers.
Let's look at 1 over 6.
1 over 6 is less than 1, therefore,
the first binary digits,
the integer part is going to be 0,
and now I'm going to double this number,
so one-sixth times 2,
which is 2 over 6, which is one-third.
Now, one-third is still less than one,
so the first fractional binary it will be zero.
So digit zero there, digit zero there,
and now take one-third and double
it, and that's two-thirds.
That is still less than one,
so I got another zero.
Then two-thirds, double it, I got four-thirds,
which is 1 plus one-thirds,
and that the integer part is one,
so that's the digit I'm going to put there.
Okay, and I'm going to take the fractional part,
and double it again.
Now, at this stage,
you realize that that one-third times
2 is what I've got there.
So we're going to have this part repeating.
So that is 1 over
6 as a fraction that it's written in decimal,
it has a binary fraction and expansion of
0.001 with 0,1 repeating.
Now, there's two things I want
to draw your attention for.
First there is a period,
there is a repeating pattern,
and second there is
an initial part before the repetition stops.
Now, this initial zero comes from
the fact that the six being the denominator six,
is 2 times 3.
The fact that we have a two,
which is a factor of the base, base two,
means that I've got that initial zero,
meaning I've got a initial non-repeating part.
Then the fact I've got a three as a factor of six,
means that I will have a repeating pattern.
Now, why is this three gives us a repeating pattern,
because three has no common factors with the base.
Three has no common factors with two,
so I will have a periodic expansion.
I've got that two that is a factor of the base,
so I will have,
say a delay until the period begins.
These concentrations I made here
about the denominator of the fraction,
and the relationship to the factors of the base,
are essentially the bits that decide what's
the fractional expansion of
a number looks like in a given base.
Have a play with more fractions and
gain an idea of how it works.
If you have powers of two in the denominator,
you will have a finite digital expansion in binary.
If the number you have there isn't a power of two,
if it's a power of two times something else
or just no two's at all,
it will be a recurring decimal.
