App = {
    Constants: {
        nullAddress: '0x0000000000000000000000000000000000000000',
    },
    Globals: {
        userAccount: undefined,
        web3Provider: undefined,
        contracts:{
            'cryptoCatsCoreContract':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cfoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_preferredTransport","type":"string"}],"name":"tokenMetadata","outputs":[{"name":"infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"promoCreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ceoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_STARTING_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setSiringAuctionAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pregnantKitties","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"isPregnant","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_AUCTION_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"siringAuction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setGeneScienceAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCEO","type":"address"}],"name":"setCEO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCOO","type":"address"}],"name":"setCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSaleAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sireAllowedToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_matronId","type":"uint256"},{"name":"_sireId","type":"uint256"}],"name":"canBreedWith","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kittyIndexToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSiringAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"uint256"}],"name":"setAutoBirthFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_sireId","type":"uint256"}],"name":"approveSiring","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCFO","type":"address"}],"name":"setCFO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_genes","type":"uint256"},{"name":"_owner","type":"address"}],"name":"createPromoKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"secs","type":"uint256"}],"name":"setSecondsPerBlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_CREATION_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setSaleAuctionAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_v2Address","type":"address"}],"name":"setNewAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"secondsPerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_matronId","type":"uint256"}],"name":"giveBirth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAuctionBalances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cooldowns","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kittyIndexToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cooAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"autoBirthFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"erc721Metadata","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_genes","type":"uint256"}],"name":"createGen0Auction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"isReadyToBreed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROMO_CREATION_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setMetadataAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"saleAuction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getKitty","outputs":[{"name":"isGestating","type":"bool"},{"name":"isReady","type":"bool"},{"name":"cooldownIndex","type":"uint256"},{"name":"nextActionAt","type":"uint256"},{"name":"siringWithId","type":"uint256"},{"name":"birthTime","type":"uint256"},{"name":"matronId","type":"uint256"},{"name":"sireId","type":"uint256"},{"name":"generation","type":"uint256"},{"name":"genes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sireId","type":"uint256"},{"name":"_matronId","type":"uint256"}],"name":"bidOnSiringAuction","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"gen0CreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"geneScience","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_matronId","type":"uint256"},{"name":"_sireId","type":"uint256"}],"name":"breedWithAuto","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"matronId","type":"uint256"},{"indexed":false,"name":"sireId","type":"uint256"},{"indexed":false,"name":"cooldownEndBlock","type":"uint256"}],"name":"Pregnant","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"approved","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"matronId","type":"uint256"},{"indexed":false,"name":"sireId","type":"uint256"},{"indexed":false,"name":"genes","type":"uint256"}],"name":"Birth","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"ContractUpgrade","type":"event"}],
                'contractAddress':'0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
            },
            'wrappedKittiesContract':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"depositKittyAndMintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalCatsLockedInContract","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kittyCoreAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"burnTokenAndWithdrawKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"depositKittyAndWithdrawDifferentKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyIds","type":"uint256[]"}],"name":"multiDepositKittyAndWithdrawDifferentKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_numTokens","type":"uint256"}],"name":"multiBurnTokenAndWithdrawKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyIds","type":"uint256[]"}],"name":"multiDepositKittyAndMintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"DepositKittyAndMintToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"tokensBurned","type":"uint256"}],"name":"BurnTokenAndWithdrawKitty","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],
                'contractAddress':'0x19d9b17497824081E291115044B567c4722CDaeB',
            },
        },
    },

    init: async function() {
        //App.proceedToSiteUnderMaintenance();
        //return;
        return await App.initWeb3();
    },

    initWeb3: async function() {
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                // Request account access if needed
                await ethereum.enable();
                App.hideAllDivsInClass('connectToWeb3Button');
                App.showAllDivsInClass('coreApp');
                // Accounts now exposed
                //web3.eth.sendTransaction({/* ... */});
            } catch (error) {
                console.log('Error when trying to enable');
                App.proceedToNoMainnetOrMetamaskScreen();
                // User denied account access...
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            console.log('Legacy dapp browser');
            window.web3 = new Web3(web3.currentProvider);
            App.hideAllDivsInClass('connectToWeb3Button');
            App.showAllDivsInClass('coreApp');
            // Acccounts always exposed
            //web3.eth.sendTransaction({/* ... */});
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            App.proceedToNoMainnetOrMetamaskScreen();
            return;
        }

        App.Globals.userAccount = window.web3.eth.accounts[0];
        var accountInterval = setInterval(function() {
            // Check if account has changed
            if (window.web3.eth.accounts[0] !== App.Globals.userAccount) {
                App.Globals.userAccount = window.web3.eth.accounts[0];
                App.fetchCurrentBlock();
            }
        }, 100);

        window.onpopstate = function(e){
            App.retreatToHomeScreen();
        };

        return App.initContract();
    },

    checkWhetherWeb3HasBeenInitialized: function() {
        if(window.web3.eth.accounts[0] !== undefined){
            App.initWeb3();
        }
    },

    initContract: function() {
        if(window.web3 !== undefined){
            App.Globals.contracts['wrappedKittiesContract'].source = window.web3.eth.contract(App.Globals.contracts['wrappedKittiesContract'].contractABI);
            App.Globals.contracts['wrappedKittiesContract'].instance = App.Globals.contracts['wrappedKittiesContract'].source.at(App.Globals.contracts['wrappedKittiesContract'].contractAddress);
            App.Globals.contracts['cryptoCatsCoreContract'].source = window.web3.eth.contract(App.Globals.contracts['cryptoCatsCoreContract'].contractABI);
            App.Globals.contracts['cryptoCatsCoreContract'].instance = App.Globals.contracts['cryptoCatsCoreContract'].source.at(App.Globals.contracts['cryptoCatsCoreContract'].contractAddress);
        }
        if(window.web3.eth.accounts[0] !== undefined){
            //return App.fetchCurrentBlock();
        }
    },

    tokensToKittyButtonPressed: function(){
        var numTokens = document.getElementById('tokenToKittyInputBox').value;
        if(numTokens !== ''){
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                if(Number(numTokens) === 1){
                    App.Globals.contracts['wrappedKittiesContract'].instance.burnTokenAndWithdrawKitty(
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTransactionConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayCancelBountyError(error);
                                                                                    }
                                                                                })
                } else {
                    App.Globals.contracts['wrappedKittiesContract'].instance.multiBurnTokenAndWithdrawKitty(new BigNumber(String(numTokens)),
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTransactionConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayCancelBountyError(error);
                                                                                    }
                                                                                })
                }
            });
        }
    },

    displayTransactionConfirmation: function(result){
        document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/tx/" + String(result);
        App.hideAllDivsInClass('tokenToKittySection');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
    },

    displayCancelBountyError: function(err){

    },

    doNothing: function(){},

    fulfillBountyInitialButtonPressed: function(){
        const bountyId = App.Globals.currBountyID;
        if(App.Globals.activeBounties[bountyId] > 0){
            App.toggleFulfillBountyInstructions();
        }
    },

    toggleFulfillBountyInstructions: function(){
        if(App.Globals.fulfillBountyInstructionsBeingShown === false){
            App.Globals.fulfillBountyInstructionsBeingShown = true;
            App.initializeFulfillBountyTxnOneButton();
            App.initializeFulfillBountyTxnTwoButton();
            App.showAllDivsInClass("fulfillBountyInstructions");
        } else {
            App.Globals.fulfillBountyInstructionsBeingShown = false;
            App.hideAllDivsInClass("fulfillBountyInstructions");
        }
    },

    fulfillBountyTxnOneButtonPressed: function(){
        var kittyId = document.getElementById('fulfillBountyKittyIdInputBox').value;
        if(kittyId !== ''){
            const kittyIdAsNumber = Number(kittyId);
            App.Globals.kittySubmittingForBounty = kittyIdAsNumber;
            console.log(App.Globals.kittySubmittingForBounty);
            App.sendFulfillBountyTxnOne();
        }
    },

    fulfillBountyTxnTwoButtonPressed: function(){
        var kittyId = document.getElementById('fulfillBountyKittyIdInputBox').value;
        if(kittyId !== ''){
            const kittyIdAsNumber = Number(kittyId);
            App.Globals.kittySubmittingForBounty = kittyIdAsNumber;
            App.sendFulfillBountyTxnTwo();
        }
    },

    sendFulfillBountyTxnOne: function(){
        if(App.Globals.kittySubmittingForBounty === undefined) return;
        web3.eth.getAccounts(function(error, accounts) {
            if (error) console.log(error);
            var account = accounts[0];
            App.Globals.contracts['cryptoCatsCoreContract'].instance.approve(new BigNumber(String(App.Globals.contracts['kittyBountiesContract'].contractAddress)),
                                                                        new BigNumber(String(App.Globals.kittySubmittingForBounty)),
                                                                        {
                                                                            from: account,
                                                                        },
                                                                        function(error, result){
                                                                            if(!error) return App.displayFulfillBountyTxnOneConfirmation(result);
                                                                            else {
                                                                                console.log(error.message);
                                                                                return App.displayFulfillBountyTxnOneError(error);
                                                                            }
                                                                        })

        });
    },

    sendFulfillBountyTxnTwo: function(){
        if(App.Globals.kittySubmittingForBounty === undefined) return;
        web3.eth.getAccounts(function(error, accounts) {
            if (error) console.log(error);
            var account = accounts[0];
            App.Globals.contracts['kittyBountiesContract'].instance.fulfillBountyAndClaimFunds(new BigNumber(String(App.Globals.currBountyID)),
                                                                        new BigNumber(String(App.Globals.kittySubmittingForBounty)),
                                                                        new BigNumber(String(App.Constants.nullAddress)),
                                                                        {
                                                                            from: account,
                                                                        },
                                                                        function(error, result){
                                                                            if(!error) return App.displayFulfillBountyTxnTwoConfirmation(result);
                                                                            else {
                                                                                console.log(error.message);
                                                                                return App.displayFulfillBountyTxnTwoError(error);
                                                                            }
                                                                        })
        });
    },

    sendCreateBountyTxn: function(){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) console.log(error);
            var account = accounts[0];
            console.log(account);
            App.Globals.contracts['kittyBountiesContract'].instance.createBountyAndLockFunds(new BigNumber(String(App.Bounty.desiredGeneMaskAsUINT)),
                                                                        new BigNumber(String(App.Bounty.desiredGenesAsUINT)),
                                                                        new BigNumber(String(App.Bounty.desiredGen)),
                                                                        new BigNumber(String(App.Bounty.desiredCooldown)),
                                                                        new BigNumber(String(App.Bounty.numberOfBlocksToLock)),
                                                                        new BigNumber(String(App.Bounty.quantity)),
                                                                        {   from: account,
                                                                            value: new BigNumber(String(web3.toWei(String(App.Bounty.depositAmountInETH), "ether"))),
                                                                        },
                                                                        function(error, result){
                                                                            if(!error) return App.displayCreateBountyConfirmation(result);
                                                                            else {
                                                                                console.log(error.message);
                                                                                return App.displayCreateBountyError(error);
                                                                            }
                                                                        })
        });
    },

    displayFulfillBountyTxnOneConfirmation: function(result){
        document.getElementById('fulfillBountyTxnOneButton').innerText = "View Transaction on Etherscan";
        document.getElementById('fulfillBountyTxnOneButton').href = "https://etherscan.io/tx/" + String(result);
        document.getElementById('fulfillBountyTxnOneButton').target = "_blank";
        document.getElementById('fulfillBountyTxnOneButton').rel = "noopener noreferrer";
        document.getElementById('fulfillBountyTxnOneButton').classList.remove('btn-primary');
        document.getElementById('fulfillBountyTxnOneButton').classList.add('btn-default');
    },

    displayFulfillBountyTxnTwoConfirmation: function(result){
        document.getElementById('fulfillBountyTxnTwoButton').innerText = "View Transaction on Etherscan";
        document.getElementById('fulfillBountyTxnTwoButton').href = "https://etherscan.io/tx/" + String(result);
        document.getElementById('fulfillBountyTxnTwoButton').target = "_blank";
        document.getElementById('fulfillBountyTxnTwoButton').rel = "noopener noreferrer";
        document.getElementById('fulfillBountyTxnTwoButton').classList.remove('btn-primary');
        document.getElementById('fulfillBountyTxnTwoButton').classList.add('btn-default');
    },

    initializeFulfillBountyTxnOneButton: function(){
        document.getElementById('fulfillBountyTxnOneButton').innerText = "Submit Transaction 1 of 2";
        document.getElementById('fulfillBountyTxnOneButton').href = "javascript:App.fulfillBountyTxnOneButtonPressed();";
        document.getElementById('fulfillBountyTxnOneButton').target = "_self";
        document.getElementById('fulfillBountyTxnOneButton').classList.remove('btn-default');
        document.getElementById('fulfillBountyTxnOneButton').classList.add('btn-primary');
    },

    initializeFulfillBountyTxnTwoButton: function(){
        document.getElementById('fulfillBountyTxnTwoButton').innerText = "Submit Transaction 2 of 2";
        document.getElementById('fulfillBountyTxnTwoButton').href = "javascript:App.fulfillBountyTxnTwoButtonPressed();";
        document.getElementById('fulfillBountyTxnOneButton').target = "_self";
        document.getElementById('fulfillBountyTxnTwoButton').classList.remove('btn-default');
        document.getElementById('fulfillBountyTxnTwoButton').classList.add('btn-primary');
    },

    displayCreateBountyConfirmation: function(result){
        App.hideAllDivsInClass('confirmBountyOptions');
        document.getElementById('createBountyViewSentTxnButton').href = "https://etherscan.io/tx/" + String(result);
        document.getElementById('createBountyViewSentTxnButton').target = "_blank";
        document.getElementById('createBountyViewSentTxnButton').rel = "noopener noreferrer";
        App.showAllDivsInClass('successfullySentCreateBountyTransactionToBlockchain');
        console.log(result);
    },

    retreatFromCreateBountyConfirmationScreen: function(){
        App.hideAllDivsInClass('successfullySentCreateBountyTransactionToBlockchain');
        document.getElementById('createBountyViewSentTxnButton').href = "javascript:App.doNothing();";
        App.fetchCurrentBlock();
        App.showHomePageDivs();
    },

    displayFulfillBountyTxnOneError: function(err){

    },

    displayFulfillBountyTxnTwoError: function(err){

    },

    displayCreateBountyError: function(err){

    },

    fetchNumCatsFromDiv: function(){
        var numCats = document.getElementById('numberOfCatsInputBox').value;
        if(numCats !== ''){
            const numCatsAsNumber = Number(numCats);
            App.Bounty.quantity = numCatsAsNumber;
            document.getElementById('numCatsConfirmation').innerText = "Number of Cats: \n" + numCatsAsNumber;
        }
    },

    fetchGenerationFromDiv: function(){
        var desiredGen = document.getElementById('generationInputBox').value;
        if(desiredGen !== ''){
            const desiredGenAsNumber = Number(desiredGen);
            App.Bounty.desiredGen = desiredGenAsNumber;
            document.getElementById('generationConfirmation').innerText = "Exact Generation: \n" + desiredGenAsNumber;
        } else {
            App.Bounty.desiredGen = App.Constants.anyGenerationPlaceholder;
            document.getElementById('generationConfirmation').innerText = "Exact Generation: \nAny";
        }
    },

    fetchCooldownFromDiv: function(){
        var desiredCooldown = Number(document.getElementById('cooldownInputBox').value);
        if(desiredCooldown === 14) desiredCooldown = 13;
        App.Bounty.desiredCooldown = desiredCooldown;
        const selectedIndex = document.getElementById('cooldownInputBox').selectedIndex;
        App.Bounty.desiredCooldownText = document.getElementById('cooldownInputBox').options[selectedIndex].text;
        document.getElementById('cooldownConfirmation').innerText = 'Maximum Cooldown: \n' + App.Bounty.desiredCooldownText;
    },

    fetchDepositAmountInETH: function(){
        var numCats = document.getElementById('numberOfCatsInputBox').value;
        const numCatsAsNumber = Number(numCats);
        var depositAmountInETH = document.getElementById('depositAmountInETHInputBox').value;
        const depositAmountInETHAsNumber = (depositAmountInETH !== '' && Number(depositAmountInETH) >= App.Constants.minimumBidSize) ? Number(depositAmountInETH) : App.Constants.minimumBidSize;
        App.Bounty.depositAmountInETH = depositAmountInETHAsNumber;
        const depositAmountPerCat = Number((depositAmountInETHAsNumber / numCatsAsNumber).toFixed(10));
        const cancelledAmountToReturn = (depositAmountInETHAsNumber - App.Constants.cancellationFee).toFixed(10);
        const successfulBountyAmountSent = (depositAmountPerCat * (1 - App.Constants.successfulBountyPercentAsFraction)).toFixed(10);
        document.getElementById('depositAmountInETHConfirmation').innerText = "In total, you are depositing: \nΞ " + depositAmountInETHAsNumber.toString() + " ETH \n\n Per cat, that amounts to: \nΞ " + depositAmountPerCat.toString() + " ETH \n\n If successful, the bounty hunter will receive \nΞ " + Number(successfulBountyAmountSent).toString() + " ETH per cat \n(Successful Bounty Fee of 3.75%) \n\n If cancelled, you will receive \nΞ " + Number(cancelledAmountToReturn) + " ETH \n(Cancellation Fee of Ξ 0.008 ETH)";
    },

    fetchNumberOfDaysToLockFromDiv: function(){
        var desiredNumberOfDaysToLock = document.getElementById('numberOfDaysToLockInputBox').value;
        if(desiredNumberOfDaysToLock !== '' && Number(desiredNumberOfDaysToLock) !== 0){
            const desiredNumberOfDaysToLockAsNumber = Number(desiredNumberOfDaysToLock);
            App.Bounty.numberOfDaysToLock = desiredNumberOfDaysToLockAsNumber;
            App.Bounty.numberOfBlocksToLock = Math.floor(desiredNumberOfDaysToLockAsNumber * App.Constants.numberOfBlocksInDay);
            document.getElementById('numberOfDaysToLockConfirmation').innerText = "Number of Days To Lock Your ETH Deposit: \n" + Number(desiredNumberOfDaysToLockAsNumber).toString() + "\nWARNING: This means that you will not be able to cancel your bounty until " + desiredNumberOfDaysToLock + ' days have passed \n(measured in blocks, so not until ' + App.Bounty.numberOfBlocksToLock + ' blocks have passed).\nYour bounty will stay valid until cancelled, even once your lock-time has expired.\nAre you sure that you want to do this?';
            document.getElementById('lockEthAndCreateBountyButton').innerText = "Lock " + App.Bounty.depositAmountInETH.toString() + " ETH For " + Number(desiredNumberOfDaysToLockAsNumber).toString() + " Days and Create Bounty";
        } else {
            App.Bounty.numberOfDaysToLock = 0;
            App.Bounty.numberOfBlocksToLock = 0;
            document.getElementById('numberOfDaysToLockConfirmation').innerText = "You chose for your ETH deposit to not be locked, meaning that you may cancel at any time.";
            document.getElementById('lockEthAndCreateBountyButton').innerText = "Deposit " + App.Bounty.depositAmountInETH.toString() + " ETH and Create Bounty";
        }
    },

    fetchBountyContentsFromDivs: function(){
        App.fetchNumCatsFromDiv();
        App.fetchGenesFromDiv();
        App.fetchGenerationFromDiv();
        App.fetchCooldownFromDiv();
        App.fetchDepositAmountInETH();
        App.fetchNumberOfDaysToLockFromDiv();
    },

    checkIfIShouldProceedToConfirmationScreen: function(){
        if((!document.getElementById('depositAmountInETHInputBox').validity.valid || document.getElementById('depositAmountInETHInputBox').value === '')){
            App.proceedToErrorScreen();
        } else if((!document.getElementById('numberOfCatsInputBox').validity.valid || document.getElementById('numberOfCatsInputBox').value === '')){
            App.proceedToNumCatsErrorScreen();
        } else {
            App.proceedToConfirmationScreen();
        }
    },

    showHomePageDivs: function(){
        App.showAllDivsInClass('coreApp');
        App.showAllDivsInClass('infoForApp');
        App.showAllDivsInClass('builtOnEthereum');
    },

    hideHomePageDivs: function(){
        App.hideAllDivsInClass('coreApp');
        App.hideAllDivsInClass('infoForApp');
        App.hideAllDivsInClass('builtOnEthereum');
    },

    proceedToNoMainnetOrMetamaskScreen: function(){
        App.hideHomePageDivs();
        App.showAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
    },

    proceedToSiteUnderMaintenance: function(){
        App.hideHomePageDivs();
        App.showAllDivsInClass('siteUnderMaintenance');
    },

    retreatFromNoMainnetOrMetamaskScreen: function(){
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.showHomePageDivs();
    },

    retreatToHomeScreen: function(){
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.hideAllDivsInClass('kittyToTokenSection');
        App.hideAllDivsInClass('tokenToKittySection');
        App.hideAllDivsInClass('kittyToKittySection');
        App.hideAllDivsInClass('viewTransactionOnEtherscan');
        App.showHomePageDivs();
    },

    proceedToTokenToKittySection: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.showAllDivsInClass('tokenToKittySection');
    },

    proceedToErrorScreen: function(){
        App.showAllDivsInClass('errorWithCreateBountyOptions');
    },

    proceedToNumCatsErrorScreen: function(){
        App.showAllDivsInClass('errorWithCreateBountyNoNumCatsSpecified');
    },

    retreatFromConfirmationScreen: function(){
        App.hideAllDivsInClass('confirmBountyOptions');
        App.showHomePageDivs();
    },

    showSingleDiv: function(id) {
        console.log('Showing div with id: ' + id);
        var e = document.getElementById(id);
        e.style.display = 'block';
    },

    hideSingleDiv: function(id) {
        var e = document.getElementById(id);
        e.style.display = 'none';
    },

    showAllDivsInClass: function(className){
        var divsToHide = document.getElementsByClassName(className);
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "block";
        }
    },

    hideAllDivsInClass: function(className){
        var divsToHide = document.getElementsByClassName(className);
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        }
    },
};

window.onload = function() {
    App.checkWhetherWeb3HasBeenInitialized();
};
