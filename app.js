Object.defineProperty(Object.prototype, 'round', {
    value: function(){return this},
    writeable:true,
});

Object.defineProperty(Object.prototype, 'lessThan', {
    value: function(n){},
    writeable:true,
});

App = {
    Constants: {
        nullAddress: '0x0000000000000000000000000000000000000000',
        nullTransaction: '0x0000000000000000000000000000000000000000000000000000000000000000',
        //uint256Max: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
        uint256NearlyMax: '100000000000000000000000000000000000000000000000000000000000000000000000000000',
        maximumNumberOfVisibleKittyToTokenInputBoxes:10,
        wckKittyBuyerDevFees: 1.0375,
        wckUniswapSlippage:1.01,
    },
    Globals: {
        userAccount: undefined,
        web3Provider: undefined,
        numberOfVisibleKittyToTokenInputBoxes: 1,
        numApproveTxnSent: 0,
        approvedKitties:{},
        numApprovedKitties: 0,
        haveSentApprovalForKitty:{},
        specifyingDestinationAddresses: false,
        specifyingKittyIDs: false,
        lockscreenIsLocked: false,
        currentWCKBuyerAllowance: undefined,
        currentKittyBuyPriceInWCK: undefined,
        WCKApprovalInterval: undefined,
        contracts:{
            'cryptoCatsCoreContract':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cfoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_preferredTransport","type":"string"}],"name":"tokenMetadata","outputs":[{"name":"infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"promoCreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ceoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_STARTING_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setSiringAuctionAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pregnantKitties","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"isPregnant","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_AUCTION_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"siringAuction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setGeneScienceAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCEO","type":"address"}],"name":"setCEO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCOO","type":"address"}],"name":"setCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSaleAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sireAllowedToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_matronId","type":"uint256"},{"name":"_sireId","type":"uint256"}],"name":"canBreedWith","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kittyIndexToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSiringAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"uint256"}],"name":"setAutoBirthFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_sireId","type":"uint256"}],"name":"approveSiring","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCFO","type":"address"}],"name":"setCFO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_genes","type":"uint256"},{"name":"_owner","type":"address"}],"name":"createPromoKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"secs","type":"uint256"}],"name":"setSecondsPerBlock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GEN0_CREATION_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"setSaleAuctionAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_v2Address","type":"address"}],"name":"setNewAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"secondsPerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_matronId","type":"uint256"}],"name":"giveBirth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAuctionBalances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cooldowns","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kittyIndexToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cooAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"autoBirthFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"erc721Metadata","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_genes","type":"uint256"}],"name":"createGen0Auction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_kittyId","type":"uint256"}],"name":"isReadyToBreed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROMO_CREATION_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setMetadataAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"saleAuction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getKitty","outputs":[{"name":"isGestating","type":"bool"},{"name":"isReady","type":"bool"},{"name":"cooldownIndex","type":"uint256"},{"name":"nextActionAt","type":"uint256"},{"name":"siringWithId","type":"uint256"},{"name":"birthTime","type":"uint256"},{"name":"matronId","type":"uint256"},{"name":"sireId","type":"uint256"},{"name":"generation","type":"uint256"},{"name":"genes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sireId","type":"uint256"},{"name":"_matronId","type":"uint256"}],"name":"bidOnSiringAuction","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"gen0CreatedCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"geneScience","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_matronId","type":"uint256"},{"name":"_sireId","type":"uint256"}],"name":"breedWithAuto","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"matronId","type":"uint256"},{"indexed":false,"name":"sireId","type":"uint256"},{"indexed":false,"name":"cooldownEndBlock","type":"uint256"}],"name":"Pregnant","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"approved","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"matronId","type":"uint256"},{"indexed":false,"name":"sireId","type":"uint256"},{"indexed":false,"name":"genes","type":"uint256"}],"name":"Birth","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"ContractUpgrade","type":"event"}],
                'contractAddress':'0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
            },
            'cryptoCatsSalesAuctionContract':{
    			'source': undefined,
    			'instance': undefined,
    			'contractABI':[{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_seller","type":"address"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lastGen0SalePrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"name":"seller","type":"address"},{"name":"startingPrice","type":"uint256"},{"name":"endingPrice","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"startedAt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerCut","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isSaleClockAuction","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuctionWhenPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gen0SaleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getCurrentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonFungibleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"averageGen0SalePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_nftAddr","type":"address"},{"name":"_cut","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"startingPrice","type":"uint256"},{"indexed":false,"name":"endingPrice","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"AuctionSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}],
    			'contractAddress':'0xb1690C08E213a35Ed9bAb7B318DE14420FB57d8C',
    		},
            'wrappedKittiesContract':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyIds","type":"uint256[]"},{"name":"_destinationAddresses","type":"address[]"}],"name":"burnTokensAndWithdrawKitties","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kittyCoreAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_numSlotsToCheck","type":"uint256"}],"name":"batchRemoveWithdrawnKittiesFromStorage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyIds","type":"uint256[]"}],"name":"depositKittiesAndMintTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"kittyId","type":"uint256"}],"name":"DepositKittyAndMintToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"kittyId","type":"uint256"}],"name":"BurnTokenAndWithdrawKitty","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],
                'contractAddress':'0x09fE5f0236F0Ea5D930197DCE254d77B04128075',
            },
            'wckKittyBuyerContract':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newFee","type":"uint256"}],"name":"updateFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_erc20Address","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferERC20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kittyId","type":"uint256"},{"name":"_maxWCKWeiToSpend","type":"uint256"}],"name":"buyKittyWithWCK","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawOwnerEarnings","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"wckSpent","type":"uint256"}],"name":"KittyBoughtWithWCK","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newDevFee","type":"uint256"}],"name":"DevFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],
                'contractAddress':'0xC63136c59Afff603F207523Ea394B6ba37b0ebca',
            },
            'uniswapExchangeContract_WCK-ETH':{
    			'source': undefined,
    			'instance': undefined,
    	    	'contractABI':[{"name": "TokenPurchase", "inputs": [{"type": "address", "name": "buyer", "indexed": true}, {"type": "uint256", "name": "eth_sold", "indexed": true}, {"type": "uint256", "name": "tokens_bought", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "EthPurchase", "inputs": [{"type": "address", "name": "buyer", "indexed": true}, {"type": "uint256", "name": "tokens_sold", "indexed": true}, {"type": "uint256", "name": "eth_bought", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "AddLiquidity", "inputs": [{"type": "address", "name": "provider", "indexed": true}, {"type": "uint256", "name": "eth_amount", "indexed": true}, {"type": "uint256", "name": "token_amount", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "RemoveLiquidity", "inputs": [{"type": "address", "name": "provider", "indexed": true}, {"type": "uint256", "name": "eth_amount", "indexed": true}, {"type": "uint256", "name": "token_amount", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "Transfer", "inputs": [{"type": "address", "name": "_from", "indexed": true}, {"type": "address", "name": "_to", "indexed": true}, {"type": "uint256", "name": "_value", "indexed": false}], "anonymous": false, "type": "event"}, {"name": "Approval", "inputs": [{"type": "address", "name": "_owner", "indexed": true}, {"type": "address", "name": "_spender", "indexed": true}, {"type": "uint256", "name": "_value", "indexed": false}], "anonymous": false, "type": "event"}, {"name": "setup", "outputs": [], "inputs": [{"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 175875}, {"name": "addLiquidity", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "min_liquidity"}, {"type": "uint256", "name": "max_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": true, "type": "function", "gas": 82605}, {"name": "removeLiquidity", "outputs": [{"type": "uint256", "name": "out"}, {"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "amount"}, {"type": "uint256", "name": "min_eth"}, {"type": "uint256", "name": "min_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": false, "type": "function", "gas": 116814}, {"name": "__default__", "outputs": [], "inputs": [], "constant": false, "payable": true, "type": "function"}, {"name": "ethToTokenSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "min_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": true, "type": "function", "gas": 12757}, {"name": "ethToTokenTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "min_tokens"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": true, "type": "function", "gas": 12965}, {"name": "ethToTokenSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": true, "type": "function", "gas": 50455}, {"name": "ethToTokenTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": true, "type": "function", "gas": 50663}, {"name": "tokenToEthSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_eth"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": false, "type": "function", "gas": 47503}, {"name": "tokenToEthTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_eth"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": false, "type": "function", "gas": 47712}, {"name": "tokenToEthSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_bought"}, {"type": "uint256", "name": "max_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": false, "type": "function", "gas": 50175}, {"name": "tokenToEthTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_bought"}, {"type": "uint256", "name": "max_tokens"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": false, "type": "function", "gas": 50384}, {"name": "tokenToTokenSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 51007}, {"name": "tokenToTokenTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 51098}, {"name": "tokenToTokenSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 54928}, {"name": "tokenToTokenTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 55019}, {"name": "tokenToExchangeSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 49342}, {"name": "tokenToExchangeTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 49532}, {"name": "tokenToExchangeSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 53233}, {"name": "tokenToExchangeTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 53423}, {"name": "getEthToTokenInputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_sold"}], "constant": true, "payable": false, "type": "function", "gas": 5542}, {"name": "getEthToTokenOutputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}], "constant": true, "payable": false, "type": "function", "gas": 6872}, {"name": "getTokenToEthInputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}], "constant": true, "payable": false, "type": "function", "gas": 5637}, {"name": "getTokenToEthOutputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_bought"}], "constant": true, "payable": false, "type": "function", "gas": 6897}, {"name": "tokenAddress", "outputs": [{"type": "address", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1413}, {"name": "factoryAddress", "outputs": [{"type": "address", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1443}, {"name": "balanceOf", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "address", "name": "_owner"}], "constant": true, "payable": false, "type": "function", "gas": 1645}, {"name": "transfer", "outputs": [{"type": "bool", "name": "out"}], "inputs": [{"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "payable": false, "type": "function", "gas": 75034}, {"name": "transferFrom", "outputs": [{"type": "bool", "name": "out"}], "inputs": [{"type": "address", "name": "_from"}, {"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "payable": false, "type": "function", "gas": 110907}, {"name": "approve", "outputs": [{"type": "bool", "name": "out"}], "inputs": [{"type": "address", "name": "_spender"}, {"type": "uint256", "name": "_value"}], "constant": false, "payable": false, "type": "function", "gas": 38769}, {"name": "allowance", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "address", "name": "_owner"}, {"type": "address", "name": "_spender"}], "constant": true, "payable": false, "type": "function", "gas": 1925}, {"name": "name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1623}, {"name": "symbol", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1653}, {"name": "decimals", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1683}, {"name": "totalSupply", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1713}],
    	    	'contractAddress':'0x4FF7Fa493559c40aBd6D157a0bfC35Df68d8D0aC',
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
                if(window.web3.eth.accounts[0] !== undefined){
                    App.hideAllDivsInClass('connectToWeb3Button');
                    App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
                    App.showAllDivsInClass('coreApp');
                } else {
                    App.showAllDivsInClass('connectToWeb3AccountLockedMessage');
                    App.Globals.lockscreenIsLocked = true;
                }
                // Accounts now exposed
                //web3.eth.sendTransaction({ ... });
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
            if(window.web3.eth.accounts[0] !== undefined){
                App.hideAllDivsInClass('connectToWeb3Button');
                App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
                App.showAllDivsInClass('coreApp');
            } else {
                App.showAllDivsInClass('connectToWeb3AccountLockedMessage');
                App.Globals.lockscreenIsLocked = true;
            }
            // Acccounts always exposed
            //web3.eth.sendTransaction({ ... });
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
            if(App.Globals.lockscreenIsLocked === true && window.web3.eth.accounts[0] !== undefined){
                App.Globals.lockscreenIsLocked = false;
                App.Globals.userAccount = window.web3.eth.accounts[0];
                App.hideAllDivsInClass('connectToWeb3Button');
                App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
                App.showAllDivsInClass('coreApp');
            } else if(window.web3.eth.accounts[0] === undefined){
                App.retreatToLockScreen();
            } else if (window.web3.eth.accounts[0] !== App.Globals.userAccount) {
                App.Globals.userAccount = window.web3.eth.accounts[0];
            }
        }, 1000);

        var accountInterval = setInterval(function() {
            App.checkAllInputtedKittyIdsForApproval();
        }, (2 * 1000));

        window.onpopstate = function(e){
            App.retreatToHomeScreen();
        };

        return App.initContract();
    },

    checkWhetherWeb3HasBeenInitialized: function() {
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        if(window.web3 !== undefined && window.web3.eth.accounts[0] !== undefined){
            App.initWeb3();
        }
    },

    initContract: function() {
        if(window.web3 !== undefined){
            App.Globals.contracts['wrappedKittiesContract'].source = window.web3.eth.contract(App.Globals.contracts['wrappedKittiesContract'].contractABI);
            App.Globals.contracts['wrappedKittiesContract'].instance = App.Globals.contracts['wrappedKittiesContract'].source.at(App.Globals.contracts['wrappedKittiesContract'].contractAddress);
            App.Globals.contracts['cryptoCatsCoreContract'].source = window.web3.eth.contract(App.Globals.contracts['cryptoCatsCoreContract'].contractABI);
            App.Globals.contracts['cryptoCatsCoreContract'].instance = App.Globals.contracts['cryptoCatsCoreContract'].source.at(App.Globals.contracts['cryptoCatsCoreContract'].contractAddress);
            App.Globals.contracts['cryptoCatsSalesAuctionContract'].source = window.web3.eth.contract(App.Globals.contracts['cryptoCatsSalesAuctionContract'].contractABI);
            App.Globals.contracts['cryptoCatsSalesAuctionContract'].instance = App.Globals.contracts['cryptoCatsSalesAuctionContract'].source.at(App.Globals.contracts['cryptoCatsSalesAuctionContract'].contractAddress);
            App.Globals.contracts['wckKittyBuyerContract'].source = window.web3.eth.contract(App.Globals.contracts['wckKittyBuyerContract'].contractABI);
            App.Globals.contracts['wckKittyBuyerContract'].instance = App.Globals.contracts['wckKittyBuyerContract'].source.at(App.Globals.contracts['wckKittyBuyerContract'].contractAddress);
            App.Globals.contracts['uniswapExchangeContract_WCK-ETH'].source = window.web3.eth.contract(App.Globals.contracts['uniswapExchangeContract_WCK-ETH'].contractABI);
            App.Globals.contracts['uniswapExchangeContract_WCK-ETH'].instance = App.Globals.contracts['uniswapExchangeContract_WCK-ETH'].source.at(App.Globals.contracts['uniswapExchangeContract_WCK-ETH'].contractAddress);
        }
        if(window.web3.eth.accounts[0] !== undefined){
            //return App.fetchCurrentBlock();
        }
    },

    tokenToKittyButtonPressed: function(){
        var numTokens = document.getElementById('tokenToKittyInputBox').value;
        if(numTokens === ''){
            App.showAllDivsInClass('missingInputErrorNumTokens');
            return;
        } else {
            App.hideAllDivsInClass('missingInputErrorNumTokens');
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                var specificKitties = [];
                var specificAddresses = [];
                for(var i = 1; i <= Number(numTokens); i++){
                    if(App.Globals.specifyingKittyIDs === true){
                        const inputBoxElementID = 'tokenToKittySpecificKittyIDInputBox' + String(i);
                        const inputValue = document.getElementById(inputBoxElementID).value;
                        if(inputValue === '') { return; }
                        specificKitties.push(new BigNumber(String(inputValue)));
                    } else {
                        specificKitties.push(new BigNumber(String(0)));
                    }
                    if(App.Globals.specifyingDestinationAddresses === true){
                        const inputBoxElementID = 'tokenToKittySpecificAddressInputBox' + String(i);
                        const inputValue = document.getElementById(inputBoxElementID).value;
                        if(inputValue === '' || !App.validateTextInputAsValidAddress(inputValue)) {
                            App.showAllDivsInClass('invalidAddressErrorMessage');
                            return;
                        }
                        specificAddresses.push(new BigNumber(String(inputValue)));
                    } else {
                        specificAddresses.push(new BigNumber(String(App.Globals.userAccount)));
                    }
                }
                App.Globals.contracts['wrappedKittiesContract'].instance.burnTokensAndWithdrawKitties(specificKitties,
                                                                                                    specificAddresses,
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
        App.hideAllDivsInClass('invalidAddressErrorMessage');
        App.hideAllDivsInClass('missingInputErrorNumTokens');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
    },

    validateTextInputAsValidAddress: function(value){
        if(String(value).substring(0,2) !== '0x'){
            return false;
        } else if(String(value).length !== 42){
            return false;
        } else {
            return true;
        }
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
                App.Globals.haveSentApprovalForKitty[kittyId] = true;
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

    duplicateKittyIdsHaveBeenEntered: function(){
        var catsToSend = [];
        for(var i = 1; i <= App.Globals.numberOfVisibleKittyToTokenInputBoxes; i++){
            const elementId = 'kittyToTokenInputBox' + i;
            var kittyId = document.getElementById(elementId).value;
            if(kittyId !== ''){
                catsToSend.push(new BigNumber(String(kittyId)));
            }
        }
        var arrayHasDuplicates = false;
        console.log(catsToSend);
        for (var i = 0; i < catsToSend.length; i++) {
            for(var j = 0; j < catsToSend.length; j++){
                if(i === j) { continue; }
                if(catsToSend[i].toNumber() === catsToSend[j].toNumber()){
                    arrayHasDuplicates = true;
                }
            }
        }
        if(arrayHasDuplicates){
            App.showAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
            console.log('Duplicates found!');
            return true;
        } else {
            App.hideAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
            console.log('No duplicates found');
            return false;
        }
    },

    txnTwoOfTwoButtonPressed: function(){
        if(App.duplicateKittyIdsHaveBeenEntered()){
            return;
        }
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
            App.Globals.contracts['wrappedKittiesContract'].instance.depositKittiesAndMintTokens(catsToSend,
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
        document.getElementById(elementId).innerText = 'Approval In Progress, Final Transaction Below';
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
        if(window.web3 === undefined
            || window.web3.eth === undefined
            || window.web3.eth.accounts === undefined
            || window.web3.eth.accounts[0] === undefined){
                App.showAllDivsInClass('connectToWeb3Button');
        } else{
            App.showAllDivsInClass('coreApp');
        }
        App.showAllDivsInClass('infoForApp');
        App.showAllDivsInClass('builtOnEthereum');
    },

    hideHomePageDivs: function(){
        App.hideAllDivsInClass('coreApp');
        App.hideAllDivsInClass('connectToWeb3Button');
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.hideAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.hideAllDivsInClass('infoForApp');
        App.hideAllDivsInClass('builtOnEthereum');
    },

    proceedToNoMainnetOrMetamaskScreen: function(){
        App.hideHomePageDivs();
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.showAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
    },

    proceedToSiteUnderMaintenance: function(){
        App.hideHomePageDivs();
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.showAllDivsInClass('siteUnderMaintenance');
    },

    retreatFromNoMainnetOrMetamaskScreen: function(){
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
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
        App.hideAllDivsInClass('invalidAddressErrorMessage');
        App.hideAllDivsInClass('missingInputErrorNumTokens');
        App.hideAllDivsInClass('viewTransactionOnEtherscan');
        App.hideAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.hideAllDivsInClass('viewYourWCKBalanceSection');
        App.hideAllDivsInClass('buyKittyWithWCKSection');
        for(var i = 1; i <= App.Globals.numberOfVisibleKittyToTokenInputBoxes; i++){
            const textBoxId = 'kittyToTokenInputBox' + String(i);
            document.getElementById(textBoxId).value = '';
        }
        App.showHomePageDivs();
    },

    retreatToLockScreen: function(){
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.hideAllDivsInClass('kittyToTokenSection');
        App.hideAllDivsInClass('tokenToKittySection');
        App.hideAllDivsInClass('invalidAddressErrorMessage');
        App.hideAllDivsInClass('missingInputErrorNumTokens');
        App.hideAllDivsInClass('viewTransactionOnEtherscan');
        App.hideAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
        for(var i = 1; i <= App.Globals.numberOfVisibleKittyToTokenInputBoxes; i++){
            const textBoxId = 'kittyToTokenInputBox' + String(i);
            document.getElementById(textBoxId).value = '';
        }
        App.hideAllDivsInClass('coreApp');
        App.showAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.showAllDivsInClass('connectToWeb3Button');
        App.showAllDivsInClass('infoForApp');
        App.showAllDivsInClass('builtOnEthereum');
    },

    proceedToKittyToTokenSection: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.updateKittyToTokenInputBoxes();
        App.hideAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
        App.showAllDivsInClass('kittyToTokenSection');
    },

    proceedToTokenForSpecificKittySection: function(){
        App.hideHomePageDivs();

        App.Globals.specifyingDestinationAddresses = false;
        App.hideAllDivsInClass('tokenToKittySpecificAddressRow');
        document.getElementById('tokentoKittyAddSpecificAddressesButton').innerText = 'Optional: Specify Individual Destination Addresses Per Kitty';

        App.Globals.specifyingKittyIDs = true;
        App.showAllDivsInClass('tokenToKittySpecificKittyIDRow');
        document.getElementById('tokentoKittyAddSpecificIdsButton').innerText = "Optional: Express No Preference For Which Kitties Will Be Withdrawn";

        window.history.pushState({}, "", "");
        document.getElementById('tokenToKittyInputBox').value = '1';
        App.clearInputsOfTokenToKittyInputSections();
        App.hideAllDivsInClass('invalidAddressErrorMessage');
        App.hideAllDivsInClass('missingInputErrorNumTokens');
        App.showAllDivsInClass('tokenToKittySection');
        App.tokenToKittyShowSpecificKittyIDInputsUpToValue(1);
    },

    proceedToViewYourWCKBalance: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        App.getWCKBalanceForUser();
        App.showAllDivsInClass('viewYourWCKBalanceSection');
    },

    proceedToBuyKittyWithWCK: function(){
        App.hideHomePageDivs();
        window.history.pushState({}, "", "");
        document.getElementById('enableWCKKittyBuyingButton').classList.remove('btn-default');
        document.getElementById('enableWCKKittyBuyingButton').classList.add('btn-primary');
        document.getElementById('enableWCKKittyBuyingButton').href = "javascript:App.enableWCKKittyBuyingButtonPressed();"
        document.getElementById('kittyIsForSaleWCKPriceText').innerText = "";
        document.getElementById('buyKittyWithWCKIDBox').value = '';
        App.Globals.currentKittyBuyPriceInWCK = undefined;
        App.hideAllDivsInClass('kittyNotForSaleError');
        App.hideAllDivsInClass('wckKittyBuyingNotEnabled');
        App.hideAllDivsInClass('wckKittyBuyingEnabled');
        App.showAllDivsInClass('loadingWCKKittyBuyingApproval');
        App.showAllDivsInClass('buyKittyWithWCKSection');
        App.showAllDivsInClass('wckKittyBuyingContract');
        App.getWCKApprovedForKittyBuyingForUser();
    },

    getWCKBalanceForUser: function(){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            const balance = App.Globals.contracts['wrappedKittiesContract'].instance.balanceOf(account,
                function(error, result){
                    if(!error) {
                        const balanceInWei = result.toNumber();
                        document.getElementById('wckBalanceText').innerText = String((App.toEth(balanceInWei, 18)).toNumber()) + ' WCK' ;
                    }
                    else {
                        console.log(error.message);
                    }
                }
            );
        });
    },

    getWCKApprovedForKittyBuyingForUser: function(){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            const balance = App.Globals.contracts['wrappedKittiesContract'].instance.allowance(new BigNumber(String(account)),
                new BigNumber(String(App.Globals.contracts['wckKittyBuyerContract'].contractAddress)),
                function(error, result){
                    if(!error) {
                        const allowance = result.toNumber();
                        App.Globals.currentWCKBuyerAllowance = allowance;
                        App.displayWCKKittyBuyingForAllowance(allowance);
                    }
                    else {
                        console.log(error.message);
                    }
                }
            );
        });
    },

    displayWCKKittyBuyingForAllowance: function(allowance){
        if(String(allowance) !== '0'){
            if(App.Globals.WCKApprovalInterval !== undefined){
                clearInterval(App.Globals.WCKApprovalInterval);
                App.Globals.WCKApprovalInterval = undefined;
            }
            App.hideAllDivsInClass('loadingWCKKittyBuyingApproval');
            App.hideAllDivsInClass('wckKittyBuyingNotEnabled');
            App.showAllDivsInClass('wckKittyBuyingEnabled');
        } else {
            App.hideAllDivsInClass('loadingWCKKittyBuyingApproval');
            App.hideAllDivsInClass('wckKittyBuyingEnabled');
            App.showAllDivsInClass('wckKittyBuyingNotEnabled');
        }
    },

    enableWCKKittyBuyingButtonPressed: function(){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            App.Globals.contracts['wrappedKittiesContract'].instance.approve(new BigNumber(String(App.Globals.contracts['wckKittyBuyerContract'].contractAddress)),
                                                                        new BigNumber(String(App.Constants.uint256NearlyMax)),
                                                                        {
                                                                            from: account,
                                                                        },
                                                                        function(error, result){
                                                                            if(!error) return App.displayEnableWCKKittyBuyingConfirmation(result);
                                                                            else {
                                                                                console.log(error.message);
                                                                                return App.displayTransactionError(error);
                                                                            }
                                                                        })
        });
    },

    displayEnableWCKKittyBuyingConfirmation: function(result){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('enableWCKKittyBuyingButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('enableWCKKittyBuyingButton').href = "https://etherscan.io/tx/" + String(result);
        }
        document.getElementById('enableWCKKittyBuyingButton').target="_blank"
        document.getElementById('enableWCKKittyBuyingButton').rel="noopener noreferrer"
        document.getElementById('enableWCKKittyBuyingButton').innerText = 'Please Wait, Approval In Progress, Screen Will Change When Transaction Confirms';
        document.getElementById('enableWCKKittyBuyingButton').classList.remove('btn-primary');
        document.getElementById('enableWCKKittyBuyingButton').classList.add('btn-default');
        App.checkForWCKApprovalAfterInterval();
    },

    checkForWCKApprovalAfterInterval: function(){
        App.Globals.WCKApprovalInterval = setInterval(function(){
            App.getWCKApprovedForKittyBuyingForUser();
        }, 5 * 1000);
    },

    wckKittyBuyingKittyIdEntered: function(kittyId){
        if(kittyId === ''){
            App.hideAllDivsInClass('kittyNotForSaleError');
            App.hideAllDivsInClass('kittyIsForSaleMessage');
            App.hideAllDivsInClass('kittyIsForSaleFetchingPriceMessage');
        } else {
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                const balance = App.Globals.contracts['cryptoCatsSalesAuctionContract'].instance.getCurrentPrice(new BigNumber(String(kittyId)),
                    function(error, result){
                        if(!error) {
                            App.parseResultOfGetAuctionForKitty(kittyId, result);
                        }
                        else {
                            console.log(error.message);
                        }
                    }
                );
            });
        }
    },

    parseResultOfGetAuctionForKitty: function(kittyId, result){
        if(result !== undefined){
            if(result.toNumber() === 0){
                App.hideAllDivsInClass('kittyIsForSaleMessage');
                App.hideAllDivsInClass('kittyIsForSaleFetchingPriceMessage');
                App.showAllDivsInClass('kittyNotForSaleError');
            } else {
                App.hideAllDivsInClass('kittyIsForSaleMessage');
                App.hideAllDivsInClass('kittyNotForSaleError');
                App.showAllDivsInClass('kittyIsForSaleFetchingPriceMessage');
                App.fetchCurrentWCKPriceFromUniswap(result);
            }
        }
    },

    fetchCurrentWCKPriceFromUniswap: function(costInWei){
        console.log(costInWei.mul);
        console.log(costInWei.times);
        var costInWeiPlusFees;
        var costInWeiPlusFeesAndSlippage;
        if(costInWei.mul !== undefined){
            costInWeiPlusFees = costInWei.mul(new BigNumber(String(App.Constants.wckKittyBuyerDevFees)));
            costInWeiPlusFeesAndSlippage = costInWeiPlusFees.mul(new BigNumber(String(App.Constants.wckUniswapSlippage)));
        } else {
            costInWeiPlusFees = costInWei.times(new BigNumber(String(App.Constants.wckKittyBuyerDevFees)));
            costInWeiPlusFeesAndSlippage = costInWeiPlusFees.times(new BigNumber(String(App.Constants.wckUniswapSlippage)));
        }
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            const balance = App.Globals.contracts['uniswapExchangeContract_WCK-ETH'].instance.getTokenToEthOutputPrice(new BigNumber(String(costInWeiPlusFeesAndSlippage)),
                function(error, result){
                    if(!error) {
                        App.Globals.currentKittyBuyPriceInWCK = result;
                        App.parseResultOfFetchCurrentWCKPriceFromUniswap(result);
                    }
                    else {
                        console.log(error.message);
                    }
                }
            );
        });
    },

    parseResultOfFetchCurrentWCKPriceFromUniswap: function(result){
        App.hideAllDivsInClass('kittyIsForSaleFetchingPriceMessage');
        if(result.toNumber() === 0){
            document.getElementById('kittyIsForSaleWCKPriceText').innerText = 'There are not enough reserves in the WCK Uniswap pool to perform this trade.';
        } else {
            document.getElementById('kittyIsForSaleWCKPriceText').innerText = 'This kitty will cost no more than ' + String((App.toEth(result, 18)).toNumber()) + ' WCK\n\n(WrappedKitties 3.75% fee is included in this number)';
            App.fetchCurrentUserWCKBalance();
        }
        App.showAllDivsInClass('kittyIsForSaleMessage');
    },

    fetchCurrentUserWCKBalance: function(costInWei){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            const balance = App.Globals.contracts['wrappedKittiesContract'].instance.balanceOf(account,
                function(error, result){
                    if(!error) {
                        App.parseFetchCurrentUserWCKBalance(result);
                    }
                    else {
                        console.log(error.message);
                    }
                }
            );
        });
    },

    parseFetchCurrentUserWCKBalance: function(result){
        if(result.lt(App.Globals.currentKittyBuyPriceInWCK)){
            document.getElementById('kittyIsForSaleWCKPriceText').innerText = document.getElementById('kittyIsForSaleWCKPriceText').innerText + '\n\nYou do not own enough WCK to complete this purchase.';
        }
    },

    buyKittyWithWCKButtonPressed: function(){
        const currCatID = document.getElementById('buyKittyWithWCKIDBox').value;
        if(currCatID !== '' && App.Globals.currentKittyBuyPriceInWCK !== undefined){
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                App.Globals.contracts['wckKittyBuyerContract'].instance.buyKittyWithWCK(new BigNumber(String(currCatID)),
                                                                            App.Globals.currentKittyBuyPriceInWCK,
                                                                            {
                                                                                from: account,
                                                                            },
                                                                            function(error, result){
                                                                                if(!error) return App.displayBuyKittyWithWCKConfirmation(result);
                                                                                else {
                                                                                    console.log(error.message);
                                                                                    return App.displayTransactionError(error);
                                                                                }
                                                                            })
            });
        }
    },

    displayBuyKittyWithWCKConfirmation: function(result){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/tx/" + String(result);
        }
        App.hideAllDivsInClass('buyKittyWithWCKSection');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
        App.Globals.approvedKitties = {};
    },

    tokenToKittyAddSpecificIdsButtonPressed: function(){
        App.Globals.specifyingKittyIDs = !App.Globals.specifyingKittyIDs;
        if(App.Globals.specifyingKittyIDs){
            App.showAllDivsInClass('tokenToKittySpecificKittyIDRow');
            document.getElementById('tokentoKittyAddSpecificIdsButton').innerText = "Optional: Express No Preference For Which Kitties Will Be Withdrawn";
        } else {
            App.hideAllDivsInClass('tokenToKittySpecificKittyIDRow');
            document.getElementById('tokentoKittyAddSpecificIdsButton').innerText = "Optional: Specify The ID of Each Kitty That Will Be Withdrawn";
        }
        var inputValue = document.getElementById('tokenToKittyInputBox').value;
        if(inputValue === '' || inputValue === undefined) { inputValue = 1; }
        App.tokenToKittyShowSpecificKittyIDInputsUpToValue(inputValue);
        if(App.Globals.specifyingDestinationAddresses){
            App.tokenToKittyShowSpecificAddressInputsUpToValue(inputValue);
        }
    },

    tokentoKittyAddSpecificAddressesButtonPressed: function(){
        App.Globals.specifyingDestinationAddresses = !App.Globals.specifyingDestinationAddresses;
        if(App.Globals.specifyingDestinationAddresses){
            App.showAllDivsInClass('tokenToKittySpecificAddressRow');
            document.getElementById('tokentoKittyAddSpecificAddressesButton').innerText = "Optional: Specify My Address For All Kitties Being Withdrawn";
        } else {
            App.hideAllDivsInClass('tokenToKittySpecificAddressRow');
            document.getElementById('tokentoKittyAddSpecificAddressesButton').innerText = "Optional: Specify Individual Destination Addresses Per Kitty";
        }
        var inputValue = document.getElementById('tokenToKittyInputBox').value;
        if(inputValue === '' || inputValue === undefined) { inputValue = 1; }
        App.tokenToKittyShowSpecificAddressInputsUpToValue(inputValue);
        if(App.Globals.specifyingKittyIDs){
            App.tokenToKittyShowSpecificKittyIDInputsUpToValue(inputValue);
        }
    },

    tokenToKittyNumTokensInputValueEntered: function(value){
        if(value === '' || value === undefined) { value = 1; }
        App.tokenToKittyShowSpecificAddressInputsUpToValue(value);
        App.tokenToKittyShowSpecificKittyIDInputsUpToValue(value);
    },

    tokenToKittyShowSpecificAddressInputsUpToValue: function(value){
        for(var i = 1; i <= 20; i++){
            if(i <= value){
                App.showAllDivsInClass('tokenToKittySpecificAddressInputRow' + String(i));
            }else{
                App.hideAllDivsInClass('tokenToKittySpecificAddressInputRow' + String(i));
            }
        }
    },

    tokenToKittyShowSpecificKittyIDInputsUpToValue: function(value){
        if(App.Globals.specifyingKittyIDs === true){
            for(var i = 1; i <= 20; i++){
                if(i <= value){
                    App.showAllDivsInClass('tokenToKittySpecificKittyIDInputRow' + String(i));
                }else{
                    App.hideAllDivsInClass('tokenToKittySpecificKittyIDInputRow' + String(i));
                }
            }
        }
    },

    clearInputsOfTokenToKittyInputSections: function(){
        for(var i = 1; i <= 20; i++){
            const kittyIDInputBoxElementID = 'tokenToKittySpecificKittyIDInputBox' + String(i);
            document.getElementById(kittyIDInputBoxElementID).value = '';
            const addressInputBoxElementID = 'tokenToKittySpecificAddressInputBox' + String(i);
            document.getElementById(addressInputBoxElementID).value = '';
        }
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
            document.getElementById(elementId).placeholder = 'Enter the ID of the kitty you wish to give for WCK';
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
        App.duplicateKittyIdsHaveBeenEntered();
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

        } else if(App.Globals.approvedKitties[kittyId] === true){
            App.greyOutButtonContainingKittyId(kittyId, numTxn);
        } else if(App.Globals.haveSentApprovalForKitty[kittyId] !== true) {
            App.greenOutButtonLackingKittyId(numTxn);
        }
    },

    kittyIndexToApprovedCallback: function(kittyId, numTxn, result){
        if(String(result).toLowerCase() === String(App.Globals.contracts['wrappedKittiesContract'].contractAddress).toLowerCase()){
            App.Globals.approvedKitties[kittyId] = true;
            App.Globals.numApprovedKitties += 1;
            App.greyOutButtonContainingKittyId(kittyId, numTxn);
        } else if(App.Globals.haveSentApprovalForKitty[kittyId] !== true) {
            App.greenOutButtonLackingKittyId(numTxn);
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
        };
        if(App.Globals.numApprovedKitties === App.Globals.numberOfVisibleKittyToTokenInputBoxes){
            App.showTransactionTwoOfTwoButton();
        }
    },

    greenOutButtonLackingKittyId: function(numTxn){
        const buttonId = 'txnXOfY' + String(numTxn);
        const totalNumTransactions = String(Number(App.Globals.numberOfVisibleKittyToTokenInputBoxes) + 1);
        document.getElementById(buttonId).innerText = 'Send Transaction ' + numTxn + ' of ' + totalNumTransactions;
        document.getElementById(buttonId).classList.remove('btn-default');
        document.getElementById(buttonId).classList.add('btn-primary');
        document.getElementById(buttonId).href = 'javascript:App.approveKittyButtonPressed(' + numTxn + ')';
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

    toEth: function(wei, decimals){
		return new BigNumber(String(wei)).div(new BigNumber(10 ** decimals));
	},
};

window.onload = function() {
    App.checkWhetherWeb3HasBeenInitialized();
};
