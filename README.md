# Profit Calculator

[https://jt-martin-profit-calc.surge.sh](https://jt-martin-profit-calc.surge.sh)

This little project was built for a business coach friend of mine, he already had a landing page built out which was designed to persuade people to book an appointment with him. 

He also told me he had a google sheets "profit calculator" that he'd made and I suggested we turn it into an actual interactive element on the page so that people could visually understand the potential value of working with him before booking an appointment with him.

I created the app in React and bundled it together with Parcel.js, currently there's only two files required to inject the script into the page which are the index.js and index.css files(probably going to change to css-in-js so only 1 file is required), I hosted both of the files on Google Cloud Platform because I was annoyed that jsdelivr.com only cached the file once every 24hrs so if I wanted to make any changes I'd have to wait 24hrs for the files to update, GCP is also ridiculously cheap for just hosting a couple of javascript and css files that weren't going to get accessed a ton so I wasn't worried about paying for it.

I decided to host the files myself to make it easier for my friend so he'd only have to worry about adding the script codes to the page and not worry about the files and making sure the links were correct and so that I'd also be able to make updates to the files on my end without him having to do anything.
