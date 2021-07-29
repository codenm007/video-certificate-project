//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Owner
 * @dev Set & change owner
 */
 
 struct Certificate {
     string video_id;
     string video_title;
     string video_author;
     string video_iso_timestamp;
 }
 
  struct Owner {
     string Owner_name;
     string Owner_email;
     string Owner_user_id;
 }
 
contract GenerateCertificate {
    

    address private owner;
    Certificate public video_certificate;
    Owner public video_owner;
   
    
    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    
    // modifier to check if caller is owner
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    
    constructor(string memory _video_id, string memory _video_title,string memory _video_author,string memory _video_iso_timestamp,string memory _owner_name,string memory _owner_email,string memory _owner_user_id) {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
        
        //initalising the certificate details struct certificate
        video_certificate.video_id = _video_id;
        video_certificate.video_title = _video_title;
        video_certificate.video_author = _video_author;
        video_certificate.video_iso_timestamp = _video_iso_timestamp;
        
        //initalising owner details
        video_owner.Owner_name = _owner_name;
        video_owner.Owner_email = _owner_email;
        video_owner.Owner_user_id = _owner_user_id;
        
    }


    // function getOwner() external view returns (address) {
    //     return owner;
    // }
    
    // function get_certificate_info() public view returns (struct video_certificate memory){
    //     return video_certificate;
    // }
        
}