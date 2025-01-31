App = {
    Constants: {
        nullAddress: '0x0000000000000000000000000000000000000000',
        nullTransaction: '0x0000000000000000000000000000000000000000000000000000000000000000',
        maximumNumberOfVisibleKittyToTokenInputBoxes:10,
    },
    Globals: {
        userAccount: undefined,
        web3Provider: undefined,
        kittyToToken: true,
        numberOfVisibleKittyToTokenInputBoxes: 1,
        numApproveTxnSent: 0,
        approvedKitties:{},
        numApprovedKitties: 0,
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
            }
        }, 100);

        var accountInterval = setInterval(function() {
            App.checkAllInputtedKittyIdsForApproval();
        }, (2 * 1000));

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

    tokenToKittyButtonPressed: function(){
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
                                                                                    if(!error) return App.displayTokenToKittyTransactionConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayTransactionError(error);
                                                                                    }
                                                                                })
                } else {
                    App.Globals.contracts['wrappedKittiesContract'].instance.multiBurnTokenAndWithdrawKitty(new BigNumber(String(numTokens)),
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTokenToKittyTransactionConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayTransactionError(error);
                                                                                    }
                                                                                })
                }
            });
        }
    },

    displayTokenToKittyTransactionConfirmation: function(result){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/tx/" + String(result);
        }
        App.hideAllDivsInClass('tokenToKittySection');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
    },

    displayTransactionError: function(err){},

    doNothing: function(){},

    approveKittyButtonPressed: function(numTxn){
        App.Globals.numApproveTxnSent = numTxn;
        const elementId = 'kittyToTokenInputBox' + numTxn;
        var kittyId = document.getElementById(elementId).value;
        if(kittyId !== ''){
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                App.Globals.contracts['cryptoCatsCoreContract'].instance.approve(new BigNumber(String(App.Globals.contracts['wrappedKittiesContract'].contractAddress)),
                                                                            new BigNumber(String(kittyId)),
                                                                            {
                                                                                from: account,
                                                                            },
                                                                            function(error, result){
                                                                                if(!error) return App.displayApproveKittyConfirmation(result);
                                                                                else {
                                                                                    console.log(error.message);
                                                                                    return App.displayTransactionError(error);
                                                                                }
                                                                            })
            });
        }
    },

    txnTwoOfTwoButtonPressed: function(){
        var catsToSend = [];
        for(var i = 1; i <= App.Globals.numberOfVisibleKittyToTokenInputBoxes; i++){
            const elementId = 'kittyToTokenInputBox' + i;
            var kittyId = document.getElementById(elementId).value;
            if(kittyId !== ''){
                catsToSend.push(new BigNumber(String(kittyId)));
            }
        }
        if(catsToSend.length === 0) {
            return;
        }

        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            if (catsToSend.length === 1){
                if(App.Globals.kittyToToken === true){
                    App.Globals.contracts['wrappedKittiesContract'].instance.depositKittyAndMintToken(catsToSend[0],
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTxnTwoOfTwoConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayTransactionError(error);
                                                                                    }
                                                                                })
                } else {
                    App.Globals.contracts['wrappedKittiesContract'].instance.depositKittyAndWithdrawDifferentKitty(catsToSend[0],
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTxnTwoOfTwoConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayTransactionError(error);
                                                                                    }
                                                                                })
                }
            } else {
                if(App.Globals.kittyToToken === true){
                    App.Globals.contracts['wrappedKittiesContract'].instance.multiDepositKittyAndMintToken(catsToSend,
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTxnTwoOfTwoConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayTransactionError(error);
                                                                                    }
                                                                                })
                } else {
                    App.Globals.contracts['wrappedKittiesContract'].instance.multiDepositKittyAndWithdrawDifferentKitty(catsToSend,
                                                                                {
                                                                                    from: account,
                                                                                },
                                                                                function(error, result){
                                                                                    if(!error) return App.displayTxnTwoOfTwoConfirmation(result);
                                                                                    else {
                                                                                        console.log(error.message);
                                                                                        return App.displayTransactionError(error);
                                                                                    }
                                                                                })
                }
            }
        });
    },

    displayApproveKittyConfirmation: function(result){
        const elementId = 'txnXOfY' + App.Globals.numApproveTxnSent;
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById(elementId).href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById(elementId).href = "https://etherscan.io/tx/" + String(result);
        }
        document.getElementById(elementId).target="_blank"
        document.getElementById(elementId).rel="noopener noreferrer"
        document.getElementById(elementId).innerText = 'View Transaction on Etherscan';
        document.getElementById(elementId).classList.remove('btn-primary');
        document.getElementById(elementId).classList.add('btn-default');
    },

    displayTxnTwoOfTwoConfirmation: function(result){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/tx/" + String(result);
        }
        App.hideAllDivsInClass('kittyToTokenSection');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
        App.Globals.approvedKitties = {};
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

    titleButtonPressed: function(){
        /*
        if(window.web3.eth.accounts[0] !== undefined){
            App.retreatToHomeScreen();
        }
        */
    },

    retreatToHomeScreen: function(){
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.hideAllDivsInClass('kittyToTokenSection');
        App.hideAllDivsInClass('tokenToKittySection');
        App.hideAllDivsInClass('kittyToKittySection');
        App.hideAllDivsInClass('buyTokensInBulkSection');
        App.hideAllDivsInClass('viewTransactionOnEtherscan');
        for(var i = 1; i <= App.Globals.numberOfVisibleKittyToTokenInputBoxes; i++){
            const textBoxId = 'kittyToTokenInputBox' + String(i);
            document.getElementById(textBoxId).value = '';
        }
        App.showHomePageDivs();
    },

    proceedToKittyToTokenSection: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.Globals.kittyToToken = true;
        App.updateKittyToTokenInputBoxes();
        App.showAllDivsInClass('kittyToTokenSection');
    },

    proceedToTokenToKittySection: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.showAllDivsInClass('tokenToKittySection');
    },

    proceedToKittyToKittySection: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.Globals.kittyToToken = false;
        App.updateKittyToTokenInputBoxes();
        App.showAllDivsInClass('kittyToTokenSection');
    },

    proceedToBuyTokensInBulkSection: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.showAllDivsInClass('buyTokensInBulkSection');
    },

    updateKittyToTokenInputBoxes: function(){
        App.Globals.numberOfVisibleKittyToTokenInputBoxes = 1;
        document.getElementById('bundleMoreKittiesButton').classList.remove('btn-default');
        document.getElementById('bundleMoreKittiesButton').classList.add('btn-primary');
        document.getElementById('bundleMoreKittiesButton').href = "javascript:App.bundleMoreKittiesInThisTransactionButtonPressed();"
        App.hideTransactionTwoOfTwoButton();
        for(var i = 1; i <= App.Constants.maximumNumberOfVisibleKittyToTokenInputBoxes; i++){
            const elementId = 'kittyToTokenInputBox' + String(i);
            document.getElementById(elementId).value = '';
            document.getElementById(elementId).placeholder = (App.Globals.kittyToToken) ? 'Enter the ID of the kitty you wish to give for WCK' : 'Enter the ID of the kitty you wish to give for a different kitty';
            const totalNumTransactions = String(Number(App.Globals.numberOfVisibleKittyToTokenInputBoxes) + 1);
            const buttonId = 'txnXOfY' + String(i);
            document.getElementById(buttonId).innerText = 'Send Transaction ' + i + ' of ' + totalNumTransactions;
            document.getElementById(buttonId).classList.remove('btn-default');
            document.getElementById(buttonId).classList.add('btn-primary');
            document.getElementById(buttonId).href = 'javascript:App.approveKittyButtonPressed(' + i + ')';
            document.getElementById(buttonId).removeAttribute('target');
            document.getElementById(buttonId).removeAttribute('rel');
            if(i > 1){
                const classId = 'kittyToTokenInputRow' + String(i);
                App.hideAllDivsInClass(classId);
            }
        }
        App.Globals.approvedKitties = {};
        App.Globals.numApprovedKitties = 0;
    },

    updateTransactionXOfYText: function(){
        const totalNumTransactions = String(Number(App.Globals.numberOfVisibleKittyToTokenInputBoxes) + 1);
        for(var i = 1; i <= App.Constants.maximumNumberOfVisibleKittyToTokenInputBoxes; i++){
            const elementId = 'txnXOfY' + String(i);
            document.getElementById(elementId).innerText = 'Send Transaction ' + i + ' of ' + totalNumTransactions;
        }
    },

    bundleMoreKittiesInThisTransactionButtonPressed: function(){
        if(App.Globals.numberOfVisibleKittyToTokenInputBoxes < App.Constants.maximumNumberOfVisibleKittyToTokenInputBoxes){
            App.Globals.numberOfVisibleKittyToTokenInputBoxes++;
            App.hideTransactionTwoOfTwoButton();
            const classId = 'kittyToTokenInputRow' + String(App.Globals.numberOfVisibleKittyToTokenInputBoxes);
            App.showAllDivsInClass(classId);
            if(App.Globals.numberOfVisibleKittyToTokenInputBoxes >= App.Constants.maximumNumberOfVisibleKittyToTokenInputBoxes){
                document.getElementById('bundleMoreKittiesButton').classList.remove('btn-primary');
                document.getElementById('bundleMoreKittiesButton').classList.add('btn-default');
                document.getElementById('bundleMoreKittiesButton').href = "javascript:App.doNothing();"
            }
        }
        App.updateTransactionXOfYText();
    },

    checkAllInputtedKittyIdsForApproval: function(){
        for(var i = 1; i <= App.Globals.numberOfVisibleKittyToTokenInputBoxes; i++){
            App.checkInputtedKittyIdForApproval(i);
        }
    },

    checkInputtedKittyIdForApproval: function(numTxn){
        const elementId = 'kittyToTokenInputBox' + numTxn;
        var kittyId = document.getElementById(elementId).value;
        if(kittyId !== '' && App.Globals.approvedKitties[kittyId] !== true){
            App.Globals.contracts['cryptoCatsCoreContract'].instance.kittyIndexToApproved(new BigNumber(String(kittyId)),
                                                                                            function(error, result){
                                                                                                if(!error) App.kittyIndexToApprovedCallback(kittyId, numTxn, result);
                                                                                                else {
                                                                                                    console.log(error.message);
                                                                                                }
                                                                                            });

        }
    },

    kittyIndexToApprovedCallback: function(kittyId, numTxn, result){
        if(String(result).toLowerCase() === String(App.Globals.contracts['wrappedKittiesContract'].contractAddress).toLowerCase()){
            App.Globals.approvedKitties[kittyId] = true;
            App.greyOutButtonContainingKittyId(kittyId, numTxn);
        }
    },

    greyOutButtonContainingKittyId: function(kittyId, numTxn){
        const textBoxId = 'kittyToTokenInputBox' + String(numTxn);
        const textBoxValue = document.getElementById(textBoxId).value;
        if(String(textBoxValue) === String(kittyId)){
            const buttonId = 'txnXOfY' + String(numTxn);
            document.getElementById(buttonId).innerText = 'Approved';
            document.getElementById(buttonId).classList.remove('btn-primary');
            document.getElementById(buttonId).classList.add('btn-default');
            document.getElementById(buttonId).href = 'javascript:App.doNothing()';
            App.Globals.numApprovedKitties += 1;
        };
        if(App.Globals.numApprovedKitties === App.Globals.numberOfVisibleKittyToTokenInputBoxes){
            App.showTransactionTwoOfTwoButton();
        }
    },

    showTransactionTwoOfTwoButton: function(){
        const totalNumTransactions = String(Number(App.Globals.numberOfVisibleKittyToTokenInputBoxes) + 1);
        document.getElementById('transactionTwoOfTwoButton').innerText = 'Send Transaction ' + totalNumTransactions + ' of ' + totalNumTransactions;
        document.getElementById('transactionTwoOfTwoButton').classList.remove('btn-default');
        document.getElementById('transactionTwoOfTwoButton').classList.add('btn-primary');
        document.getElementById('transactionTwoOfTwoButton').href = 'javascript:App.txnTwoOfTwoButtonPressed()';
        document.getElementById('transactionTwoOfTwoButton').removeAttribute('target');
        document.getElementById('transactionTwoOfTwoButton').removeAttribute('rel');
    },

    hideTransactionTwoOfTwoButton: function(){
        const totalNumTransactions = String(Number(App.Globals.numberOfVisibleKittyToTokenInputBoxes) + 1);
        document.getElementById('transactionTwoOfTwoButton').innerText = 'Send Transaction ' + totalNumTransactions + ' of ' + totalNumTransactions;
        document.getElementById('transactionTwoOfTwoButton').classList.remove('btn-primary');
        document.getElementById('transactionTwoOfTwoButton').classList.add('btn-default');
        document.getElementById('transactionTwoOfTwoButton').href = 'javascript:App.addWarningToTransactionTwoOfTwoButton()';
        document.getElementById('transactionTwoOfTwoButton').removeAttribute('target');
        document.getElementById('transactionTwoOfTwoButton').removeAttribute('rel');
    },

    addWarningToTransactionTwoOfTwoButton: function(){
        document.getElementById('transactionTwoOfTwoButton').innerText = 'Wait For Previous Transactions To Confirm';
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
