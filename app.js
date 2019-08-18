//////////////////////////////////////////////////////////////////////
// Dapper Extension Workaround
//////////////////////////////////////////////////////////////////////

Object.defineProperty(Object.prototype, 'round', {
    value: function(){return this},
    writeable:true,
});

Object.defineProperty(Object.prototype, 'lessThan', {
    value: function(n){},
    writeable:true,
});

App = {

    //////////////////////////////////////////////////////////////////////
    // Globals
    //////////////////////////////////////////////////////////////////////

    Constants: {
        nullAddress: '0x0000000000000000000000000000000000000000',
        nullTransaction: '0x0000000000000000000000000000000000000000000000000000000000000000',
        //uint256Max: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
        uint256NearlyMax: '100000000000000000000000000000000000000000000000000000000000000000000000000000',
        uint128NearlyMax: '319014718988379809496913694467282698240',
        maximumNumberOfVisibleKittyToTokenInputBoxes:10,
        wckKittyBuyerDevFees: 1.0375,
        wckUniswapSlippage:1.01,

        // Kitty Bounties
        minimumBidSize:2,
        cancellationFee:1,
        successfulBountyPercentAsFraction: 0.0375,
        numberOfBlocksInDay: 5760, // (60/15) * 60 * 24
        anyGenerationPlaceholder: 65535,
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
        wckAllowanceForContract:{},
        currentKittyBuyPriceInWCK: undefined,
        WCKApprovalInterval: undefined,
        currOwnerOfFeaturedCat: undefined,

        // Kitty Bounties
        currBountyID: 0,
        currDisplayedBountyID: 0,
        totalBounties: 0,
        activeBounties:{},
        fulfillBountyInstructionsBeingShown: false,
        kittySubmittingForBounty: undefined,

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
            'wckAdsContract':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":false,"inputs":[{"name":"_newMinimumRentalPrice","type":"uint256"}],"name":"ownerUpdateMinimumRentalPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minimumPriceIncrementInBasisPoints","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kittyCoreContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_slotId","type":"uint256"},{"name":"_newKittyIdToAdvertise","type":"uint256"},{"name":"_newValuationPrice","type":"uint256"}],"name":"rentAdvertisingSlot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_slotId","type":"uint256"}],"name":"getCurrentPriceToRentAdvertisingSlot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_erc20Address","type":"address"},{"name":"_value","type":"uint256"}],"name":"ownerWithdrawERC20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumRentalPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"ownerWithdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kittySalesContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_kittyId","type":"uint256"}],"name":"ownsKitty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kittySiresContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newMinimumPriceIncrementInBasisPoints","type":"uint256"}],"name":"ownerUpdateMinimumPriceIncrement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newMaxRentalPeriodInBlocks","type":"uint256"}],"name":"ownerUpdateMaxRentalPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"wckContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"advertisingSlots","outputs":[{"name":"kittyIdBeingAdvertised","type":"uint256"},{"name":"blockThatPriceWillResetAt","type":"uint256"},{"name":"valuationPrice","type":"uint256"},{"name":"slotOwner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_slotId","type":"uint256"},{"name":"_kittyId","type":"uint256"}],"name":"changeKittyIdBeingAdvertised","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxRentalPeriodInBlocks","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"slotId","type":"uint256"},{"indexed":false,"name":"kittyIdBeingAdvertised","type":"uint256"},{"indexed":false,"name":"blockThatPriceWillResetAt","type":"uint256"},{"indexed":false,"name":"valuationPrice","type":"uint256"},{"indexed":false,"name":"slotOwner","type":"address"}],"name":"AdvertisingSlotRented","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"slotId","type":"uint256"},{"indexed":false,"name":"newKittyIdBeingAdvertised","type":"uint256"}],"name":"AdvertisingSlotContentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],
                'contractAddress':'0x5148C341B48B626C8Cc2F97507F968868C1cA64e',
            },
            'wckKittyBounties':{
                'source': undefined,
                'instance': undefined,
                'contractABI':[{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"removeCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_referrer","type":"address"}],"name":"withdrawUnsuccessfulBounty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"numCatsRemainingForBountyId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawFeeEarningsForAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kittyCoreAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isCOO","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_geneMask","type":"uint256"},{"name":"_genes","type":"uint256"},{"name":"_earliestAcceptableIdInclusive","type":"uint256"},{"name":"_latestAcceptableIdInclusive","type":"uint256"},{"name":"_generation","type":"uint256"},{"name":"_highestCooldownIndexAccepted","type":"uint256"},{"name":"_minNumBlocksBountyIsValidFor","type":"uint256"},{"name":"_quantity","type":"uint256"},{"name":"_totalAmountOfWCKToLock","type":"uint256"}],"name":"createBountyAndLockFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"removePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"successfulBountyFeeInBasisPoints","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"withdrawBountyWithNoFeesTakenIfContractIsFrozen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_kittyId","type":"uint256"},{"name":"_referrer","type":"address"}],"name":"fulfillBountyAndClaimFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bountyIdToBounty","outputs":[{"name":"geneMask","type":"uint256"},{"name":"genes","type":"uint256"},{"name":"earliestAcceptableIdInclusive","type":"uint128"},{"name":"latestAcceptableIdInclusive","type":"uint128"},{"name":"bountyPricePerCat","type":"uint128"},{"name":"totalValueIncludingFees","type":"uint128"},{"name":"unsuccessfulBountyFeeInWCKWei","type":"uint128"},{"name":"minBlockBountyValidUntil","type":"uint32"},{"name":"quantity","type":"uint32"},{"name":"generation","type":"uint16"},{"name":"highestCooldownIndexAccepted","type":"uint16"},{"name":"bidder","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wrappedKittiesAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newUnsuccessfulBountyFeeInWCKWei","type":"uint256"}],"name":"setUnsuccessfulBountyFeeInWCKWei","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bountyId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newSuccessfulBountyFeeInBasisPoints","type":"uint256"}],"name":"setSuccessfulBountyFeeInBasisPoints","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"unsuccessfulBountyFeeInWCKWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"addressToFeeEarnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"bountyPricePerCat","type":"uint256"},{"indexed":false,"name":"minBlockBountyValidUntil","type":"uint256"},{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"geneMask","type":"uint256"},{"indexed":false,"name":"genes","type":"uint256"},{"indexed":false,"name":"earliestAcceptableIdInclusive","type":"uint256"},{"indexed":false,"name":"latestAcceptableIdInclusive","type":"uint256"},{"indexed":false,"name":"generation","type":"uint256"},{"indexed":false,"name":"highestCooldownIndexAccepted","type":"uint256"},{"indexed":false,"name":"unsuccessfulBountyFeeInWCKWei","type":"uint256"}],"name":"CreateBountyAndLockFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":false,"name":"kittyId","type":"uint256"},{"indexed":false,"name":"bountyHunter","type":"address"},{"indexed":false,"name":"bountyPricePerCat","type":"uint256"},{"indexed":false,"name":"geneMask","type":"uint256"},{"indexed":false,"name":"genes","type":"uint256"},{"indexed":false,"name":"earliestAcceptableIdInclusive","type":"uint256"},{"indexed":false,"name":"latestAcceptableIdInclusive","type":"uint256"},{"indexed":false,"name":"generation","type":"uint256"},{"indexed":false,"name":"highestCooldownIndexAccepted","type":"uint256"},{"indexed":false,"name":"successfulBountyFeeInWCKWei","type":"uint256"}],"name":"FulfillBountyAndClaimFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"withdrawnAmount","type":"uint256"}],"name":"WithdrawBounty","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newSuccessfulBountyFeeInBasisPoints","type":"uint256"}],"name":"SuccessfulBountyFeeInBasisPointsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newUnsuccessfulBountyFeeInWCKWei","type":"uint256"}],"name":"UnsuccessfulBountyFeeInWCKWeiUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"COOAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"COORemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],
                'contractAddress':'0x22fe64dcb38d06c159af302ad43b0f337dbfd940',
            },
        },
    },
    Bounty: {
        quantity: undefined,
        desiredGenesText: undefined,
        desiredGenesPositions: {},
        desiredGenesAsUINT: undefined,
        desiredGeneMask: {},
        desiredGeneMaskAsUINT: undefined,
        desiredGen: undefined,
        desiredCooldown: undefined,
        depositAmountInETH: undefined,
        numberOfDaysToLock: undefined,
        numberOfBlocksToLock: undefined,
    },

    //////////////////////////////////////////////////////////////////////
    // Init
    //////////////////////////////////////////////////////////////////////

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
                    App.fetchAdvertisingSlotContents(0);
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
                App.fetchAdvertisingSlotContents(0);
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
                App.fetchAdvertisingSlotContents(0);
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
            App.Globals.contracts['wckAdsContract'].source = window.web3.eth.contract(App.Globals.contracts['wckAdsContract'].contractABI);
            App.Globals.contracts['wckAdsContract'].instance = App.Globals.contracts['wckAdsContract'].source.at(App.Globals.contracts['wckAdsContract'].contractAddress);
            App.Globals.contracts['wckKittyBounties'].source = window.web3.eth.contract(App.Globals.contracts['wckKittyBounties'].contractABI);
            App.Globals.contracts['wckKittyBounties'].instance = App.Globals.contracts['wckKittyBounties'].source.at(App.Globals.contracts['wckKittyBounties'].contractAddress);
        }
        if(window.web3.eth.accounts[0] !== undefined){
            return App.fetchCurrentBlock();
        }
    },

    fetchCurrentBlock: function(){
        window.web3.eth.getBlockNumber(function(error, result){
            App.Globals.currBlock = result;
            return App.fetchCurrentBounty();
        });
    },

    //////////////////////////////////////////////////////////////////////
    // KittyToToken
    //////////////////////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////////////////////
    // TokenToKitty
    //////////////////////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////////////////////
    // View WCK Balance
    //////////////////////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////////////////////
    // Buy Kitties Using WCK
    //////////////////////////////////////////////////////////////////////

    getWCKApprovedForContractForUser: function(contractName){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            const balance = App.Globals.contracts['wrappedKittiesContract'].instance.allowance(new BigNumber(String(account)),
                new BigNumber(String(App.Globals.contracts[contractName].contractAddress)),
                function(error, result){
                    if(!error) {
                        const allowance = result.toNumber();
                        App.Globals.wckAllowanceForContract[contractName] = allowance;
                        App.getWCKApprovedCallbackForContract(contractName, allowance);
                    }
                    else {
                        console.log(error.message);
                    }
                }
            );
        });
    },

    getWCKApprovedCallbackForContract: function(contractName, allowance){
        if(contractName === 'wckKittyBuyerContract'){
            App.displayWCKKittyBuyingForAllowance(allowance);
        } else if(contractName === 'wckAdsContract'){
            App.displayWCKAdsForAllowance(allowance);
        } else if(contractName === 'wckKittyBounties'){
            App.displayWCKKittyBountiesForAllowance(allowance);
        }
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

    enableApprovalButtonPressed: function(contractName, buttonId){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            App.Globals.contracts['wrappedKittiesContract'].instance.approve(new BigNumber(String(App.Globals.contracts[contractName].contractAddress)),
                                                                        new BigNumber(String(App.Constants.uint256NearlyMax)),
                                                                        {
                                                                            from: account,
                                                                        },
                                                                        function(error, result){
                                                                            if(!error) return App.displayEnableApprovalConfirmation(result, contractName, buttonId);
                                                                            else {
                                                                                console.log(error.message);
                                                                                return App.displayTransactionError(error);
                                                                            }
                                                                        })
        });
    },

    displayEnableApprovalConfirmation: function(result, contractName, buttonId){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById(buttonId).href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById(buttonId).href = "https://etherscan.io/tx/" + String(result);
        }
        document.getElementById(buttonId).target="_blank"
        document.getElementById(buttonId).rel="noopener noreferrer"
        document.getElementById(buttonId).innerText = 'Please Wait, Approval In Progress, Screen Will Change When Transaction Confirms';
        document.getElementById(buttonId).classList.remove('btn-primary');
        document.getElementById(buttonId).classList.add('btn-default');
        App.checkForWCKApprovalAfterInterval(contractName);
    },

    checkForWCKApprovalAfterInterval: function(contractName){
        App.Globals.WCKApprovalInterval = setInterval(function(){
            App.getWCKApprovedForContractForUser(contractName);
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

    //////////////////////////////////////////////////////////////////////
    // Advertise Kitties Using WCK
    //////////////////////////////////////////////////////////////////////

    displayWCKAdsForAllowance: function(allowance){
        if(String(allowance) !== '0'){
            if(App.Globals.WCKApprovalInterval !== undefined){
                clearInterval(App.Globals.WCKApprovalInterval);
                App.Globals.WCKApprovalInterval = undefined;
            }
            App.hideAllDivsInClass('loadingWckAdsApproval');
            App.hideAllDivsInClass('wckAdsBuyingNotEnabled');
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                if(String(App.Globals.currOwnerOfFeaturedCat).toLowerCase() === String(account).toLowerCase()){
                    App.showAllDivsInClass('wckAdsBuyingOwnedByUser');
                } else {
                    App.showAllDivsInClass('wckAdsBuyingEnabled');
                }
            });
        } else {
            App.hideAllDivsInClass('loadingWckAdsApproval');
            App.hideAllDivsInClass('wckAdsBuyingEnabled');
            App.showAllDivsInClass('wckAdsBuyingNotEnabled');
        }
    },

    wckAdsKittyIdEntered: function(kittyId){
        if(kittyId === ''){
            App.hideAllDivsInClass('youDoNotOwnKittyError');
        } else {
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                const balance = App.Globals.contracts['wckAdsContract'].instance.ownsKitty(new BigNumber(String(account)),
                    new BigNumber(String(kittyId)),
                    function(error, result){
                        if(!error) {
                            App.parseResultOfGetOwnsKitty(result);
                        }
                        else {
                            console.log(error.message);
                        }
                    }
                );
            });
        }
    },

    parseResultOfGetOwnsKitty: function(result){
        if(result !== undefined){
            if(result === false){
                App.showAllDivsInClass('youDoNotOwnKittyError');
            } else {
                App.hideAllDivsInClass('youDoNotOwnKittyError');
            }
        }
    },

    wckAdsPriceEntered: function(price){
        if(price === ''){
            App.hideAllDivsInClass('wckAdsFetchingPriceMessage');
            App.hideAllDivsInClass('wckAdsPriceMessage');
        } else {
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                const balance = App.Globals.contracts['wckAdsContract'].instance.getCurrentPriceToRentAdvertisingSlot(new BigNumber(String(0)),
                    function(error, result){
                        if(!error) {
                            App.parseResultOfGetMinWckAdsPrice(result, price);
                        }
                        else {
                            console.log(error.message);
                        }
                    }
                );
            });
        }
    },

    parseResultOfGetMinWckAdsPrice: function(result, price){
        if(result !== undefined){
            if(result.gt(App.toWei(price, 18))){
                const currMinPriceInWCK = App.toEth(result, 18);
                document.getElementById('currMinWckAdsPriceText').innerText = 'You must pay at least ' + String(currMinPriceInWCK) + ' WCK to replace the currently featured CryptoKitty';
                App.showAllDivsInClass('wckAdsPriceMessage');
            } else {
                App.hideAllDivsInClass('wckAdsPriceMessage');
            }
        }
    },

    fetchAdvertisingSlotContents: function(slotId){
        web3.eth.getAccounts(function(error, accounts) {
            if (error) { console.log(error); }
            var account = accounts[0];
            const balance = App.Globals.contracts['wckAdsContract'].instance.advertisingSlots(new BigNumber(String(slotId)),
                function(error, result){
                    if(!error) {
                        App.parseResultOfFetchAdvertisingSlotContents(result, slotId);
                    }
                    else {
                        console.log(error.message);
                    }
                }
            );
        });
    },

    parseResultOfFetchAdvertisingSlotContents: function(result, slotId){
        if(result !== undefined){
            [kittyIdBeingAdvertised, blockThatPriceWillResetAt, valuationPrice, slotOwner] = result;
            App.Globals.currOwnerOfFeaturedCat = slotOwner;
            if(kittyIdBeingAdvertised.toNumber() !== 0){
                document.getElementById('kittyAdLink' + String(slotId)).href = 'https://www.cryptokitties.co/kitty/' + kittyIdBeingAdvertised.toNumber();
                document.getElementById('kittyAdImage' + String(slotId)).src = 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/' + kittyIdBeingAdvertised.toNumber() + '.png';
            } else {
                console.log('Kitty id is 0');
            }
        }
    },

    rentKittyAdButtonPressed: function(){
        const currCatID = document.getElementById('wckAdsKittyIDBox').value;
        const price = document.getElementById('wckAdsPriceBox').value;
        if(currCatID !== '' && price !== ''){
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                App.Globals.contracts['wckAdsContract'].instance.rentAdvertisingSlot(new BigNumber(String(0)),
                                                                            new BigNumber(String(currCatID)),
                                                                            new BigNumber(String(App.toWei(price, 18))),
                                                                            {
                                                                                from: account,
                                                                            },
                                                                            function(error, result){
                                                                                if(!error) return App.displayWckAdsConfirmation(result);
                                                                                else {
                                                                                    console.log(error.message);
                                                                                    return App.displayTransactionError(error);
                                                                                }
                                                                            })
            });
        }
    },

    displayWckAdsConfirmation: function(result){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/tx/" + String(result);
        }
        App.hideAllDivsInClass('advertiseKittiesSection');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
    },

    changeRentedKittyIdButtonPressed: function(){
        const currCatID = document.getElementById('wckAdsCurrentOwnerKittyIDBox').value;
        if(currCatID !== ''){
            web3.eth.getAccounts(function(error, accounts) {
                if (error) { console.log(error); }
                var account = accounts[0];
                App.Globals.contracts['wckAdsContract'].instance.changeKittyIdBeingAdvertised(new BigNumber(String(0)),
                                                                            new BigNumber(String(currCatID)),
                                                                            {
                                                                                from: account,
                                                                            },
                                                                            function(error, result){
                                                                                if(!error) return App.displayWckAdsConfirmation(result);
                                                                                else {
                                                                                    console.log(error.message);
                                                                                    return App.displayTransactionError(error);
                                                                                }
                                                                            })
            });
        }
    },

    displayWckAdsConfirmation: function(result){
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('viewTransactionOnEtherscanButton').href = "https://etherscan.io/tx/" + String(result);
        }
        App.hideAllDivsInClass('advertiseKittiesSection');
        App.showAllDivsInClass('viewTransactionOnEtherscan');
    },

    //////////////////////////////////////////////////////////////////////
    // WCK Kitty Bounties
    //////////////////////////////////////////////////////////////////////

    displayWCKKittyBountiesForAllowance: function(allowance){
        if(String(allowance) !== '0'){
            if(App.Globals.WCKApprovalInterval !== undefined){
                clearInterval(App.Globals.WCKApprovalInterval);
                App.Globals.WCKApprovalInterval = undefined;
            }
            App.hideAllDivsInClass('loadingWCKKittyBountiesApproval');
            App.hideAllDivsInClass('wckKittyBoutiesNotEnabled');
            App.showAllDivsInClass('wckKittyBountiesEnabled');
        } else {
            App.hideAllDivsInClass('loadingWCKKittyBountiesApproval');
            App.hideAllDivsInClass('wckKittyBountiesEnabled');
            App.showAllDivsInClass('wckKittyBoutiesNotEnabled');
        }
    },

    fetchCurrentBounty: function(){
        App.Globals.contracts['wckKittyBounties'].instance.bountyId(function(error, result){
            if(!error){
                App.Globals.totalBounties = result.toNumber();
                const currBountyID = undefined;
                //const currBountyID = App.getBountyIDFromURL();
                if(currBountyID !== undefined
                    && !isNaN(currBountyID)
                    && currBountyID < App.Globals.totalBounties){
                        App.Globals.currBountyID = Number(currBountyID);
                        //App.updateBountyIDInURL(currBountyID);
                } else {
                    App.Globals.currBountyID = App.Globals.totalBounties - 1;
                    if(App.Globals.currBountyID < 0) {
                        App.Globals.currBountyID = 0;
                    }
                    //App.updateBountyIDInURL(App.Globals.currBountyID);
                }
                if(App.Globals.totalBounties !== 0) {
                    App.getBountyForBountyID(App.Globals.currBountyID);
                }
            }
        });
    },

    getBountyForBountyID: function(bountyId){
        App.Globals.contracts['wckKittyBounties'].instance.numCatsRemainingForBountyId((new BigNumber(String(bountyId))), function(error, result){
            if(!error){
                App.Globals.activeBounties[bountyId] = result.toNumber();
                App.Globals.contracts['wckKittyBounties'].instance.bountyIdToBounty((new BigNumber(String(bountyId))), function(error, result){
                    if(!error){
                        App.displayBountyFromContract(result, bountyId);
                    }
                });
            }
        });
    },

    jumpToBountyWithID: function(newBountyId){
        App.Globals.currBountyID = newBountyId;
        App.hideAllDivsInClass("fulfillBountyInstructions");
        App.Globals.fulfillBountyInstructionsBeingShown = false;
        return App.getBountyForBountyID(new BigNumber(String(newBountyId)));
    },

    advanceToNextBounty: function(){
        var newBountyId = Number(App.Globals.currBountyID) - 1;
        if(newBountyId < 0) newBountyId = App.Globals.totalBounties - 1;
        //App.updateBountyIDInURL(newBountyId);
        App.jumpToBountyWithID(newBountyId);
    },

    retreatToPreviousBounty: function(){
        const newBountyId = (Number(App.Globals.currBountyID) + 1) % App.Globals.totalBounties;
        //App.updateBountyIDInURL(newBountyId);
        App.jumpToBountyWithID(newBountyId);
    },

    /*
    getBountyIDFromURL: function(){
        const params = new Map(location.search.slice(1).split('&').map(kv => kv.split('=')));
        if(params.has('bountyID')){
            return params.get('bountyID');
        } else {
            return undefined;
        }
    },

    updateBountyIDInURL: function(bountyID){
        var str = window.location.search;
        str = App.replaceQueryParam('bountyID', bountyID, str);
        const kittyBountiesState = {'bountyID': bountyID};
        window.history.pushState(kittyBountiesState, 'kittyBounties', str);
    },

    replaceQueryParam: function(param, newval, search) {
        var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
        var query = search.replace(regex, "$1").replace(/&$/, '');
        return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
    },*/

    displayBountyFromContract: function(bountyArrayFromContract, bountyId){
        var genesText = App.getDesiredGeneNamesFromGeneMaskUINTAndGenesUINT(bountyArrayFromContract[0], bountyArrayFromContract[1]);
        var numCatsText = App.Globals.activeBounties[bountyId];  //bountyArrayFromContract[6].toNumber();
        if(genesText === '') genesText = 'Any Genes';
        var generationText = bountyArrayFromContract[9].toNumber();
        if(generationText === App.Constants.anyGenerationPlaceholder) generationText = 'Any Generation';
        var earliestIdText = bountyArrayFromContract[2].toNumber();
        if(earliestIdText === 0) earliestIdText = 'Any ID';
        var latestIdText = bountyArrayFromContract[3].toNumber();
        if(latestIdText === Number(App.Constants.uint128NearlyMax)) latestIdText = 'Any ID';
        var minimumCooldownText = App.CooldownDB[bountyArrayFromContract[10].toNumber()];
        var minBlockBountyValidUntil = bountyArrayFromContract[7].toNumber();
        var numBlocksBetweenCurrBlockAndValidUntil = minBlockBountyValidUntil - App.Globals.currBlock;
        var bountyReward = web3.fromWei(String(bountyArrayFromContract[4]), "ether");
        document.getElementById('wantedTitleText').innerText = "Wanted";
        document.getElementById('currentBountyNumCatsText').innerText = "Number of Cats Remaining: \n" + numCatsText;
        document.getElementById('currentBountyGenesText').innerText = "Exact Genes: \n" + genesText;
        document.getElementById('currentBountyGenerationText').innerText = "Exact Generation: \n" + generationText;
        document.getElementById('currentBountyMinimumCooldownText').innerText = "Maximum Cooldown Speed: \n" + minimumCooldownText;
        document.getElementById('currentBountyEarliestIdText').innerText = "Lowest ID willing to accept: \n" + earliestIdText;
        document.getElementById('currentBountyLatestIdText').innerText = "Highest ID willing to accept: \n" + latestIdText;
        if(numBlocksBetweenCurrBlockAndValidUntil > 0){
            const nowInUnixSeconds = new Date().getTime() / 1000;
            const targetTime = nowInUnixSeconds + (15 * numBlocksBetweenCurrBlockAndValidUntil);
            var targetDate = new Date();
            targetDate.setTime(targetTime * 1000);
            var targetTimeAsString = targetDate.toLocaleString();
            document.getElementById('currentBountyLockoutTimeRemainingText').innerText = "Reward cannot be cancelled until at least \nBlock # " + minBlockBountyValidUntil + "\n(which will occur at approximately " + targetTimeAsString +" local time)" + " \nor until the bounty is claimed.";
        } else {
            document.getElementById('currentBountyLockoutTimeRemainingText').innerText = "";
        }
        document.getElementById('currentBountyRewardText').innerText = "REWARD: " + Number(Number(bountyReward).toFixed(6)) + " WCK per cat";
        document.getElementById('currentBountyIDText').innerText = "Bounty #" + bountyId;
        const userCreatedBounty = String(bountyArrayFromContract[11]).toLowerCase() === String(App.Globals.userAccount).toLowerCase();
        const isCancellable = numBlocksBetweenCurrBlockAndValidUntil <= 0;
        App.getBountyIsActiveForBountyId(bountyId, userCreatedBounty, isCancellable);
    },

    getBountyIsActiveForBountyId: function(bountyId, userCreatedBounty, isCancellable){
        App.Globals.contracts['wckKittyBounties'].instance.numCatsRemainingForBountyId((new BigNumber(String(bountyId))), function(error, result){
            if(!error){
                if(result.toNumber() > 0){
                    App.Globals.activeBounties[bountyId] = result.toNumber();
                    App.unmuteBounty(bountyId, userCreatedBounty, isCancellable);
                } else {
                    App.muteBounty(bountyId);
                }
            }
        });
    },

    muteBounty: function(bountyId){
        document.getElementById('fulfillBountyInitialButton').innerText = "Bounty Already Claimed or Cancelled";
        document.getElementById('fulfillBountyInitialButton').href = "javascript:App.doNothing();"
        document.getElementById('fulfillBountyInitialButton').classList.remove('btn-primary');
        document.getElementById('fulfillBountyInitialButton').classList.add('btn-default');
    },

    unmuteBounty: function(bountyId, userCreatedBounty, isCancellable){
        if(userCreatedBounty){
            if(isCancellable){
                document.getElementById('fulfillBountyInitialButton').innerText = "Cancel Bounty";
                document.getElementById('fulfillBountyInitialButton').href = "javascript:App.cancelBountyInitialButtonPressed();"
                document.getElementById('fulfillBountyInitialButton').classList.remove('btn-default');
                document.getElementById('fulfillBountyInitialButton').classList.add('btn-primary');
            } else {
                document.getElementById('fulfillBountyInitialButton').innerText = "Bounty Cannot Be Cancelled While Locked, See Above";
                document.getElementById('fulfillBountyInitialButton').href = "javascript:App.doNothing();"
                document.getElementById('fulfillBountyInitialButton').classList.remove('btn-primary');
                document.getElementById('fulfillBountyInitialButton').classList.add('btn-default');
            }
        } else {
            document.getElementById('fulfillBountyInitialButton').innerText = "Claim Bounty";
            document.getElementById('fulfillBountyInitialButton').href = "javascript:App.fulfillBountyInitialButtonPressed();"
            document.getElementById('fulfillBountyInitialButton').classList.remove('btn-default');
            document.getElementById('fulfillBountyInitialButton').classList.add('btn-primary');
        }
    },

    cancelBountyInitialButtonPressed: function(){
        const bountyId = App.Globals.currBountyID;
        if(App.Globals.activeBounties[bountyId] > 0){
            web3.eth.getAccounts(function(error, accounts) {
                if (error) console.log(error);
                var account = accounts[0];
                App.Globals.contracts['wckKittyBounties'].instance.withdrawUnsuccessfulBounty(new BigNumber(String(App.Globals.currBountyID)),
                                                                            new BigNumber(String(App.Constants.nullAddress)),
                                                                            {
                                                                                from: account,
                                                                            },
                                                                            function(error, result){
                                                                                if(!error) return App.displayCancelBountyConfirmation(result);
                                                                                else {
                                                                                    console.log(error.message);
                                                                                    return App.displayCancelBountyError(error);
                                                                                }
                                                                            })
            });
        }
    },

    displayCancelBountyConfirmation: function(result){
        document.getElementById('fulfillBountyInitialButton').innerText = "View Transaction on Etherscan";
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('fulfillBountyInitialButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('fulfillBountyInitialButton').href = "https://etherscan.io/tx/" + String(result);
        }
        document.getElementById('fulfillBountyInitialButton').target = "_blank";
        document.getElementById('fulfillBountyInitialButton').rel = "noopener noreferrer";
        document.getElementById('fulfillBountyInitialButton').classList.remove('btn-primary');
        document.getElementById('fulfillBountyInitialButton').classList.add('btn-default');
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
            App.Globals.contracts['cryptoCatsCoreContract'].instance.approve(new BigNumber(String(App.Globals.contracts['wckKittyBounties'].contractAddress)),
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
            App.Globals.contracts['wckKittyBounties'].instance.fulfillBountyAndClaimFunds(new BigNumber(String(App.Globals.currBountyID)),
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
        if(App.Bounty.latestId === 0){
            App.Bounty.latestId = App.Constants.uint128NearlyMax;
        }
        web3.eth.getAccounts(function(error, accounts) {
            if (error) console.log(error);
            var account = accounts[0];
            console.log(account);
            App.Globals.contracts['wckKittyBounties'].instance.createBountyAndLockFunds(new BigNumber(String(App.Bounty.desiredGeneMaskAsUINT)),
                                                                        new BigNumber(String(App.Bounty.desiredGenesAsUINT)),
                                                                        new BigNumber(String(App.Bounty.earliestId)),
                                                                        new BigNumber(String(App.Bounty.latestId)),
                                                                        new BigNumber(String(App.Bounty.desiredGen)),
                                                                        new BigNumber(String(App.Bounty.desiredCooldown)),
                                                                        new BigNumber(String(App.Bounty.numberOfBlocksToLock)),
                                                                        new BigNumber(String(App.Bounty.quantity)),
                                                                        new BigNumber(String(web3.toWei(String(App.Bounty.depositAmountInETH), "ether"))),
                                                                        {   from: account,
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
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('fulfillBountyTxnOneButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('fulfillBountyTxnOneButton').href = "https://etherscan.io/tx/" + String(result);
        }
        document.getElementById('fulfillBountyTxnOneButton').target = "_blank";
        document.getElementById('fulfillBountyTxnOneButton').rel = "noopener noreferrer";
        document.getElementById('fulfillBountyTxnOneButton').classList.remove('btn-primary');
        document.getElementById('fulfillBountyTxnOneButton').classList.add('btn-default');
    },

    displayFulfillBountyTxnTwoConfirmation: function(result){
        document.getElementById('fulfillBountyTxnTwoButton').innerText = "View Transaction on Etherscan";
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('fulfillBountyTxnTwoButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('fulfillBountyTxnTwoButton').href = "https://etherscan.io/tx/" + String(result);
        }
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
        if(String(result) === String(App.Constants.nullTransaction)){
            document.getElementById('createBountyViewSentTxnButton').href = "https://etherscan.io/address/" + String(App.Globals.userAccount);
        }else{
            document.getElementById('createBountyViewSentTxnButton').href = "https://etherscan.io/tx/" + String(result);
        }
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

    fetchGenesFromDiv: function(){
        if(App.Bounty.desiredGenesPositions === undefined) App.Bounty.desiredGenesPositions = {};
        if(App.Bounty.desiredGeneMask === undefined) App.Bounty.desiredGeneMask = {};
        for(var i = 0; i < 48; i++){
            var element = document.getElementById('geneSelector' + String(i));
            var selectedGeneIndex = element.value;
            if(selectedGeneIndex !== '32'){
                App.Bounty.desiredGeneMask[i] = '11111';
                App.Bounty.desiredGenesPositions[i] = Number(selectedGeneIndex).toString(2);
                const textToAdd = "\n" + element.options[Number(selectedGeneIndex) + 1].text;
                if(App.Bounty.desiredGenesText === undefined){
                    App.Bounty.desiredGenesText = textToAdd;
                } else {
                    App.Bounty.desiredGenesText += textToAdd
                }
            }
        }
        App.Bounty.desiredGenesAsUINT = App.convertGenePositionsToUINT(App.Bounty.desiredGenesPositions);
        App.Bounty.desiredGeneMaskAsUINT = App.convertGenePositionsToUINT(App.Bounty.desiredGeneMask);
        if(App.Bounty.desiredGenesText === undefined){
            document.getElementById('geneConfirmation').innerText = "Exact Genes: \nAny";
        } else {
            document.getElementById('geneConfirmation').innerText = "Exact Genes: " + App.Bounty.desiredGenesText;
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

    fetchAcceptableIdsFromDiv: function(){
        var earliestAcceptableIdInclusive = Number(document.getElementById('earliestIdInputBox').value);
        var latestAcceptableIdInclusive = Number(document.getElementById('latestIdInputBox').value);
        App.Bounty.earliestId = earliestAcceptableIdInclusive;
        App.Bounty.latestId = latestAcceptableIdInclusive;
        if(earliestAcceptableIdInclusive !== 0){
            document.getElementById('earliestIdConfirmation').innerText = 'Lowest ID Willing To Accept: \n' + App.Bounty.earliestId;
        } else {
            document.getElementById('earliestIdConfirmation').innerText = 'Lowest ID Willing To Accept: \n' + 'Any';
        }
        if(latestAcceptableIdInclusive !== 0){
            document.getElementById('latestIdConfirmation').innerText = 'Highest ID Willing To Accept: \n' + App.Bounty.latestId;
        } else {
            document.getElementById('latestIdConfirmation').innerText = 'Highest ID Willing To Accept: \n' + 'Any';
        }
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
        document.getElementById('depositAmountInETHConfirmation').innerText = "In total, you are depositing: \n " + depositAmountInETHAsNumber.toString() + " WCK \n\n Per cat, that amounts to: \n " + depositAmountPerCat.toString() + " WCK \n\n If successful, the bounty hunter will receive \n " + Number(successfulBountyAmountSent).toString() + " WCK per cat \n(Successful Bounty Fee of 3.75%) \n\n If cancelled, you will receive \n " + Number(cancelledAmountToReturn) + " WCK \n(Cancellation Fee of 1 WCK)";
    },

    fetchNumberOfDaysToLockFromDiv: function(){
        var desiredNumberOfDaysToLock = document.getElementById('numberOfDaysToLockInputBox').value;
        if(desiredNumberOfDaysToLock !== '' && Number(desiredNumberOfDaysToLock) !== 0){
            const desiredNumberOfDaysToLockAsNumber = Number(desiredNumberOfDaysToLock);
            App.Bounty.numberOfDaysToLock = desiredNumberOfDaysToLockAsNumber;
            App.Bounty.numberOfBlocksToLock = Math.floor(desiredNumberOfDaysToLockAsNumber * App.Constants.numberOfBlocksInDay);
            document.getElementById('numberOfDaysToLockConfirmation').innerText = "Number of Days To Lock Your WCK Deposit: \n" + Number(desiredNumberOfDaysToLockAsNumber).toString() + "\nWARNING: This means that you will not be able to cancel your bounty until " + desiredNumberOfDaysToLock + ' days have passed \n(measured in blocks, so not until ' + App.Bounty.numberOfBlocksToLock + ' blocks have passed).\nYour bounty will stay valid until cancelled, even once your lock-time has expired.\nAre you sure that you want to do this?';
            document.getElementById('lockEthAndCreateBountyButton').innerText = "Lock " + App.Bounty.depositAmountInETH.toString() + " WCK For " + Number(desiredNumberOfDaysToLockAsNumber).toString() + " Days and Create Bounty";
        } else {
            App.Bounty.numberOfDaysToLock = 0;
            App.Bounty.numberOfBlocksToLock = 0;
            document.getElementById('numberOfDaysToLockConfirmation').innerText = "You chose for your WCK deposit to not be locked, meaning that you may cancel at any time.";
            document.getElementById('lockEthAndCreateBountyButton').innerText = "Deposit " + App.Bounty.depositAmountInETH.toString() + " WCK and Create Bounty";
        }
    },

    fetchBountyContentsFromDivs: function(){
        App.fetchNumCatsFromDiv();
        App.fetchGenesFromDiv();
        App.fetchGenerationFromDiv();
        App.fetchCooldownFromDiv();
        App.fetchAcceptableIdsFromDiv();
        App.fetchDepositAmountInETH();
        App.fetchNumberOfDaysToLockFromDiv();
    },

    checkIfIShouldProceedToKittyBountiesConfirmationScreen: function(){
        if((!document.getElementById('depositAmountInETHInputBox').validity.valid || document.getElementById('depositAmountInETHInputBox').value === '')){
            App.proceedToKittyBountiesErrorScreen();
        } else if((!document.getElementById('numberOfCatsInputBox').validity.valid || document.getElementById('numberOfCatsInputBox').value === '')){
            App.proceedToNumCatsErrorScreen();
        } else {
            App.proceedToKittyBountiesConfirmationScreen();
        }
    },

    showKittyBountiesHomePageDivs: function(){
        App.showAllDivsInClass('viewCurrentBounties');
        App.showAllDivsInClass('createBountyOptions');
        App.showAllDivsInClass('viewAllBounties');
    },

    hideKittyBountiesHomePageDivs: function(){
        App.hideAllDivsInClass('viewCurrentBounties');
        App.hideAllDivsInClass('createBountyOptions');
        App.hideAllDivsInClass('viewAllBounties');
        App.hideAllDivsInClass('errorWithCreateBountyOptions');
        App.hideAllDivsInClass('errorWithCreateBountyNoNumCatsSpecified');
    },

    proceedToKittyBountiesConfirmationScreen: function(){
        App.fetchBountyContentsFromDivs();
        App.hideKittyBountiesHomePageDivs();
        App.showAllDivsInClass('confirmBountyOptions');
    },

    proceedToKittyBountiesErrorScreen: function(){
        App.showAllDivsInClass('errorWithCreateBountyOptions');
    },

    proceedToNumCatsErrorScreen: function(){
        App.showAllDivsInClass('errorWithCreateBountyNoNumCatsSpecified');
    },

    retreatFromKittyBountiesConfirmationScreen: function(){
        App.hideAllDivsInClass('confirmBountyOptions');
        App.Bounty = {
            desiredGenesText: undefined,
            desiredGenesPositions: {},
            desiredGeneMask: {},
            desiredGen: undefined,
            desiredCooldown: undefined,
            depositAmountInETH: undefined,
            numberOfDaysToLock: undefined,
        };
        App.proceedToKittyBountiesSection();
    },

    padString: function(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    },

    convertGenePositionsToUINT: function(genePositions){
        var blankUINT = '';
        for(var i = 0; i < 256; i++){
            blankUINT += '0';
        }
        var targetUINT = blankUINT;
        var currGenesIndex = targetUINT.length;
        for(var i = 0; i < 48; i++){
            if(genePositions[i] !== undefined){
                var genePositionToAdd = App.padString(String(genePositions[i]), 5);
                targetUINT = targetUINT.substring(0, currGenesIndex - 5) + genePositionToAdd + targetUINT.substring(currGenesIndex, targetUINT.length);
            }
            currGenesIndex -= 5;
        }
        var targetUINTAsBigNumber = new BigNumber(targetUINT, 2)
        return targetUINTAsBigNumber;
    },

    getDesiredGeneNamesFromGeneMaskUINTAndGenesUINT: function(geneMask, genes){
        var desiredGeneNames = '';
        const geneMaskGenePositions = App.convertUINTToGenePositions(geneMask);
        const genePositions = App.convertUINTToGenePositions(genes);
        for(var i = 0; i < 48; i++){
            if(String(geneMaskGenePositions[i]) === '11111'){
                if(desiredGeneNames !== '') desiredGeneNames += ', '
                desiredGeneNames += String(App.retrieveGeneNameForPositionAndGeneNumberAsBinary(i, genePositions[i]));
            }
        }
        return desiredGeneNames;
    },

    retrieveGeneNameForPositionAndGeneNumberAsBinary: function(genePosition, geneNumberAsBinary){
        const geneNumber = parseInt(geneNumberAsBinary, 2);
        return App.retrieveGeneNameForPositionAndGeneNumberAsDecimal(genePosition, geneNumber);
    },

    retrieveGeneNameForPositionAndGeneNumberAsDecimal: function(genePosition, geneNumberAsDecimal){
        return App.GeneDB[genePosition][geneNumberAsDecimal];
    },

    convertUINTToGenePositions: function(genes){
        var genesAsBinary = (new BigNumber(String(genes))).toString(2);
        genesAsBinary = App.padString(genesAsBinary, 256);
        var currGenesIndex = genesAsBinary.length;
        var genePositions = {};
        var currGenePosition = 0;
        while(currGenesIndex > 0){
            var fiveDigitGene = genesAsBinary.substring(currGenesIndex - 5, currGenesIndex);
            if(fiveDigitGene.length < 5) fiveDigitGene = App.padString(fiveDigitGene, 5);
            genePositions[currGenePosition] = fiveDigitGene;
            currGenesIndex -= 5;
            currGenePosition++;
        }
        return genePositions;
    },

    CooldownDB:{
        "0":'Fast (1 min)',
        "1":'Swift (2 min)',
        "2":'Swift (5 min)',
        "3":'Snappy (10 min)',
        "4":'Snappy (30 min)',
        "5":'Brisk (1 hour)',
        "6":'Brisk (2 hours)',
        "7":'Plodding (4 hours)',
        "8":'Plodding (8 hours)',
        "9":'Slow (16 hours)',
        "10":'Slow (24 hours)',
        "11":'Sluggish (2 days)',
        "12":'Sluggish (4 days)',
        "13":'Any Cooldown',
    },

    GeneDB:{
        '0':{
            '0':'savannah (Dominant Trait)',
            "1":'selkirk (Dominant Trait)',
            "2":'chantilly (Dominant Trait)',
            "3":'birman (Dominant Trait)',
            "4":'koladiviya (Dominant Trait)',
            "5":'bobtail (Dominant Trait)',
            "6":'manul (Dominant Trait)',
            "7":'pixiebob (Dominant Trait)',
            "8":'siberian (Dominant Trait)',
            "9":'cymric (Dominant Trait)',
            "10":'chartreux (Dominant Trait)',
            "11":'himalayan (Dominant Trait)',
            "12":'munchkin (Dominant Trait)',
            "13":'sphynx (Dominant Trait)',
            "14":'ragamuffin (Dominant Trait)',
            "15":'ragdoll (Dominant Trait)',
            "16":'norwegianforest (Dominant Trait)',
            "17":'mekong (Dominant Trait)',
            "18":'highlander (Dominant Trait)',
            "19":'balinese (Dominant Trait)',
            "20":'lynx (Dominant Trait)',
            "21":'mainecoon (Dominant Trait)',
            "22":'laperm (Dominant Trait)',
            "23":'persian (Dominant Trait)',
            "24":'fox (Dominant Trait)',
            "25":'kurilian (Dominant Trait)',
            "26":'toyger (Dominant Trait)',
            "27":'manx (Dominant Trait)',
            "28":'lykoi (Dominant Trait)',
            "29":'burmilla (Dominant Trait)',
            "30":'liger (Dominant Trait)',
            "31":'FU31 (Dominant Trait)',
        },
        '1':{
            "0":'savannah (Hidden Trait 1)',
            "1":'selkirk (Hidden Trait 1)',
            "2":'chantilly (Hidden Trait 1)',
            "3":'birman (Hidden Trait 1)',
            "4":'koladiviya (Hidden Trait 1)',
            "5":'bobtail (Hidden Trait 1)',
            "6":'manul (Hidden Trait 1)',
            "7":'pixiebob (Hidden Trait 1)',
            "8":'siberian (Hidden Trait 1)',
            "9":'cymric (Hidden Trait 1)',
            "10":'chartreux (Hidden Trait 1)',
            "11":'himalayan (Hidden Trait 1)',
            "12":'munchkin (Hidden Trait 1)',
            "13":'sphynx (Hidden Trait 1)',
            "14":'ragamuffin (Hidden Trait 1)',
            "15":'ragdoll (Hidden Trait 1)',
            "16":'norwegianforest (Hidden Trait 1)',
            "17":'mekong (Hidden Trait 1)',
            "18":'highlander (Hidden Trait 1)',
            "19":'balinese (Hidden Trait 1)',
            "20":'lynx (Hidden Trait 1)',
            "21":'mainecoon (Hidden Trait 1)',
            "22":'laperm (Hidden Trait 1)',
            "23":'persian (Hidden Trait 1)',
            "24":'fox (Hidden Trait 1)',
            "25":'kurilian (Hidden Trait 1)',
            "26":'toyger (Hidden Trait 1)',
            "27":'manx (Hidden Trait 1)',
            "28":'lykoi (Hidden Trait 1)',
            "29":'burmilla (Hidden Trait 1)',
            "30":'liger (Hidden Trait 1)',
            "31":'FU31 (Hidden Trait 1)',
        },
        '2':{
            "0":'savannah (Hidden Trait 2)',
            "1":'selkirk (Hidden Trait 2)',
            "2":'chantilly (Hidden Trait 2)',
            "3":'birman (Hidden Trait 2)',
            "4":'koladiviya (Hidden Trait 2)',
            "5":'bobtail (Hidden Trait 2)',
            "6":'manul (Hidden Trait 2)',
            "7":'pixiebob (Hidden Trait 2)',
            "8":'siberian (Hidden Trait 2)',
            "9":'cymric (Hidden Trait 2)',
            "10":'chartreux (Hidden Trait 2)',
            "11":'himalayan (Hidden Trait 2)',
            "12":'munchkin (Hidden Trait 2)',
            "13":'sphynx (Hidden Trait 2)',
            "14":'ragamuffin (Hidden Trait 2)',
            "15":'ragdoll (Hidden Trait 2)',
            "16":'norwegianforest (Hidden Trait 2)',
            "17":'mekong (Hidden Trait 2)',
            "18":'highlander (Hidden Trait 2)',
            "19":'balinese (Hidden Trait 2)',
            "20":'lynx (Hidden Trait 2)',
            "21":'mainecoon (Hidden Trait 2)',
            "22":'laperm (Hidden Trait 2)',
            "23":'persian (Hidden Trait 2)',
            "24":'fox (Hidden Trait 2)',
            "25":'kurilian (Hidden Trait 2)',
            "26":'toyger (Hidden Trait 2)',
            "27":'manx (Hidden Trait 2)',
            "28":'lykoi (Hidden Trait 2)',
            "29":'burmilla (Hidden Trait 2)',
            "30":'liger (Hidden Trait 2)',
            "31":'FU31 (Hidden Trait 2)',
        },
        '3':{
            "0":'savannah (Hidden Trait 3)',
            "1":'selkirk (Hidden Trait 3)',
            "2":'chantilly (Hidden Trait 3)',
            "3":'birman (Hidden Trait 3)',
            "4":'koladiviya (Hidden Trait 3)',
            "5":'bobtail (Hidden Trait 3)',
            "6":'manul (Hidden Trait 3)',
            "7":'pixiebob (Hidden Trait 3)',
            "8":'siberian (Hidden Trait 3)',
            "9":'cymric (Hidden Trait 3)',
            "10":'chartreux (Hidden Trait 3)',
            "11":'himalayan (Hidden Trait 3)',
            "12":'munchkin (Hidden Trait 3)',
            "13":'sphynx (Hidden Trait 3)',
            "14":'ragamuffin (Hidden Trait 3)',
            "15":'ragdoll (Hidden Trait 3)',
            "16":'norwegianforest (Hidden Trait 3)',
            "17":'mekong (Hidden Trait 3)',
            "18":'highlander (Hidden Trait 3)',
            "19":'balinese (Hidden Trait 3)',
            "20":'lynx (Hidden Trait 3)',
            "21":'mainecoon (Hidden Trait 3)',
            "22":'laperm (Hidden Trait 3)',
            "23":'persian (Hidden Trait 3)',
            "24":'fox (Hidden Trait 3)',
            "25":'kurilian (Hidden Trait 3)',
            "26":'toyger (Hidden Trait 3)',
            "27":'manx (Hidden Trait 3)',
            "28":'lykoi (Hidden Trait 3)',
            "29":'burmilla (Hidden Trait 3)',
            "30":'liger (Hidden Trait 3)',
            "31":'FU31 (Hidden Trait 3)',
        },
        '4':{
            "0":'vigilante (Dominant Trait)',
            "1":'tiger (Dominant Trait)',
            "2":'rascal (Dominant Trait)',
            "3":'ganado (Dominant Trait)',
            "4":'leopard (Dominant Trait)',
            "5":'camo (Dominant Trait)',
            "6":'rorschach (Dominant Trait)',
            "7":'spangled (Dominant Trait)',
            "8":'calicool (Dominant Trait)',
            "9":'luckystripe (Dominant Trait)',
            "10":'amur (Dominant Trait)',
            "11":'jaguar (Dominant Trait)',
            "12":'spock (Dominant Trait)',
            "13":'mittens (Dominant Trait)',
            "14":'totesbasic_14 (Dominant Trait)',
            "15":'totesbasic_15 (Dominant Trait)',
            "16":'splat (Dominant Trait)',
            "17":'thunderstruck (Dominant Trait)',
            "18":'dippedcone (Dominant Trait)',
            "19":'highsociety (Dominant Trait)',
            "20":'tigerpunk (Dominant Trait)',
            "21":'henna (Dominant Trait)',
            "22":'arcreactor (Dominant Trait)',
            "23":'totesbasic_23 (Dominant Trait)',
            "24":'scorpius (Dominant Trait)',
            "25":'razzledazzle (Dominant Trait)',
            "26":'hotrod (Dominant Trait)',
            "27":'allyouneed (Dominant Trait)',
            "28":'avatar (Dominant Trait)',
            "29":'gyre (Dominant Trait)',
            "30":'moonrise (Dominant Trait)',
            "31":'PA31 (Dominant Trait)',
        },
        '5':{
            "0":'vigilante (Hidden Trait 1)',
            "1":'tiger (Hidden Trait 1)',
            "2":'rascal (Hidden Trait 1)',
            "3":'ganado (Hidden Trait 1)',
            "4":'leopard (Hidden Trait 1)',
            "5":'camo (Hidden Trait 1)',
            "6":'rorschach (Hidden Trait 1)',
            "7":'spangled (Hidden Trait 1)',
            "8":'calicool (Hidden Trait 1)',
            "9":'luckystripe (Hidden Trait 1)',
            "10":'amur (Hidden Trait 1)',
            "11":'jaguar (Hidden Trait 1)',
            "12":'spock (Hidden Trait 1)',
            "13":'mittens (Hidden Trait 1)',
            "14":'totesbasic_14 (Hidden Trait 1)',
            "15":'totesbasic_15 (Hidden Trait 1)',
            "16":'splat (Hidden Trait 1)',
            "17":'thunderstruck (Hidden Trait 1)',
            "18":'dippedcone (Hidden Trait 1)',
            "19":'highsociety (Hidden Trait 1)',
            "20":'tigerpunk (Hidden Trait 1)',
            "21":'henna (Hidden Trait 1)',
            "22":'arcreactor (Hidden Trait 1)',
            "23":'totesbasic_23 (Hidden Trait 1)',
            "24":'scorpius (Hidden Trait 1)',
            "25":'razzledazzle (Hidden Trait 1)',
            "26":'hotrod (Hidden Trait 1)',
            "27":'allyouneed (Hidden Trait 1)',
            "28":'avatar (Hidden Trait 1)',
            "29":'gyre (Hidden Trait 1)',
            "30":'moonrise (Hidden Trait 1)',
            "31":'PA31 (Hidden Trait 1)',
        },
        '6':{
            "0":'vigilante (Hidden Trait 2)',
            "1":'tiger (Hidden Trait 2)',
            "2":'rascal (Hidden Trait 2)',
            "3":'ganado (Hidden Trait 2)',
            "4":'leopard (Hidden Trait 2)',
            "5":'camo (Hidden Trait 2)',
            "6":'rorschach (Hidden Trait 2)',
            "7":'spangled (Hidden Trait 2)',
            "8":'calicool (Hidden Trait 2)',
            "9":'luckystripe (Hidden Trait 2)',
            "10":'amur (Hidden Trait 2)',
            "11":'jaguar (Hidden Trait 2)',
            "12":'spock (Hidden Trait 2)',
            "13":'mittens (Hidden Trait 2)',
            "14":'totesbasic_14 (Hidden Trait 2)',
            "15":'totesbasic_15 (Hidden Trait 2)',
            "16":'splat (Hidden Trait 2)',
            "17":'thunderstruck (Hidden Trait 2)',
            "18":'dippedcone (Hidden Trait 2)',
            "19":'highsociety (Hidden Trait 2)',
            "20":'tigerpunk (Hidden Trait 2)',
            "21":'henna (Hidden Trait 2)',
            "22":'arcreactor (Hidden Trait 2)',
            "23":'totesbasic_23 (Hidden Trait 2)',
            "24":'scorpius (Hidden Trait 2)',
            "25":'razzledazzle (Hidden Trait 2)',
            "26":'hotrod (Hidden Trait 2)',
            "27":'allyouneed (Hidden Trait 2)',
            "28":'avatar (Hidden Trait 2)',
            "29":'gyre (Hidden Trait 2)',
            "30":'moonrise (Hidden Trait 2)',
            "31":'PA31 (Hidden Trait 2)',
        },
        '7':{
            "0":'vigilante (Hidden Trait 3)',
            "1":'tiger (Hidden Trait 3)',
            "2":'rascal (Hidden Trait 3)',
            "3":'ganado (Hidden Trait 3)',
            "4":'leopard (Hidden Trait 3)',
            "5":'camo (Hidden Trait 3)',
            "6":'rorschach (Hidden Trait 3)',
            "7":'spangled (Hidden Trait 3)',
            "8":'calicool (Hidden Trait 3)',
            "9":'luckystripe (Hidden Trait 3)',
            "10":'amur (Hidden Trait 3)',
            "11":'jaguar (Hidden Trait 3)',
            "12":'spock (Hidden Trait 3)',
            "13":'mittens (Hidden Trait 3)',
            "14":'totesbasic_14 (Hidden Trait 3)',
            "15":'totesbasic_15 (Hidden Trait 3)',
            "16":'splat (Hidden Trait 3)',
            "17":'thunderstruck (Hidden Trait 3)',
            "18":'dippedcone (Hidden Trait 3)',
            "19":'highsociety (Hidden Trait 3)',
            "20":'tigerpunk (Hidden Trait 3)',
            "21":'henna (Hidden Trait 3)',
            "22":'arcreactor (Hidden Trait 3)',
            "23":'totesbasic_23 (Hidden Trait 3)',
            "24":'scorpius (Hidden Trait 3)',
            "25":'razzledazzle (Hidden Trait 3)',
            "26":'hotrod (Hidden Trait 3)',
            "27":'allyouneed (Hidden Trait 3)',
            "28":'avatar (Hidden Trait 3)',
            "29":'gyre (Hidden Trait 3)',
            "30":'moonrise (Hidden Trait 3)',
            "31":'PA31 (Hidden Trait 3)',
        },
        '8':{
            "0":'thundergrey (Dominant Trait)',
            "1":'gold (Dominant Trait)',
            "2":'topaz (Dominant Trait)',
            "3":'mintgreen (Dominant Trait)',
            "4":'isotope (Dominant Trait)',
            "5":'sizzurp (Dominant Trait)',
            "6":'chestnut (Dominant Trait)',
            "7":'strawberry (Dominant Trait)',
            "8":'sapphire (Dominant Trait)',
            "9":'forgetmenot (Dominant Trait)',
            "10":'dahlia (Dominant Trait)',
            "11":'coralsunrise (Dominant Trait)',
            "12":'olive (Dominant Trait)',
            "13":'doridnudibranch (Dominant Trait)',
            "14":'parakeet (Dominant Trait)',
            "15":'cyan (Dominant Trait)',
            "16":'pumpkin (Dominant Trait)',
            "17":'limegreen (Dominant Trait)',
            "18":'bridesmaid (Dominant Trait)',
            "19":'bubblegum (Dominant Trait)',
            "20":'twilightsparkle (Dominant Trait)',
            "21":'palejade (Dominant Trait)',
            "22":'pinefresh (Dominant Trait)',
            "23":'eclipse (Dominant Trait)',
            "24":'babypuke (Dominant Trait)',
            "25":'downbythebay (Dominant Trait)',
            "26":'autumnmoon (Dominant Trait)',
            "27":'oasis (Dominant Trait)',
            "28":'gemini (Dominant Trait)',
            "29":'dioscuri (Dominant Trait)',
            "30":'kaleidoscope (Dominant Trait)',
            "31":'EC31 (Dominant Trait)',
        },
        '9':{
            "0":'thundergrey (Hidden Trait 1)',
            "1":'gold (Hidden Trait 1)',
            "2":'topaz (Hidden Trait 1)',
            "3":'mintgreen (Hidden Trait 1)',
            "4":'isotope (Hidden Trait 1)',
            "5":'sizzurp (Hidden Trait 1)',
            "6":'chestnut (Hidden Trait 1)',
            "7":'strawberry (Hidden Trait 1)',
            "8":'sapphire (Hidden Trait 1)',
            "9":'forgetmenot (Hidden Trait 1)',
            "10":'dahlia (Hidden Trait 1)',
            "11":'coralsunrise (Hidden Trait 1)',
            "12":'olive (Hidden Trait 1)',
            "13":'doridnudibranch (Hidden Trait 1)',
            "14":'parakeet (Hidden Trait 1)',
            "15":'cyan (Hidden Trait 1)',
            "16":'pumpkin (Hidden Trait 1)',
            "17":'limegreen (Hidden Trait 1)',
            "18":'bridesmaid (Hidden Trait 1)',
            "19":'bubblegum (Hidden Trait 1)',
            "20":'twilightsparkle (Hidden Trait 1)',
            "21":'palejade (Hidden Trait 1)',
            "22":'pinefresh (Hidden Trait 1)',
            "23":'eclipse (Hidden Trait 1)',
            "24":'babypuke (Hidden Trait 1)',
            "25":'downbythebay (Hidden Trait 1)',
            "26":'autumnmoon (Hidden Trait 1)',
            "27":'oasis (Hidden Trait 1)',
            "28":'gemini (Hidden Trait 1)',
            "29":'dioscuri (Hidden Trait 1)',
            "30":'kaleidoscope (Hidden Trait 1)',
            "31":'EC31 (Hidden Trait 1)',
        },
        '10':{
            "0":'thundergrey (Hidden Trait 2)',
            "1":'gold (Hidden Trait 2)',
            "2":'topaz (Hidden Trait 2)',
            "3":'mintgreen (Hidden Trait 2)',
            "4":'isotope (Hidden Trait 2)',
            "5":'sizzurp (Hidden Trait 2)',
            "6":'chestnut (Hidden Trait 2)',
            "7":'strawberry (Hidden Trait 2)',
            "8":'sapphire (Hidden Trait 2)',
            "9":'forgetmenot (Hidden Trait 2)',
            "10":'dahlia (Hidden Trait 2)',
            "11":'coralsunrise (Hidden Trait 2)',
            "12":'olive (Hidden Trait 2)',
            "13":'doridnudibranch (Hidden Trait 2)',
            "14":'parakeet (Hidden Trait 2)',
            "15":'cyan (Hidden Trait 2)',
            "16":'pumpkin (Hidden Trait 2)',
            "17":'limegreen (Hidden Trait 2)',
            "18":'bridesmaid (Hidden Trait 2)',
            "19":'bubblegum (Hidden Trait 2)',
            "20":'twilightsparkle (Hidden Trait 2)',
            "21":'palejade (Hidden Trait 2)',
            "22":'pinefresh (Hidden Trait 2)',
            "23":'eclipse (Hidden Trait 2)',
            "24":'babypuke (Hidden Trait 2)',
            "25":'downbythebay (Hidden Trait 2)',
            "26":'autumnmoon (Hidden Trait 2)',
            "27":'oasis (Hidden Trait 2)',
            "28":'gemini (Hidden Trait 2)',
            "29":'dioscuri (Hidden Trait 2)',
            "30":'kaleidoscope (Hidden Trait 2)',
            "31":'EC31 (Hidden Trait 2)',
        },
        '11':{
            "0":'thundergrey (Hidden Trait 3)',
            "1":'gold (Hidden Trait 3)',
            "2":'topaz (Hidden Trait 3)',
            "3":'mintgreen (Hidden Trait 3)',
            "4":'isotope (Hidden Trait 3)',
            "5":'sizzurp (Hidden Trait 3)',
            "6":'chestnut (Hidden Trait 3)',
            "7":'strawberry (Hidden Trait 3)',
            "8":'sapphire (Hidden Trait 3)',
            "9":'forgetmenot (Hidden Trait 3)',
            "10":'dahlia (Hidden Trait 3)',
            "11":'coralsunrise (Hidden Trait 3)',
            "12":'olive (Hidden Trait 3)',
            "13":'doridnudibranch (Hidden Trait 3)',
            "14":'parakeet (Hidden Trait 3)',
            "15":'cyan (Hidden Trait 3)',
            "16":'pumpkin (Hidden Trait 3)',
            "17":'limegreen (Hidden Trait 3)',
            "18":'bridesmaid (Hidden Trait 3)',
            "19":'bubblegum (Hidden Trait 3)',
            "20":'twilightsparkle (Hidden Trait 3)',
            "21":'palejade (Hidden Trait 3)',
            "22":'pinefresh (Hidden Trait 3)',
            "23":'eclipse (Hidden Trait 3)',
            "24":'babypuke (Hidden Trait 3)',
            "25":'downbythebay (Hidden Trait 3)',
            "26":'autumnmoon (Hidden Trait 3)',
            "27":'oasis (Hidden Trait 3)',
            "28":'gemini (Hidden Trait 3)',
            "29":'dioscuri (Hidden Trait 3)',
            "30":'kaleidoscope (Hidden Trait 3)',
            "31":'EC31 (Hidden Trait 3)',
        },
        '12':{
            "0":'swarley (Dominant Trait)',
            "1":'wonky (Dominant Trait)',
            "2":'serpent (Dominant Trait)',
            "3":'googly (Dominant Trait)',
            "4":'otaku (Dominant Trait)',
            "5":'simple (Dominant Trait)',
            "6":'crazy (Dominant Trait)',
            "7":'thicccbrowz (Dominant Trait)',
            "8":'caffeine (Dominant Trait)',
            "9":'wowza (Dominant Trait)',
            "10":'baddate (Dominant Trait)',
            "11":'asif (Dominant Trait)',
            "12":'chronic (Dominant Trait)',
            "13":'slyboots (Dominant Trait)',
            "14":'wiley (Dominant Trait)',
            "15":'stunned (Dominant Trait)',
            "16":'chameleon (Dominant Trait)',
            "17":'alien (Dominant Trait)',
            "18":'fabulous (Dominant Trait)',
            "19":'raisedbrow (Dominant Trait)',
            "20":'tendertears (Dominant Trait)',
            "21":'hacker (Dominant Trait)',
            "22":'sass (Dominant Trait)',
            "23":'sweetmeloncakes (Dominant Trait)',
            "24":'oceanid (Dominant Trait)',
            "25":'wingtips (Dominant Trait)',
            "26":'firedup (Dominant Trait)',
            "27":'buzzed (Dominant Trait)',
            "28":'bornwithit (Dominant Trait)',
            "29":'candyshoppe (Dominant Trait)',
            "30":'drama (Dominant Trait)',
            "31":'ES31 (Dominant Trait)',
        },
        '13':{
            "0":'swarley (Hidden Trait 1)',
            "1":'wonky (Hidden Trait 1)',
            "2":'serpent (Hidden Trait 1)',
            "3":'googly (Hidden Trait 1)',
            "4":'otaku (Hidden Trait 1)',
            "5":'simple (Hidden Trait 1)',
            "6":'crazy (Hidden Trait 1)',
            "7":'thicccbrowz (Hidden Trait 1)',
            "8":'caffeine (Hidden Trait 1)',
            "9":'wowza (Hidden Trait 1)',
            "10":'baddate (Hidden Trait 1)',
            "11":'asif (Hidden Trait 1)',
            "12":'chronic (Hidden Trait 1)',
            "13":'slyboots (Hidden Trait 1)',
            "14":'wiley (Hidden Trait 1)',
            "15":'stunned (Hidden Trait 1)',
            "16":'chameleon (Hidden Trait 1)',
            "17":'alien (Hidden Trait 1)',
            "18":'fabulous (Hidden Trait 1)',
            "19":'raisedbrow (Hidden Trait 1)',
            "20":'tendertears (Hidden Trait 1)',
            "21":'hacker (Hidden Trait 1)',
            "22":'sass (Hidden Trait 1)',
            "23":'sweetmeloncakes (Hidden Trait 1)',
            "24":'oceanid (Hidden Trait 1)',
            "25":'wingtips (Hidden Trait 1)',
            "26":'firedup (Hidden Trait 1)',
            "27":'buzzed (Hidden Trait 1)',
            "28":'bornwithit (Hidden Trait 1)',
            "29":'candyshoppe (Hidden Trait 1)',
            "30":'drama (Hidden Trait 1)',
            "31":'ES31 (Hidden Trait 1)',
        },
        '14':{
            "0":'swarley (Hidden Trait 2)',
            "1":'wonky (Hidden Trait 2)',
            "2":'serpent (Hidden Trait 2)',
            "3":'googly (Hidden Trait 2)',
            "4":'otaku (Hidden Trait 2)',
            "5":'simple (Hidden Trait 2)',
            "6":'crazy (Hidden Trait 2)',
            "7":'thicccbrowz (Hidden Trait 2)',
            "8":'caffeine (Hidden Trait 2)',
            "9":'wowza (Hidden Trait 2)',
            "10":'baddate (Hidden Trait 2)',
            "11":'asif (Hidden Trait 2)',
            "12":'chronic (Hidden Trait 2)',
            "13":'slyboots (Hidden Trait 2)',
            "14":'wiley (Hidden Trait 2)',
            "15":'stunned (Hidden Trait 2)',
            "16":'chameleon (Hidden Trait 2)',
            "17":'alien (Hidden Trait 2)',
            "18":'fabulous (Hidden Trait 2)',
            "19":'raisedbrow (Hidden Trait 2)',
            "20":'tendertears (Hidden Trait 2)',
            "21":'hacker (Hidden Trait 2)',
            "22":'sass (Hidden Trait 2)',
            "23":'sweetmeloncakes (Hidden Trait 2)',
            "24":'oceanid (Hidden Trait 2)',
            "25":'wingtips (Hidden Trait 2)',
            "26":'firedup (Hidden Trait 2)',
            "27":'buzzed (Hidden Trait 2)',
            "28":'bornwithit (Hidden Trait 2)',
            "29":'candyshoppe (Hidden Trait 2)',
            "30":'drama (Hidden Trait 2)',
            "31":'ES31 (Hidden Trait 2)',
        },
        '15':{
            "0":'swarley (Hidden Trait 3)',
            "1":'wonky (Hidden Trait 3)',
            "2":'serpent (Hidden Trait 3)',
            "3":'googly (Hidden Trait 3)',
            "4":'otaku (Hidden Trait 3)',
            "5":'simple (Hidden Trait 3)',
            "6":'crazy (Hidden Trait 3)',
            "7":'thicccbrowz (Hidden Trait 3)',
            "8":'caffeine (Hidden Trait 3)',
            "9":'wowza (Hidden Trait 3)',
            "10":'baddate (Hidden Trait 3)',
            "11":'asif (Hidden Trait 3)',
            "12":'chronic (Hidden Trait 3)',
            "13":'slyboots (Hidden Trait 3)',
            "14":'wiley (Hidden Trait 3)',
            "15":'stunned (Hidden Trait 3)',
            "16":'chameleon (Hidden Trait 3)',
            "17":'alien (Hidden Trait 3)',
            "18":'fabulous (Hidden Trait 3)',
            "19":'raisedbrow (Hidden Trait 3)',
            "20":'tendertears (Hidden Trait 3)',
            "21":'hacker (Hidden Trait 3)',
            "22":'sass (Hidden Trait 3)',
            "23":'sweetmeloncakes (Hidden Trait 3)',
            "24":'oceanid (Hidden Trait 3)',
            "25":'wingtips (Hidden Trait 3)',
            "26":'firedup (Hidden Trait 3)',
            "27":'buzzed (Hidden Trait 3)',
            "28":'bornwithit (Hidden Trait 3)',
            "29":'candyshoppe (Hidden Trait 3)',
            "30":'drama (Hidden Trait 3)',
            "31":'ES31 (Hidden Trait 3)',
        },
        '16':{
            "0":'shadowgrey (Dominant Trait)',
            "1":'salmon (Dominant Trait)',
            "2":'meowgarine (Dominant Trait)',
            "3":'orangesoda (Dominant Trait)',
            "4":'cottoncandy (Dominant Trait)',
            "5":'mauveover (Dominant Trait)',
            "6":'aquamarine (Dominant Trait)',
            "7":'nachocheez (Dominant Trait)',
            "8":'harbourfog (Dominant Trait)',
            "9":'cinderella (Dominant Trait)',
            "10":'greymatter (Dominant Trait)',
            "11":'tundra (Dominant Trait)',
            "12":'brownies (Dominant Trait)',
            "13":'dragonfruit (Dominant Trait)',
            "14":'hintomint (Dominant Trait)',
            "15":'bananacream (Dominant Trait)',
            "16":'cloudwhite (Dominant Trait)',
            "17":'cornflower (Dominant Trait)',
            "18":'oldlace (Dominant Trait)',
            "19":'koala (Dominant Trait)',
            "20":'lavender (Dominant Trait)',
            "21":'glacier (Dominant Trait)',
            "22":'redvelvet (Dominant Trait)',
            "23":'verdigris (Dominant Trait)',
            "24":'icicle (Dominant Trait)',
            "25":'onyx (Dominant Trait)',
            "26":'hyacinth (Dominant Trait)',
            "27":'martian (Dominant Trait)',
            "28":'hotcocoa (Dominant Trait)',
            "29":'shamrock (Dominant Trait)',
            "30":'firstblush (Dominant Trait)',
            "31":'BC31 (Dominant Trait)',
        },
        '17':{
            "0":'shadowgrey (Hidden Trait 1)',
            "1":'salmon (Hidden Trait 1)',
            "2":'meowgarine (Hidden Trait 1)',
            "3":'orangesoda (Hidden Trait 1)',
            "4":'cottoncandy (Hidden Trait 1)',
            "5":'mauveover (Hidden Trait 1)',
            "6":'aquamarine (Hidden Trait 1)',
            "7":'nachocheez (Hidden Trait 1)',
            "8":'harbourfog (Hidden Trait 1)',
            "9":'cinderella (Hidden Trait 1)',
            "10":'greymatter (Hidden Trait 1)',
            "11":'tundra (Hidden Trait 1)',
            "12":'brownies (Hidden Trait 1)',
            "13":'dragonfruit (Hidden Trait 1)',
            "14":'hintomint (Hidden Trait 1)',
            "15":'bananacream (Hidden Trait 1)',
            "16":'cloudwhite (Hidden Trait 1)',
            "17":'cornflower (Hidden Trait 1)',
            "18":'oldlace (Hidden Trait 1)',
            "19":'koala (Hidden Trait 1)',
            "20":'lavender (Hidden Trait 1)',
            "21":'glacier (Hidden Trait 1)',
            "22":'redvelvet (Hidden Trait 1)',
            "23":'verdigris (Hidden Trait 1)',
            "24":'icicle (Hidden Trait 1)',
            "25":'onyx (Hidden Trait 1)',
            "26":'hyacinth (Hidden Trait 1)',
            "27":'martian (Hidden Trait 1)',
            "28":'hotcocoa (Hidden Trait 1)',
            "29":'shamrock (Hidden Trait 1)',
            "30":'firstblush (Hidden Trait 1)',
            "31":'BC31 (Hidden Trait 1)',
        },
        '18':{
            "0":'shadowgrey (Hidden Trait 2)',
            "1":'salmon (Hidden Trait 2)',
            "2":'meowgarine (Hidden Trait 2)',
            "3":'orangesoda (Hidden Trait 2)',
            "4":'cottoncandy (Hidden Trait 2)',
            "5":'mauveover (Hidden Trait 2)',
            "6":'aquamarine (Hidden Trait 2)',
            "7":'nachocheez (Hidden Trait 2)',
            "8":'harbourfog (Hidden Trait 2)',
            "9":'cinderella (Hidden Trait 2)',
            "10":'greymatter (Hidden Trait 2)',
            "11":'tundra (Hidden Trait 2)',
            "12":'brownies (Hidden Trait 2)',
            "13":'dragonfruit (Hidden Trait 2)',
            "14":'hintomint (Hidden Trait 2)',
            "15":'bananacream (Hidden Trait 2)',
            "16":'cloudwhite (Hidden Trait 2)',
            "17":'cornflower (Hidden Trait 2)',
            "18":'oldlace (Hidden Trait 2)',
            "19":'koala (Hidden Trait 2)',
            "20":'lavender (Hidden Trait 2)',
            "21":'glacier (Hidden Trait 2)',
            "22":'redvelvet (Hidden Trait 2)',
            "23":'verdigris (Hidden Trait 2)',
            "24":'icicle (Hidden Trait 2)',
            "25":'onyx (Hidden Trait 2)',
            "26":'hyacinth (Hidden Trait 2)',
            "27":'martian (Hidden Trait 2)',
            "28":'hotcocoa (Hidden Trait 2)',
            "29":'shamrock (Hidden Trait 2)',
            "30":'firstblush (Hidden Trait 2)',
            "31":'BC31 (Hidden Trait 2)',
        },
        '19':{
            "0":'shadowgrey (Hidden Trait 3)',
            "1":'salmon (Hidden Trait 3)',
            "2":'meowgarine (Hidden Trait 3)',
            "3":'orangesoda (Hidden Trait 3)',
            "4":'cottoncandy (Hidden Trait 3)',
            "5":'mauveover (Hidden Trait 3)',
            "6":'aquamarine (Hidden Trait 3)',
            "7":'nachocheez (Hidden Trait 3)',
            "8":'harbourfog (Hidden Trait 3)',
            "9":'cinderella (Hidden Trait 3)',
            "10":'greymatter (Hidden Trait 3)',
            "11":'tundra (Hidden Trait 3)',
            "12":'brownies (Hidden Trait 3)',
            "13":'dragonfruit (Hidden Trait 3)',
            "14":'hintomint (Hidden Trait 3)',
            "15":'bananacream (Hidden Trait 3)',
            "16":'cloudwhite (Hidden Trait 3)',
            "17":'cornflower (Hidden Trait 3)',
            "18":'oldlace (Hidden Trait 3)',
            "19":'koala (Hidden Trait 3)',
            "20":'lavender (Hidden Trait 3)',
            "21":'glacier (Hidden Trait 3)',
            "22":'redvelvet (Hidden Trait 3)',
            "23":'verdigris (Hidden Trait 3)',
            "24":'icicle (Hidden Trait 3)',
            "25":'onyx (Hidden Trait 3)',
            "26":'hyacinth (Hidden Trait 3)',
            "27":'martian (Hidden Trait 3)',
            "28":'hotcocoa (Hidden Trait 3)',
            "29":'shamrock (Hidden Trait 3)',
            "30":'firstblush (Hidden Trait 3)',
            "31":'BC31 (Hidden Trait 3)',
        },
        '20':{
            "0":'cyborg (Dominant Trait)',
            "1":'springcrocus (Dominant Trait)',
            "2":'egyptiankohl (Dominant Trait)',
            "3":'poisonberry (Dominant Trait)',
            "4":'lilac (Dominant Trait)',
            "5":'apricot (Dominant Trait)',
            "6":'royalpurple (Dominant Trait)',
            "7":'padparadscha (Dominant Trait)',
            "8":'swampgreen (Dominant Trait)',
            "9":'violet (Dominant Trait)',
            "10":'scarlet (Dominant Trait)',
            "11":'barkbrown (Dominant Trait)',
            "12":'coffee (Dominant Trait)',
            "13":'lemonade (Dominant Trait)',
            "14":'chocolate (Dominant Trait)',
            "15":'butterscotch (Dominant Trait)',
            "16":'ooze (Dominant Trait)',
            "17":'safetyvest (Dominant Trait)',
            "18":'turtleback (Dominant Trait)',
            "19":'rosequartz (Dominant Trait)',
            "20":'wolfgrey (Dominant Trait)',
            "21":'cerulian (Dominant Trait)',
            "22":'skyblue (Dominant Trait)',
            "23":'garnet (Dominant Trait)',
            "24":'peppermint (Dominant Trait)',
            "25":'universe (Dominant Trait)',
            "26":'royalblue (Dominant Trait)',
            "27":'mertail (Dominant Trait)',
            "28":'inflatablepool (Dominant Trait)',
            "29":'pearl (Dominant Trait)',
            "30":'prairierose (Dominant Trait)',
            "31":'HC31 (Dominant Trait)',
        },
        '21':{
            "0":'cyborg (Hidden Trait 1)',
            "1":'springcrocus (Hidden Trait 1)',
            "2":'egyptiankohl (Hidden Trait 1)',
            "3":'poisonberry (Hidden Trait 1)',
            "4":'lilac (Hidden Trait 1)',
            "5":'apricot (Hidden Trait 1)',
            "6":'royalpurple (Hidden Trait 1)',
            "7":'padparadscha (Hidden Trait 1)',
            "8":'swampgreen (Hidden Trait 1)',
            "9":'violet (Hidden Trait 1)',
            "10":'scarlet (Hidden Trait 1)',
            "11":'barkbrown (Hidden Trait 1)',
            "12":'coffee (Hidden Trait 1)',
            "13":'lemonade (Hidden Trait 1)',
            "14":'chocolate (Hidden Trait 1)',
            "15":'butterscotch (Hidden Trait 1)',
            "16":'ooze (Hidden Trait 1)',
            "17":'safetyvest (Hidden Trait 1)',
            "18":'turtleback (Hidden Trait 1)',
            "19":'rosequartz (Hidden Trait 1)',
            "20":'wolfgrey (Hidden Trait 1)',
            "21":'cerulian (Hidden Trait 1)',
            "22":'skyblue (Hidden Trait 1)',
            "23":'garnet (Hidden Trait 1)',
            "24":'peppermint (Hidden Trait 1)',
            "25":'universe (Hidden Trait 1)',
            "26":'royalblue (Hidden Trait 1)',
            "27":'mertail (Hidden Trait 1)',
            "28":'inflatablepool (Hidden Trait 1)',
            "29":'pearl (Hidden Trait 1)',
            "30":'prairierose (Hidden Trait 1)',
            "31":'HC31 (Hidden Trait 1)',
        },
        '22':{
            "0":'cyborg (Hidden Trait 2)',
            "1":'springcrocus (Hidden Trait 2)',
            "2":'egyptiankohl (Hidden Trait 2)',
            "3":'poisonberry (Hidden Trait 2)',
            "4":'lilac (Hidden Trait 2)',
            "5":'apricot (Hidden Trait 2)',
            "6":'royalpurple (Hidden Trait 2)',
            "7":'padparadscha (Hidden Trait 2)',
            "8":'swampgreen (Hidden Trait 2)',
            "9":'violet (Hidden Trait 2)',
            "10":'scarlet (Hidden Trait 2)',
            "11":'barkbrown (Hidden Trait 2)',
            "12":'coffee (Hidden Trait 2)',
            "13":'lemonade (Hidden Trait 2)',
            "14":'chocolate (Hidden Trait 2)',
            "15":'butterscotch (Hidden Trait 2)',
            "16":'ooze (Hidden Trait 2)',
            "17":'safetyvest (Hidden Trait 2)',
            "18":'turtleback (Hidden Trait 2)',
            "19":'rosequartz (Hidden Trait 2)',
            "20":'wolfgrey (Hidden Trait 2)',
            "21":'cerulian (Hidden Trait 2)',
            "22":'skyblue (Hidden Trait 2)',
            "23":'garnet (Hidden Trait 2)',
            "24":'peppermint (Hidden Trait 2)',
            "25":'universe (Hidden Trait 2)',
            "26":'royalblue (Hidden Trait 2)',
            "27":'mertail (Hidden Trait 2)',
            "28":'inflatablepool (Hidden Trait 2)',
            "29":'pearl (Hidden Trait 2)',
            "30":'prairierose (Hidden Trait 2)',
            "31":'HC31 (Hidden Trait 2)',
        },
        '23':{
            "0":'cyborg (Hidden Trait 3)',
            "1":'springcrocus (Hidden Trait 3)',
            "2":'egyptiankohl (Hidden Trait 3)',
            "3":'poisonberry (Hidden Trait 3)',
            "4":'lilac (Hidden Trait 3)',
            "5":'apricot (Hidden Trait 3)',
            "6":'royalpurple (Hidden Trait 3)',
            "7":'padparadscha (Hidden Trait 3)',
            "8":'swampgreen (Hidden Trait 3)',
            "9":'violet (Hidden Trait 3)',
            "10":'scarlet (Hidden Trait 3)',
            "11":'barkbrown (Hidden Trait 3)',
            "12":'coffee (Hidden Trait 3)',
            "13":'lemonade (Hidden Trait 3)',
            "14":'chocolate (Hidden Trait 3)',
            "15":'butterscotch (Hidden Trait 3)',
            "16":'ooze (Hidden Trait 3)',
            "17":'safetyvest (Hidden Trait 3)',
            "18":'turtleback (Hidden Trait 3)',
            "19":'rosequartz (Hidden Trait 3)',
            "20":'wolfgrey (Hidden Trait 3)',
            "21":'cerulian (Hidden Trait 3)',
            "22":'skyblue (Hidden Trait 3)',
            "23":'garnet (Hidden Trait 3)',
            "24":'peppermint (Hidden Trait 3)',
            "25":'universe (Hidden Trait 3)',
            "26":'royalblue (Hidden Trait 3)',
            "27":'mertail (Hidden Trait 3)',
            "28":'inflatablepool (Hidden Trait 3)',
            "29":'pearl (Hidden Trait 3)',
            "30":'prairierose (Hidden Trait 3)',
            "31":'HC31 (Hidden Trait 3)',
        },
        '24':{
            "0":'belleblue (Dominant Trait)',
            "1":'sandalwood (Dominant Trait)',
            "2":'peach (Dominant Trait)',
            "3":'icy (Dominant Trait)',
            "4":'granitegrey (Dominant Trait)',
            "5":'cashewmilk (Dominant Trait)',
            "6":'kittencream (Dominant Trait)',
            "7":'emeraldgreen (Dominant Trait)',
            "8":'kalahari (Dominant Trait)',
            "9":'shale (Dominant Trait)',
            "10":'purplehaze (Dominant Trait)',
            "11":'hanauma (Dominant Trait)',
            "12":'azaleablush (Dominant Trait)',
            "13":'missmuffett (Dominant Trait)',
            "14":'morningglory (Dominant Trait)',
            "15":'frosting (Dominant Trait)',
            "16":'daffodil (Dominant Trait)',
            "17":'flamingo (Dominant Trait)',
            "18":'buttercup (Dominant Trait)',
            "19":'bloodred (Dominant Trait)',
            "20":'atlantis (Dominant Trait)',
            "21":'summerbonnet (Dominant Trait)',
            "22":'periwinkle (Dominant Trait)',
            "23":'patrickstarfish (Dominant Trait)',
            "24":'seafoam (Dominant Trait)',
            "25":'cobalt (Dominant Trait)',
            "26":'mallowflower (Dominant Trait)',
            "27":'mintmacaron (Dominant Trait)',
            "28":'sully (Dominant Trait)',
            "29":'fallspice (Dominant Trait)',
            "30":'dreamboat (Dominant Trait)',
            "31":'AC31 (Dominant Trait)',
        },
        '25':{
            "0":'belleblue (Hidden Trait 1)',
            "1":'sandalwood (Hidden Trait 1)',
            "2":'peach (Hidden Trait 1)',
            "3":'icy (Hidden Trait 1)',
            "4":'granitegrey (Hidden Trait 1)',
            "5":'cashewmilk (Hidden Trait 1)',
            "6":'kittencream (Hidden Trait 1)',
            "7":'emeraldgreen (Hidden Trait 1)',
            "8":'kalahari (Hidden Trait 1)',
            "9":'shale (Hidden Trait 1)',
            "10":'purplehaze (Hidden Trait 1)',
            "11":'hanauma (Hidden Trait 1)',
            "12":'azaleablush (Hidden Trait 1)',
            "13":'missmuffett (Hidden Trait 1)',
            "14":'morningglory (Hidden Trait 1)',
            "15":'frosting (Hidden Trait 1)',
            "16":'daffodil (Hidden Trait 1)',
            "17":'flamingo (Hidden Trait 1)',
            "18":'buttercup (Hidden Trait 1)',
            "19":'bloodred (Hidden Trait 1)',
            "20":'atlantis (Hidden Trait 1)',
            "21":'summerbonnet (Hidden Trait 1)',
            "22":'periwinkle (Hidden Trait 1)',
            "23":'patrickstarfish (Hidden Trait 1)',
            "24":'seafoam (Hidden Trait 1)',
            "25":'cobalt (Hidden Trait 1)',
            "26":'mallowflower (Hidden Trait 1)',
            "27":'mintmacaron (Hidden Trait 1)',
            "28":'sully (Hidden Trait 1)',
            "29":'fallspice (Hidden Trait 1)',
            "30":'dreamboat (Hidden Trait 1)',
            "31":'AC31 (Hidden Trait 1)',
        },
        '26':{
            "0":'belleblue (Hidden Trait 2)',
            "1":'sandalwood (Hidden Trait 2)',
            "2":'peach (Hidden Trait 2)',
            "3":'icy (Hidden Trait 2)',
            "4":'granitegrey (Hidden Trait 2)',
            "5":'cashewmilk (Hidden Trait 2)',
            "6":'kittencream (Hidden Trait 2)',
            "7":'emeraldgreen (Hidden Trait 2)',
            "8":'kalahari (Hidden Trait 2)',
            "9":'shale (Hidden Trait 2)',
            "10":'purplehaze (Hidden Trait 2)',
            "11":'hanauma (Hidden Trait 2)',
            "12":'azaleablush (Hidden Trait 2)',
            "13":'missmuffett (Hidden Trait 2)',
            "14":'morningglory (Hidden Trait 2)',
            "15":'frosting (Hidden Trait 2)',
            "16":'daffodil (Hidden Trait 2)',
            "17":'flamingo (Hidden Trait 2)',
            "18":'buttercup (Hidden Trait 2)',
            "19":'bloodred (Hidden Trait 2)',
            "20":'atlantis (Hidden Trait 2)',
            "21":'summerbonnet (Hidden Trait 2)',
            "22":'periwinkle (Hidden Trait 2)',
            "23":'patrickstarfish (Hidden Trait 2)',
            "24":'seafoam (Hidden Trait 2)',
            "25":'cobalt (Hidden Trait 2)',
            "26":'mallowflower (Hidden Trait 2)',
            "27":'mintmacaron (Hidden Trait 2)',
            "28":'sully (Hidden Trait 2)',
            "29":'fallspice (Hidden Trait 2)',
            "30":'dreamboat (Hidden Trait 2)',
            "31":'AC31 (Hidden Trait 2)',
        },
        '27':{
            "0":'belleblue (Hidden Trait 3)',
            "1":'sandalwood (Hidden Trait 3)',
            "2":'peach (Hidden Trait 3)',
            "3":'icy (Hidden Trait 3)',
            "4":'granitegrey (Hidden Trait 3)',
            "5":'cashewmilk (Hidden Trait 3)',
            "6":'kittencream (Hidden Trait 3)',
            "7":'emeraldgreen (Hidden Trait 3)',
            "8":'kalahari (Hidden Trait 3)',
            "9":'shale (Hidden Trait 3)',
            "10":'purplehaze (Hidden Trait 3)',
            "11":'hanauma (Hidden Trait 3)',
            "12":'azaleablush (Hidden Trait 3)',
            "13":'missmuffett (Hidden Trait 3)',
            "14":'morningglory (Hidden Trait 3)',
            "15":'frosting (Hidden Trait 3)',
            "16":'daffodil (Hidden Trait 3)',
            "17":'flamingo (Hidden Trait 3)',
            "18":'buttercup (Hidden Trait 3)',
            "19":'bloodred (Hidden Trait 3)',
            "20":'atlantis (Hidden Trait 3)',
            "21":'summerbonnet (Hidden Trait 3)',
            "22":'periwinkle (Hidden Trait 3)',
            "23":'patrickstarfish (Hidden Trait 3)',
            "24":'seafoam (Hidden Trait 3)',
            "25":'cobalt (Hidden Trait 3)',
            "26":'mallowflower (Hidden Trait 3)',
            "27":'mintmacaron (Hidden Trait 3)',
            "28":'sully (Hidden Trait 3)',
            "29":'fallspice (Hidden Trait 3)',
            "30":'dreamboat (Hidden Trait 3)',
            "31":'AC31 (Hidden Trait 3)',
        },
        '28':{
            "0":'WE00 (Dominant Trait)',
            "1":'WE01 (Dominant Trait)',
            "2":'WE02 (Dominant Trait)',
            "3":'WE03 (Dominant Trait)',
            "4":'WE04 (Dominant Trait)',
            "5":'WE05 (Dominant Trait)',
            "6":'WE06 (Dominant Trait)',
            "7":'WE07 (Dominant Trait)',
            "8":'WE08 (Dominant Trait)',
            "9":'WE09 (Dominant Trait)',
            "10":'WE10 (Dominant Trait)',
            "11":'WE11 (Dominant Trait)',
            "12":'WE12 (Dominant Trait)',
            "13":'WE13 (Dominant Trait)',
            "14":'WE14 (Dominant Trait)',
            "15":'WE15 (Dominant Trait)',
            "16":'littlefoot (Dominant Trait)',
            "17":'elk (Dominant Trait)',
            "18":'ducky (Dominant Trait)',
            "19":'trioculus (Dominant Trait)',
            "20":'daemonwings (Dominant Trait)',
            "21":'featherbrain (Dominant Trait)',
            "22":'flapflap (Dominant Trait)',
            "23":'daemonhorns (Dominant Trait)',
            "24":'dragontail (Dominant Trait)',
            "25":'aflutter (Dominant Trait)',
            "26":'foghornpawhorn (Dominant Trait)',
            "27":'unicorn (Dominant Trait)',
            "28":'dragonwings (Dominant Trait)',
            "29":'alicorn (Dominant Trait)',
            "30":'wyrm (Dominant Trait)',
            "31":'WE31 (Dominant Trait)',
        },
        '29':{
            "0":'WE00 (Hidden Trait 1)',
            "1":'WE01 (Hidden Trait 1)',
            "2":'WE02 (Hidden Trait 1)',
            "3":'WE03 (Hidden Trait 1)',
            "4":'WE04 (Hidden Trait 1)',
            "5":'WE05 (Hidden Trait 1)',
            "6":'WE06 (Hidden Trait 1)',
            "7":'WE07 (Hidden Trait 1)',
            "8":'WE08 (Hidden Trait 1)',
            "9":'WE09 (Hidden Trait 1)',
            "10":'WE10 (Hidden Trait 1)',
            "11":'WE11 (Hidden Trait 1)',
            "12":'WE12 (Hidden Trait 1)',
            "13":'WE13 (Hidden Trait 1)',
            "14":'WE14 (Hidden Trait 1)',
            "15":'WE15 (Hidden Trait 1)',
            "16":'littlefoot (Hidden Trait 1)',
            "17":'elk (Hidden Trait 1)',
            "18":'ducky (Hidden Trait 1)',
            "19":'trioculus (Hidden Trait 1)',
            "20":'daemonwings (Hidden Trait 1)',
            "21":'featherbrain (Hidden Trait 1)',
            "22":'flapflap (Hidden Trait 1)',
            "23":'daemonhorns (Hidden Trait 1)',
            "24":'dragontail (Hidden Trait 1)',
            "25":'aflutter (Hidden Trait 1)',
            "26":'foghornpawhorn (Hidden Trait 1)',
            "27":'unicorn (Hidden Trait 1)',
            "28":'dragonwings (Hidden Trait 1)',
            "29":'alicorn (Hidden Trait 1)',
            "30":'wyrm (Hidden Trait 1)',
            "31":'WE31 (Hidden Trait 1)',
        },
        '30':{
            "0":'WE00 (Hidden Trait 2)',
            "1":'WE01 (Hidden Trait 2)',
            "2":'WE02 (Hidden Trait 2)',
            "3":'WE03 (Hidden Trait 2)',
            "4":'WE04 (Hidden Trait 2)',
            "5":'WE05 (Hidden Trait 2)',
            "6":'WE06 (Hidden Trait 2)',
            "7":'WE07 (Hidden Trait 2)',
            "8":'WE08 (Hidden Trait 2)',
            "9":'WE09 (Hidden Trait 2)',
            "10":'WE10 (Hidden Trait 2)',
            "11":'WE11 (Hidden Trait 2)',
            "12":'WE12 (Hidden Trait 2)',
            "13":'WE13 (Hidden Trait 2)',
            "14":'WE14 (Hidden Trait 2)',
            "15":'WE15 (Hidden Trait 2)',
            "16":'littlefoot (Hidden Trait 2)',
            "17":'elk (Hidden Trait 2)',
            "18":'ducky (Hidden Trait 2)',
            "19":'trioculus (Hidden Trait 2)',
            "20":'daemonwings (Hidden Trait 2)',
            "21":'featherbrain (Hidden Trait 2)',
            "22":'flapflap (Hidden Trait 2)',
            "23":'daemonhorns (Hidden Trait 2)',
            "24":'dragontail (Hidden Trait 2)',
            "25":'aflutter (Hidden Trait 2)',
            "26":'foghornpawhorn (Hidden Trait 2)',
            "27":'unicorn (Hidden Trait 2)',
            "28":'dragonwings (Hidden Trait 2)',
            "29":'alicorn (Hidden Trait 2)',
            "30":'wyrm (Hidden Trait 2)',
            "31":'WE31 (Hidden Trait 2)',
        },
        '31':{
            "0":'WE00 (Hidden Trait 3)',
            "1":'WE01 (Hidden Trait 3)',
            "2":'WE02 (Hidden Trait 3)',
            "3":'WE03 (Hidden Trait 3)',
            "4":'WE04 (Hidden Trait 3)',
            "5":'WE05 (Hidden Trait 3)',
            "6":'WE06 (Hidden Trait 3)',
            "7":'WE07 (Hidden Trait 3)',
            "8":'WE08 (Hidden Trait 3)',
            "9":'WE09 (Hidden Trait 3)',
            "10":'WE10 (Hidden Trait 3)',
            "11":'WE11 (Hidden Trait 3)',
            "12":'WE12 (Hidden Trait 3)',
            "13":'WE13 (Hidden Trait 3)',
            "14":'WE14 (Hidden Trait 3)',
            "15":'WE15 (Hidden Trait 3)',
            "16":'littlefoot (Hidden Trait 3)',
            "17":'elk (Hidden Trait 3)',
            "18":'ducky (Hidden Trait 3)',
            "19":'trioculus (Hidden Trait 3)',
            "20":'daemonwings (Hidden Trait 3)',
            "21":'featherbrain (Hidden Trait 3)',
            "22":'flapflap (Hidden Trait 3)',
            "23":'daemonhorns (Hidden Trait 3)',
            "24":'dragontail (Hidden Trait 3)',
            "25":'aflutter (Hidden Trait 3)',
            "26":'foghornpawhorn (Hidden Trait 3)',
            "27":'unicorn (Hidden Trait 3)',
            "28":'dragonwings (Hidden Trait 3)',
            "29":'alicorn (Hidden Trait 3)',
            "30":'wyrm (Hidden Trait 3)',
            "31":'WE31 (Hidden Trait 3)',
        },
        '32':{
            "0":'whixtensions (Dominant Trait)',
            "1":'wasntme (Dominant Trait)',
            "2":'wuvme (Dominant Trait)',
            "3":'gerbil (Dominant Trait)',
            "4":'confuzzled (Dominant Trait)',
            "5":'impish (Dominant Trait)',
            "6":'belch (Dominant Trait)',
            "7":'rollercoaster (Dominant Trait)',
            "8":'beard (Dominant Trait)',
            "9":'pouty (Dominant Trait)',
            "10":'saycheese (Dominant Trait)',
            "11":'grim (Dominant Trait)',
            "12":'fangtastic (Dominant Trait)',
            "13":'moue (Dominant Trait)',
            "14":'happygokitty (Dominant Trait)',
            "15":'soserious (Dominant Trait)',
            "16":'cheeky (Dominant Trait)',
            "17":'starstruck (Dominant Trait)',
            "18":'samwise (Dominant Trait)',
            "19":'ruhroh (Dominant Trait)',
            "20":'dali (Dominant Trait)',
            "21":'grimace (Dominant Trait)',
            "22":'majestic (Dominant Trait)',
            "23":'tongue (Dominant Trait)',
            "24":'yokel (Dominant Trait)',
            "25":'topoftheworld (Dominant Trait)',
            "26":'neckbeard (Dominant Trait)',
            "27":'satiated (Dominant Trait)',
            "28":'walrus (Dominant Trait)',
            "29":'struck (Dominant Trait)',
            "30":'delite (Dominant Trait)',
            "31":'MO31 (Dominant Trait)',
       },
        '33':{
            "0":'whixtensions (Hidden Trait 1)',
            "1":'wasntme (Hidden Trait 1)',
            "2":'wuvme (Hidden Trait 1)',
            "3":'gerbil (Hidden Trait 1)',
            "4":'confuzzled (Hidden Trait 1)',
            "5":'impish (Hidden Trait 1)',
            "6":'belch (Hidden Trait 1)',
            "7":'rollercoaster (Hidden Trait 1)',
            "8":'beard (Hidden Trait 1)',
            "9":'pouty (Hidden Trait 1)',
            "10":'saycheese (Hidden Trait 1)',
            "11":'grim (Hidden Trait 1)',
            "12":'fangtastic (Hidden Trait 1)',
            "13":'moue (Hidden Trait 1)',
            "14":'happygokitty (Hidden Trait 1)',
            "15":'soserious (Hidden Trait 1)',
            "16":'cheeky (Hidden Trait 1)',
            "17":'starstruck (Hidden Trait 1)',
            "18":'samwise (Hidden Trait 1)',
            "19":'ruhroh (Hidden Trait 1)',
            "20":'dali (Hidden Trait 1)',
            "21":'grimace (Hidden Trait 1)',
            "22":'majestic (Hidden Trait 1)',
            "23":'tongue (Hidden Trait 1)',
            "24":'yokel (Hidden Trait 1)',
            "25":'topoftheworld (Hidden Trait 1)',
            "26":'neckbeard (Hidden Trait 1)',
            "27":'satiated (Hidden Trait 1)',
            "28":'walrus (Hidden Trait 1)',
            "29":'struck (Hidden Trait 1)',
            "30":'delite (Hidden Trait 1)',
            "31":'MO31 (Hidden Trait 1)',
        },
        '34':{
            "0":'whixtensions (Hidden Trait 2)',
            "1":'wasntme (Hidden Trait 2)',
            "2":'wuvme (Hidden Trait 2)',
            "3":'gerbil (Hidden Trait 2)',
            "4":'confuzzled (Hidden Trait 2)',
            "5":'impish (Hidden Trait 2)',
            "6":'belch (Hidden Trait 2)',
            "7":'rollercoaster (Hidden Trait 2)',
            "8":'beard (Hidden Trait 2)',
            "9":'pouty (Hidden Trait 2)',
            "10":'saycheese (Hidden Trait 2)',
            "11":'grim (Hidden Trait 2)',
            "12":'fangtastic (Hidden Trait 2)',
            "13":'moue (Hidden Trait 2)',
            "14":'happygokitty (Hidden Trait 2)',
            "15":'soserious (Hidden Trait 2)',
            "16":'cheeky (Hidden Trait 2)',
            "17":'starstruck (Hidden Trait 2)',
            "18":'samwise (Hidden Trait 2)',
            "19":'ruhroh (Hidden Trait 2)',
            "20":'dali (Hidden Trait 2)',
            "21":'grimace (Hidden Trait 2)',
            "22":'majestic (Hidden Trait 2)',
            "23":'tongue (Hidden Trait 2)',
            "24":'yokel (Hidden Trait 2)',
            "25":'topoftheworld (Hidden Trait 2)',
            "26":'neckbeard (Hidden Trait 2)',
            "27":'satiated (Hidden Trait 2)',
            "28":'walrus (Hidden Trait 2)',
            "29":'struck (Hidden Trait 2)',
            "30":'delite (Hidden Trait 2)',
            "31":'MO31 (Hidden Trait 2)',
        },
        '35':{
            "0":'whixtensions (Hidden Trait 3)',
            "1":'wasntme (Hidden Trait 3)',
            "2":'wuvme (Hidden Trait 3)',
            "3":'gerbil (Hidden Trait 3)',
            "4":'confuzzled (Hidden Trait 3)',
            "5":'impish (Hidden Trait 3)',
            "6":'belch (Hidden Trait 3)',
            "7":'rollercoaster (Hidden Trait 3)',
            "8":'beard (Hidden Trait 3)',
            "9":'pouty (Hidden Trait 3)',
            "10":'saycheese (Hidden Trait 3)',
            "11":'grim (Hidden Trait 3)',
            "12":'fangtastic (Hidden Trait 3)',
            "13":'moue (Hidden Trait 3)',
            "14":'happygokitty (Hidden Trait 3)',
            "15":'soserious (Hidden Trait 3)',
            "16":'cheeky (Hidden Trait 3)',
            "17":'starstruck (Hidden Trait 3)',
            "18":'samwise (Hidden Trait 3)',
            "19":'ruhroh (Hidden Trait 3)',
            "20":'dali (Hidden Trait 3)',
            "21":'grimace (Hidden Trait 3)',
            "22":'majestic (Hidden Trait 3)',
            "23":'tongue (Hidden Trait 3)',
            "24":'yokel (Hidden Trait 3)',
            "25":'topoftheworld (Hidden Trait 3)',
            "26":'neckbeard (Hidden Trait 3)',
            "27":'satiated (Hidden Trait 3)',
            "28":'walrus (Hidden Trait 3)',
            "29":'struck (Hidden Trait 3)',
            "30":'delite (Hidden Trait 3)',
            "31":'MO31 (Hidden Trait 3)',
        },
        '36':{
            "0":'EN00 (Dominant Trait)',
            "1":'EN01 (Dominant Trait)',
            "2":'EN02 (Dominant Trait)',
            "3":'EN03 (Dominant Trait)',
            "4":'EN04 (Dominant Trait)',
            "5":'EN05 (Dominant Trait)',
            "6":'EN06 (Dominant Trait)',
            "7":'EN07 (Dominant Trait)',
            "8":'EN08 (Dominant Trait)',
            "9":'EN09 (Dominant Trait)',
            "10":'EN10 (Dominant Trait)',
            "11":'EN11 (Dominant Trait)',
            "12":'EN12 (Dominant Trait)',
            "13":'EN13 (Dominant Trait)',
            "14":'EN14 (Dominant Trait)',
            "15":'EN15 (Dominant Trait)',
            "16":'salty (Dominant Trait)',
            "17":'dune (Dominant Trait)',
            "18":'juju (Dominant Trait)',
            "19":'tinybox (Dominant Trait)',
            "20":'myparade (Dominant Trait)',
            "21":'finalfrontier (Dominant Trait)',
            "22":'metime (Dominant Trait)',
            "23":'drift (Dominant Trait)',
            "24":'secretgarden (Dominant Trait)',
            "25":'frozen (Dominant Trait)',
            "26":'roadtogold (Dominant Trait)',
            "27":'jacked (Dominant Trait)',
            "28":'floorislava (Dominant Trait)',
            "29":'prism (Dominant Trait)',
            "30":'junglebook (Dominant Trait)',
            "31":'EN31 (Dominant Trait)',
        },
        '37':{
            "0":'EN00 (Hidden Trait 1)',
            "1":'EN01 (Hidden Trait 1)',
            "2":'EN02 (Hidden Trait 1)',
            "3":'EN03 (Hidden Trait 1)',
            "4":'EN04 (Hidden Trait 1)',
            "5":'EN05 (Hidden Trait 1)',
            "6":'EN06 (Hidden Trait 1)',
            "7":'EN07 (Hidden Trait 1)',
            "8":'EN08 (Hidden Trait 1)',
            "9":'EN09 (Hidden Trait 1)',
            "10":'EN10 (Hidden Trait 1)',
            "11":'EN11 (Hidden Trait 1)',
            "12":'EN12 (Hidden Trait 1)',
            "13":'EN13 (Hidden Trait 1)',
            "14":'EN14 (Hidden Trait 1)',
            "15":'EN15 (Hidden Trait 1)',
            "16":'salty (Hidden Trait 1)',
            "17":'dune (Hidden Trait 1)',
            "18":'juju (Hidden Trait 1)',
            "19":'tinybox (Hidden Trait 1)',
            "20":'myparade (Hidden Trait 1)',
            "21":'finalfrontier (Hidden Trait 1)',
            "22":'metime (Hidden Trait 1)',
            "23":'drift (Hidden Trait 1)',
            "24":'secretgarden (Hidden Trait 1)',
            "25":'frozen (Hidden Trait 1)',
            "26":'roadtogold (Hidden Trait 1)',
            "27":'jacked (Hidden Trait 1)',
            "28":'floorislava (Hidden Trait 1)',
            "29":'prism (Hidden Trait 1)',
            "30":'junglebook (Hidden Trait 1)',
            "31":'EN31 (Hidden Trait 1)',
        },
        '38':{
            "0":'EN00 (Hidden Trait 2)',
            "1":'EN01 (Hidden Trait 2)',
            "2":'EN02 (Hidden Trait 2)',
            "3":'EN03 (Hidden Trait 2)',
            "4":'EN04 (Hidden Trait 2)',
            "5":'EN05 (Hidden Trait 2)',
            "6":'EN06 (Hidden Trait 2)',
            "7":'EN07 (Hidden Trait 2)',
            "8":'EN08 (Hidden Trait 2)',
            "9":'EN09 (Hidden Trait 2)',
            "10":'EN10 (Hidden Trait 2)',
            "11":'EN11 (Hidden Trait 2)',
            "12":'EN12 (Hidden Trait 2)',
            "13":'EN13 (Hidden Trait 2)',
            "14":'EN14 (Hidden Trait 2)',
            "15":'EN15 (Hidden Trait 2)',
            "16":'salty (Hidden Trait 2)',
            "17":'dune (Hidden Trait 2)',
            "18":'juju (Hidden Trait 2)',
            "19":'tinybox (Hidden Trait 2)',
            "20":'myparade (Hidden Trait 2)',
            "21":'finalfrontier (Hidden Trait 2)',
            "22":'metime (Hidden Trait 2)',
            "23":'drift (Hidden Trait 2)',
            "24":'secretgarden (Hidden Trait 2)',
            "25":'frozen (Hidden Trait 2)',
            "26":'roadtogold (Hidden Trait 2)',
            "27":'jacked (Hidden Trait 2)',
            "28":'floorislava (Hidden Trait 2)',
            "29":'prism (Hidden Trait 2)',
            "30":'junglebook (Hidden Trait 2)',
            "31":'EN31 (Hidden Trait 2)',
        },
        '39':{
            "0":'EN00 (Hidden Trait 3)',
            "1":'EN01 (Hidden Trait 3)',
            "2":'EN02 (Hidden Trait 3)',
            "3":'EN03 (Hidden Trait 3)',
            "4":'EN04 (Hidden Trait 3)',
            "5":'EN05 (Hidden Trait 3)',
            "6":'EN06 (Hidden Trait 3)',
            "7":'EN07 (Hidden Trait 3)',
            "8":'EN08 (Hidden Trait 3)',
            "9":'EN09 (Hidden Trait 3)',
            "10":'EN10 (Hidden Trait 3)',
            "11":'EN11 (Hidden Trait 3)',
            "12":'EN12 (Hidden Trait 3)',
            "13":'EN13 (Hidden Trait 3)',
            "14":'EN14 (Hidden Trait 3)',
            "15":'EN15 (Hidden Trait 3)',
            "16":'salty (Hidden Trait 3)',
            "17":'dune (Hidden Trait 3)',
            "18":'juju (Hidden Trait 3)',
            "19":'tinybox (Hidden Trait 3)',
            "20":'myparade (Hidden Trait 3)',
            "21":'finalfrontier (Hidden Trait 3)',
            "22":'metime (Hidden Trait 3)',
            "23":'drift (Hidden Trait 3)',
            "24":'secretgarden (Hidden Trait 3)',
            "25":'frozen (Hidden Trait 3)',
            "26":'roadtogold (Hidden Trait 3)',
            "27":'jacked (Hidden Trait 3)',
            "28":'floorislava (Hidden Trait 3)',
            "29":'prism (Hidden Trait 3)',
            "30":'junglebook (Hidden Trait 3)',
            "31":'EN31 (Hidden Trait 3)',
        },
        '40':{
            "0":'SE00 (Dominant Trait)',
            "1":'SE01 (Dominant Trait)',
            "2":'SE02 (Dominant Trait)',
            "3":'SE03 (Dominant Trait)',
            "4":'SE04 (Dominant Trait)',
            "5":'SE05 (Dominant Trait)',
            "6":'SE06 (Dominant Trait)',
            "7":'SE07 (Dominant Trait)',
            "8":'SE08 (Dominant Trait)',
            "9":'SE09 (Dominant Trait)',
            "10":'SE10 (Dominant Trait)',
            "11":'SE11 (Dominant Trait)',
            "12":'SE12 (Dominant Trait)',
            "13":'SE13 (Dominant Trait)',
            "14":'SE14 (Dominant Trait)',
            "15":'SE15 (Dominant Trait)',
            "16":'SE16 (Dominant Trait)',
            "17":'SE17 (Dominant Trait)',
            "18":'SE18 (Dominant Trait)',
            "19":'SE19 (Dominant Trait)',
            "20":'SE20 (Dominant Trait)',
            "21":'SE21 (Dominant Trait)',
            "22":'SE22 (Dominant Trait)',
            "23":'SE23 (Dominant Trait)',
            "24":'SE24 (Dominant Trait)',
            "25":'SE25 (Dominant Trait)',
            "26":'SE26 (Dominant Trait)',
            "27":'SE27 (Dominant Trait)',
            "28":'SE28 (Dominant Trait)',
            "29":'SE29 (Dominant Trait)',
            "30":'SE30 (Dominant Trait)',
            "31":'SE31 (Dominant Trait)',
        },
        '41':{
            "0":'SE00 (Hidden Trait 1)',
            "1":'SE01 (Hidden Trait 1)',
            "2":'SE02 (Hidden Trait 1)',
            "3":'SE03 (Hidden Trait 1)',
            "4":'SE04 (Hidden Trait 1)',
            "5":'SE05 (Hidden Trait 1)',
            "6":'SE06 (Hidden Trait 1)',
            "7":'SE07 (Hidden Trait 1)',
            "8":'SE08 (Hidden Trait 1)',
            "9":'SE09 (Hidden Trait 1)',
            "10":'SE10 (Hidden Trait 1)',
            "11":'SE11 (Hidden Trait 1)',
            "12":'SE12 (Hidden Trait 1)',
            "13":'SE13 (Hidden Trait 1)',
            "14":'SE14 (Hidden Trait 1)',
            "15":'SE15 (Hidden Trait 1)',
            "16":'SE16 (Hidden Trait 1)',
            "17":'SE17 (Hidden Trait 1)',
            "18":'SE18 (Hidden Trait 1)',
            "19":'SE19 (Hidden Trait 1)',
            "20":'SE20 (Hidden Trait 1)',
            "21":'SE21 (Hidden Trait 1)',
            "22":'SE22 (Hidden Trait 1)',
            "23":'SE23 (Hidden Trait 1)',
            "24":'SE24 (Hidden Trait 1)',
            "25":'SE25 (Hidden Trait 1)',
            "26":'SE26 (Hidden Trait 1)',
            "27":'SE27 (Hidden Trait 1)',
            "28":'SE28 (Hidden Trait 1)',
            "29":'SE29 (Hidden Trait 1)',
            "30":'SE30 (Hidden Trait 1)',
            "31":'SE31 (Hidden Trait 1)',
        },
        '42':{
            "0":'SE00 (Hidden Trait 2)',
            "1":'SE01 (Hidden Trait 2)',
            "2":'SE02 (Hidden Trait 2)',
            "3":'SE03 (Hidden Trait 2)',
            "4":'SE04 (Hidden Trait 2)',
            "5":'SE05 (Hidden Trait 2)',
            "6":'SE06 (Hidden Trait 2)',
            "7":'SE07 (Hidden Trait 2)',
            "8":'SE08 (Hidden Trait 2)',
            "9":'SE09 (Hidden Trait 2)',
            "10":'SE10 (Hidden Trait 2)',
            "11":'SE11 (Hidden Trait 2)',
            "12":'SE12 (Hidden Trait 2)',
            "13":'SE13 (Hidden Trait 2)',
            "14":'SE14 (Hidden Trait 2)',
            "15":'SE15 (Hidden Trait 2)',
            "16":'SE16 (Hidden Trait 2)',
            "17":'SE17 (Hidden Trait 2)',
            "18":'SE18 (Hidden Trait 2)',
            "19":'SE19 (Hidden Trait 2)',
            "20":'SE20 (Hidden Trait 2)',
            "21":'SE21 (Hidden Trait 2)',
            "22":'SE22 (Hidden Trait 2)',
            "23":'SE23 (Hidden Trait 2)',
            "24":'SE24 (Hidden Trait 2)',
            "25":'SE25 (Hidden Trait 2)',
            "26":'SE26 (Hidden Trait 2)',
            "27":'SE27 (Hidden Trait 2)',
            "28":'SE28 (Hidden Trait 2)',
            "29":'SE29 (Hidden Trait 2)',
            "30":'SE30 (Hidden Trait 2)',
            "31":'SE31 (Hidden Trait 2)',
        },
        '43':{
            "0":'SE00 (Hidden Trait 3)',
            "1":'SE01 (Hidden Trait 3)',
            "2":'SE02 (Hidden Trait 3)',
            "3":'SE03 (Hidden Trait 3)',
            "4":'SE04 (Hidden Trait 3)',
            "5":'SE05 (Hidden Trait 3)',
            "6":'SE06 (Hidden Trait 3)',
            "7":'SE07 (Hidden Trait 3)',
            "8":'SE08 (Hidden Trait 3)',
            "9":'SE09 (Hidden Trait 3)',
            "10":'SE10 (Hidden Trait 3)',
            "11":'SE11 (Hidden Trait 3)',
            "12":'SE12 (Hidden Trait 3)',
            "13":'SE13 (Hidden Trait 3)',
            "14":'SE14 (Hidden Trait 3)',
            "15":'SE15 (Hidden Trait 3)',
            "16":'SE16 (Hidden Trait 3)',
            "17":'SE17 (Hidden Trait 3)',
            "18":'SE18 (Hidden Trait 3)',
            "19":'SE19 (Hidden Trait 3)',
            "20":'SE20 (Hidden Trait 3)',
            "21":'SE21 (Hidden Trait 3)',
            "22":'SE22 (Hidden Trait 3)',
            "23":'SE23 (Hidden Trait 3)',
            "24":'SE24 (Hidden Trait 3)',
            "25":'SE25 (Hidden Trait 3)',
            "26":'SE26 (Hidden Trait 3)',
            "27":'SE27 (Hidden Trait 3)',
            "28":'SE28 (Hidden Trait 3)',
            "29":'SE29 (Hidden Trait 3)',
            "30":'SE30 (Hidden Trait 3)',
            "31":'SE31 (Hidden Trait 3)',
        },
        '44':{
            "0":'PU00 (Dominant Trait)',
            "1":'PU01 (Dominant Trait)',
            "2":'PU02 (Dominant Trait)',
            "3":'PU03 (Dominant Trait)',
            "4":'PU04 (Dominant Trait)',
            "5":'PU05 (Dominant Trait)',
            "6":'PU06 (Dominant Trait)',
            "7":'PU07 (Dominant Trait)',
            "8":'PU08 (Dominant Trait)',
            "9":'PU09 (Dominant Trait)',
            "10":'PU10 (Dominant Trait)',
            "11":'PU11 (Dominant Trait)',
            "12":'PU12 (Dominant Trait)',
            "13":'PU13 (Dominant Trait)',
            "14":'PU14 (Dominant Trait)',
            "15":'PU15 (Dominant Trait)',
            "16":'PU16 (Dominant Trait)',
            "17":'PU17 (Dominant Trait)',
            "18":'PU18 (Dominant Trait)',
            "19":'PU19 (Dominant Trait)',
            "20":'PU20 (Dominant Trait)',
            "21":'PU21 (Dominant Trait)',
            "22":'PU22 (Dominant Trait)',
            "23":'PU23 (Dominant Trait)',
            "24":'PU24 (Dominant Trait)',
            "25":'PU25 (Dominant Trait)',
            "26":'PU26 (Dominant Trait)',
            "27":'PU27 (Dominant Trait)',
            "28":'PU28 (Dominant Trait)',
            "29":'PU29 (Dominant Trait)',
            "30":'PU30 (Dominant Trait)',
            "31":'PU31 (Dominant Trait)',
        },
        '45':{
            "0":'PU00 (Hidden Trait 1)',
            "1":'PU01 (Hidden Trait 1)',
            "2":'PU02 (Hidden Trait 1)',
            "3":'PU03 (Hidden Trait 1)',
            "4":'PU04 (Hidden Trait 1)',
            "5":'PU05 (Hidden Trait 1)',
            "6":'PU06 (Hidden Trait 1)',
            "7":'PU07 (Hidden Trait 1)',
            "8":'PU08 (Hidden Trait 1)',
            "9":'PU09 (Hidden Trait 1)',
            "10":'PU10 (Hidden Trait 1)',
            "11":'PU11 (Hidden Trait 1)',
            "12":'PU12 (Hidden Trait 1)',
            "13":'PU13 (Hidden Trait 1)',
            "14":'PU14 (Hidden Trait 1)',
            "15":'PU15 (Hidden Trait 1)',
            "16":'PU16 (Hidden Trait 1)',
            "17":'PU17 (Hidden Trait 1)',
            "18":'PU18 (Hidden Trait 1)',
            "19":'PU19 (Hidden Trait 1)',
            "20":'PU20 (Hidden Trait 1)',
            "21":'PU21 (Hidden Trait 1)',
            "22":'PU22 (Hidden Trait 1)',
            "23":'PU23 (Hidden Trait 1)',
            "24":'PU24 (Hidden Trait 1)',
            "25":'PU25 (Hidden Trait 1)',
            "26":'PU26 (Hidden Trait 1)',
            "27":'PU27 (Hidden Trait 1)',
            "28":'PU28 (Hidden Trait 1)',
            "29":'PU29 (Hidden Trait 1)',
            "30":'PU30 (Hidden Trait 1)',
            "31":'PU31 (Hidden Trait 1)',
        },
        '46':{
            "0":'PU00 (Hidden Trait 2)',
            "1":'PU01 (Hidden Trait 2)',
            "2":'PU02 (Hidden Trait 2)',
            "3":'PU03 (Hidden Trait 2)',
            "4":'PU04 (Hidden Trait 2)',
            "5":'PU05 (Hidden Trait 2)',
            "6":'PU06 (Hidden Trait 2)',
            "7":'PU07 (Hidden Trait 2)',
            "8":'PU08 (Hidden Trait 2)',
            "9":'PU09 (Hidden Trait 2)',
            "10":'PU10 (Hidden Trait 2)',
            "11":'PU11 (Hidden Trait 2)',
            "12":'PU12 (Hidden Trait 2)',
            "13":'PU13 (Hidden Trait 2)',
            "14":'PU14 (Hidden Trait 2)',
            "15":'PU15 (Hidden Trait 2)',
            "16":'PU16 (Hidden Trait 2)',
            "17":'PU17 (Hidden Trait 2)',
            "18":'PU18 (Hidden Trait 2)',
            "19":'PU19 (Hidden Trait 2)',
            "20":'PU20 (Hidden Trait 2)',
            "21":'PU21 (Hidden Trait 2)',
            "22":'PU22 (Hidden Trait 2)',
            "23":'PU23 (Hidden Trait 2)',
            "24":'PU24 (Hidden Trait 2)',
            "25":'PU25 (Hidden Trait 2)',
            "26":'PU26 (Hidden Trait 2)',
            "27":'PU27 (Hidden Trait 2)',
            "28":'PU28 (Hidden Trait 2)',
            "29":'PU29 (Hidden Trait 2)',
            "30":'PU30 (Hidden Trait 2)',
            "31":'PU31 (Hidden Trait 2)',
        },
        '47':{
            "0":'PU00 (Hidden Trait 3)',
            "1":'PU01 (Hidden Trait 3)',
            "2":'PU02 (Hidden Trait 3)',
            "3":'PU03 (Hidden Trait 3)',
            "4":'PU04 (Hidden Trait 3)',
            "5":'PU05 (Hidden Trait 3)',
            "6":'PU06 (Hidden Trait 3)',
            "7":'PU07 (Hidden Trait 3)',
            "8":'PU08 (Hidden Trait 3)',
            "9":'PU09 (Hidden Trait 3)',
            "10":'PU10 (Hidden Trait 3)',
            "11":'PU11 (Hidden Trait 3)',
            "12":'PU12 (Hidden Trait 3)',
            "13":'PU13 (Hidden Trait 3)',
            "14":'PU14 (Hidden Trait 3)',
            "15":'PU15 (Hidden Trait 3)',
            "16":'PU16 (Hidden Trait 3)',
            "17":'PU17 (Hidden Trait 3)',
            "18":'PU18 (Hidden Trait 3)',
            "19":'PU19 (Hidden Trait 3)',
            "20":'PU20 (Hidden Trait 3)',
            "21":'PU21 (Hidden Trait 3)',
            "22":'PU22 (Hidden Trait 3)',
            "23":'PU23 (Hidden Trait 3)',
            "24":'PU24 (Hidden Trait 3)',
            "25":'PU25 (Hidden Trait 3)',
            "26":'PU26 (Hidden Trait 3)',
            "27":'PU27 (Hidden Trait 3)',
            "28":'PU28 (Hidden Trait 3)',
            "29":'PU29 (Hidden Trait 3)',
            "30":'PU30 (Hidden Trait 3)',
            "31":'PU31 (Hidden Trait 3)',
        }
    },

    //////////////////////////////////////////////////////////////////////
    // Navigation
    //////////////////////////////////////////////////////////////////////

    showHomePageDivs: function(){
        App.fetchAdvertisingSlotContents(0);
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
        App.fetchAdvertisingSlotContents(0);
        App.hideHomePageDivs();
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.showAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
    },

    retreatFromNoMainnetOrMetamaskScreen: function(){
        App.hideAllDivsInClass('noMainnetOrMetamaskDetectedDiv');
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.showHomePageDivs();
    },

    proceedToSiteUnderMaintenance: function(){
        App.hideHomePageDivs();
        App.fetchAdvertisingSlotContents();
        App.hideAllDivsInClass('connectToWeb3AccountLockedMessage');
        App.showAllDivsInClass('siteUnderMaintenance');
    },

    titleButtonPressed: function(){
        /*if(window.web3.eth.accounts[0] !== undefined){
            App.retreatToHomeScreen();
        }*/
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
        App.hideAllDivsInClass('advertiseKittiesSection');
        App.hideAllDivsInClass('kittyBountiesSection');
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
        App.hideAllDivsInClass('viewYourWCKBalanceSection');
        App.hideAllDivsInClass('buyKittyWithWCKSection');
        App.hideAllDivsInClass('advertiseKittiesSection');
        App.hideAllDivsInClass('kittyBountiesSection');
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
        App.fetchAdvertisingSlotContents(0);
        window.history.pushState({}, "", "");
        App.updateKittyToTokenInputBoxes();
        App.hideAllDivsInClass('kittyToTokenErrorDuplicateKittyIDEntered');
        App.showAllDivsInClass('kittyToTokenSection');
    },

    proceedToTokenForSpecificKittySection: function(){
        App.hideHomePageDivs();
        App.fetchAdvertisingSlotContents(0);

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
        App.fetchAdvertisingSlotContents(0);
        window.history.pushState({}, "", "");
        App.getWCKBalanceForUser();
        App.showAllDivsInClass('viewYourWCKBalanceSection');
    },

    proceedToBuyKittyWithWCK: function(){
        App.hideHomePageDivs();
        App.fetchAdvertisingSlotContents(0);
        window.history.pushState({}, "", "");
        document.getElementById('enableWCKKittyBuyingButton').classList.remove('btn-default');
        document.getElementById('enableWCKKittyBuyingButton').classList.add('btn-primary');
        document.getElementById('enableWCKKittyBuyingButton').href = "javascript:App.enableApprovalButtonPressed('wckKittyBuyerContract','enableWCKKittyBuyingButton');"
        document.getElementById('kittyIsForSaleWCKPriceText').innerText = "";
        document.getElementById('buyKittyWithWCKIDBox').value = '';
        App.Globals.currentKittyBuyPriceInWCK = undefined;
        App.hideAllDivsInClass('kittyNotForSaleError');
        App.hideAllDivsInClass('wckKittyBuyingNotEnabled');
        App.hideAllDivsInClass('wckKittyBuyingEnabled');
        App.showAllDivsInClass('loadingWCKKittyBuyingApproval');
        App.showAllDivsInClass('buyKittyWithWCKSection');
        App.showAllDivsInClass('wckKittyBuyingContract');
        App.getWCKApprovedForContractForUser('wckKittyBuyerContract');
    },

    proceedToAdvertiseKittiesSection: function(){
        App.hideHomePageDivs();
        App.fetchAdvertisingSlotContents(0);
        window.history.pushState({}, "", "");
        document.getElementById('enableWCKAdsButton').classList.remove('btn-default');
        document.getElementById('enableWCKAdsButton').classList.add('btn-primary');
        document.getElementById('enableWCKAdsButton').href = "javascript:App.enableApprovalButtonPressed('wckAdsContract','enableWCKAdsButton');"
        document.getElementById('kittyIsForSaleWCKPriceText').innerText = "";
        document.getElementById('wckAdsKittyIDBox').value = '';
        document.getElementById('wckAdsPriceBox').value = '';
        App.hideAllDivsInClass('wckAdsBuyingEnabled');
        App.hideAllDivsInClass('wckAdsBuyingNotEnabled');
        App.hideAllDivsInClass('wckAdsBuyingOwnedByUser');
        App.hideAllDivsInClass('youDoNotOwnKittyError');
        App.hideAllDivsInClass('wckAdsPriceMessage');
        App.showAllDivsInClass('loadingWckAdsApproval');
        App.showAllDivsInClass('advertiseKittiesSection');
        App.getWCKApprovedForContractForUser('wckAdsContract');
    },

    proceedToKittyBountiesSection: function(){
        App.hideHomePageDivs();
        App.fetchAdvertisingSlotContents(0);
        window.history.pushState({}, "", "");
        document.getElementById('enableWCKKittyBountiesButton').classList.remove('btn-default');
        document.getElementById('enableWCKKittyBountiesButton').classList.add('btn-primary');
        document.getElementById('enableWCKKittyBountiesButton').href = "javascript:App.enableApprovalButtonPressed('wckKittyBounties','enableWCKKittyBountiesButton');"
        //document.getElementById('kittyIsForSaleWCKPriceText').innerText = "";
        //document.getElementById('buyKittyWithWCKIDBox').value = '';
        //App.Globals.currentKittyBuyPriceInWCK = undefined;
        App.hideAllDivsInClass('kittyNotForSaleError');
        App.hideAllDivsInClass('wckKittyBoutiesNotEnabled');
        App.hideAllDivsInClass('wckKittyBountiesEnabled');
        App.showAllDivsInClass('loadingWCKKittyBountiesApproval');
        App.showAllDivsInClass('kittyBountiesSection');
        App.showAllDivsInClass('wckKittyBountiesContract');
        App.showKittyBountiesHomePageDivs();
        App.getWCKApprovedForContractForUser('wckKittyBounties');
    },

    //////////////////////////////////////////////////////////////////////
    // Helper Functions
    //////////////////////////////////////////////////////////////////////

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

    toWei: function(eth, decimals) {
		return new BigNumber(new BigNumber(String(eth)).times(new BigNumber(10 ** decimals)).toFixed(0, BigNumber.ROUND_UP));
	},
};

window.onload = function() {
    App.checkWhetherWeb3HasBeenInitialized();
};
