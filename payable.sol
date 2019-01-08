pragma solidity ^0.4.24;
contract logging {
    event Params(uint _BasicRate ) ;  
}

contract OwnerAble {
    
    address owner ; 
    
    constructor () public {
        owner = msg.sender; 
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

}

contract ethTransfer is OwnerAble,logging {
   address feeAddr  ;
   uint BasicRate ; 
   constructor ( ) public {
      feeAddr =  owner ;
      BasicRate = 0 ; 
 }

function setParams(uint newBasisPoints ) public onlyOwner {
        require(newBasisPoints <  100 );
        BasicRate = newBasisPoints;
        emit Params(BasicRate);
}
    
function setFeeAddress ( address _feeAddr ) public onlyOwner { 
     require (_feeAddr != address(0)) ; 
     feeAddr = _feeAddr ; 
}

function send(address _receiver)  public  payable   {
   uint256 fee = msg.value*BasicRate/25000 ;
   address(feeAddr).transfer(fee)  ; 
   uint256 totalTran =  msg.value - fee ;
   address(_receiver).transfer(totalTran);
}
  
   
}
