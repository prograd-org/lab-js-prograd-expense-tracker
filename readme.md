![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | EXPENSE TRACKER

Mama Jenny wants to explore the art of Pastry making. She is extremely popular because of her burger business and has recently had the idea to expand into cake business too. Unfortunately, she isn't the best at web development. Mama has heard of ProGrads and she thought you could do a great job. 

Help Mama create a website that'll attract more audience and help her make a living through it. Your task is to build a complete website which helps in customizing cakes for birthdays.

## What should you do
```
Fork this repo
Clone this repo
Practice DOM Features
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

### Progression 1: LAYERS

As your first task, you've got to enable the different layers of the cake on the screen. Create a `render()` for each ingredient and make sure that it displays the selected layer.

Size of the layer for each crust
```
#layer1{
    width: 245px;
    visibility: hidden;
}

#layer2{
    width: 200px;
    left: 40px;
    visibility: hidden;
}

#layer3{
    width: 160px;
    left: 60px;
    visibility: hidden;
}

#layer4{
    width: 120px;
    left: 80px;
    visibility: hidden;
}

#layer5{
    width: 80px;
    left: 100px;
    visibility: hidden;
}
```
	

![Image description](https://i1.faceprep.in/ProGrad/Mern-cakeworld-1.png)

### Progression 2: LAYER THEM UP

Setup `EventListeners`, so that we can add or remove different ingredients by clicking on the respective ingredient buttons. That's the whole point of it.

![Image description](https://i1.faceprep.in/ProGrad/Mern-cakeworld-2.png)

### Challenge 1: SHOW EM UP

Make the ingredient buttons pop up based on their current active state. This would help customers identify what ingredients they've selected and what's left out.

### Challenge 2: TAKE THE ORDER

Show the customer only the ingredients that they've selected on the chalk board.
![Image description](https://i1.faceprep.in/ProGrad/Mern-cakeworld-3.png)
### Challenge 3: BILL TIME

The customer has had a good time customizing his cake. Time for him to pay. Use ingredient prices to calculate the cost of a cake and display it to the customer.

![Image description](https://i1.faceprep.in/ProGrad/Mern-cakeworld-4.png)
Happy Coding ProGrads❤️
