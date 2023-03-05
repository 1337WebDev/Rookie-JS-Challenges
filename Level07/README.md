# Challenge 07 - Fibonacci Streaming

## Instructions

In a dark, deserted night, a thief entered a shop. There are some items in the room, and the items have different weight(Kg) and price($):

```js
items=[
{weight:2,price:6},
{weight:2,price:3},
{weight:6,price:5},
{weight:5,price:4},
{weight:4,price:6}
]
```

The thief is greedy, his desire is to take away all the goods. But unfortunately, his bag can only hold `n Kg` items. So he has to make a choice, try to take away more valuable items.

Please complete the function `greedyThief`, to help the thief to make the best choice. Two arguments will be given: `items`(an array that contains all items) and `n`(the maximum weight of the package can be accommodated).

The result should be a list of items that the thief can take away and has the maximum total price.

Notes: If more than one valid solutions exist, you should return one of them; If no valid solution should return []; You should not modify argument items; In the end, you need a good algorithm ;-)

## Examples:

````js
items=[
 {weight:2,price:6},
 {weight:2,price:3},
 {weight:6,price:5},
 {weight:5,price:4},
 {weight:4,price:6}
 ]
n=10
````

greedyThief(items, n) can be:
```js
[
 {weight:2,price:6},
 {weight:2,price:3},
 {weight:4,price:6}
]
```