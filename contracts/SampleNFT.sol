// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SampleNFT is ERC721 {
    /**************************************
     * ERC-721 Setup Methods for Testing
     **************************************/

    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    //pass through constructor, remove?

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    /// wrapper on minting new 721
    function mint721(address _to) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(_to, tokenId);
        return _tokenIdCounter.current();
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://ipfs.io/ipfs/Qmcfq18jRkuuANM5oY7PzHnWQGnwYNudEfQpMo12LdVkXB";
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(baseURI)
                )
                : "";
    }
}
