# shift-subs

Whatever the show or movie I am watching, I can't for the life of me find subs that are synced correctly.
Also the in-player functionality to do this is either disabled or not working or whatever you name it...

So f\*ck it I just went ahead and wrote a node script to shift the display of the subtitles of a given amount of milliseconds.

# usage

`npx shift-subs PATH_TO_YOUR_SUBS_HERE AMOUNT_OF_MILLISECONDS_TO_SHIFT_THERE`

To display the subtitles earlier, provide a negative number of ms.
To display the subtitles later, provide a positive number of ms.
Pretty hard eh?

A new file with a name of "shifted_YOURSUBNAME" will be created, the original file is not altered.
