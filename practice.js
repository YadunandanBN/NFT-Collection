// create a variable to hold your NFT's

let collectionOfNFT=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name,id,color,creator) {
    const objectNFT={
        nameNFT:name,
        nftId:id,
        nftColor:color,
        createdBy:creator
    }
    collectionOfNFT.push(objectNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i=0;i<collectionOfNFT.length;i++){
        console.log(collectionOfNFT[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("The total number of NFTs we have minted are " + collectionOfNFT.length)
}

// call your functions below this line


mintNFT("Yadu",2145,"grey","Yadunandan");
mintNFT("Isabel",5555,"brown","Isabel Sieh");
mintNFT("Ihtal",4966,"orange","alam");
mintNFT("Charlie",777,"cream","Dharma");
listNFTs();
getTotalSupply();