## Issue is only reproducible on the production system

The issue is only reproducible on the production system and occurs (seemingly) in a nondeterministic fashion. 

This means: 
* Client cannot "reproduce" the issue. 

* Client can't provide steps to reproduce the issue. 

* Hence, we can't reproduce the issue in-house. 

**Why does this happen?**
The Lab is an environment where things are introduced to mimic the real-world environment, yet we can never 100% replicate all the variations that will occur in the real-world - there will always be something new that we did not take into account when building and testing the product in-house. Incorporating this new variation will only make the product work better. 

**What to do in such a case?** 
Find the unaccounted variation – this could be looking thru logs or enabling debug.
Ask L3 for a debug fix that will print out the input values in the logs.
Be Patient! - Generally, in such cases the support representative (and client) needs to be patient. Once you apply the debug fix or enable debug you may have to monitor for an extended period to encounter the issue. 
