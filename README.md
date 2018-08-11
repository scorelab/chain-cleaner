# Chain-Cleaner


Chain-Cleaner is a web application to analyse tainted transactions and inputs from the bitcoin blockchain. Users add heists into the chain-cleaner and those data are use for analyse to find tainted inputs. 

[![N|Solid](https://cdn-images-1.medium.com/max/1500/1*ytMIcp6uu6UIZpApG1LFYg.png)]()

### Implementation Details

  - Front-End is developed using ReactJs
  - Back-end is handled by NodeJS and Python
  - Firebase is used for user authentication
  - Firebase is used as the databases for storing data
 
### Key Features 
  - Users can sign up or sign in to the chain-cleaner
  - Can view live memory pool data
  - Can view tainted memory pool tx if exists
  - Can add new heist
  - Can view existing heists 


### Installation

```sh
$ cd chain-cleaner
$ npm install 
$ npm start
```

### Cron Jobs
###### getmempool - Get live memory pool transactions from blockchain.info API
###### sync_mempool - Sync the live memory pool


