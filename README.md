# dontbreak.me source code

This is sample project launched during [HTML5 Dev Conf](http://www.html5devconf.com/) to show off the architecture and design of a responsive Backbone application. See it live at [http://www.dontbreak.me](http://www.dontbreak.me). It is based on [this](http://lifehacker.com/5886128/how-seinfelds-productivity-secret-fixed-my-procrastination-problem) concept. When deployed it currently runs entirely on the front end and has no backend requirements. See presentation slides detailing the architecture and the responsive design movement on [https://speakerdeck.com/u/krunkosaurus/p/responsive-backbone](speakerdeck).

It is built on top of the [Mandible2](https://github.com/BrainSwap/Mandible2) development framework which allows you to compress and push assets to Amazon S3 among other things. Mandible2 requires some libraries like [Node](http://nodejs.org/) and [Jake](http://howtonode.org/intro-to-jake). Visit the Mandible2 page to learn more.

This app is in under constant enhancement. The latest "edge" version of this app can be found at [http://qa.dontbreak.me](http://qa.dontbreak.me).

# How to Install

Clone this repo. For an explanation of the libraries required and folder architecture see [Mandible2](https://github.com/BrainSwap/Mandible2).

# How to Deploy

In order to deploy this app to production and qa enviornments you must fill out your Amazon S3 information at: `/jakelib/aws.jake`