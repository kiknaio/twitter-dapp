// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Poster {
    event NewPost(address indexed user, string content, string indexed tag);

    function post(string calldata content, string calldata tag) public {
        emit NewPost(msg.sender, content, tag);
    }
}
